// Pesquisa2.js
const express = require('express');
const Post = require('../schemas/Post');
const router = express.Router();

router.get('/', async (req, res) => {
  const pesquisa = req.query.pesquisa;

  try {
    // Dividir a pesquisa em palavras-chave
    const keywords = pesquisa.split(' ');
    const tagsLimpa = keywords.filter(pesquisa => pesquisa.trim() !== '');

    // Criar uma expressão regular para corresponder a tags relacionadas
    const regex = new RegExp(tagsLimpa.map(keyword => `.*${keyword}.*`).join('|'), 'i');
    const posts = await Post.find({ 'info.tags': regex });

    // console.log(keywords)
    // console.log('\nlinha quebrada\n')
    // console.log(regex)
    // console.log('\nlinha quebrada\n')
    // console.log(posts)

    res.render('pesquisa/', { posts, pesquisa });

  } catch (error) {
    console.error('Erro ao buscar postagens:', error);
    res.status(500).json({ error: 'Erro ao buscar postagens' });
  }
});

module.exports = router;
