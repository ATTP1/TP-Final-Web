const titre_accueil = document.getElementsByClassName("animationTitre_accueil");

gsap.from(titre_accueil, {
  x: -200,
  duration: 2,
  opacity: 0,
  stagger: 0.3,
  delay: 2.5,
});

const titre = document.getElementsByClassName("animationTitre");

gsap.from(titre, {
  x: -200,
  duration: 2,
  opacity: 0,
  stagger: 0.3,
  delay: 1,
});

const boite_accueil = document.getElementsByClassName("animationBoite_accueil");

gsap.from(boite_accueil, {
  x: "-65vw",
  duration: 3,
  opacity: 1,
  stagger: 0.3,
  ease: "bounce.out",
  delay: 2.5,
});

const boite = document.getElementsByClassName("animationBoite");

gsap.from(boite, {
  x: "-65vw",
  duration: 3,
  opacity: 1,
  stagger: 0.3,
  ease: "bounce.out",
  delay: 1,
});

const loadingImage1_accueil = document.getElementById("loading_image1");
const loadingImage2_accueil = document.getElementById("loading_image2");
const loadingImage3_accueil = document.getElementById("loading_image3");
const loadingImage4_accueil = document.getElementById("loading_image4");

const loadingBoite_accueil = document.getElementById("pageLoading_accueil");

const loading_sequenceAnimation_accueil = gsap.timeline();

loading_sequenceAnimation_accueil
  .from(loadingImage1_accueil, { y: "-20vh", duration: 0.6, ease: "bounce.out" })
  .to(loadingImage1_accueil, { opacity: 0, duration: 0.1, scale: 1.2 })
  .set(loadingImage2_accueil, { opacity: 1 });

loading_sequenceAnimation_accueil

  .to(loadingImage2_accueil, { opacity: 0, duration: 0.1, delay: 0.3, scale: 1.2 })
  .set(loadingImage3_accueil, { opacity: 1 });

loading_sequenceAnimation_accueil

  .to(loadingImage3_accueil, { opacity: 0, duration: 0.1, delay: 0.3, scale: 1.2 })
  .set(loadingImage4_accueil, { opacity: 1 });

loading_sequenceAnimation_accueil

  .to(loadingImage4_accueil, { opacity: 0, duration: 0.1, delay: 0.3, scale: 1.2 })
  .set(loadingImage1_accueil, { opacity: 1, scale: 1 });

loading_sequenceAnimation_accueil.to(loadingBoite_accueil, {
  opacity: 0,
  duration: 0.3,
  delay: 0.4,
  onComplete: () => {
    loadingBoite_accueil.classList.add("hidden");
  },
});

const loadingBoite_projets = document.getElementById("pageLoading");
const loadingImage_projet = document.getElementById("loading_image");

const loading_sequenceAnimation_projet = gsap.timeline();


loading_sequenceAnimation_projet
  .from(loadingImage_projet, { y: "-20vh", duration: 0.6, ease: "bounce.out" })
  .to(loadingImage_projet, { opacity: 0, duration: 0.3, scale: 1.2 })
  

loading_sequenceAnimation_projet.to(loadingBoite_projets, {
  opacity: 0,
  duration: 0.1,
  delay: 0.4,
  onComplete: () => {
    loadingBoite_projets.classList.add("hidden");
  },
});
