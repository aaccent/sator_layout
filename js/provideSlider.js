var swiper1 = new Swiper(".provideSlider", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
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
