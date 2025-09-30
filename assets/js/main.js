// NEXUS DIGITAL - Main JavaScript
document.addEventListener("DOMContentLoaded", function() {
  console.log("Nexus Digital - Golden Frame loaded successfully");
  
  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }
  
  // Mobile menu toggle
  const menuToggle = document.querySelector(".header__menu-toggle");
  const mobileNav = document.querySelector(".header__mobile-nav");
  
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function() {
      menuToggle.classList.toggle("header__menu-toggle--active");
      mobileNav.classList.toggle("header__mobile-nav--open");
      document.body.classList.toggle("overflow-hidden");
    });
  }
  
  // Header scroll effect
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 50) {
        header.classList.add("header--scrolled");
      } else {
        header.classList.remove("header--scrolled");
      }
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener("click", function(event) {
    if (mobileNav && mobileNav.classList.contains("header__mobile-nav--open")) {
      if (!mobileNav.contains(event.target) && !menuToggle.contains(event.target)) {
        menuToggle.classList.remove("header__menu-toggle--active");
        mobileNav.classList.remove("header__mobile-nav--open");
        document.body.classList.remove("overflow-hidden");
      }
    }
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll("a[href^=\"#\"]").forEach(function(link) {
    link.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        
        // Close mobile menu if open
        if (mobileNav && mobileNav.classList.contains("header__mobile-nav--open")) {
          menuToggle.classList.remove("header__menu-toggle--active");
          mobileNav.classList.remove("header__mobile-nav--open");
          document.body.classList.remove("overflow-hidden");
        }
      }
    });
  });
  
  // Hero scroll indicator functionality
  const scrollIndicator = document.querySelector(".hero__scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", function() {
      const servicesSection = document.querySelector(".services-section");
      if (servicesSection) {
        servicesSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
    
    // Hide scroll indicator when scrolling
    window.addEventListener("scroll", function() {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        scrollIndicator.style.opacity = "0";
        scrollIndicator.style.pointerEvents = "none";
      } else {
        scrollIndicator.style.opacity = "0.8";
        scrollIndicator.style.pointerEvents = "auto";
      }
    });
  }
  
  // Hero video error handling
  const heroVideo = document.querySelector(".hero__video");
  if (heroVideo) {
    heroVideo.addEventListener("error", function() {
      console.warn("Hero video failed to load");
      // Hide video and show fallback background
      this.style.display = "none";
      this.parentElement.style.background = "linear-gradient(135deg, #1a1a1a, #2a2a2a)";
    });
  }
  
  // Service cards hover effect enhancement
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });
    
    card.addEventListener("mouseleave", function() {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
  
  // Contact form handling
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Show loading state
      const submitBtn = this.querySelector(".form-submit");
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Надсилаємо...";
      submitBtn.disabled = true;
      
      // Simulate form submission (replace with actual API call)
      setTimeout(function() {
        alert("Дякуємо! Ваше повідомлення надіслано. Ми зв'яжемося з вами найближчим часом.");
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }
  
  // Form validation enhancement
  const formInputs = document.querySelectorAll(".form-input, .form-textarea, .form-select");
  formInputs.forEach(function(input) {
    input.addEventListener("blur", function() {
      if (this.hasAttribute("required") && !this.value.trim()) {
        this.style.borderColor = "#ff4444";
      } else {
        this.style.borderColor = "rgba(255, 255, 255, 0.2)";
      }
    });
    
    input.addEventListener("input", function() {
      if (this.style.borderColor === "rgb(255, 68, 68)") {
        this.style.borderColor = "rgba(255, 255, 255, 0.2)";
      }
    });
  });
  
  // FAQ accordion functionality
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function(item) {
    const question = item.querySelector(".faq-item__question");
    if (question) {
      question.addEventListener("click", function() {
        // Close other open FAQ items
        faqItems.forEach(function(otherItem) {
          if (otherItem !== item && otherItem.hasAttribute("open")) {
            otherItem.removeAttribute("open");
          }
        });
      });
    }
  });
  
  // Accordion functionality for services
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach(function(accordion) {
    const summary = accordion.querySelector(".accordion__header");
    if (summary) {
      summary.addEventListener("click", function() {
        // Optional: Close other accordions in the same section
        const parent = this.closest("section");
        if (parent) {
          const otherAccordions = parent.querySelectorAll(".accordion");
          otherAccordions.forEach(function(otherAccordion) {
            if (otherAccordion !== accordion && otherAccordion.hasAttribute("open")) {
              otherAccordion.removeAttribute("open");
            }
          });
        }
      });
    }
  });
  
  // Enhanced card hover effects
  const cards = document.querySelectorAll(".team-card, .value-card, .partner-card, .case-card");
  cards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
      this.style.transform = "translateY(-5px)";
    });
    
    card.addEventListener("mouseleave", function() {
      this.style.transform = "translateY(0)";
    });
  });
  
  // Parallax effect for hero sections
  const heroSections = document.querySelectorAll(".section--hero");
  if (heroSections.length > 0) {
    window.addEventListener("scroll", function() {
      const scrollY = window.scrollY;
      heroSections.forEach(function(hero) {
        const speed = 0.5;
        hero.style.transform = `translateY(${scrollY * speed}px)`;
      });
    });
  }
  
  // Scroll progress indicator
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    let progressBar = document.querySelector(".scroll-progress");
    if (!progressBar) {
      progressBar = document.createElement("div");
      progressBar.className = "scroll-progress";
      progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--accent-color);
        z-index: 9999;
        transition: width 0.1s;
      `;
      document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrollPercent + "%";
  }
  
  window.addEventListener("scroll", updateScrollProgress);
});
