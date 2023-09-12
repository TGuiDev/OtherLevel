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
  const username = req.body.usernamee;
  const password = req.body.passwordd;

  User.findOne({ Email: username })
    .then((user) => {
      if (!user) {
        // console.log('Usuário não encontrado:', username);
        return res.render('cadastro/', { message: `Usuário ou Senha incorretos.` });
      }

      if (user.Senha !== password) {
        console.log('Senha incorreta para o usuário:', username);
        return res.render('cadastro/', { message: `Senha incorreta.` });
      }

      // console.log('Login bem-sucedido para o usuário:', username);
      req.session.user = user;
      res.redirect('/');
    })
    .catch((error) => {
      console.error('Erro ao fazer login:', error);
      res.status(500).render('cadastro/', { message: `Erro ao fazer login.` });
    });

    // console.log(User)
});

module.exports = router;