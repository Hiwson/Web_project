const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slider = document.querySelector('slide');
let scrollAmount = 0;
const scrollStep = 220;/*one can adjust the value according
to card margin and width*/
const maxScroll = Slider.scrollWidth - slider.clientWidth;
prevButton.addEventListener('click', () => {
  scrollAmount -= scrollStep;
  if (scrollAmount < 0) scrollAmount = 0;
  slider.style.transform = `translateX(-${scrollAmount}px)`
  ;
});
nextButton.addEventListener('click', () => {
  scrollAmount += scrollStep;
  if (scrollAmount > maxScroll) scrollAmount = maxScroll;
  slider.style.transform = `translateX(-${scrollAmount}px)`
    ;
});slide//change this
//no 2 slide
let currentSlider = 0;
function slide(direction) {
  const slider = document.querySelector('.slider');
  const cards = document.querySelectorAll('.slide-pic');
  const totalSlides = slide-pic.length;
  const cardWidth = cards[0].clientWidth;
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = totalSlides - q;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  const newTransformValue = -currentSlide * cardWidth;
  slider.style.transform = `translateX
    (${newTransformValue}px)`;
}