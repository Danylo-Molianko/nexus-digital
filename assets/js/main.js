document.addEventListener('DOMContentLoaded', function(){
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.site-nav');
    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('open');
            toggle.classList.toggle('open');
        });
    }

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
        a.addEventListener('click', function(e){
            e.preventDefault();
            const id = this.getAttribute('href').slice(1);
            const el = document.getElementById(id);
            if(el) el.scrollIntoView({behavior:'smooth'});
        });
    });
});
