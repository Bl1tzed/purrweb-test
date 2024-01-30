import { closeModal, bodyOverflowY, htmlOverflowY } from "./utilities.js";

const cookiesModal = document.querySelector(".cookiesModal");
const cookiesModalCloseButton = document.querySelector(
  ".cookiesModal__closeButton"
);
const cookeisModalAcceptButton = document.querySelector(
  ".cookeisModal__acceptButton"
);
const cookeisModalDeclineButton = document.querySelector(
  ".cookeisModal__declineButton"
);

if (document.cookie === "") {
  setTimeout(() => {
    cookiesModal.style.visibility = "visible";
    bodyOverflowY.setAttribute("hideOverflowY", "false");
    htmlOverflowY.setAttribute("hideOverflowY", "false");
  }, 1000);
}

cookiesModalCloseButton.addEventListener("click", () => {
  document.cookie = "status=declined";
  bodyOverflowY.setAttribute("hideOverflowY", "true");
  htmlOverflowY.setAttribute("hideOverflowY", "true");
  closeModal(cookiesModal);
});
cookeisModalAcceptButton.addEventListener("click", () => {
  document.cookie = "status=accepted";
  bodyOverflowY.setAttribute("hideOverflowY", "true");
  htmlOverflowY.setAttribute("hideOverflowY", "true");
  closeModal(cookiesModal);
});
cookeisModalDeclineButton.addEventListener("click", () => {
  document.cookie = "status=declined";
  bodyOverflowY.setAttribute("hideOverflowY", "true");
  htmlOverflowY.setAttribute("hideOverflowY", "true");
  closeModal(cookiesModal);
});
