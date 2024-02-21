void function() {
  const fileUploader = document.getElementById("file-uploader");
  const symbolDelete = document.querySelector(".delete-symbol");
  const feedback = document.getElementById('feedback')
  const symbolPlus = document.querySelector(".symbol-plus");

  fileUploader.addEventListener("change", (event) => {
    const files = event.target.files;
    feedback.innerHTML = `<div class="clear" style="margin-top: 3px">${files[0].name}</div>`;
    symbolPlus.style.display = "none";
    symbolDelete.innerHTML = `<button type="button" class="delete-btn"><svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4795 6.51983C13.7724 6.81273 13.7724 7.2876 13.4795 7.58049L3.58005 17.48C3.28716 17.7729 2.81229 17.7729 2.51939 17.48C2.2265 17.1871 2.2265 16.7122 2.51939 16.4193L12.4189 6.51983C12.7118 6.22694 13.1867 6.22694 13.4795 6.51983Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.52045 6.51983C2.81334 6.22694 3.28822 6.22694 3.58111 6.51983L13.4806 16.4193C13.7735 16.7122 13.7735 17.1871 13.4806 17.48C13.1877 17.7729 12.7128 17.7729 12.4199 17.48L2.52045 7.58049C2.22756 7.2876 2.22756 6.81273 2.52045 6.51983Z" fill="white"/>
  </svg></button>
`;
    //fileUploader.disabled = true;
  });

  symbolDelete.addEventListener("click", () => {
    feedback.innerHTML = 'Прикрепить файл'
    symbolPlus.style.display = "block";
    symbolDelete.innerHTML = ''
    fileUploader.value = ''
  });
}()
