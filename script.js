const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header .navbar');
const navbar = document.querySelector('header');
const logo = document.querySelector('header .logo a')

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('slide');
});

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.style.boxShadow = '0px 3px 5px rgba(208, 204, 255, 0.4)';
        logo.style.color = 'rgb(126, 115, 255)';
    } else {
        navbar.style.boxShadow = 'none';
        logo.style.color = 'rgb(73, 56, 255)';
    }
    
});