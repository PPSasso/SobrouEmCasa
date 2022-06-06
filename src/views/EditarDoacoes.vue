<template>
  <ion-page>
    <ion-content>
      <toolbar-layout-arrow>

        <h1 id="TitleEditarDoacao">Editar doação</h1>

        <ion-item  color="light"  class="ion-margin">
          <ion-label class="select-categ">Selecione a categoria</ion-label>
          <ion-select 
            interface="action-sheet" 
            cancelText="Cancelar"
            :placeholder="doacao.categoria">
            <ion-select-option class="select-option" value="eletrodomesticos">Eletrodomésticos</ion-select-option>
            <ion-select-option class="select-option" value="moveis">Móveis</ion-select-option>
            <ion-select-option class="select-option" value="utilidades-domesticas">Utilidades domésticas</ion-select-option>
            <ion-select-option class="select-option" value="livros-revistas">Livros e revistas</ion-select-option>
            <ion-select-option class="select-option" value="brinquedos-jogos">Brinquedos e jogos</ion-select-option>
            <ion-select-option class="select-option" value="roupas-acessorios">Roupas e acessórios</ion-select-option>
            <ion-select-option class="select-option" value="alimentos">Alimentos</ion-select-option>
            <ion-select-option class="select-option" value="higiene-pessoal">Higiene pessoal</ion-select-option>
            <ion-select-option class="select-option" value="produtos-limpeza">Produtos de limpeza</ion-select-option>
            <ion-select-option class="select-option" value="roupas-cama">Roupas de cama</ion-select-option>
            <ion-select-option class="select-option" value="calçados">Calçados</ion-select-option>
            <ion-select-option class="select-option" value="itens-tecnologia">Itens de tecnologia</ion-select-option>
            <ion-select-option class="select-option" value="outros">Outros</ion-select-option>
          </ion-select>
        </ion-item>
        
          <ion-item color="light"  class="inputCadastro">
            <ion-label position="floating">Titulo:</ion-label>
            <ion-input :value="doacao.title" type="text" required v-model="Titulo" />
        </ion-item>

          <ion-item color="light"  class="inputCadastro">
              <ion-label position="floating">Descrição (Max 150 caracteres):</ion-label>
              <ion-textarea :value="doacao.description" maxlength="150"   rows="5" v-model="Descricao"></ion-textarea>
          </ion-item>

        <h4 id="anexarImagem">Anexar Imagem</h4>

        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-img id="ImagemDoacaoDetalhe" :src="doacao.source" :alt="doacao.title"></ion-img>
            </ion-col>
            <ion-col>
                <ion-img   id="PlusButton" src="../../assets/images/PlusButton.svg"></ion-img>
            </ion-col>
          </ion-row>
        </ion-grid> 

        
        
        <ion-item color="light"  class="inputCadastro">
            <ion-label position="floating">Endereco:</ion-label>
            <ion-input :value="doacao.endereco" type="text" required v-model="Endereco" />
        </ion-item>

        <ion-button id="ConcluirEdicao" @click="this.$router.push('/SuasDoacoes')" fill="undefined">
          <ion-img   id="EdicaoButton" src="../../assets/images/ConcluirEdicao.svg"></ion-img>
        </ion-button>
        
        <ion-button @click="this.$router.push('/SuasDoacoes')" fill="undefined">
          <ion-img   id="EdicaoButton" src="../../assets/images/ApagarAnuncio.svg"></ion-img>
        </ion-button>

      </toolbar-layout-arrow>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import { useStore } from 'vuex'
import { key } from '../store'

import{
    IonPage,
    IonContent
    } from '@ionic/vue';
export default defineComponent({
  name: 'HomePage',
  components: {
    IonPage,
    IonContent
  }, 
  data(){
    return{
      Titulo: '',
      Descricao: '',
      Enderedo: '',
      IdDoacao: this.$route.params.id
    }
  },

  /* Carrega todas as ações dentro do bloco 
  assim  que a página é carregada */
  computed:{

    // Coleta a doação pertencente ao ID atual do router
    doacao(): {
    id: string;
    title: string;
    description: string;
    dataDoacao: string;
    status: string;
    ONG: string;
    categoria: string;
    source: string;
    endereco: string;
    }{
      const store = useStore(key)
      return store.getters.doacao(this.IdDoacao); 
    }
  }
  
  
});
</script>

<style>



</style>