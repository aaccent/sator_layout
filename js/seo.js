const seobtn = document.querySelector(".seo__button");
const openBlock = document.querySelector(".open-block");
const seoSvg = document.querySelector(".seo-svg");

function toggleBlock() {
  openBlock.classList.toggle("showBlock");
  seoSvg.classList.toggle("rotate_show");
}

seobtn.addEventListener("click", toggleBlock);
