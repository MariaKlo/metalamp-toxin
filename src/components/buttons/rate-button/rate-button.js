class RateButton {
  starWrap = document.querySelector('.js-rate-button__wrap');

  starBorder = document.querySelector('.js-material-icons_border');

  starFilled = document.querySelector('.js-material-icon_filled');

  constructor() {
    this.init();
  }

  init() {
    this.toggleStar();
  }

  toggleStar() {
    if (this.starBorder !== null) {
      this.starWrap.addEventListener('click', () => {
        this.starBorder.classList.toggle('hide-star');
        this.starFilled.classList.toggle('show-star');
      });
    }
  }
}

const rateButton = new RateButton();
