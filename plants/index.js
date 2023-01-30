const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const bar = document.querySelectorAll('.bar');
const gardensBtn = document.getElementById('gardensBtn');
const plantsBtn = document.getElementById('plantingBtn');
const lawnBtn = document.getElementById('lawnBtn');
const gardens = document.querySelectorAll('.gardens');
const plants = document.querySelectorAll('.planting');
const lawn = document.querySelectorAll('.lawn');
const basics = document.getElementById('basics');
const basicsBody = document.getElementById('basicsBody');
const standardBody = document.getElementById('standardBody')
const standard = document.getElementById('standard');
const proCare = document.getElementById('proCare');
const proCareBody = document.getElementById('proCareBody');
const basicsArrow = document.getElementById('basicsArrow');
const standardArrow = document.getElementById('standardArrow');
const proCareArrow = document.getElementById('proCareArrow');
const contactHead = document.getElementById('contactHead');
const contactBody = document.getElementById('contactBody');
const contactArrowClosed = document.getElementById('contactArrowClosed');
const contactArrowOpened = document.getElementById('contactArrowOpened');
const canandaigua = document.getElementById('canandaigua');
const ny = document.getElementById('NY');
const yonkers = document.getElementById('yonkers');
const sherrill = document.getElementById('sherrill');
const city = document.getElementById('city');
const contactCard = document.getElementById('contactCard');
const cardCity = document.getElementById('cardCity');
const cardTel = document.getElementById('cardTel');
const cardAddress = document.getElementById('cardAddress');
const call = document.getElementById('call');



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

// Service

gardensBtn.addEventListener('click', () => {
    if (plantsBtn.classList.contains('service__btn-active') && lawnBtn.classList.contains('service__btn-active')) {
        return
   } else if (!plantsBtn.classList.contains('service__btn-active') && !lawnBtn.classList.contains('service__btn-active') && !gardensBtn.classList.contains('service__btn-active')) {
        gardensBtn.classList.toggle('service__btn-active')
        lawn.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
        plants.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
   } else if (!plantsBtn.classList.contains('service__btn-active') && lawnBtn.classList.contains('service__btn-active') && !gardensBtn.classList.contains('service__btn-active')) {
        gardensBtn.classList.toggle('service__btn-active')
        gardens.forEach((indexPlants) => {
            indexPlants.classList.remove('blur')
        })
        plants.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
   } else if (plantsBtn.classList.contains('service__btn-active') && !lawnBtn.classList.contains('service__btn-active') && !gardensBtn.classList.contains('service__btn-active')) {
        gardensBtn.classList.toggle('service__btn-active')
        gardens.forEach((indexPlants) => {
            indexPlants.classList.remove('blur')
        })
        lawn.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
   } else if (!plantsBtn.classList.contains('service__btn-active') && !lawnBtn.classList.contains('service__btn-active') && gardensBtn.classList.contains('service__btn-active')) {
        gardensBtn.classList.toggle('service__btn-active')
        plants.forEach((indexPlants) => {
            indexPlants.classList.remove('blur')
        })
        lawn.forEach((indexPlants) => {
            indexPlants.classList.remove('blur')
        })
   } else if (plantsBtn.classList.contains('service__btn-active') && !lawnBtn.classList.contains('service__btn-active') && gardensBtn.classList.contains('service__btn-active')) {
        gardensBtn.classList.toggle('service__btn-active')
        gardens.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
        lawn.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
   } else if (!plantsBtn.classList.contains('service__btn-active') && lawnBtn.classList.contains('service__btn-active') && gardensBtn.classList.contains('service__btn-active')) {
        gardensBtn.classList.toggle('service__btn-active')
        gardens.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
        lawn.forEach((indexPlants) => {
            indexPlants.classList.remove('blur')
        })
   }
})

