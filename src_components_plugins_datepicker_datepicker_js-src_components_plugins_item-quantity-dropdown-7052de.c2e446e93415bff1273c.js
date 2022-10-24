"use strict";
(self["webpackChunkmetalamp"] = self["webpackChunkmetalamp"] || []).push([["src_components_plugins_datepicker_datepicker_js-src_components_plugins_item-quantity-dropdown-7052de"],{

/***/ "./src/components/plugins/datepicker/datepicker.js":
/*!*********************************************************!*\
  !*** ./src/components/plugins/datepicker/datepicker.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! air-datepicker */ "./node_modules/air-datepicker/index.es.js");
/* harmony import */ var air_datepicker_air_datepicker_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! air-datepicker/air-datepicker.css */ "./node_modules/air-datepicker/air-datepicker.css");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Datepicker = /*#__PURE__*/function () {
  function Datepicker() {
    _classCallCheck(this, Datepicker);

    _defineProperty(this, "datepickerId", ['.js-datepicker_first', '.js-datepicker_second', '.js-datepicker_third', '.js-datepicker_fifth', '.js-datepicker_sixth', '.js-datepicker_seventh', '.js-datepicker_eight', '.js-datepicker_ninth', '.js-datepicker_tenth', '.js-datepicker_eleventh', '.js-datepicker_twelfth', '.js-datepicker-thirteenth', '.js-datepicker_fourteenth', '.js-datepicker_fifteenth']);

    _defineProperty(this, "datepickerIdWithRange", ['.js-datepicker_fourth', '#datepicker-calendar']);

    _defineProperty(this, "button", {
      content: 'Применить',
      className: 'custom-button-classname',
      onClick: function onClick() {
        var $isDatePickerActive = $('.air-datepicker.-active-');
        var $isDatePickerInline = $('.air-datepicker.-inline-');
        $isDatePickerActive.css('display', 'none');
        $isDatePickerInline.css('display', 'none');
      }
    });

    this.init();
  }

  _createClass(Datepicker, [{
    key: "init",
    value: function init() {
      this.callDatepickerPlugin();
    }
  }, {
    key: "callDatepickerPlugin",
    value: function callDatepickerPlugin() {
      for (var i = 0; i < this.datepickerId.length; i += 1) {
        var datePlugin = new air_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"](this.datepickerId[i], {
          buttons: ['clear', this.button],
          navTitles: {
            days: '<strong>MMMM</strong> <i>yyyy</i>',
            months: 'Select month of <strong>yyyy</strong>'
          },
          prevHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-left" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"/></svg>',
          nextHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>'
        });
      }

      for (var _i = 0; _i < this.datepickerIdWithRange.length; _i += 1) {
        var _datePlugin = new air_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"](this.datepickerIdWithRange[_i], {
          range: true,
          multipleDatesSeparator: ' - ',
          buttons: ['clear', this.button],
          navTitles: {
            days: '<strong>MMMM</strong> <i>yyyy</i>',
            months: 'Select month of <strong>yyyy</strong>'
          },
          prevHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-left" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"/></svg>',
          nextHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>'
        });
      }
    }
  }]);

  return Datepicker;
}();

var datepickerPlugin = new Datepicker();

/***/ }),

/***/ "./src/components/plugins/item-quantity-dropdown/item-quantity-dropdown.js":
/*!*********************************************************************************!*\
  !*** ./src/components/plugins/item-quantity-dropdown/item-quantity-dropdown.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var item_quantity_dropdown_lib_item_quantity_dropdown_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! item-quantity-dropdown/lib/item-quantity-dropdown.min */ "./node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js");
