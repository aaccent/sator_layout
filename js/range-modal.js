const filterModal = document.querySelector(".filter-modal");
const minValModal = document.querySelector(".min-val-modal");
const maxValModal = document.querySelector(".max-val-modal");
const inputMinModal = document.querySelector(".min-input-modal");
const inputMaxModal = document.querySelector(".max-input-modal");
const minTooltipModal = document.querySelector(".min-tooltip-modal");
const maxTooltipModal = document.querySelector(".max-tooltip-modal");
const minGapModal = 0;
const rangeModal = document.querySelector(".slider-track-modal");
const minValueModal = parseInt(minValModal.min);
const maxModalvalue = parseInt(maxValModal.max);

if (filterModal.style.display != "none") {
  rangeMinModal();
  rangeMaxModal();
}

function rangeMinModal() {
  let gaps = parseInt(maxValModal.value) - parseInt(minValModal.value);
  if (gaps <= minGapModal) {
    minValModal.value = parseInt(maxValModal.value) - minGapModal;
  }
  minTooltipModal.innerHTML = "" + minValModal.value;
  inputMinModal.value = minValModal.value;
  sliderColorModal();
}

function rangeMaxModal() {
  let gaps = parseInt(maxValModal.value) - parseInt(minValModal.value);
  if (gaps <= minGapModal) {
    maxValModal.value = parseInt(minValModal.value) + minGapModal;
  }
  maxTooltipModal.innerHTML = maxValModal.value;
  inputMaxModal.value = maxValModal.value;
  sliderColorModal();
}

function sliderColorModal() {
  rangeModal.style.left = (minValModal.value / maxModalvalue) * 100 + "%";
  minTooltipModal.style.left = (minValModal.value / maxModalvalue) * 100 + "%";
  rangeModal.style.right =
    100 - (maxValModal.value / maxModalvalue) * 100 + "%";
  maxTooltipModal.style.right =
    100 - (maxValModal.value / maxModalvalue) * 100 + "%";
}

function setMinInputModal() {
  let minPriceModal = parseInt(inputMinModal.value);
  if (minPriceModal < minValueModal) {
    inputMinModal.value = minValueModal;
  }
  minValModal.value = inputMinModal.value;
  rangeMinModal();
}

function setMaxInputModal() {
  let maxPriceModal = parseInt(inputMaxModal.value);
  if (maxPriceModal > maxModalvalue) {
    inputMaxModal.value = maxModalvalue;
  }
  maxValModal.value = inputMaxModal.value;
  rangeMaxModal();
}
