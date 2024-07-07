import '../scss/style.scss'

const windowInnerWidth = window.innerWidth

if (windowInnerWidth < 768) {
  new Swiper('.brand-main-menu', {
    // отображение слайда - заполнение дост пространства
    slidesPerView: 'auto',

    // обертка для слайдера
    wrapperClass: 'brand-main-menu__list',

    // класс слайда
    slideClass: 'brand-main-menu__item',
    // расстояние между слайдами
    spaceBetween: 16,

    pagination: {
      el: '.pagination-slider',
      clickable: true
    }
  })
}
if (windowInnerWidth < 768) {
  new Swiper('.devices-main-menu', {
    // отображение слайда - заполнение дост пространства
    slidesPerView: 'auto',

    // обертка для слайдера
    wrapperClass: 'devices-main-menu__list',

    // класс слайда
    slideClass: 'devices-main-menu__item',
    // расстояние между слайдами
    spaceBetween: 16,

    pagination: {
      el: '.pagination-devices-slider',
      clickable: true
    }
  })
}
if (windowInnerWidth < 768) {
  new Swiper('.price-main-menu', {
    // отображение слайда - заполнение дост пространства
    slidesPerView: 'auto',

    // обертка для слайдера
    wrapperClass: 'price-main-menu__list',

    // класс слайда
    slideClass: 'price-main-menu__item',
    // расстояние между слайдами
    spaceBetween: 16,

    pagination: {
      el: '.pagination-price-slider',
      clickable: true
    }
  })
}

;('use strict')
const abouText = document.querySelector('.about__text')
const about = document.querySelector('.about__button')

console.dir(abouText)
console.dir(about)
about.addEventListener('click', function (event) {
  abouText.classList.toggle('about__text--hidden')
  about.classList.toggle('about__button--inverted')

  if (abouText.classList.contains('about__text--hidden')) {
    about.textContent = 'Читать далее'
  } else {
    about.textContent = 'Скрыть всё'
  }
})

const buttonBrands = document.querySelector('.button-arrow-scroll')
const listBrands = document.querySelector('.brand-main-menu')

console.dir(buttonBrands)
console.dir(listBrands)

buttonBrands.addEventListener('click', function (event) {
  listBrands.classList.toggle('brand-main-menu--height')
  buttonBrands.classList.toggle('button--inverted')

  if (listBrands.classList.contains('brand-main-menu--height')) {
    buttonBrands.textContent = 'Скрыть все'
  } else {
    buttonBrands.textContent = 'Показать все'
  }
})
const buttonDevices = document.querySelector('.devices-arrow-scroll')
const listDevices = document.querySelector('.devices-main-menu')

console.dir(buttonDevices)
console.dir(listDevices)

buttonDevices.addEventListener('click', function (event) {
  listDevices.classList.toggle('devices-main-menu--height')
  buttonDevices.classList.toggle('button--inverted')

  if (listDevices.classList.contains('devices-main-menu--height')) {
    buttonDevices.textContent = 'Скрыть все'
  } else {
    buttonDevices.textContent = 'Показать все'
  }
})
let main = document.querySelector('.content')
let elem = document.querySelector('.sidebar__menu')

const sideMenuButton = document.querySelector('.side-menu')
const sidebarClouse = document.querySelector('.sidebar-clouse')
sideMenuButton.addEventListener('click', function (event) {
  event.stopPropagation()
  document.querySelector('.sidebar__menu').style.display = 'flex'
  document
    .querySelector('.sidebar__menu')
    .animate([{ left: '-300px' }, { left: '0px' }], {
      duration: 500,
      easing: 'ease',
      fill: 'both'
    })
  main.classList.add('overlay')
})

sidebarClouse.addEventListener('click', function (event) {
  event.stopPropagation()
  document
    .querySelector('.sidebar__menu')
    .animate([{ left: '0' }, { left: '-320px' }], {
      duration: 500,
      easing: 'ease',
      fill: 'both'
    })
  setTimeout(function () {
    main.classList.remove('overlay')
    document.querySelector('.sidebar__menu').style.display = 'none'
  }, 500)
})

const phoneButton = document.querySelectorAll('.button-menu--icon--phone')

const tap = function (event) {
  event.stopPropagation()
  document
    .querySelector('.call')
    .animate([{ right: '-300px' }, { right: '0px' }], {
      duration: 500,
      easing: 'ease',
      fill: 'both'
    })
  document.querySelector('.call').style.display = 'flex'
  main.classList.add('overlay')
  if (
    getComputedStyle(elem).display === 'flex' ||
    getComputedStyle(elem).display === 'block'
  ) {
    elem.classList.add('overlay')
  }
}

phoneButton.forEach((button) => {
  button.addEventListener('click', tap)
})

