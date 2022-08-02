let editprofile = document.querySelector(".profile__button-edit");
let openform = document.querySelector(".popup_opened");
let closeform = document.querySelector(".popup__close")

function openPopup (){
    openform.setAttribute("style", "display: flex");
}

function ClosePopup (event){
    openform.setAttribute("style", "display: none");
    event.preventDefault();
}
editprofile.addEventListener("click", openPopup);
closeform.addEventListener("click", ClosePopup);
