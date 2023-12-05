const openMenu = document.querySelector(".header__open-menu");
const closeMenu = document.querySelector(".header__close-menu");
const modal = document.querySelector(".modal");

const openConsultation = document.querySelector(".consultation__open");
const closeConsultation = document.querySelector(".close-menu");
const modalConsultation = document.querySelector(".modal-consultation");

const chooseCity = document.querySelector(".header-first");
const closeCity = document.querySelector(".close-city");
const modalOpen = document.querySelector(".modal-city");

function openModal() {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  modal.style.display = "block";
}

function closeModal() {
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  modal.style.display = "none";
}

function openConsultationModal() {
  closeConsultation.style.display = "block";
  modalConsultation.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeConsultationModal() {
  closeConsultation.style.display = "none";
  modalConsultation.style.display = "none";
  document.body.style.overflow = "auto";
}

function openCityModal() {
  modalOpen.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeCityModal() {
  modalOpen.style.display = "none";
  document.body.style.overflow = "auto";
}

openMenu.addEventListener("click", openModal);
closeMenu.addEventListener("click", closeModal);

openConsultation.addEventListener("click", openConsultationModal);
closeConsultation.addEventListener("click", closeConsultationModal);

chooseCity.addEventListener("click", openCityModal);
closeCity.addEventListener("click", closeCityModal);
