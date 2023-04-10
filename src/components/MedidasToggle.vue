<template>
    <div class="medidas" @click="toggle">
      <span><slot></slot></span>
      <p v-if="expanded">{{ texto }}</p>
      <img :src="imagem" alt="Imagem da medida" v-if="expanded" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'MedidasToggle',
    props: ['texto', 'imagem'],
    data() {
      return {
        expanded: false,
      };
    },
    methods: {
      toggle() {
        this.expanded = !this.expanded;
      },
    },
  };
  </script>

<style scoped>
  .medidas{
    color: #fff;
    font-weight: 500;
    font-size: 1.2rem;
  }

  .medidas p{
    font-size: 1rem;
  }
</style>