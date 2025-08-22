const carousel = document.getElementById("carousel__plusInfo");

const btnFermer = document.getElementById("projetsInfoPlus__fermer");



carousel.addEventListener("click", () => {
  
  const activeItem = carousel.querySelector('[data-carousel-item]:not(.hidden)');   
  const box = activeItem.querySelector('.carousel_InfoBoite');

  const projetsInfoPlus = document.getElementById("projetsInfoPlus")
  projetsInfoPlus.classList.remove("hidden")
  
  
});

btnFermer.addEventListener("click", () => {
    

  const projetsInfoPlus = document.getElementById("projetsInfoPlus")
  projetsInfoPlus.classList.add("hidden")
  
  
});


