// Enhanced effects utilities for all pages with advanced animations
export function attachEffects() {
  const header = document.getElementById('main-header');
  if (header) {
    // Scroll effect for header
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    });
    
    // Active navigation highlighting
    const path = window.location.pathname || '/';
    header.querySelectorAll('nav a').forEach((a) => {
      const href = a.getAttribute('href');
      if (!href) return;
      if (href === path || (href !== '/' && path.startsWith(href))) {
        a.classList.add('active');
      }
    });
  }
  
  // Enhanced reveal animations with intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => { 
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        
        // Add staggered animation delays for grid items
        const parent = e.target.closest('.stats-grid, .testimonials-grid, .team-grid, .values-grid, .news-grid, .projects-grid');
        if (parent) {
          const siblings = Array.from(parent.children);
          const index = siblings.indexOf(e.target);
          e.target.style.animationDelay = `${index * 0.1}s`;
        }
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observe all reveal elements
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  
  // Enhanced project filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter projects with animation
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.style.animation = 'none';
          card.offsetHeight; // Trigger reflow
          card.style.animation = 'fadeInUp 0.6s ease forwards';
        } else {
          card.style.animation = 'fadeOutDown 0.3s ease forwards';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
  
  // FAQ interactive functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      item.style.transform = 'scale(1.02)';
      setTimeout(() => {
        item.style.transform = '';
      }, 200);
    });
  });
  
  // Contact form enhancement
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Add loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate form submission
      setTimeout(() => {
        submitBtn.textContent = 'Sent! ✓';
        submitBtn.style.background = 'var(--color-accent)';
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
          contactForm.reset();
        }, 2000);
      }, 1500);
    });
  }
  
  // Newsletter subscription
  const newsletterForm = document.querySelector('.newsletter-card form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = newsletterForm.querySelector('button');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Subscribing...';
      setTimeout(() => {
        submitBtn.textContent = 'Підписано! ✓';
        submitBtn.style.background = 'var(--color-accent)';
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          newsletterForm.reset();
        }, 2000);
      }, 1000);
    });
  }
  
  // Smooth scroll for anchor links
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
  
  // Parallax effect for background elements
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.aurora-background');
    
    parallaxElements.forEach(element => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
  
  // Add hover effects to social links
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.transform = '';
    });
  });
}

// Safe render wrapper with error handling and loading states
export function safeRender(renderFunction) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      try { 
        renderFunction(); 
        attachEffects();
        
        // Add page transition effect
        document.body.style.opacity = '0';
        setTimeout(() => {
          document.body.style.transition = 'opacity 0.3s ease';
          document.body.style.opacity = '1';
        }, 100);
        
      } catch (e) { 
        console.error('Render error:', e);
        const app = document.getElementById('app'); 
        if (app) app.innerHTML = '<p style="color:#f66">Помилка завантаження сторінки</p>'; 
      }
    });
  } else {
    try { 
      renderFunction(); 
      attachEffects();
      
      // Page transition
      document.body.style.opacity = '0';
      setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
      }, 100);
      
    } catch (e) { 
      console.error('Render error:', e);
      const app = document.getElementById('app'); 
      if (app) app.innerHTML = '<p style="color:#f66">Помилка завантаження сторінки</p>'; 
    }
  }
}