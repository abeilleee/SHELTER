import { cardsArray } from "./constants.js";
import { SLIDER } from "./constants.js";
import { POP_UP_WRAPPER } from "./constants.js";
import { POP_UP_BOX } from "./constants.js";
import { POP_UP_BTN_CLOSE } from "./constants.js";
import { CAROUSEL } from "./constants.js";


const CreatePopUpWindow = (i) => {
    const popUpCard = document.createElement('div');
    popUpCard.classList.add('pop-up__card');
    popUpCard.innerHTML = `<div class="pop-up-img-box">
                    <img class="pop-up-img" src="${cardsArray[i].img}" alt="${cardsArray[i].name}">
                </div>
                <div class="pop-up-description">
                    <h2 class="pop-up-name title">${cardsArray[i].name}</h2>
                    <h4 class="pop-up-breed title">${cardsArray[i].breed}</h4>
                    <div class="pop-up-text">${cardsArray[i].description}</div>
                    <ul class="pop-up-list">
                        <li class="pop-up__list-item"><span><b>Age:</b> ${cardsArray[i].age} </span></li>
                        <li class="pop-up__list-item"><span><b>Inoculations:</b> ${cardsArray[i].inoculations || 'none'} </span></li>
                        <li class="pop-up__list-item"><span><b>Diseases: </b>${cardsArray[i].diseases || 'none'}</span></li>
                        <li class="pop-up__list-item"><span><b>Parasites: </b>${cardsArray[i].parasites || 'none'}</span></li>
                    </ul>
                </div>`;
    return popUpCard;
}

const togglerOpen = (element) => {
    element.classList.add('open');
}

const togglerClose = (element) => {
    element.classList.remove('open');
}

let child;

const openPopUp = (event) => {
    const { target } = event;

    if (target.closest('.card')) {
        const id = target.closest('.card').id;
        document.body.classList.add('hidden');
        togglerOpen(POP_UP_WRAPPER);
        child = CreatePopUpWindow(id)
        POP_UP_BOX.appendChild(child);
    }
}

if (document.body.contains(SLIDER)) {
    SLIDER.addEventListener('click', openPopUp);
}

if (document.body.contains(CAROUSEL)) {
    CAROUSEL.addEventListener('click', openPopUp);
}

POP_UP_WRAPPER.addEventListener('click', (event) => {
    if (event.target.classList.contains('pop-up-wrapper')) {
        togglerClose(POP_UP_WRAPPER);
        document.body.classList.remove('hidden');
        POP_UP_BOX.removeChild(child);
    }
})

POP_UP_BTN_CLOSE.addEventListener('click', (event) => {
    togglerClose(POP_UP_BOX);
    togglerClose(POP_UP_WRAPPER);
    document.body.classList.remove('hidden');
    POP_UP_BOX.removeChild(child);
})




