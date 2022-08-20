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
const formAddNewCard = document.querySelector(".newitem");
const cardtitle = document.querySelector(".elements__title");

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

    initialCards.forEach(item=>{
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
        clonetemplate.querySelector(".profile__trash").addEventListener("click", function (event){
            event.target.closest(".elements__container").remove();
            });
        // //Funcion mostrar imagen card en popup     
        clonetemplate.querySelector(".elements__pic").addEventListener("click", function (event){
        
       
         });

        //  document.getElementById('insert-btn').onclick = function () {
        //     const val = document.getElementById('imageName').value;
        //     const src = 'https://google.com/images/' + val + '.png';
        //     let imgTag = document.createElement('img');
        //     imgTag.src = src;
        //     document.body.appendChild(imgTag);
        //   }
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
        cloneNewCard.querySelector(".profile__trash").addEventListener("click", function (event){
        event.target.closest(".elements__container").remove();
        });
        //Agrego la nueva tarjeta al DOM
        addelements.prepend(cloneNewCard);
        //Cierro la ventana
        openformNewitem.setAttribute("style", "visibility: none; opacity: 0");
    }
    formAddNewCard.addEventListener('submit', handleNewcardFormSubmit); 




