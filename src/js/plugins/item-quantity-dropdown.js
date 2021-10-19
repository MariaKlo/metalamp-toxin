import './item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

$(document).ready(() => {
    $('.iqdropdown').iqDropdown({
    selectionText: 'гость',
    textPlural: 'гостей',
    setSelectionText (itemCount, totalItems) {
      $("#iqdropdown-btn-clear").click(function() {
        $( "#iqdropdown-selection" ).text( "Сколько гостей" );
        // $(".counter").val(0);
        // let count = parseInt($(".counter").text());
        
        // const itemCount = {};
        $(`<span>${itemCount[0]}</span>`);
        itemCount[0] = 0;
      });

      $("#iqdropdown-btn-confirm").click(function() {
        $(".iqdropdown").removeClass(".menu-open");
      });
      // set up the grammar of the word "гость"
      const placeholderText = `Сколько гостей`;
      const secondSelectionText = `гостя`;
      if (totalItems === 0) return placeholderText;
      let arrayOfTotalItems = totalItems.toString(10).split("").map(Number);
      if (arrayOfTotalItems[arrayOfTotalItems.length-2] === 1 &&
         arrayOfTotalItems[arrayOfTotalItems.length-1] === 1) {
        return `${totalItems} ${this.textPlural}`;
      } else if (arrayOfTotalItems[arrayOfTotalItems.length-2] === 1 &&
         arrayOfTotalItems[arrayOfTotalItems.length-1] === 2) {
        return `${totalItems} ${this.textPlural}`;
      } else if (arrayOfTotalItems[arrayOfTotalItems.length-2] === 1 &&
         arrayOfTotalItems[arrayOfTotalItems.length-1] === 3) {
        return `${totalItems} ${this.textPlural}`;
      } else if (arrayOfTotalItems[arrayOfTotalItems.length-2] === 1 &&
         arrayOfTotalItems[arrayOfTotalItems.length-1] === 4) {
        return `${totalItems} ${this.textPlural}`;
      } else if (arrayOfTotalItems[arrayOfTotalItems.length-1] === 1) {
        return `${totalItems} ${this.selectionText}`;
      } else if (arrayOfTotalItems[arrayOfTotalItems.length-1] === 2 ||
         arrayOfTotalItems[arrayOfTotalItems.length-1] === 2 ||
          arrayOfTotalItems[arrayOfTotalItems.length-1] === 3 ||
           arrayOfTotalItems[arrayOfTotalItems.length-1] === 4) {
        return `${totalItems} ${secondSelectionText}`;
      } 
      return `${totalItems} ${this.textPlural}`;
    },
  });
});