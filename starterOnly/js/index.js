
import { launchModal, closeModal } from "./modal.js";
import { editNav } from "./nav.js";
import { validateMinTwo, validateEmail, validateQuantityInsert, validateRadioSelected, validateBirthdate,validateCondition } from "./formValidation.js";
import { displayMessage } from "./displayMessage.js";


// DOM Elements
const iconBurgerMenu = document.querySelector(".icon");
const modalbg = document.querySelector(".bground");
// selectorAll because 2 buttons that display in base of the media query
const modalBtn = document.querySelectorAll(".signup-btn");
const modalContent = document.querySelector(".content")
const modalCloseBtn = document.querySelector(".close")
const btnSubmit = document.querySelector(".btn-submit");
const form = document.querySelector(".form");
const hiddenContaier = document.querySelector(".hidden-container");
const validationMessage = document.querySelector(".validation-message");

// Listen for the click on the burger menu
iconBurgerMenu.addEventListener("click", editNav);

// button opens modal (usefull for launchModal() and closeModal() )
modalBtn.forEach((btn) => btn.addEventListener("click", () => launchModal(modalbg)));

// close modal form
closeModal(modalCloseBtn, modalContent, modalbg, form)


  // Main validation function
form.addEventListener("submit", e => {
    // bloc the submitting
  e.preventDefault();

    // define all field validation functions
    const minTwo = validateMinTwo();
    const email = validateEmail();
    const birthdate = validateBirthdate();
    const quantityInsert = validateQuantityInsert();
    const radioSelected = validateRadioSelected();
    const condition = validateCondition();

    // all the expressions must return true
    const isValid = minTwo && email && birthdate && quantityInsert && radioSelected && condition;
    if (!isValid) return;
    displayMessage(hiddenContaier, validationMessage, btnSubmit)
    closeModal(btnSubmit,  modalContent, modalbg, form )

  });


  // methode to get rid of the "GameOn" text in the quantity label
const quantityLabel = document.querySelector('label[for="quantity"]')
 window.innerWidth < 470 ? quantityLabel.textContent = "À combien de tournois avez-vous déjà participé ?" : quantityLabel.textContent ;