plantsBtn.addEventListener('click', () => {
    if (gardensBtn.classList.contains('service__btn-active') && lawnBtn.classList.contains('service__btn-active')) {
        return
    } else if (!plantsBtn.classList.contains('service__btn-active') && !lawnBtn.classList.contains('service__btn-active') && !gardensBtn.classList.contains('service__btn-active')) {
        plantsBtn.classList.toggle('service__btn-active')
        lawn.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
        gardens.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
    } else if (!plantsBtn.classList.contains('service__btn-active') && lawnBtn.classList.contains('service__btn-active') && !gardensBtn.classList.contains('service__btn-active')) {
        plantsBtn.classList.toggle('service__btn-active')
        gardens.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
        plants.forEach((indexPlants) => {
            indexPlants.classList.remove('blur')
        })
    } else if (!plantsBtn.classList.contains('service__btn-active') && !lawnBtn.classList.contains('service__btn-active') && gardensBtn.classList.contains('service__btn-active')) {
        plantsBtn.classList.toggle('service__btn-active')
        plants.forEach((indexPlants) => {
            indexPlants.classList.remove('blur')
        })
        lawn.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
    } else if (plantsBtn.classList.contains('service__btn-active') && !lawnBtn.classList.contains('service__btn-active') && !gardensBtn.classList.contains('service__btn-active')) {
        plantsBtn.classList.toggle('service__btn-active')
        gardens.forEach((indexPlants) => {
            indexPlants.classList.remove('blur')
        })
        lawn.forEach((indexPlants) => {
            indexPlants.classList.remove('blur')
        })
    } else if (plantsBtn.classList.contains('service__btn-active') && !lawnBtn.classList.contains('service__btn-active') && gardensBtn.classList.contains('service__btn-active')) {
        plantsBtn.classList.toggle('service__btn-active')
        plants.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
        lawn.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
    } else if (plantsBtn.classList.contains('service__btn-active') && lawnBtn.classList.contains('service__btn-active') && !gardensBtn.classList.contains('service__btn-active')) {
        plantsBtn.classList.toggle('service__btn-active')
        plants.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
        lawn.forEach((indexPlants) => {
            indexPlants.classList.remove('blur')
        })
    }
})

lawnBtn.addEventListener('click', () => {
    if (plantsBtn.classList.contains('service__btn-active') && gardensBtn.classList.contains('service__btn-active')) {
        return
    } else if (!plantsBtn.classList.contains('service__btn-active') && !lawnBtn.classList.contains('service__btn-active') && !gardensBtn.classList.contains('service__btn-active')) {
        lawnBtn.classList.toggle('service__btn-active')
        gardens.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
        plants.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
    } else if (!plantsBtn.classList.contains('service__btn-active') && !lawnBtn.classList.contains('service__btn-active') && gardensBtn.classList.contains('service__btn-active')) {
        lawnBtn.classList.toggle('service__btn-active')
        lawn.forEach((indexPlants) => {
            indexPlants.classList.remove('blur')
        })
    } else if (plantsBtn.classList.contains('service__btn-active') && !lawnBtn.classList.contains('service__btn-active') && !gardensBtn.classList.contains('service__btn-active')) {
        lawnBtn.classList.toggle('service__btn-active')
        lawn.forEach((indexPlants) => {
            indexPlants.classList.remove('blur')
        })
    } else if (!plantsBtn.classList.contains('service__btn-active') && lawnBtn.classList.contains('service__btn-active') && !gardensBtn.classList.contains('service__btn-active')) {
        lawnBtn.classList.toggle('service__btn-active')
        plants.forEach((indexPlants) => {
            indexPlants.classList.remove('blur')
        })
        gardens.forEach((indexPlants) => {
            indexPlants.classList.remove('blur')
        })
    } else if (plantsBtn.classList.contains('service__btn-active') && lawnBtn.classList.contains('service__btn-active') && !gardensBtn.classList.contains('service__btn-active')) {
        lawnBtn.classList.toggle('service__btn-active')
        lawn.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
    } else if (!plantsBtn.classList.contains('service__btn-active') && lawnBtn.classList.contains('service__btn-active') && gardensBtn.classList.contains('service__btn-active')) {
        lawnBtn.classList.toggle('service__btn-active')
        lawn.forEach((indexPlants) => {
            indexPlants.classList.add('blur')
        })
    }
})

