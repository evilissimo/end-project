let loginButton = document.querySelector('.login-button');
let loginPopup = document.querySelector('.login-popup');
let body = document.querySelector('.page');

loginButton.addEventListener('click', showPopup);

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();
    loginPopup.classList.toggle('show-popup');
    evt.preventDefault();
    body.classList.toggle('popup-backdrop');
}