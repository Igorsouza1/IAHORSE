<template >
    <div class="form-container">
        <Form class="m-2" @submit="predict()">
            <div class="title-container">
                <h1 class="form-title">Classificador</h1>
            </div>
            <div id="info-content">
                <p id="info" >Todas as medidas em Metros</p>
            </div>
            <div class="form-group mb-2">   
                <div class="form-inputs">
                    <label class="form-label" for="alturaDaCernelha">Altura da Cernelha:</label>
                    <Field v-decimal-input  type="number"  v-model="alturaDaCernelha" class="form-control"
                            id="alturaDaCernelha"  :rules="validate" 
                            name="alturaDaCernelha" />
                </div>
                <ErrorMessage name="alturaDaCernelha" style="color: red;" />
            </div>
            <div class="form-group mb-2">
                <div class="form-inputs">
                    <label class="form-label" for="alturaDoDorso">Altura do Dorso:</label>
                    <Field v-decimal-input type="number" v-model="alturaDoDorso" class="form-control"
                        id="alturaDoDorso"  :rules="validate"
                        name="alturaDoDorso" />
                </div>
                <ErrorMessage name="alturaDoDorso" style="color: red;" />
            </div>
            <div class="form-group mb-2">
                <div class="form-inputs">
                    <label class="form-label" for="alturaDaGarupa">Altura da Garupa:</label>
                    <Field v-decimal-input type="number" v-model="alturaDaGarupa" class="form-control"
                        id="alturaDaGarupa"  :rules="validate"
                        name="alturaDaGarupa" />
                </div>
                <ErrorMessage name="alturaDaGarupa" style="color: red;" />
            </div>
            <div class="form-group mb-2">
                <div class="form-inputs">
                    <label class="form-label" for="comprimentoDoCorpo">Comprimento do Corpo:</label>
                    <Field v-decimal-input type="number" v-model="comprimentoDoCorpo" class="form-control" id="comprimentoDoCorpo"
                         :rules="validate" name="comprimentoDoCorpo" />
                </div>
                <ErrorMessage name="comprimentoDoCorpo" style="color: red;" />
            </div>
            <div class="form-group mb-2">
                <div class="form-inputs">
                    <label class="form-label" for="comprimentoDaEspadua">Comprimento da Espadua:</label>
                    <Field v-decimal-input type="number" v-model="comprimentoDaEspadua" class="form-control" id="comprimentoDaEspadua"
                         :rules="validate" name="comprimentoDaEspadua" />
                </div>
                <ErrorMessage name="comprimentoDaEspadua" style="color: red;" />
            </div>
            <div class="form-group mb-2">
                <div class="form-inputs">
                    <label class="form-label" for="comprimentoDorsoLombar">Comprimento DorsoLombar:</label>
                    <Field v-decimal-input type="number" v-model="comprimentoDorsoLombar" class="form-control" id="comprimentoDorsoLombar"
                         :rules="validate" name="comprimentoDorsoLombar" />
                </div>
                <ErrorMessage name="comprimentoDorsoLombar" style="color: red;" />
            </div>
            <div class="form-group mb-2">
                <div class="form-inputs">
                    <label class="form-label" for="larguraDoPeito">Largura do Peito:</label>
                    <Field v-decimal-input type="number" v-model="larguraDoPeito" class="form-control" id="larguraDoPeito"
                         :rules="validate" name="larguraDoPeito" />
                </div>
                <ErrorMessage name="larguraDoPeito" style="color: red;" />
            </div>
            <div class="form-group mb-2">
                <div class="form-inputs">
                    <label class="form-label" for="larguraDasAncas">Largura das Ancas:</label>
                    <Field v-decimal-input type="number" v-model="larguraDasAncas" class="form-control" id="larguraDasAncas"
                         :rules="validate" name="larguraDasAncas" />
                </div>
                <ErrorMessage name="larguraDasAncas" style="color: red;" />
            </div>
            <div class="form-group mb-2">
                <div class="form-inputs">
                    <label class="form-label" for="larguraDoTorax">Perimetro do Torax:</label>
                    <Field v-decimal-input type="number" v-model="larguraDoTorax" class="form-control" id="larguraDoTorax"
                         :rules="validate" name="larguraDoTorax" />
                </div>
                <ErrorMessage name="larguraDoTorax" style="color: red;" />
            </div>
            
            <fieldset class="form-group mb-2">
                <div class="row">
                    <legend class="col-form-label col-sm-2 pt-0">Sexo:</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="sexo" id="macho" value="0"
                                v-model="sexo" checked>
                            <label class="form-check-label" for="Macho">
                                Macho
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="sexo" id="femea" value="1"
                                v-model="sexo">
                            <label class="form-check-label" for="femea">
                                Femea
                            </label>
                            <br />
                        </div>
                    </div>
                </div>
            </fieldset>
            <div class="row justify-content-center">
                <button type="submit" class="btn btn-primary custom-btn w-50 p-3">Calcular</button>
            </div>

        </Form>
    </div>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import KNN from 'ml-knn';
