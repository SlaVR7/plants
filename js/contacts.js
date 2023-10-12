import {city, contactArrowClosed, contactArrowOpened, contactBody, contactCard, contactHead} from '../index.js';

export function toggleCityElement(toOpen) {
  const maxHeight = toOpen ? '234px' : '0';
  const padding = toOpen ? '27px 0 31px' : '0';
  const backgroundColor = toOpen ? '#C1E698' : '#D6E7D2';
  const boxShadow = toOpen ? 'none' : '0px 4px 4px rgba(0, 0, 0, 0.25)';
  const closedArrowDisplay = toOpen ?  'none' : 'block';
  const openedArrowDisplay = toOpen ? 'block' : 'none';
  const isMinWidth = window.getComputedStyle(document.body).getPropertyValue('min-width') === '768px';

  contactBody.style.maxHeight = maxHeight;
  contactBody.style. padding = padding;
  contactHead.style.backgroundColor = backgroundColor;
  contactHead.style.boxShadow = boxShadow;
  contactArrowClosed.style.display = closedArrowDisplay;
  contactArrowOpened.style.display = openedArrowDisplay;

  if (isMinWidth && toOpen) {
    contactHead.style.marginBottom = '0';
    contactBody.style.marginBottom = '50px';
  }
  if (toOpen) {
    contactCard.style.display = 'none';
  }
}

export function selectCity(cityName, tel, address, telHref) {
  const cardCity = document.getElementById('cardCity');
  const cardTel = document.getElementById('cardTel');
  const cardAddress = document.getElementById('cardAddress');
  const call = document.getElementById('call');

  contactHead.style.backgroundColor = '#C1E698';
  contactHead.style.boxShadow = 'none'
  contactArrowClosed.style.display = 'block';
  contactArrowOpened.style.display = 'none';
  contactBody.style.maxHeight = '0';
  contactBody.style.padding = '0';
  contactCard.style.display = 'flex';

  city.innerHTML = cityName;
  cardCity.innerHTML = cityName;
  cardTel.innerHTML = tel;
  cardAddress.innerHTML = address;
  call.href = telHref;
}
