
var arrowL = document.querySelector(".section2-slider-arrows-left");
var arrowR = document.querySelector(".section2-slider-arrows-right");
var picwidth = 1000; 
var piclength = 0;
var canvas = document.querySelector(".section2-slider-canvas");
var picsCount = 5; 
var maxpiclength = picwidth * (picsCount - 1); 
var arrowsTransitionDuration = 300;

arrowL.style.transition = `${arrowsTransitionDuration}ms ease`;
arrowR.style.transition = `${arrowsTransitionDuration}ms ease`;

arrowL.addEventListener("click", previous);
arrowR.addEventListener("click", next);

canvas.style.transform = `translateX(0)`;

function next() {
  if (piclength > -maxpiclength) {
    piclength = piclength - picwidth;
    canvas.style.transform = `translateX(calc(${piclength}px * var(--desktopProportions)))`;
    updateArrows();
  }
}

function previous() {
  if (piclength < 0) {
    piclength = piclength + picwidth;
    canvas.style.transform = `translateX(calc(${piclength}px * var(--desktopProportions)))`;
    updateArrows();
  }
}

var updateArrows = function () {
  if (piclength == 0) {
    arrowL.style.opacity = 0;
    setTimeout(() => {
      arrowL.style.display = "none";
    }, 800);
    arrowR.style.display = "block";
    setTimeout(() => {
      arrowR.style.opacity = 1;
    }, 100);
  } else if (piclength == -maxpiclength) {
    arrowL.style.display = "block";
    setTimeout(() => {
      arrowL.style.opacity = 1;
    }, 100);
    arrowR.style.opacity = 0;
    setTimeout(() => {
      arrowR.style.display = "none";
    }, 800);
  } else {
    arrowL.style.display = "block";
    setTimeout(() => {
      arrowL.style.opacity = 1;
    }, 100);
    arrowR.style.display = "block";
    setTimeout(() => {
      arrowR.style.opacity = 1;
    }, 100);
  }
};

document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
});
