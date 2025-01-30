document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navContainer = document.querySelector('.nav-container');

    // Toggle menu
    navToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navContainer.classList.toggle('active');
        // Optional: Toggle aria-expanded for accessibility
        const isExpanded = navContainer.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navContainer.contains(event.target) && !navToggle.contains(event.target)) {
            navContainer.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navContainer.classList.contains('active')) {
            navContainer.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navContainer.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Dropdown toggle for mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.closest('.dropdown');
            
            // Close other dropdowns
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    otherToggle.closest('.dropdown').classList.remove('active');
                }
            });

            // Toggle current dropdown
            dropdown.classList.toggle('active');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdownToggles.forEach(toggle => {
                toggle.closest('.dropdown').classList.remove('active');
            });
        }
    });
});