import medidasx from '../assets/medidas/medidasx'
import medidasy from '../assets/medidas/medidasy'
import db from '../functions/db'  
import DecimalInput from "../functions/decimal-input";


export default {

    name: 'FormView',
    components: {
        Form,
        Field,
        ErrorMessage
    },
    directives: {
        decimalInput: DecimalInput,
    },
    data() {
        return {   
                comprimentoDoCorpo: null,
                comprimentoDaEspadua: null,
                comprimentoDorsoLombar: null,
                larguraDoPeito: null,
                larguraDasAncas: null,
                alturaDaGarupa: null,
                alturaDaCernelha: null,
                alturaDoDorso: null,
                larguraDoTorax: null,
                sexo: 0,
                knn: null,
        }
    },
    created() {
        this.trainModel();
    },
    methods: {
        //Verifica se os campos do formulario estao vazios
        validate(value) {
            // if the field is empty
            if (!value) {
                return 'Este campo é obrigatório';
            }

            if(value > 2.5 || value < 0){
                return 'Informe uma medida valida'
            }
            // All is good
            return true;
        },

        trainModel(){
            this.knn = new KNN(medidasx, medidasy, {k: 3});
            console.log('Modelo treinado com Sucesso!')
        },

        async predict(){
            
            if(this.knn == null){
                this.trainModel()
            }
            
            const input = [this.comprimentoDoCorpo, this.comprimentoDaEspadua, this.comprimentoDorsoLombar,
            this.larguraDoPeito, this.larguraDasAncas, this.alturaDaGarupa, this.alturaDaCernelha, 
            this.alturaDoDorso, this.larguraDoTorax, this.sexo]
            
            const inputArray = input.map(parseFloat);
            const result = this.knn.predict(inputArray);

            await this.addData(inputArray, result)
            
            console.log(result)

            this.$router.push('/resultado');
        },
        
        async addData(arr, result) {
            await db.medidas.add({ comprimentoDoCorpo: arr[0], comprimentoDaEspadua: arr[1]
             , comprimentoDorsoLombar: arr[2], larguraDoPeito: arr[3],
             larguraDasAncas: arr[4], alturaDaGarupa: arr[5], alturaDaCernelha: arr[6], alturaDoDorso: arr[7]
            ,larguraDoTorax: arr[8], sexo: arr[9], classe: result});
            console.log('Data added');
        },
    },
 

}
</script>
<style scoped>
    #info{
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 0.9rem;
        color: #ffffff;
        background-color: #00755c;
        border-radius: 5px;
        padding: 8px;
        margin-top: 10px;
        margin-bottom: 1rem;
        display: inline-block;
        box-shadow: 0 2px 4px rgba(0,0,0,0.5);
    }

    .title-container{
        text-align: center;
    }

    .form-title{
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-weight: 700;
    }

    form{
        
        padding: 10px;
        padding-bottom: 100px;
        font-family: 'Poppins' sans-serif;
    }

    .form-group{
        padding-bottom: 1rem;
    }

    .form-inputs{
        display: flex;
        width: 100%;
        align-items: center;
        background-color: rgba(0, 46, 52, 0.07);
        padding: 0.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .form-label{
        font-weight: 700;
        width: 50%;
    }

    .form-control{
        width: 50%;
    }

  
    

    .form-control:focus {
    border-color: #00755c;
    box-shadow: 0 0 0 0.2rem rgba(0, 46, 52, 0.25)
}


    .form-check-input:checked {
    background-color: #00755c;
    border-color: #00755c;
    }

    .custom-btn {
    background-color: #00755c;
    border-color: #00755c;
    }

    .custom-btn:hover,
    .custom-btn:focus,
    .custom-btn:active {
    background-color: #005b4a;
    border-color: #005b4a;
    }

    #info-content{
        text-align: center;
    }

    @media (min-width: 750px) {
        .form-container{
            display: flex;
            justify-content: center;
        }
        
        form{
            width: 50%;
            margin: 0 auto;
        }
    }
</style>