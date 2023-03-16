<template>
    <div class="history-contanier">
        <div class="history-headline">
            <h1>Historico</h1>
            <p>Historico de cavalos classificados</p>
        </div>
        <div class="history-assessment">
            <div class="assessment-info">
                <p>Medidas: x , y</p>
                <p>Média Qualidade</p>
            </div>
            <div class="assessment-icon">
                <img src="../assets/2.png" alt="">    
            </div>
        </div>
        <div class="history-assessment">
            <div class="assessment-info">
                <p>Medidas: x , y</p>
                <p>Média Qualidade</p>
            </div>
            <div class="assessment-icon">
                <img src="../assets/2.png" alt="">    
            </div>
        </div>
        <div class="history-assessment">
            <div class="assessment-info">
                <p>Medidas: x , y</p>
                <p>Média Qualidade</p>
            </div>
            <div class="assessment-icon">
                <img src="../assets/2.png" alt="">    
            </div>
        </div>
        <div class="history-assessment">
            <div class="assessment-info">
                <p>Medidas: x , y</p>
                <p>Média Qualidade</p>
            </div>
            <div class="assessment-icon">
                <img src="../assets/2.png" alt="">    
            </div>
        </div>
    
    </div>
</template>
<script>
export default {
    name: 'HistoryView'
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

    .history-assessment {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 80%;
        height: 100px;
        margin-top: 20px;
        padding: 10px;
        background-color: #f5f5f5;
        border-radius: 10px;
        border: 1px solid black;
    }
    .assessment-info {
        text-align: left;
        text-align: center;
        height: 100%;
    }
    .assessment-icon img{
        text-align: right;
        width: 40px;
    }
</style>