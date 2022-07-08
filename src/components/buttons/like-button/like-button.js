let firstButton = document.querySelector('.js-like-buttons__border');
let secondButton = document.querySelector('.js-like-buttons__border_second-like-button');
let thirdButton = document.querySelector('.js-like-buttons__border_third-like-button');

let firstCounter = document.querySelector('.js-like-buttons__counter');
let secondCounter = document.querySelector('.js-like-buttons__counter_second-like-button');
let thirdCounter = document.querySelector('.js-like-buttons__counter_third-like-button');

let firstHeart = document.querySelector('.js-like-buttons__heart');
let secondHeart = document.querySelector('.js-like-buttons__heart_second');
let thirdHeart = document.querySelector('.js-like-buttons__heart_third');

let countLikesOfFirstButton = 0;
let countLikesOfSecondButton = 0;
let countLikesOfThirdButton = 0;

firstButton.addEventListener('click', e => {
    firstHeart.classList.remove('like-buttons__heart');
    firstHeart.classList.add('like-buttons__heart_clicked');
    firstButton.classList.add('on');
    firstCounter.classList.add('on');
    countLikesOfFirstButton++;
    firstCounter.innerHTML = countLikesOfFirstButton;
}, false);

secondButton.addEventListener('click', e => {
    secondHeart.classList.remove('like-buttons__heart_second');
    secondHeart.classList.add('like-buttons__heart_second_clicked');
    secondButton.classList.add('on');
    secondCounter.classList.add('on');
    countLikesOfSecondButton++;
    secondCounter.innerHTML = countLikesOfSecondButton;
}, false);

thirdButton.addEventListener('click', e => {
    thirdHeart.classList.remove('like-buttons__heart_third');
    thirdHeart.classList.add('like-buttons__heart_third_clicked');
    thirdButton.classList.add('on');
    thirdCounter.classList.add('on');
    countLikesOfThirdButton++;
    thirdCounter.innerHTML = countLikesOfThirdButton;
}, false);