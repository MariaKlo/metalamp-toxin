const hamburger = document.querySelector(".hamburger");
const headerMenu = document.querySelector(".header__menu");
const headerItem = document.querySelector(".header__item");
const headerButtons = document.querySelector(".header__buttons");

hamburger.addEventListener("click", hamburgerMenu);

function hamburgerMenu() {
    hamburger.classList.toggle("active");
    headerMenu.classList.toggle("active");
    headerButtons.classList.toggle("active");
}

headerItem.addEventListener("click", closeMenu);

function closeMenu() {
    hamburger.classList.remove("active");
    headerMenu.classList.remove("active");
    headerButtons.classList.remove("active");
}