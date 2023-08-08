const express = require('express');
const router = express.Router();
const User = require('../schemas/Usuario');

router.get('/', (req, res) => {
  // const a = User.find({}, '_id Email Senha NomeDeUsuario')
  // console.log(a)
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
