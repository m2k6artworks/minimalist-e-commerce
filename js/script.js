// querySelect function
const qselect = (element, elements=false) => {
  if (elements === false) { //single element
    return document.querySelector(element)
  } else { //all elements
    return document.querySelectorAll(element)
  }
}

// side nav

const sideNavElems = qselect('.sidenav')
const bodyElems = qselect('body')

const sideNavWidth = (width) => {
  sideNavElems.style.width = `${width}`,
  bodyElems.style.cssText = `padding-right: ${width};`
}

document.addEventListener('DOMContentLoaded', () => {
  const sideNavInstances = M.Sidenav.init(sideNavElems, {
    edge: 'right',
    onOpenEnd: () => { sideNavElems.style.width = "300px";
                         bodyElems.style.cssText = "padding-right: 300px;";},
    onCloseStart: () => { sideNavElems.style.width = "0px";
                          bodyElems.style.cssText = "padding-right: 0px;";}
    // onOpenStart: () => { alert('Open Start'); },
    // onOpenEnd: () => { alert('Open End'); },
    // onCloseStart: () => { alert('Close Start'); },
    // onCloseEnd: () => { alert('Close End'); }
  })
})

const sideNavOverlay = qselect('.sidenav-overlay');
const cartBtnM = qselect('#triggerCartM')
const cartBtnIcons = qselect('#triggerCartM .material-icons')
const cartMobile = qselect('.cart-mobile')
const cartBtnContent = qselect('.cart-mobile-content',true)
const cartBtnThumb = qselect('.cart-mobile-thumb',true)

cartBtnM.addEventListener("click", event => {
  if (cartMobile.classList.contains('cart-mobile-expand')) {
    cartMobile.classList.remove('cart-mobile-expand');
    cartBtnContent.forEach(cartCT => { cartCT.style.display = 'none' })
    cartBtnThumb.forEach(cartTM => { cartTM.style.display = 'block' })
    cartBtnM.style.cssText = "position: unset; right: 0; top: 0; transform: rotate(0deg); transition: var(--trans-cubic);"
    cartBtnIcons.style.cssText = "font-size: 3vmax"
    // sideNavOverlay.style.display = 'none'
  } else {
    cartMobile.classList.add('cart-mobile-expand');
    cartBtnContent.forEach(cartCT => { cartCT.style.display = 'block' })
    cartBtnThumb.forEach(cartTM => { cartTM.style.display = 'none' })
    cartBtnM.style.cssText = "position: absolute; right: 10vw; top: 10vw; transform: rotate(180deg); transition: var(--trans-cubic);"
    cartBtnIcons.style.cssText = "font-size: 4vmax"
    // sideNavOverlay.style.display = 'block'
    // sideNavOverlay.style.cssText = "display: block; z-index: 9; opacity: 1;"
  }
})

// const cartBtn = qselect('.sideTriggerBtn')
// cartBtn.addEventListener("click", event => {
//   const sideNavClose = M.Carousel.getInstance(sideNavElems)
//   if (sideNavOverlay.style.display = 'block') {
//     sideNavClose.close();
//   } else {
//     sideNavClose.open();
//   }
// })


// carousel

const carouselElems = qselect('.carousel.carousel-slider.carousel-banner')

document.addEventListener('DOMContentLoaded', () => {
  const carouselInstance = M.Carousel.init(carouselElems, {
      duration: 300,
      shift: 30,
      fullWidth: true,
      indicators: false
  }, true, true)
})

//next button
const nextBtn = qselect('.moveNextCarousel')
nextBtn.addEventListener("click", event => {
  const moveRight = M.Carousel.getInstance(carouselElems)
  moveRight.next(1)
})

//prev button
const prevBtn = qselect('.movePrevCarousel')
prevBtn.addEventListener("click", event => {
  const moveLeft = M.Carousel.getInstance(carouselElems)
  moveLeft.prev(1)
})

// price range
const priceRange = qselect('#price-range');
const priceRangeOutput = qselect(".output");

priceRange.addEventListener("input", (e) => {
  e.target.style.background = `linear-gradient(to right, #6558F5 0%, #6558F5 ${e.target.value}%, #fff ${e.target.value}%, #fff 100%)`;
  priceRangeOutput.value = `IDR ${e.target.value - 5} - ${e.target.value}`;
});

var imageZoom = document.querySelectorAll('.materialboxed',true);
document.addEventListener('DOMContentLoaded', function() {
  var instances = M.Materialbox.init(imageZoom, {
    inDuration: 300
  });
});

let slider = tns({
  container: '.my-slider',
  items: 6,
  hasControls: false,
  prevButton: ".prev-arrow",
  nextButton: ".next-arrow",
  nav: false,
  slideBy: 1,
  mouseDrag: true,
  loop: false,
  responsive: {
    200:{
      items: 2
    },
    350: {
      items: 3
    },
    600: {
      items: 4
    },
    900: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
});

const categoryCard = qselect('.my-slider .card', true)
categoryCard.forEach(catBtn => {
  catBtn.addEventListener("click", event => {
    categoryCard.forEach(catBtns => {
      catBtns.classList.remove('card-active');
    })
    catBtn.classList.add('card-active');
  })
})

const favoriteBtn = qselect('.stuff-section .btn-floating i', true)
favoriteBtn.forEach(favBtn => {
  favBtn.addEventListener("click", event => {
    if (favBtn.classList.contains('liked')) {
      favBtn.classList.remove('zoom-anim')
      void event.target.offsetWidth;
      favBtn.classList.remove('liked')
      favBtn.classList.add('zoom-anim')
    } else {
      favBtn.classList.add('liked')
      favBtn.classList.remove('zoom-anim')
      void event.target.offsetWidth;
      favBtn.classList.add('zoom-anim')
    }
  })
})