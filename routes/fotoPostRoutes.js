const express = require('express');
const router = express.Router();
const User = require('../schemas/Usuario');
const Post = require('../schemas/Post');

const ensureAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/'); 
  }
};

router.get('/:id', (req, res) => {
  const postagemId = req.params.id;

  Post.findById(postagemId)
    .then((postagem) => {
      res.render('postagem', { postagem });
    })
    .catch((error) => {
      // console.log(error);
      // res.send('Post não encontrado');
      res.redirect('/error');
    });
});

module.exports = router;