const bodyOverflowY = document.querySelector("body");
const htmlOverflowY = document.querySelector("html");

function closeModal(modal) {
  modal.style.visibility = "hidden";
  bodyOverflowY.setAttribute("hideOverflowY", "false");
  htmlOverflowY.setAttribute("hideOverflowY", "false");
}

export { closeModal, bodyOverflowY, htmlOverflowY };
