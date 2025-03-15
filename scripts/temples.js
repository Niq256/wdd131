// Hamburger menu toggle for mobile
const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('visible');
    hamburgerButton.textContent = navMenu.classList.contains('visible') ? 'X' : '☰';
});