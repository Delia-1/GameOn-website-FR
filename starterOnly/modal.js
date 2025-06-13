function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
// selectorAll because 2 buttons that display in base of the media query
const modalBtn = document.querySelectorAll(".modal-btn");


const modalContent = document.querySelector(".content")
const modalCloseBtn = document.querySelector(".close")

// ANIMATIONS
// button opens modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal form
modalCloseBtn.addEventListener("click", () => {
  // add the class in charge og the Close anim
  modalContent.classList.add("content--close");

  // waits for the anim ends
  modalContent.addEventListener("animationend", () => {
    modalbg.style.display = "none";

    // clean anim
    modalContent.classList.remove("content--close");
    // Peut etre aussi vider le form? non pas dans les spec en theorie

  }, { once: true }); // clean e-listener to avoid side effect if re-open
});

// FORM VALIDATION

// first and last's validation, 2 chars min
  const validateMinTwo = () => {
     const inputMinTwo = document.querySelectorAll(".min-two")
     let isValid = true;
     inputMinTwo.forEach(input => {
      if (input.value.length < 2) {
        input.parentElement.setAttribute("data-error-visible", "true");
        isValid = false
      } else {
        input.parentElement.setAttribute("data-error-visible", "false");
      }
    })
    return isValid
  }

  // email validation based on regex
  const validateEmail =(e) => {
    const email = document.getElementById("email");
    const mailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
    if (!mailRegex.test(email.value)) {
      email.parentElement.setAttribute("data-error-visible", "true")
      return false
    } else {
      email.parentElement.setAttribute("data-error-visible", "false");
      return true;
    }
  }

  //validation for the quantity, based on regex
  const validateQuantityInsert = () => {
    const quantityString = document.getElementById("quantity");
    const quantityVal = quantityString.value;
    const quantity = Number(quantityVal);
    const numberRegex = new RegExp("^\\d+$");
  //check if the value is a number (edgeCase for e, -, -4554) and if quantity < 99
    if(!numberRegex.test(quantityVal) || (quantity > 99) ) {
      quantityString.parentElement.setAttribute("data-error-visible", "true");
      return false
    } else {
      quantityString.parentElement.setAttribute("data-error-visible", "false")
      return true;
    }
  };

  // check if there is a radio checked
  const validateRadioSelected = () => {
    const radioGroup = document.querySelectorAll('input[name="location"]')
    const parentRadioGroup = document.querySelector('.formData--checkbox')
    let count = 0;
    // maping over the radio buttons, to check if one is selected
    radioGroup.forEach(btn=> {
      if (btn.checked) count +=1;
    })
    if (count !== 1) {
      parentRadioGroup.setAttribute("data-error-visible", "true")
      return false
    } else {
      parentRadioGroup.setAttribute("data-error-visible", "false")
      return true;
    }
  }

      // check is the value of birthdate is empty
  const validateBirthdate = () => {
    const birthdate = document.getElementById("birthdate");
    if (birthdate.value === "") {
      birthdate.parentElement.setAttribute("data-error-visible", "true");
      return false
    } else {
      birthdate.parentElement.setAttribute("data-error-visible", "false");
      return true;
    }
  }

  // Check is the terms are checked
  const validateCondition = () => {
    const boxToCheck = document.getElementById("checkbox1");
    if (!boxToCheck.checked) {
      boxToCheck.parentElement.setAttribute("data-error-visible", "true")
      return false
    } else {
      boxToCheck.parentElement.setAttribute("data-error-visible", "false")
      return true;
    }
  }

  // Main validation function
  const form = document.querySelector(".form");
  const hiddenContaier = document.querySelector(".hidden-container");
  const validationMessage = document.querySelector(".validation-message");
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

    if (!isValid) {
      e.preventDefault();
    } else {
      const btnSubmit = document.querySelector(".btn-submit");
      // faire une fonction qui gere le declenchement du message
      // ++changer la value du bouton
      hiddenContaier.style.display = "none";
      validationMessage.style.display = "flex"
      btnSubmit.value = "fermer";

    }

  });

  // faire une fonction aussi quand le bouton a une value de fermet avec un addEventListener pour fermer la modale (meme comportempent qu'avec la croix)
