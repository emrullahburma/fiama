const navbar = document.querySelector(".navbar");
const burger = document.querySelector(".burger-menu");
const headericons = document.querySelector(".header-icons");

burger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  headericons.classList.toggle("active");
});
