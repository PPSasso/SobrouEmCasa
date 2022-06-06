<template>
        <ion-backdrop id="1" tappable></ion-backdrop>
        <div>
            <img class='Mapa' src="https://maps.googleapis.com/maps/api/staticmap?&size=1000x1000&zoom=14&markers=size:mid|RioDeJaneiro&key=AIzaSyBSPbsdPrzd9w6chbNpIXqQ4-cj29hHjk8" alt="Endereço não encontrado...">
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import{ IonBackdrop } from '@ionic/vue';



export default defineComponent({
  name: 'TelaMapa',
  components:{
      IonBackdrop
  },
  methods:{
      ionBackdropTap(event){
          window.console.log("Mensagem"+event)
          var objeto = document.getElementById("1"); 
          if(objeto)
              objeto.hidden = true;
      }
  }

})
</script>

<style scoped>
    .Mapa{
        align-content: center;
        justify-content: space-around;
        width:40%;
        height: 90%;
    }
</style>