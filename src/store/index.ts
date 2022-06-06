// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'


// Definição das variaveis que serão usadas no projeto, é necessário colocar todas para usar a store.
export interface State {
  doacoes: { 
    id: string; 
    title: string; 
    description: string;
    dataDoacao: string;
    status: string;
    ONG: string;
    categoria: string;
    source: string; 
    endereco: string;}[]
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  // A state armazena as variáveis. Aqui é preciso ter todas.
  state: {
    doacoes: [
      {
        id: "1", 
        title: 'Pasta de dente, 5 unidades', 
        description: '5 unidades de pasta de dente fechadas.',
        dataDoacao: '',
        status: 'Disponível',
        ONG: '',
        categoria: 'Higiene Pessoal',
        source: 'https://img.olx.com.br/images/16/167246760824578.jpg',
        endereco: 'Alameda das Verbenas 343'
      },
      {
        id: "2",  
        title: 'Brinquedo Pop It!', 
        description: 'Brinquedo Pop It, ótimo para crianças. Brinquedo em perfeitas condições',
        dataDoacao: '13/01/2022',
        status: 'Doado',
        ONG: 'Amigos do Bem',
        categoria: 'Brinquedos e Jogos',
        source: 'https://frankfurt.apollo.olxcdn.com/v1/files/py8lqbzx8ku41-RO/image;s=644x461',
        endereco: 'Rua das angelicas 232'
      },
      {
        id: "3", 
        title: 'Livro: Tudo o que nunca contei - Usado', 
        description: 'Livro usado e muito bem conservado. Ótima leitura!',
        dataDoacao: '',
        status: 'Disponível',
        ONG: '',
        categoria: 'Livros e Revistas',
        source: 'https://img.olx.com.br/images/68/681215383550502.jpg',
        endereco: 'Joao Wagner Wey 111'
      },
      {
        id: "4", 
        title: 'Jaqueta Usada', 
        description: 'Jaqueta usada porém em ótimo estado',
        dataDoacao: '',
        status: 'Disponível',
        ONG: '',
        categoria: 'Roupas e acessórios',
        source: 'https://img.olx.com.br/images/87/878206275860987.jpg',
        endereco: 'Avenida General Carneiro 2333'
      }
    ]
  }
  ,
  // A mutations são funções que mudam o valor de alguma variável da state
  mutations: { 
  },

  actions: {
  },

  // As getters são funções que retornam os dados armazenados na state
  getters: {
    // Função que retorna todas as doações
    doacoes(state) {
      return state.doacoes;
    },
    // Funçãom que retorna apenas uma doação, passando o ID da mesma
    doacao(state) {
      return (IdDoacao: string)=>{
        return state.doacoes.find((doacao) => doacao.id === IdDoacao)
      };
    }
  },
})
