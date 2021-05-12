const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
  },
});

const reviewwSwiper = new Swiper('.rewievs-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.rewievs-slider__button--next',
    prevEl: '.rewievs-slider__button--prev',
  },
});
