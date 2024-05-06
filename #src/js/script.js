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
const swiperAboutService = new Swiper(".about-service__slider", {
  slidesPerView: 2,
  spaceBetween: 24,
  navigation: {
    nextEl: ".about-service__slider__button-next",
    prevEl: ".about-service__slider__button-prev",
  },
});
const swiperFuneralArrangements = new Swiper(".funeral-arrangements__slider", {
  slidesPerView: 3,
  spaceBetween: 16,
  navigation: {
    nextEl: ".funeral-arrangements__slider__button-next",
    prevEl: ".funeral-arrangements__slider__button-prev",
  },
});
const swiperCoffinsMoscow = new Swiper(".coffins-moscow__slider", {
  slidesPerView: 3,
  spaceBetween: 16,
  navigation: {
    nextEl: ".coffins-moscow__slider__button-next",
    prevEl: ".coffins-moscow__slider__button-prev",
  },
});