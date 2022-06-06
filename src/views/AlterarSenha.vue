<template>
    <ion-page>
      <ion-content :fullscreen="true" >
        <toolbar-layout>
            <div class="center">
              <h1>Alterar Senha</h1>
              <ion-item color="light"  class="inputCadastro">
                  <ion-label position="floating">Senha Antiga:</ion-label>
                  <ion-input type="password" required v-model="SenhaAntiga" />
              </ion-item>

              <ion-item color="light"  class="inputCadastro">
                  <ion-label position="floating">Senha Nova:</ion-label>
                  <ion-input type="password" required v-model="SenhaAntiga" />
              </ion-item>

              <ion-item color="light"  class="inputCadastro">
                  <ion-label position="floating">Confirmar Senha Nova:</ion-label>
                  <ion-input type="password" required v-model="SenhaAntiga" />
              </ion-item>

              <ion-button @click="this.$router.push('/HomePageDoador')" class="ion-margin" color="danger">Alterar Senha</ion-button>
            </div>
            </toolbar-layout>
      </ion-content>
      <project-footer></project-footer>
    </ion-page>
    
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import{
        IonPage
    } from '@ionic/vue';

export default defineComponent({
  name: 'AlterarSenha',
  components: {
      IonPage
  }, setup() {
    return {}
  }
});
</script>


<style>

.center {
  text-align: center;
}
</style>
