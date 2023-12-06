document.querySelectorAll(".accordion-faq__trigger").forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentNode;

    if (parent.classList.contains("accordion-faq--active")) {
      parent.classList.remove("accordion-faq--active");
    } else {
      document
        .querySelectorAll(".accordion-faq")
        .forEach((child) => child.classList.remove("accordion-faq--active"));
      parent.classList.add("accordion-faq--active");
    }
  });
});
