import { btnBurger } from "./constants.js";
import { headerNav } from "./constants.js";
import { burgerWrapper } from "./constants.js";
import { headerNavList } from "./constants.js";

// Бургер
const togglerOpen = (element) => {
    element.classList.toggle('open');
}

const togglerRemove = (element) => {
    element.classList.remove('open');
}

btnBurger.addEventListener('click', () => {
    togglerOpen(btnBurger);
    togglerOpen(headerNav);
    togglerOpen(burgerWrapper);
    document.body.classList.toggle('hidden');
});


headerNavList.addEventListener('click', (event) => {
    if (event.target.classList.contains('header-nav__list') || (event.target.classList.contains('list-link'))) {
        togglerRemove(btnBurger);
        togglerRemove(headerNav);
        togglerRemove(burgerWrapper);
        document.body.classList.remove('hidden');
    }
})

burgerWrapper.addEventListener('click', (event) => {
    togglerRemove(btnBurger);
    togglerRemove(headerNav);
    togglerRemove(burgerWrapper);
    document.body.classList.remove('hidden');
})