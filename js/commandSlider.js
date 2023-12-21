var swiperCommand = new Swiper(".commandSlider", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 20,
  navigation: {
    prevEl: ".command-next",
    nextEl: ".command-prev",
  },

  breakpoints: {
    320: { slidesPerView: 1.5, spaceBetween: 15 },
    380: { slidesPerView: 1.3, spaceBetween: 15 },
    425: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1920: { slidesPerView: 4 },
  },
});
