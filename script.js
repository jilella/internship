// script.js

// GSAP Animations
gsap.from(".circle", { duration: 2, scale: 0, opacity: 0, ease: "bounce" });
gsap.from(".square", { duration: 2, x: 100, opacity: 0, ease: "power2.out" });

// Mouse Movement Effects
document.querySelector(".hero-section").addEventListener("mousemove", (e) => {
  const circle = document.querySelector(".circle");
  const square = document.querySelector(".square");
  const { clientX, clientY } = e;

  const moveX = (clientX / window.innerWidth) * 50 - 25;
  const moveY = (clientY / window.innerHeight) * 50 - 25;

  gsap.to(circle, { x: moveX, y: moveY, duration: 0.3 });
  gsap.to(square, { x: -moveX, y: -moveY, duration: 0.3 });
});
