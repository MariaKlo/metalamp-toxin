class expandableCheckboxList {

  constructor(list, arrow) {
    this.list = list;
    this.arrow = arrow;
    this.init();
  }

  init() {
    this.openList();
  }

  openList() {
    this.list.addEventListener('click', e => {
      const itemArrOfFirstList = ['.js-filter__checkbox_first', '.js-filter__checkbox_second', 
      '.js-filter__checkbox_third', '.js-filter__checkbox_fourth', '.js-filter__checkbox_fifth', 
      '.js-filter__checkbox_sixth']; 
      const itemArrOfSecondList = ['.js-filter__checkbox_seventh', 
        '.js-filter__checkbox_eighth', '.js-filter__checkbox_ninth', '.js-filter__checkbox_tenth', 
        '.js-filter__checkbox_eleventh', '.js-filter__checkbox_twelfth'];

      let firstList = document.querySelector('.js-filter__checkbox-list');
      let secondList = document.querySelector('.js-filter__checkbox-list_second');

      let firstArrow = document.querySelector('.js-filter__checkbox-list-arrow_first');
      let secondArrow = document.querySelector('.js-filter__checkbox-list-arrow_second');

      if (this.list === firstList && this.arrow === firstArrow) {
        for (let i = 0; i < itemArrOfFirstList.length; i++) {
          let itemDom = document.querySelector(itemArrOfFirstList[i]);
          itemDom.classList.toggle('show');
        }
      }
      else if (this.list === secondList && this.arrow === secondArrow) {
        for (let i = 0; i < itemArrOfSecondList.length; i++) {
         let itemDomSecond = document.querySelector(itemArrOfSecondList[i]);
          itemDomSecond.classList.toggle('show');
        }
      }
      this.arrow.classList.toggle('rotate');
    }, false);
  }
}

const list = ['.js-filter__checkbox-list', '.js-filter__checkbox-list_second'];
const arrow = ['.js-filter__checkbox-list-arrow_first', '.js-filter__checkbox-list-arrow_second'];

for (let i = 0; i < list.length; i++) {
  let listDom = document.querySelector(list[i]);
  let arrowDom = document.querySelector(arrow[i]);

  let expandableList = new expandableCheckboxList(listDom, arrowDom);
}