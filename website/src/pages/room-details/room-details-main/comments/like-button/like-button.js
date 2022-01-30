const firstButton = document.querySelector('.like-buttons__border');
const secondButton = document.querySelector('.like-buttons__border_second-like-button');
const svg1 = document.querySelector('svg.one');
const svg2 = document.querySelector('svg.two');
const firstCounter = document.querySelector('.like-buttons__counter');
const secondCounter = document.querySelector('.like-buttons__counter_second-like-button');
let countLikesOfFirstButton = 0;
let countLikesOfSecondButton = 0;

if (firstButton) {
    firstButton.addEventListener('click', e=>{
        svg1.classList.add('on');
        firstButton.classList.add('on');
        firstCounter.classList.add('on');
        countLikesOfFirstButton++;
        firstCounter.innerHTML = countLikesOfFirstButton;
    }, false);
}

if (secondButton) {
    secondButton.addEventListener('click', e=>{
        svg2.classList.add('on');
        secondButton.classList.add('on');
        secondCounter.classList.add('on');
        countLikesOfSecondButton++;
        secondCounter.innerHTML = countLikesOfSecondButton;
    }, false);
}