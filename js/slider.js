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
      let slideFactor = allSlides + 0.4;
      return `<span class="${className}" style="width: calc(100% / ${slideFactor})">
      </span>`;
    },
  },
});
