const iconElement = document.getElementById('menu-icon');
const navElement = document.getElementById('navigation');
const toggleElement = document.getElementById('toggle');
const pricingContainerElement = document.getElementById('pricing-container');
const priceElements = document.querySelectorAll('[data-price]');
const periodElements = document.querySelectorAll('[data-period]');

const PRICES = [
  { plan: 'Basic', priceMonth: '$19.00', priceYear: '$190.00' },
  { plan: 'Pro', priceMonth: '$39.00', priceYear: '$390.00' },
  { plan: 'Business', priceMonth: '$99.00', priceYear: '$990.00' }
];

const printPrices = (pricePeriod, string) => {
  priceElements.forEach((price, index) => {
    price.textContent = PRICES[index][pricePeriod];
  });
  periodElements.forEach(period => {
    period.textContent = string;
  });
};

const updatePrices = () => {
  toggle.checked ? printPrices('priceYear', 'per year') : printPrices('priceMonth', 'per month');
};

toggleElement.addEventListener('change', updatePrices);

iconElement.addEventListener('click', () => {
  if (navElement.classList.contains('nav--show')) {
    iconElement.src = '../assets/shared/mobile/menu.svg';
  } else {
    iconElement.src = '../assets/shared/mobile/close.svg';
  }
  navElement.classList.toggle('nav--show');
});

updatePrices();
