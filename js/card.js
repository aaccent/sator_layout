var swiperCard = new Swiper(".goodsSliderMin", {
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
var swiperCardMax = new Swiper(".goodsSliderMax", {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-goods-next",
    prevEl: ".swiper-goods-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      centeredSlides: true,
    },
    426: {
      slidesPerView: 1,
    },
  },

  thumbs: {
    swiper: swiperCard,
  },
});

const tabNavs = document.querySelectorAll(".nav-tab");
const tabPanes = document.querySelectorAll(".tab-pane");

for (let i = 0; i < tabNavs.length; i++) {
  tabNavs[i].addEventListener("click", function (e) {
    e.preventDefault();
    let activeTabAttr = e.target.getAttribute("data-tab");

    for (let j = 0; j < tabNavs.length; j++) {
      let contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active");
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    }
  });
}
