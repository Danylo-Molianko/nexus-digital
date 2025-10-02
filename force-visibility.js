// Force show all content immediately
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, forcing visibility...');
    
    // Remove all AOS attributes and show content
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'none';
        element.style.visibility = 'visible';
        element.style.display = 'block';
        element.removeAttribute('data-aos');
        element.removeAttribute('data-aos-delay');
    });
    
    // Force show main sections
    const mainSections = [
        '.main', '.hero', '.section', '.container',
        '.hero__content', '.hero__title', '.hero__subtitle',
        '.section__title', '.section__subtitle',
        '.services-grid', '.service-card', '.service-card__content',
        '.service-card__title', '.service-card__description',
        '.about-section'
    ];
    
    mainSections.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.style.opacity = '1';
            element.style.visibility = 'visible';
            element.style.display = 'block';
            element.style.color = '#ffffff';
        });
    });
    
    // Special handling for hero
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.display = 'flex';
    }
    
    // Special handling for grid
    const grid = document.querySelector('.services-grid');
    if (grid) {
        grid.style.display = 'grid';
    }
    
    console.log('Visibility forced for all elements');
});

// Force show on window load as well
window.addEventListener('load', function() {
    console.log('Window loaded, ensuring visibility...');
    document.body.style.opacity = '1';
    document.body.style.visibility = 'visible';
});