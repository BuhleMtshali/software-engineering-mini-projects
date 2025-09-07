const hamburger = document.querySelector(".hamburger-menu");
const midNav = document.querySelector(".mid-nav");

hamburger.addEventListener("click", () => {
  midNav.classList.toggle("active");
});

//altering the body
let bodyWrapper = document.querySelector(".recipe-wrapper");