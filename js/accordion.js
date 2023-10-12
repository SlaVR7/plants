import {
  basics,
  basicsArrow,
  basicsBody,
  proCare,
  proCareArrow,
  proCareBody,
  standard,
  standardArrow,
  standardBody
} from '../index.js';

export function toggleAccordionItem(elementBody, element, elementArrow, toOpen) {
  const maxHeight = toOpen ? '130px' : '0';
  const paddingBottom = toOpen ? '12px' : '0';
  const backgroundColor = toOpen ? '#D6E7D2' : '#EDF2EC';
  const  borderBottomLeftRadius = toOpen ? '0' : '20px';
  const borderBottomRightRadius = toOpen ? '0' : '20px';
  const transform = toOpen ? '0' : '20px';

  elementBody.style.maxHeight = maxHeight;
  elementBody.style.paddingBottom = paddingBottom;
  element.style.backgroundColor = backgroundColor;
  element.style.borderBottomLeftRadius = borderBottomLeftRadius;
  element.style.borderBottomRightRadius = borderBottomRightRadius;
  elementArrow.style.transform = transform;
}

export function isElementOpen(element) {
  return window.getComputedStyle(element).getPropertyValue('background-color') === 'rgb(237, 242, 236)';
}

export function handleAccordionClick(body, target, arrow) {
  if (isElementOpen(target)) {
    toggleAccordionItem(basicsBody, basics, basicsArrow, false);
    toggleAccordionItem(standardBody, standard, standardArrow, false);
    toggleAccordionItem(proCareBody, proCare, proCareArrow, false);
    toggleAccordionItem(body, target, arrow, true);
  } else {
    toggleAccordionItem(body, target, arrow, false);
  }
}
