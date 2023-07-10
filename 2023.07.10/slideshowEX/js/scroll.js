// var header = document.querySelector("header");
// var page = document.querySelector(".page-start");
// var pageOffsetTop = page.offsettop;

// window.addEventListener("resize", function () {
//     pageOffsetTop = page.offsettop;
// });
// window.addEventListener("scroll", function () {
//     var scrolled = window.pageYOffset >= pageOffsetTop;
//     if (scrolled) {
//         header.style.backgroundColor = "red";
//     } else {
//         header.style.backgroundColor = "transparent";
//     }
// });

var header = document.querySelector("header");
var page = document.querySelector(".page-start");
var pageOffsetTop = page.offsetTop;

window.addEventListener("resize", function () {
  pageOffsetTop = page.offsetTop;
});
window.addEventListener("scroll", function () {
  var scrolled = window.pageYOffset >= pageOffsetTop;
  if (scrolled) {
    header.style.backgroundColor = "red";
  } else {
    header.style.backgroundColor = "transparent";
  }
});