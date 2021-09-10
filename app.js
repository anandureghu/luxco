const menu = document.querySelector('.mobile-menu');
const menuItems = document.querySelector('.nav-items')

menu.addEventListener('click', e => {
    menu.classList.toggle('active');
    menuItems.classList.toggle('active');
});