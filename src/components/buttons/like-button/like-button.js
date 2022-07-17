class likeButton {

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
    this.border.addEventListener('click', e => {
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

  addClassToDom() {
    this.border.addEventListener('click', e => {
      this.heart.classList.toggle('clicked');
      this.border.classList.toggle('on');
      this.counter.classList.toggle('on');
    }, false);
  }
}

const button = [
  '.js-like-buttons__border', '.js-like-buttons__border_second-like-button', 
  '.js-like-buttons__border_third-like-button',
];
const counter = [
  '.js-like-buttons__counter', '.js-like-buttons__counter_second-like-button', 
  '.js-like-buttons__counter_third-like-button',
];
const heart = [
  '.js-like-buttons__heart', '.js-like-buttons__heart_second', '.js-like-buttons__heart_third',
];

for (let i = 0; i < heart.length; i++) {
   let buttonDom = document.querySelector(button[i]);
   let counterDom = document.querySelector(counter[i]);
   let heartDom = document.querySelector(heart[i]);

   let like = new likeButton(buttonDom, heartDom, counterDom);
}