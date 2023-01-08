const iconElement = document.getElementById('menu-icon')
const navElement = document.getElementById('navigation')

const toggleButtonElement = document.getElementById('toggle-button')
const pricingContainerElement = document.getElementById('pricing-container')

iconElement.addEventListener('click', () => {
    if (navElement.classList.contains('nav--show')) {
        iconElement.src = "../assets/shared/mobile/menu.svg"
    } else {
        iconElement.src = "../assets/shared/mobile/close.svg"
    }
    navElement.classList.toggle('nav--show')
})

toggleButtonElement.addEventListener('click', () => {
    pricingContainerElement.classList.toggle('yearly');
})