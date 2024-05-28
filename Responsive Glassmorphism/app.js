
const toggleMenu = document.querySelector('.toggle');
const section = document.querySelector('section');


function menuToggle()
{
    toggleMenu.classList.toggle('active');
    section.classList.toggle('active');
}

menuToggle();

