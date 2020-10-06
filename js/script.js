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

// const cartBtn = qselect('.sideTriggerBtn')
// cartBtn.addEventListener("click", event => {
//   const sideNavClose = M.Carousel.getInstance(sideNavElems)
//   sideNavClose.close();
// })


// carrousel

const carouselElems = qselect('.carousel.carousel-slider')

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

// qselect('#price-range').oninput = function() {
//   this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + this.value + '%, #fff ' + this.value + '%, white 100%)'
// };

const prcRange = qselect('#price-range');
prcRange.addEventListener("input", function() {
  this.style.background = 'linear-gradient(to right, #6558F5 0%, #6558F5 ' + this.value + '%, #fff ' + this.value + '%, #fff 100%)';
});

$('#price-range').on("input", function() {
  $('.output').val("$" + (this.value - 5) + " - $" + this.value);
  }).trigger("change");