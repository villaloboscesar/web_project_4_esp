// Seleccion de constantes en el DOM
const editprofile = document.querySelector(".profile__button-edit");
const openform = document.querySelector(".popup_opened");
const closeform = document.querySelector(".popup__close")
const captureName = document.querySelector(".profile__name");
const captureAbout = document.querySelector(".profile__about");
const setPopupName = document.querySelector(".popup__name");
const setPopupAbout= document.querySelector(".popup__about-me");
const openformNewitem = document.querySelector(".newitem_opened");
const newPlace = document.querySelector(".profile__addbutton");
const closePlace = document.querySelector(".newitem__close");
const form = document.querySelector(".popup");

//Funcion que abre popup para editar perfil
function openPopup (){
   openform.style.visibility= "visible";
   openform.style.opacity= "1";
}
editprofile.addEventListener("click", openPopup);

//Funcion que cierra ventana popup
function ClosePopup (event){
   event.preventDefault();
   openform.setAttribute("style", "visibility: none; opacity: 0");
}
closeform.addEventListener("click", ClosePopup);

//Captura valores ya ingresados en perfil
setPopupName.setAttribute("value" , captureName.textContent);
setPopupAbout.setAttribute("value" , captureAbout.textContent);

// Funcion que abre popup para formulario de nueva card
function openNewPlace (){
    openformNewitem.setAttribute("style","visibility: visible;opacity: 1;");
}
newPlace.addEventListener("click", openNewPlace);

// Funcion que cierra popup para formulario de nueva card
function closenewplace (event){
    event.preventDefault();
    openformNewitem.setAttribute("style", "visibility: none; opacity: 0");
}
closePlace.addEventListener("click", closenewplace);

//Funcion que captura datos de formulario perfil y los almacena luego de presionar boton guardar
function handleProfileFormSubmit(evt) { 
    evt.preventDefault();
    const setPopupName = document.querySelector(".popup__name").value;
    const setPopupAbout = document.querySelector(".popup__about-me").value;
    captureName.textContent = setPopupName;
    captureAbout.textContent = setPopupAbout;
    openform.setAttribute("style", "display: none");
}
form.addEventListener('submit', handleProfileFormSubmit); 



//For Each que itera sobre array (initialcards) clonando 6 templates
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
    
    initialCards.forEach(item=>{
    const templateContent = document.querySelector("#template__cards").content; 
    const addelements = document.querySelector(".elements");
    const clonetemplate = templateContent.querySelector('.elements__container').cloneNode(true); 
    const addsrc = clonetemplate.querySelector(".elements__pic");
    addsrc.src = item.link;
    const addtitle = clonetemplate.querySelector(".elements__title");
    addtitle.textContent = item.name;
    addelements.append(clonetemplate); 
    })

