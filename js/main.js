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

// ymaps.ready(init);
// function init() {
//   var myMap = new ymaps.Map('map', {
//     center: [7.88823455, 98.2965035],
//     zoom: 17,
//     controls: ['zoomControl'],
//   });
// }
