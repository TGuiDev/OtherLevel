const mongoose = require('mongoose');

// Definindo o esquema da postagem
const postagem = new mongoose.Schema({
  autor: {
    nome: {
      type: String,
    },
    foto: {
      type: String,
    },
  },
  info: {
    titulo: {
      type: String,
    },
    descricao: {
      type: String,
    },
    data: {
      type: String,
    },
    tags: {
      type: Array
    },
    categorias: {
      categoria: {
        type: String,
      },
      subcategoria: {
        type: String
      }
    }
  },
  capa: {
    type: String,
  },
  fotos: {
    type: Array
  },
  planos: {
    bronze: {
      valor: {
        type: String,
        default: 'R$ 00,00'
      },
      opcao: {
        op1: {
          type: String,
          default: `Não informado.`
        },
        op2: {
          type: String,
          default: `Não informado.`
        },
        op3: {
          type: String,
          default: `Não informado.`
        },
      }
    },
    prata: {
      valor: {
        type: String,
        default: 'R$ 00,00'
      },
      opcao: {
        op1: {
          type: String,
          default: `Não informado.`
        },
        op2: {
          type: String,
          default: `Não informado.`
        },
        op3: {
          type: String,
          default: `Não informado.`
        },
        op4: {
          type: String,
          default: `Não informado.`
        },
        op5: {
          type: String,
          default: `Não informado.`
        },
      }
    },
    ouro: {
      valor: {
        type: String,
        default: 'R$ 00,00'
      },
      opcao: {
        op1: {
          type: String,
          default: `Não informado.`
        },
        op2: {
          type: String,
          default: `Não informado.`
        },
        op3: {
          type: String,
          default: `Não informado.`
        },
        op4: {
          type: String,
          default: `Não informado.`
        },
        op5: {
          type: String,
          default: `Não informado.`
        },
        op6: {
          type: String,
          default: `Não informado.`
        },
      }
    }
  },
});

// Criando o modelo da postagem
const Post = mongoose.model('postagemSchema', postagem);

module.exports = Post;