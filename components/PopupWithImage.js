import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(PopupSelector) {
    super(PopupSelector);
  }

  open(card) {
    this._popupElement.querySelector(".clickimg__img").src = card.link;
  }
}
