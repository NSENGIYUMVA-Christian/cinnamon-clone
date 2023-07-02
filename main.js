// navbar functionality

// getting toggle buttons
const showMenu = document.getElementById("showMenu");
const hideMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const nav = document.querySelector("nav");

console.log("this is nav", nav);

showMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  showMenu.classList.toggle("hidden");
});
hideMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  showMenu.classList.toggle("hidden");
});
