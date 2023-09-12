const mongoose = require('mongoose');

const usuario = new mongoose.Schema({
  admin: {
    type: Boolean,
    default: false
  },
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
  Avatar: {
    type: String,
    default: "https://imgur.com/XwHOhQj.png",
  },
  Redes: {
    Linkedin: {
      default: "Não Informado",
      type: String,
    },
    Insta: {
      default: "Não Informado",
      type: String
    },
    Behance: {
      default: "Não Informado",
      type: String
    },
    Dribble: {
      default: "Não Informado",
      type: String
    },
    Face: {
      default: "Não Informado",
      type: String
    },
    Vimeo: {
      default: "Não Informado",
      type: String
    },
    GitHub: {
      default: "Não Informado",
      type: String
    }, 
  },
  Links: {
    Linkedin: {
      default: "#",
      type: String,
    },
    Insta: {
      default: "#",
      type: String
    },
    Behance: {
      default: "#",
      type: String
    },
    Dribble: {
      default: "#",
      type: String
    },
    Face: {
      default: "#",
      type: String
    },
    Vimeo: {
      default: "#",
      type: String
    },
    GitHub: {
      default: "#",
      type: String
    },
  },
  Tags: {
    type: Array,
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