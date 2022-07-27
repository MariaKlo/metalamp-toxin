class Hamburger {

  hamburger = document.querySelector('.js-hamburger');

  filterHamburger = document.querySelector('.js-filter__hamburger');

  filter = document.querySelector('.js-filter');

  filterStyle = document.querySelector('.filter');

  filterMain = document.querySelector('.filter-main');

  header = document.querySelector('.js-header__wrapper');

  headerStyle = document.querySelector('.header__wrapper');

  constructor() {
    this.init();
  }

  init() {
    if (this.filter !== null && this.filterHamburger !== null && 
      this.filterMain !== null && this.filterStyle !== null) {
      this.openFilterMenu();
    }
    this.openHeaderMenu();
  }

  openFilterMenu() {
    this.filterHamburger.addEventListener('click', () => {
      this.filterHamburger.classList.toggle('filter__hamburger_active');
      this.filterStyle.classList.toggle('filter_active');
    });
  }

  openHeaderMenu() {
    this.hamburger.addEventListener('click', () => {
      this.hamburger.classList.toggle('hamburger_active');
      this.headerStyle.classList.toggle('header__wrapper_active');
    });
  }
}

let hamburgerMenu = new Hamburger();