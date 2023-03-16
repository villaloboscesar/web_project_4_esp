import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(callbackSubmit, popupSelector) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
  }

  _getInputValues() {
    const formulario = this._popupElement.querySelector("form");
    const values = {};
    formulario.elements.forEach((item) => {
      if (item.name) {
        values[item.name] = item.value;
      }
    });
    return values;
  }

  setEventsListeners() {
    super.setEventsListeners();
    const formulario = this._popupElement.querySelector("form");
    formulario.addEventListener("submit", this._callbackSubmit);
  }

  close() {
    super.close();
    const formulario = this._popupElement.querySelector("form");
    formulario.reset();
  }
}
