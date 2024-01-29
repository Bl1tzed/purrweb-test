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

cookiesModalCloseButton.addEventListener("click", () =>
  closeModal(cookiesModal)
);
cookeisModalAcceptButton.addEventListener("click", () =>
  closeModal(cookiesModal)
);
cookeisModalDeclineButton.addEventListener("click", () =>
  closeModal(cookiesModal)
);
