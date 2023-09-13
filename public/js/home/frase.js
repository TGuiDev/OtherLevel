const fraseElement = document.getElementById("frase");
// const palavras = ["Programador", "Designer", "Editor", "Fotógrafo"];
const palavras = ["Programador", "Designer", "Editor de Vídeo", "Fotógrafo", "Escritor", "Músico", "Artista"];
let indice = 0;

function digitarPalavra() {
  const palavraAtual = palavras[indice];
  let i = 0;

  const digitarInterval = setInterval(() => {
    fraseElement.textContent = palavraAtual.slice(0, i) + "";
    i++;

    if (i > palavraAtual.length) {
      clearInterval(digitarInterval);
      setTimeout(apagarPalavra, 2000);
    }
  }, 200);
}

function apagarPalavra() {
  let i = fraseElement.textContent.length - 1;

  const apagarInterval = setInterval(() => {
    fraseElement.textContent = fraseElement.textContent.slice(0, i) + "";
    i--;

    if (i < 0) {
      clearInterval(apagarInterval);
      indice = (indice + 1) % palavras.length;
      setTimeout(digitarPalavra, 500);
    }
  }, 100);
}

digitarPalavra();




