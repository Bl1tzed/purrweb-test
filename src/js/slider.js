const slides = document.querySelectorAll("[slide]");
const next = document.querySelector("[next]");
const prev = document.querySelector("[prev]");
const container = document.querySelector(".container");
const dotsContainer = document.querySelector(".container__dots");

let counter = 0;
let autoSlideInterval = null;

function initIndicators() {
  for (let i = 0; i < slides.length; i++) {
    let element = document.createElement("div");
    element.classList.add("dot");
    element.setAttribute("attr", `${i}`);

    i === 0 && element.setAttribute("active", null);

    element.addEventListener("click", () => {
      let imageId = i;
      if (imageId > counter) {
        slides[counter].style.animation =
          "slideNextImage 0.45s ease-in-out forwards";
        counter = imageId;
        slides[counter].style.animation =
          "slideNextCurrentImage 0.45s ease-in-out forwards";
      } else if (imageId < counter) {
        slides[counter].style.animation =
          "slideNextImage 0.45s ease-in-out forwards";
        counter = imageId;
        slides[counter].style.animation =
          "slideNextCurrentImage 0.45s ease-in-out forwards";
      } else {
        return;
      }
      setActiveIndicator();
    });
    dotsContainer.appendChild(element);
  }
}

initIndicators();
const dots = document.querySelectorAll(".dot");

function throttle(callee, timeout) {
  let timer = null;
  return function perform(...args) {
    if (timer) return;
    callee(...args);
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
    }, timeout);
  };
}

next.addEventListener("click", throttle(slideNext, 450));

function slideNext() {
  slides[counter].style.animation = "slideNextImage 0.45s ease-in-out forwards";
  if (counter == slides.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slides[counter].style.animation =
    "slideNextCurrentImage 0.45s ease-in-out forwards";
  setActiveIndicator();
}

prev.addEventListener("click", throttle(slidePrev, 450));

function slidePrev() {
  slides[counter].style.animation = "slidePrevImage 0.45s ease-in-out forwards";
  if (counter == 0) {
    counter = slides.length - 1;
  } else {
    counter--;
  }
  slides[counter].style.animation =
    "slidePrevCurrentImage 0.45s ease-in-out forwards";
  setActiveIndicator();
}

function autoSlide() {
  autoSlideInterval = setInterval(slideNext, 1500);
}

container.addEventListener("mouseover", () => {
  clearInterval(autoSlideInterval);
});

container.addEventListener("mouseout", autoSlide);

function setActiveIndicator() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].removeAttribute("active");
  }
  dots[counter].setAttribute("active", null);
}

autoSlide();
