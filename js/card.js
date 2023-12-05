var swiper = new Swiper(".goodsSliderMin", {
  direction: "vertical",
  loop: true,
  slidesPerView: 8,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 4,
    },
    701: {
      slidesPerView: 8,
    },
  },
});
var swiper2 = new Swiper(".goodsSliderMax", {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-goods-next",
    prevEl: ".swiper-goods-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
