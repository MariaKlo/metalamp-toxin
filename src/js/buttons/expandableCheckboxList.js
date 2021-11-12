let firstList = document.querySelector('.filter__checkbox-list');
let secondList = document.querySelector('.filter__checkbox-list_second');

let showFirstItem = document.querySelector('.filter__checkbox_first');
let showSecondItem = document.querySelector('.filter__checkbox_second');
let showThirdItem = document.querySelector('.filter__checkbox_third');
let showFourthItem = document.querySelector('.filter__checkbox_fourth');
let showFifthItem = document.querySelector('.filter__checkbox_fifth');
let showSixthItem = document.querySelector('.filter__checkbox_sixth');

let showSeventhItem = document.querySelector('.filter__checkbox_seventh');
let showEighthItem = document.querySelector('.filter__checkbox_eighth');
let showNinthItem = document.querySelector('.filter__checkbox_ninth');
let showTenthItem = document.querySelector('.filter__checkbox_tenth');
let showEleventhItem = document.querySelector('.filter__checkbox_eleventh');
let showTwelfthItem = document.querySelector('.filter__checkbox_twelfth');

let firstArrow = document.querySelector('.filter__checkbox-list-arrow_first');
let secondArrow = document.querySelector('.filter__checkbox-list-arrow_second');

firstList.addEventListener('click', e=>{
    showFirstItem.classList.toggle('show');
    showSecondItem.classList.toggle('show');
    showThirdItem.classList.toggle('show');
    showFourthItem.classList.toggle('show');
    showFifthItem.classList.toggle('show');
    showSixthItem.classList.toggle('show');
    firstArrow.classList.toggle('rotate');
}, false);

secondList.addEventListener('click', e=>{
    showSeventhItem.classList.toggle('show');
    showEighthItem.classList.toggle('show');
    showNinthItem.classList.toggle('show');
    showTenthItem.classList.toggle('show');
    showEleventhItem.classList.toggle('show');
    showTwelfthItem.classList.toggle('show');
    secondArrow.classList.toggle('rotate');
}, false);