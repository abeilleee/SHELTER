import { cardsArray } from "./constants.js";
import { BTN_LEFT_CAROUSEL } from "./constants.js";
import { BTN_RIGHT_CAROUSEL } from "./constants.js";
import { CARDS } from "./constants.js";
import { CAROUSEL } from "./constants.js";
import { CARDS_LEFT } from "./constants.js";
import { CARDS_RIGHT } from "./constants.js";
import { CARDS_ACTIVE } from "./constants.js";

// Карусель

const moveLeft = () => {
    CAROUSEL.classList.add('transition-left');
    BTN_LEFT_CAROUSEL.removeEventListener('click', (moveLeft));
    BTN_RIGHT_CAROUSEL.removeEventListener('click', (moveRight));
}

const moveRight = () => {
    CAROUSEL.classList.add('transition-right');
    BTN_RIGHT_CAROUSEL.removeEventListener('click', (moveRight));
    BTN_LEFT_CAROUSEL.removeEventListener('click', (moveLeft));
}

const createCardTemplate = () => {
    const card1 = document.createElement('div');
    card1.classList.add('card');
    return card1;
}

const generateRandomNumber = () => {
    return String(Math.floor(Math.random() * 8));
}

const generateRandomNumbers = () => {
    const arr = [];
    while (arr.length < 8) {
        let indexRandom = Math.floor(Math.random() * 8);
        if (!arr.includes(indexRandom)) {
            arr.push(indexRandom);
        }
    }
    return arr;
}


const generateRandomSetCards = (cardsActive, cardsRight, cardsLeft) => {
    cardsActive.innerHTML = '';
    cardsRight.innerHTML = '';
    cardsLeft.innerHTML = '';

    let newIndexes = generateRandomNumbers();
    let newIndexesLeft = [];
    let newIndexesActive = [];
    let newIndexesRight = [];

    newIndexesLeft = newIndexes.slice(0, 3);
    newIndexesActive = newIndexes.slice(3, 6);
    newIndexesRight = newIndexes.slice(6, 8);
    newIndexesRight.push(newIndexes[0]);

    for (let i of newIndexesLeft) {
        let cardNew = createCardTemplate();
        cardNew.setAttribute('id', i);
        cardNew.innerHTML = `<img src="${cardsArray[i].img}" alt="${cardsArray[i].name}" class="card__img">
    <div class="card__name">${cardsArray[i].name}</div>
    <button class="card__button button-outline button">${cardsArray[i].btn}</button>`;
        cardsLeft.appendChild(cardNew);
    }

    for (let i of newIndexesActive) {
        let cardNew = createCardTemplate();
        cardNew.setAttribute('id', i);
        cardNew.innerHTML = `<img src="${cardsArray[i].img}" alt="${cardsArray[i].name}" class="card__img">
    <div class="card__name">${cardsArray[i].name}</div>
    <button class="card__button button-outline button">${cardsArray[i].btn}</button>`;
        cardsActive.appendChild(cardNew);
    }

    for (let i of newIndexesRight) {
        let cardNew = createCardTemplate();
        cardNew.setAttribute('id', i);
        cardNew.innerHTML = `<img src="${cardsArray[i].img}" alt="${cardsArray[i].name}" class="card__img">
    <div class="card__name">${cardsArray[i].name}</div>
    <button class="card__button button-outline button">${cardsArray[i].btn}</button>`;
        cardsRight.appendChild(cardNew);
    }
}


window.onload = () => {
    if (cardsArray) {
        generateRandomSetCards(CARDS_ACTIVE, CARDS_RIGHT, CARDS_LEFT);
    }
}

BTN_LEFT_CAROUSEL.addEventListener('click', (moveLeft));
BTN_RIGHT_CAROUSEL.addEventListener('click', (moveRight));


CAROUSEL.addEventListener('animationend', (animationEvent) => {
    let changedItem;

    if (animationEvent.animationName === 'move-left') {
        CAROUSEL.classList.remove('transition-left');
        CARDS_RIGHT.innerHTML = CARDS_ACTIVE.innerHTML;
        changedItem = CARDS_LEFT;
        CARDS_ACTIVE.innerHTML = CARDS_LEFT.innerHTML;

    } else if (animationEvent.animationName === 'move-right') {
        CAROUSEL.classList.remove('transition-right');
        CARDS_LEFT.innerHTML = CARDS_ACTIVE.innerHTML;
        changedItem = CARDS_RIGHT;
        CAROUSEL.classList.remove('transition-left');
        CARDS_ACTIVE.innerHTML = CARDS_RIGHT.innerHTML;
    }

    changedItem.innerHTML = '';

    let activeIndexes = Array.from(CARDS_ACTIVE.children).map((item) => item.getAttribute('id'));
    let newIndexes = [];


    while (newIndexes.length < 3) {
        const indexRandom = generateRandomNumber();
        if (!activeIndexes.includes(indexRandom) && (!newIndexes.includes(indexRandom))) {
            newIndexes.push(indexRandom);
        }
    }

    for (let i of newIndexes) {
        const cardNew = createCardTemplate();
        cardNew.setAttribute('id', i);
        cardNew.innerHTML = `<img src="${cardsArray[i].img}" alt="${cardsArray[i].name}" class="card__img">
        <div class="card__name">${cardsArray[i].name}</div>
        <button class="card__button button-outline button">${cardsArray[i].btn}</button>`;
        changedItem.appendChild(cardNew);
    }

    BTN_LEFT_CAROUSEL.addEventListener('click', (moveLeft));
    BTN_RIGHT_CAROUSEL.addEventListener('click', (moveRight));
});


