let firstButton = document.querySelector('.like-buttons__border');
let secondButton = document.querySelector('.like-buttons__border_second-like-button');
let _svg1 = document.querySelector('svg.one');
let _svg2 = document.querySelector('svg.two');
let firstCounter = document.querySelector('.like-buttons__counter');
let secondCounter = document.querySelector('.like-buttons__counter_second-like-button');
let countLikesOfFirstButton = 0;
let countLikesOfSecondButton = 0;

if (firstButton) {
    firstButton.addEventListener('click', e=>{
        _svg1.classList.add('on');
        firstButton.classList.add('on');
        firstCounter.classList.add('on');
        countLikesOfFirstButton++;
        firstCounter.innerHTML = countLikesOfFirstButton;
    }, false);
}

if (secondButton) {
    secondButton.addEventListener('click', e=>{
        _svg2.classList.add('on');
        secondButton.classList.add('on');
        secondCounter.classList.add('on');
        countLikesOfSecondButton++;
        secondCounter.innerHTML = countLikesOfSecondButton;
    }, false);
}