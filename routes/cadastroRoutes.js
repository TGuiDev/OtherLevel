const express = require('express');
const router = express.Router();
const User = require('../schemas/Usuario');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const path = require('path');
const fs = require('fs');


// Configuração do multer para upload de imagens
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folderPath = path.join(__dirname, '../public/uploads/avatar'); 
    // Substitua 'pasta_de_upload' pelo nome da pasta que deseja criar e salvar as imagens

    // Verifica se a pasta de destino existe, senão cria ela
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    
    cb(null, folderPath);
  },
  filename: (req, file, cb) => {
    const uniqueId = generateRandomId();
    const fileName = `${uniqueId}${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

router.get('/', (req, res) => {
  res.render('cadastro/', { message: '' });
});

router.post('/', upload.single('avatar'), (req, res) => {
  // Resto do código como antes
  // Agora, req.file contém os detalhes do arquivo enviado

  const uniqueId = generateRandomId();
  const newUser = new User({
    token: uniqueId,
    NomeCompleto: req.body.name,
    NomeDeUsuario: req.body.username,
    Email: req.body.email,
    Telefone: req.body.phone,
    Senha: req.body.password,
    Bio: req.body.bio,
    Avatar: req.file ? '../uploads/avatar/' + req.file.filename : '', // Salva o nome do arquivo no campo Avatar
  });

  newUser.save()
    .then((user) => {
      req.session.user = user;
      res.redirect('/perfil');
    })
    .catch((error) => {
      let message;
      if (error.code === 11000) {
        if (error.keyPattern.email) {
          message = 'Este e-mail já está sendo usado.';
        } else if (error.keyPattern.username) {
          message = 'Username não disponível.';
        }
      } else {
        message = 'Verifique se todos os campos estão corretos!';
      }

      if (message) {
        res.render('cadastro/', { message });
      } else {
        console.log(error.message);
      }
    });
});

function generateRandomId() {
  const uniqueId = uuidv4();
  return uniqueId;
}

// Rota para exibir o perfil do usuário após o cadastro
router.get('/perfil', (req, res) => {
  const user = req.session.user;
  res.render('perfil', { user });
});

module.exports = router;
