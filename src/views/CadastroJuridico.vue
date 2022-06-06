<template>
    <ion-page>
        <ion-content :fullscreen="true" color="tertiary">
            <toolbar-layout-logo>

                <form class="ion-padding">
                    <ion-list >
                        <ion-item color="light" class="inputCadastro">
                            <ion-label position="floating">Nome Responsável:</ion-label>
                            <ion-input  type="text" required v-model="NomeResponsavel" />
                        </ion-item>
                        <ion-item color="light" class="inputCadastro">
                            <ion-label position="floating">Nome Instituição:</ion-label>
                            <ion-input type="text" required v-model="NomeInstituicao" />
                        </ion-item>
                        <ion-item  color="light" class="inputCadastro">
                            <ion-label position="floating">E-mail:</ion-label>
                            <ion-input type="email" required v-model="Email" />
                        </ion-item>
                        <ion-item  color="light" class="inputCadastro">
                            <ion-label position="floating">CPF:</ion-label>
                            <ion-input type="text" required v-model="CPF" />
                        </ion-item>
                        <ion-item color="light"  class="inputCadastro">
                            <ion-label position="floating">CNPJ:</ion-label>
                            <ion-input type="text" required v-model="CNPJ" />
                        </ion-item>
                        <ion-item color="light"  class="inputCadastro">
                            <ion-label position="floating">Data Nascimento:</ion-label>
                            <ion-input type="text" required v-model="DataNascimento" />
                        </ion-item>
                        <ion-item color="light"  class="inputCadastro">
                            <ion-label position="floating">Sexo:</ion-label>
                            <ion-input type="text" required v-model="Sexo" />
                        </ion-item>
                        <ion-item color="light"  class="inputCadastro">
                            <ion-label position="floating">Senha:</ion-label>
                            <ion-input type="password" required v-model="Senha" />
                        </ion-item>
                        <ion-item color="light"  class="inputCadastro">
                            <ion-label position="floating">Finalidade Instituição (Max 150 caracteres):</ion-label>
                            <ion-textarea maxlength="150" rows="5" v-model="FinalidadeInstituicao"></ion-textarea>
                        </ion-item>
                        <ion-item  color="light"  class="ion-margin">
                            <ion-label class="select-categ">Preferência 1</ion-label>
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
                        <ion-item  color="light"  class="ion-margin">
                            <ion-label class="select-categ">Preferência 2</ion-label>
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
                        <ion-item  color="light"  class="ion-margin">
                            <ion-label class="select-categ">Preferência 3</ion-label>
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
                    </ion-list>
                    <ion-button @click="this.$router.push('/HomePageJuridico')" type="submit" expand="block">Criar</ion-button>
                </form>

                <!-- Divs para o botao de criar ficar na tela, unico jeito que eu achei -->
               <div>  .</div>
               <div> . </div>
               <div> . </div>
               <div>  .</div>
            </toolbar-layout-logo>
        </ion-content>        
    </ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import{
        IonPage
    } from '@ionic/vue';

export default defineComponent({ 
  name: 'HomePage',
  components: {
      IonPage
  }, data(){
      return{
          NomeResponsavel: '',
          NomeInstituicao: '',
          Email: '',
          CPF: '',
          CNPJ: '',
          DataNascimento: '',
          Sexo: '',
          Senha: '',
          FinalidadeInstituicao: '',
          Telefone: '',
          Celular: '',
          Estado: '',
          Cidade: '',
          Rua: '',
          Numero: ''
      };
  }
});
</script>



<style>
</style>

