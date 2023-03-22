<template>
    <div class="history-contanier">
        <div class="history-headline">
            <h1>Historico</h1>
            <p>Historico de cavalos classificados</p>
        </div>
        <ul v-if="medidas.length > 0" class="history-list">
            <li @click="selectMedida(medida)" class="history-card" v-for="medida in medidas" :key="medida.id">
                CC: {{ medida.comprimentoDoCorpo }} - CE: {{ medida.comprimentoDaEspadua }} - 
                ...
                <span v-if="medida.classe === 2">Alta qualidade</span>
                <span v-if="medida.classe === 1">Media qualidade</span>
                <span v-if="medida.classe === 0">Baixa qualidade</span>
            </li>
        </ul>
            <p id="historyEmpty" v-else>Nenhum cavalo classificado</p>
        <ModalHistory v-if="showModal" @close="closeModal" :selectedMedida="selectedMedida" @deleted="handleDeleted"/>
        <div class="saveCsv">
            <button v-if="medidas.length > 0" @click="exportCSV()" class="saveCsvButton">Exportar CSV</button>
        </div>
    </div>
    
</template>
<script>
import db from '../functions/db.js'
import ModalHistory from '../components/ModalHistory.vue'

export default {
    name: 'HistoryView',
    components:{ ModalHistory},
    data(){
        return{
            medidas: [],
            showModal: false,
            selectedMedida: null,
        }
    },
    async created() {
    try {
      this.medidas = await db.medidas.toArray();
    } catch (error) {
      console.error('Erro ao buscar itens:', error);
    }
  },

    methods: {
        selectMedida(medida) {
            this.selectedMedida = medida;
            this.openModal();
        },
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        handleDeleted() {
            this.medidas = this.medidas.filter(medida => medida.id !== this.selectedMedida.id);
            this.closeModal();
        },
        async exportCSV() {
            try {
            // 1. Obter os itens do IndexedDB
            const items = await db.medidas.toArray();

            // 2. Converter os itens em uma string no formato CSV
            const header = ['id', 'comprimentoDoCorpo', 'comprimentoDaEspadua', 'comprimentoDorsoLombar', 'larguraDoPeito', 'larguraDasAncas', 'alturaDaGarupa', 'alturaDaCernelha', 'alturaDoDorso', 'larguraDoTorax', 'sexo', 'classe'];
            const csvContent = items.map(item => {
                return `${item.id},${item.comprimentoDoCorpo},${item.comprimentoDaEspadua},${item.comprimentoDorsoLombar}, ${item.larguraDoPeito}, ${item.larguraDasAncas}, ${item.alturaDaGarupa}, ${item.alturaDaCernelha}, ${item.alturaDoDorso}, ${item.larguraDoTorax}, ${item.sexo},${item.classe}`;
            });
            csvContent.unshift(header.join(','));
            const csvString = csvContent.join('\n');

            // 3. Criar um arquivo Blob e um link de download para o arquivo CSV
            const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'medidas.csv');
            link.style.display = 'none';
            document.body.appendChild(link);

            // 4. Iniciar o download do arquivo CSV
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            } catch (error) {
            console.error('Erro ao exportar itens:', error);
            }
        },
    },
}
</script>
<style scoped>
    .history-contanier {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        margin-top: 20px;
        margin-bottom: 5rem;
    }

    .history-headline{
        text-align: center;
    }

    .history-headline h1 {
        font-size: 2rem;
        font-weight: 700;
    }

    .history-list {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .history-card {
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.12), 3px 1px 2px rgba(0, 0, 0, 0.24);
        padding: 20px;
        margin-bottom: 20px;
        width: 80%;
        max-width: 600px;
        transition: box-shadow 0.3s;

        display: flex;
        justify-content: space-between;
    }

    .history-card:hover {
        box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    #historyEmpty{
        transition: opacity 1s ease;
        height: 100%;
        color: red;
        font-weight: bold;
        font-size: 1.3rem;
    }

    .saveCsvButton{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        background-color: #3c4de7;
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 12px 24px;
        cursor: pointer;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease, box-shadow 0.3s ease; 
    }
</style>