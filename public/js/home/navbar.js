// Top navigation menu
const topHome = document.getElementById("home");
if (topHome) {
    topHome.addEventListener("click", function () {
        window.location.href = "/";
    });
}

const topHome1 = document.getElementById("home1");
if (topHome1) {
    topHome1.addEventListener("click", function () {
        window.location.href = "/";
    });
}

const topHome2 = document.getElementById("home2");
if (topHome2) {
    topHome2.addEventListener("click", function () {
        window.location.href = "/";
    });
}

const topLogin = document.getElementById("login");
if (topLogin) {
    topLogin.addEventListener("click", function () {
        window.location.href = "/login";
    });
}
const topPost = document.getElementById("post");
if (topPost) {
    topPost.addEventListener("click", function () {
        window.location.href = "/post";
    });
}
const topPerfil = document.getElementById("perfil");
if (topPerfil) {
    topPerfil.addEventListener("click", function () {
        window.location.href = "/perfil";
    });
}
const topLogout = document.getElementById("logout");
if (topLogout) {
    topLogout.addEventListener("click", function () {
        window.location.href = "/logout";
    });
}

const hamLogin = document.getElementById("loginn");
if (hamLogin) {
    hamLogin.addEventListener("click", function () {
        window.location.href = "/login";
    });
}
const hamPost = document.getElementById("postt");
if (hamPost) {
    hamPost.addEventListener("click", function () {
        window.location.href = "/post";
    });
}
const hamPerfil = document.getElementById("perfill");
if (hamPerfil) {
    hamPerfil.addEventListener("click", function () {
        window.location.href = "/perfil";
    });
}
const hamLogout = document.getElementById("logoutt");
if (hamLogout) {
    hamLogout.addEventListener("click", function () {
        window.location.href = "/logout";
    });
}


window.addEventListener('scroll', function() {
  var navbar = document.getElementById('nav');
  
  if (window.pageYOffset > 1) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});



// Função DropDown
const dropdownBtn = document.getElementById("drop");
const dropdownContent = document.getElementById("dropdownContent");
if(dropdownBtn){

  dropdownBtn.addEventListener("click", function() {
    dropdownContent.classList.toggle("show-dropdown");
  });
  
  document.addEventListener("click", function(event) {
    if (!dropdownBtn.contains(event.target)) {
      dropdownContent.classList.remove("show-dropdown");
    }
  });
}


 document.getElementById('dropnav').addEventListener('click', function() {
  var dropdown = document.querySelector('.hamburgerdropdown');
  if (dropdown.style.display === 'flex') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'flex';
  }
});