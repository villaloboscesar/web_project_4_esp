// Seleccion de constantes en el DOM
const editprofile = document.querySelector(".profile__button-edit");
const openform = document.querySelector(".popup_opened");
const closeform = document.querySelector(".popup__close")
const captureName = document.querySelector(".profile__name");
const captureAbout = document.querySelector(".profile__about");
const setPopupName = document.querySelector(".popup__name");
const setPopupAbout = document.querySelector(".popup__about-me");
const openformNewitem = document.querySelector(".newitem_opened");
const newPlace = document.querySelector(".profile__addbutton");
const closePlace = document.querySelector(".newitem__close");
const form = document.querySelector(".popup");
const formAddNewCard = document.querySelector(".newitem");
const cardtitle = document.querySelector(".elements__title");
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
  buttonSubmit: ".popup__button"
};




//Funcion que cierra ventana haciendo click en X
function ClosePopup() {
  openform.setAttribute("style", "visibility: none; opacity: 0");
}
closeform.addEventListener("click", ClosePopup);




//Funcion que abre popup para editar perfil
function openPopup() {
  openform.style.visibility = "visible";
  openform.style.opacity = "1";
  openform.style.display = "flex"
}
editprofile.addEventListener("click", openPopup);




//Captura valores ya ingresados en perfil
setPopupName.setAttribute("value", captureName.textContent);
setPopupAbout.setAttribute("value", captureAbout.textContent);




// Funcion que abre popup para formulario de nueva card
function openNewPlace() {
  openformNewitem.setAttribute("style", "visibility: visible;opacity: 1;");
}
newPlace.addEventListener("click", openNewPlace);





// Funcion que cierra popup para formulario de nueva card
function closeNewplace(event) {
  openformNewitem.setAttribute("style", "visibility: none; opacity: 0");
}
closePlace.addEventListener("click", closeNewplace);




//Funcion que cierra ventana Place haciendo click fuera de la ventana
function ClosePopupExternal(event) {
    const formAlQueLeDisteClick = event.target
    const data_target = formAlQueLeDisteClick.dataset.id
    console.log(data_target)
    if(data_target=="popupexternal"){
      formAlQueLeDisteClick.setAttribute("style", "visibility: none; opacity: 0");
    }else{
    if(data_target=="popupimg")
      formAlQueLeDisteClick.setAttribute("style", "display:none");
    }
}
const modales = [openformNewitem,openform, imagePopup]
modales.forEach(function(modal){
  modal.addEventListener("click", ClosePopupExternal)
})




//Funcion que cierra ventana img popup

function ClosePopupImgButton(event) {
  imagePopup.setAttribute("style", "display: none");
}
buttonClosePopup.addEventListener("click", ClosePopupImgButton);




//Funcion que captura datos de formulario perfil y los almacena luego de presionar boton guardar
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const setPopupName = document.querySelector(".popup__input").value;
  const setPopupAbout = document.querySelector(".popup__about-me").value;
  captureName.textContent = setPopupName;
  captureAbout.textContent = setPopupAbout;
  openform.setAttribute("style", "display: none");
}
form.addEventListener('submit', handleProfileFormSubmit);





//For Each que itera sobre array (initialcards) clonando 6 templates desde #template__cards
//agrega los value de los objetos del array (name y link) y se los cada imagen y titulo de tarjeta
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];




