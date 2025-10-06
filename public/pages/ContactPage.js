import { AuroraBackground } from '../components/layout/AuroraBackground.js';
import { Header } from '../components/layout/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { PageHeader } from '../components/sections/PageHeader.js';
import { safeRender } from '../utils/effects.js';

function render() {
  const app = document.getElementById('app');
  if (!app) return;

  const html = `
    ${AuroraBackground()}
    ${Header()}
    <main>
      ${PageHeader({ title: "Зв'яжіться з Нами", subtitle: 'Ми відповімо протягом 24 годин.' })}
      <section class="container" style="display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:start;">
        <div style="display:grid;gap:16px;">
          <div class="glass-card"><h3>Email</h3><p><a href="mailto:hello@nexus.studio">hello@nexus.studio</a></p></div>
          <div class="glass-card"><h3>Телефон</h3><p><a href="tel:+380671234567">+380 (67) 123-45-67</a></p></div>
          <div class="glass-card"><h3>Соцмережі</h3><p><a href="#">LinkedIn</a> · <a href="#">GitHub</a></p></div>
        </div>
        <form class="glass-card" style="display:grid;gap:12px;">
          <label>Ваше ім'я
            <input type="text" required style="width:100%;padding:12px;border-radius:12px;background:rgba(23,28,46,.4);border:1px solid var(--color-glass-border);color:#fff;outline:none;" />
          </label>
          <label>Email
            <input type="email" required style="width:100%;padding:12px;border-radius:12px;background:rgba(23,28,46,.4);border:1px solid var(--color-glass-border);color:#fff;outline:none;" />
          </label>
          <label>Повідомлення
            <textarea rows="6" required style="width:100%;padding:12px;border-radius:12px;background:rgba(23,28,46,.4);border:1px solid var(--color-glass-border);color:#fff;outline:none;"></textarea>
          </label>
          <button type="submit" class="cta-button">Надіслати</button>
        </form>
      </section>
    </main>
    ${Footer()}
  `;

  app.innerHTML = html;
}

safeRender(render);
