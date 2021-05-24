$(document).ready(function () {
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

  let menuButton = document.querySelector('.header__button-menu');
  let headerMenu = document.querySelector('.header__menu');

  menuButton.addEventListener('click', function () {
    headerMenu.classList.toggle('header__menu--visible');
    menuButton.classList.toggle('active');
    console.log('Клик по кнопке');
  });

  let modalButton = document.querySelectorAll('[data-toggle="modal"]');
  let modalOverlay = document.querySelector('.modal__overlay');
  let modalContent = document.querySelector('.modal__content');

  modalButton.forEach(function (item) {
    item.addEventListener('click', function () {
      modalOverlay.classList.add('modal__overlay--visible');
      modalContent.classList.add('modal__content--visible');
      if (modalOverlay.classList.contains('modal__overlay--visible')) {
        bodyContent.classList.add('modal-open');
      }
    });
  });

  let closeModalButton = document.querySelector('.modal__btn');

  closeModalButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalOverlay.classList.remove('modal__overlay--visible');
    modalContent.classList.remove('modal__content--visible');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (modalContent.classList.contains('modal__content--visible')) {
        evt.preventDefault();
        modalContent.classList.remove('modal__content--visible');
        modalOverlay.classList.remove('modal__overlay--visible');
      }
    }
  });
  // Обработка форм
  $('.form__validate').each(function () {
    $(this).validate({
      errorClass: 'invalid',
      messages: {
        name: {
          required: 'Please specify your name',
          minlength: 'The name must be at least 2 characters long',
        },
        email: {
          required: 'We need your email address to contact you',
          email: 'Your email address must be in the format of name@domain.com',
        },
        phone: {
          required: 'Please specify your phone',
        },
      },
    });
  });
  $('[name="phone"]').mask('+7(000)-000-00-00');
});
