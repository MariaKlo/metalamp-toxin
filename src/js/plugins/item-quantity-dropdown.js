import './item-quantity-dropdown.min.js';
import './item-quantity-dropdown.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

$(document).ready(() => {
    $('.iqdropdown').iqDropdown({
    selectionText: 'гость',
    textPlural: 'гостей',
    setSelectionText: (itemCount, totalItems) => {
      // set up the grammar of the word "гость"
      const placeholderText = `Сколько гостей`;
      const secondSelectionText = `гостя`;
      if (totalItems === 0) return placeholderText;
      if (totalItems === 1) return this.selectionText;
      if (totalItems === 2 || totalItems === 3 || totalItems === 4) return secondSelectionText;
      if (totalItems === 5) return this.textPlural;
      // let arrayOfTotalItems = totalItems.toString(10).split("").map(Number);
      // if (arrayOfTotalItems[arrayOfTotalItems.length-2] === 1 &&
      //    arrayOfTotalItems[arrayOfTotalItems.length-1] === 1) {
      //   return `${totalItems} ${this.textPlural}`;
      // } else if (arrayOfTotalItems[arrayOfTotalItems.length-2] === 1 &&
      //    arrayOfTotalItems[arrayOfTotalItems.length-1] === 2) {
      //   return `${totalItems} ${this.textPlural}`;
      // } else if (arrayOfTotalItems[arrayOfTotalItems.length-2] === 1 &&
      //    arrayOfTotalItems[arrayOfTotalItems.length-1] === 3) {
      //   return `${totalItems} ${this.textPlural}`;
      // } else if (arrayOfTotalItems[arrayOfTotalItems.length-2] === 1 &&
      //    arrayOfTotalItems[arrayOfTotalItems.length-1] === 4) {
      //   return `${totalItems} ${this.textPlural}`;
      // } else if (arrayOfTotalItems[arrayOfTotalItems.length-1] === 1) {
      //   return `${totalItems} ${this.selectionText}`;
      // } else if (arrayOfTotalItems[arrayOfTotalItems.length-1] === 2 ||
      //    arrayOfTotalItems[arrayOfTotalItems.length-1] === 2 ||
      //     arrayOfTotalItems[arrayOfTotalItems.length-1] === 3 ||
      //      arrayOfTotalItems[arrayOfTotalItems.length-1] === 4) {
      //   return `${totalItems} ${secondSelectionText}`;
      // } 
      // return `${totalItems} ${this.textPlural}`;
    },
  });
});