const carousel = document.getElementById("carousel__plusInfo");

const btnFermer = document.getElementById("projetsInfoPlus__fermer");

const projetsInfoPlus = document.getElementById("projetsInfoPlus");

carousel.addEventListener("click", (projet) => {
  projetsInfoPlus.classList.remove("hidden");

  gsap.from(projetsInfoPlus, {
    y: -1000,
    duration: 1.5,
    opacity: 0.8,
    ease: "bounce.out",
  });

  const itemActif = projet.target.closest("[data-carousel-item]");
  const boite = itemActif.querySelector(".carousel_InfoBoite");
  const NomProjet = boite.querySelector("h3");

  const titreBoite = document.getElementById("projetsInfoPlus__titre");
  

  titreBoite.textContent = NomProjet.textContent.trim();

  
  const infoBoite = document.getElementById("projetsInfoPlus__info");

  console.log(titreBoite.textContent)

  switch (titreBoite.textContent) {
    case "STREET'ZZA":
      infoBoite.textContent =
        " Un projet fait au cour de mon parcours au Cegep de Trois-Riviere.";
      break;

    case "INTERSTELLAR":
      infoBoite.textContent =
        " Un projet fait au cour de mon parcours au Cegep de Trois-Riviere2.";
      break;

    case "ELDEN RING":
      infoBoite.textContent =
        " Un projet fait au cour de mon parcours au Cegep d'Édouard-MontPetit.";
      break;

    case "CONCRETE WAVES":
      infoBoite.textContent = " Un projet fait dans mon temps libre.";
      break;

    case "COSMOFEST":
      infoBoite.textContent = " Un projet fait dans mon temps libre2.";
      break;

    case "LEVEL UP":
      infoBoite.textContent =
        " Un projet fait au cour de mon parcours au Cegep de Trois-Riviere3.";
      break;
  }
 
  
});

btnFermer.addEventListener("click", () => {
  projetsInfoPlus.classList.add("hidden");
});
