<template >
    <transition name="modal" >
    <div class="modal-backdrop" @click="$emit('close')">
      <div class="modal-content" @click.stop>
        <div class="close" @click="$emit('close')">
        <img id="close-img" src="../assets/close.png" alt="">
      </div>
         <div v-if="selectedMedida">
          <h1 v-if="selectedMedida.classe === 2" > Alta Qualidade</h1>
          <h1 v-if="selectedMedida.classe === 1" > Media Qualidade</h1>
          <h1 v-if="selectedMedida.classe === 0" > Baixa Qualidade</h1>
          <hr>
          <h3 v-if="selectedMedida.sexo === 0" > Macho</h3>
          <h3 v-if="selectedMedida.sexo === 1" > Femea</h3>
          <hr>
          <div class="medidas-container">
            <p>comprimento do Corpo: <span>{{ selectedMedida.comprimentoDoCorpo }}</span></p>
            <p>comprimento da Espadua: <span>{{ selectedMedida.comprimentoDaEspadua }}</span></p>
            <p>comprimento DorsoLombar: <span>{{ selectedMedida.comprimentoDorsoLombar }}</span></p>
            <p>largura do Peito: <span>{{ selectedMedida.larguraDoPeito }}</span></p>
            <p>largura das Ancas: <span>{{ selectedMedida.larguraDasAncas }}</span></p>
            <p>altura da Garupa: <span>{{ selectedMedida.alturaDaGarupa }}</span></p>
            <p>altura da Cernelha: <span>{{ selectedMedida.alturaDaCernelha }}</span></p>
            <p>altura do Dorso: <span>{{ selectedMedida.alturaDoDorso }}</span></p>
            <p>largura do Torax: <span>{{ selectedMedida.larguraDoTorax }}</span></p>
          </div>
         </div>
        <div class="modal-button">
          <button @click="deleteMedida(selectedMedida.id)" id="excluir">Deletar</button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import db from '../functions/db.js'

export default {
    name: 'ModalHistory',
    props: {
        selectedMedida: Object,
    },
    data(){
        return{
            medidas: [],
        }
    },
    methods: {
      async deleteMedida(id) {
        try {
          await db.medidas.delete(id);
          this.medidas = this.medidas.filter(medida => medida.id !== id);
          this.$emit('deleted');
        } catch (error) { 
          console.error('Erro ao deletar item:', error);
        }
      } 
    },
}
</script>
<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.close{
  width: 100%;
  display: flex;
}

#close-img{
  width: 20px;
}

.modal-content {
  background-color: #ffffff;
  text-align: center;
  border-radius: 8px;
  color: black;
  max-width: 90%;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

#excluir{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease; 
}

    .excluir:hover {
      background-color: #c0392b;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }

    .excluir:focus {
      outline: none;
    }

</style>