var swiper7 = new Swiper(".stageSlider", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 20,
  navigation: {
    prevEl: ".provide-next",
    nextEl: ".provide-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1.2, spaceBetween: 10 },
    425: { spaceBetween: 10 },
    768: { slidesPerView: 1.5 },
    1024: { slidesPerView: 2, spaceBetween: 10 },
    1920: { slidesPerView: 3 },
  },
});
