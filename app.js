const btnMenuMobile = document.querySelector('[data-btn="menu-mobile"]');
const icon = document.querySelector('[data-icon="icon"]');
const menuMobile = document.querySelector('.menu-mobile');

function showMenu() {
    if (menuMobile.classList.contains('menu-mobile--hidden')) {
        menuMobile.classList.remove('menu-mobile--hidden')
        icon.classList.remove('list__icon bi bi-list')
        icon.classList.add('x__icon bi bi-x-lg')
    } else {
        menuMobile.classList.add('menu-mobile--hidden')
        icon.classList.remove('x__icon bi bi-x-lg')
        icon.classList.add('list__icon bi bi-list')
    }
}

btnMenuMobile.addEventListener("click", showMenu);