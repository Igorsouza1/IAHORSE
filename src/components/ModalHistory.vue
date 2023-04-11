<template >
    <transition name="modal" >
    <div class="modal-backdrop" @click="$emit('close')">
      <div class="modal-content" @click.stop>
        <div class="close" @click="$emit('close')">
        <img id="close-img" src="../assets/close.png" alt="">
      </div>
         <div v-if="selectedMedida">
          <div class="classe-container">
            <h1 v-if="selectedMedida.classe === 2" >Alta Qualidade</h1>
            <img v-if="selectedMedida.classe === 2" src="../assets/3.png" alt="">

            <h1 v-if="selectedMedida.classe === 1" > Media Qualidade</h1>
            <img v-if="selectedMedida.classe === 1" src="../assets/2.png" alt="">


            <h1 v-if="selectedMedida.classe === 0" > Baixa Qualidade</h1>
            <img v-if="selectedMedida.classe === 0" src="../assets/numero-1.png" alt="">

          </div>
          <div class="medidas-container">
            <div class="medida">
              <p v-if="selectedMedida.sexo === 0" > Macho</p>
              <p v-if="selectedMedida.sexo === 1" > Femea</p>
            </div>
            <div class="medida">
              <p>Comprimento do Corpo:</p> <span>{{ selectedMedida.comprimentoDoCorpo }}</span>
            </div>

            <div class="medida">
              <p>Comprimento da Espadua:</p> <span>{{ selectedMedida.comprimentoDaEspadua }}</span>
            </div>

            <div class="medida">
            <p>Comprimento DorsoLombar:</p> <span>{{ selectedMedida.comprimentoDorsoLombar }}</span>
          </div>

          <div class="medida">
            <p>Largura do Peito:</p> <span>{{ selectedMedida.larguraDoPeito }}</span>
          </div>

          <div class="medida">
            <p>Largura das Ancas:</p> <span>{{ selectedMedida.larguraDasAncas }}</span>
          </div>

          <div class="medida">
            <p>Altura da Garupa: </p><span>{{ selectedMedida.alturaDaGarupa }}</span>
          </div>

          <div class="medida">
            <p>Altura da Cernelha:</p> <span>{{ selectedMedida.alturaDaCernelha }}</span>
          </div>

          <div class="medida">
            <p>Altura do Dorso: </p><span>{{ selectedMedida.alturaDoDorso }}</span>

          </div>

          <div class="medida">
            <p>Largura do Torax:</p> <span>{{ selectedMedida.larguraDoTorax }}</span>
          </div>
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
  position: relative;
  top: 0;
  left: 0;
  margin-bottom: 1rem;
}

.modal-content {
  background-color: #ffffff;
  text-align: center;
  border-radius: 8px;
  color: black;
  max-width: 90%;
  max-height: 95%;
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

.classe-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 117, 92, 0.5);
  width: 90%;
  margin: 0 auto;
  margin-bottom: 1.1rem;
  border-radius: 8px;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
}

.classe-container h1{
  margin-bottom: 0;
}

.classe-container img{
  width: 40px;
  object-fit: cover;
}

.medida{
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem;
  border-radius: 8px;
  margin: 0.5rem; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.medida p{
  margin: 0;
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
  margin-top: 1rem;
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