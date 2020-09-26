//get the  nav items
const burger = document.querySelector('.lines');
const navLinks = document.querySelector('.nav-bar__items')
const open = document.querySelector('.nav-bar__show');
const links = document.querySelectorAll('.nav-bar__links')
const date = document.getElementById('date');

// toggle when click
burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-bar__show');
});

//generate the current date
date.innerHTML = new Date().getFullYear();


