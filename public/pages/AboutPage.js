import { AuroraBackground } from '../components/layout/AuroraBackground.js';
import { Header } from '../components/layout/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { PageHeader } from '../components/sections/PageHeader.js';
import { GlassCard } from '../components/ui/GlassCard.js';
import { TeamMemberCard } from '../components/ui/TeamMemberCard.js';
import { safeRender } from '../utils/effects.js';

function render() {
  const app = document.getElementById('app');
  if (!app) return;

  const html = `
    ${AuroraBackground()}
    ${Header()}
    <main>
      ${PageHeader({ title: 'Про Nexus Studio', subtitle: 'Ми поєднуємо інженерію, ШІ та безпеку для цифрової досконалості.' })}
      <section class="container" style="display:grid;grid-template-columns:1.3fr 1fr;gap:30px;align-items:start;">
        <div>
          <h2 style="margin-bottom:16px;">Наша Місія</h2>
          <p>Створювати стійкі цифрові системи, що працюють як єдиний інтелектуальний організм вашого бізнесу.</p>
          <h2 style="margin:24px 0 16px;">Наша Візія</h2>
          <p>Бути найнадійнішим стратегічним технологічним партнером, що забезпечує вирішальну конкурентну перевагу через інновації.</p>
          <h2 style="margin:24px 0 16px;">Наші Цінності</h2>
          <ul style="color:var(--color-text-secondary);padding-left:18px;display:grid;gap:6px;">
            <li>Інтегрована Досконалість</li>
            <li>Стратегічне Партнерство</li>
            <li>Прагматичні Інновації</li>
            <li>Невід'ємна Безпека</li>
          </ul>
        </div>
        <div style="display:grid;gap:16px;">
          ${GlassCard({ title: 'Інтегрована Досконалість', description: 'Ми проектуємо системи, де дизайн, інженерія та безпека працюють як одне ціле.' })}
          ${GlassCard({ title: 'Стратегічне Партнерство', description: 'Ми не просто підрядники — ми технічні партнери вашого зростання.' })}
          ${GlassCard({ title: 'Міжнародні Стандарти', description: 'Багатомовна документація (EN/DE) та відповідність глобальним стандартам безпеки.' })}
        </div>
      </section>
      <section class="container">
        <div class="section-header"><h2>Наша Команда</h2></div>
        <div class="pillars-grid">
          ${TeamMemberCard({ 
            photoUrl: '', 
            name: 'Данило М.', 
            role: 'Lead Architect & Founder', 
            bio: 'Архітектура систем, безпека, ШІ. 8+ років досвіду в enterprise розробці.' 
          })}
          ${TeamMemberCard({ 
            photoUrl: '', 
            name: 'Марія С.', 
            role: 'Product Designer', 
            bio: 'UX/UI, системи дизайну. Спеціалізується на фінтех та e-commerce проектах.' 
          })}
          ${TeamMemberCard({ 
            photoUrl: '', 
            name: 'Олег К.', 
            role: 'DevSecOps Engineer', 
            bio: 'Інфраструктура, CI/CD, безпека. Експерт з AWS та Kubernetes.' 
          })}
        </div>
      </section>
    </main>
    ${Footer()}
  `;

  app.innerHTML = html;
}

safeRender(render);
