document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-card-list');
    const cards = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    
    const cardWidth = cards[0].offsetWidth;

    // Setting initial slide positions
    cards.forEach((slide, index) => {
        setSlidePosition(slide, index);
    });

    function setSlidePosition(slide, index) {
        slide.style.left = cardWidth * index + 'px';
    };

    // Function to move from one slide to another
    function moveToSlide(track, currentSlide, targetSlide) {
        track.classList.remove('slide-transition');
        track.style.transform = `translateX(-${targetSlide.style.left})`;
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
        track.offsetWidth;
    };

    // Handle previous button click
    prevButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;

        if (prevSlide) {
            moveToSlide(track, currentSlide, prevSlide);
        }   else {
            // Loop to the last slide if at the beginning
            moveToSlide(track, currentSlide, track.lastElementChild);
        }
    });

    // Handle next button click
    nextButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;

        if (nextSlide) {
            moveToSlide(track, currentSlide, nextSlide);
        }   else {
            // Loop to the first slide if at the end
            moveToSlide(track, currentSlide, track.firstElementChild);
        }
    });

    cards[0].classList.add('current-slide');

// Accessibility (Keyboard Navigation)
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      prevButton.click(); // Simulate previous button click
    } else if (event.key === 'ArrowRight') {
      nextButton.click(); // Simulate next button click
    }
  });
});
