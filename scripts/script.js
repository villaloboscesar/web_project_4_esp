let editprofile = document.querySelector(".profile__button-edit");
let openform = document.querySelector(".popup_opened");
let closeform = document.querySelector(".popup__close")
let captureName = document.querySelector(".profile__name");
let captureAbout = document.querySelector(".profile__about");
let setPopupName= document.querySelector(".popup__name");
let setPopupAbout= document.querySelector(".popup__about-me")


function openPopup (){
    openform.setAttribute("style", "display: flex");
}

function ClosePopup (event){
    openform.setAttribute("style", "display: none");
    event.preventDefault();
}

editprofile.addEventListener("click", openPopup);
closeform.addEventListener("click", ClosePopup);

setPopupName.setAttribute("value" , captureName.textContent);
setPopupAbout.setAttribute("value" , captureAbout.textContent);
