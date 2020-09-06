//variables
const burger = document.querySelector('.lines');
const navLinks = document.querySelector('.nav-bar__items')
const links = document.querySelectorAll('.nav-bar__links')

burger.addEventListener('click', () => {
    navLinks.classList.toggle('.show');
});