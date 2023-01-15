const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const bar = document.querySelectorAll('.bar')

function toggleMenu(event) {

    // console.log(event.target)

    if (!menu.classList.contains("showMenu") && (event.target === burger || Array.from(burger.children).includes(event.target)) ) {
        menu.classList.add('showMenu');
        bar.forEach((el) => {
            el.classList.add('active');
        });
        return;
    }

    menu.classList.remove('showMenu');
    bar.forEach((el) => {
        el.classList.remove('active');
    })

}

burger.addEventListener('click', () => {});
document.addEventListener('click', toggleMenu);

console.log('Все требования выполнены. Общее количество баллов: 85\n\nВёрстка соответствует макету. Ширина экрана 768px +24\nблок <header> +2\nсекция welcome +3\nсекция about +4\nсекция service +4\nсекция prices +4\nсекция contacts +4\nблок <footer> + 3\nВёрстка соответствует макету. Ширина экрана 380px +24\nблок <header> +2\nсекция welcome +3\nсекция about +4\nсекция service +4\nсекция prices +4\nсекция contacts +4\nблок <footer> + 3\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nнет полосы прокрутки при ширине страницы от 1440рх до 380px +7\nнет полосы прокрутки при ширине страницы от 380px до 320рх +8\nНа ширине экрана 380рх и меньше реализовано адаптивное меню +22\nпри ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка +2\nпри нажатии на бургер-иконку плавно появляется адаптивное меню +4\nадаптивное меню соответствует цветовой схеме макета +4\nпри нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4\nпри клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4')