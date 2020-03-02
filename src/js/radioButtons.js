export const setupRadioButtons = (radioButtonsArray, embla) => {
  radioButtonsArray.forEach(radioButton => {
    radioButton.addEventListener("change", event => {
      const { name, value } = event.currentTarget;
      embla.changeOptions({ [name]: value === "true" });
    });
  });
};
