// Seleccion de constantes en el DOM
const editProfile = document.querySelector(".profile__button-edit");
const openForm = document.querySelector(".popup_opened");
const closeForm = document.querySelector(".popup__close");
const captureName = document.querySelector(".profile__name");
const captureAbout = document.querySelector(".profile__about");
const setPopupName = document.querySelector(".popup__name");
const setPopupAbout = document.querySelector(".popup__about-me");
const openFormNewItem = document.querySelector(".popup_place");
const newPlace = document.querySelector(".profile__addbutton");
const form = document.querySelector(".popup");
const formAddNewCard = document.querySelector(".popup_place");
const closePlace = formAddNewCard.querySelector(".popup__close");
const cardTitle = document.querySelector(".elements__title");
const clickImgTitle = document.querySelector(".clickimg__title");
const imagePopup = document.querySelector(".clickimg");
const buttonClosePopup = document.querySelector(".clickimg__close");

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

function CreateCard(item) {
  //Seleccion del template con todo su contenido interno
  const templateContent = document.querySelector("#template__cards").content;
  //Clonado de template
  const cloneTemplate = templateContent
    .querySelector(".elements__container")
    .cloneNode(true);
  //Seleccion y agregado de url desde objeto initialcards
  const addSrc = cloneTemplate.querySelector(".elements__pic");
  addSrc.src = item.link;
  //Seleccion y agregado de titulo de la card desde objeto initialcards
  const addTitle = cloneTemplate.querySelector(".elements__title");
  addTitle.textContent = item.name;

  //Funcion Boton Like
  cloneTemplate
    .querySelector(".elements__like")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("elements__like_active");
    });

  //Funcion que borra cualquier card inicial
  cloneTemplate
    .querySelector(".profile__trash")
    .addEventListener("click", function (event) {
      event.target.closest(".elements__container").remove();
    });

  // //Funcion mostrar imagen card en popup
  cloneTemplate
    .querySelector(".elements__pic")
    .addEventListener("click", (event) => {
      const srcImage = document.querySelector(".clickimg__img");
      srcImage.src = event.target.src;
      imagePopup.classList.add("clickimg_opened");
      clickImgTitle.textContent = event.target
        .closest("div")
        .querySelector(".elements__title").textContent;
      document.addEventListener("keydown", ActivarEventoTeclado);
    });
  return cloneTemplate;
}

//Funcion que cierra ventana haciendo click en X
function ClosePopup() {
  openForm.setAttribute("style", "visibility: none; opacity: 0");
}
closeForm.addEventListener("click", ClosePopup);

function ActivarEventoTeclado(event) {
  if (event.key === "Escape") {
    //cerrar el modal
    ClosePopup();
    closeNewplace();
    ClosePopupImgButton();
    //quitar el evento
    document.removeEventListener("keydown", ActivarEventoTeclado);
  }
}

//Funcion que abre popup para editar perfil
function openPopup() {
  openForm.style.visibility = "visible";
  openForm.style.opacity = "1";
  openForm.style.display = "flex";
  document.addEventListener("keydown", ActivarEventoTeclado);
}
editProfile.addEventListener("click", openPopup);

//Captura valores ya ingresados en perfil
setPopupName.setAttribute("value", captureName.textContent);
setPopupAbout.setAttribute("value", captureAbout.textContent);

// Funcion que abre popup para formulario de nueva card
function openNewPlace() {
  openFormNewItem.setAttribute("style", "visibility: visible;opacity: 1;");
  document.addEventListener("keydown", ActivarEventoTeclado);
}
newPlace.addEventListener("click", openNewPlace);

// Funcion que cierra popup para formulario de nueva card
function closeNewplace() {
  openFormNewItem.setAttribute("style", "visibility: none; opacity: 0");
}
closePlace.addEventListener("click", closeNewplace);

//Funcion que cierra ventana Place haciendo click fuera de la ventana
function ClosePopupExternal(event) {
  const formAlQueLeDisteClick = event.target;
  const data_Target = formAlQueLeDisteClick.dataset.id;
  if (data_Target == "popupexternal") {
    formAlQueLeDisteClick.setAttribute("style", "visibility: none; opacity: 0");
  } else {
    if (data_Target == "popupimg")
      formAlQueLeDisteClick.classList.remove("clickimg_opened");
  }
}
const modales = [openFormNewItem, openForm, imagePopup];
modales.forEach(function (modal) {
  modal.addEventListener("click", ClosePopupExternal);
});

//Funcion que cierra ventana img popup

function ClosePopupImgButton() {
  imagePopup.classList.remove("clickimg_opened");
}
buttonClosePopup.addEventListener("click", ClosePopupImgButton);

//Funcion que captura datos de formulario perfil y los almacena luego de presionar boton guardar
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const setPopupName = document.querySelector(".popup__input").value;
  const setPopupAbout = document.querySelector(".popup__about-me").value;
  captureName.textContent = setPopupName;
  captureAbout.textContent = setPopupAbout;
  openForm.setAttribute("style", "display: none");
}
form.addEventListener("submit", handleProfileFormSubmit);

//For Each que itera sobre array (initialcards) clonando 6 templates desde #template__cards
//agrega los value de los objetos del array (name y link) y se los cada imagen y titulo de tarjeta
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

initialCards.forEach((item) => {
  //Seleccion de elemento donde se copiara el templeta clonado
  const addElements = document.querySelector(".elements");
  const cloneTemplate = CreateCard(item);
  addElements.append(cloneTemplate);
});

//Funcion agregar nueva tarjeta
function handleNewcardFormSubmit(evt) {
  evt.preventDefault();

  //Selecciono en el DOM cual elemento HTML destino a colocar el clone
  const addElements = document.querySelector(".elements");
  //Capturo el valor del titulo ingresado por el usuario en el formulario y lo guardo en el titulo de la nueva tarjeta
  const newTitleCard = document.querySelector(".popup__name-place").value;
  //Capturo el valor del URL ingresado por el usuario en el formulario y lo guardo en la nueva tarjeta
  const newURLImage = document.querySelector(".popup__url-place").value;
  //Agrego el valor capturado y lo coloco como SRC a la nueva imagen de la card
  const cloneNewCard = CreateCard({ link: newURLImage, name: newTitleCard });
  //Agrego la nueva tarjeta al DOM
  addElements.prepend(cloneNewCard);
  //Cierro la ventana
  openFormNewItem.setAttribute("style", "visibility: none; opacity: 0");
}
formAddNewCard.addEventListener("submit", handleNewcardFormSubmit);

const isValid = (config, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(
      config,
      formElement,
      inputElement,
      inputElement.validationMessage
    );
  } else {
    hideInputError(config, formElement, inputElement);
  }
};

//isValid(?)

const showInputError = (config, formElement, inputElement, errorMesagge) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMesagge;
  errorElement.classList.add(config.errorClass);
};

//showInputError(?)

const hideInputError = (config, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
};

const hasInvalidInput = (inputList) => {
  //variable bandera
  let hasInvalid = true;
  inputList.forEach((inputElement) => {
    if (!inputElement.validity.valid) {
      hasInvalid = false;
    }
  });
  return hasInvalid;
};

const toggleButtonState = (config, inputList, buttonElement) => {
  if (!hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
};

const setEventListeners = (config, formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.buttonSubmit);
  toggleButtonState(config, inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(config, formElement, inputElement);
      toggleButtonState(config, inputList, buttonElement);
    });
  });
};
