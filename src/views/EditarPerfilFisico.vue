<template>
    <ion-page>
      <ion-content :fullscreen="true" >
        <toolbar-layout-arrow>
            <div class="center">
              <h1>Editar Perfil</h1>
              <h2>Foto de Perfil</h2>
              <ion-img id="EditarInformacoes" src="../../assets/icon/Perfil.svg"></ion-img>
              <ion-button id="BottonSelecionarFotoPerfil" color="secondary" class="ion-margin">Selecionar outra foto de perfil</ion-button>
              
              <ion-item color="light"  class="inputCadastro">
                <ion-label position="floating">Nome:</ion-label>
                <ion-input  type="text" required v-model="Titulo" />
              </ion-item>

              <ion-item color="light"  class="inputCadastro">
                <ion-label position="floating">Descrição (Max 150 caracteres):</ion-label>
                <ion-textarea 
                  placeholder="Coloque aqui uma breve descrição de quem você é e seus objetivos usando o app. Essa descrição irá aparecer nos seus anúncios!" 
                  maxlength="150"   
                  rows="5" 
                  v-model="Descricao"></ion-textarea>
              </ion-item>
              <ion-item color="light"  class="inputCadastro">
                  <ion-label position="floating">Telefone:</ion-label>
                  <ion-input type="text" required v-model="Telefone" />
              </ion-item>
              <ion-item color="light"  class="inputCadastro">
                  <ion-label position="floating">Celular:</ion-label>
                  <ion-input type="text" required v-model="Celular" />
              </ion-item>
              <ion-item color="light"  class="inputCadastro">
                  <ion-label position="floating">Estado:</ion-label>
                  <ion-input type="text" required v-model="Estado" />
              </ion-item>
              <ion-item color="light"  class="inputCadastro">
                  <ion-label position="floating">Cidade:</ion-label>
                  <ion-input type="text" required v-model="Cidade" />
              </ion-item>
              <ion-item color="light"  class="inputCadastro">
                  <ion-label position="floating">Rua:</ion-label>
                  <ion-input type="text" required v-model="Rua" />
              </ion-item>
              <ion-item color="light"  class="inputCadastro">
                  <ion-label position="floating">Número:</ion-label>
                  <ion-input type="text" required v-model="Numero" />
              </ion-item>
              <ion-button @click="this.$router.push('/HomePageDoador')" fill="undefined">
              <ion-img   id="EdicaoButton" src="../../assets/images/ConcluirEdicao.png"></ion-img>
            </ion-button>

            
            <h2>Conta</h2>
            <ion-button @click="this.$router.push('/AlterarSenha')" class="ion-margin" color="danger">Alterar Senha</ion-button>
            <ion-button class="ion-margin" color="danger">Apagar Conta</ion-button>
            </div>

            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            </toolbar-layout-arrow>
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
  name: 'EditarPerfil',
  components: {
      IonPage
  }, setup() {
    return {
    }
  }
});
</script>


<style>

.center {
  text-align: center;
}

#EditarInformacoes{
  width: 100px;
  height: 100px;
  margin-left: 35%;
}
#BottonSelecionarFotoPerfil{
  height: 50px;

}
</style>
