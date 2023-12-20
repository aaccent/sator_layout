const fileUploader = document.getElementById("file-uploader");

fileUploader.addEventListener("change", (event) => {
  const files = event.target.files;

  const feedback = document.getElementById("feedback");
  const symbolPlus = document.querySelector(".symbol-plus");
  const symbolDelete = document.querySelector(".ss");
  const msg = `${files[0].name}`;
  feedback.innerHTML = msg;
  symbolPlus.innerHTML = "";
  symbolDelete.innerHTML = `&nbsp x`;
});
