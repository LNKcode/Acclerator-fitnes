import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


function swiperJs() {
  new Swiper('.juri .swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.juri__btn--next',
      prevEl: '.juri__btn--prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });
}

export { swiperJs };
