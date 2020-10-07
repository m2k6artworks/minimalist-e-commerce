// querySelect function
const qselect = (element, elements=false) => {
  if (elements === false) { //single element
    return document.querySelector(element)
  } else { //all elements
    return document.querySelectorAll(element)
  }
}
// price range
const priceRange = qselect('#price-range');
const priceRangeOutput = qselect(".output");

priceRange.addEventListener("input", (e) => {
  e.target.style.background = `linear-gradient(to right, #6558F5 0%, #6558F5 ${e.target.value}%, #fff ${e.target.value}%, #fff 100%)`;
  priceRangeOutput.value = `$ ${e.target.value - 5} - $ ${e.target.value}`;
});