const OUR_FRIENDS_CARDS_PAGE = document.querySelector('.our-friends-cards--our-friends');
const CARDS = document.querySelectorAll('.card');
const ARROW_START = document.querySelector('.arrow--pagination-start');
const ARROW_PREV = document.querySelector('.arrow--pagination-prev');
const ARROW_NUMBER = document.querySelector('.arrow-number');
const ARROW_NEXT = document.querySelector('.arrow--pagination-next');
const ARROW_END = document.querySelector('.arrow--pagination-end');


const cardsArray = [
    {
        id: 0,
        name: "Katrine",
        img: "images/pets-katrine.jpg",
        btn: "Learn more"
    },
    {
        id: 1,
        name: "Jennifer",
        img: "images/pets-jennifer.jpg",
        btn: "Learn more"
    },
    {
        id: 2,
        name: "Woody",
        img: "images/pets-woody.jpg",
        btn: "Learn more"
    },
    {
        id: 3,
        name: "Sophia",
        img: "images/pets-sophia.jpg",
        btn: "Learn more"
    },
    {
        id: 4,
        name: "Timmy",
        img: "images/pets-timmy.jpg",
        btn: "Learn more"
    },
    {
        id: 5,
        name: "Charly",
        img: "images/pets-charly.jpg",
        btn: "Learn more"
    },
    {
        id: 6,
        name: "Scarlett",
        img: "images/pets-scarlet.jpg",
        btn: "Learn more"
    },
    {
        id: 7,
        name: "Freddie",
        img: "images/pets-freddie.jpg",
        btn: "Learn more"
    }
]

const createCardTemplate = () => {
    const card1 = document.createElement('div');
    card1.classList.add('card');
    return card1;
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

const generateArrOfIndexes = () => {
    let arr = [];
    let count = 0;
    while (count < 6) {
        let listOfIndexes = generateRandomNumbers();
        count++;
        arr.push(listOfIndexes);
    }
    return arr;
}

const generateSetOfCards = (page, arr) => {
    page.innerHTML = '';
    for (i of arr) {
        let cardNew = createCardTemplate();
        cardNew.setAttribute('id', i);
        cardNew.innerHTML = `<img src="${cardsArray[i].img}" alt="${cardsArray[i].name}" class="card__img">
        <div class="card__name">${cardsArray[i].name}</div>
        <button class="card__button button-outline button">${cardsArray[i].btn}</button>`;
        page.appendChild(cardNew);
    }
}

let indexes = generateArrOfIndexes();

window.onload = () => {
    if (cardsArray) {
        generateSetOfCards(OUR_FRIENDS_CARDS_PAGE, indexes[0]);
        console.log(indexes)
    }
}

ARROW_NEXT.addEventListener('click', () => {
    ARROW_NUMBER.innerHTML++;
    let page = +ARROW_NUMBER.innerHTML;
    generateSetOfCards(OUR_FRIENDS_CARDS_PAGE, indexes[page - 1]);
    ARROW_PREV.classList.remove('arrow--disabled');
    if (+ARROW_NUMBER.innerHTML === 6) {
        ARROW_NEXT.classList.add('arrow--disabled');
        ARROW_START.classList.remove('arrow--disabled');
    }
})

ARROW_PREV.addEventListener('click', () => {
    ARROW_NUMBER.innerHTML--;
    let page = +ARROW_NUMBER.innerHTML;
    generateSetOfCards(OUR_FRIENDS_CARDS_PAGE, indexes[page - 1]);
})

ARROW_START.addEventListener('click', () => {
    if (+ARROW_NUMBER.innerHTML > 0) {
        ARROW_START.classList.remove('arrow--disabled');
        generateSetOfCards(OUR_FRIENDS_CARDS_PAGE, indexes[0]);
        ARROW_NUMBER.innerHTML = '1';
    }
})

ARROW_END.addEventListener('click', () => {
    if (+ARROW_NUMBER.innerHTML > 0 && +ARROW_NUMBER.innerHTML !== 6) {
        ARROW_START.classList.remove('arrow--disabled');
        generateSetOfCards(OUR_FRIENDS_CARDS_PAGE, indexes[5]);
        ARROW_NUMBER.innerHTML = '6';
    }
})