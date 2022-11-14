class RateButton {
  starWrap = document.querySelectorAll('.js-rate-button__wrap');

  starBorder = document.querySelector('.js-material-icons_border');

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
        if (index === 0) {
          this.starFilled[0].classList.toggle('show-star');
        }
        if (index === 1) {
          this.starFilled[0].classList.toggle('show-star');
          this.starFilled[1].classList.toggle('show-star');
        }
        if (index === 2) {
          this.starFilled[0].classList.toggle('show-star');
          this.starFilled[1].classList.toggle('show-star');
          this.starFilled[2].classList.toggle('show-star');
        }
        if (index === 3) {
          this.starFilled[0].classList.toggle('show-star');
          this.starFilled[1].classList.toggle('show-star');
          this.starFilled[2].classList.toggle('show-star');
          this.starFilled[3].classList.toggle('show-star');
        }
        if (index === 4) {
          this.starFilled[0].classList.toggle('show-star');
          this.starFilled[1].classList.toggle('show-star');
          this.starFilled[2].classList.toggle('show-star');
          this.starFilled[3].classList.toggle('show-star');
          this.starFilled[4].classList.toggle('show-star');
        }
        if (index === 5) {
          this.starFilled[5].classList.toggle('show-star');
        }
        if (index === 6) {
          this.starFilled[5].classList.toggle('show-star');
          this.starFilled[6].classList.toggle('show-star');
        }
        if (index === 7) {
          this.starFilled[5].classList.toggle('show-star');
          this.starFilled[6].classList.toggle('show-star');
          this.starFilled[7].classList.toggle('show-star');
        }
        if (index === 8) {
          this.starFilled[5].classList.toggle('show-star');
          this.starFilled[6].classList.toggle('show-star');
          this.starFilled[7].classList.toggle('show-star');
          this.starFilled[8].classList.toggle('show-star');
        }
        if (index === 9) {
          this.starFilled[5].classList.toggle('show-star');
          this.starFilled[6].classList.toggle('show-star');
          this.starFilled[7].classList.toggle('show-star');
          this.starFilled[8].classList.toggle('show-star');
          this.starFilled[9].classList.toggle('show-star');
        }
        // for (let i = 0; i < this.starFilled.length; i += 1) {
        //   this.starFilled[i].classList.toggle('show-star');
        // }
        // this.starFilled.forEach((star) => {
        //   star.classList.toggle('show-star');
        // });
      });
    });
    // if (this.starBorder !== null) {
    //   this.starWrap.addEventListener('click', () => {
    //     this.starFilled.classList.toggle('show-star');
    //   });
    // }
  }
}

const rateButton = new RateButton();
