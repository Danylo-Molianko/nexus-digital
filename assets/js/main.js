document.addEventListener('DOMContentLoaded', function(){
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.site-nav');
    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('open');
            toggle.classList.toggle('open');
        });
    }

    // Burger menu toggle (mobile)
    const burger = document.querySelector('.burger-menu');
    const nav2 = document.querySelector('.nav');
    const header = document.querySelector('.header');

    if (burger && nav2) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('is-open');
            nav2.classList.toggle('is-open');
            document.body.classList.toggle('no-scroll'); // optional: prevent body scroll when menu open
        });
    }

    // Header elevation on scroll
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 8) header.classList.add('header--elevated');
            else header.classList.remove('header--elevated');
        });
    }

    // Smooth scroll for internal links (keep existing behavior)
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
        a.addEventListener('click', function(e){
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const id = href.slice(1);
                const el = document.getElementById(id);
                if(el) el.scrollIntoView({behavior:'smooth'});
                // close mobile nav after click
                if (nav && nav.classList.contains('is-open')) {
                    nav.classList.remove('is-open');
                    if (burger) burger.classList.remove('is-open');
                    document.body.classList.remove('no-scroll');
                }
            }
        });
    });

    // Accordion behavior for services page
    document.querySelectorAll('.accordion__header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.closest('.accordion__item');
            const content = header.nextElementSibling;
            const isOpen = item.classList.contains('open');

            if (isOpen) {
                // close
                item.classList.remove('open');
                header.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = null;
            } else {
                // close other items in same accordion
                const parent = header.closest('.accordion');
                if (parent) {
                    parent.querySelectorAll('.accordion__item.open').forEach(openItem => {
                        openItem.classList.remove('open');
                        const openContent = openItem.querySelector('.accordion__content');
                        if (openContent) openContent.style.maxHeight = null;
                        const openHeader = openItem.querySelector('.accordion__header');
                        if (openHeader) openHeader.setAttribute('aria-expanded', 'false');
                    });
                }
                // open clicked
                item.classList.add('open');
                header.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
        // ensure accessibility initial state
        if (!header.hasAttribute('aria-expanded')) header.setAttribute('aria-expanded', 'false');
    });

    // ensure opened items restore proper maxHeight on load (if any)
    document.querySelectorAll('.accordion__item.open .accordion__content').forEach(c => {
        c.style.maxHeight = c.scrollHeight + 'px';
    });
});
