
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

// Contact form submission with modern toast notification
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
      name: contactForm.name.value,
      email: contactForm.email.value,
      message: contactForm.message.value
    };
    
    // Create toast notification instead of alert
    showToast(`Thank you for your message, ${formData.name}! I'll get back to you soon.`, 'success');
    contactForm.reset();
  });
}

// Toast notification function
function showToast(message, type = 'default') {
  const toast = document.createElement('div');
  toast.classList.add('toast', `toast-${type}`);
  
  const iconType = type === 'success' ? 'check' : 'info';
  
  toast.innerHTML = `
    <div class="toast-content">
      <i data-lucide="${iconType}" class="toast-icon"></i>
      <span>${message}</span>
    </div>
    <button class="toast-close">
      <i data-lucide="x" class="toast-close-icon"></i>
    </button>
  `;
  
  document.body.appendChild(toast);
  lucide.createIcons();
  
  // Show the toast
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  // Auto dismiss after 5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 5000);
  
  // Close button
  const closeBtn = toast.querySelector('.toast-close');
  closeBtn.addEventListener('click', () => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  });
}

// Enhanced reveal animations for sections with intersection observer
const revealSections = () => {
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        
        // Stagger child animations if they exist
        const animatedElements = entry.target.querySelectorAll('.animate-stagger');
        if (animatedElements.length > 0) {
          animatedElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('revealed');
            }, 150 * index);
          });
        }
        
        // Unobserve after revealing
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });
  
  sections.forEach(section => {
    observer.observe(section);
  });
};

// Particle background for hero section
function initParticles() {
  const heroSection = document.getElementById('home');
  if (!heroSection) return;
  
  const canvas = document.createElement('canvas');
  canvas.classList.add('particles-canvas');
  heroSection.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = heroSection.offsetHeight;
  
  const particles = [];
  const particleCount = Math.min(100, Math.floor(window.innerWidth / 10));
  
  // Create particles
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      vx: Math.random() * 0.5 - 0.25,
      vy: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.5 + 0.2
    });
  }
  
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particleCount; i++) {
      const p = particles[i];
      
      // Update position
      p.x += p.vx;
      p.y += p.vy;
      
      // Wrap around screen
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      
      // Draw particle
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw connections
      for (let j = i + 1; j < particleCount; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${(100 - distance) / 1000})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }
  }
  
  // Handle window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = heroSection.offsetHeight;
  });
  
  animate();
}

// Portfolio filter animation
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.portfolio-filter button');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  if (filterBtns.length && portfolioItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        // Filter items
        portfolioItems.forEach(item => {
          const category = item.getAttribute('data-category');
          
          if (filter === 'all' || filter === category) {
            item.style.transform = 'scale(1)';
            item.style.opacity = '1';
            item.style.display = 'block';
            
            setTimeout(() => {
              item.style.transform = 'scale(1)';
              item.style.opacity = '1';
            }, 10);
          } else {
            item.style.transform = 'scale(0.8)';
            item.style.opacity = '0';
            
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
}

// Initialize Lucide icons on load
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  revealSections();
  initParticles();
  initPortfolioFilters();
  
  // Animate count-up numbers
  const animateNumbers = () => {
    const expYearsEl = document.querySelector('.experience-years');
    if (expYearsEl) {
      const target = parseInt(expYearsEl.getAttribute('data-count') || '9');
      let count = 0;
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      const increment = target / totalFrames;
      
      const timer = setInterval(() => {
        count += increment;
        
        if (count >= target) {
          expYearsEl.textContent = target.toString();
          clearInterval(timer);
        } else {
          expYearsEl.textContent = Math.floor(count).toString();
        }
      }, frameDuration);
    }
  };
  
  // Trigger number animation when the element is in view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumbers();
        observer.unobserve(entry.target);
      }
    });
  });
  
  const expYearsEl = document.querySelector('.experience-years');
  if (expYearsEl) {
    observer.observe(expYearsEl);
  }
});

// Cursor spotlight effect (modern UI element)
function initSpotlight() {
  const sections = document.querySelectorAll('.spotlight-section');
  
  sections.forEach(section => {
    section.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = section.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      const spotlight = section.querySelector('.spotlight');
      if (spotlight) {
        spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)`;
      }
    });
  });
}

// Call spotlight initialization
document.addEventListener('DOMContentLoaded', initSpotlight);
