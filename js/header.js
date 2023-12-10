const openMenu = document.querySelector(".header__open-menu");
const closeMenu = document.querySelector(".header__close-menu");
const modalHeader = document.querySelector(".modal");
const openConsultation = document.querySelectorAll(".consultation__open");
const modalConsultation = document.querySelector(".modal-consultation");
const openCity = document.querySelector(".open-modal-city");
const modalOpen = document.querySelector(".modal-city");
const closeCity = document.querySelectorAll(".close-modal");
const popup = document.querySelector(".popup");
const popup2 = document.querySelector(".popup2");
const darkening = document.querySelectorAll(".darkening");

function toggleModal(event) {
  if (event.target.matches(".consultation__open")) {
    modalConsultation.style.display = "block";
    document.body.style.overflow = "hidden";
  } else if (event.target.matches(".open-modal-city")) {
    modalOpen.style.display = "block";
    document.body.style.overflow = "hidden";
  } else if (event.target.matches(".close-modal")) {
    popup.style.display = "none";
    popup2.style.display = "none";
    document.body.style.overflow = "auto";
  } else if (event.target.matches(".header__open-menu")) {
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    modalHeader.style.display = "block";
    document.body.style.overflow = "hidden";
  } else if (event.target.matches(".header__close-menu")) {
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
    modalHeader.style.display = "none";
    document.body.style.overflow = "auto";
  } else if (event.target.matches(".darkening")) {
    popup.style.display = "none";
    popup2.style.display = "none";
    closeMenu.style.display = "none";
    modalHeader.style.display = "none";
    openMenu.style.display = "block";
    document.body.style.overflow = "auto";
  }
}

closeMenu.addEventListener("click", toggleModal);
openCity.addEventListener("click", toggleModal);

openMenu.addEventListener("click", toggleModal);
closeCity.forEach((btn) => btn.addEventListener("click", toggleModal));
darkening.forEach((btn) => btn.addEventListener("click", toggleModal));
openConsultation.forEach((btn) => btn.addEventListener("click", toggleModal));
