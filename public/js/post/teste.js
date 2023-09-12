var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Postar";
  } else {
    document.getElementById("nextBtn").innerHTML = "Continuar";
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = document.getElementsByClassName("verify");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      y[i].textContent = "Preenchar este campo!"
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}


const titulo = document.getElementById("titulo");
const tituloCounter = document.getElementById("tituloCounter");
titulo.addEventListener("input", function () {
  tituloCounter.textContent = `${titulo.value.length}/85 máx`;
});


function limitWords(inputField, maxWords) {
  inputField.addEventListener("input", function () {
    var words = inputField.value.trim().split(/\s+/);
    if (words.length > maxWords) {
      words = words.slice(0, maxWords);
      inputField.value = words.join(" ");
    }
    document.getElementById("tagCounter").textContent = words.length + "/" + maxWords + " Palavras";
  });

  inputField.addEventListener("keydown", function (event) {
    var words = inputField.value.trim().split(/\s+/);
    if (words.length >= maxWords && event.key === " ") {
      event.preventDefault();
      inputField.blur();
    }
  });

  inputField.addEventListener("blur", function () {
    var words = inputField.value.trim().split(/\s+/);
    if (words.length === maxWords) {
      inputField.blur();
    }
  });
}



function formatPrice(inputField) {
  let value = inputField.value.replace(/[^0-9]/g, '');

  if (value.length > 8) {
    value = value.slice(0, 8);
  }
  let cents = Number(value) / 100;
  let formattedValue = cents.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  if (value === '0' || value === '') {
    formattedValue = 'R$ 00,00';
  }

  inputField.value = formattedValue;
}



let itemCount = 0;

function addItem() {
  const itemList = document.getElementById('item-list');

  itemCount++;

  const newItem = document.createElement('li');
  newItem.classList.add('mb-3');

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Novo item';
  input.id = 'item-input-' + itemCount;

  newItem.appendChild(input);
  itemList.appendChild(newItem);
}