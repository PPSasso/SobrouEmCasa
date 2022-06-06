<template>
    <ion-page>
      <ion-content :fullscreen="true" color="tertiary">
        <toolbar-layout>
          <div id="userInfo">
            <ion-img class="ion-margin" id="imgPerfil" src="../../assets/icon/Perfil.svg"></ion-img>
            <div id="descricao">
              <h2 id="nomeUser">GPACI</h2>
              <p class="description"></p>
              <p class="description">Sorocaba - SP</p>
            </div>
          </div>
          <div id="textoDescricao">
            <p>É uma associação com a finalidade de atender a todos que a ela se dirigir.</p>
          </div>
          <ion-img id="EditarInformacoes" src="../../assets/images/EditarInformacoes.svg"  @click="this.$router.push('/EditarPerfilJuridico')"></ion-img>
          <h3>Prioridade de doações:</h3>
          <ul>
            <li>Alimentos</li>
            <li>Brinquedos e jogos</li>
            <li>Livros e revistas</li>
          </ul>
          <ion-img id="ProcurarDoacao" src="../../assets/images/ProcurarDoacao.svg"  @click="this.$router.push('/ProcurarDoacao')"></ion-img>
        </toolbar-layout>
      </ion-content>
      <project-footer></project-footer>
    </ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import{
        IonPage, IonContent
    } from '@ionic/vue';

export default defineComponent({
  name: 'HomePageJuridico',
  components: {
      IonPage, IonContent
  }, setup() {
    return {
    }
  }
});
</script>

<style scoped>

#ProcurarDoacao{ 
  margin: 0px 20px 0px 20px;
  border-radius: 10px;
  margin-top: 170px;
}
#EditarInformacoes{ 
  margin-left: -10%;
  height: 40px;
  width: 450px;
}

#userInfo {
  display: flex;
  justify-content: center;
  gap: 20px;
}

#imgPerfil {
  height: 64px;
  margin-right: 0;
}

#descricao {
  align-items: center;
}

#nomeUser {
  margin-top: 24px;
  margin-bottom: 5px;
}

.description {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
}

#textoDescricao {
  display: flex;
  padding: 6px;
  background-color: #E7F4FC;
  width: auto;
  justify-content: center;
  margin: 10px 20px;  
  border-radius: 10px;
}

h3 {
  font-family: 'Pacifico';
  margin-left: 20px;
  margin-top: 30px;
}
</style>
