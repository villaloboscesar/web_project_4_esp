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

function createCard(item) {
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

  // Funcion Boton Like
  cloneTemplate
    .querySelector(".elements__like")
    .addEventListener("click", function () {
      if (
        !cloneTemplate
          .querySelector(".elements__like")
          .classList.contains("elements__like_active")
      ) {
        cloneTemplate
          .querySelector(".elements__like")
          .classList.add("elements__like_active");
        cloneTemplate.querySelector(".elements__like").src =
          "./images/corazon_negro.svg";
      } else {
        cloneTemplate
          .querySelector(".elements__like")
          .classList.remove("elements__like_active");
        cloneTemplate.querySelector(".elements__like").src =
          "./images/corazon.svg";
      }
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
      document.addEventListener("keydown", activarEventoTeclado);
    });
  return cloneTemplate;
}

//Funcion que cierra ventana haciendo click en X
function closePopup() {
  openForm.setAttribute("style", "visibility: none; opacity: 0");
}
closeForm.addEventListener("click", closePopup);

function activarEventoTeclado(event) {
  if (event.key === "Escape") {
    //cerrar el modal
    closePopup();
    closeNewplace();
    closePopupImgButton();
    //quitar el evento
    document.removeEventListener("keydown", activarEventoTeclado);
  }
}

//Funcion que abre popup para editar perfil
function openPopup() {
  openForm.style.visibility = "visible";
  openForm.style.opacity = "1";
  openForm.style.display = "flex";
  document.addEventListener("keydown", activarEventoTeclado);
}
editProfile.addEventListener("click", openPopup);

//Captura valores ya ingresados en perfil
setPopupName.setAttribute("value", captureName.textContent);
setPopupAbout.setAttribute("value", captureAbout.textContent);

// Funcion que abre popup para formulario de nueva card
function openNewPlace() {
  openFormNewItem.setAttribute("style", "visibility: visible;opacity: 1;");
  document.addEventListener("keydown", activarEventoTeclado);
}
newPlace.addEventListener("click", openNewPlace);

// Funcion que cierra popup para formulario de nueva card
function closeNewplace() {
  openFormNewItem.setAttribute("style", "visibility: none; opacity: 0");
}
closePlace.addEventListener("click", closeNewplace);

//Funcion que cierra ventana Place haciendo click fuera de la ventana
function closePopupExternal(event) {
  const formAlQueLeDisteClick = event.target;
  const dataTarget = formAlQueLeDisteClick.dataset.id;
  if (dataTarget == "popupexternal") {
    formAlQueLeDisteClick.setAttribute("style", "visibility: none; opacity: 0");
  } else {
    if (dataTarget == "popupimg")
      formAlQueLeDisteClick.classList.remove("clickimg_opened");
  }
}
const modales = [openFormNewItem, openForm, imagePopup];
modales.forEach(function (modal) {
  modal.addEventListener("click", closePopupExternal);
});

//Funcion que cierra ventana img popup

function closePopupImgButton() {
  imagePopup.classList.remove("clickimg_opened");
}
buttonClosePopup.addEventListener("click", closePopupImgButton);

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
  const cloneTemplate = createCard(item);
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
  const cloneNewCard = createCard({ link: newURLImage, name: newTitleCard });
  //Agrego la nueva tarjeta al DOM
  addElements.prepend(cloneNewCard);
  //Cierro la ventana
  openFormNewItem.setAttribute("style", "visibility: none; opacity: 0");
}
formAddNewCard.addEventListener("submit", handleNewcardFormSubmit);
