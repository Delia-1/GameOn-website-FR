  export function displayMessage(hiddenContaier, validationMessage, btnSubmit) {
    // hide the form
    hiddenContaier.style.display = "none";
    // display the validation message
    validationMessage.style.display = "flex"
    // change the btn text
    btnSubmit.value = "fermer";
  }
