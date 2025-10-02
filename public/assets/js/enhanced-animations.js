// ==========================================
// ENHANCED INTERACTIVE ANIMATIONS
// ==========================================

class AdvancedAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupParallaxEffect();
        this.setupMagneticElements();
        this.setupTypingEffect();
        this.setupCursorTracker();
        this.setupSmoothScrolling();
    }

    // 1. INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        document.querySelectorAll('.service-card, .section, .about-section .founder-image').forEach(el => {
            observer.observe(el);
        });
    }

    // 2. PARALLAX SCROLLING
    setupParallaxEffect() {
        let ticking = false;

        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.interactive-bg, .aurora-layer');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + index * 0.2;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });

            ticking = false;
        };

        const requestParallax = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestParallax);
    }

    // 3. MAGNETIC BUTTONS EFFECT
    setupMagneticElements() {
        const magneticElements = document.querySelectorAll('.btn, .service-card');

        magneticElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                const distance = Math.sqrt(x * x + y * y);
                const maxDistance = 100;

                if (distance < maxDistance) {
                    const strength = (maxDistance - distance) / maxDistance;
                    const moveX = x * strength * 0.3;
                    const moveY = y * strength * 0.3;

                    element.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
                }
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translate(0px, 0px) scale(1)';
            });
        });
    }

    // 4. TYPING EFFECT FOR HERO TITLE
    setupTypingEffect() {
        const heroTitle = document.querySelector('.hero__title');
        if (!heroTitle) return;

        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.classList.add('typing-effect');

        let index = 0;
        const typeSpeed = 100;

        const typeWriter = () => {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, typeSpeed);
            } else {
                heroTitle.classList.remove('typing-effect');
            }
        };

        // Start typing effect after page load
        setTimeout(typeWriter, 1000);
    }

    // 5. CUSTOM CURSOR TRACKING
    setupCursorTracker() {
        // Create custom cursor
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        // Add cursor styles
        const style = document.createElement('style');
        style.textContent = `
            .custom-cursor {
                position: fixed;
                width: 20px;
                height: 20px;
                background: radial-gradient(circle, var(--accent-color), transparent);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.1s ease;
                opacity: 0.6;
            }
            
            .custom-cursor.hover {
                transform: scale(2);
                opacity: 0.8;
            }
            
            body:hover .custom-cursor {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });

        // Add hover effect for interactive elements
        document.querySelectorAll('a, button, .service-card').forEach(element => {
            element.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            element.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    // 6. SMOOTH SCROLLING WITH EASING
    setupSmoothScrolling() {
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
    }
}

// ==========================================
// ENHANCED PARTICLE SYSTEM
// ==========================================

class EnhancedParticles extends InteractiveParticles {
    constructor() {
        super();
        this.setupMouseInteraction();
    }

    setupMouseInteraction() {
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Add particle explosion on click
        document.addEventListener('click', (e) => {
            this.createExplosion(e.clientX, e.clientY);
        });
    }

    createExplosion(x, y) {
        const explosionParticles = [];
        const particleCount = 20;

        for (let i = 0; i < particleCount; i++) {
            explosionParticles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 0.5) * 10,
                life: 1,
                decay: 0.02,
                size: Math.random() * 3 + 1,
                color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
            });
        }

        const animateExplosion = () => {
            explosionParticles.forEach((particle, index) => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.life -= particle.decay;
                particle.vx *= 0.98;
                particle.vy *= 0.98;

                if (particle.life <= 0) {
                    explosionParticles.splice(index, 1);
                }
            });

            // Draw explosion particles
            this.ctx.save();
            explosionParticles.forEach(particle => {
                this.ctx.globalAlpha = particle.life;
                this.ctx.fillStyle = particle.color;
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                this.ctx.fill();
            });
            this.ctx.restore();

            if (explosionParticles.length > 0) {
                requestAnimationFrame(animateExplosion);
            }
        };

        animateExplosion();
    }
}

// ==========================================
// LOADING ANIMATIONS
// ==========================================

class LoadingAnimations {
    constructor() {
        this.setupPageLoader();
        this.setupImageLoading();
    }

    setupPageLoader() {
        // Create loading screen
        const loader = document.createElement('div');
        loader.className = 'page-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-logo">
                    <img src="assets/images/logo-for-site.webp" alt="Nexus Digital">
                </div>
                <div class="loader-progress">
                    <div class="progress-bar"></div>
                </div>
                <p>Завантаження майбутнього...</p>
            </div>
        `;
        
        // Add loader styles
        const style = document.createElement('style');
        style.textContent = `
            .page-loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #000000, #1a1a2e);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                transition: opacity 0.5s ease;
            }
            
            .loader-content {
                text-align: center;
                color: white;
            }
            
            .loader-logo img {
                width: 100px;
                height: auto;
                animation: pulse 2s infinite;
            }
            
            .loader-progress {
                width: 200px;
                height: 4px;
                background: rgba(255,255,255,0.1);
                border-radius: 2px;
                margin: 20px auto;
                overflow: hidden;
            }
            
            .progress-bar {
                height: 100%;
                background: var(--accent-color);
                width: 0%;
                animation: loading 3s ease-in-out;
            }
            
            @keyframes loading {
                to { width: 100%; }
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(loader);

        // Remove loader when page is loaded
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 500);
            }, 3000);
        });
    }

    setupImageLoading() {
        // Add loading shimmer to images
        document.querySelectorAll('img').forEach(img => {
            if (!img.complete) {
                img.classList.add('loading');
                img.addEventListener('load', () => {
                    img.classList.remove('loading');
                });
            }
        });
    }
}

// ==========================================
// INITIALIZE ALL ANIMATIONS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all animation systems
    new AdvancedAnimations();
    new LoadingAnimations();
    
    // Replace standard particles with enhanced version
    if (window.InteractiveParticles) {
        new EnhancedParticles();
    }
    
    console.log('🎬 Enhanced animations initialized!');
});