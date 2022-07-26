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
    if (this.list !== null) {
      this.list.addEventListener('click', e => {
        const itemArrOfFirstList = [
          '.js-expandable-checkbox-list__checkbox_first', 
          '.js-expandable-checkbox-list__checkbox_second', 
          '.js-expandable-checkbox-list__checkbox_third', 
          '.js-expandable-checkbox-list__checkbox_fourth', 
          '.js-expandable-checkbox-list__checkbox_fifth', 
          '.js-expandable-checkbox-list__checkbox_sixth'
        ]; 
        const itemArrOfSecondList = [
          '.js-expandable-checkbox-list__checkbox_seventh', 
          '.js-expandable-checkbox-list__checkbox_eighth', 
          '.js-expandable-checkbox-list__checkbox_ninth', 
          '.js-expandable-checkbox-list__checkbox_tenth', 
          '.js-expandable-checkbox-list__checkbox_eleventh', 
          '.js-expandable-checkbox-list__checkbox_twelfth'
        ];
  
        let firstList = document.querySelector('.js-expandable-checkbox-list__checkbox-list');
        let secondList = document.querySelector('.js-expandable-checkbox-list__checkbox-list_second');
  
        let firstArrow = document.querySelector('.js-expandable-checkbox-list__checkbox-list-arrow_first');
        let secondArrow = document.querySelector('.js-expandable-checkbox-list__checkbox-list-arrow_second');
  
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
}

const list = [
  '.js-expandable-checkbox-list__checkbox-list', 
  '.js-expandable-checkbox-list__checkbox-list_second'
];
const arrow = [
  '.js-expandable-checkbox-list__checkbox-list-arrow_first', 
  '.js-expandable-checkbox-list__checkbox-list-arrow_second'
];

for (let i = 0; i < list.length; i++) {
  let listDom = document.querySelector(list[i]);
  let arrowDom = document.querySelector(arrow[i]);

  let expandableList = new expandableCheckboxList(listDom, arrowDom);
}