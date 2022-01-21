const hamburger = document.querySelector(".filter__hamburger");
const filter = document.querySelector(".filter");

hamburger.addEventListener("click", hamburgerMenu);

function hamburgerMenu() {
    hamburger.classList.toggle("filter_active");
    filter.classList.toggle("filter_active");
}

filter.addEventListener("click", closeMenu);

function closeMenu() {
    hamburger.classList.remove("filter_active");
}