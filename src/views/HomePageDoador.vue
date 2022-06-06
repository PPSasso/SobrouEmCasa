<template>
    <ion-page>
      <ion-content :fullscreen="true" >
        <toolbar-layout>
          <div id="userInfo">
            <ion-img class="ion-margin" id="imgPerfil" src="../../assets/icon/Perfil.svg"></ion-img>
            <div id="descricao">
              <h2 id="nomeUser">Carlos Ferraz</h2>
              <p class="description">25 anos</p>
              <p class="description">Sorocaba</p>
            </div>
          </div>
          <div id="textoDescricao">
            <p>Sou Carlos, tenho 25 anos, moro em São Paulo e quero fazer parte das doações!</p>
          </div>
          <!-- <div>
            <h3 id="doacoes">Doações: 50</h3>
            <div id="divAvaliacao">
              <h3 id="avaliacao">Avaliação:</h3>
              <ion-img class="star" src="../../assets/images/Star-Yellow.svg"></ion-img>
              <ion-img class="star" src="../../assets/images/Star-Yellow.svg"></ion-img>
              <ion-img class="star" src="../../assets/images/Star-Yellow.svg"></ion-img>
              <ion-img class="star" src="../../assets/images/Star-Yellow.svg"></ion-img>
              <ion-img class="star" src="../../assets/images/Star-White.svg"></ion-img>
            </div>
          </div> -->
          <ion-img id="EditarInformacoes" src="../../assets/images/EditarInformacoes.svg" @click="this.$router.push('/EditarPerfilFisico')"></ion-img>
          
          <ion-img id="NovaDoacao" src="../../assets/images/NovaDoacao.svg" @click="this.$router.push('/RegistrarDoacao')"></ion-img>
          
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
  name: 'HomePageDoador',
  components: {
      IonPage
  }, setup() {
    return {
    }
  }
});
</script>

<style scoped>

#NovaDoacao{ 
  margin: 100px 20px 0px 20px;
  
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

#doacoes {
  font-size: 18px;
  font-weight: bold;
  margin-left: 27px;
}

#avaliacao {
  font-size: 18px;
  font-weight: bold;
  margin-left: 27px;
}

#divAvaliacao {
  display: flex;
}

.star{
  height: 20px;
  margin: 16px 0px 0px 8px;
}

</style>
