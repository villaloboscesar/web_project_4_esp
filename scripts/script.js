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


function openPopup (){
   // openform.setAttribute("style","visibility: visible;opacity: 1;");
   openform.style.visibility= "visible";
   openform.style.opacity= "1";
}
function ClosePopup (event){
   event.preventDefault();
   openform.setAttribute("style", "visibility: none; opacity: 0");
   //openform.style.visibility= "none";
   //openform.style.opacity= "0.5s";
}
editprofile.addEventListener("click", openPopup);
closeform.addEventListener("click", ClosePopup);
setPopupName.setAttribute("value" , captureName.textContent);
setPopupAbout.setAttribute("value" , captureAbout.textContent);

function openNewPlace (){
    openformNewitem.setAttribute("style","visibility: visible;opacity: 1;");
}
function closenewplace (event){
   event.preventDefault();
    openformNewitem.setAttribute("style", "visibility: none; opacity: 0");
}

newPlace.addEventListener("click", openNewPlace);
closePlace.addEventListener("click", closenewplace);



function handleProfileFormSubmit(evt) {
    
    evt.preventDefault();
    const setPopupName = document.querySelector(".popup__name").value;
    const setPopupAbout = document.querySelector(".popup__about-me").value;
    captureName.textContent = setPopupName;
    captureAbout.textContent = setPopupAbout;
    openform.setAttribute("style", "display: none");

}

form.addEventListener('submit', handleProfileFormSubmit); 







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
        const addsrc = document.querySelector(".elements__pic");
        addsrc.src = item.link;
        const addtitle = document.querySelector(".elements__pic");
        addtitle.src = item.name;
       const clonetemplate = templateContent.querySelector('.elements__container').cloneNode(true); 
       addelements.append(clonetemplate); 
    
    })

