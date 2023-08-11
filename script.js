const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

var MainImg = document.getElementById("MainImg");
var smalling = document.getElementsByClassName("small-img");

for (var i = 0; i < smalling.length; i++) {
  smalling[i].addEventListener("click", function() {
    MainImg.src = this.src;
  });
}
