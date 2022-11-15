class RateButton {
  starWrap = document.querySelectorAll('.js-rate-button__wrap');

  starFilled = document.querySelectorAll('.js-material-icon_filled');

  constructor() {
    this.init();
  }

  init() {
    this.toggleStar();
  }

  toggleStar() {
    this.starWrap.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        for (let i = 0, j = 5; i <= 55; j <= 60, i += 5, j += 5) {
          if (index && index < j && index >= i) {
            for (let k = index; k >= i; k -= 1) {
              this.starFilled[k].classList.toggle('show-star');
            }
          }
        }
      });
    });
  }
}

const rateButton = new RateButton();
