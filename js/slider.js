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
      const screenWidth = window.screen.width - 22;
      let factorBullets = screenWidth / allSlides - 10;
      return `<span class="${className}" style="width: ${factorBullets}px">
      </span>`;
    },
  },
});
