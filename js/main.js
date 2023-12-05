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
