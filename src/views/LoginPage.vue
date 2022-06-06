<template>
  <ion-page >
    <div id="container" >
      <ion-content :fullscreen="true">      
      <div>
        <ion-img id="logo" :src="Logo"></ion-img>
      </div>
      
      <form class="ion-padding">
        <ion-list >
          <ion-item color="light" class="inputCadastro">
              <ion-label position="floating">Usuário (Email):</ion-label>
              <ion-input  type="email" required v-model="Usuario" />
          </ion-item>
          <ion-item  color="light" class="inputCadastro">
              <ion-label position="floating">Senha:</ion-label>
              <ion-input type="password" required v-model="Senha" />
          </ion-item>
        </ion-list>
        <ion-button  fill="solid" size="small"  type="submit" expand="full" >Entrar</ion-button> 
      </form>

    

      <p id="clique-cadastro">Não tem cadastro? <a href="cadastro">Cadastre-se aqui!</a></p>

      </ion-content>
    </div>    
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonImg, IonInput, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  components: {
    IonContent,
    IonPage,
    IonImg,
    IonInput,
    IonItem
  }, setup() {
    return {
      Logo : "../../assets/images/Logo.png",
    }
  }
});
</script>

<style>
ion-input{
  --background: var(--ion-item-background);
  --color: var(--ion-background-color);
}

ion-item{
  --border-radius: 20px;
  --height: 10px;
}

#container {
  --background: var(--ion-background-color);
}


#logo{
  margin-top: 320px;
  height: 40px;
}

.login{
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  border-radius: 5px;
  align-items: center;
  flex-flow: column;
}

#clique-cadastro {
  text-align: center;
  margin-top: 90px;
}
</style>
