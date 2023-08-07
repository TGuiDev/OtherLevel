const express = require('express');
const session = require('express-session');
const router = express.Router();
const User = require('../schemas/Usuario');

router.get('/', (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            console.log('Erro ao fazer logout:', error);
        }
        res.redirect('/');
    });
});
  
module.exports = router;
