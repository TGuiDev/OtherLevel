const express = require('express');
const router = express.Router();
const User = require('../schemas/Usuario');

router.get('/', (req, res) => {
  // Verifica se o usuário está autenticado e se é um administrador

  // const admin = (req, res, next) => {
  //   if (req.session.user.admin == true) {
  //     next();
  //   } else {
  //     res.redirect('/'); 
  //   }
  // };


  if (req.session.user.admin != true) {
    // Redireciona para a página inicial ou exibe uma mensagem de erro
    return res.redirect('/');
  }

  User.find({}, '_id Email Senha NomeDeUsuario')
    .then((users) => {
      const userData = users.map((user) => {
        return {
          id: user._id,
          Email: user.Email,
          Senha: user.Senha,
          NomeDeUsuario: user.NomeDeUsuario
        }
      }) 

      res.send(userData);
    })
    .catch((error) => {
      res.status(500).send('Erro ao recuperar os dados dos usuários: ' + error.message);
    });
});

module.exports = router;
