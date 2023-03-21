<template>
  <div class="navigation">
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
  background-color: rgb(255, 255, 255);
}

.navigation-icons {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.navigation-icon {
  text-align: center;
  width: 33.33%;
  padding-top: 0.8rem;
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

.navigation-icon:hover img {
  background-color: rgb(143, 182, 143);
  transition: background-color 0.3s ease-in-out;
  border-radius: 20%;
  transition: all 0.3s ease;
}
</style>
