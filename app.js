//variables
const burger = document.querySelector('.lines');
const navLinks = document.querySelector('.nav-bar__items')
const open = document.querySelector('.nav-bar__show');
const links = document.querySelectorAll('.nav-bar__links')

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-bar__show');
});