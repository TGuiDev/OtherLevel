const express = require('express');
const router = express.Router();
const User = require('../schemas/Usuario');

router.get('/:param', (req, res) => {
  const param = req.params.param;

  // Verifica se o parâmetro é um ID válido
  if (param.match(/^[0-9a-fA-F]{24}$/)) {
    // Se for um ID válido, realiza a busca pelo ID
    User.findById(param)
      .then((user) => {
        if (!user) {
          res.redirect('/home');
        } else {
          res.render('usuario', { user: user });
        }
      })
      .catch((error) => {
          res.redirect('/error');
          // res.status(500).send('Erro ao encontrar o usuário: ' + error.message);
      });
  } else {
    // Se não for um ID válido, realiza a busca pelo firstName
    User.findOne({ NomeDeUsuario: param })
      .then((user) => {
        if (!user) {
          res.redirect('/home');
        } else {
          res.render('usuario', { user: user });
        }
      })
      .catch((error) => {
          res.redirect('/error');
          // res.status(500).send('Erro ao encontrar o usuário: ' + error.message);
      });
  }
});

module.exports = router;