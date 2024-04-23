const swiper = new Swiper(".goods__slider", {
  slidesPerView: 5,
  spaceBetween: 16,
  navigation: {
    nextEl: ".goods__slider__button-next",
    prevEl: ".goods__slider__button-prev",
  },
  pagination: {
    el: ".goods__slider-pagination",
    clickable: true,
  },
});
const swiperIntro = new Swiper(".intro__slider", {
  slidesPerView: 3,
  spaceBetween: 16,
  navigation: {
    nextEl: ".intro__slider__button-next",
    prevEl: ".intro__slider__button-prev",
  },
  pagination: {
    el: ".intro__slider-pagination",
    clickable: true,
  },
});
