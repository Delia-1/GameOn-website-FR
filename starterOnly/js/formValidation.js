
// FORM VALIDATION

// first and last's validation, 2 chars min
  export const validateMinTwo = () => {
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
  export const validateEmail =(e) => {
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
  export const validateQuantityInsert = () => {
    const quantityInput = document.getElementById("quantity");
    const quantityVal = quantityInput.value;
    const quantity = Number(quantityVal);
    const numberRegex = new RegExp("^\\d+$");
  //check if the value is a number (edgeCase for e, -, -4554) and if quantity < 99
    if(!numberRegex.test(quantityVal) || (quantity > 99) ) {
      quantityInput.parentElement.setAttribute("data-error-visible", "true");
      return false
    } else {
      quantityInput.parentElement.setAttribute("data-error-visible", "false")
      return true;
    }
  };

  // check if there is a radio checked
  export const validateRadioSelected = () => {
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
  export const validateBirthdate = () => {
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
  export const validateCondition = () => {
    const boxToCheck = document.getElementById("checkbox1");
    if (!boxToCheck.checked) {
      boxToCheck.parentElement.setAttribute("data-error-visible", "true")
      return false
    } else {
      boxToCheck.parentElement.setAttribute("data-error-visible", "false")
      return true;
    }
  }



