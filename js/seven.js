document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollToPlugin, TextPlugin)

  const pacmanEL = document.getElementById("pac-man");
  gsap.to(pacmanEL, { duration: 2, x: 500 });
});
