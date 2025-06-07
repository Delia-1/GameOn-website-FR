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
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


const modalContent = document.querySelector(".content")
const modalCloseBtn = document.querySelector(".close")

// ANIMATIONS
// launch modal event
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
    // Peut etre aussi vider le form?

  }, { once: true }); // clean e-listener to avoid side effect if re-open
});

// Main validation function
  const form = document.querySelector(".form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    validateMinTwo(e);
    validateEmail(e);
    validateQuantityInsert()

  });
// first and last's validation, 2 chars min
  const validateMinTwo = (e) => {
     const inputMinTwo = document.querySelectorAll(".min-two")
     inputMinTwo.forEach(input => {
      if (input.value.length < 2) {
        // e.preventDefault();
        input.parentElement.setAttribute("data-error-visible", "true");
      } else {
        input.parentElement.setAttribute("data-error-visible", "false");
      }
    })
  }

  // email validation based on regex
  const validateEmail =(e) => {
    const email = document.getElementById("email");
    const mailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
    if (!mailRegex.test(email.value)) {
      // e.preventDefault();
      email.parentElement.setAttribute("data-error-visible", "true")
    } else {
      email.parentElement.setAttribute("data-error-visible", "false");
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
    } else {
      quantityString.parentElement.setAttribute("data-error-visible", "false")
    }
  }



  // Es ce que je peux enlever des fonctions le prevent defaut et e mettre sur la principale?
//   --> semble oui, a voir apres la completion
