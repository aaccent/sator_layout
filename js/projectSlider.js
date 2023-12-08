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
  },
});
