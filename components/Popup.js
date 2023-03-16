import Card from "./Card.js";
export default class Popup {
  constructor(popupSelector) {
    this._popupElement = popupSelector;
    this.__handleEscClose = this._handleEscClose.bind(this);
    console.log(this._handleEscClose);
    this._closeButton = document.querySelector(".popup__close");
    this._closePopup = this._CloseButton.bind(this);
  }
  Open() {
    this._popupElement.classList.add(".popup_opened");
    this.setEventsListeners();
  }
  close() {
    this._popupElement.classList.remove("popup_opened");
    this.removeEventsListeners();
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.closePopup();
    }
  }
  setEventsListeners() {
    this._closeButton.addEventListener("click", this.closePopup);
    document.addEventListener("keydown", this.__handleEscClose);
  }

  removeEventsListeners() {
    this._closeButton.removeEventListener("click", this.closePopup);
    document.removeEventListener("keydown", this.__handleEscClose);
  }
}
