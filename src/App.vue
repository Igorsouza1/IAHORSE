<template>
  <NavBar class="navBar"/>
  <router-view class="routerView"></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&family=Roboto:wght@400;500;700&display=swap');


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}


html{
  scroll-behavior: smooth;
}

</style>
