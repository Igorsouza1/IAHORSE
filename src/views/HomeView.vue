<template>
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Cavalo<br> Pantaneiro</h1>
        <p class="hero-headline">Uma raça de equino única e exuberante, originária das planícies alagadas do Pantanal.</p>
      </div>
    </section>
    <section class="about">
      <div class="about-content">
        <h1 class="title">Cavalo Pantaneiro</h1>
        <div class="cards">
        
          <!-- CARD 1 -->
        <div class="card">
          <img src="../assets/cavalo-icone.svg" alt="ícone" class="icone">
          <p class="texto"> O cavalo pantaneiro, nativo do Pantanal brasileiro, 
            é conhecido por sua resistência e capacidade de adaptação às condições
             extremas do bioma, como áreas alagadas e altas temperaturas.
             </p>
        </div>

        <!-- CARD 2 -->
        <div class="card">
          <img src="../assets/casco.png" alt="ícone" class="icone">
          <p class="texto">Graças à sua morfologia, incluindo cascos largos e 
            fortes, essa raça possui notável habilidade para atravessar terrenos
             alagados e lamacentos, sendo um aliado importante para os trabalhadores
              rurais da região.</p>
        </div>

        <!-- CARD 3 -->
        <div class="card">
          <img src="../assets/horse.png" alt="ícone" class="icone">
          <p class="texto">A origem do cavalo pantaneiro remonta ao século XVI, 
            fruto do cruzamento de diversas raças, como o Andaluz e o G
            arrano, trazidas pelos colonizadores portugueses e espanhóis.</p>
        </div>

        <!-- CARD 4 -->
        <div class="card">
          <img src="../assets/cavalo-de-troia.png" alt="ícone" class="icone">
          <p class="texto">A pelagem do cavalo pantaneiro é diversificada, 
            podendo apresentar cores como tordilho, baio, alazão e outros 
            tons, além de possuir pelos curtos e sedosos, o que auxilia na 
            regulação térmica do animal.</p>
        </div>
      </div>
      </div>
      
    </section>
   
    <section class="caract">
      
      <div class="custom-shape-divider-top-1680795833">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

    <div class="caract-section">
      <h1 class="title caract-title">Preservação</h1>
      <div class="content-wrapper">
      <div class="caract-content">
        <p class="about-text">O maior problema para a raça é a sua preservação e 
          classificação genético. Muitos anos de cruzamentos
           inautêntico resultou em uma extrema diversidade de
            tipos, tanto morfológicos como de qualidade.<br> <br>
          O padrão da raça foi definido pela Associação Brasileira 
          de Criadores de Cavalos Pantaneiros (ABCCP).
           Desde a formação da raça, os criadores vêm selecionando e melhorando 
           esse animal, um dos aspectos selecionados é a conformação corporal.</p>
      </div>
      <div class="caract-img">
        <img src="../assets/cavalo5.jpeg" alt="">
      </div>
    </div>
      </div>


    </section>
    <section class="app">
      
      <div class="custom-shape-divider-top-1680800897">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>

      <h1 class="title app-title">Classificador</h1>
    <div class="app-wrapper">
      <div class="app-medidas">
        <p class="app-text">
          O aplicativo classifica os cavalos com base em sua conformação 
          corporal, utilizando 9 medidas distintas. Através 
          do algoritmo de aprendizado de máquina KNN, o aplicativo categoriza 
          os cavalos em baixa, média e alta qualidade.
        </p>
        <div class="img-container">
          <img src="../assets/cavalo-medidas.png" alt="">
        </div>
      </div>

      <div class="app-knn">
        <p class="app-text">O KNN, ou k-vizinhos mais próximos, é um método 
          de aprendizado de máquina que identifica a semelhança entre 
          itens. Ele verifica os "vizinhos" mais parecidos com o item desejado
           e decide sua categoria com base na maioria desses vizinhos.</p>
        <div class="img-container">
          <img src="../assets/knnalgo.png" alt="">
        </div>
      </div>
      
    </div>  

    <div class="custom-shape-divider-bottom-1680807326">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </section>

    <section class="info">
      <h1 class="title info-title">Como tirar as medidas?</h1>
      <div class="medidas-container">
        <div class="medidas" @click="toggle(0)">
          <span>Altura da Cernelha (AC) <font-awesome-icon :icon="expandedIndex === 0 ? 'chevron-left' : 'chevron-down'" class="icon" /></span>
          
          <transition name="expand">
            <div class="expand-container" v-if="expandedIndex === 0">
              <p>Altura do pé à cernelha</p>
              <img src="../assets/AlturadaCernelha.png" alt="Imagem da medida altura da cernelha" />
            </div>
          </transition>
        </div>
      </div>

      <div class="medidas-container">
        <div class="medidas" @click="toggle(1)">
          <span>Altura do Dorso (AD) <font-awesome-icon :icon="expandedIndex === 1 ? 'chevron-left' : 'chevron-down'" class="icon" /></span>
          
          <transition name="expand">
            <div class="expand-container" v-if="expandedIndex === 1">
              <p>Altura do pé à cernelha</p>
              <img src="../assets/AlturadaCernelha.png" alt="Imagem da medida altura da cernelha" />
            </div>
          </transition>
        </div>
      </div>

      <div class="medidas-container">
        <div class="medidas" @click="toggle(2)">
          <span>Altura da Garupa (AG) <font-awesome-icon :icon="expandedIndex === 2 ? 'chevron-left' : 'chevron-down'" class="icon" /></span>
          
          <transition name="expand">
            <div class="expand-container" v-if="expandedIndex === 2">
              <p>Altura do pé à cernelha</p>
              <img src="../assets/AlturadaCernelha.png" alt="Imagem da medida altura da cernelha" />
            </div>
          </transition>
        </div>
      </div>

      <div class="medidas-container">
        <div class="medidas" @click="toggle(3)">
          <span>Comprimento do Corpo (CC) <font-awesome-icon :icon="expandedIndex === 3 ? 'chevron-left' : 'chevron-down'" class="icon" /></span>
          
          <transition name="expand">
            <div class="expand-container" v-if="expandedIndex === 3">
              <p>Altura do pé à cernelha</p>
              <img src="../assets/AlturadaCernelha.png" alt="Imagem da medida altura da cernelha" />
            </div>
          </transition>
        </div>
      </div>

      <div class="medidas-container">
        <div class="medidas" @click="toggle(4)">
          <span>Comprimento da Espadua <font-awesome-icon :icon="expandedIndex === 4 ? 'chevron-left' : 'chevron-down'" class="icon" /></span>
          
          <transition name="expand">
            <div class="expand-container" v-if="expandedIndex === 4">
              <p>Altura do pé à cernelha</p>
              <img src="../assets/AlturadaCernelha.png" alt="Imagem da medida altura da cernelha" />
            </div>
          </transition>
        </div>
      </div>

      <div class="medidas-container">
        <div class="medidas" @click="toggle(5)">
          <span>Comprimento DorsoLombar (CDL)<font-awesome-icon :icon="expandedIndex === 5 ? 'chevron-left' : 'chevron-down'" class="icon" /></span>
          
          <transition name="expand">
            <div class="expand-container" v-if="expandedIndex === 5">
              <p>Altura do pé à cernelha</p>
              <img src="../assets/AlturadaCernelha.png" alt="Imagem da medida altura da cernelha" />
            </div>
          </transition>
        </div>
      </div>

      <div class="medidas-container">
        <div class="medidas" @click="toggle(6)">
          <span>Largura do Peito (LP) <font-awesome-icon :icon="expandedIndex === 6 ? 'chevron-left' : 'chevron-down'" class="icon" /></span>
          
          <transition name="expand">
            <div class="expand-container" v-if="expandedIndex === 6">
              <p>Altura do pé à cernelha</p>
              <img src="../assets/AlturadaCernelha.png" alt="Imagem da medida altura da cernelha" />
            </div>
          </transition>
        </div>
      </div>

      <div class="medidas-container">
        <div class="medidas" @click="toggle(7)">
          <span>Largura da Anca (LA) <font-awesome-icon :icon="expandedIndex === 7 ? 'chevron-left' : 'chevron-down'" class="icon" /></span>
          
          <transition name="expand">
            <div class="expand-container" v-if="expandedIndex === 7">
              <p>Altura do pé à cernelha</p>
              <img src="../assets/AlturadaCernelha.png" alt="Imagem da medida altura da cernelha" />
            </div>
          </transition>
        </div>
      </div>

      <div class="medidas-container">
        <div class="medidas" @click="toggle(8)">
          <span>Perimetro do Torax (PT) <font-awesome-icon :icon="expandedIndex === 8 ? 'chevron-left' : 'chevron-down'" class="icon" /></span>
          
          <transition name="expand">
            <div class="expand-container" v-if="expandedIndex === 8">
              <p>Altura do pé à cernelha</p>
              <img src="../assets/AlturadaCernelha.png" alt="Imagem da medida altura da cernelha" />
            </div>
          </transition>
        </div>
      </div>
    </section>

    <footer>
      <div class="footer-container"></div>
      <div class="footer-left">
      <img src="../assets/embrapalogo.jpg" alt="">
      <p>Empresa Brasileira de Pesquisa Agropecuária

      Parque Estação Biológica - PqEB, s/nº, Brasília, DF

      CEP 70770-901 / Telefone (61) 3448-4433</p>

    </div>

    <div class="footer-right">
      <img src="../assets/ifms.png" alt="">
      <p>
        Todos os direitos reservados, conforme Lei nº 9.610

        Portal Embrapa
      </p>
    </div>
    </footer>
  </template>
  <script>

  export default {
    name: 'HomeView',
    data() {
      return {
        expandedIndex: -1,
      };
    },
    methods: {
      toggle(index) {
        if (this.expandedIndex === index) {
          this.expandedIndex = -1;
        } else {
          this.expandedIndex = index;
        }
      },
    },
  }
  </script>
  <style scoped>

