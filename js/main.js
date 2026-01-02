
// Menu functionality
const menuBtn = document.getElementById('menuBtn');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const navLinks = document.querySelectorAll('.nav-link');

function openMenu() {
    mobileMenu.classList.add('open');
    menuOverlay.classList.remove('hidden');
    setTimeout(() => menuOverlay.classList.add('opacity-100'), 10);
    document.body.style.overflow = 'hidden';
}

function closeMenuFunc() {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('opacity-100');
    setTimeout(() => {
        menuOverlay.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

menuBtn.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFunc);
menuOverlay.addEventListener('click', closeMenuFunc);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenuFunc();
    });
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'dark') {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

// Character counter
const messageTextarea = document.getElementById('message');
const charCount = document.getElementById('charCount');

messageTextarea.addEventListener('input', () => {
    const length = messageTextarea.value.length;
    charCount.textContent = `${length}/500`;
});

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    // e.preventDefault();
    alert('Thank you! Your message has been sent.');
});

// Intersection Observer for section animations
const sections = document.querySelectorAll('.section');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});