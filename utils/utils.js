import Card from "../components/Card.js";
import {
  editProfile,
  openForm,
  closeForm,
  setPopupName,
  captureName,
  setPopupAbout,
  captureAbout,
  newPlace,
  closePlace,
  openFormNewItem,
  imagePopup,
  buttonClosePopup,
  form,
  formAddNewCard,
} from "./constants.js";

function closePopup() {
  openForm.setAttribute("style", "visibility: none; opacity: 0");
}
closeForm.addEventListener("click", closePopup);

//Funcion que abre popup para editar perfil
export function openPopup() {
  openForm.style.visibility = "visible";
  openForm.style.opacity = "1";
  openForm.style.display = "flex";
  document.addEventListener("keydown", keyboardEventActive);
}
editProfile.addEventListener("click", openPopup);

//Funcion que cierra ventana haciendo click en X

function keyboardEventActive(event) {
  if (event.key === "Escape") {
    //cerrar el modal
    closePopup();
    closeNewplace();
    closePopupImgButton();
    //quitar el evento
    document.removeEventListener("keydown", keyboardEventActive);
  }
}

//Captura valores ya ingresados en perfil
setPopupName.setAttribute("value", captureName.textContent);
setPopupAbout.setAttribute("value", captureAbout.textContent);

// Funcion que abre popup para formulario de nueva card
function openNewPlace() {
  openFormNewItem.setAttribute("style", "visibility: visible;opacity: 1;");
  document.addEventListener("keydown", keyboardEventActive);
}
newPlace.addEventListener("click", openNewPlace);

// Funcion que cierra popup para formulario de nueva card
function closeNewplace(evt) {
  openFormNewItem.setAttribute("style", "visibility: none; opacity: 0");
  evt.preventDefault();
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
export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const setPopupName = document.querySelector(".popup__input").value;
  const setPopupAbout = document.querySelector(".popup__about-me").value;
  captureName.textContent = setPopupName;
  captureAbout.textContent = setPopupAbout;
  openForm.setAttribute("style", "display: none");
}
// form.addEventListener("submit", handleProfileFormSubmit);

//Funcion agregar nueva tarjeta
export function handleNewcardFormSubmit(evt) {
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
//formAddNewCard.addEventListener("submit", handleNewcardFormSubmit);

function createCard(item) {
  const newCard = new Card(item.name, item.link);
  return newCard.generateCard();
}