@media (max-width: 749px) {
  .hero {
    background-image: url('../assets/cavalo-mob.jpeg');
    background-size: cover;
    background-position: center;
    padding: 2rem;
    height: 90vh;
    text-align: center;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 90vh;
    background-color: rgba(0, 0, 0, 0.3); /* Aqui definimos a cor e a transparência do overlay */
  }
  
  .hero-content {
    max-width: 600px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  
  .hero-title {
    font-size: 3rem;
    color: #fff;
    z-index: 2;
  }
  
  .hero-headline {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #fff;
    font-weight: 500;
    z-index: 2;
  }

  .about{
    height:100%;
    width: 100%;
    text-align: center;
    padding: 1.25rem;
  }

  .title {
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
    background-color: rgba(0, 117, 92, 0.8);
    border-radius: 5px; /* Borda arredondada */
    padding: 5px; /* Espaçamento interno */
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
  
  .texto {
    text-align: justify;
    width: 90%;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }

  

  .caract{
    
    position: relative;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 1.25rem;
    background-image: url(../assets/cavalopantanal.jpeg);
    background-size: cover;
    background-position: center;
    padding: 2rem;
    text-align: center;
    
  }
  .custom-shape-divider-top-1680795833 {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 3;
}

.custom-shape-divider-top-1680795833 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 60px;
}

.custom-shape-divider-top-1680795833 .shape-fill {
    fill: #FFFFFF;
}

.custom-shape-divider-top-1680800897{
  display: none;
}

  .caract::before {
    content: '';
    position: absolute;
    top: 0; 
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
  }

  .caract-img{
    display: none;
  }

  .caract-title {
    position: relative;
    color: #fff;
    z-index: 2;
  }

  .about-text{
    color: #fff;
    text-align: justify;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    position: relative;
    z-index: 2;
    width: 95%;
    margin: 0 auto;
  }

  .app{
    height: 550px;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 1.25rem;
    position: relative;
  }

  .app-wrapper{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
  }
 
  .img-container img{
    max-width: 410px;
    width: 100%;
    border-radius: 10px;
    margin: 5px 0 30px 0;
  }
  .app-title{
    color: black;
  }

  .app-text{
    color: black;
    text-align: justify;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .custom-shape-divider-bottom-1680807326 {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1680807326 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 60px;
}

.custom-shape-divider-bottom-1680807326 .shape-fill {
    fill:#004443;
}

  .info{
    background-color: #004443;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 1.25rem;
    color: #fff;
  }

  .info-title{
    font-size: 2rem;
    color: #fff;
    margin-bottom: 2.5rem;
    margin-top: 1rem;
  }

  .medidas{
    margin: 0 auto;
    width: 90%;
    padding: 2rem;
  }

  .medidas span{
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }

  .medidas img{
    max-width: 250px;
  }



  .expand-container{
    align-items: center;
    border: 1px solid rgba(0,0,0,40%);
    background-color: rgba(0,0,0,30%);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-top: 1rem;
    border-radius: 10px;
    padding: 1.5rem;
  }

  .expand-container p{
    font-weight: 400;
  }

  .expand-container img{
    width: 100%;
    max-width: 200px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }

  .expand-enter-active,
  .expand-leave-active {
    transition: all 0.2s ;
  }

  .expand-enter-from,
  .expand-leave-to {
    opacity: 0;
    max-height: 10%;
    overflow: hidden;
  }

  .expand-enter-to,
  .expand-leave-from {
    opacity: 1;
    max-height: 100%; /* ajuste este valor de acordo com o conteúdo */
    overflow: hidden;
  }

  footer{
    width: 100%;
    content: '';
    text-align: center;
    background: rgba(0,0,0,80%);
    color: white;
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
  }

  .footer-container p{ 
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }

  .footer-left img{
    width: 200px;
    padding: 1rem;
    border-radius: 20px;
  }

  .footer-right{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 90%;
  }

  .footer-right img{
    width: 200px;
    padding: 1rem;
    border-radius: 20px;
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
    z-index: 1;
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
    width: 80%;
    margin: 0 auto;
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
    background-color: rgba(0,68,67,95%);
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 1.5rem;
    position: relative;
    padding-bottom: 2rem;
  }

  .custom-shape-divider-top-1680795833 {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1680795833 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 50px;
}

.custom-shape-divider-top-1680795833 .shape-fill {
    fill: #FFFFFF;
}

  .caract-section{
    align-items: center;
    width: 90%;
    margin: 0 auto;
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
    text-align: justify;
    width: 95%;
    letter-spacing: 2px;
  }

  .content-wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .caract-content{
    width: 50%;
    display: flex;
    align-items: center;
  }


  .caract-img{
    position: relative;
    width: 50%;
  }

  .caract-img img{
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  }



  .app{
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid black;
    position: relative;
  }

  .app-wrapper{
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 90%;
  }

  .app-medidas{
    width: 50%;
  }

 
  .img-container img{
    max-width: 410px;
    width: 100%;
    border-radius: 10px;
  }

  .app-knn{
    width: 50%;
    display: flex;
    flex-direction: column-reverse;
  }


  .app-title{
    font-size: 2rem;
    color: black;
    margin-bottom: 2.5rem;
    margin-top: 2rem;
  }

  .app-text{
    color: black;
    text-align: justify;
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    padding: 1rem;
    letter-spacing: 1px;
  }

  .custom-shape-divider-top-1680800897 {
    position: absolute;
    top: -0px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-top-1680800897 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 30px;
}

.custom-shape-divider-top-1680800897 .shape-fill {
    fill: rgba(0,68,67,95%);;
}


.custom-shape-divider-bottom-1680807326 {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1680807326 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 60px;
}

.custom-shape-divider-bottom-1680807326 .shape-fill {
    fill:#004443;
}

  .info{
    height: 100%;
    width: 100%;
    text-align: center;
    background-color: #004443;
  }

  .info-title{
    font-size: 2rem;
    color: #fff;
    margin-bottom: 2.5rem;
    padding-top: 2rem;
  }

  .medidas{
    width: 50%;
    position: relative;
    padding-bottom: 2.5rem;
    margin: 0 auto;
    color: #fff;
  }

  .medidas span{
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
  } 
  .medidas img{
    max-width: 250px;
  }

  .icon {
    position: absolute;
    padding-left: 1rem;
    top: 2px;
  }

  .expand-container{
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid rgba(0,0,0,40%);
    background-color: rgba(0,0,0,30%);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-top: 1rem;
    border-radius: 10px;
    padding: 1.5rem;
  }

  .expand-container p{
    font-weight: 400;
  }

  .expand-container img{
    width: 200px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }

  .expand-enter-active,
  .expand-leave-active {
    transition: all 0.2s ;
  }

  .expand-enter-from,
  .expand-leave-to {
    opacity: 0;
    max-height: 10%;
    overflow: hidden;
  }

  .expand-enter-to,
  .expand-leave-from {
    opacity: 1;
    max-height: 100%; /* ajuste este valor de acordo com o conteúdo */
    overflow: hidden;
  }

  footer{
    width: 100%;
    height: 100%;
    content: '';
    text-align: center;
    background: rgba(0,0,0,70%);
    color: white;
    display: flex;
    align-items: center;
  }


  .footer-left{
    width: 50%;
    padding: 1rem;
  }

  .footer-left img{
    width: 200px;
    border-radius: 10px;
    padding-bottom: 1rem;
  }

  .footer-right{
    width: 50%;
  }

  .footer-right img{
    width: 200px;
    border-radius: 10px;
    padding-bottom: 1rem;
  }

  .footer-container p{ 
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }


}
  </style>