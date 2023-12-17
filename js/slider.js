var swiper = new Swiper(".bannerSwiper", {
  navigation: {
    prevEl: ".button-next",
    nextEl: ".button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
    dragSize: 150,
    snapOnRelease: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      let allSlides = document.querySelectorAll(".banner-card").length;
      let slideInterval = 4 * (allSlides - 1);
      let x = slideInterval * 0.045;
      return `<span class="${className}" style="width: calc(100% / ${
        allSlides + x
      })">
      </span>`;
    },
  },
});
