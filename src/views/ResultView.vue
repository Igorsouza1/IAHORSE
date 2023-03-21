<template>
        <div class="card m-auto mt-2" style="width: 90%;">
            <div class="card-body">
                <div class="classCavalo">
                    <h4 class="card-title">Classificação</h4>
                    <h2>{{qualidade}}</h2>
                </div>
                <hr class="container-card">
                <p class="card-text">Altura da Cernelha: {{comprimentoCernelha}} </p>
                <p class="card-text">Altura do Dorso: {{alturaDoDorso}} </p>
                <p class="card-text">Altura da Garupa: {{alturaDaGarupa}} </p>
                <p class="card-text">Comprimento do Corpo: {{comprimentoDoCorpo}} </p>
                <p class="card-text">Comprimento da Espadua: {{comprimentoDaEspadua}} </p>
                <p class="card-text">comprimento dorsoLombar: {{comprimentoDorsoLombar}} </p>
                <p class="card-text">Largura do peito: {{larguraDoPeito}} </p>
                <p class="card-text">Largura das Ancas: {{larguraAncas}} </p>
                <p class="card-text">Perimetro do Torax: {{larguraDoTorax}} </p>
                <div class="novasMeddias">
                    <a href="/#/classificador" class="card-link btn btn-primary mt-5">Novas medidas</a>
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
                    // Aqui você pode adicionar outras propriedades conforme necessário
                } else {
                    console.log('A tabela está vazia.');
                }
        }
    }
}
</script>
<style scoped>
    .classCavalo{
        text-align: center;
    }   
    .validarMedidas{
        text-align: center;
    }

    .buttonAvaliacao{
        display: flex;
        justify-content: center;
    }

    #buttonCorreto{
        color: black;
        background-color: green;
        width: 5rem;
        height: 3rem;
        font-weight: bold;
        border: none;
        border-radius: 5px;
        margin-right: 10px;
    }

    #buttonErrado{
        color: black;
        background-color: red;
        width: 5rem;
        height: 3rem;
        font-weight: bold;
        border: none;
        border-radius: 5px;
        margin-left: 10px;
    }

    .novasMeddias{
        text-align: center;
    }
</style>