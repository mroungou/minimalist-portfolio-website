const openMenuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-btn');
const mobileMenu = document.querySelector('#overlay')

openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
})