const step1Form = document.getElementById('step1-form');
const step1NextBtn = document.getElementById('step1-next-btn');
const step1Section = document.getElementById('step1-section');
const step2Section = document.getElementById('step2-section');
const next = document.getElementById("botao-avancar")
const voltar = document.getElementById("botao-voltar")

next.addEventListener("click", function () {
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');

    if (
      firstNameInput.value === '' ||
      lastNameInput.value === '' ||
      usernameInput.value === '' ||
      emailInput.value === ''
    ) {
      step1ErrorMsg.textContent = 'Por favor, preencha todos os campos.';
    } else {
      step1Section.style.display = 'none';
      step2Section.style.display = 'block';
    }
});
voltar.addEventListener("click", function () {
  step1Section.style.display = 'block';
  step2Section.style.display = 'none';
});
