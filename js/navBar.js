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
  });

btn_navBarM.addEventListener("click", () => {
  if (navBar_sequenceAnimation.reversed()) {
    navBar_sequenceAnimation.play();
  } else {
    navBar_sequenceAnimation.reverse();
  }
});
