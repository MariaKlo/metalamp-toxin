let h1 = document.querySelector('.heartOne');
let _svg1 = document.querySelector('svg.one');

h1.addEventListener('click',e=>{
    _svg1.classList.toggle('on');
}, false);