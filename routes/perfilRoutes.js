const express = require('express');
const router = express.Router();
const User = require('../schemas/Usuario');
const Post = require('../schemas/Post'); // Certifique-se de importar o schema da postagem

// Middleware para verificar se o usuário está autenticado
const ensureAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next(); // Permitir o acesso à rota
  } else {
    res.redirect('/login'); // Redirecionar para a página de login
  }
};

router.get('/', ensureAuthenticated, async (req, res) => {
  try {
    const usuario = await User.findById(req.session.user._id); // Encontrar o usuário autenticado
    const postagens = await Post.find({ 'autor.nome': usuario.NomeDeUsuario }); // Encontrar todas as postagens do usuário
    
    res.render('perfil/', { postagens }); // Renderizar a página de perfil com as postagens
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao carregar postagens do usuário.');
  }
});

module.exports = router;
