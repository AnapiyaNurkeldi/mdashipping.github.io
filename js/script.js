    let openModalBtn = document.querySelector('#openModalBtn');
let closeModalBtn = document.querySelector('#closeModalBtn');
let fullscreenMenu = document.querySelector('#fullscreenMenu');
let contactus = document.querySelector('.button-contact');
let imgcontact = document.querySelector('.img-contact');

function OpenModal() {
    fullscreenMenu.classList.add('show');
    fullscreenMenu.classList.remove('hide');
}

function CloseModal() {
    fullscreenMenu.classList.remove('show');
    fullscreenMenu.classList.add('hide');
}

openModalBtn.addEventListener('click', OpenModal);
closeModalBtn.addEventListener('click', CloseModal);

function OpenContact () {
    contactus.classList.add('hide');
    contactus.classList.remove('show');
    imgcontact.classList.add('show');
    imgcontact.classList.remove('hide');
    setTimeout(CloseContact, 9000);
}

function CloseContact () {
    imgcontact.classList.remove('show');
    imgcontact.classList.add('hide');
    contactus.classList.remove('hide');
    contactus.classList.add('show');
}

contactus.addEventListener('click', OpenContact);