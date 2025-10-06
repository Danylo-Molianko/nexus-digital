import { AuroraBackground } from '../components/layout/AuroraBackground.js';
import { Header } from '../components/layout/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { PageHeader } from '../components/sections/PageHeader.js';
import { Button } from '../components/ui/Button.js';
import { CaseStudyCard } from '../components/ui/CaseStudyCard.js';
import { safeRender } from '../utils/effects.js';

function render() {
  const app = document.getElementById('app');
  if (!app) return;

  const filters = [
    { key: 'all', label: 'Всі' },
    { key: 'ai', label: 'ШІ та Автоматизація' },
    { key: 'security', label: 'Безпека' },
    { key: 'modernization', label: 'Модернізація' },
    { key: 'ux', label: 'UX/UI Дизайн' },
  ];

  const projects = [
    { 
      image: '', 
      title: 'E-commerce Автоматизація', 
      summary: 'Клієнт: Виробниче підприємство. Виклик: Ручне прогнозування попиту. Nexus Рішення: ML для прогнозу + DevSecOps. Результат: -30% простоїв, +20% ефективність.', 
      tags: ['AI', 'DevSecOps'],
      client: 'Виробниче підприємство',
      challenge: 'Ручне прогнозування попиту призводило до простоїв',
      solution: 'Інтегрували ML для прогнозу попиту (Інновації) + DevSecOps pipeline (Захист)',
      results: 'Скорочення простоїв на 30%, підвищення ефективності на 20%',
      quote: '"Nexus перетворили наші дані на стратегічний актив" — Керівник виробництва'
    },
    { 
      image: '', 
      title: 'Фінтех Платформа', 
      summary: 'Клієнт: Фінансова компанія. Виклик: Застаріла система без безпеки. Nexus Рішення: Модернізація + 360° захист. Результат: ISO 27001, 99.9% uptime.', 
      tags: ['Модернізація', 'Безпека'],
      client: 'Фінансова компанія',
      challenge: 'Застаріла платформа без сучасних стандартів безпеки',
      solution: 'Повна модернізація (Створення) + 360° захист + комплаєнс (Захист)',
      results: 'Отримали ISO 27001, досягли 99.9% uptime',
      quote: '"Тепер ми впевнені в безпеці кожної транзакції" — CTO'
    },
    { 
      image: '', 
      title: 'Retailer ШІ-асистент', 
      summary: 'Клієнт: Мережа магазинів. Виклик: Низька конверсія онлайн. Nexus Рішення: UX редизайн + ШІ-рекомендації. Результат: +50% конверсія, +35% AOV.', 
      tags: ['UX/UI', 'AI'],
      client: 'Мережа роздрібних магазинів',
      challenge: 'Низька конверсія онлайн-магазину та висока відмова',
      solution: 'UX/UI редизайн (Створення) + ШІ-рекомендації (Інновації)',
      results: 'Підвищення конверсії на 50%, збільшення AOV на 35%',
      quote: '"Наші клієнти тепер залишаються і купують більше" — Директор з маркетингу'
    },
    {
      image: '',
      title: 'Логістика Оптимізація',
      summary: 'Клієнт: Логістична компанія. Виклик: Неефективні маршрути. Nexus Рішення: ШІ-оптимізація + real-time безпека. Результат: -25% палива, 100% захист даних.',
      tags: ['AI', 'Оптимізація'],
      client: 'Логістична компанія',
      challenge: 'Неефективні маршрути та відсутність захисту логістичних даних',
      solution: 'ШІ-оптимізація маршрутів (Інновації) + real-time моніторинг безпеки (Захист)',
      results: 'Економія палива 25%, 100% захист критичних даних',
      quote: '"Кожна доставка тепер оптимальна і безпечна" — Операційний директор'
    }
  ];

  const html = `
    ${AuroraBackground()}
    ${Header()}
    <main>
      ${PageHeader({ title: 'Наші Проєкти', subtitle: 'Вибрані кейси та результати.' })}
      <section class="container" style="text-align:center;">
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          ${filters.map(f => Button({ text: f.label, variant: 'secondary', href: `#filter-${f.key}` })).join('')}
        </div>
      </section>
      <section class="container">
        <div class="pillars-grid">
          ${projects.map(p => CaseStudyCard(p)).join('')}
        </div>
      </section>
    </main>
    ${Footer()}
  `;

  app.innerHTML = html;
}

safeRender(render);