initialCards.forEach(item => {
  //Seleccion del template con todo su contenido interno
  const templateContent = document.querySelector("#template__cards").content;
  //Seleccion de elemento donde se copiara el templeta clonado
  const addelements = document.querySelector(".elements");
  //Clonado de template
  const clonetemplate = templateContent.querySelector('.elements__container').cloneNode(true);
  //Seleccion y agregado de url desde objeto initialcards
  const addsrc = clonetemplate.querySelector(".elements__pic");
  addsrc.src = item.link;
  //Seleccion y agregado de titulo de la card desde objeto initialcards
  const addtitle = clonetemplate.querySelector(".elements__title");
  addtitle.textContent = item.name;




  //Funcion Boton Like
  clonetemplate.querySelector(".elements__like").addEventListener("click", function (event) {
    event.target.classList.toggle("elements__like_active");
  });
  
  
  
  //Funcion que borra cualquier card inicial
  clonetemplate.querySelector(".profile__trash").addEventListener("click", function (event) {
    event.target.closest(".elements__container").remove();
  });
  
  
  
  // //Funcion mostrar imagen card en popup     
  clonetemplate.querySelector(".elements__pic").addEventListener("click", event => {
    const srcimage = document.querySelector(".clickimg__img");
    srcimage.src = event.target.src
    event.target = imagePopup.style.display = "flex";
    clickImgTitle.textContent = event.target.closest("div").querySelector(".elements__title").textContent;
  });

  addelements.append(clonetemplate);
});




//Funcion agregar nueva tarjeta
function handleNewcardFormSubmit(evt) {
  evt.preventDefault();
  //Selecciono todo el contenido dentro del template
  const templateContent = document.querySelector("#template__cards").content;
  //Clono todo el template con su contenido 
  const cloneNewCard = templateContent.querySelector('.elements__container').cloneNode(true);
  //Selecciono en el DOM cual elemento HTML destino a colocar el clone
  const addelements = document.querySelector(".elements");
  //Capturo el valor del titulo ingresado por el usuario en el formulario y lo guardo en el titulo de la nueva tarjeta
  const newTitleCard = document.querySelector(".newitem__name").value;
  cloneNewCard.querySelector(".elements__title").textContent = newTitleCard;
  //Capturo el valor del URL ingresado por el usuario en el formulario y lo guardo en la nueva tarjeta
  const newURLImage = document.querySelector(".newitem__url").value;
  //Agrego el valor capturado y lo coloco como SRC a la nueva imagen de la card
  cloneNewCard.querySelector(".elements__pic").src = newURLImage;
  // Funcion Boton Like
  cloneNewCard.querySelector(".elements__like").addEventListener("click", function (event) {
    event.target.classList.toggle("elements__like_active");
  });



  //Funcion que borra cualquier card nueva que se agregue
  cloneNewCard.querySelector(".profile__trash").addEventListener("click", function (event) {
    event.target.closest(".elements__container").remove();
  });




  //Funcion que crear ventana emergente al hacer click a la imagen de una nueva tarjeta
  cloneNewCard.querySelector(".elements__pic").addEventListener("click", event => {
    const srcimage = document.querySelector(".clickimg__img");
    srcimage.src = event.target.src
    //event.target = imagePopup.style.display = "flex";
    imagePopup.style.display = "flex";
    //imagePopup.style.opacity = 1;
    clickImgTitle.textContent = event.target.closest("div").querySelector(".elements__title").textContent;
  });




  //Agrego la nueva tarjeta al DOM
  addelements.prepend(cloneNewCard);
  //Cierro la ventana
  openformNewitem.setAttribute("style", "visibility: none; opacity: 0");
}
formAddNewCard.addEventListener('submit', handleNewcardFormSubmit);





const isValid = (config, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(config, formElement, inputElement, inputElement.validationMessage);
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
    console.log(inputElement.validity.valid)
    if(!inputElement.validity.valid){
      hasInvalid = false;
    }
  });
  return hasInvalid;
};




const toggleButtonState = (config, inputList, buttonElement) => {
  console.log(inputList)
  console.log(!hasInvalidInput(inputList))
  if (!hasInvalidInput(inputList)) {
    console.log("true")
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
};




const setEventListeners = (config, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.buttonSubmit);
  toggleButtonState(config,inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(config, formElement, inputElement);
      console.log(inputList)
      toggleButtonState(config,inputList, buttonElement);
    });
  });
};





const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(config, formElement);
  });
};
enableValidation(formConfig);







window.addEventListener("click", function (e) {
  console.log(e.target)
})