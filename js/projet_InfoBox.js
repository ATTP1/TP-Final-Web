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

    const imageBoite = document.getElementById("projetsInfoPlus__image");
    const imageBoite2 = document.getElementById("projetsInfoPlus__image2");
    const imageBoite3 = document.getElementById("projetsInfoPlus__image3");
    const imageBoite4 = document.getElementById("projetsInfoPlus__image4");
    const imageBoite5 = document.getElementById("projetsInfoPlus__image5");


    const dateBoite = document.getElementById("projetsInfoPlus__date");

    switch (titreBoite.textContent) {
        case "STREET'ZZA":
            imageBoite.src = "img/projet1_banner.png"
            imageBoite2.src = "img/projet1_image2.png"
            imageBoite3.src = "img/projet1_image3.png"
            imageBoite4.src = "img/projet1_image4.png"
            imageBoite5.src = "img/projet1_image5.png"

            dateBoite.textContent = "2025"

            infoBoite.textContent =
                "Projet Web du cours d'interface web 1 sur une pizzaria fictive.";
            break;

        case "INTERSTELLAR":
            imageBoite.src = "img/projet2_banner.png"
            imageBoite2.src = "img/projet2_image2.png"
            imageBoite3.src = "img/projet2_image3.png"
            imageBoite4.src = "img/projet2_image4.png"
            imageBoite5.src = "img/projet2_image5.png"

            dateBoite.textContent = "2025"

            infoBoite.textContent =
                "Projet web du cours Interface Web 2 sur une œuvre cinématographique.";
            break;

        case "ELDEN RING":
            imageBoite.src = "img/projet3_banner.png"
            imageBoite2.src = "img/projet3_image2.png"
            imageBoite3.src = "img/projet3_image3.png"
            imageBoite4.src = "img/projet3_image4.png"
            imageBoite5.src = "img/projet3_image5.png"

            dateBoite.textContent = "2023"

            infoBoite.textContent =
                "Projet web du cours de programmation sur un jeu aimé."

            break;

        case "CONCRETE WAVES":
            imageBoite.src = "img/projet4_banner.png"
            imageBoite2.src = "img/projet4_banner.png"
            imageBoite3.src = "img/projet4_banner.png"
            imageBoite4.src = "img/projet4_banner.png"
            imageBoite5.src = "img/projet5_banner.png"

            dateBoite.textContent = "2024"

            infoBoite.textContent = "Maquette web sur une entreprise fictive de vétements.";
            break;

        case "COSMOFEST":
            imageBoite.src = "img/projet5_banner.png"
            imageBoite2.src = "img/projet5_banner.png"
            imageBoite3.src = "img/projet5_banner.png"
            imageBoite4.src = "img/projet5_banner.png"
            imageBoite5.src = "img/projet5_banner.png"

            dateBoite.textContent = "2024"

            infoBoite.textContent = "Maquette web sur une entreprise fictive d'évènements.";
            break;

        case "LEVEL UP":
            imageBoite.src = "img/projet6_banner.png"
            imageBoite2.src = "img/projet6_image2.png"
            imageBoite3.src = "img/projet6_image3.png"
            imageBoite4.src = "img/projet6_image4.png"
            imageBoite5.src = "img/projet6_image4.png"

            dateBoite.textContent = "2025"

            infoBoite.textContent =
                "Projet web du cours Interface Web 1 sur un blogue techno.";
            break;
    }


});

btnFermer.addEventListener("click", () => {
    projetsInfoPlus.classList.add("hidden");
});