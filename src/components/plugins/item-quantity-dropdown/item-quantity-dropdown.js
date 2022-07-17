import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

import './iqdropdown.js';

$(document).ready(() => {
    $('#iqdropdowns').iqDropdown({
    maxItems: 10,
    setSelectionText: (itemCount, totalItems) => {
    // set up the grammar of the word "гость"
      const textPlural = `гостей`;
      const selectionText = `гость`;
      const placeholderText = `Сколько гостей`;
      const secondSelectionText = `гостя`;
      // set up the grammar of the word "младенец"
      const baby = `младенец`;
      const babiesSelectionText = `младенца`;
      const babiesPlural = `младенцев`;
      // check for non-baby guests
      let howManyBabies = Object.values(itemCount)[2];
      if (totalItems === 0 && howManyBabies === 0) return placeholderText;
      // with one baby
      if (totalItems === 1 && howManyBabies === 1) {
        return `${totalItems} ${selectionText}, ${howManyBabies} ${baby}`;
      } else if (totalItems < 5 && howManyBabies === 1) {
        return `${totalItems} ${secondSelectionText}, ${howManyBabies} ${baby}`;
      } else if (totalItems <= 10 && howManyBabies === 1) {
        return `${totalItems} ${textPlural}, ${howManyBabies} ${baby}`;
      }
      // with two babies
      if (totalItems === 1 && howManyBabies === 2) {
        return `${totalItems} ${selectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems < 5 && howManyBabies === 2) {
        return `${totalItems} ${secondSelectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems <= 10 && howManyBabies === 2) {
        return `${totalItems} ${textPlural}, ${howManyBabies} ${babiesSelectionText}`;
      }
      // with three babies
      if (totalItems === 1 && howManyBabies === 3) {
        return `${totalItems} ${selectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems < 5 && howManyBabies === 3) {
        return `${totalItems} ${secondSelectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems <= 10 && howManyBabies === 3) {
        return `${totalItems} ${textPlural}, ${howManyBabies} ${babiesSelectionText}`;
      }
      // without babies
      if (totalItems === 1) {
        return `${totalItems} ${selectionText}`;
      } else if (totalItems >= 2 && totalItems <= 4) {
        return `${totalItems} ${secondSelectionText}`;
      } else if (totalItems >= 5 && totalItems <= 10) {
        return `${totalItems} ${textPlural}`;
      } 
    },
     onChange: (id, count, totalItems) => {
        // confirm button
      $(".iqdropdown-btn-confirm").click(function() {
        $(".iqdropdown").removeClass(".menu-open");
      });
    },
  });
  $('#iqdropdown-second').iqDropdown({
    maxItems: 10,
    setSelectionText: (itemCount, totalItems) => {
    // set up the grammar of the word "гость"
      const textPlural = `гостей`;
      const selectionText = `гость`;
      const placeholderText = `Сколько гостей`;
      const secondSelectionText = `гостя`;
      // set up the grammar of the word "младенец"
      const baby = `младенец`;
      const babiesSelectionText = `младенца`;
      const babiesPlural = `младенцев`;
      // check for non-baby guests
      let howManyBabies = Object.values(itemCount)[2];
      if (totalItems === 0 && howManyBabies === 0) return placeholderText;
      // with one baby
      if (totalItems === 1 && howManyBabies === 1) {
        return `${totalItems} ${selectionText}, ${howManyBabies} ${baby}`;
      } else if (totalItems < 5 && howManyBabies === 1) {
        return `${totalItems} ${secondSelectionText}, ${howManyBabies} ${baby}`;
      } else if (totalItems <= 10 && howManyBabies === 1) {
        return `${totalItems} ${textPlural}, ${howManyBabies} ${baby}`;
      }
      // with two babies
      if (totalItems === 1 && howManyBabies === 2) {
        return `${totalItems} ${selectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems < 5 && howManyBabies === 2) {
        return `${totalItems} ${secondSelectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems <= 10 && howManyBabies === 2) {
        return `${totalItems} ${textPlural}, ${howManyBabies} ${babiesSelectionText}`;
      }
      // with three babies
      if (totalItems === 1 && howManyBabies === 3) {
        return `${totalItems} ${selectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems < 5 && howManyBabies === 3) {
        return `${totalItems} ${secondSelectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems <= 10 && howManyBabies === 3) {
        return `${totalItems} ${textPlural}, ${howManyBabies} ${babiesSelectionText}`;
      }
      // without babies
      if (totalItems === 1) {
        return `${totalItems} ${selectionText}`;
      } else if (totalItems >= 2 && totalItems <= 4) {
        return `${totalItems} ${secondSelectionText}`;
      } else if (totalItems >= 5 && totalItems <= 10) {
        return `${totalItems} ${textPlural}`;
      } 
    },
     onChange: (id, count, totalItems) => {
        // confirm button
      $(".iqdropdown-btn-confirm").click(function() {
        $(".iqdropdown").removeClass(".menu-open");
      });
    },
  });
  $('#iqdropdown-third').iqDropdown({
    maxItems: 10,
    setSelectionText: (itemCount, totalItems) => {
    // set up the grammar of the word "гость"
      const textPlural = `гостей`;
      const selectionText = `гость`;
      const placeholderText = `Сколько гостей`;
      const secondSelectionText = `гостя`;
      // set up the grammar of the word "младенец"
      const baby = `младенец`;
      const babiesSelectionText = `младенца`;
      const babiesPlural = `младенцев`;
      // check for non-baby guests
      let howManyBabies = Object.values(itemCount)[2];
      if (totalItems === 0 && howManyBabies === 0) return placeholderText;
      // with one baby
      if (totalItems === 1 && howManyBabies === 1) {
        return `${totalItems} ${selectionText}, ${howManyBabies} ${baby}`;
      } else if (totalItems < 5 && howManyBabies === 1) {
        return `${totalItems} ${secondSelectionText}, ${howManyBabies} ${baby}`;
      } else if (totalItems <= 10 && howManyBabies === 1) {
        return `${totalItems} ${textPlural}, ${howManyBabies} ${baby}`;
      }
      // with two babies
      if (totalItems === 1 && howManyBabies === 2) {
        return `${totalItems} ${selectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems < 5 && howManyBabies === 2) {
        return `${totalItems} ${secondSelectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems <= 10 && howManyBabies === 2) {
        return `${totalItems} ${textPlural}, ${howManyBabies} ${babiesSelectionText}`;
      }
      // with three babies
      if (totalItems === 1 && howManyBabies === 3) {
        return `${totalItems} ${selectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems < 5 && howManyBabies === 3) {
        return `${totalItems} ${secondSelectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems <= 10 && howManyBabies === 3) {
        return `${totalItems} ${textPlural}, ${howManyBabies} ${babiesSelectionText}`;
      }
      // without babies
      if (totalItems === 1) {
        return `${totalItems} ${selectionText}`;
      } else if (totalItems >= 2 && totalItems <= 4) {
        return `${totalItems} ${secondSelectionText}`;
      } else if (totalItems >= 5 && totalItems <= 10) {
        return `${totalItems} ${textPlural}`;
      } 
    },
     onChange: (id, count, totalItems) => {
        // confirm button
      $(".iqdropdown-btn-confirm").click(function() {
        $(".iqdropdown").removeClass(".menu-open");
      });
    },
  });
  $('#iqdropdown-fourth').iqDropdown({
    maxItems: 10,
    setSelectionText: (itemCount, totalItems) => {
    // set up the grammar of the word "гость"
      const textPlural = `гостей`;
      const selectionText = `гость`;
      const placeholderText = `Сколько гостей`;
      const secondSelectionText = `гостя`;
      // set up the grammar of the word "младенец"
      const baby = `младенец`;
      const babiesSelectionText = `младенца`;
      const babiesPlural = `младенцев`;
      // check for non-baby guests
      let howManyBabies = Object.values(itemCount)[2];
      if (totalItems === 0 && howManyBabies === 0) return placeholderText;
      // with one baby
      if (totalItems === 1 && howManyBabies === 1) {
        return `${totalItems} ${selectionText}, ${howManyBabies} ${baby}`;
      } else if (totalItems < 5 && howManyBabies === 1) {
        return `${totalItems} ${secondSelectionText}, ${howManyBabies} ${baby}`;
      } else if (totalItems <= 10 && howManyBabies === 1) {
        return `${totalItems} ${textPlural}, ${howManyBabies} ${baby}`;
      }
      // with two babies
      if (totalItems === 1 && howManyBabies === 2) {
        return `${totalItems} ${selectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems < 5 && howManyBabies === 2) {
        return `${totalItems} ${secondSelectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems <= 10 && howManyBabies === 2) {
        return `${totalItems} ${textPlural}, ${howManyBabies} ${babiesSelectionText}`;
      }
      // with three babies
      if (totalItems === 1 && howManyBabies === 3) {
        return `${totalItems} ${selectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems < 5 && howManyBabies === 3) {
        return `${totalItems} ${secondSelectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems <= 10 && howManyBabies === 3) {
        return `${totalItems} ${textPlural}, ${howManyBabies} ${babiesSelectionText}`;
      }
      // without babies
      if (totalItems === 1) {
        return `${totalItems} ${selectionText}`;
      } else if (totalItems >= 2 && totalItems <= 4) {
        return `${totalItems} ${secondSelectionText}`;
      } else if (totalItems >= 5 && totalItems <= 10) {
        return `${totalItems} ${textPlural}`;
      } 
    },
     onChange: (id, count, totalItems) => {
        // confirm button
      $(".iqdropdown-btn-confirm").click(function() {
        $(".iqdropdown").removeClass(".menu-open");
      });
    },
  });
  $('#iqdropdown-fifth').iqDropdown({
    maxItems: 10,
    setSelectionText: (itemCount, totalItems) => {
    // set up the grammar of the word "гость"
      const textPlural = `гостей`;
      const selectionText = `гость`;
      const placeholderText = `Сколько гостей`;
      const secondSelectionText = `гостя`;
      // set up the grammar of the word "младенец"
      const baby = `младенец`;
      const babiesSelectionText = `младенца`;
      const babiesPlural = `младенцев`;
      // check for non-baby guests
      let howManyBabies = Object.values(itemCount)[2];
      if (totalItems === 0 && howManyBabies === 0) return placeholderText;
      // with one baby
      if (totalItems === 1 && howManyBabies === 1) {
        return `${totalItems} ${selectionText}, ${howManyBabies} ${baby}`;
      } else if (totalItems < 5 && howManyBabies === 1) {
        return `${totalItems} ${secondSelectionText}, ${howManyBabies} ${baby}`;
      } else if (totalItems <= 10 && howManyBabies === 1) {
        return `${totalItems} ${textPlural}, ${howManyBabies} ${baby}`;
      }
      // with two babies
      if (totalItems === 1 && howManyBabies === 2) {
        return `${totalItems} ${selectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems < 5 && howManyBabies === 2) {
        return `${totalItems} ${secondSelectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems <= 10 && howManyBabies === 2) {
        return `${totalItems} ${textPlural}, ${howManyBabies} ${babiesSelectionText}`;
      }
      // with three babies
      if (totalItems === 1 && howManyBabies === 3) {
        return `${totalItems} ${selectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems < 5 && howManyBabies === 3) {
        return `${totalItems} ${secondSelectionText}, ${howManyBabies} ${babiesSelectionText}`;
      } else if (totalItems <= 10 && howManyBabies === 3) {
        return `${totalItems} ${textPlural}, ${howManyBabies} ${babiesSelectionText}`;
      }
      // without babies
      if (totalItems === 1) {
        return `${totalItems} ${selectionText}`;
      } else if (totalItems >= 2 && totalItems <= 4) {
        return `${totalItems} ${secondSelectionText}`;
      } else if (totalItems >= 5 && totalItems <= 10) {
        return `${totalItems} ${textPlural}`;
      } 
    },
     onChange: (id, count, totalItems) => {
        // confirm button
      $(".iqdropdown-btn-confirm").click(function() {
        $(".iqdropdown").removeClass(".menu-open");
      });
    },
  });
  $('#iqdropdown-sixth').iqDropdown({
    maxItems: 3,
    setSelectionText: (itemCount, totalItems) => {
      const placeholder = `Что должно входить в номер?`;
      // quantity of each item
      let firstItem = Object.values(itemCount)[0];
      let secondItem = Object.values(itemCount)[1];
      let thirdItem = Object.values(itemCount)[2];
      // grammar for "спальни"
      let oneBedroom = `спальня`;
      let severalBedrooms = `спальни`;
      let manyBedrooms = `спален`;
      // grammar for "кровати"
      let oneBed = `кровать`;
      let severalBeds = `кровати`;
      let manyBeds = `кроватей`;
      // grammar for "ванные комнаты"
      let oneBathroom = `ванная комната`;
      let severalBathrooms = `ванные комнаты`;
      let manyBathrooms = `ванных комнат`;
      if (firstItem === 0 && secondItem === 0 && thirdItem === 0) return placeholder;
      // one: one item
      if (firstItem === 1 && secondItem === 0 && thirdItem === 0) {
        return `${firstItem} ${oneBedroom}`;
      } else if (firstItem === 0 && secondItem === 1 && thirdItem === 0) {
        return `${secondItem} ${oneBed}`;
      } else if (firstItem === 0 && secondItem === 0 && thirdItem === 1) {
        return `${thirdItem} ${oneBathroom}`;
      }
      // two items
      if (firstItem === 0 && secondItem === 1 && thirdItem === 1) {
        return `${secondItem} ${oneBed}, ${thirdItem} ${oneBathroom}`;
      } else if (firstItem === 1 && secondItem === 0 && thirdItem === 1) {
        return `${firstItem} ${oneBedroom}, ${thirdItem} ${oneBathroom}`;
      } else if (firstItem === 1 && secondItem === 1 && thirdItem === 0) {
        return `${firstItem} ${oneBedroom}, ${secondItem} ${oneBed}`;
      }
      // three items
      if (firstItem === 1 && secondItem === 1 && thirdItem === 1) {
        return `${firstItem} ${oneBedroom}, ${secondItem} ${oneBed}, ${thirdItem} ${oneBathroom}`;
      }
      // two: two items
      if (firstItem === 2 && secondItem === 0 && thirdItem === 0) {
        return `${firstItem} ${severalBedrooms}`;
      } else if (firstItem === 0 && secondItem === 2 && thirdItem === 0) {
        return `${secondItem} ${severalBeds}`;
      } else if (firstItem === 0 && secondItem === 0 && thirdItem === 2) {
        return `${thirdItem} ${severalBathrooms}`;
      }
      // three: three items
      if (firstItem === 3 && secondItem === 0 && thirdItem === 0) {
        return `${firstItem} ${severalBedrooms}`;
      } else if (firstItem === 0 && secondItem === 3 && thirdItem === 0) {
        return `${secondItem} ${severalBeds}`;
      } else if (firstItem === 0 && secondItem === 0 && thirdItem === 3) {
        return `${thirdItem} ${severalBathrooms}`;
      }
      if (firstItem === 2 && secondItem === 1 && thirdItem === 0) {
        return `${firstItem} ${severalBedrooms}, ${secondItem} ${severalBeds}`;
      } else if (firstItem === 2 && secondItem === 0 && thirdItem === 1) {
        return `${firstItem} ${severalBedrooms}, ${thirdItem} ${severalBathrooms}`;
      } else if (firstItem === 1 && secondItem === 2 && thirdItem === 0) {
        return `${firstItem} ${oneBedroom}, ${secondItem} ${severalBeds}`;
      } else if (firstItem === 0 && secondItem === 2 && thirdItem === 1) {
        return `${secondItem} ${severalBeds}, ${thirdItem} ${oneBathroom}`;
      } else if (firstItem === 1 && secondItem === 0 && thirdItem === 2) {
        return `${firstItem} ${oneBedroom}, ${thirdItem} ${severalBathrooms}`;
      }
    },
  });
  $('#iqdropdown-seventh').iqDropdown({
    maxItems: 3,
    setSelectionText: (itemCount, totalItems) => {
      const placeholder = `Что должно входить в номер?`;
      // quantity of each item
      let firstItem = Object.values(itemCount)[0];
      let secondItem = Object.values(itemCount)[1];
      let thirdItem = Object.values(itemCount)[2];
      // grammar for "спальни"
      let oneBedroom = `спальня`;
      let severalBedrooms = `спальни`;
      let manyBedrooms = `спален`;
      // grammar for "кровати"
      let oneBed = `кровать`;
      let severalBeds = `кровати`;
      let manyBeds = `кроватей`;
      // grammar for "ванные комнаты"
      let oneBathroom = `ванная комната`;
      let severalBathrooms = `ванные комнаты`;
      let manyBathrooms = `ванных комнат`;
      if (firstItem === 0 && secondItem === 0 && thirdItem === 0) return placeholder;
      // one: one item
      if (firstItem === 1 && secondItem === 0 && thirdItem === 0) {
        return `${firstItem} ${oneBedroom}`;
      } else if (firstItem === 0 && secondItem === 1 && thirdItem === 0) {
        return `${secondItem} ${oneBed}`;
      } else if (firstItem === 0 && secondItem === 0 && thirdItem === 1) {
        return `${thirdItem} ${oneBathroom}`;
      }
      // two items
      if (firstItem === 0 && secondItem === 1 && thirdItem === 1) {
        return `${secondItem} ${oneBed}, ${thirdItem} ${oneBathroom}`;
      } else if (firstItem === 1 && secondItem === 0 && thirdItem === 1) {
        return `${firstItem} ${oneBedroom}, ${thirdItem} ${oneBathroom}`;
      } else if (firstItem === 1 && secondItem === 1 && thirdItem === 0) {
        return `${firstItem} ${oneBedroom}, ${secondItem} ${oneBed}`;
      }
      // three items
      if (firstItem === 1 && secondItem === 1 && thirdItem === 1) {
        return `${firstItem} ${oneBedroom}, ${secondItem} ${oneBed}, ${thirdItem} ${oneBathroom}`;
      }
      // two: two items
      if (firstItem === 2 && secondItem === 0 && thirdItem === 0) {
        return `${firstItem} ${severalBedrooms}`;
      } else if (firstItem === 0 && secondItem === 2 && thirdItem === 0) {
        return `${secondItem} ${severalBeds}`;
      } else if (firstItem === 0 && secondItem === 0 && thirdItem === 2) {
        return `${thirdItem} ${severalBathrooms}`;
      }
      // three: three items
      if (firstItem === 3 && secondItem === 0 && thirdItem === 0) {
        return `${firstItem} ${severalBedrooms}`;
      } else if (firstItem === 0 && secondItem === 3 && thirdItem === 0) {
        return `${secondItem} ${severalBeds}`;
      } else if (firstItem === 0 && secondItem === 0 && thirdItem === 3) {
        return `${thirdItem} ${severalBathrooms}`;
      }
      if (firstItem === 2 && secondItem === 1 && thirdItem === 0) {
        return `${firstItem} ${severalBedrooms}, ${secondItem} ${severalBeds}`;
      } else if (firstItem === 2 && secondItem === 0 && thirdItem === 1) {
        return `${firstItem} ${severalBedrooms}, ${thirdItem} ${severalBathrooms}`;
      } else if (firstItem === 1 && secondItem === 2 && thirdItem === 0) {
        return `${firstItem} ${oneBedroom}, ${secondItem} ${severalBeds}`;
      } else if (firstItem === 0 && secondItem === 2 && thirdItem === 1) {
        return `${secondItem} ${severalBeds}, ${thirdItem} ${oneBathroom}`;
      } else if (firstItem === 1 && secondItem === 0 && thirdItem === 2) {
        return `${firstItem} ${oneBedroom}, ${thirdItem} ${severalBathrooms}`;
      }
    },
  });
});