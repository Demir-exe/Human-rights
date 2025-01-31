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
            home: "Home",
            about: "About Us",
            articles: "Articles",
            events: "Events",
            rights: "Rights",
            getInvolved: "Get Involved",
            contact: "Contact",
            heroTitle: "There Are No Winners in War!",
            heroSubtitle: "While war may promise victories, it leaves behind only pain, loss, and destruction. Human dignity is lost in conflicts, and innocents pay the heaviest price. As cities turn to ruins, future generations try to build a life from the ashes of the past. Let's remember, true victory comes with peace, not conflict!",
            getInvolvedBtn: "Get Involved",
            aboutTitle: "About Us",
            aboutText: "We are dedicated to promoting and protecting human rights worldwide through education, advocacy, and action.",
            justice: "Justice",
            justiceText: "Advocating for fair treatment and equality under law",
            unity: "Unity",
            unityText: "Building bridges across communities",
            peace: "Peace",
            peaceText: "Promoting peaceful resolution and understanding",
            war: "War",
            warText: "Stop the war! Every life matters, peace is our ultimate goal",
            women: "Women's Rights",
            womenText: "Empowering women for a stronger, more equal society",
            children: "Children's Rights",
            childrenText: "Protecting our future: Every child deserves education and safety",
            articlesTitle: "Latest Articles",
            eventsTitle: "Upcoming Events",
            getInvolvedTitle: "Get Involved",
            volunteer: "Volunteer",
            volunteerText: "Join our community of volunteers",
            donate: "Donate",
            donateText: "Support our mission",
            petitions: "Sign Petitions",
            petitionsText: "Make your voice heard",
            learnMore: "Learn More",
            donateNow: "Donate Now",
            viewPetitions: "View Petitions",
            contactTitle: "Contact Us",
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            sendMessage: "Send Message",
            thankYouMessage: "Thank you for your message. We will get back to you soon!",
            rightsTitle: "Fundamental Human Rights",
            equalityTitle: "Right to Equality",
            equalityText: "Every human being has equal rights regardless of race, color, gender, language, religion, political or other opinion.",
            equalityImageAlt: "Right to Equality",
            
            womenRightsTitle: "Women's Rights",
            womenRightsText: "Women having equal rights with men in economic, social, cultural and political life is a fundamental human right.",
            womenRightsImageAlt: "Women's Rights",
            
            childrenRightsTitle: "Children's Rights",
            childrenRightsText: "Every child has the right to grow up in a healthy environment, receive education and be protected from violence.",
            childrenRightsImageAlt: "Children's Rights",
            
            educationTitle: "Right to Education",
            educationText: "Everyone has the right to education. Education shall be free, at least in the elementary and fundamental stages.",
            educationImageAlt: "Right to Education",
            
            housingTitle: "Right to Housing",
            housingText: "Everyone has the right to a standard of living adequate for themselves and their family, including housing.",
            housingImageAlt: "Right to Housing",
            
            healthTitle: "Right to Health",
            healthText: "Everyone has the right to the highest attainable standard of health and should have access to healthcare services.",
            healthImageAlt: "Right to Health",
            housingSlideTitle: "Right to Housing",
            housingSlideText: "Everyone has the right to adequate housing. A safe and secure home is fundamental for human dignity, physical and mental health, and overall quality of life.",
            womenSlideTitle: "Women's Rights are Human Rights",
            womenSlideText: "Equal rights for women is fundamental for society's development. We cannot speak of true democracy and human rights without gender equality.",
            childrenSlideTitle: "Children are Our Future",
            childrenSlideText: "Every child has the right to grow up in a safe environment, receive education, and be raised with love. Children's rights are the most important investment in humanity's future.",
            freedomTitle : "Right to Freedom",
            freedomText :"Freedom of expression includes the right of individuals to express and share their thoughts freely.",
            refugeeTitle : "Right to Refugee",
            refugeeText : "Refugee rights are the right of individuals displaced by persecution and war to live in safety and access basic services.",
            warAndCivilTitle : "Right to War and Civil Rights",
            warAndCivilText:"These are principles that aim to protect the rights of civilians to life, security and access to basic needs in conflict situations."
        },
        tr: {
            home: "Ana Sayfa",
            about: "Hakkımızda",
            articles: "Makaleler",
            events: "Etkinlikler",
            rights: "Haklar",
            getInvolved: "Katılın",
            contact: "İletişim",
            heroTitle: "Savaşta Kazanan Olmaz!",
            heroSubtitle: "Savaş, zaferler vaat eder gibi görünse de geride yalnızca acı, kayıp ve yıkım bırakır. İnsanlık onuru çatışmaların içinde kaybolur, masumlar en ağır bedeli öder. Şehirler harabeye dönerken, gelecek nesiller geçmişin küllerinden bir hayat kurmaya çalışır. Unutmayalım, gerçek zafer barışla gelir, çatışma ile değil!",
            getInvolvedBtn: "Katılın",
            aboutTitle: "Hakkımızda",
            aboutText: "Eğitim, savunuculuk ve eylem yoluyla dünya çapında insan haklarını korumaya ve geliştirmeye adanmış bir kuruluşuz.",
            justice: "Adalet",
            justiceText: "Yasa önünde adil muamele ve eşitliği savunuyoruz",
            unity: "Birlik",
            unityText: "Topluluklar arasında köprüler kuruyoruz",
            peace: "Barış",
            peaceText: "Barışçıl çözüm ve anlayışı teşvik ediyoruz",
            war: "Savaş",
            warText: "Savaşa dur de! Her can değerlidir, barış tek hedefimizdir",
            women: "Kadın Hakları",
            womenText: "Daha güçlü ve eşit bir toplum için kadınları güçlendiriyoruz",
            children: "Çocuk Hakları",
            childrenText: "Geleceğimizi koruyoruz: Her çocuk eğitim ve güvenlik hakkına sahiptir",
            articlesTitle: "Son Makaleler",
            eventsTitle: "Yaklaşan Etkinlikler",
            getInvolvedTitle: "Katılın",
            volunteer: "Gönüllü Olun",
            volunteerText: "Gönüllü topluluğumuza katılın",
            donate: "Bağış Yapın",
            donateText: "Misyonumuzu destekleyin",
            petitions: "İmza Kampanyaları",
            petitionsText: "Sesinizi duyurun",
            learnMore: "Daha Fazla Bilgi",
            donateNow: "Şimdi Bağış Yapın",
            viewPetitions: "İmza Kampanyalarını Görüntüle",
            contactTitle: "İletişim",
            namePlaceholder: "Adınız",
            emailPlaceholder: "E-posta Adresiniz",
            messagePlaceholder: "Mesajınız",
            sendMessage: "Mesaj Gönder",
            thankYouMessage: "Mesajınız için teşekkür ederiz. En kısa sürede size geri döneceğiz!",
            rightsTitle: "Temel İnsan Hakları",
            equalityTitle: "Eşitlik Hakkı",
            equalityText: "Her insan, ırk, renk, cinsiyet, dil, din, siyasi veya diğer görüş ayrımı gözetilmeksizin eşit haklara sahiptir.",
            equalityImageAlt: "Eşitlik Hakkı",
            
            womenRightsTitle: "Kadın Hakları",
            womenRightsText: "Kadınların ekonomik, sosyal, kültürel ve siyasi hayatta erkeklerle eşit haklara sahip olması temel bir insan hakkıdır.",
            womenRightsImageAlt: "Kadın Hakları",
            
            childrenRightsTitle: "Çocuk Hakları",
            childrenRightsText: "Her çocuk, sağlıklı bir ortamda büyüme, eğitim alma ve şiddetten korunma hakkına sahiptir.",
            childrenRightsImageAlt: "Çocuk Hakları",
            
            educationTitle: "Eğitim Hakkı",
            educationText: "Herkes eğitim hakkına sahiptir. Eğitim, en azından ilk ve temel eğitim aşamasında ücretsiz olmalıdır.",
            educationImageAlt: "Eğitim Hakkı",
            
            housingTitle: "Barınma Hakkı",
            housingText: "Her insan, kendisi ve ailesi için yeterli yaşam standardına sahip olma hakkına sahiptir, bu barınma hakkını da içerir.",
            housingImageAlt: "Barınma Hakkı",
            
            healthTitle: "Sağlık Hakkı",
            healthText: "Herkes, mümkün olan en yüksek sağlık standardına ulaşma hakkına sahiptir ve sağlık hizmetlerine erişebilmelidir.",
            healthImageAlt: "Sağlık Hakkı",
            housingSlideTitle: "Barınma Hakkı Temel İnsan Hakkıdır",
            housingSlideText: "Herkes yeterli barınma hakkına sahiptir. Güvenli ve emniyetli bir yuva, insan onuru, fiziksel ve zihinsel sağlık ve genel yaşam kalitesi için temeldir.",
            womenSlideTitle: "Kadın Hakları İnsan Haklarıdır",
            womenSlideText: "Kadınların eşit haklara sahip olması, toplumun gelişmesi için temel bir gerekliliktir. Cinsiyet eşitliği olmadan gerçek bir demokrasiden ve insan haklarından bahsedemeyiz.",
            childrenSlideTitle: "Çocuklar Geleceğimizdir",
            childrenSlideText: "Her çocuk, güvenli bir ortamda büyüme, eğitim alma ve sevgiyle büyütülme hakkına sahiptir. Çocuk hakları, insanlığın geleceğine yapılan en önemli yatırımdır.",

            freedomTitle : "İfade Hakkı",
            freedomText :"İfade özgürlüğü, bireylerin düşüncelerini özgürce ifade etme ve paylaşma hakkını kapsar.",
            refugeeTitle : "Mülteci Hakkı",
            refugeeText : "Mülteci hakları, zulüm veya savaş nedeniyle yerinden edilen bireylerin güvenli yaşam ve temel hizmetlere erişim hakkıdır.",
            warAndCivilTitle : "Savaş ve Sivil Haklar",
            warAndCivilText:"Çatışma durumlarında sivillerin yaşam, güvenlik ve temel ihtiyaçlarına erişim haklarının korunmasını amaçlayan prensiplerdir."
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
