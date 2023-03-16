<template>
    <div class="card">
      <img src="../assets/cavalo-icone.svg" alt="ícone" class="icone">
      <p class="texto">{{ texto }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name:"CardInfo",
    props: {
      icone: String,
      texto: String
    }
  }
  </script>
  
  <style>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border: 1px solid black;
  }
  
  .icone {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  
  .texto {
    text-align: center;
  }
  </style>