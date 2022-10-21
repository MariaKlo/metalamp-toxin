/* eslint-disable import/no-unresolved */
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

class SwiperPlugin {
  swiper = new Swiper('.js-swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

const swiper = new SwiperPlugin();
