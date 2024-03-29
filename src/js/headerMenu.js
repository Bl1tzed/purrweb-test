import { bodyOverflowY, htmlOverflowY } from "./utilities.js";

const headerMenuButton = document.querySelector(".header__mobileMenu");
const mobileMenu = document.querySelector(".mobileMenu");
const mobileMenuCloseButton = document.querySelector(
  ".mobileMenu__closeButton"
);

headerMenuButton.addEventListener("click", () => {
  mobileMenu.setAttribute("data-open", "true");
  bodyOverflowY.setAttribute("hideOverflowY", "true");
  htmlOverflowY.setAttribute("hideOverflowY", "true");
});

mobileMenuCloseButton.addEventListener("click", () => {
  mobileMenu.setAttribute("data-open", "false");
  bodyOverflowY.setAttribute("hideOverflowY", "false");
  htmlOverflowY.setAttribute("hideOverflowY", "false");
});
