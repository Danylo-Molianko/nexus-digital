import { Button } from '../ui/Button.js';

export function HeroSection() {
  return `
    <section id="hero" class="container reveal">
      <div class="hero-content">
        <h1>WE DON'T JUST WRITE CODE. WE ARCHITECT YOUR DIGITAL FUTURE.</h1>
        <p>We engineer resilient, intelligent digital ecosystems by integrating software development, artificial intelligence, and cybersecurity to power your ambition.</p>
        <div class="buttons-wrapper">
          ${Button({ text: 'SCHEDULE A CONSULTATION', href: '/contact', variant: 'primary' })}
          ${Button({ text: 'EXPLORE OUR SERVICES', href: '#pillars', variant: 'secondary' })}
        </div>
      </div>
    </section>
  `;
}
