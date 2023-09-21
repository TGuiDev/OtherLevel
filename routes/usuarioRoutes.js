const express = require('express');
const router = express.Router();
const User = require('../schemas/Usuario');
const Post = require('../schemas/Post'); // Certifique-se de importar o schema da postagem

router.get('/:param',async (req, res) => {
  const param = req.params.param;

  // Verifica se o parâmetro é um ID válido
  if (param.match(/^[0-9a-fA-F]{24}$/)) {
    // Se for um ID válido, realiza a busca pelo ID
    User.findById(param)
      .then( async(user) => {
        if (!user) {
          res.redirect('/home');
        } else {
          const postagens = await Post.find({ 'autor.nome': user.NomeDeUsuario });
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
      .then(async (user) => {
        if (!user) {
          res.redirect('/home');
        } else {
          const postagens = await Post.find({ 'autor.nome': user.NomeDeUsuario });
          // console.log(user.Seguidores.length);
          res.render('usuario', { user: user, postagens: postagens });
        }
      })
      .catch((error) => {
          res.redirect('/error');
          console.log(error)
          // res.status(500).send('Erro ao encontrar o usuário: ' + error.message);
      });
  }
});

module.exports = router;