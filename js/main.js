document.addEventListener('DOMContentLoaded', () => {
    
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
            <p><i class="fas fa-calendar"></i> ${event.date}</p>
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

    // Bağış formu işlemleri
    const donationForm = document.querySelector('.donation-form');
    if (donationForm) {
        // Form gönderme işlemi
        donationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Bağışınız için teşekkür ederiz! İşleminiz alınmıştır.');
            donationForm.reset();
        });
    }
});
