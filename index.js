import {toggleMenu} from './js/burgerMenu.js';
import {toggleGardens, toggleLawn, togglePlants} from "./js/toggleFocus.js";
import {handleAccordionClick} from "./js/accordion.js";
import {selectCity, toggleCityElement} from "./js/contacts.js";

const gardensBtn = document.getElementById('gardensBtn');
const plantsBtn = document.getElementById('plantingBtn');
const lawnBtn = document.getElementById('lawnBtn');
export const basics = document.getElementById('basics');
export const basicsBody = document.getElementById('basicsBody');
export const standardBody = document.getElementById('standardBody')
export const standard = document.getElementById('standard');
export const proCare = document.getElementById('proCare');
export const proCareBody = document.getElementById('proCareBody');
export const basicsArrow = document.getElementById('basicsArrow');
export const standardArrow = document.getElementById('standardArrow');
export const proCareArrow = document.getElementById('proCareArrow');
export const contactHead = document.getElementById('contactHead');
export const contactBody = document.getElementById('contactBody');
export const contactArrowClosed = document.getElementById('contactArrowClosed');
export const contactArrowOpened = document.getElementById('contactArrowOpened');
export const city = document.getElementById('city');
const canandaigua = document.getElementById('canandaigua');
const ny = document.getElementById('NY');
const yonkers = document.getElementById('yonkers');
const sherrill = document.getElementById('sherrill');
export const contactCard = document.getElementById('contactCard');

// Burger menu
document.addEventListener('click', toggleMenu);

// Service

gardensBtn.addEventListener('click', toggleGardens);
plantsBtn.addEventListener('click', togglePlants);
lawnBtn.addEventListener('click', toggleLawn);

// Accordion
basics.addEventListener('click', () => handleAccordionClick(basicsBody, basics, basicsArrow));
standard.addEventListener('click', () => handleAccordionClick(standardBody, standard, standardArrow));
proCare.addEventListener('click', () => handleAccordionClick(proCareBody, proCare, proCareArrow));

// Contacts

contactHead.addEventListener('click', () => {
    const isListOpened = window.getComputedStyle(contactArrowOpened).getPropertyValue('display') === 'block';
    if (!isListOpened) {
        toggleCityElement(true);
    } else if (isListOpened  && city.innerHTML !== 'City') {
        toggleCityElement(false);
        contactHead.style.backgroundColor = '#C1E698';
    } else {
        toggleCityElement(false);
    }
})

canandaigua.addEventListener('click', () => {
    selectCity('Canandaigua, NY', '+1\t585\t393 0001', '151 Charlotte Street', 'tel:+15853930001');
})
ny.addEventListener('click', () => {
    selectCity('New York City', '+1\t212\t456 0002', '9 East 91st Street', 'tel:+12124560002');
})
yonkers.addEventListener('click', () => {
    selectCity('Yonkers, NY', '+1\t914\t678 0003', '511 Warburton Ave', 'tel:+19146780003');
});
sherrill.addEventListener('click', () => {
    selectCity('Sherrill, NY', '+1\t315\t908 0004', '14 WEST Noyes BLVD', 'tel:+13159080004');
});
