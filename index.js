const btnBurger = document.querySelector('.header-burger');
const headerNav = document.querySelector('.header-nav');
const burgerWrapper = document.querySelector('.burger-wrapper');
const headerNavList = document.querySelector('.header-nav__list');


btnBurger.addEventListener('click', (event) => {
    btnBurger.classList.toggle('open');
    headerNav.classList.toggle('open');
    burgerWrapper.classList.toggle('open');
    document.body.classList.toggle('hidden');
    }
)


headerNavList.addEventListener('click', (event) => {
if (event.target.classList.contains('header-nav__list') || (event.target.classList.contains('list-link'))) {
    btnBurger.classList.remove('open');
    headerNav.classList.remove('open');
    burgerWrapper.classList.remove('open');
    document.body.classList.remove('hidden');
}
})

burgerWrapper.addEventListener('click', (event) => {
    btnBurger.classList.remove('open');
    headerNav.classList.remove('open');
    burgerWrapper.classList.remove('open');
    document.body.classList.remove('hidden');
})






