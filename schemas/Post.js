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
  },
  capa: {
    type: String,
  },
  fotos: {
    type: Array
  },
  tags: {
    type: Array
  }
});

// Criando o modelo da postagem
const Post = mongoose.model('postagemSchema', postagem);

module.exports = Post;