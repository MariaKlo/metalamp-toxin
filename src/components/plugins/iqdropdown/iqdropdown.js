/* eslint-disable consistent-return */
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

class ItemQuantityDropdown {
  dropdownGuestsId = [
    '.js-iqdropdown_first', '.js-iqdropdown_second', '.js-iqdropdown_third', '.js-iqdropdown_fourth',
    '.js-iqdropdown_fifth',
  ];

  dropdownRoomId = ['.js-iqdropdown_sixth', '.js-iqdropdown_seventh'];

  constructor() {
    this.init();
  }

  init() {
    this.setBtn();
    this.callGuestPlugin();
    this.callRoomPlugin();
  }

  setBtn() {
    $('.iqdropdown-btn-clear').hide();
    $('.iqdropdown-menu-btn-wrap').css('justify-content', 'end');
  }

  callGuestPlugin() {
    for (let i = 0; i < this.dropdownGuestsId.length; i += 1) {
      $(this.dropdownGuestsId[i]).iqDropdown({
        maxItems: 10,
        setSelectionText: (itemCount, totalItems) => {
          const words = {
            textPlural: 'гостей',
            selectionText: 'гость',
            placeholderText: 'Сколько гостей',
            secondSelectionText: 'гостя',
            baby: 'младенец',
            babiesSelectionText: 'младенца',
          };

          // check for non-baby guests
          const howManyBabies = Object.values(itemCount)[2];

          if (totalItems === 0 && howManyBabies === 0) return words.placeholderText;
          // with one baby
          if (totalItems === 1 && howManyBabies === 1) {
            return `${totalItems} ${words.selectionText}, ${howManyBabies} ${words.baby}`;
          } if (totalItems < 5 && howManyBabies === 1) {
            return `${totalItems} ${words.secondSelectionText}, ${howManyBabies} ${words.baby}`;
          } if (totalItems <= 10 && howManyBabies === 1) {
            return `${totalItems} ${words.textPlural}, ${howManyBabies} ${words.baby}`;
          }
          // with two babies
          if (totalItems === 1 && howManyBabies === 2) {
            return `${totalItems} ${words.selectionText}, ${howManyBabies} ${words.babiesSelectionText}`;
          } if (totalItems < 5 && howManyBabies === 2) {
            return `${totalItems} ${words.secondSelectionText}, ${howManyBabies} ${words.babiesSelectionText}`;
          } if (totalItems <= 10 && howManyBabies === 2) {
            return `${totalItems} ${words.textPlural}, ${howManyBabies} ${words.babiesSelectionText}`;
          }
          // with three babies
          if (totalItems === 1 && howManyBabies === 3) {
            return `${totalItems} ${words.selectionText}, ${howManyBabies} ${words.babiesSelectionText}`;
          } if (totalItems < 5 && howManyBabies === 3) {
            return `${totalItems} ${words.secondSelectionText}, ${howManyBabies} ${words.babiesSelectionText}`;
          } if (totalItems <= 10 && howManyBabies === 3) {
            return `${totalItems} ${words.textPlural}, ${howManyBabies} ${words.babiesSelectionText}`;
          }
          // without babies
          if (totalItems === 1) {
            return `${totalItems} ${words.selectionText}`;
          } if (totalItems >= 2 && totalItems <= 4) {
            return `${totalItems} ${words.secondSelectionText}`;
          } if (totalItems >= 5 && totalItems <= 10) {
            return `${totalItems} ${words.textPlural}`;
          }
        },
        onChange: (id, count, totalItems) => {
          const $firstDecrementButton = $('.iqdropdown-menu-option:nth-child(1)').find('.button-decrement');
          const $secondDecrementButton = $('.iqdropdown-menu-option:nth-child(2)').find('.button-decrement');
          const $thirdDecrementButton = $('.iqdropdown-menu-option:nth-child(3)').find('.button-decrement');
          // confirm button
          $('.iqdropdown-btn-confirm').click(() => {
            $('.iqdropdown').removeClass('.menu-open');
          });

          $('.iqdropdown-btn-clear').click(() => {
            $('.iqdropdown-selection').text('Сколько гостей');
            $('.counter').text('0');
            $('.iqdropdown-btn-clear').hide();
            $('.iqdropdown-menu-btn-wrap').css('justify-content', 'end');
          });

          // show&hide clear button
          if (totalItems === 0) {
            $('.iqdropdown-btn-clear').hide();
            $('.iqdropdown-menu-btn-wrap').css('justify-content', 'end');
          }
          if (totalItems > 0) {
            $('.iqdropdown-btn-clear').show();
            $('.iqdropdown-menu-btn-wrap').css('justify-content', 'space-between');
          }

          // set opacity for decrement buttons
          // first button
          if (count === 0 && id === 'item1') {
            $firstDecrementButton.css('opacity', '0.5');
          } else if (count > 0 && id === 'item1') {
            $firstDecrementButton.css('opacity', '1');
          }

          // second button
          if (count === 0 && id === 'item2') {
            $secondDecrementButton.css('opacity', '0.5');
          } else if (count > 0 && id === 'item2') {
            $secondDecrementButton.css('opacity', '1');
          }

          // third button
          if (count === 0 && id === 'item3') {
            $thirdDecrementButton.css('opacity', '0.5');
          } else if (count > 0 && id === 'item3') {
            $thirdDecrementButton.css('opacity', '1');
          }
        },
      });
    }
  }

