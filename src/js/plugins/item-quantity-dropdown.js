import './item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

$(document).ready(() => {
    $('.iqdropdown').iqDropdown({
    setSelectionText: (itemCount, totalItems) => {
    // set up the grammar of the word "гость"
      const textPlural = `гостей`;
      const selectionText = `гость`;
      const placeholderText = `Сколько гостей`;
      const secondSelectionText = `гостя`;
      if (totalItems === 0) return placeholderText;
      if (totalItems === 1) return `${totalItems} ${selectionText}`;
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
     onChange: (id, count, totalItems) => {
      // styles of disabled decrement buttons
      let firstIdOfButton = $("#iqdropdown-first-style").children(".iqdropdown-item-controls").find(".button-decrement");
      let secondIdOfButton = $("#iqdropdown-second-style").children(".iqdropdown-item-controls").find(".button-decrement");
      let thirdIdOfButton = $("#iqdropdown-third-style").children(".iqdropdown-item-controls").find(".button-decrement");
      let firstItem = $("#iqdropdown-first-style").attr("data-id");
      let secondItem = $("#iqdropdown-second-style").attr("data-id");
      let thirdItem = $("#iqdropdown-third-style").attr("data-id");
      if (firstItem === "item1") {
        $(firstIdOfButton).css("opacity", "0.5");
        // $(secondIdOfButton).css("opacity", "0.5");
        // $(thirdIdOfButton).css("opacity", "0.5");
      } 
      else if (secondItem === "item2") {
        $(secondIdOfButton).css("opacity", "0.5");
      }
      else if (thirdItem === "item3") {
        $(thirdIdOfButton).css("opacity", "0.5");
      }
      // else if (count > 0) {
      //   $(firstIdOfButton).css("opacity", "1");
      //   $(secondIdOfButton).css("opacity", "1");
      //   $(thirdIdOfButton).css("opacity", "1");
      // }
      // else {
      //   $(".button-decrement").css("opacity", "1");
      // }
        // confirm button
      $("#iqdropdown-btn-confirm").click(function() {
        $(".iqdropdown").removeClass(".menu-open");
      });
    },
  });
});