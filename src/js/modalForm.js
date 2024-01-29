import { closeModal, bodyOverflowY, htmlOverflowY } from "./utilities.js";

const buttons = document.querySelectorAll(".button");
const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal__form");
const modalBox = document.querySelector(".modal__box");
const modalCloseButton = document.querySelector(".modal__closeButton");

const reqInputs = document.querySelectorAll("[req]");
const errorMessages = document.querySelectorAll(".modal__inputError");
const globalErrorMessage = document.querySelector("[globalerror]");
const modalSubmitButton = document.querySelector("#modalSubmitButton");

const nameInput = document.querySelector("[name=name]");
const emailInput = document.querySelector("[name=email]");
const phoneNumberInput = document.querySelector("[name=phoneNumber]");
const companyInput = document.querySelector("[name=company]");
const urlInput = document.querySelector("[name=url]");

const successModal = document.querySelector(".successModal");

const successModalCloseButton = document.querySelector(
  ".successModal__closeButton"
);
const successModalButton = document.querySelector("#successModalButton");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    modal.style.visibility = "visible";
    bodyOverflowY.setAttribute("hideOverflowY", "true");
    htmlOverflowY.setAttribute("hideOverflowY", "true");
  });
}

modalCloseButton.addEventListener("click", () => closeModal(modal));
successModalCloseButton.addEventListener("click", () =>
  closeModal(successModal)
);
successModalButton.addEventListener("click", () => closeModal(successModal));

document.addEventListener("click", (e) => {
  if (
    !modalBox.contains(e.target) &&
    (e.target === modal || e.target === successModal)
  ) {
    e.target.style.visibility = "hidden";
    bodyOverflowY.setAttribute("hideOverflowY", "false");
    htmlOverflowY.setAttribute("hideOverflowY", "false");
  }
});

modalForm.addEventListener("change", () => {
  const emptyInputs = Array.from(reqInputs).filter(
    (input) => input.value === ""
  );
  if (emptyInputs.length === 0) {
    modalSubmitButton.removeAttribute("disabled");
  }
});

modalForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailVal = emailInput.value;
  const phoneVal = phoneNumberInput.value;
  const emptyInputs = Array.from(reqInputs).filter(
    (input) => input.value === ""
  );

  reqInputs.forEach((input) => {
    if (input.value === "") {
      input.setAttribute("data-error", "true");
      input.nextSibling.nextSibling.textContent = "The field is required";
    } else {
      input.removeAttribute("data-error");
    }
  });

  if (emptyInputs.length !== 0) {
    globalErrorMessage.setAttribute("data-error", "true");
    globalErrorMessage.textContent = "Please fill in all required fields";
    return false;
  }

  if (!validateEmail(emailVal)) {
    emailInput.setAttribute("data-error", "true");
    emailInput.nextSibling.nextSibling.textContent = "Invalid Email";
    globalErrorMessage.setAttribute("data-error", "true");
    globalErrorMessage.textContent = "Invalid data";
    return false;
  }

  if (!validatePhone(phoneVal)) {
    phoneNumberInput.setAttribute("data-error", "true");
    phoneNumberInput.nextSibling.nextSibling.textContent =
      "Invalid phone number";
    globalErrorMessage.setAttribute("data-error", "true");
    globalErrorMessage.textContent = "Invalid data";
    return false;
  } else {
    globalErrorMessage.removeAttribute("data-error");
  }
  modal.style.visibility = "hidden";
  successModal.style.visibility = "visible";
});

function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone));
}
