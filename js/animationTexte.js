const titre = document.getElementsByClassName("animationTitre");

gsap.from(titre, {
  x: -200,
  duration: 2,
  opacity: 0,
  stagger: 0.3,
  delay:2.5
});

const boite = document.getElementsByClassName("animationBoite");

gsap.from(boite, {
  x: "-65vw",
  duration: 3,
  opacity: 1,
  stagger: 0.3,
  ease: "bounce.out",
  delay:2.5
});



const loadingImage1 = document.getElementById("loading_image1");
const loadingImage2 = document.getElementById("loading_image2");
const loadingImage3 = document.getElementById("loading_image3");
const loadingImage4 = document.getElementById("loading_image4");

const loadingBoite = document.getElementById("pageLoading");

const loading_sequenceAnimation = gsap.timeline();

loading_sequenceAnimation
  .from(loadingImage1, { y: "-20vh", duration: 0.6, ease: "bounce.out" })
  .to(loadingImage1, { opacity: 0, duration: 0.1, scale: 1.2 })
  .set(loadingImage2, { opacity: 1 });

loading_sequenceAnimation

  .to(loadingImage2, { opacity: 0, duration: 0.1, delay: 0.3, scale: 1.2 })
  .set(loadingImage3, { opacity: 1 });

loading_sequenceAnimation

  .to(loadingImage3, { opacity: 0, duration: 0.1, delay: 0.3, scale: 1.2 })
  .set(loadingImage4, { opacity: 1 });

loading_sequenceAnimation

  .to(loadingImage4, { opacity: 0, duration: 0.1, delay: 0.3, scale: 1.2 })
  .set(loadingImage1, { opacity: 1, scale: 1, });

loading_sequenceAnimation
    .to(loadingBoite, {
        opacity:0,duration:0.3,delay: 0.4,
         onComplete: () => {
    loadingBoite.classList.add("hidden")
  }
        
    })