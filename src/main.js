// import _ from "underscore";
// import $ from "expose-loader?exposes=$,jQuery!jquery";
// import _, { map } from 'underscore';
// import AirDatepicker from 'air-datepicker';
// import 'air-datepicker/air-datepicker.css';
// require("inputmask/dist/inputmask/jquery.inputmask.js");
import $ from 'jquery';

// import 'item-quantity-dropdown';
// import 'item-quantity-dropdown/lib/item-quantity-dropdown.css';

import './sass/colors-type.sass';
import './sass/fonts.sass';
import './sass/form-elements.sass';
import './sass/cards.sass';
import './sass/headers-footers.sass';
import './sass/swiper.sass';

global.jQuery = global.$ = $;

// $(document).ready(() => {
//     $('.iqdropdown').iqDropdown( [options] );
// })