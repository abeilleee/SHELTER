import { cardsArray } from "./constants.js";
import { OUR_FRIENDS_CARDS_PAGE } from "./constants.js";
import { ARROW_START } from "./constants.js";
import { ARROW_PREV } from "./constants.js";
import { PAGE_NUMBER } from "./constants.js";
import { ARROW_NEXT } from "./constants.js";
import { ARROW_END } from "./constants.js";


const createCardTemplate = () => {
    const card1 = document.createElement('div');
    card1.classList.add('card');
    card1.classList.add('card--our-pets');
    return card1;
}

const generateRandomNumbers = (amountOfCards) => {
    const arr = [];
    while (arr.length < amountOfCards) {
        let indexRandom = Math.floor(Math.random() * 8);
        if (!arr.includes(indexRandom)) {
            arr.push(indexRandom);
        }
    }
    return arr;
}

const generateArrOfIndexes = (amountOfPages, amountOfCards) => {
    let arr = [];
    let count = 0;
    while (count < amountOfPages) {
        let listOfIndexes = generateRandomNumbers(amountOfCards);
        count++;
        arr.push(listOfIndexes);
    }
    return arr;
}

const generateSetOfCards = (page, arr) => {
    page.innerHTML = '';
    for (let i of arr) {
        let cardNew = createCardTemplate();
        cardNew.setAttribute('id', i);
        cardNew.innerHTML = `<img src="${cardsArray[i].img}" alt="${cardsArray[i].name}" class="card__img">
        <div class="card__name">${cardsArray[i].name}</div>
        <button class="card__button button-outline button">${cardsArray[i].btn}</button>`;
        page.appendChild(cardNew);
    }
}

const size = () => {
    return window.innerWidth;
}

const generateArrOfIndexesToCurrentSize = (arrayOfIndexes, countOfCards) => {
    let newArrayOfIndexes = arrayOfIndexes.join(',').split(',').map((i) => +i);
    let arr = [];
    for (let i = 0; i < Math.ceil(newArrayOfIndexes.length / countOfCards); i++) {
        arr[i] = newArrayOfIndexes.slice((i * countOfCards), (i * countOfCards) + countOfCards);
    }
    return arr;
}

let amountOfCards = 8;
let indexes = generateArrOfIndexes(6, 8);
let amountOfPages = 6;  


// const checkScreenSize = () => {
//     if (size() >= 1280) {
//         amountOfPages = 6;
//         countOfCards = 8;
//     } else if (size() < 1279 && size() > 1076) {
//         amountOfPages = 8;
//         countOfCards = 6;
//     } else if (size() < 1076 && size() > 768) {
//         amountOfPages = 8;
//         countOfCards = 6;
//     } else if (size() < 768 && size() > 0) {
//         amountOfPages = 16;
//         countOfCards = 3;
//     }

// }

// const checkScreenSize = () => {
//     if (size() === 1279) {
//         amountOfPages = 6;
//         countOfCards = 8;
//         generateArrOfIndexesToCurrentSize(indexes, countOfCards, amountOfPages);
//         console.log(indexes);
//     } else if (size() === 1278) {
//         amountOfPages = 8;
//         countOfCards = 6;
//         generateArrOfIndexesToCurrentSize(indexes, countOfCards);
//         console.log(indexes);
//     } else if (size() === 1075) {
//         amountOfPages = 8;
//         countOfCards = 6;
//         generateArrOfIndexesToCurrentSize(indexes, countOfCards);
//         console.log(indexes);
//     } else if (size() === 767) {
//         amountOfPages = 16;
//         countOfCards = 3;
//         generateArrOfIndexesToCurrentSize(indexes, countOfCards);
//         console.log(indexes);
//     }

// }


// addEventListener("resize", () => {
//     checkScreenSize();
// });



window.onload = () => {
    if (cardsArray) {
        generateSetOfCards(OUR_FRIENDS_CARDS_PAGE, indexes[0]);
    }
}


const togglerAddDisabledClass = (page, button) => {
    if (page === amountOfPages) {
        button.classList.add('arrow--disabled');
    } else if (page < amountOfPages) {
        button.classList.remove('arrow--disabled');
    }
}

const togglerRemoveDisabledClass = (page, button) => {
    if (page > 1) {
        button.classList.remove('arrow--disabled');
    } else if (page === 1) {
        button.classList.add('arrow--disabled');
    }
}

ARROW_NEXT.addEventListener('click', () => {
    PAGE_NUMBER.innerHTML++;
    let page = +PAGE_NUMBER.innerHTML;
    generateSetOfCards(OUR_FRIENDS_CARDS_PAGE, indexes[page - 1]);
    togglerAddDisabledClass(+PAGE_NUMBER.innerHTML, ARROW_NEXT);
    togglerRemoveDisabledClass(+PAGE_NUMBER.innerHTML, ARROW_PREV);
    togglerRemoveDisabledClass(+PAGE_NUMBER.innerHTML, ARROW_START);
    togglerAddDisabledClass(+PAGE_NUMBER.innerHTML, ARROW_END);
})

ARROW_PREV.addEventListener('click', () => {
    PAGE_NUMBER.innerHTML--;
    let page = +PAGE_NUMBER.innerHTML;
    generateSetOfCards(OUR_FRIENDS_CARDS_PAGE, indexes[page - 1]);
    togglerAddDisabledClass(+PAGE_NUMBER.innerHTML, ARROW_NEXT);
    togglerRemoveDisabledClass(+PAGE_NUMBER.innerHTML, ARROW_PREV);
    togglerRemoveDisabledClass(+PAGE_NUMBER.innerHTML, ARROW_START);
    togglerAddDisabledClass(+PAGE_NUMBER.innerHTML, ARROW_END);
})

ARROW_START.addEventListener('click', () => {
    PAGE_NUMBER.innerHTML = '1';
    let page = +PAGE_NUMBER.innerHTML;
    generateSetOfCards(OUR_FRIENDS_CARDS_PAGE, indexes[page - 1]);
    togglerAddDisabledClass(+PAGE_NUMBER.innerHTML, ARROW_NEXT);
    togglerRemoveDisabledClass(+PAGE_NUMBER.innerHTML, ARROW_PREV);
    togglerRemoveDisabledClass(+PAGE_NUMBER.innerHTML, ARROW_START);
    togglerAddDisabledClass(+PAGE_NUMBER.innerHTML, ARROW_END);
})

ARROW_END.addEventListener('click', () => {
    PAGE_NUMBER.innerHTML = `${amountOfPages}`;
    let page = +PAGE_NUMBER.innerHTML;
    generateSetOfCards(OUR_FRIENDS_CARDS_PAGE, indexes[page - 1]);
    togglerAddDisabledClass(+PAGE_NUMBER.innerHTML, ARROW_NEXT);
    togglerRemoveDisabledClass(+PAGE_NUMBER.innerHTML, ARROW_PREV);
    togglerRemoveDisabledClass(+PAGE_NUMBER.innerHTML, ARROW_START);
    togglerAddDisabledClass(+PAGE_NUMBER.innerHTML, ARROW_END);
})

