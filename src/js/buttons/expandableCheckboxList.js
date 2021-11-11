let firstList = document.querySelector('.filter__checkbox-list');
let showFirstItem = document.querySelector('.filter__checkbox');
let showSecondItem = document.querySelector('.filter__checkbox_second');
let showThirdItem = document.querySelector('.filter__checkbox_third');
let showFourthItem = document.querySelector('.filter__checkbox_fourth');
let showFifthItem = document.querySelector('.filter__checkbox_fifth');
let showSixthItem = document.querySelector('.filter__checkbox_sixth');
let firstArrow = document.querySelector('.filter__checkbox-list-arrow_first');

firstList.addEventListener('click', e=>{
    showFirstItem.classList.toggle('show');
    showSecondItem.classList.toggle('show');
    showThirdItem.classList.toggle('show');
    showFourthItem.classList.toggle('show');
    showFifthItem.classList.toggle('show');
    showSixthItem.classList.toggle('show');
    firstArrow.classList.toggle('rotate');
}, false);