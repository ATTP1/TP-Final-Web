const carousel = document.getElementById("carousel__plusInfo");

const btnFermer = document.getElementById("projetsInfoPlus__fermer");

const projetsInfoPlus = document.getElementById("projetsInfoPlus");

carousel.addEventListener("click", () => {  

  projetsInfoPlus.classList.remove("hidden");

  gsap.from(projetsInfoPlus, {
    y: -1000,
    duration: 1.5,
    opacity: 0.8,
    ease: "bounce.out",
  });
});

btnFermer.addEventListener("click", () => {      

    
  projetsInfoPlus.classList.add("hidden");

  
});

/*

const activeItem = carousel.querySelector(
    "[data-carousel-item]:not(.hidden)"
  );
  const box = activeItem.querySelector(".carousel_InfoBoite");

*/
