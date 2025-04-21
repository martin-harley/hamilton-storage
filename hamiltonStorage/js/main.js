// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const mainContent = document.querySelector('.main-content');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        if (href === '#home') {
            // Scroll to top smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        
        // Close mobile menu if open
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Header scroll behavior
const scrollThreshold = 50;
const heroHeight = window.innerHeight;

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    // Header behavior
    if (scrolled > scrollThreshold) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Hero parallax effect
    if (scrolled > 0 && scrolled <= heroHeight) {
        hero.classList.add('scrolling');
        const progress = Math.min(scrolled / heroHeight, 1);
        const heroImage = hero.querySelector('.hero-image img');
        heroImage.style.transform = `scale(1.1) translateY(${scrolled * 0.2}px)`;
        
        // Fade out hero content based on scroll progress
        const heroContent = hero.querySelector('.hero-content');
        heroContent.style.opacity = 1 - progress;
        
        // Keep hero fixed
        hero.style.position = 'fixed';
        hero.style.top = '0';
        hero.style.transform = 'translateZ(0)';
    } else if (scrolled === 0) {
        hero.classList.remove('scrolling');
        const heroImage = hero.querySelector('.hero-image img');
        heroImage.style.transform = 'scale(1.1) translateY(0)';
        
        // Reset hero content opacity
        const heroContent = hero.querySelector('.hero-content');
        heroContent.style.opacity = 1;
        
        // Keep hero fixed at top
        hero.style.position = 'fixed';
        hero.style.top = '0';
        hero.style.transform = 'translateZ(0)';
    }
    
    // Handle hero position when scrolled past
    if (scrolled >= heroHeight) {
        hero.style.position = 'absolute';
        hero.style.top = `${heroHeight - 1}px`; // Subtract 1px to prevent gap
        hero.style.transform = 'translateZ(0)';
    }
});

// Update heroHeight on resize
window.addEventListener('resize', () => {
    heroHeight = window.innerHeight;
});

// Form Submission with Storage-specific fields
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Add storage-specific validation
        if (data.phone && !validatePhone(data.phone)) {
            alert('Please enter a valid phone number');
            return;
        }
        
        // Here you would typically send the data to a server
        console.log('Storage inquiry submitted:', data);
        
        // Show success message
        alert('Thank you for your inquiry! Our team will contact you shortly to discuss your storage needs.');
        contactForm.reset();
    });
}

// Phone number validation
function validatePhone(phone) {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    return phoneRegex.test(phone);
}

// Intersection Observer for Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animation
document.querySelectorAll('.service-card, .about-content, .contact-form').forEach(el => {
    observer.observe(el);
});

// Add active class to navigation links based on scroll position
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Storage Unit Size Calculator (if needed)
function calculateStorageSize(length, width, height) {
    return length * width * height;
}

// Service Cards Expansion
document.addEventListener('DOMContentLoaded', function() {
    // Handle service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            serviceCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.remove('active');
                }
            });
            this.classList.toggle('active');
        });
    });

    // Handle location cards
    const locationCards = document.querySelectorAll('.location-card');
    locationCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            locationCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.remove('active');
                }
            });
            this.classList.toggle('active');
        });
    });

    // Close cards when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.service-card') && !e.target.closest('.location-card')) {
            serviceCards.forEach(card => card.classList.remove('active'));
            locationCards.forEach(card => card.classList.remove('active'));
        }
    });
}); 