document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbara');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        } else {
            navbar.style.backgroundColor = 'var(--background-color)';
            navbar.style.boxShadow = 'none';
        }
    });

    //! BURASI ANA SAYFADA HATA VERİYOR 
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

    // Translations
    const translations = {
        en: {
            footerContact: "Contact Us",
            navTitle: "Human Rights",
            home: "Home",
            about: "About Us",
            articles: "Articles",
            events: "Events",
            rights: "Rights",
            getInvolved: "Get Involved",
            contact: "Contact",
            contactTitle: "Contact Us",
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            sendMessage: "Send Message",
            thankYouMessage: "Thank you for your message. We will get back to you soon!",
        },
        tr: {
            footerContact: "Bizimle iletişime geçin",
            navTitle: "İnsan Hakları",
            home: "Ana Sayfa",
            about: "Hakkımızda",
            articles: "Makaleler",
            events: "Etkinlikler",
            rights: "Haklar",
            getInvolved: "Katılın",
            contact: "İletişim",
            contactTitle: "İletişim",
            namePlaceholder: "Adınız",
            emailPlaceholder: "E-posta Adresiniz",
            messagePlaceholder: "Mesajınız",
            sendMessage: "Mesaj Gönder",
            thankYouMessage: "Mesajınız için teşekkür ederiz. En kısa sürede size geri döneceğiz!",
        },
    };

    let currentLang = 'en';

    // Function to update content based on selected language
    function updateContent(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Update language button text
        const langBtn = document.querySelector('.language-selector');
        langBtn.textContent = lang.toUpperCase() + ' ';
        const icon = document.createElement('i');
        icon.className = 'fas fa-globe';
        langBtn.appendChild(icon);
    }

    // Language selector functionality
    document.querySelector('.language-selector').addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'tr' : 'en';
        updateContent(newLang);
    });

    // Search functionality (simplified version)
    document.querySelector('.search-toggle').addEventListener('click', () => {
        alert('Search feature coming soon!');
    });
});
