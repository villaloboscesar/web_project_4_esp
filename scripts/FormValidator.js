class FormValidator {
  constructor(objectSetting, formElement) {
    this._inputElement = objectSetting.inputSelector;
    this._buttonSubmitInactive = objectSetting.inactiveButtonClass;
    this._inputErrorClass = objectSetting.inputErrorClass;
    this._errorMessage = objectSetting.errorClass;
    this._buttonSubmit = objectSetting.buttonSubmit;
    this._form = formElement;
  }

  _showInputError(formElement, inputElement, errorMesagge) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMesagge;
    errorElement.classList.add(this._errorMessage);
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorMessage);
    errorElement.textContent = "";
  }

  _isValid(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _toggleButtonState(inputList, buttonElement) {
    if (!this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._buttonSubmitInactive);
    } else {
      buttonElement.classList.remove(this._buttonSubmitInactive);
    }
  }

  _setEventListeners() {
    const inputList = Array.from(
      this._form.querySelectorAll(this._inputElement)
    );
    const buttonElement = this._form.querySelector(this._buttonSubmit);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(this._form, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  _hasInvalidInput(inputList) {
    //variable bandera
    let hasInvalid = true;
    inputList.forEach((inputElement) => {
      if (!inputElement.validity.valid) {
        hasInvalid = false;
      }
    });
    return hasInvalid;
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
export default FormValidator;
