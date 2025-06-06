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

  }, { once: true }); // clean e-listener to avoid side effect if re-open
});
