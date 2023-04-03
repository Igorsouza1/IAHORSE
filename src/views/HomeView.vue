<template>
    <section class="hero">
      <div class="hero-content">
        <h2 class="hero-title">Cavalo Pantaneiro um tesouro nacional</h2>
        <p class="hero-headline">Uma raça de equino única e exuberante, originária das planícies alagadas do Pantanal.</p>
      </div>
    </section>
    <section class="about">
      <div class="about-content">
        <h1 class="about-title">Cavalo Pantaneiro</h1>
        <div class="cards">
        <div class="card">
          <img src="../assets/cavalo-icone.svg" alt="ícone" class="icone">
          <p class="texto"> O cavalo pantaneiro é uma raça adaptada ao ambiente do Pantanal.
            Resultado da seleção natural ao longo dos anos.
             </p>
        </div>
        <div class="card">
          <img src="../assets/casco.png" alt="ícone" class="icone">
          <p class="texto"> Suportam altas temperaturas e enchentes, 
            têm cascos fortes para se locomoverem em terrenos pantanosos.</p>
        </div>
        <div class="card">
          <img src="../assets/horse.png" alt="ícone" class="icone">
          <p class="texto">São utilizados para trabalho em fazendas e para
             cavalgadas na região, além de serem considerados símbolos culturais do Brasil.</p>
        </div>
      </div>
      </div>
    </section>
    <section class="caract">
    <div class="caract-section">
        <h1 class="caract-title">Preservação</h1>
        <p class="about-text">O maior problema para a raça é a sua preservação e 
          classificação genética, devido à muitos anos de cruzamentos
           inautêntico. Esta situação resultou em uma extrema diversidade de
            tipos, tanto morfológicos como de qualidade.<br> <br>
          O padrão da raça foi definido pela Associação Brasileira 
          de Criadores de Cavalos Pantaneiros (ABCCP), criada em 1972.
           Desde a formação da raça, os criadores vêm selecionando e melhorando 
           esse animal, um dos aspectos mais selecionados é a conformação corporal.</p>
      </div>
    </section>
    <section class="app">
      <h1 class="app-title">Classificador</h1>
      <p class="app-text">
        O aplicativo "Pantanal Horse Classifier" classifica cavalos pantaneiros em baixa, 
        média e alta qualidade usando o algoritmo de machine learning KNN. <br> <br>Basta 
        informar as medidas do cavalo e o aplicativo faz a análise automaticamente, dando uma classificação
        precisa e confiável em segundos.<br><br> Com isso, criadores e entusiastas da raça podem 
        identificar facilmente os melhores cavalos para reprodução e preservação genética 
        da raça.
      </p>
    </section>
    <section class="info">
      <h1 class="info-title">Como tirar as medidas?</h1>
      <div class="medidas">
        <span>Altura da Cernelha (AC)</span>
        <p></p>
      </div>
      <div class="medidas">
        <span>altura na garupa (AG)</span>
        <p></p>
      </div>
      <div class="medidas">
        <span>Altura do dorso (AD)</span>
        <p></p>
      </div>
      <div class="medidas">
        <span>Comprimento do Corpo (CC)</span>
        <p></p>
      </div>
      <div class="medidas">
        <span>Comprimento da Espádua (CE)</span>
        <p></p>
      </div>
      <div class="medidas">
        <span>Compriemnto do Dorso Lombo (CDL)</span>
        <p></p>
      </div>
      <div class="medidas">
        <span>Largura do Peito (LP)</span>
        <p></p>
      </div>
      <div class="medidas">
        <span>Largura da Anca (LA)</span>
        <p></p>
      </div>
      <div class="medidas">
        <span>Perímetro Torácico (PT)</span>
        <p></p>
      </div>
    </section>

    <footer>
      <div class="footer-container"></div>
      <p>Empresa Brasileira de Pesquisa Agropecuária

      Parque Estação Biológica - PqEB, s/nº, Brasília, DF

      CEP 70770-901 / Telefone (61) 3448-4433</p>
      <p>
        Todos os direitos reservados, conforme Lei nº 9.610

        Portal Embrapa (Versão 3.136.0) p02
      </p>
    </footer>
  </template>
  <script>

  export default {
    name: 'HomeView'
  }
  </script>
  <style scoped>

