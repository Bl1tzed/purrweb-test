const headerMenuButton = document.querySelector(".header__mobileMenu");
const mobileMenu = document.querySelector(".mobileMenu");
const mobileMenuCloseButton = document.querySelector(
  ".mobileMenu__closeButton"
);
const bodyOverflowY = document.querySelector("body");

headerMenuButton.addEventListener("click", () => {
  mobileMenu.setAttribute("open", "true");
  bodyOverflowY.setAttribute("hideOverflowY", "true");
});

mobileMenuCloseButton.addEventListener("click", () => {
  mobileMenu.setAttribute("open", "false");
  bodyOverflowY.setAttribute("hideOverflowY", "false");
});
