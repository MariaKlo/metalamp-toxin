// import _ from "underscore";
// import $ from "expose-loader?exposes=$,jQuery!jquery";
// import _, { map } from 'underscore';
import $ from 'jquery';

// require("inputmask/dist/inputmask/jquery.inputmask.js");

import './sass/colors-type.sass';
import './sass/fonts.sass';
import './sass/form-elements.sass';
import './sass/cards.sass';
import './sass/headers-footers.sass';
import './sass/swiper.sass';

global.jQuery = global.$ = $;