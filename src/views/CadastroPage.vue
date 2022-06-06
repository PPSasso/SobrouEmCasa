<template>
  <ion-page>
    <div id="container">
      <ion-content :fullscreen="true">   
      <ion-toolbar>
        <ion-buttons  >
          <ion-img @click="goBack()" id="ArrowBackToolbarOnly"  src="../../assets/icon/ArrowBack.png"></ion-img>
          ion-back
        </ion-buttons>
        <ion-text>teste</ion-text>
      </ion-toolbar>   
      <div>
        <ion-img id="logo" :src="Logo"></ion-img>
      </div>
      <div id="buttons">
        <ion-button id="pj" @click="this.$router.push('/CadastroPJ')">
          Pessoa Jurídica
          <img src="/../../assets/images/Predio.png">
        </ion-button>
        <ion-button id="pf"  @click="this.$router.push('/CadastroPF')">
          Pessoa Física
          <img src="/../../assets/images/user-alt.png">
        </ion-button>
      </div> 
      
      </ion-content>
    </div>    
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonImg, IonButton, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CadastroPage',
  components: {
    IonContent,
    IonPage,
    IonImg,
    IonButton, IonToolbar
  }, setup() {
    return {
      Logo : "../../assets/images/Logo.png",
    }
  },
    methods:{
        goBack(){
            const router = this.$router
            router.go(-1);  
        }
    }
});
</script>

<style>
ion-button {
  --padding-bottom: 30px;
  --padding-top: 30px;
  --padding-right: 50px;
  --padding-left: 50px;
}


#ArrowBackToolbarOnly {
   margin-top: 10px;
   margin-left: 10px;
}

#pj {
  display: flex;
  margin-top: 40px;
}

#pf {
  display: flex;
  margin-top: 40px;
 
}

#container {
  --background: var(--ion-background-color);
}

#logo {
  margin-top: 120px;
  height: 40px;
}

img {
  margin-left: 10px;
  width: 25px;
  height: 26px;
}
</style>
