import './item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

$(document).ready(() => {
    $('.iqdropdown').iqDropdown({
    setSelectionText: (itemCount, totalItems) => {return `Сколько гостей`},
    selectionText: 'гость',
    textPlural: 'гостей',
    setSelectionText (itemCount, totalItems) {
      // default placeholder
      const placeholderText = `Сколько гостей`;
      if (totalItems === 0) return placeholderText;
      if (totalItems === 1) return `${totalItems} ${this.selectionText}`;
      // placeholder for 2-4 numbers
      const secondSelectionText = `гостя`;
      const useAnotherPlural = totalItems >= 2 && totalItems <= 4;
      const anotherText = useAnotherPlural ? secondSelectionText : this.textPlural; // adds for 5+ range
      return `${totalItems} ${anotherText}`;
      // const usePlural = totalItems !== 1; // check if items are > 0
      // const text = usePlural ? this.textPlural : this.selectionText; // check when to use single/plural text
      // return `${totalItems} ${text}`;

      // if (totalItems > 20) {
      //   const arrayOfDigits = Array.from(String(totalItems), Number); 
      //   if (arrayOfDigits.length-1 === 1) return `${totalItems} ${this.selectionText}`
      //   if (arrayOfDigits.length-1 >= 2 && arrayOfDigits.length-1 <= 4) return `${totalItems} ${secondSelectiontext}`
      //   if (arrayOfDigits.length-1 >= 5 && arrayOfDigits.length-1 <= 9 || arrayOfDigits.length-1 === 0) return `${totalItems} ${this.totalItems}`
      // }
    },
  });
});