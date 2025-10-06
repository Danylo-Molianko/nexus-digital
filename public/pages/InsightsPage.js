import { AuroraBackground } from '../components/layout/AuroraBackground.js';
import { Header } from '../components/layout/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { PageHeader } from '../components/sections/PageHeader.js';
import { GlassCard } from '../components/ui/GlassCard.js';
import { safeRender } from '../utils/effects.js';

function render() {
  const app = document.getElementById('app');
  if (!app) return;
  const html = `
    ${AuroraBackground()}
    ${Header()}
    <main>
      ${PageHeader({ title: 'Інсайти Nexus', subtitle: 'Стратегічні посібники, технічні глибокі занурення та аналіз галузі.' })}
      <section class="container">
        <div class="section-header"><h2>Стовпи контенту</h2><p>Вибране з нашого хабу лідерства думок.</p></div>
        <div class="pillars-grid">
          ${GlassCard({ title: 'Стратегічні Посібники', description: 'Як підготувати ваше МСП до революції ШІ; Рамки прийняття рішень.' })}
          ${GlassCard({ title: 'Технічні Глибокі Занурення', description: 'Нульова довіра в AWS; CI/CD з DevSecOps; інтеграція LLM.' })}
          ${GlassCard({ title: 'Аналіз Галузі', description: 'Тенденції кіберзагроз у виробництві; ІІ в e-commerce.' })}
        </div>
      </section>
    </main>
    ${Footer()}
  `;
  app.innerHTML = html;
}

safeRender(render);
