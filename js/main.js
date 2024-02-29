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

// 'Show all' functional from catalog page
void function () {
  const LIMIT = 3

  document.querySelectorAll('.filter__category:has(.swow-all)').forEach(wrapper => {
    const btn = wrapper.querySelector('.swow-all')
    const listItems = wrapper.querySelectorAll('.filter__category-list > *')

    if (listItems.length <= LIMIT) return btn.remove()

    function expand() {
      listItems.forEach(item => item.style.display = '')

      btn.innerText = 'Скрыть'
      btn.addEventListener('click', hide, { once: true })
    }

    function hide() {
      listItems.forEach((item, i) => {
        if (i < LIMIT) return

        item.style.display = 'none'
      })

      btn.innerText = 'Показать ещё'
      btn.addEventListener('click', expand, { once: true })
    }

    hide()

    btn.addEventListener('click', expand, { once: true })
  })
}()