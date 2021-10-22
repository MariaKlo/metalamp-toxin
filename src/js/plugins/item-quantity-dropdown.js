import './item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

$(document).ready(() => {
    $('.iqdropdown').iqDropdown({
    onChange: (id, count, totalItems) => {
      $( "#iqdropdown-btn-clear" ).click(function() {
        // const itemCount = {};
        // const $counter = $(`<span>${itemCount[id]}</span>`).addClass("counter");
        // itemCount[id] = 0;
        // totalItems = 0;
        // $counter.html(itemCount[id]);
        $(".counter").text("0");
        $( ".iqdropdown-selection" ).text( "Сколько гостей" );
      });
      $("#iqdropdown-btn-confirm").click(function() {
        $(".iqdropdown").removeClass(".menu-open");
      });
    },
    setSelectionText: (itemCount, totalItems) => {
      itemCount = 0;
      if ($(".counter").val(itemCount)) {
        $("button-decrement").css("opacity", "0.5");
      }
      if (totalItems === 0) {
        $("#iqdropdown-btn-clear").hide();
      } else {
        $("#iqdropdown-btn-clear").show();
      }
      // set up the grammar of the word "гость"
      const textPlural = `гостей`;
      const selectionText = `гость`;
      const placeholderText = `Сколько гостей`;
      const secondSelectionText = `гостя`;
      if (totalItems === 0) return placeholderText;
      let arrayOfTotalItems = totalItems.toString(10).split("").map(Number);
      if (arrayOfTotalItems[arrayOfTotalItems.length-2] === 1 &&
         arrayOfTotalItems[arrayOfTotalItems.length-1] === 1) {
        return `${totalItems} ${textPlural}`;
      } else if (arrayOfTotalItems[arrayOfTotalItems.length-2] === 1 &&
         arrayOfTotalItems[arrayOfTotalItems.length-1] === 2) {
        return `${totalItems} ${textPlural}`;
      } else if (arrayOfTotalItems[arrayOfTotalItems.length-2] === 1 &&
         arrayOfTotalItems[arrayOfTotalItems.length-1] === 3) {
        return `${totalItems} ${textPlural}`;
      } else if (arrayOfTotalItems[arrayOfTotalItems.length-2] === 1 &&
         arrayOfTotalItems[arrayOfTotalItems.length-1] === 4) {
        return `${totalItems} ${textPlural}`;
      } else if (arrayOfTotalItems[arrayOfTotalItems.length-1] === 1) {
        return `${totalItems} ${selectionText}`;
      } else if (arrayOfTotalItems[arrayOfTotalItems.length-1] === 2 ||
         arrayOfTotalItems[arrayOfTotalItems.length-1] === 2 ||
          arrayOfTotalItems[arrayOfTotalItems.length-1] === 3 ||
           arrayOfTotalItems[arrayOfTotalItems.length-1] === 4) {
        return `${totalItems} ${secondSelectionText}`;
      } 
      return `${totalItems} ${textPlural}`;
    },
  });
});