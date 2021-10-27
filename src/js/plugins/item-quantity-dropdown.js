import './item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

$(document).ready(() => {
    $('.iqdropdown').iqDropdown({
    // maxItems: 10,
    // selectionText: 'гость',
    // textPlural: 'гостей',
    // setSelectionText: (id, itemCount, totalItems) => {
    //   // set up the grammar of the word "гость"
    //   const textPlural = `гостей`;
    //   const selectionText = `гость`;
    //   const placeholderText = `Сколько гостей`;
    //   const secondSelectionText = `гостя`;
    //   if (totalItems === 0) return placeholderText;
    //   if (totalItems === 1) return `${totalItems} ${selectionText}`;
    //   if (totalItems === 2 || totalItems === 3 || totalItems === 4) return `${totalItems} ${secondSelectionText}`;
    //   if (totalItems >= 5 && totalItems <= 10) return `${totalItems} ${textPlural}`;
      // let arrayOfTotalItems = Array(totalItems).fill('');
      // let arrayOfTotalItems = [];
      // for (let i = 0; i <= totalItems; i++) {
      //   arrayOfTotalItems.push(i);
      // }
      // let arrayOfTotalItems = totalItems.toString(10).split("").map(Number);
      // if (arrayOfTotalItems[arrayOfTotalItems.length-2] === 1 &&
      //    arrayOfTotalItems[arrayOfTotalItems.length-1] === 1) {
      //   return `${totalItems} ${textPlural}`;
      // } else if (arrayOfTotalItems[arrayOfTotalItems.length-2] === 1 &&
      //    arrayOfTotalItems[arrayOfTotalItems.length-1] === 2) {
      //   return `${totalItems} ${textPlural}`;
      // } else if (arrayOfTotalItems[arrayOfTotalItems.length-2] === 1 &&
      //    arrayOfTotalItems[arrayOfTotalItems.length-1] === 3) {
      //   return `${totalItems} ${textPlural}`;
      // } else if (arrayOfTotalItems[arrayOfTotalItems.length-2] === 1 &&
      //    arrayOfTotalItems[arrayOfTotalItems.length-1] === 4) {
      //   return `${totalItems} ${textPlural}`;
      // } else if (arrayOfTotalItems[arrayOfTotalItems.length-1] === 1) {
      //   return `${totalItems} ${selectionText}`;
      // } else if (arrayOfTotalItems[arrayOfTotalItems.length-1] === 2 ||
      //    arrayOfTotalItems[arrayOfTotalItems.length-1] === 2 ||
      //     arrayOfTotalItems[arrayOfTotalItems.length-1] === 3 ||
      //      arrayOfTotalItems[arrayOfTotalItems.length-1] === 4) {
      //   return `${totalItems} ${secondSelectionText}`;
      // } 
      // return `${totalItems} ${textPlural}`;
    // },
    //  onChange: (id, count, totalItems) => {
    //   // $( "#iqdropdown-btn-clear" ).click(function() {
    //     // let counter = $(".iqdropdown-menu-option").data("mincount");
    //     // let itemId = $(".iqdropdown-menu-option").data("id");
    //     // let newItemId = itemId.children(".button-decrement").addClass("first-decrement-button");
    //     if (count === 0 && $(".iqdropdown-menu-option:nth-child(1)")) {
    //       $(".button-decrement:nth-child(1)").css({"opacity": "0.5"});
    //     } 
    //     else if (count === 0 && $(".iqdropdown-menu-option:nth-child(2)")) {
    //       $(".button-decrement:nth-child(2)").css({"opacity": "0.5"});
    //     } else if (count === 0 && $(".iqdropdown-menu-option:nth-child(3)")) {
    //       $(".button-decrement:nth-child(3)").css({"opacity": "0.5"});
    //     } 
    //     else {
    //       $(".button-decrement").css({"opacity": "1"});
    //     }
    //     // const itemCount = {};
    //     // if (count == 0) {
    //     //   $(".button-decrement").css("border-color", "rgba(31, 32, 65, 0.25)");
    //     // }
    //     // const $counter = $(`<span>${itemCount[id]}</span>`).addClass("counter");
    //     // itemCount[id] = 0;
    //     // totalItems = 0;
    //     // $counter.html(itemCount[id]);
    //     // $(".counter").text("0");
    //     // $( ".iqdropdown-selection" ).text( "Сколько гостей" );
    //   // });
    //   $("#iqdropdown-btn-confirm").click(function() {
    //     $(".iqdropdown").removeClass(".menu-open");
    //   });
    // },
  });
});