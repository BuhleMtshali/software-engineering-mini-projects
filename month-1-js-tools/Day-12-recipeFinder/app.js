const hamburger = document.querySelector(".hamburger-menu");
const midNav = document.querySelector(".mid-nav");

hamburger.addEventListener("click", () => {
  midNav.classList.toggle("active");
});
