class ExpandableCheckboxList {
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
      this.list.addEventListener('click', () => {
        const itemArrOfFirstList = document.querySelector('.js-expandable-checkbox-list__checkbox_first');
        const itemArrOfSecondList = document.querySelector('.js-expandable-checkbox-list__checkbox_second');
        const firstList = document.querySelector('.js-expandable-checkbox-list__checkbox-list');
        const secondList = document.querySelector('.js-expandable-checkbox-list__checkbox-list_second');
        const firstArrow = document.querySelector('.js-expandable-checkbox-list__checkbox-list-arrow_first');
        const secondArrow = document.querySelector('.js-expandable-checkbox-list__checkbox-list-arrow_second');
        if (this.list === firstList && this.arrow === firstArrow) {
          itemArrOfFirstList.classList.toggle('show');
        } else if (this.list === secondList && this.arrow === secondArrow) {
          itemArrOfSecondList.classList.toggle('show');
        }
        this.arrow.classList.toggle('rotate');
      }, false);
    }
  }
}

const list = [
  '.js-expandable-checkbox-list__checkbox-list',
  '.js-expandable-checkbox-list__checkbox-list_second',
];
const arrow = [
  '.js-expandable-checkbox-list__checkbox-list-arrow_first',
  '.js-expandable-checkbox-list__checkbox-list-arrow_second',
];

for (let i = 0; i < list.length; i += 1) {
  const listDom = document.querySelector(list[i]);
  const arrowDom = document.querySelector(arrow[i]);

  const expandableList = new ExpandableCheckboxList(listDom, arrowDom);
}
