import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { formProfile, formCard } from "./Utils.js";

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

const formConfig = {
  sectionProfile: ".popup_opened",
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error-active",
  buttonSubmit: ".popup__button",
};

const addElements = document.querySelector(".elements");
initialCards.forEach((item) => {
  // Crea una instancia de tarjeta
  const card = new Card(item.name, item.link);
  // Rellena la tarjeta y devuélvela
  const cardElement = card.generateCard();

  // Agrégala al DOM
  addElements.append(cardElement);
});

const formValidatorProfile = new FormValidator(formConfig, formProfile);

const formValidatorCard = new FormValidator(formConfig, formCard);

formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();
