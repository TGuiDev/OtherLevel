const gallery = document.getElementById('gallery');
const mainImage = document.getElementById('mainImage');

gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        mainImage.src = event.target.src;
    }
});


// Atualize este trecho de código no seu script JavaScript existente
// Obtém os elementos dos botões de navegação
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Obtém os elementos da páginação
const currentPage = document.getElementById('currentPage');
const totalPages = document.getElementById('totalPages');

// Obtém o wrapper do carrossel e os itens do carrossel
const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselItems = document.querySelectorAll('.carousel-item');
const itemHeight = carouselItems[0].clientHeight;

// Inicializa o índice atual do carrossel
let currentIndex = 0;

// Função para mostrar o slide atual
function showSlide(index) {
  // Calcula o índice do item central do carrossel
  const middleIndex = Math.floor(carouselItems.length / 2);
  
  // Calcula o deslocamento em relação ao item central
  const offset = middleIndex - index;

  // Percorre os itens do carrossel
  carouselItems.forEach((item, i) => {
    // Calcula a distância a partir do item central
    const distanceFromMiddle = i - middleIndex + offset;
    
    // Aplica a transformação de deslocamento vertical
    item.style.transform = `translateY(${distanceFromMiddle * (itemHeight - 90)}px)`;
    
    // Aplica a classe "slide-up" para animação, se não for o item central
    item.classList.toggle('slide-up', i !== middleIndex);
  });

  // Atualiza o índice atual
  currentIndex = index;

  // Atualiza a página atual
  currentPage.textContent = (index + 1).toString();
}

// Função para avançar para o próximo slide
nextButton.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, carouselItems.length - 1);
  showSlide(currentIndex);
});

// Função para retroceder para o slide anterior
prevButton.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  showSlide(currentIndex);
});

// Função para navegar com a roda do mouse
carouselWrapper.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    currentIndex = Math.min(currentIndex + 1, carouselItems.length - 1);
  } else {
    currentIndex = Math.max(currentIndex - 1, 0);
  }

  showSlide(currentIndex);
});

// Mostra a primeira imagem do carrossel ao carregar a página
showSlide(currentIndex);
