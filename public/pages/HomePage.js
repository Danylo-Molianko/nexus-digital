import { AuroraBackground } from '../components/layout/AuroraBackground.js';
import { Header } from '../components/layout/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { HeroSection } from '../components/sections/HeroSection.js';
import { PillarsSection } from '../components/sections/PillarsSection.js';
import { ProcessSection } from '../components/sections/ProcessSection.js';
import { SocialProofSection } from '../components/sections/SocialProofSection.js';
import { FeaturedContentSection } from '../components/sections/FeaturedContentSection.js';
import { FinalCTASection } from '../components/sections/FinalCTASection.js';

function attachEffects() {
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    });
    // Highlight active nav link
    const path = window.location.pathname || '/';
    header.querySelectorAll('nav a').forEach((a) => {
      const href = a.getAttribute('href');
      if (!href) return;
      if (href === path || (href !== '/' && path.startsWith(href))) {
        a.classList.add('active');
      }
    });
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;
  const html = `
    ${AuroraBackground()}
    ${Header()}
    <main>
      ${HeroSection()}
      ${PillarsSection()}
      ${SocialProofSection()}
      ${ProcessSection()}
      ${FeaturedContentSection()}
      ${FinalCTASection()}
    </main>
    ${Footer()}
  `;
  app.innerHTML = html;
  attachEffects();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    try { renderApp(); } catch (e) { const app = document.getElementById('app'); if (app) app.innerHTML = '<p style=\"color:#f66\">Помилка завантаження сторінки</p>'; }
  });
} else {
  try { renderApp(); } catch (e) { const app = document.getElementById('app'); if (app) app.innerHTML = '<p style=\"color:#f66\">Помилка завантаження сторінки</p>'; }
}
