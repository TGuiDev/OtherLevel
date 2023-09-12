const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const router = express.Router();
const Post = require('../schemas/Post');
const User = require('../schemas/Usuario');
const fs = require('fs');

let filename = '';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'coverImage') {
      cb(null, 'public/uploads/capas/');
    } else {
      cb(null, 'public/uploads/images/');
    }
  },
  filename: function (req, file, cb) {
    gerarSequenciaAleatoria((sequencia) => {
      const ext = file.originalname.split('.').pop();
      filename = sequencia + '.' + ext;
      cb(null, filename);
    });
  },
});

const upload = multer({ storage });

const uploadFields = upload.fields([
  { name: 'foto', maxCount: 55 }, // Set the maximum number of photos to 5 (adjust as needed)
  { name: 'coverImage', maxCount: 1 }, // Allow only one cover image
]);

const ensureAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/'); 
  }
};

router.get('/', ensureAuthenticated, (req, res) => {
  res.render('postar/', { message: '' });
});

router.post('/', uploadFields, async (req, res) => {
  // console.log('Storage:' + storage)
  // console.log('Upload:' + upload)
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const datinha = formattedDate + ' ' + formattedTime;

  const usuarioLogadoId = req.session.user; 
  let usuarioLogadoNome;
  let usuarioLogadoFoto;

  const usuarioLogado = await User.findById(usuarioLogadoId);
  try {
    if (usuarioLogado) {
      usuarioLogadoNome = usuarioLogado.NomeDeUsuario;
      usuarioLogadoFoto = usuarioLogado.Avatar
    } else {
      usuarioLogadoNome = '';
      usuarioLogadoFoto = '';
      console.log('Usuário não encontrado');
    }
  } catch (error) {
    console.log(error);
  }

  console.log(usuarioLogado.ProjetosPostados);

  const newPost = new Post({
    autor: {
      nome: usuarioLogadoNome, 
      foto: usuarioLogadoFoto, 
    },
    info: {
      titulo: req.body.titulo,
      descricao: req.body.conteudo,
      data: datinha,
    },
    capa: req.files['coverImage'] ? 'uploads/capas/' + req.files['coverImage'][0].filename : '',
    fotos: req.files['foto'].map((file) => 'uploads/images/' + file.filename),
    tags: req.body.tags,
  })
  try {
    usuarioLogado.ProjetosPostados += 1
    await usuarioLogado.save();
    console.log(usuarioLogado.ProjetosPostados);
  }
  catch (error) {
    console.log(error);
  }
  

  // console.log(newPost)

  newPost.save()
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.log(error);
    });
});


router.get('/all', ensureAuthenticated, (req, res) => {
  Post.find()
    .then((posts) => {
      res.render('all/', { posts });
    })
    .catch((error) => {
      console.log(error);
      res.redirect('/');
    });
});

function gerarSequenciaAleatoria(callback) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let sequencia = '';

  for (let i = 0; i < 75; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    sequencia += caracteres.charAt(indice);
  }
  callback(sequencia);
}
setInterval(() => {
  gerarSequenciaAleatoria((sequencia) => {
    // console.log(sequencia);
  });
}, 5);

module.exports = router;