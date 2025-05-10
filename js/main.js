
// DOM Elements
const navbar = document.querySelector('.navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const currentYearEl = document.getElementById('currentYear');

// Update current year in footer
currentYearEl.textContent = new Date().getFullYear();

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  
  // Update icon for mobile menu button
  const menuIcon = mobileMenuBtn.querySelector('i');
  if (mobileMenu.classList.contains('active')) {
    menuIcon.setAttribute('name', 'x');
    lucide.createIcons();
  } else {
    menuIcon.setAttribute('name', 'menu');
    lucide.createIcons();
  }
});

// Close mobile menu when clicking a nav link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    const menuIcon = mobileMenuBtn.querySelector('i');
    menuIcon.setAttribute('name', 'menu');
    lucide.createIcons();
  });
});

// Add background to navbar on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Contact form submission
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
      name: contactForm.name.value,
      email: contactForm.email.value,
      message: contactForm.message.value
    };
    
    // Display form submission (would be replaced with actual form submission)
    alert(`Thank you for your message, ${formData.name}! I'll get back to you soon.`);
    contactForm.reset();
  });
}

// Reveal animations for sections
const revealSections = () => {
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.85) {
      section.classList.add('revealed');
    }
  });
};

// Initial check for visible sections
window.addEventListener('load', revealSections);
window.addEventListener('scroll', revealSections);

// Initialize Lucide icons on load
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});
