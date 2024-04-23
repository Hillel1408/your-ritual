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
