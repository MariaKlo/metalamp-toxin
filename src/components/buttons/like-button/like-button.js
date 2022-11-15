class LikeButton {
  constructor(border, heart, counter) {
    this.border = border;
    this.heart = heart;
    this.counter = counter;
    this.init();
  }

  init() {
    this.countOnClick();
    this.addClassToDom();
  }

  countOnClick() {
    let btnClicked = false;
    let count = 0;
    if (this.border !== null) {
      this.border.addEventListener('click', () => {
        if (btnClicked === false) {
          count += 1;
          this.counter.innerHTML = count;
        }
        if (btnClicked === true) {
          count -= 1;
          this.counter.innerHTML = count;
        }
        btnClicked = !btnClicked;
      }, false);
    }
  }

  addClassToDom() {
    if (this.border !== null) {
      this.border.addEventListener('click', () => {
        this.heart.classList.toggle('clicked');
        this.border.classList.toggle('on');
        this.counter.classList.toggle('on');
      }, false);
    }
  }
}

const button = [
  '.js-like-button', '.js-like-button_second-like-button',
  '.js-like-button_third-like-button',
];
const counter = [
  '.js-like-button__counter', '.js-like-button__counter_second-like-button',
  '.js-like-button__counter_third-like-button',
];
const heart = [
  '.js-like-button__heart', '.js-like-button__heart_second',
  '.js-like-button__heart_third',
];

for (let i = 0; i < heart.length; i += 1) {
  const buttonDom = document.querySelector(button[i]);
  const counterDom = document.querySelector(counter[i]);
  const heartDom = document.querySelector(heart[i]);

  const like = new LikeButton(buttonDom, heartDom, counterDom);
}
