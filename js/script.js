// querySelect function
const qselect = (element, elements=false) => {
  if (elements === false) { //single element
    return document.querySelector(element)
  } else { //all elements
    return document.querySelectorAll(element)
  }
}

const carouselElems = qselect('.carousel.carousel-slider')

// start carrousel
document.addEventListener('DOMContentLoaded', () => {
  const carouselInstance = M.Carousel.init(carouselElems, {
      fullWidth: true,
      indicators: true
  })
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