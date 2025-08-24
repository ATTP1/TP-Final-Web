const titre = document.getElementsByClassName("animationTitre");

gsap.from(titre, {
  x: -200,
  duration: 2,
  opacity: 0,
  stagger: 0.3,
});

const boite = document.getElementsByClassName("animationBoite")

gsap.from(boite, {
  x: "-65vw",
  duration: 3,
  opacity: 1,
  stagger: 0.3,
  ease: "bounce.out",

});



gsap.from('#contact_liens', {
  x: "-65vw",
  duration: 3,
  opacity: 1,
  stagger: 0.3,
  ease: "bounce.out",

});