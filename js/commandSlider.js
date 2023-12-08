var swiperCommand = new Swiper(".commandSlider", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,
  navigation: {
    prevEl: ".command-next",
    nextEl: ".command-prev",
  },

  breakpoints: {
    320: { slidesPerView: 1.5, spaceBetween: 10 },
    425: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1920: { slidesPerView: 4 },
  },
});
