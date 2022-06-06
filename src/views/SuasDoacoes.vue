<template>
  <ion-page>
    <ion-content>
      <toolbar-layout-arrow>
        <h1 >Suas doações</h1>
        <ion-list>
          <ion-item 
          lines="full"
          shape="round"
            button
            v-for="doacao in doacoes"
            @click="menuNavigation(`/SuasDoacoes/${doacao.id}`)"
            :key="doacao.id"
            id="doacaoSlot"
          >
            <ion-thumbnail slot="start">
              <ion-img id="fotoDoacaoSlot" :src="doacao.source" :alt="doacao.title"></ion-img>
            </ion-thumbnail>

            <ion-label > 
              <ion-list>
                <ion-item >
                  {{doacao.title}}
                </ion-item>
                <ion-item>
                  {{doacao.categoria}}
                </ion-item>
              </ion-list>                
            </ion-label >

          </ion-item>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>

        </ion-list> 

      </toolbar-layout-arrow>
    </ion-content>
    <project-footer></project-footer>
  </ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import { useStore } from 'vuex'
import { key } from '../store'

import{
  IonPage,
  IonContent,
  IonThumbnail,
  IonLabel
} from '@ionic/vue';


export default defineComponent({
  name: 'HomePage',
  components: {
    IonPage,
    IonContent,
    IonThumbnail,
    IonLabel
  }, 

  // Computed serve para carregar funcoes assim que a pagina é carregada
  computed:{

    // Retorna as doações que estão na store
    doacoes(){
      const store = useStore(key)
      return store.getters.doacoes
    }

  },
  methods:{
    // Muda o router atual
    menuNavigation(url){
        this.$router.push(url)
    }
  }
});
</script>

<style>
#fotoDoacaoSlot{
  width: 65px;
  height: 100px; 
  margin-left: -5px;
  margin-top: -22px;
  
}
#doacaoSlot{
  width: 90%;
  height: 100%; 
  margin-block-end: 10px;
  --background: white;
  --border-color: white;
  --border-radius: 10px;
  margin-left: 15px;
}
</style>
