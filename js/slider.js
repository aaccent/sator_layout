var swiper = new Swiper(".bannerSwiper", {
  navigation: {
    prevEl: ".button-next",
    nextEl: ".button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

var swiper1 = new Swiper(".serviceSlider", {
  slidesPerView: 3,
  spaceBetween: 0,
  navigation: {
    prevEl: ".service-next",
    nextEl: ".service-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
    },
    425: {
      slidesPerView: 1.5,
    },
    850: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".projectsSlider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".projects-next",
    prevEl: ".projects-prev",
  },
});