// Prices

function basicsOpen() {
    basicsBody.style.maxHeight = '130px';
    basicsBody.style.paddingBottom = '12px';
    basics.style.backgroundColor = '#D6E7D2';
    basics.style.borderBottomLeftRadius = '0';
    basics.style.borderBottomRightRadius = '0';
    basicsArrow.style.transform = 'rotate(180deg)';
}

function basicsClose() {
    basicsBody.style.maxHeight = '0';
    basicsBody.style.paddingBottom = '0';
    basics.style.backgroundColor = '#EDF2EC';
    basics.style.borderBottomLeftRadius = '20px';
    basics.style.borderBottomRightRadius = '20px';
    basicsArrow.style.transform = 'rotate(0)';
}

function standardOpen() {
    standardBody.style.maxHeight = '130px';
    standardBody.style.paddingBottom = '12px';
    standard.style.backgroundColor = '#D6E7D2';
    standard.style.borderBottomLeftRadius = '0';
    standard.style.borderBottomRightRadius = '0';
    standardArrow.style.transform = 'rotate(180deg)';
}

function standardClose() {
    standardBody.style.maxHeight = '0';
    standardBody.style.paddingBottom = '0';
    standard.style.backgroundColor = '#EDF2EC';
    standard.style.borderBottomLeftRadius = '20px';
    standard.style.borderBottomRightRadius = '20px';
    standardArrow.style.transform = 'rotate(0)';
}

function proCareOpen() {
    proCareBody.style.maxHeight = '130px';
    proCareBody.style.paddingBottom = '12px';
    proCare.style.backgroundColor = '#D6E7D2';
    proCare.style.borderBottomLeftRadius = '0';
    proCare.style.borderBottomRightRadius = '0';
    proCareArrow.style.transform = 'rotate(180deg)';
}

function proCareClose() {
    proCareBody.style.maxHeight = '0';
    proCareBody.style.paddingBottom = '0';
    proCare.style.backgroundColor = '#EDF2EC';
    proCare.style.borderBottomLeftRadius = '20px';
    proCare.style.borderBottomRightRadius = '20px';
    proCareArrow.style.transform = 'rotate(0)';
}

//open-close basics
basics.addEventListener('click', () => {
    if (window.getComputedStyle(basics).getPropertyValue('background-color') === 'rgb(237, 242, 236)') {
        basicsOpen();
        console.log(basicsOpen)
        standardClose();
        proCareClose();
    } else {
        basicsClose();
    }
})

//open-close standard
standard.addEventListener('click', () => {
    if (window.getComputedStyle(standard).getPropertyValue('background-color') === 'rgb(237, 242, 236)') {
        standardOpen();
        basicsClose();
        proCareClose();
    } else {
        standardClose();
    }
})

//open-close pro-care
proCare.addEventListener('click', () => {
    if (window.getComputedStyle(proCare).getPropertyValue('background-color') === 'rgb(237, 242, 236)') {
        proCareOpen();
        basicsClose();
        standardClose();
    } else {
        proCareClose();
    }
})

// SECTION CONTACT

function cityOpen () {
    contactBody.style.maxHeight = '234px';
    contactBody.style.padding = '27px 0 31px';
    contactHead.style.backgroundColor = '#C1E698';
    contactHead.style.boxShadow = 'none'
    contactArrowClosed.style.display = 'none';
    contactArrowOpened.style.display = 'block';
    contactCard.style.display = 'none';
    if (window.getComputedStyle(document.body).getPropertyValue('min-width') === '768px') {
        contactHead.style.marginBottom = '0';
        contactBody.style.marginBottom = '50px';
    }
}

