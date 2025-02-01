document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const progressBars = document.querySelectorAll('.progress-bar');
    const heroSection = document.querySelector('.hero-section');
    
    let currentSlide = 0;
    let slideInterval = null;
    const slideDelay = 5000;

    function showSlide(index) {
        // Remove active class from all slides and progress bars
        slides.forEach(slide => slide.classList.remove('active'));
        progressBars.forEach(bar => bar.classList.remove('active'));

        // Add active class to current slide and progress bar
        slides[index].classList.add('active');
        progressBars[index].classList.add('active');

        // Update current slide index
        currentSlide = index;
    }

    // Function to advance to next slide
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) {
            next = 0;
        }
        showSlide(next);
    }

    // Function to start slideshow
    function startSlideshow() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
        slideInterval = setInterval(nextSlide, slideDelay);
    }

    // Function to stop slideshow
    function stopSlideshow() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
        slideInterval = null;
    }

    // Add click handlers to progress bars
    progressBars.forEach((bar, index) => {
        bar.addEventListener('click', () => {
            showSlide(index);
            stopSlideshow();
            startSlideshow();
        });
    });

    // Add hover handlers to hero section
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopSlideshow);
        heroSection.addEventListener('mouseleave', startSlideshow);
    }

    // Start the slideshow
    if (slides.length > 0) {
        showSlide(0);
        startSlideshow();
    }
});