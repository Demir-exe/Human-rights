// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get slider elements
    const slides = document.querySelectorAll('.slide');
    const progressBars = document.querySelectorAll('.progress-bar');
    const heroSection = document.querySelector('.hero-section');

    // Initialize variables
    let currentSlide = 0;
    let slideInterval = null;
    const slideDelay = 5000;

    // Function to show a specific slide
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
    showSlide(0);
    startSlideshow();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu functionality
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Search functionality (simplified version)
    const searchToggle = document.querySelector('.search-toggle');
    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            alert('Search feature coming soon!');
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        } else {
            navbar.style.backgroundColor = 'var(--background-color)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Sample articles data
    const articles = [
        {
            title: 'Understanding Universal Human Rights',
            excerpt: 'An introduction to the fundamental human rights that everyone is entitled to...',
            date: '2025-01-21'
        },
        {
            title: 'The Impact of Education on Human Rights',
            excerpt: 'Exploring how education plays a crucial role in advancing human rights...',
            date: '2025-01-20'
        },
        {
            title: 'Global Efforts for Gender Equality',
            excerpt: 'Examining worldwide initiatives promoting gender equality and women\'s rights...',
            date: '2025-01-19'
        }
    ];

    // Populate articles section
    const articlesGrid = document.querySelector('.articles-grid');
    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        articleCard.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <span class="article-date">${formatDate(article.date)}</span>
            <button class="secondary-button">Read More</button>
        `;
        articlesGrid.appendChild(articleCard);
    });

    // Sample events data
    const events = [
        {
            title: 'Human Rights Conference 2025',
            date: '2025-03-15',
            location: 'Virtual Event',
            description: 'Join us for our annual conference on human rights advancement.'
        },
        {
            title: 'Workshop: Advocacy Skills',
            date: '2025-02-28',
            location: 'Online',
            description: 'Learn effective advocacy techniques for human rights causes.'
        }
    ];

    // Populate events section
    const eventsGrid = document.querySelector('.events-grid');
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p><i class="fas fa-calendar"></i> ${formatDate(event.date)}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
            <p>${event.description}</p>
            <button class="secondary-button">Register Now</button>
        `;
        eventsGrid.appendChild(eventCard);
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form submission logic here
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });

    // Helper function to format dates
    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
});
