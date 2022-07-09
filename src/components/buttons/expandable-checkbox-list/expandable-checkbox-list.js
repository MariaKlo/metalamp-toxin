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
      const itemArrOfFirstList = ['.filter__checkbox_first', '.filter__checkbox_second', 
      '.filter__checkbox_third', '.filter__checkbox_fourth', '.filter__checkbox_fifth', 
      '.filter__checkbox_sixth']; 
      const itemArrOfSecondList = ['.filter__checkbox_seventh', 
        '.filter__checkbox_eighth', '.filter__checkbox_ninth', '.filter__checkbox_tenth', 
        '.filter__checkbox_eleventh', '.filter__checkbox_twelfth'];

      let firstList = document.querySelector('.filter__checkbox-list');
      let secondList = document.querySelector('.filter__checkbox-list_second');

      let firstArrow = document.querySelector('.filter__checkbox-list-arrow_first');
      let secondArrow = document.querySelector('.filter__checkbox-list-arrow_second');

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

const list = ['.filter__checkbox-list', '.filter__checkbox-list_second'];
const arrow = ['.filter__checkbox-list-arrow_first', '.filter__checkbox-list-arrow_second'];

for (let i = 0; i < list.length; i++) {
  let listDom = document.querySelector(list[i]);
  let arrowDom = document.querySelector(arrow[i]);

  let expandableList = new expandableCheckboxList(listDom, arrowDom);
}