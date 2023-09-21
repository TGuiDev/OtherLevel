
const home = document.getElementById("home");
home.addEventListener("click", function () {
  window.location.href = "/";
});

const login = document.getElementById("login");
if (login) {
  login.addEventListener("click", function () {
    window.location.href = "/login";
  });
}
const post = document.getElementById("post");
if (post) {
  post.addEventListener("click", function () {
    window.location.href = "/post";
  });
}

const perfil = document.getElementById("perfil");
if (perfil) {
  perfil.addEventListener("click", function () {
    window.location.href = "/perfil";
  });
}

const logout = document.getElementById("logout");
if (logout) {
  logout.addEventListener("click", function () {
    window.location.href = "/logout";
  });
}

const dropdownBtn = document.getElementById("drop");
const dropdownContent = document.getElementById("dropdownContent");

if (dropdownBtn) {

  dropdownBtn.addEventListener("click", function () {
    dropdownContent.classList.toggle("show-dropdown");
  });

  document.addEventListener("click", function (event) {
    if (!dropdownBtn.contains(event.target)) {
      dropdownContent.classList.remove("show-dropdown");
    }
  });
}


document.getElementById('dropnav').addEventListener('click', function () {
  var dropdown = document.querySelector('.hamburgerdropdown');

  if (dropdown.style.display === 'flex') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'flex';
  }

  // Altere o ícone
  var icon = document.querySelector('.fa-solid.fa-bars');
  var icon2 = document.querySelector('.fa-solid.fa-x');
  if (icon) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-x');
  }
  if (icon2) {
    icon2.classList.remove('fa-x');
    icon2.classList.add('fa-bars');
  }
});


function toggleNav() {
  const navHamburger = document.querySelector('.navhamburger');
  navHamburger.classList.toggle('open');
}