function cityClose() {
    contactBody.style.maxHeight = '0';
    contactBody.style.padding = '0';
    contactHead.style.backgroundColor = '#D6E7D2';
    contactHead.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)'
    contactArrowClosed.style.display = 'block';
    contactArrowOpened.style.display = 'none';
}

contactHead.addEventListener('click', () => {
    if (window.getComputedStyle(contactArrowOpened).getPropertyValue('display') === 'none') {
        cityOpen();
    } else if (window.getComputedStyle(contactArrowOpened).getPropertyValue('display') === 'block'  && city.innerHTML !== 'City') {
        cityClose();
        contactHead.style.backgroundColor = '#C1E698';
    } else {
        cityClose();
    }
})

canandaigua.addEventListener('click', () => {
    contactHead.style.backgroundColor = '#C1E698';
    contactHead.style.boxShadow = 'none'
    contactArrowClosed.style.display = 'block';
    contactArrowOpened.style.display = 'none';
    city.innerHTML = 'Canandaigua, NY';
    contactBody.style.maxHeight = '0';
    contactBody.style.padding = '0';
    contactCard.style.display = 'flex';
    cardCity.innerHTML = 'Canandaigua, NY';
    cardTel.innerHTML = '+1\t585\t393 0001';
    cardAddress.innerHTML = '151 Charlotte Street';
    call.href = 'tel:+15853930001';
})

ny.addEventListener('click', () => {
    contactHead.style.backgroundColor = '#C1E698';
    contactHead.style.boxShadow = 'none'
    contactArrowClosed.style.display = 'block';
    contactArrowOpened.style.display = 'none';
    city.innerHTML = 'New York City';
    contactBody.style.maxHeight = '0';
    contactBody.style.padding = '0';
    contactCard.style.display = 'flex';
    cardCity.innerHTML = 'New York City';
    cardTel.innerHTML = '+1\t212\t456 0002';
    cardAddress.innerHTML = '9 East 91st Street';
    call.href = 'tel:+12124560002';
})

yonkers.addEventListener('click', () => {
    contactHead.style.backgroundColor = '#C1E698';
    contactHead.style.boxShadow = 'none'
    contactArrowClosed.style.display = 'block';
    contactArrowOpened.style.display = 'none';
    city.innerHTML = 'Yonkers, NY';
    contactBody.style.maxHeight = '0';
    contactBody.style.padding = '0';
    contactCard.style.display = 'flex';
    cardCity.innerHTML = 'Yonkers, NY';
    cardTel.innerHTML = '+1\t914\t678 0003';
    cardAddress.innerHTML = '511 Warburton Ave';
    call.href = 'tel:+19146780003';
})

sherrill.addEventListener('click', () => {
    contactHead.style.backgroundColor = '#C1E698';
    contactHead.style.boxShadow = 'none'
    contactArrowClosed.style.display = 'block';
    contactArrowOpened.style.display = 'none';
    city.innerHTML = 'Sherrill, NY';
    contactBody.style.maxHeight = '0';
    contactBody.style.padding = '0';
    contactCard.style.display = 'flex';
    cardCity.innerHTML = 'Sherrill, NY';
    cardTel.innerHTML = '+1\t315\t908 0004';
    cardAddress.innerHTML = '14 WEST Noyes BLVD';
    call.href = 'tel:+13159080004';
})


console.log('Все тербования выполнены. Общее количество баллов 125\n\nПри нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n' +
    'При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной + 20\n' +
    'Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг. При повторном нажатии на активную кнопку она деактивируется (становится неактивной) а привязанные к ней позиции возвращаются в исходное состояние (входит в состяние blur если есть еще активная кнопка или же перестають быть в блюре если это была единственная нажатая кнопка). +20\n' +
    'Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10\n' +
    'Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n' +
    'При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. +25\n' +
    'Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. +25\n' +
    'В разделе contacts реализован select с выбором городов +25\n' +
    'В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +15\n' +
    'При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +10')