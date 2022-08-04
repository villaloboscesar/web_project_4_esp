let editprofile = document.querySelector(".profile__button-edit");
let openform = document.querySelector(".popup_opened");
let closeform = document.querySelector(".popup__close")
let captureName = document.querySelector(".profile__name");
let captureAbout = document.querySelector(".profile__about");
let setPopupName = document.querySelector(".popup__name");
let setPopupAbout= document.querySelector(".popup__about-me");


function openPopup (){
    openform.setAttribute("style", "display: flex");
}
function ClosePopup (event){
   event.preventDefault();
   openform.setAttribute("style", "display: none");
}

editprofile.addEventListener("click", openPopup);
closeform.addEventListener("click", ClosePopup);

setPopupName.setAttribute("value" , captureName.textContent);
setPopupAbout.setAttribute("value" , captureAbout.textContent);


let form = document.querySelector(".popup");


function handleProfileFormSubmit(evt) {

    evt.preventDefault();
    let nameinput = document.querySelector(".popup__name").value;
    let aboutinput = document.querySelector(".popup__about-me").value;
    captureName.textContent = nameinput;
    captureAbout.textContent = aboutinput;

}

form.addEventListener('submit', handleProfileFormSubmit); 


