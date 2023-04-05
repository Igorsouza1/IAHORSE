<template>
  <div class="navigation">
    <div class="logoCavalo">
      <router-link to="/">
        <img src="../assets/cavaloLogo.png" alt="Logo Cavalo pantaneiro">
      </router-link>
    </div>
    <div class="navigation-icons">
      <div class="navigation-icon">
        <router-link to="/">
        <a href="#">
          <img src="../assets/home-icon.png" alt="">
          <p>Home</p>
        </a></router-link>
      </div>
      <div class="navigation-icon">
        <router-link to="/classificador">
        <a href="#">
          <img id="calcular-icon" src="../assets/machine-learning.png" alt="">
          <p>Classificador</p>
        </a>
      </router-link>
      </div>
      <div class="navigation-icon">
        <router-link to="/historico">
        <a href="#">
          <img src="../assets/history-icon.png" alt="">
          <p>Historico</p>
        </a>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 749px) {
  .navigation {
    position: fixed;
    overflow: hidden;
    bottom: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    z-index: 10;
    background-color: #fff;
  }

  .navigation-icons {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .logoCavalo img{
    display: none;
  }

  .navigation-icon {
    text-align: center;
    width: 33.33%;
    padding-top: 0.8rem;
    transition: all 0.3s ease;
  }

  .navigation-icon img{
    width: 1.8rem;  
  }

  .navigation-icon a{
    cursor: pointer;
    text-decoration: none;
    color: black;
  }
  .navigation-icon img:hover{
    transform: scale(1.2);
  }

  .navigation-icon:hover {
    background-color: rgba(0, 117, 92, 0.5);
    transform: translateY(-5px); /* Move o ícone para cima */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4); 
  }

}

@media (min-width: 750px) {
  .navigation{
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid rgba(22,22,22,0.5);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .logoCavalo img{
    width: 40px;
    height: 40px;
    margin-left: 2rem;
  }

  .navigation-icons{
    display: flex;
    justify-content: right;
    width: 100%;
    margin-top: 1rem;
  }

  .navigation-icon img{
    display: none;
  }

  .navigation-icon a p{
    margin-right: 2.5rem;
  }

  a{
    text-decoration: none;
    color: black;
    font-weight: 500;
  }

}

</style>
