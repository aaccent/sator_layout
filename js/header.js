const openMenu = document.querySelector(".header__open-menu");
const closeMenu = document.querySelector(".header__close-menu");
const modal = document.querySelector(".modal");
const openConsultation = document.querySelector(".consultation__open");
const closeConsultation = document.querySelector(".close-menu");
const modalConsultation = document.querySelector(".modal-consultation");

document.querySelectorAll(".accordion-item__trigger").forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentNode;

    if (parent.classList.contains("accordion-item--active")) {
      parent.classList.remove("accordion-item--active");
    } else {
      document
        .querySelectorAll(".accordion-item")
        .forEach((child) => child.classList.remove("accordion-item--active"));
      parent.classList.add("accordion-item--active");
    }
  });
});

document.querySelectorAll(".accordion-item__trigger2").forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentNode;

    if (parent.classList.contains("accordion-item--active2")) {
      parent.classList.remove("accordion-item--active2");
    } else {
      document
        .querySelectorAll(".accordion-item2")
        .forEach((child) => child.classList.remove("accordion-item--active2"));
      parent.classList.add("accordion-item--active2");
    }
  });
});

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

openMenu.addEventListener("click", openModal);
closeMenu.addEventListener("click", closeModal);
openConsultation.addEventListener("click", openConsultationModal);
closeConsultation.addEventListener("click", closeConsultationModal);
