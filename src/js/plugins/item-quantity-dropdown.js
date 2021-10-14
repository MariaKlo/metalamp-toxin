import './item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

/* 
gostey - 11,12,13,14,15,16,17,18,19, end on 0,5,6,7,8,9
gost - 1, end on 1
gostya - end on 2,3,4
*/


$(document).ready(() => {
    $('.iqdropdown').iqDropdown({
    selectionText: 'гость',
    textPlural: 'гостей',
    setSelectionText (itemCount, totalItems) {
      // set up the grammar of the word "гость"
      const placeholderText = `Сколько гостей`;
      const secondSelectionText = `гостя`;
      const useAnotherPlural = totalItems >= 2 && totalItems <= 4;
      if (totalItems === 0) return placeholderText;
      if (totalItems === 1) return `${totalItems} ${this.selectionText}`;
      if (useAnotherPlural) {
        return `${totalItems} ${secondSelectionText}`;
      } else if (totalItems >= 5 && totalItems <= 20) {
        return `${totalItems} ${this.textPlural}`;
      } else if (totalItems > 20) {
          let arrayOfTotalItems = totalItems.toString(10).split("").map(Number);
          if (arrayOfTotalItems[arrayOfTotalItems.length-1] === 1) {
            return `${totalItems} ${this.selectionText}`; 
          } else if (arrayOfTotalItems[arrayOfTotalItems.length-1] === 2 || 
            arrayOfTotalItems[arrayOfTotalItems.length-1] === 3 || 
            arrayOfTotalItems[arrayOfTotalItems.length-1] === 4) {
            return `${totalItems} ${secondSelectionText}`;
          }
        return `${totalItems} ${this.textPlural}`;
      }
    },
  });
});