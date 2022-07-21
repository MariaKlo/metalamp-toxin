class Hamburger {

  hamburgerFilter = document.querySelector('.js-filter__hamburger');

  hamburgerFilterStyle = document.querySelector('.filter__hamburger');

  filter = document.querySelector('.js-filter');

  filterStyle = document.querySelector('.filter');

  constructor() {
    this.init();
  }

  init() {
    if (this.hamburgerFilter && this.filter) {
      this.openFilterMenu();
      this.closeFilterMenu();
    }
  }

  openFilterMenu() {
    this.hamburgerFilter.addEventListener('click', () => {
  //     this.hamburgerFilter.classList.add('filter_active');
  //     this.filter.classList.add('filter_active');
      this.hamburgerFilterStyle.classList.toggle('filter_active');
      this.filterStyle.classList.toggle('filter_active');
    });
  }

  closeFilterMenu() {
  //   this.filter.addEventListener('click', () => {
  //     this.hamburgerFilter.classList.remove('filter_active');
  //   });
  }
}

let hamburgerMenu = new Hamburger();