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
});
