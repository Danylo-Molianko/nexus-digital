import { Button } from '../ui/Button.js';

export function HeroSection() {
  return `
    <section id="hero" class="container reveal">
      <div class="hero-content">
        <h1>Ми не пишемо код. Ми проєктуємо ваше цифрове ядро.</h1>
        <p>Інтегруємо розробку, штучний інтелект та кібербезпеку для створення стійких, інтелектуальних цифрових екосистем.</p>
        <div class="buttons-wrapper">
          ${Button({ text: 'Розпочати проєкт', href: '/contact', variant: 'primary' })}
          ${Button({ text: 'Наші послуги', href: '#pillars', variant: 'secondary' })}
        </div>
      </div>
    </section>
  `;
}
