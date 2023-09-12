const express = require('express');
const session = require('express-session');
const router = express.Router();
const User = require('../schemas/Usuario');

router.use(
  session({
    secret: 'user',
    resave: false,
    saveUninitialized: true
  })
);

router.get('/', (req, res) => {
  res.render('cadastro/', { message: null });
});

router.post('/', (req, res) => {
  User.findOne({ email: req.body.emaillogin, password: req.body.passwordlogin })
    .then((user) => {
      if (!user) {
        return res.render('cadastro/', { message: `Usuário ou Senha incorretos.` });
      }
      else if (user.password !== req.body.passwordlogin) {
        return res.render('cadastro/', { message: `Senha incorreta.` });
      }
      
      req.session.user = user;

      res.redirect('/');
    })
    .catch((error) => {
      res.status(500).render('cadastro/', { message: 'Erro ao fazer login: ' + error.message });
    });
});

module.exports = router;