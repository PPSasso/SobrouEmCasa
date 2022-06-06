<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <toolbar-layout-arrow>

          <h1>Cadastro do Produto</h1>

          <ion-item  color="light"  class="ion-margin">
            <ion-label class="select-categ">Selecione a categoria</ion-label>
            <ion-select interface="action-sheet" :interface-options="options">
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
            <ion-input  type="text" required v-model="Titulo" />
          </ion-item>

          <ion-item color="light"  class="inputCadastro">
              <ion-label position="floating">Descrição (Max 150 caracteres):</ion-label>
              <ion-textarea maxlength="150"   rows="5" v-model="Descricao"></ion-textarea>
          </ion-item>

          <h4 id="anexarImagem">Anexar Imagem</h4>

          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-img id="ImagemDoacaoDetalhe" src="https://img.olx.com.br/images/16/167246760824578.jpg" alt="Pasta de Dente"></ion-img>
              </ion-col>
              <ion-col>
                  <ion-img  id="PlusButton" src="../../assets/images/PlusButton.png"></ion-img>
              </ion-col>
            </ion-row>
          </ion-grid> 
  
          <ion-item color="light"  class="inputCadastro">
            <ion-label position="floating">Endereço:</ion-label>
            <ion-input  type="text" required v-model="Endereco" />
          </ion-item>

          <ion-button @click="this.$router.push('/HomePageDoador')" fill="undefined">
          <ion-img id="EdicaoButton" src="../../assets/images/FinalizarCadastro.svg"></ion-img>
        </ion-button>

        </toolbar-layout-arrow>
      </ion-content>
      <project-footer></project-footer>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonItem, IonLabel, IonSelect, IonSelectOption, IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RegistrarDoacao',
  components: {
    IonContent,
    IonPage,
    IonItem, 
    IonLabel, 
    IonSelect, 
    IonSelectOption,
    IonInput
  }, setup() {
    const options: any = {
      cssClass: 'my-custom-interface'
    };
    
    return { options }
  }
});
</script>

<style>

.my-custom-interface .select-option {
  color: #000;
  font-style: normal;
  font-weight: 800;
  line-height: 6px;
}

.my-custom-interface .label {
  background-color: #82D2FF;
  margin-top: 50px;
}

h1{ 
  display: flex;
  justify-content: center;
  font-family: 'Pacifico-Medium';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 18px;
  padding: 8px;
  border-bottom: 5px solid #B6D9E1;
}


</style>