@media (max-width: 749px) {
  .hero {
    background-image: url('../assets/cavalo9.jpeg');
    background-size: cover;
    background-position: center;
    padding: 2rem;
    height: 95vh;
    text-align: center;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 95%;
    background-color: rgba(0, 0, 0, 0.2); /* Aqui definimos a cor e a transparência do overlay */
  }
  
  .hero-content {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .hero-title {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 18rem;
    margin-top: 2rem;
  }
  
  .hero-headline {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: #fff;
    font-weight: 400;
  }

  .about{
    height:100%;
    width: 100%;
    text-align: center;
    padding: 1.25rem;
  }

  .about-title {
    font-size: 2rem;
    color: black;
    margin-bottom: 2.5rem;
    margin-top: 1rem;
  }

  .about-headline{
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: black;
    font-weight: 400;
    padding-top: 1.5rem;
    text-align: center;
    width: 100%;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,1);
    margin-bottom: 20px;
    border-top: 1px solid #002e34;
  }
  
  .icone {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  
  .texto {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }

  .caract{
    background-color: #004443;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 1.25rem;
  }


  .caract-title {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 2.5rem;
    margin-top: 1rem;
  }

  .about-text{
    color: #fff;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  .app{
    height: 550px;
    width: 100%;
    text-align: center;
    padding: 1.25rem;
  }

  .app-title{
    font-size: 2rem;
    color: black;
    margin-bottom: 2.5rem;
    margin-top: 1rem;
  }

  .app-text{
    color: black;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  .info{
    height: 100%;
    width: 100%;
    text-align: center;
  }

  .info-title{
    font-size: 2rem;
    color: black;
    margin-bottom: 2.5rem;
    margin-top: 1rem;
  }

  .medidas{
    width: 100%;
    padding: 2rem;
  }

  .medidas span{
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }

  footer{
    width: 100%;
    content: '';
    text-align: center;
    background: #004443;
    color: white;
    display: flex;
    
    padding-bottom: 100px;
  }

  .footer-container{
    width: 50%;
    
  }

  .footer-container p{ 
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }

}

@media (min-width: 750px) {
  .hero {
    background-image: url('../assets/cavalo9.jpeg');
    background-size: cover;
    background-position: center;
    padding: 2rem;
    height: 95vh;
    text-align: center;
}

.hero-content{
  color:#fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero::before {
    content: '';
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    height: 95%;
    background-color: rgba(0, 0, 0, 0.15); /* Aqui definimos a cor e a transparência do overlay */
  }

  .icone{
    width: 50px;
  }
  .about{
    height:100%;
    width: 100%;
    text-align: center;
    padding: 1.25rem;
  }

  .about-title {
    font-size: 2rem;
    color: black;
    margin-bottom: 2.5rem;
    margin-top: 1rem;
  }

  .about-headline{
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: black;
    font-weight: 400;
    padding-top: 1.5rem;
    width: 100%;
  }

  .cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .card {
    display: flex;
    align-items: center;
    background-color: white;
    width: 40%;
    margin: 1rem;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,2);
    margin-bottom: 20px;
    border-top: 1px solid black;
  }
  
  .icone {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  
  .texto {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }

  .caract{
    background-color: #004443;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 1.25rem;
  }

  .caract-section{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .caract-title {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 2.5rem;
    margin-top: 1rem;
  
  }

  .about-text{
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    display: flex;
    width: 60%;
  }

  .app{
    width: 100%;
    text-align: center;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid black;
  }


  .app-title{
    font-size: 2rem;
    color: black;
    margin-bottom: 2.5rem;
    margin-top: 1 rem;
  }

  .app-text{
    color: black;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    width: 60%;
  }

  .info{
    height: 100%;
    width: 100%;
    text-align: center;
  }

  .info-title{
    font-size: 2rem;
    color: black;
    margin-bottom: 2.5rem;
    margin-top: 1.5rem;
  }

  .medidas{
    width: 100%;
    padding: 2rem;
  }

  .medidas span{
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }

  footer{
    width: 100%;
    content: '';
    text-align: center;
    background: #004443;
    color: white;
    display: flex;
    
    padding-bottom: 100px;
  }

  .footer-container{
    width: 50%;
    
  }

  .footer-container p{ 
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }


}
  </style>