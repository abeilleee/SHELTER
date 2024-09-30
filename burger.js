const btnBurger = document.querySelector('.header-burger');
const headerNav = document.querySelector('.header-nav');
const burgerWrapper = document.querySelector('.burger-wrapper');
const headerNavList = document.querySelector('.header-nav__list');

// Интерактив для бургера
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