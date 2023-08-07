const t1 = document.querySelector(".t1");
const dark = document.querySelector(".dark");
const t2 = document.querySelector(".t2");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item.active");
const bg = document.querySelector("body");
const botao = document.querySelectorAll("button");
const guild = document.querySelectorAll(".guild-name");
const cor1Btn = document.getElementById("cor1");
const cor2Btn = document.getElementById("cor2");
const cor3Btn = document.getElementById("cor3");
const cor4Btn = document.getElementById("cor4");
const card    = document.getElementById("additional");
const card2    = document.getElementById("titi");

const DARK_THEME = 'dark-theme';
const LIGHT_THEME = 'light-theme';

const theme = localStorage.getItem('theme');


if (theme === DARK_THEME) {
  bg.className = "preto";
  sidebar.className = "sidebar dark";
  activeListItem.className = "list-item dark active"; 
;
  t1.classList.add('b1')
  t2.classList.remove('b1')

  botao.forEach(botao => {
    botao.classList.add("a2");
    botao.classList.remove("a3");
  });

  guild.forEach(botao => {
    botao.classList.add("guild-name2");
    botao.classList.remove("guild-name");
  });
} else if (theme === LIGHT_THEME) {
  bg.className = "branco";
  sidebar.className = "sidebar light";
  activeListItem.className = "list-item light active";
  
  t2.classList.add('b1')
  t1.classList.remove('b1')


  botao.forEach(botao => {
    botao.classList.add("a3");
    botao.classList.remove("a2");
  }) 

  guild.forEach(botao => {
    botao.classList.add("guild-name");
    botao.classList.remove("guild-name2");
  });
}

function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}


t1.addEventListener("click", () => {
  setTimeout(() => {
    bg.className = "preto";
    sidebar.className = "sidebar dark";
    activeListItem.className = "list-item dark active"; 

    t1.classList.add('b1')
    t2.classList.remove('b1')

    botao.forEach(botao => {
      botao.classList.add("a2");
      botao.classList.remove("a3");
    });

    guild.forEach(botao => {
      botao.classList.add("guild-name2");
      botao.classList.remove("guild-name");
    });

    saveTheme(DARK_THEME);
  }, 10)
});

t2.addEventListener("click", () => {
  setTimeout(() => {
    bg.className = "branco";
    sidebar.className = "sidebar light";
    activeListItem.className = "list-item light active";

    t2.classList.add('b1')
    t1.classList.remove('b1')


    botao.forEach(botao => {
      botao.classList.add("a3");
      botao.classList.remove("a2");
    }) 
    
    guild.forEach(botao => {
      botao.classList.add("guild-name");
      botao.classList.remove("guild-name2");
    });

    saveTheme(LIGHT_THEME);
  }, 10);
});

const dash = document.getElementById("dashboard");
dash.addEventListener("click", function() {
    window.location.href = "/perfil/dashboard";
});

const perfil = document.getElementById("perfil");
perfil.addEventListener("click", function() {
  window.location.href = "/perfil";
});

const home = document.getElementById("home");
home.addEventListener("click", function() {
  window.location.href = "/";
});

const sair = document.getElementById("sair");
sair.addEventListener("click", function() {
  window.location.href = "/logout";
});

const login = document.getElementById("login");
login.addEventListener("click", function() {
  window.location.href = "/login";
});

