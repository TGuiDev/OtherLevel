const mongoose = require('mongoose');

const usuario = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  NomeCompleto: {
    type: String,
  },
  NomeDeUsuario: {
    type: String,
    unique: true,
  },
  Email: {
    type: String,
    unique: true
  },
  Telefone: {
    type: String,
  },
  Senha: {
    type: String,
    required: true
  },
  Bio: {
    type: String,
  },
  ProjetosPostados: {
    type: Number,
    default: 0
  },
  Seguidores: {
    type: Array,
  },
  Seguindo: {
    type: Array,
  },
  Avatar :{
    type: String,
    default: "https://imgur.com/XwHOhQj.png",
  }
});

const User = mongoose.model('userSchema', usuario);
module.exports = User;

// module.exports = mongoose.model("currencySchema", userSchema);


// DELETAR TODOS OS USUÁRIOS
// async function deleteAllUsers() {
//   try {
//     await User.deleteMany({});
//     console.log('Todos os usuários foram removidos com sucesso.');
//   } catch (error) {
//     console.error('Erro ao excluir usuários:', error);
//   }
// }

// deleteAllUsers();