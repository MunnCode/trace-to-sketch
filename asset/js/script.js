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
const numWidth = document.getElementById("numWidth");
const webCamElement = document.getElementById("webCam");
const webcam = new Webcam(webCamElement, "enviroment");

traceBtn.addEventListener("click", function () {
  menu.style.display = "none";
  webcam.start();
  imgToTrace.innerHTML = imagePreview.innerHTML;
  traceWebCam.style.display = "block";
  widthImgToTrace.value = imgToTrace.children[0].width;
  numWidth.textContent = widthImgToTrace.value;
});

closeBtn.addEventListener("click", function () {
  webcam.stop();
  traceWebCam.style.display = "none";
  imgToTrace.innerHTML = "";
  menu.style.display = "block";
});

// setting image to trace
const editBtn = document.getElementById("editBtn");
const setImageElement = document.getElementById("setImage");
const opacityRange = document.getElementById("opacityRange");
const numOpacity = document.getElementById("numOpacity");

opacityRange.addEventListener("change", function () {
  imgToTrace.children[0].style.opacity = parseInt(opacityRange.value) / 100;
  numOpacity.textContent = opacityRange.value;
});

widthImgToTrace.addEventListener("change", function () {
  imgToTrace.children[0].style.width = widthImgToTrace.value + "px";
  numWidth.textContent = widthImgToTrace.value;
});

editBtn.addEventListener("click", function () {
  setImageElement.classList.toggle("d-none");
});

// flip camera
document.getElementById("flipCamera").addEventListener("click", function () {
  webcam.flip();
  webcam._webcamElement.classList.toggle("flip");
});
