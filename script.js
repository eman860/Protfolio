// JavaScript extracted from index.html

// ========== Mobile Menu Toggle ==========
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ========== Navbar Scroll Effect ==========
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========== Typewriter Effect ==========
const typewriterElement = document.getElementById('typewriter');
const roles = ['Full-Stack Developer', 'Java | JSP', 'Web Developer', 'Problem Solver'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before next word
    }

    setTimeout(typeWriter, typingSpeed);
}

// Start typewriter
setTimeout(typeWriter, 1000);

// ========== Scroll Reveal Animation ==========
// Use IntersectionObserver for performant reveals and staggered animations
const observerOptions = { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.08 };

const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // if it's a stagger container, reveal children with delays handled by CSS
            if (entry.target.classList.contains('stagger')) {
                // nothing extra — CSS handles stagger delays
            }
            obs.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal, .stagger').forEach(el => revealObserver.observe(el));

// Navbar entrance animation
setTimeout(() => { document.querySelector('nav').classList.add('visible'); }, 200);

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinksArr = document.querySelectorAll('.nav-links a');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinksArr.forEach(a => a.classList.remove('active'));
            const id = entry.target.getAttribute('id');
            const link = document.querySelector('.nav-links a[href="#' + id + '"]');
            if (link) link.classList.add('active');
        }
    });
}, { threshold: 0.45 });
sections.forEach(s => sectionObserver.observe(s));

// ========== Skill Bars Animation ==========
const skillFills = document.querySelectorAll('.skill-fill');
// animate skill fills when visible
const skillsObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-fill').forEach(fill => {
                const width = fill.getAttribute('data-width');
                fill.style.width = width + '%';
            });
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });
document.querySelectorAll('.skills-grid .glass-card').forEach(card => skillsObserver.observe(card));

// ========== Contact Form ==========
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Success message (in a real app, you'd send this to a server)
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon!`);
    contactForm.reset();
});

// ========== Smooth Scroll for Safari ==========
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

// ========== Project card 3D tilt (subtle) ==========
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
if (!isTouch) {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const rotateY = (x - 0.5) * 6; // subtle
            const rotateX = (0.5 - y) * 6;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            card.classList.add('tilt');
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.classList.remove('tilt');
        });
    });
}

// ========== Counter animation for stats ========
function animateCount(el, to) {
    let start = 0;
    const duration = 700;
    const startTime = performance.now();
    function step(t) {
        const progress = Math.min((t - startTime) / duration, 1);
        const value = Math.floor(progress * to);
        el.textContent = value + (to > 0 && el.dataset.suffix ? el.dataset.suffix : '');
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = to + (el.dataset.suffix || '');
    }
    requestAnimationFrame(step);
}

const countObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-value').forEach(el => {
                const num = parseInt(el.textContent.replace(/\D/g, '')) || 0;
                if (num > 0) animateCount(el, num);
            });
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
document.querySelectorAll('#problem-solving, #about').forEach(s => countObserver.observe(s));

// ========== Cursor follower ==========
const cursor = document.getElementById('cursor-follower');
if (cursor && !isTouch) {
    let mouseX = 0, mouseY = 0, posX = 0, posY = 0;
    window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; cursor.style.opacity = '1'; });
    function follow() {
        posX += (mouseX - posX) * 0.12;
        posY += (mouseY - posY) * 0.12;
        cursor.style.transform = `translate(${posX}px, ${posY}px)`;
        requestAnimationFrame(follow);
    }
    requestAnimationFrame(follow);
    // Hide on mousedown for less distraction
    window.addEventListener('mousedown', () => cursor.style.opacity = '0.3');
    window.addEventListener('mouseup', () => cursor.style.opacity = '1');
}

// ========== Back to top button ==========
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) backBtn.classList.add('visible'); else backBtn.classList.remove('visible');
});
backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Page transition: add loaded class
window.addEventListener('load', () => { document.body.classList.add('loaded'); });
