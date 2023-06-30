// show Image Preview
const menu = document.getElementById("menu");
const chooseImageBtn = document.getElementById("chooseImageBtn");
const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imgPreview");

chooseImageBtn.addEventListener("click", function () {
  imageInput.click();
});

imageInput.addEventListener("change", function (event) {
  const file = event.target.files[0];

  const reader = new FileReader();

  reader.addEventListener("load", function () {
    const img = document.createElement("img");
    img.src = reader.result;
    imagePreview.innerHTML = "";
    imagePreview.appendChild(img);
    imagePreview.style.display = "block";
    traceBtn.style.display = "inline-block";
  });

  if (file) {
    reader.readAsDataURL(file);
  }
});

// show Trace WebCam
const traceWebCam = document.getElementById("traceWebCam");
const traceBtn = document.getElementById("traceBtn");
const closeBtn = document.getElementById("closeBtn");
const imgToTrace = document.getElementById("imgToTrace");
const widthImgToTrace = document.getElementById("widthImgToTrace");
const heightImgToTrace = document.getElementById("heightImgToTrace");
const webCamElement = document.getElementById("webCam");
const webcam = new Webcam(webCamElement, "user");

traceBtn.addEventListener("click", function () {
  menu.style.display = "none";
  webcam.start();
  imgToTrace.innerHTML = imagePreview.innerHTML;
  traceWebCam.style.display = "block";
  widthImgToTrace.value = imgToTrace.children[0].width;
  heightImgToTrace.value = imgToTrace.children[0].height;
});

closeBtn.addEventListener("click", function () {
  webcam.stop();
  traceWebCam.style.display = "none";
  imgToTrace.innerHTML = "";
  menu.style.display = "block";
});

// setting image to trace
const resizeBtn = document.getElementById("resizeBtn");
const setImageElement = document.getElementById("setImage");
const opacityRange = document.getElementById("opacityRange");

opacityRange.addEventListener("change", function () {
  imgToTrace.children[0].style.opacity = parseInt(opacityRange.value) / 100;
});

widthImgToTrace.addEventListener("change", function () {
  imgToTrace.children[0].style.width = widthImgToTrace.value + "px";
});

heightImgToTrace.addEventListener("change", function () {
  imgToTrace.children[0].style.height = heightImgToTrace.value + "px";
});

resizeBtn.addEventListener("click", function () {
  setImageElement.classList.toggle("d-none");
});
