import { GlassCard } from '../ui/GlassCard.js';

// Clean SVG strings (no backslash-escaped quotes)
const ICON_BUILD = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v.344c0 .355-.186.676-.401.959a2.25 2.25 0 0 1-3.599 1.004c-.215-.283-.401-.604-.401-.959v-.344c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v4.654Z"/></svg>`;
const ICON_AI = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0 3.09 3.09Z"/></svg>`;
const ICON_SEC = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z"/></svg>`;

export function PillarsSection() {
  return `
    <section id="pillars" class="container">
      <div class="section-header reveal">
        <h2>Ефект Nexus</h2>
        <p>Наша сила — у синергії. Ми не просто надаємо послуги, а поєднуємо їх для створення цілісних та стійких цифрових рішень.</p>
      </div>
      <div class="pillars-grid">
        ${GlassCard({
          icon: ICON_BUILD,
          title: 'Створення та Модернізація',
          description: 'Розробка ПЗ на замовлення та модернізація застарілих систем для створення міцного цифрового фундаменту вашого бізнесу.'
        })}
        ${GlassCard({
          icon: ICON_AI,
          title: 'Інновації та Автоматизація',
          description: 'Впровадження рішень на основі ШІ та машинне навчання для автоматизації процесів та отримання конкурентних переваг.'
        })}
        ${GlassCard({
          icon: ICON_SEC,
          title: 'Захист та Відповідність',
          description: 'Комплексні рішення з кібербезпеки та DevSecOps для захисту ваших даних, операцій та майбутнього зростання.'
        })}
      </div>
    </section>
  `;
}
