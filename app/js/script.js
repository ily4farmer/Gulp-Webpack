'use strict'

document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".slider-swiper", {
    slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
    },
  });
  });