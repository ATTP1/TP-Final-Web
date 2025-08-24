const btn_navBarM = document.getElementById("navBar_M_animation");

const navBar_sequenceAnimation = gsap.timeline({
  paused: true,
  reversed: true,
});

navBar_sequenceAnimation
  .to("#iconBarMobile a", {
    opacity: 0,
  })
  .to(".navBar_M_animation", {
    yPercent: 75,
    duration: 1,
    ease: "bounce.out",
  })
  .to(".navBar_M_animation", {
    opacity: 0.8,
    duration: 1,
    
  });

btn_navBarM.addEventListener("click", () => {
  if (navBar_sequenceAnimation.reversed()) {
    navBar_sequenceAnimation.play();
  } else {
    navBar_sequenceAnimation.reverse();
  }
});

window.addEventListener("load", () => {
  gsap.fromTo(
    ".zoneNavBarLink",
    { x: 200 },
    {
      x: 0,      
      duration: 1.5,      
      ease: "bounce.out",      
      clearProps: "opacity"
    }
  );
  gsap.from(".zoneNavBarIcon", {
    x: 200,
    duration: 1.5,
    opacity:0,
    stagger: 0.2,
    ease: "bounce.out",
  });
  

  
});

