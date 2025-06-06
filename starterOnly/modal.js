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
    validateMinTwo(e);
    validateEmail(e);

  });
// first and last's validation, 2 chars min
  const validateMinTwo = (e) => {
     const inputMinTwo = document.querySelectorAll(".min-two")
     inputMinTwo.forEach(input => {
      if (input.value.length < 2) {
        e.preventDefault();
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
      e.preventDefault();
      email.parentElement.setAttribute("data-error-visible", "true")
      console.log("enter here")
    } else {
      email.parentElement.setAttribute("data-error-visible", "false");
    }
  }
