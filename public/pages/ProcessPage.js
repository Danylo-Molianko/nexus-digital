import { AuroraBackground } from '../components/layout/AuroraBackground.js';
import { Header } from '../components/layout/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { PageHeader } from '../components/sections/PageHeader.js';
import { ProcessSection } from '../components/sections/ProcessSection.js';
import { safeRender } from '../utils/effects.js';

function render() {
  const app = document.getElementById('app');
  if (!app) return;
  const html = `
    ${AuroraBackground()}
    ${Header()}
    <main>
      ${PageHeader({ title: 'Наш Процес', subtitle: 'Прозорий шлях від ідеї — до еволюції продукту.' })}
      ${ProcessSection()}
    </main>
    ${Footer()}
  `;
  app.innerHTML = html;
}

safeRender(render);
