const gardensBtn = document.getElementById('gardensBtn');
const plantsBtn = document.getElementById('plantingBtn');
const lawnBtn = document.getElementById('lawnBtn');
const gardens = document.querySelectorAll('.gardens');
const plants = document.querySelectorAll('.planting');
const lawn = document.querySelectorAll('.lawn');
let isPlantsActive = plantsBtn.classList.contains('service__btn-active');
let isLawnActive = lawnBtn.classList.contains('service__btn-active');
let isGardenActive = gardensBtn.classList.contains('service__btn-active');

function updateVariables() {
  isPlantsActive = plantsBtn.classList.contains('service__btn-active');
  isLawnActive = lawnBtn.classList.contains('service__btn-active');
  isGardenActive = gardensBtn.classList.contains('service__btn-active');
}

function toggleBlur(elements, isAdd) {
  elements.forEach((indexPlants) => {
    isAdd ? indexPlants.classList.add('blur') : indexPlants.classList.remove('blur');
  })
}

export function toggleGardens() {
  updateVariables();
  if (isPlantsActive && isLawnActive) {
    return;
  }
  if (!isPlantsActive && !isLawnActive && !isGardenActive) {
    toggleBlur(lawn, true);
    toggleBlur(plants, true);
  } else if (!isPlantsActive && isLawnActive && !isGardenActive) {
    toggleBlur(gardens, false);
    toggleBlur(plants, true);
  } else if (isPlantsActive && !isLawnActive && !isGardenActive) {
    toggleBlur(gardens, false);
    toggleBlur(lawn, true);
  } else if (!isPlantsActive && !isLawnActive && isGardenActive) {
    toggleBlur(plants, false);
    toggleBlur(lawn, false);
  } else if (isPlantsActive && !isLawnActive && isGardenActive) {
    toggleBlur(gardens, true);
    toggleBlur(lawn, true);
  } else if (!isPlantsActive && isLawnActive && isGardenActive) {
    toggleBlur(gardens, true);
    toggleBlur(lawn, false);
  }
  gardensBtn.classList.toggle('service__btn-active');
}

export function togglePlants() {
  updateVariables();
  if (isGardenActive && isLawnActive) {
    return;
  }
  plantsBtn.classList.toggle('service__btn-active')
  if (!isPlantsActive && !isLawnActive && !isGardenActive) {
    toggleBlur(lawn, true);
    toggleBlur(gardens, true);
  } else if (!isPlantsActive && isLawnActive && !isGardenActive) {
    toggleBlur(gardens, true);
    toggleBlur(plants, false);
  } else if (!isPlantsActive && !isLawnActive && isGardenActive) {
    toggleBlur(plants, false);
    toggleBlur(lawn, true);
  } else if (isPlantsActive && !isLawnActive && !isGardenActive) {
    toggleBlur(gardens, false);
    toggleBlur(lawn, false);
  } else if (isPlantsActive && !isLawnActive && isGardenActive) {
    toggleBlur(lawn, true);
    toggleBlur(lawn, true);
  } else if (isPlantsActive && isLawnActive && !isGardenActive) {
    toggleBlur(plants, true);
    toggleBlur(lawn, false);
  }
}

export function toggleLawn() {
  updateVariables();
  if (isPlantsActive && isGardenActive) {
    return;
  }
  lawnBtn.classList.toggle('service__btn-active');
  if (!isPlantsActive && !isLawnActive && !isGardenActive) {
    toggleBlur(gardens, true);
    toggleBlur(plants, true);
  } else if (!isPlantsActive && !isLawnActive && isGardenActive
  || isPlantsActive && !isLawnActive && !isGardenActive) {
    toggleBlur(lawn, false);
  } else if (!isPlantsActive && isLawnActive && !isGardenActive) {
    toggleBlur(plants, false);
    toggleBlur(gardens, false);
  } else if (isPlantsActive && isLawnActive && !isGardenActive
  || !isPlantsActive && isLawnActive && isGardenActive) {
    toggleBlur(lawn, true);
  }
}
