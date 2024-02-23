let image = document.querySelectorAll(".image");

let len = 0;
let slidelen = image.length;

function imageslider(len) {
  image.forEach((slider, index) => {
    if (index === len) {
      slider.style.display = "block";
    } else {
      slider.style.display = "none";
    }
  });
}

function next() {
  len = len < slidelen - 1 ? len + 1 : 0;
  imageslider(len);
}
setInterval(next, 1000);
imageslider(len);