const tapTow = function (event) {
  event.stopPropagation()
  document
    .querySelector('.feedback')
    .animate([{ right: '-300px' }, { right: '0px' }], {
      duration: 500,
      easing: 'ease',
      fill: 'both'
    })
  document.querySelector('.feedback').style.display = 'flex'
  main.classList.add('overlay')
  if (
    getComputedStyle(elem).display === 'flex' ||
    getComputedStyle(elem).display === 'block'
  ) {
    elem.classList.add('overlay')
  }
}

const messageButton = document.querySelectorAll('.button-menu--icon--message')
messageButton.forEach((button) => {
  button.addEventListener('click', tapTow)
})
const callClouse = document.querySelector('.call-clouse')
callClouse.addEventListener('click', function (event) {
  event.stopPropagation()
  document
    .querySelector('.call')
    .animate([{ right: '0px' }, { right: '-500px' }], {
      duration: 500,
      easing: 'ease',
      fill: 'both'
    })
  setTimeout(function () {
    document.querySelector('.call').style.display = 'none'
    elem.classList.remove('overlay')
    const elemStyles = getComputedStyle(elem).display
    if (elemStyles == 'none' || elemStyles == 'block') {
      main.classList.remove('overlay')
    }
  }, 500)
})

const feedbackClouse = document.querySelector('.feedback-clouse')
feedbackClouse.addEventListener('click', function (event) {
  event.stopPropagation()
  document
    .querySelector('.feedback')
    .animate([{ right: '0px' }, { right: '-500px' }], {
      duration: 500,
      easing: 'ease',
      fill: 'both'
    })
  setTimeout(function () {
    document.querySelector('.feedback').style.display = 'none'
    elem.classList.remove('overlay')
    const elemStyles = getComputedStyle(elem).display
    if (elemStyles == 'none' || elemStyles == 'block') {
      main.classList.remove('overlay')
    }
  }, 500)
})

let callStyle = document.querySelector('.call')
let feedbackStyle = document.querySelector('.feedback')

main.addEventListener('click', function (event) {
  const callStyles = getComputedStyle(callStyle).display
  const feedbackStyles = getComputedStyle(feedbackStyle).display
  const elemStyles = getComputedStyle(elem).display

  if (callStyles == 'flex' && elemStyles == 'none') {
    document
      .querySelector('.call')
      .animate([{ right: '0px' }, { right: '-500px' }], {
        duration: 500,
        easing: 'ease',
        fill: 'both'
      })
    setTimeout(function () {
      callStyle.style.display = 'none'
      main.classList.remove('overlay')
    }, 500)
  }
  if (feedbackStyles == 'flex' && elemStyles == 'none') {
    document
      .querySelector('.feedback')
      .animate([{ right: '0px' }, { right: '-500px' }], {
        duration: 500,
        easing: 'ease',
        fill: 'both'
      })
    setTimeout(function () {
      feedbackStyle.style.display = 'none'
      main.classList.remove('overlay')
    }, 500)
  }
  if (callStyles == 'flex' && elemStyles == 'flex') {
    document
      .querySelector('.call')
      .animate([{ right: '0px' }, { right: '-500px' }], {
        duration: 500,
        easing: 'ease',
        fill: 'both'
      })
    setTimeout(function () {
      callStyle.style.display = 'none'
      elem.classList.remove('overlay')
    }, 500)
  }
  if (feedbackStyles == 'flex' && elemStyles == 'flex') {
    document
      .querySelector('.feedback')
      .animate([{ right: '0px' }, { right: '-500px' }], {
        duration: 500,
        easing: 'ease',
        fill: 'both'
      })
    setTimeout(function () {
      feedbackStyle.style.display = 'none'
      elem.classList.remove('overlay')
    }, 500)
  }
  if (
    callStyles == 'none' &&
    feedbackStyles == 'none' &&
    elemStyles == 'flex'
  ) {
    document
      .querySelector('.sidebar__menu')
      .animate([{ left: '0' }, { left: '-320px' }], {
        duration: 500,
        easing: 'ease',
        fill: 'both'
      })
    setTimeout(function () {
      elem.style.display = 'none'
      main.classList.remove('overlay')
    }, 500)
  }

  if (
    (feedbackStyles == 'flex' || callStyles == 'flex') &&
    elemStyles == 'block'
  ) {
    document
      .querySelector('.feedback')
      .animate([{ right: '0px' }, { right: '-500px' }], {
        duration: 500,
        easing: 'ease',
        fill: 'both'
      })
    document
      .querySelector('.call')
      .animate([{ right: '0px' }, { right: '-500px' }], {
        duration: 500,
        easing: 'ease',
        fill: 'both'
      })
    setTimeout(function () {
      callStyle.style.display = 'none'
      feedbackStyle.style.display = 'none'
      main.classList.remove('overlay')
      elem.classList.remove('overlay')
    }, 500)
  }
})
