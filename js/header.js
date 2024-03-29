const openMenu = document.querySelector(".header__open-menu");
const closeMenu = document.querySelector(".header__close-menu");
const modalHeader = document.querySelector(".modal");
const openConsultation = document.querySelectorAll(".consultation__open");
const modalConsultation = document.querySelector(".modal-consultation");
const openCity = document.querySelectorAll(".open-modal-city");
const modalOpen = document.querySelector(".modal-city");
const closeCity = document.querySelectorAll(".close-modal");
const popup = document.querySelector(".popup");
const popup2 = document.querySelector(".popup2");
const darkening = document.querySelectorAll(".darkening");

const subMenuOpen = document.querySelectorAll(".trigger-new-window");
const nenuOpen = document.querySelectorAll(".accordion-item__trigger");
const submenu = document.querySelectorAll(".accordion2s");

function openHeaderMenu() {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  modalHeader.style.display = "block";
  document.body.style.overflow = "hidden";

  const header = document.querySelector('.header')
  const modal = document.querySelector('.darkening-header')

  modal.style.height = `${document.body.offsetHeight - header.offsetHeight}px`
}

function toggleModal(event) {
  if (event.target.closest(".consultation__open")) {
    modalConsultation.style.display = "block";
    document.body.style.overflow = "hidden";
  } else if (event.target.closest(".open-modal-city")) {
    modalOpen.style.display = "block";
    document.body.style.overflow = "hidden";
  } else if (event.target.closest(".close-modal")) {
    popup.style.display = "none";
    popup2.style.display = "none";
    document.body.style.overflow = "auto";
  } else if (event.target.closest(".header__open-menu")) {
    openHeaderMenu()
  } else if (event.target.closest(".header__close-menu")) {
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
openCity.forEach(i => i.addEventListener("click", toggleModal));

openMenu.addEventListener("click", toggleModal);
closeCity.forEach((btn) => btn.addEventListener("click", toggleModal));
darkening.forEach((btn) => btn.addEventListener("click", toggleModal));
openConsultation.forEach((btn) => btn.addEventListener("click", toggleModal));

function closeSubMenu() {
  submenu.forEach((btn) => (btn.style.display = "none"));
}

function openSubMenu() {
  submenu.forEach((btn) => (btn.style.display = "block"));
}

subMenuOpen.forEach((btn) => btn.addEventListener("click", closeSubMenu));
nenuOpen.forEach((btn) => btn.addEventListener("click", openSubMenu));
