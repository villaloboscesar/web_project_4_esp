import { clickImgTitle } from "../utils/constants.js";
export default class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }
  _getTemplate() {
    //  toma el marcado de HTML y copia el elemento

    const cardElement = document
      .querySelector("#template__cards")
      .content.querySelector(".elements__container")
      .cloneNode(true);

    // devuelve el elemento DOM de la tarjeta
    return cardElement;
  }

  generateCard() {
    // Almacenar el marcado en el campo privado _element
    // para que otros elementos puedan acceder a él
    this._element = this._getTemplate();
    this._setEventListeners();

    // Añadir datos

    this._element.querySelector(".elements__title").textContent = this._name;
    this._element.querySelector(".elements__pic").src = this._link;

    // Devolver el elemento
    return this._element;
  }

  _setEventListeners() {
    // Evento Boton like
    this._element
      .querySelector(".elements__like")
      .addEventListener("click", () => {
        this._handleLikeClick();
      });
    // Evento Borrar tarjeta
    this._element
      .querySelector(".profile__trash")
      .addEventListener("click", () => {
        this._handleClickTrash();
      });
    //Evento mostrar imagen card en popup
    this._element
      .querySelector(".elements__pic")
      .addEventListener("click", (event) => {
        const srcImage = (document.querySelector(".clickimg__img").src =
          event.target.src);
        clickImgTitle.textContent = event.target
          .closest("div")
          .querySelector(".elements__title").textContent;
        this._handleClickImgPopup();
      });
  }

  _handleLikeClick() {
    // Boton Like
    if (
      !this._element
        .querySelector(".elements__like")
        .classList.contains("elements__like_active")
    ) {
      this._element.querySelector(".elements__like").src =
        "../images/corazon_negro.svg";
    } else {
      this._element.querySelector(".elements__like").src =
        "../images/corazon.svg";
    }
    this._element
      .querySelector(".elements__like")
      .classList.toggle("elements__like_active");
  }
  // Borrar Tarjetas
  _handleClickTrash() {
    this._element
      .querySelector(".profile__trash")
      .closest(".elements__container")
      .remove();
  }
  // mostrar imagen card en popup
  _handleClickImgPopup() {
    document.querySelector(".clickimg").classList.add("clickimg_opened");
  }
  _handleImgClosePopup() {
    this._element
      .querySelector(".clickimg")
      .classList.remove("clickimg_opened");
  }
}
