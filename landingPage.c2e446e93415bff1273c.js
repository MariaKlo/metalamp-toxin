/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/hamburger/hamburger.js":
/*!***********************************************!*\
  !*** ./src/components/hamburger/hamburger.js ***!
  \***********************************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Hamburger = /*#__PURE__*/function () {
  function Hamburger() {
    _classCallCheck(this, Hamburger);

    _defineProperty(this, "hamburger", document.querySelector('.js-hamburger'));

    _defineProperty(this, "filterHamburger", document.querySelector('.js-filter__hamburger'));

    _defineProperty(this, "filter", document.querySelector('.js-filter'));

    _defineProperty(this, "filterStyle", document.querySelector('.filter'));

    _defineProperty(this, "filterMain", document.querySelector('.filter-main'));

    _defineProperty(this, "header", document.querySelector('.js-header__wrapper'));

    _defineProperty(this, "headerStyle", document.querySelector('.header__wrapper'));

    this.init();
  }

  _createClass(Hamburger, [{
    key: "init",
    value: function init() {
      if (this.filter !== null && this.filterHamburger !== null && this.filterMain !== null && this.filterStyle !== null) {
        this.openFilterMenu();
      }

      this.openHeaderMenu();
    }
  }, {
    key: "openFilterMenu",
    value: function openFilterMenu() {
      var _this = this;

      this.filterHamburger.addEventListener('click', function () {
        _this.filterHamburger.classList.toggle('filter__hamburger_active');

        _this.filterStyle.classList.toggle('filter_active');
      });
    }
  }, {
    key: "openHeaderMenu",
    value: function openHeaderMenu() {
      var _this2 = this;

      this.hamburger.addEventListener('click', function () {
        _this2.hamburger.classList.toggle('hamburger_active');

        _this2.headerStyle.classList.toggle('header__wrapper_active');
      });
    }
  }]);

  return Hamburger;
}();

var hamburgerMenu = new Hamburger();

/***/ }),

/***/ "./src/pages/website/landing-page/landingPage.js":
/*!*******************************************************!*\
  !*** ./src/pages/website/landing-page/landingPage.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_fonts_fonts_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/fonts/fonts.sass */ "./src/assets/fonts/fonts.sass");
/* harmony import */ var _landing_page_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page.sass */ "./src/pages/website/landing-page/landing-page.sass");
/* harmony import */ var _components_hamburger_hamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/hamburger/hamburger */ "./src/components/hamburger/hamburger.js");
/* harmony import */ var _components_hamburger_hamburger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_hamburger_hamburger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_plugins_datepicker_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/plugins/datepicker/datepicker */ "./src/components/plugins/datepicker/datepicker.js");
/* harmony import */ var _components_plugins_item_quantity_dropdown_item_quantity_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/plugins/item-quantity-dropdown/item-quantity-dropdown */ "./src/components/plugins/item-quantity-dropdown/item-quantity-dropdown.js");






__webpack_require__.g.jQuery = __webpack_require__.g.$;
__webpack_require__.g.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());

/***/ }),

/***/ "./node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
!function(t,n){ true?module.exports=n():0}(window,function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);e(1);!function(t){var n={maxItems:1/0,minItems:0,selectionText:"item",textPlural:"items",controls:{position:"right",displayCls:"iqdropdown-content",controlsCls:"iqdropdown-item-controls",counterCls:"counter"},items:{},onChange:function(){},beforeDecrement:function(){return!0},beforeIncrement:function(){return!0},setSelectionText:function(t,n){var e=1!==n&&this.textPlural.length>0?this.textPlural:this.selectionText;return"".concat(n," ").concat(e)}};t.fn.iqDropdown=function(e){return this.each(function(){var o=t(this),r=o.find("p.iqdropdown-selection").last(),i=o.find("div.iqdropdown-menu").find("div.iqdropdown-menu-option"),u={selectionText:r.data("selection-text"),textPlural:r.data("text-plural")},c=t.extend(!0,{},n,u,e),a={},l=0;function s(){r.html(c.setSelectionText(a,l))}o.click(function(){o.toggleClass("menu-open")}),i.each(function(){var n=t(this),e=n.data("id"),o=Number(n.data("defaultcount")||"0");a[e]=o,l+=o,function(t,n){var e=Number(n.data("mincount")),o=Number(n.data("maxcount"));c.items[t]={minCount:Number.isNaN(Number(e))?0:e,maxCount:Number.isNaN(Number(o))?1/0:o}}(e,n),function(n,e){var o=t("<div />").addClass(c.controls.controlsCls),r=t('\n          <button class="button-decrement">\n            <i class="icon-decrement"></i>\n          </button>\n        '),i=t('\n          <button class="button-increment">\n            <i class="icon-decrement icon-increment"></i>\n          </button>\n        '),u=t("<span>".concat(a[n],"</span>")).addClass(c.controls.counterCls);e.children("div").addClass(c.controls.displayCls),o.append(r,u,i),"right"===c.controls.position?e.append(o):e.prepend(o),r.click(function(t){var e=c.items,o=c.minItems,r=c.beforeDecrement,i=c.onChange;r(n,a)&&l>o&&a[n]>e[n].minCount&&(a[n]-=1,l-=1,u.html(a[n]),s(),i(n,a[n],l)),t.preventDefault()}),i.click(function(t){var e=c.items,o=c.maxItems,r=c.beforeIncrement,i=c.onChange;r(n,a)&&l<o&&a[n]<e[n].maxCount&&(a[n]+=1,l+=1,u.html(a[n]),s(),i(n,a[n],l)),t.preventDefault()}),e.click(function(t){return t.stopPropagation()})}(e,n)}),s()}),this}}(jQuery)},function(t,n,e){}])});
//# sourceMappingURL=item-quantity-dropdown.min.js.map

/***/ }),

/***/ "./node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css":
/*!********************************************************************************!*\
  !*** ./node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/website/landing-page/landing-page.sass":
/*!**********************************************************!*\
  !*** ./src/pages/website/landing-page/landing-page.sass ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"landingPage": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmetalamp"] = self["webpackChunkmetalamp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_air-datepicker_index_es_js-node_modules_air-datepicker_air-datepicker_cs-571d04","src_components_plugins_datepicker_datepicker_js-src_components_plugins_item-quantity-dropdown-7052de"], () => (__webpack_require__("./src/pages/website/landing-page/landingPage.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=landingPage.c2e446e93415bff1273c.js.map