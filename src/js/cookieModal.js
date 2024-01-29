import { closeModal } from "./utilities.js";

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

if (document.cookie == "") {
  setTimeout(() => {
    cookiesModal.style.visibility = "visible";
  }, 1000);
}

cookiesModalCloseButton.addEventListener("click", () => {
  document.cookie = "status=declined";
  closeModal(cookiesModal);
});
cookeisModalAcceptButton.addEventListener("click", () => {
  document.cookie = "status=accept";
  closeModal(cookiesModal);
});
cookeisModalDeclineButton.addEventListener("click", () => {
  document.cookie = "status=declined";
  closeModal(cookiesModal);
});
