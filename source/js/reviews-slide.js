import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


function swiperReviewsJs() {
  new Swiper('.reviews .swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev',
    }
  });
}

export { swiperReviewsJs };
