<template>
    <div class="container">
        <div class="custom-card card m-auto" style="width: 90%;">
            <div class="card-body">
                <div class="classCavalo">
                    <h4 class="card-title">Classificação</h4>
                    <div class="result-container">
                        <h2>{{qualidade}}</h2>
                        <img v-if="qualidade === 'Baixa Qualidade'" src="../assets/numero-1.png" alt="Baixa Qualidade">
                        <img v-else-if="qualidade === 'Média Qualidade'" src="../assets/2.png" alt="Média Qualidade">
                        <img v-else-if="qualidade === 'Alta Qualidade'" src="../assets/3.png" alt="Alta Qualidade">
                    </div>
                </div>
                <div class="medidas-container">
                    <hr class="container-card">
                    
                    <div class="text-container">
                        <p class="card-text">Altura da Cernelha: </p><p> {{comprimentoCernelha}} </p>
                    </div>

                    <div class="text-container">
                        <p class="card-text">Altura do Dorso:</p> <p> {{alturaDoDorso}} </p>
                    </div>

                    <div class="text-container">
                        <p class="card-text">Altura da Garupa:</p><p> {{alturaDaGarupa}} </p>
                    </div>

                    <div class="text-container">
                        <p class="card-text">Comprimento do Corpo:</p><p> {{comprimentoDoCorpo}} </p>
                    </div>
                    
                    <div class="text-container">
                        <p class="card-text">Comprimento da Espadua:</p><p>  {{comprimentoDaEspadua}} </p>
                    </div>

                    <div class="text-container">
                        <p class="card-text">comprimento dorsoLombar:</p><p> {{comprimentoDorsoLombar}} </p>
                    </div>

                    <div class="text-container">
                        <p class="card-text">Largura do peito:</p><p> {{larguraDoPeito}} </p>
                    </div>

                    <div class="text-container">
                        <p class="card-text">Largura das Ancas:</p><p> {{larguraAncas}} </p>
                    </div>

                    <div class="text-container">
                        <p class="card-text">Perimetro do Torax:</p><p> {{larguraDoTorax}} </p>
                    </div>
                    <div class="text-container">
                        <p class="card-text card-sexo">{{ sexo }}</p>
                    </div>
                </div>
                <div class="novasMeddias">
                    <a href="/#/classificador" class="custom-btn">Novas medidas</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import db from '../functions/db'

export default {
    name: "ResultView",
    data() {
        return {
            comprimentoCernelha: null,
            alturaDoDorso: null,
            comprimentoDoCorpo: null,
            comprimentoDaEspadua: null,
            comprimentoDorsoLombar: null,
            larguraDoPeito: null,
            larguraAncas: null,
            alturaDaGarupa: null,
            larguraDoTorax: null,
            sexo: null,
            qualidade: ""
        }
    },
    mounted() {
        this.getLastItem()
    },
    
    methods: {
        async getLastItem() {
            try {
                const count = await db.medidas.count();
                const lastItem = await db.medidas.offset(count - 1).first();

                this.setMedidas(lastItem)
                if (lastItem) {
                console.log('Último item:', lastItem);
                return lastItem;
                } else {
                console.log('A tabela está vazia.');
                return null;
                }
            } catch (error) {
                console.error('Erro ao buscar o último item:', error);
                throw error;
            }
        },

        setMedidas(lastItem){
            if (lastItem) {
                    console.log('Último item:', lastItem);
                    this.comprimentoCernelha = lastItem.alturaDaCernelha;
                    this.alturaDoDorso = lastItem.alturaDoDorso;
                    this.alturaDaGarupa = lastItem.alturaDaGarupa;
                    this.comprimentoDoCorpo = lastItem.comprimentoDoCorpo;
                    this.comprimentoDaEspadua = lastItem.comprimentoDaEspadua;
                    this.comprimentoDorsoLombar = lastItem.comprimentoDorsoLombar;
                    this.larguraDoPeito = lastItem.larguraDoPeito;
                    this.larguraAncas = lastItem.larguraDasAncas;
                    this.larguraDoTorax = lastItem.larguraDoTorax;
                    if(lastItem.classe === 0){
                        this.qualidade = 'Baixa Qualidade'
                    }else if(lastItem.classe === 1){
                        this.qualidade = 'Média Qualidade'
                    }else if(lastItem.classe === 2){
                        this.qualidade = 'Alta Qualidade'
                    }

                    if(lastItem.sexo === 0){
                        this.sexo = 'Macho'
                    }else if(lastItem.sexo === 2){
                        this.sexo = 'Macho'
                    }
                    // Aqui você pode adicionar outras propriedades conforme necessário
                } else {
                    console.log('A tabela está vazia.');
                }
        }
    }
}
</script>
<style scoped>

    .container{
        margin-top: 1rem;
        margin-bottom: 6rem;
    }
    .classCavalo{
        text-align: center;
    }   

    .result-container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 0 auto;
        background-color: rgba(0, 117, 92, 0.5);
        border-radius: 10px;
        padding: 0.3rem 0.5rem;
        width: 90%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }

    .result-container h2{
        font-weight: 700;
        margin-bottom: 0;
    }

    .result-container img{
        width: 40px;
    }

    .buttonAvaliacao{
        display: flex;
        justify-content: center;
    }

    .custom-card{
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }


    .card-text{
        font-weight: 700;
    }

    .text-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3rem;
        padding-right: 1rem;
        padding-left: 1rem;
        border-radius: 5px;
        background-color: rgba(0, 46, 52, 0.07);
        margin-bottom: 0.8rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .text-container p{
        margin: 0;
    }

    .custom-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        background-color: #00755c;
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 12px 24px;
        margin: 10px;
        cursor: pointer;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease, box-shadow 0.3s ease; 
    }

    a{
        text-decoration: none;
    }

    .novasMeddias{
        text-align: center;
    }

</style>