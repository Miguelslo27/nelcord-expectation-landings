const slideElements = document.querySelectorAll('.slide');
const slideCounts = slideElements.length;

if (slideCounts) {
  const slideElementsParent = slideElements[0].parentNode;
  const firstElement = slideElementsParent.querySelector('.slide:first-child');
  firstElement?.classList.add('active');

  setTimeout(switchSlides, 100);

  if (slideCounts > 1) {
    setInterval(switchSlides, 5000);
  }

  function switchSlides() {
    const activeSlide = slideElementsParent.querySelector('.active-in');
    const nextSlide = activeSlide?.nextElementSibling || slideElementsParent.querySelector('.slide:first-child');
    
    activeSlide?.classList.remove('active');
    activeSlide?.classList.add('active-out');
    activeSlide?.classList.remove('active-in');
    nextSlide?.classList.add('active-in');

    setTimeout(() => {
      activeSlide?.classList.remove('active-out');
    }, 1000);
  }
}