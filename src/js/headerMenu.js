const headerMenuButton = document.querySelector(".header__mobileMenu");
const mobileMenu = document.querySelector(".mobileMenu");
const mobileMenuCloseButton = document.querySelector(
  ".mobileMenu__closeButton"
);
const bodyOverflowY = document.querySelector("body");
const htmlOverflowY = document.querySelector("html");

headerMenuButton.addEventListener("click", () => {
  console.log(bodyOverflowY);
  mobileMenu.setAttribute("open", "true");
  bodyOverflowY.setAttribute("hideOverflowY", "true");
  htmlOverflowY.setAttribute("hideOverflowY", "true");
});

mobileMenuCloseButton.addEventListener("click", () => {
  mobileMenu.setAttribute("open", "false");
  bodyOverflowY.setAttribute("hideOverflowY", "false");
  htmlOverflowY.setAttribute("hideOverflowY", "false");
});
