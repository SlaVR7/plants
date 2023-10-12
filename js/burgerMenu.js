export function toggleMenu(event) {
  const burger = document.querySelector('#burger');
  const menu = document.querySelector('#menu');
  const bar = document.querySelectorAll('.bar');

  if (!menu.classList.contains("showMenu") && (event.target === burger || Array.from(burger.children).includes(event.target)) ) {
    menu.classList.add('showMenu');
    bar.forEach((el) => {
      el.classList.add('active');
    });
  } else {
    menu.classList.remove('showMenu');
    bar.forEach((el) => {
      el.classList.remove('active');
    })
  }
}
