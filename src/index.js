import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../scripts/FormValidator.js";
import {
  formProfile,
  formCard,
  form,
  openFormNewItem,
  imagePopup,
} from "../utils/constants.js";
import "./styles/index.css";
import {
  handleProfileFormSubmit,
  handleNewcardFormSubmit,
} from "../utils/utils.js";
import { container } from "webpack";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

export const formConfig = {
  sectionProfile: ".popup_opened",
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error-active",
  buttonSubmit: ".popup__button",
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      // Crea una instancia de tarjeta
      const card = new Card(cardItem.name, cardItem.link);
      // Rellena la tarjeta y devuélvela
      const cardElement = card.generateCard();

      // Agrégala al DOM

      cardList.addItem(cardElement);
    },
  },
  ".elements"
);
cardList.renderer();

const popupWithFormProfile = new PopupWithForm(handleProfileFormSubmit, form);
const popupWithFormAddCard = new PopupWithForm(
  handleNewcardFormSubmit,
  openFormNewItem
);

const popupWithImage = new PopupWithImage(imagePopup);

const formValidatorProfile = new FormValidator(formConfig, formProfile);
const formValidatorCard = new FormValidator(formConfig, formCard);

formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();
