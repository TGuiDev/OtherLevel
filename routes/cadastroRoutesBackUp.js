const express = require('express');
const router = express.Router();
const User = require('../schemas/Usuario');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
  res.render('cadastro/', { message: '' });
});

router.post('/', (req, res) => {
  const uniqueId = generateRandomId();
  const newUser = new User({
    token: uniqueId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
    phone: req.body.phone,
    // dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    // address: req.body.address,
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

module.exports = router;