  callRoomPlugin() {
    for (let i = 0; i < this.dropdownRoomId.length; i += 1) {
      $(this.dropdownRoomId[i]).iqDropdown({
        maxItems: 3,
        setSelectionText: (itemCount) => {
          const words = {
            placeholder: 'Что должно входить в номер?',
            oneBedroom: 'спальня',
            severalBedrooms: 'спальни',
            oneBed: 'кровать',
            severalBeds: 'кровати',
            oneBathroom: 'ванная комната',
            severalBathrooms: 'ванные комнаты',
          };
          // quantity of each item
          const firstItem = Object.values(itemCount)[0];
          const secondItem = Object.values(itemCount)[1];
          const thirdItem = Object.values(itemCount)[2];
          // return default phrase
          if (firstItem === 0 && secondItem === 0 && thirdItem === 0) return words.placeholder;
          // one: one item
          if (firstItem === 1 && secondItem === 0 && thirdItem === 0) {
            return `${firstItem} ${words.oneBedroom}`;
          } if (firstItem === 0 && secondItem === 1 && thirdItem === 0) {
            return `${secondItem} ${words.oneBed}`;
          } if (firstItem === 0 && secondItem === 0 && thirdItem === 1) {
            return `${thirdItem} ${words.oneBathroom}`;
          }
          // two items
          if (firstItem === 0 && secondItem === 1 && thirdItem === 1) {
            return `${secondItem} ${words.oneBed}, ${thirdItem} ${words.oneBathroom}`;
          } if (firstItem === 1 && secondItem === 0 && thirdItem === 1) {
            return `${firstItem} ${words.oneBedroom}, ${thirdItem} ${words.oneBathroom}`;
          } if (firstItem === 1 && secondItem === 1 && thirdItem === 0) {
            return `${firstItem} ${words.oneBedroom}, ${secondItem} ${words.oneBed}`;
          }
          // three items
          if (firstItem === 1 && secondItem === 1 && thirdItem === 1) {
            return `${firstItem} ${words.oneBedroom}, ${secondItem} ${words.oneBed}, 
            ${thirdItem} ${words.oneBathroom}`;
          }
          // two: two items
          if (firstItem === 2 && secondItem === 0 && thirdItem === 0) {
            return `${firstItem} ${words.severalBedrooms}`;
          } if (firstItem === 0 && secondItem === 2 && thirdItem === 0) {
            return `${secondItem} ${words.severalBeds}`;
          } if (firstItem === 0 && secondItem === 0 && thirdItem === 2) {
            return `${thirdItem} ${words.severalBathrooms}`;
          }
          // three: three items
          if (firstItem === 3 && secondItem === 0 && thirdItem === 0) {
            return `${firstItem} ${words.severalBedrooms}`;
          } if (firstItem === 0 && secondItem === 3 && thirdItem === 0) {
            return `${secondItem} ${words.severalBeds}`;
          } if (firstItem === 0 && secondItem === 0 && thirdItem === 3) {
            return `${thirdItem} ${words.severalBathrooms}`;
          }
          if (firstItem === 2 && secondItem === 1 && thirdItem === 0) {
            return `${firstItem} ${words.severalBedrooms}, ${secondItem} ${words.severalBeds}`;
          } if (firstItem === 2 && secondItem === 0 && thirdItem === 1) {
            return `${firstItem} ${words.severalBedrooms}, ${thirdItem} ${words.severalBathrooms}`;
          } if (firstItem === 1 && secondItem === 2 && thirdItem === 0) {
            return `${firstItem} ${words.oneBedroom}, ${secondItem} ${words.severalBeds}`;
          } if (firstItem === 0 && secondItem === 2 && thirdItem === 1) {
            return `${secondItem} ${words.severalBeds}, ${thirdItem} ${words.oneBathroom}`;
          } if (firstItem === 1 && secondItem === 0 && thirdItem === 2) {
            return `${firstItem} ${words.oneBedroom}, ${thirdItem} ${words.severalBathrooms}`;
          }
        },
      });
    }
  }
}

const dropdown = new ItemQuantityDropdown();
