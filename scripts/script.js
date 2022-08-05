const editprofile = document.querySelector(".profile__button-edit");
const openform = document.querySelector(".popup_opened");
const closeform = document.querySelector(".popup__close")
const captureName = document.querySelector(".profile__name");
const captureAbout = document.querySelector(".profile__about");
const setPopupName = document.querySelector(".popup__name");
const setPopupAbout= document.querySelector(".popup__about-me");


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


const form = document.querySelector(".popup");


function handleProfileFormSubmit(evt) {
    
    evt.preventDefault();
    const nameinput = document.querySelector(".popup__name").value;
    const aboutinput = document.querySelector(".popup__about-me").value;
    captureName.textContent = nameinput;
    captureAbout.textContent = aboutinput;
    openform.setAttribute("style", "display: none");

}

form.addEventListener('submit', handleProfileFormSubmit); 


