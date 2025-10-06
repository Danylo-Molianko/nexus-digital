import { AuroraBackground } from '../components/layout/AuroraBackground.js';
import { Header } from '../components/layout/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { PageHeader } from '../components/sections/PageHeader.js';
import { GlassCard } from '../components/ui/GlassCard.js';
import { safeRender } from '../utils/effects.js';

function render() {
  const app = document.getElementById('app');
  if (!app) return;

  const buildList = `<ul><li>Архітектура та проектування</li><li>Міграція та модернізація</li><li>DevOps практики</li></ul>`;
  const aiList = `<ul><li>Автоматизація процесів</li><li>Моделі ML під бізнес</li><li>Аналітика та інсайти</li></ul>`;
  const secList = `<ul><li>Аудити безпеки</li><li>Впровадження DevSecOps</li><li>Відповідність стандартам</li></ul>`;

  const html = `
    ${AuroraBackground()}
    ${Header()}
    <main>
      ${PageHeader({ title: 'Наші Послуги', subtitle: 'Три стовпи, що створюють стійку цифрову екосистему.' })}
      <section class="container">
        <div class="pillars-grid">
          ${GlassCard({ title: 'Створення та Модернізація', description: 'Розробка ПЗ на замовлення, масштабування інфраструктури. ' + buildList })}
          ${GlassCard({ title: 'Інновації та Автоматизація', description: 'ШІ-рішення для підвищення ефективності. ' + aiList })}
          ${GlassCard({ title: 'Захист та Відповідність', description: 'Безпека на всіх етапах циклу. ' + secList })}
        </div>
      </section>
      <section class="container">
        <div class="section-header reveal">
          <h2>Ефект Nexus</h2>
          <p>Стовпи діють разом: створення, інновації та безпека інтегруються у цілісну архітектуру.</p>
        </div>
        <div class="glass-card reveal">
          <h3>Приклади взаємодії</h3>
          <p>Коли ми створюємо новий мобільний додаток (Створення), ми додаємо персоналізацію через ШІ (Інновації) та впроваджуємо DevSecOps з першого дня (Захист).</p>
          <p>Модернізація вашої системи — це шанс вбудувати аналітику на основі ШІ і зміцнити її проти сучасних загроз.</p>
          <div style="margin-top:16px"><a href="/contact" class="cta-button">Запланувати консультацію</a></div>
        </div>
      </section>
    </main>
    ${Footer()}
  `;

  app.innerHTML = html;
}

safeRender(render);
