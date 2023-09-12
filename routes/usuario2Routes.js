const express = require('express');
const router = express.Router();
const User = require('../schemas/Usuario');

router.get('/', (req, res) => {
  res.redirect('/home');
});

module.exports = router;