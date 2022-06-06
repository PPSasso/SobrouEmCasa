<template>
    <ion-page>
      <ion-content :fullscreen="true" >
        <toolbar-layout>
            <div class="center">
              <h1>Alterar Senha</h1>
              <div>
                <h2>Senha Antiga</h2>
                <div id="senhaAntiga">
                  <ion-item class="ion-margin">
                  <ion-input placeholder="********"></ion-input>
                  </ion-item>
                </div>
              </div>

              <div>
                <h2>Nova Senha</h2>
                <div id="novaSenha">
                  <ion-item class="ion-margin">
                  <ion-input placeholder="********"></ion-input>
                  </ion-item>
                </div>
              </div>
              
              <div>
                <h2>Confirmar Nova Senha</h2>
                <div id="confirmarSenha">
                  <ion-item class="ion-margin">
                  <ion-input placeholder="********"></ion-input>
                  </ion-item>
                </div>
              </div>

              <ion-button class="ion-margin" color="danger">Alterar Senha</ion-button>
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
