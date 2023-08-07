const express = require('express');
const router = express.Router();
const User = require('../schemas/Usuario');

// Middleware para verificar se o usuário está autenticado
const ensureAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next(); // Permitir o acesso à rota
  } else {
    res.redirect('/login'); // Redirecionar para a página de login
  }
};

router.get('/', ensureAuthenticated, (req, res) => {
  res.render('perfil/');
});

module.exports = router;