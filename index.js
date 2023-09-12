// console.clear();
require('colors');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const path = require('path');
const config = require('./config/config.json');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

// Configurações do Express
app.set('view engine', 'ejs');
app.use(express.static('public'));app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true }));

// Configuração da sessão
app.use(
  session({
    secret: 'user',
    resave: false,
    saveUninitialized: true
  })
);
app.use((req, res, next) => {
  // Verificar se o usuário está autenticado
  res.locals.currentUser = req.session.user || null;
  next();
});


// Configuração do Passport
app.use(passport.initialize());
app.use(passport.session());

// Conexão com o MongoDB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('🍃 | Manguinho |'.white + ' Conectado'.green);
}).catch((error) => {
  console.log('🍃 | Manguinho |'.white + ' Erro de conexão com MongoDB'.red);
  console.log(error.yellow);
});

// Rotas
const indexRoutes = require('./routes/indexRoutes');
const cadastroRoutes = require('./routes/cadastroRoutes');
const loginRoutes = require('./routes/loginRoutes');
const logoutRoutes = require('./routes/logoutRoutes');
const errorRoutes = require('./routes/errorRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const idsRoutes = require('./routes/idsRoutes');
const perfilRoutes = require('./routes/perfilRoutes');
const postagemRoutes = require('./routes/postagemRoutes');
const fotoPostRoutes = require('./routes/fotoPostRoutes');

app.use('/', indexRoutes);
app.use('/cadastro', cadastroRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);
app.use('/erro', errorRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/ids', idsRoutes);
app.use('/perfil', perfilRoutes);
app.use('/post', postagemRoutes);
app.use('/postagem', fotoPostRoutes);

app.use((req, res) => {
  res.redirect('/erro');
});

const porta = process.env.PORT || 1010;
app.listen(porta, () => {
  console.log(`🤩 | Servidor  |`.white + ` http://localhost:${porta}`.rainbow);
});