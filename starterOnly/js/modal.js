// launch modal form
export function launchModal(modalbg) {
  modalbg.style.display = "block";
  // advert the body that the modal is open usefull for the header on small screens when the modal is open
  document.body.classList.add("modal-open");
}

// Reusable function to close modal
export function closeModal(triggerBtn, modalContent, modalbg, form) {

    // listen for a change on each of the btn
  triggerBtn.addEventListener("click", () => {
    // add the class in charge of the Close anim
    modalContent.classList.add("content--close");
    resetForm(form)
    // waits for the anim ends
    modalContent.addEventListener("animationend", () => {
      modalbg.style.display = "none";

      // clean anim
      modalContent.classList.remove("content--close");
      document.body.classList.remove("modal-open");

    }, { once: true }); // clean e-listener to avoid side effect if re-open
  });
}

// reset the form inputs and the data error message
function resetForm(form) {
  form.reset();
  const errorFields = form.querySelectorAll("[data-error-visible='true']");
  errorFields.forEach(field => {
    field.setAttribute("data-error-visible", "false");
  });

}
