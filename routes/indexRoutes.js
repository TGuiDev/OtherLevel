// const express = require('express');
// const router = express.Router();
// const Post = require('../schemas/Post'); // Importe o modelo Postagem do local correto

// router.get('/', async (req, res) => {
//   try {
//     const postagens = await Post.find(); // Recupere todas as postagens do banco de dados
//     res.render('home/', { currentUser: res.locals.currentUser, postagens }); // Passe as postagens para o template
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Erro ao buscar postagens');
//   }
// });

// router.get('/home', async (req, res) => {
//   try {
//     const postagens = await Post.find(); // Recupere todas as postagens do banco de dados
//     res.render('home/', { postagens }); // Passe as postagens para o template
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Erro ao buscar postagens');
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Post = require('../schemas/Post'); // Importe o modelo Postagem do local correto

router.get('/', async (req, res) => {
  try {
    const postagens = await Post.find(); // Recupere todas as postagens do banco de dados
    res.render('home/', { currentUser: res.locals.currentUser, postagens, post: true }); // Passe as postagens para o template
  } catch (error) {
    // console.error(error);
    res.render('home/', { currentUser: res.locals.currentUser, post: false }); 
  }
});

router.get('/home', async (req, res) => {
  try {
    const postagens = await Post.find(); // Recupere todas as postagens do banco de dados
    res.render('home/', { postagens, post: true }); // Passe as postagens para o template
  } catch (error) {
    // console.error(error);
    res.render('home/', { currentUser: res.locals.currentUser, post: false }); 
  }
});

module.exports = router;