/* harmony import */ var item_quantity_dropdown_lib_item_quantity_dropdown_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(item_quantity_dropdown_lib_item_quantity_dropdown_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var item_quantity_dropdown_lib_item_quantity_dropdown_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! item-quantity-dropdown/lib/item-quantity-dropdown.min.css */ "./node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable consistent-return */



var ItemQuantityDropdown = /*#__PURE__*/function () {
  function ItemQuantityDropdown() {
    _classCallCheck(this, ItemQuantityDropdown);

    _defineProperty(this, "dropdownGuestsId", ['.js-iqdropdown_first', '.js-iqdropdown_second', '.js-iqdropdown_third', '.js-iqdropdown_fourth', '.js-iqdropdown_fifth']);

    _defineProperty(this, "dropdownRoomId", ['.js-iqdropdown_sixth', '.js-iqdropdown_seventh']);

    this.init();
  }

  _createClass(ItemQuantityDropdown, [{
    key: "init",
    value: function init() {
      this.setBtn();
      this.callGuestPlugin();
      this.callRoomPlugin();
    }
  }, {
    key: "setBtn",
    value: function setBtn() {
      $('.iqdropdown-btn-clear').hide();
      $('.iqdropdown-menu-btn-wrap').css('justify-content', 'end');
    }
  }, {
    key: "callGuestPlugin",
    value: function callGuestPlugin() {
      for (var i = 0; i < this.dropdownGuestsId.length; i += 1) {
        $(this.dropdownGuestsId[i]).iqDropdown({
          maxItems: 10,
          setSelectionText: function setSelectionText(itemCount, totalItems) {
            var words = {
              textPlural: 'гостей',
              selectionText: 'гость',
              placeholderText: 'Сколько гостей',
              secondSelectionText: 'гостя',
              baby: 'младенец',
              babiesSelectionText: 'младенца'
            }; // check for non-baby guests

            var howManyBabies = Object.values(itemCount)[2];
            if (totalItems === 0 && howManyBabies === 0) return words.placeholderText; // with one baby

            if (totalItems === 1 && howManyBabies === 1) {
              return "".concat(totalItems, " ").concat(words.selectionText, ", ").concat(howManyBabies, " ").concat(words.baby);
            }

            if (totalItems < 5 && howManyBabies === 1) {
              return "".concat(totalItems, " ").concat(words.secondSelectionText, ", ").concat(howManyBabies, " ").concat(words.baby);
            }

            if (totalItems <= 10 && howManyBabies === 1) {
              return "".concat(totalItems, " ").concat(words.textPlural, ", ").concat(howManyBabies, " ").concat(words.baby);
            } // with two babies


            if (totalItems === 1 && howManyBabies === 2) {
              return "".concat(totalItems, " ").concat(words.selectionText, ", ").concat(howManyBabies, " ").concat(words.babiesSelectionText);
            }

            if (totalItems < 5 && howManyBabies === 2) {
              return "".concat(totalItems, " ").concat(words.secondSelectionText, ", ").concat(howManyBabies, " ").concat(words.babiesSelectionText);
            }

            if (totalItems <= 10 && howManyBabies === 2) {
              return "".concat(totalItems, " ").concat(words.textPlural, ", ").concat(howManyBabies, " ").concat(words.babiesSelectionText);
            } // with three babies


            if (totalItems === 1 && howManyBabies === 3) {
              return "".concat(totalItems, " ").concat(words.selectionText, ", ").concat(howManyBabies, " ").concat(words.babiesSelectionText);
            }

            if (totalItems < 5 && howManyBabies === 3) {
              return "".concat(totalItems, " ").concat(words.secondSelectionText, ", ").concat(howManyBabies, " ").concat(words.babiesSelectionText);
            }

            if (totalItems <= 10 && howManyBabies === 3) {
              return "".concat(totalItems, " ").concat(words.textPlural, ", ").concat(howManyBabies, " ").concat(words.babiesSelectionText);
            } // without babies


            if (totalItems === 1) {
              return "".concat(totalItems, " ").concat(words.selectionText);
            }

            if (totalItems >= 2 && totalItems <= 4) {
              return "".concat(totalItems, " ").concat(words.secondSelectionText);
            }

            if (totalItems >= 5 && totalItems <= 10) {
              return "".concat(totalItems, " ").concat(words.textPlural);
            }
          },
          onChange: function onChange(id, count, totalItems) {
            var $firstDecrementButton = $('.iqdropdown-menu-option:nth-child(1)').find('.button-decrement');
            var $secondDecrementButton = $('.iqdropdown-menu-option:nth-child(2)').find('.button-decrement');
            var $thirdDecrementButton = $('.iqdropdown-menu-option:nth-child(3)').find('.button-decrement'); // confirm button

            $('.iqdropdown-btn-confirm').click(function () {
              $('.iqdropdown').removeClass('.menu-open');
            });
            $('.iqdropdown-btn-clear').click(function () {
              $('.iqdropdown-selection').text('Сколько гостей');
              $('.counter').text('0');
              $('.iqdropdown-btn-clear').hide();
              $('.iqdropdown-menu-btn-wrap').css('justify-content', 'end');
            }); // show&hide clear button

            if (totalItems === 0) {
              $('.iqdropdown-btn-clear').hide();
              $('.iqdropdown-menu-btn-wrap').css('justify-content', 'end');
            }

            if (totalItems > 0) {
              $('.iqdropdown-btn-clear').show();
              $('.iqdropdown-menu-btn-wrap').css('justify-content', 'space-between');
            } // set opacity for decrement buttons
            // first button


            if (count === 0 && id === 'item1') {
              $firstDecrementButton.css('opacity', '0.5');
            } else if (count > 0 && id === 'item1') {
              $firstDecrementButton.css('opacity', '1');
            } // second button


            if (count === 0 && id === 'item2') {
              $secondDecrementButton.css('opacity', '0.5');
            } else if (count > 0 && id === 'item2') {
              $secondDecrementButton.css('opacity', '1');
            } // third button


            if (count === 0 && id === 'item3') {
              $thirdDecrementButton.css('opacity', '0.5');
            } else if (count > 0 && id === 'item3') {
              $thirdDecrementButton.css('opacity', '1');
            }
          }
        });
      }
    }
  }, {
    key: "callRoomPlugin",
    value: function callRoomPlugin() {
      for (var i = 0; i < this.dropdownRoomId.length; i += 1) {
        $(this.dropdownRoomId[i]).iqDropdown({
          maxItems: 3,
          setSelectionText: function setSelectionText(itemCount) {
            var words = {
              placeholder: 'Что должно входить в номер?',
              oneBedroom: 'спальня',
              severalBedrooms: 'спальни',
              oneBed: 'кровать',
              severalBeds: 'кровати',
              oneBathroom: 'ванная комната',
              severalBathrooms: 'ванные комнаты'
            }; // quantity of each item

            var firstItem = Object.values(itemCount)[0];
            var secondItem = Object.values(itemCount)[1];
            var thirdItem = Object.values(itemCount)[2]; // return default phrase

            if (firstItem === 0 && secondItem === 0 && thirdItem === 0) return words.placeholder; // one: one item

            if (firstItem === 1 && secondItem === 0 && thirdItem === 0) {
              return "".concat(firstItem, " ").concat(words.oneBedroom);
            }

            if (firstItem === 0 && secondItem === 1 && thirdItem === 0) {
              return "".concat(secondItem, " ").concat(words.oneBed);
            }

            if (firstItem === 0 && secondItem === 0 && thirdItem === 1) {
              return "".concat(thirdItem, " ").concat(words.oneBathroom);
            } // two items


            if (firstItem === 0 && secondItem === 1 && thirdItem === 1) {
              return "".concat(secondItem, " ").concat(words.oneBed, ", ").concat(thirdItem, " ").concat(words.oneBathroom);
            }

            if (firstItem === 1 && secondItem === 0 && thirdItem === 1) {
              return "".concat(firstItem, " ").concat(words.oneBedroom, ", ").concat(thirdItem, " ").concat(words.oneBathroom);
            }

            if (firstItem === 1 && secondItem === 1 && thirdItem === 0) {
              return "".concat(firstItem, " ").concat(words.oneBedroom, ", ").concat(secondItem, " ").concat(words.oneBed);
            } // three items


            if (firstItem === 1 && secondItem === 1 && thirdItem === 1) {
              return "".concat(firstItem, " ").concat(words.oneBedroom, ", ").concat(secondItem, " ").concat(words.oneBed, ", \n            ").concat(thirdItem, " ").concat(words.oneBathroom);
            } // two: two items


            if (firstItem === 2 && secondItem === 0 && thirdItem === 0) {
              return "".concat(firstItem, " ").concat(words.severalBedrooms);
            }

            if (firstItem === 0 && secondItem === 2 && thirdItem === 0) {
              return "".concat(secondItem, " ").concat(words.severalBeds);
            }

            if (firstItem === 0 && secondItem === 0 && thirdItem === 2) {
              return "".concat(thirdItem, " ").concat(words.severalBathrooms);
            } // three: three items


            if (firstItem === 3 && secondItem === 0 && thirdItem === 0) {
              return "".concat(firstItem, " ").concat(words.severalBedrooms);
            }

            if (firstItem === 0 && secondItem === 3 && thirdItem === 0) {
              return "".concat(secondItem, " ").concat(words.severalBeds);
            }

            if (firstItem === 0 && secondItem === 0 && thirdItem === 3) {
              return "".concat(thirdItem, " ").concat(words.severalBathrooms);
            }

            if (firstItem === 2 && secondItem === 1 && thirdItem === 0) {
              return "".concat(firstItem, " ").concat(words.severalBedrooms, ", ").concat(secondItem, " ").concat(words.severalBeds);
            }

            if (firstItem === 2 && secondItem === 0 && thirdItem === 1) {
              return "".concat(firstItem, " ").concat(words.severalBedrooms, ", ").concat(thirdItem, " ").concat(words.severalBathrooms);
            }

            if (firstItem === 1 && secondItem === 2 && thirdItem === 0) {
              return "".concat(firstItem, " ").concat(words.oneBedroom, ", ").concat(secondItem, " ").concat(words.severalBeds);
            }

            if (firstItem === 0 && secondItem === 2 && thirdItem === 1) {
              return "".concat(secondItem, " ").concat(words.severalBeds, ", ").concat(thirdItem, " ").concat(words.oneBathroom);
            }

            if (firstItem === 1 && secondItem === 0 && thirdItem === 2) {
              return "".concat(firstItem, " ").concat(words.oneBedroom, ", ").concat(thirdItem, " ").concat(words.severalBathrooms);
            }
          }
        });
      }
    }
  }]);

  return ItemQuantityDropdown;
}();

var dropdown = new ItemQuantityDropdown();

/***/ }),

/***/ "./src/assets/fonts/fonts.sass":
/*!*************************************!*\
  !*** ./src/assets/fonts/fonts.sass ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_components_plugins_datepicker_datepicker_js-src_components_plugins_item-quantity-dropdown-7052de.c2e446e93415bff1273c.js.map