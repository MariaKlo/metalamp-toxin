class Hamburger {

  hamburger = document.querySelector('.js-filter__hamburger');

  filter = document.querySelector('.js-filter');

  constructor() {
    this.init();
  }

  init() {
    this.openMenu();
    this.closeMenu();
  }

  openMenu() {
    hamburger.addEventListener('click', hamburgerMenu);

    function hamburgerMenu() {
        hamburger.classList.toggle('filter_active');
        filter.classList.toggle('filter_active');
    }
  }

  closeMenu() {
    filter.addEventListener('click', closeHamburger);

    function closeHamburger() {
        hamburger.classList.remove('filter_active');
    }
  }
}

let hamburgerMenu = new Hamburger();