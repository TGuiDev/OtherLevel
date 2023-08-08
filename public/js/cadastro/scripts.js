// BOTÃO DE CONTINUAR E VOLTAR
const continuar = document.getElementById('botao-avancar')
const voltar = document.getElementById('botao-voltar')
const concluir = document.getElementById('botao-concluir')
const cont1 = document.getElementById('cont1')
const cont2 = document.getElementById('cont2')
const passo = document.getElementById('passo')

// FUNÇÃO DE CONTINUAR
continuar.addEventListener("click", function() {
var firstNameInput = document.getElementById('first-name');
var lastNameInput = document.getElementById('last-name');
var usernameInput = document.getElementById('username');
var emailInput = document.getElementById('email');
var senha = document.getElementById('password');

if (
    firstNameInput.value === '' ||
    lastNameInput.value === '' ||
    // usernameInput.value === '' ||
    senha.value === '' ||
    emailInput.value === ''
  ) {
    step1ErrorMsg.style.display = "block";
    setTimeout(function() {
      step1ErrorMsg.style.display = 'none';
    }, 3000);
    // step1ErrorMsg.textContent = ' Por favor, preencha todos os campos.';
  } else {
    cont1.style.display = 'none';
    cont2.style.display = 'block';
    continuar.style.display = 'none';
    voltar.style.display = 'block';
    concluir.style.display = 'block';
    passo.innerText = 'Passo 2'
  }
});

// FUNÇÃO DE VOLTAR
voltar.addEventListener("click", function() {
  cont1.style.display = 'block';
  cont2.style.display = 'none';
  continuar.style.display = 'block';
  voltar.style.display = 'none';
  concluir.style.display = 'none';
  passo.innerText = 'Passo 1'
});

// ANIMAÇÃO DE LOGIN PARA REGISTRO E VICE VERSA 

document.addEventListener("DOMContentLoaded", function() {
  var btnSignin = document.querySelector("#signin");
  var btnSignup = document.querySelector("#signup");
  var body = document.querySelector("body");

  btnSignin.addEventListener("click", function () {
     body.className = "sign-in-js"; 
  });

  btnSignup.addEventListener("click", function () {
      body.className = "sign-up-js";
  });

  // const hamburger = document.querySelector(".hamburger");
  // const navLinks = document.querySelector(".nav-links");
  // const links = document.querySelectorAll(".nav-links li");

  // hamburger.addEventListener("click", () => {
  //   navLinks.classList.toggle("open");
  //   links.forEach(link => {
  //     link.classList.toggle("fade");
  //   });
  // });
});

function mostrarMensagem() {
    const erroElement = document.getElementById('message');
    const conteudo = erroElement.textContent.trim();

    if (conteudo.length > 2) {
      erroElement.classList.remove('display-none');
      erroElement.style.backgroundColor = 'red';

      setTimeout(function() {
        erroElement.classList.add('display-none');
      }, 5000);
    }
  }

  mostrarMensagem();

const botaoConcluir = document.getElementById('botao-concluir');

botaoConcluir.addEventListener("click", function() {
  step1ErrorMsg.innerText = 'Verifique os dados do Passo-1';
  step1ErrorMsg.style.display = "block";
    setTimeout(function() {
      step1ErrorMsg.style.display = 'none';
    }, 3000);
})