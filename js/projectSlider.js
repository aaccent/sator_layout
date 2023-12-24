var swiper = new Swiper(".projectsSlider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".projects-next",
    prevEl: ".projects-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1.2, spaceBetween: 10 },

    769: { spaceBetween: 20 },
  },
});
