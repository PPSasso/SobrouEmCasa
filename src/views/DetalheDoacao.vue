<template>
    <ion-page>
      <ion-content :fullscreen="true" color="tertiary">
        <toolbar-layout-arrow>
            <ion-img id="ImagemDetalheDoacao" src="https://img.olx.com.br/images/87/878206275860987.jpg"></ion-img>
            <h2 class="ion-text-center">Jaqueta Usada</h2>
            <p>Categoria: Roupas e acessórios</p>
            <p>Jaqueta usada e muito bem conservada</p>
            <ion-img id="VerNoMapaButton" src="../../assets/images/VerNoMapa.svg"></ion-img>
        </toolbar-layout-arrow>
      </ion-content>
      <project-footer></project-footer>
    </ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import{
        IonPage, IonContent, IonImg
    } from '@ionic/vue';

export default defineComponent({
  name: 'HomePageJuridico',
  components: {
      IonPage, IonContent, IonImg
  }, setup() {
    return {
    }
  }
});
</script>

<style>
#ImagemDetalheDoacao{ 
   height: 300px;
   width: 100%;
   max-height: 300px;
   margin: 0%;
}
#VerNoMapaButton{
  height: 300px;
   width: 300px;
   margin-left: 35px;
   margin-top: 59px;
}

</style>
