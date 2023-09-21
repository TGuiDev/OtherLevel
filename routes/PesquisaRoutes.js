const express = require('express');
const User = require('../schemas/Usuario');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Post = require('../schemas/Post');
const router = express.Router();

// Rota para filtrar por tag
router.get('/:tag', async (req, res) => {
  const tag = req.params.tag;

  try {
    const posts = await Post.find({ 'info.categorias.categoria': tag });

    res.render('pesquisa/', { posts, pesquisa: tag });

  } catch (error) {
    console.error('Erro ao buscar postagens:', error);
    res.status(500).json({ error: 'Erro ao buscar postagens' });
  }
});

module.exports = router;
