// ===========================================
// NEXUS DIGITAL - SPA ROUTER WITH RICH SECTIONS
// ===========================================

import { AuroraBackground } from '../components/layout/AuroraBackground.js';
import { Header } from '../components/layout/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { attachEffects } from '../utils/effects.js';

// Import all page components
import { HeroSection } from '../components/sections/HeroSection.js';
import { PillarsSection } from '../components/sections/PillarsSection.js';
import { ProcessSection } from '../components/sections/ProcessSection.js';
import { SocialProofSection } from '../components/sections/SocialProofSection.js';
import { FeaturedContentSection } from '../components/sections/FeaturedContentSection.js';
import { FinalCTASection } from '../components/sections/FinalCTASection.js';
import { PageHeader } from '../components/sections/PageHeader.js';
import { GlassCard } from '../components/ui/GlassCard.js';

// Import additional sections
import { 
  StatsSection, 
  TestimonialsSection, 
  FAQSection, 
  LatestNewsSection,
  ServiceDetailsSection,
  PricingSection
} from '../components/sections/AdditionalSections.js';

import {
  ProjectShowcaseSection,
  ProcessTimelineSection,
  ToolsSection
} from '../components/sections/ProjectSections.js';

import {
  TeamSection,
  ValuesSection,
  StorySection,
  ContactInfoSection,
  OfficeLocationsSection
} from '../components/sections/AboutContactSections.js';

class Router {
  constructor() {
    this.routes = {
      '/': this.renderHomePage,
      '/services': this.renderServicesPage,
      '/process': this.renderProcessPage,
      '/portfolio': this.renderPortfolioPage,
      '/insights': this.renderInsightsPage,
      '/about': this.renderAboutPage,
      '/contact': this.renderContactPage
    };
    
    this.init();
  }

  init() {
    // Handle initial page load
    this.handleRoute();
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.handleRoute();
    });

    // Handle navigation clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[href^="/"]')) {
        e.preventDefault();
        this.navigate(e.target.getAttribute('href'));
      }
    });
  }

  navigate(path) {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  handleRoute() {
    const path = window.location.pathname || '/';
    const routeHandler = this.routes[path] || this.render404;
    
    try {
      this.renderLayout();
      routeHandler.call(this);
      attachEffects();
    } catch (error) {
      console.error('Routing error:', error);
      this.renderError();
    }
  }

  renderLayout() {
    const app = document.getElementById('app');
    if (!app) return;
    
    app.innerHTML = `
      ${AuroraBackground()}
      ${Header()}
      <main id="main-content">
        <!-- Dynamic content will be inserted here -->
      </main>
      ${Footer()}
    `;
  }

  renderHomePage() {
    const main = document.getElementById('main-content');
    if (!main) return;
    
    main.innerHTML = `
      ${HeroSection()}
      ${PillarsSection()}
      ${StatsSection()}
      ${SocialProofSection()}
      ${ProcessSection()}
      ${TestimonialsSection()}
      ${FeaturedContentSection()}
      ${LatestNewsSection()}
      ${FAQSection()}
      ${FinalCTASection()}
    `;
  }

  renderServicesPage() {
    const main = document.getElementById('main-content');
    if (!main) return;

    const buildList = `<ul><li>Architecture & Design</li><li>Migration & Modernization</li><li>DevOps Practices</li></ul>`;
    const aiList = `<ul><li>Process Automation</li><li>Business ML Models</li><li>Analytics & Insights</li></ul>`;
    const secList = `<ul><li>Security Audits</li><li>DevSecOps Implementation</li><li>Compliance Standards</li></ul>`;
    
    main.innerHTML = `
      ${PageHeader({ title: 'OUR SERVICES', subtitle: 'Three pillars that create one resilient digital ecosystem.' })}
      <section class="container">
        <div class="pillars-grid">
          ${GlassCard({ title: 'Build & Modernize', description: 'Custom software development, infrastructure scaling. ' + buildList })}
          ${GlassCard({ title: 'Innovate & Automate', description: 'AI solutions for efficiency enhancement. ' + aiList })}
          ${GlassCard({ title: 'Secure & Comply', description: 'Security at all lifecycle stages. ' + secList })}
        </div>
      </section>
      ${ServiceDetailsSection()}
      ${PricingSection()}
      <section class="container">
        <div class="section-header reveal">
          <h2>THE NEXUS EFFECT</h2>
          <p>The pillars work together: creation, innovation, and security integrate into a holistic architecture.</p>
        </div>
        <div class="glass-card reveal">
          <h3>Integration Examples</h3>
          <p>When we create a new mobile application (<strong>Build</strong>), we add personalization through AI (<strong>Innovate</strong>) and implement DevSecOps from day one (<strong>Secure</strong>).</p>
          <p>Modernizing your system is an opportunity to embed AI-powered analytics and strengthen it against modern threats.</p>
          <div style="margin-top:16px"><a href="/contact" class="cta-button" data-link>SCHEDULE A CONSULTATION</a></div>
        </div>
      </section>
      ${TestimonialsSection()}
      ${FAQSection()}
    `;
  }

  renderProcessPage() {
    const main = document.getElementById('main-content');
    if (!main) return;
    
    main.innerHTML = `
      ${PageHeader({ title: 'Наш Процес', subtitle: 'Прозорий шлях від ідеї — до еволюції продукту.' })}
      ${ProcessSection()}
      ${ProcessTimelineSection()}
      ${ToolsSection()}
      <section class="container" style="padding: 80px 0;">
        <div class="section-header reveal">
          <h2>Гарантії Якості</h2>
          <p>Що ви отримуєте на кожному етапі</p>
        </div>
        <div class="guarantees-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 60px;">
          <div class="guarantee-card glass-card reveal">
            <div style="font-size: 32px; margin-bottom: 16px; text-align: center;">✅</div>
            <h4 style="margin-bottom: 12px; text-align: center;">Щотижневі Демо</h4>
            <p>Бачите прогрес кожного тижня та можете вносити корективи в реальному часі.</p>
          </div>
          <div class="guarantee-card glass-card reveal">
            <div style="font-size: 32px; margin-bottom: 16px; text-align: center;">📊</div>
            <h4 style="margin-bottom: 12px; text-align: center;">Прозорі Звіти</h4>
            <p>Детальна аналітика часу, бюджету та прогресу виконання завдань.</p>
          </div>
          <div class="guarantee-card glass-card reveal">
            <div style="font-size: 32px; margin-bottom: 16px; text-align: center;">🔒</div>
            <h4 style="margin-bottom: 12px; text-align: center;">Безпека Коду</h4>
            <p>Автоматичні перевірки безпеки на кожному коміті та детальні аудити.</p>
          </div>
        </div>
      </section>
      ${TestimonialsSection()}
    `;
  }

  renderPortfolioPage() {
    const main = document.getElementById('main-content');
    if (!main) return;
    
    main.innerHTML = `
      ${PageHeader({ title: 'Наші Проєкти', subtitle: 'Реальні кейси, що демонструють силу Nexus Effect.' })}
      ${ProjectShowcaseSection()}
      ${StatsSection()}
      <section class="container" style="padding: 80px 0;">
        <div class="section-header reveal">
          <h2>Індустрії, в яких ми працюємо</h2>
          <p>Експертиза в різних сферах бізнесу</p>
        </div>
        <div class="industries-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-top: 60px;">
          <div class="industry-card glass-card reveal" style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 16px;">🏦</div>
            <h4 style="margin-bottom: 12px;">Фінтех</h4>
            <p>Банківські додатки, платіжні системи, крипто-платформи</p>
          </div>
          <div class="industry-card glass-card reveal" style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 16px;">🛒</div>
            <h4 style="margin-bottom: 12px;">E-commerce</h4>
            <p>Інтернет-магазини, маркетплейси, системи лояльності</p>
          </div>
          <div class="industry-card glass-card reveal" style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 16px;">🏥</div>
            <h4 style="margin-bottom: 12px;">Медтех</h4>
            <p>Телемедицина, системи управління клініками, ШІ-діагностика</p>
          </div>
          <div class="industry-card glass-card reveal" style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 16px;">🎓</div>
            <h4 style="margin-bottom: 12px;">EdTech</h4>
            <p>Освітні платформи, LMS системи, адаптивне навчання</p>
          </div>
          <div class="industry-card glass-card reveal" style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 16px;">🏭</div>
            <h4 style="margin-bottom: 12px;">Виробництво</h4>
            <p>IoT рішення, автоматизація, системи управління виробництвом</p>
          </div>
          <div class="industry-card glass-card reveal" style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 16px;">🚚</div>
            <h4 style="margin-bottom: 12px;">Логістика</h4>
            <p>Системи відстеження, оптимізація маршрутів, складське ПЗ</p>
          </div>
        </div>
      </section>
      ${TestimonialsSection()}
    `;
  }

  renderInsightsPage() {
    const main = document.getElementById('main-content');
    if (!main) return;
    
    main.innerHTML = `
      ${PageHeader({ title: 'Інсайти', subtitle: 'Думки та аналітика від експертів Nexus Studio.' })}
      ${LatestNewsSection()}
      <section class="container" style="padding: 80px 0;">
        <div class="section-header reveal">
          <h2>Популярні Теми</h2>
          <p>Найбільш актуальні напрямки в технологіях</p>
        </div>
        <div class="topics-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 60px;">
          <div class="topic-card glass-card reveal">
            <div style="font-size: 32px; margin-bottom: 16px; text-align: center;">🤖</div>
            <h4 style="margin-bottom: 12px; text-align: center;">Штучний Інтелект</h4>
            <p style="margin-bottom: 16px;">Як ШІ змінює бізнес-процеси та створює нові можливості</p>
            <div style="text-align: center;">
              <a href="#" style="color: var(--color-accent); text-decoration: none; font-weight: 600;">15 статей →</a>
            </div>
          </div>
          <div class="topic-card glass-card reveal">
            <div style="font-size: 32px; margin-bottom: 16px; text-align: center;">🔒</div>
            <h4 style="margin-bottom: 12px; text-align: center;">Кібербезпека</h4>
            <p style="margin-bottom: 16px;">Сучасні загрози та методи захисту цифрових активів</p>
            <div style="text-align: center;">
              <a href="#" style="color: var(--color-accent); text-decoration: none; font-weight: 600;">12 статей →</a>
            </div>
          </div>
          <div class="topic-card glass-card reveal">
            <div style="font-size: 32px; margin-bottom: 16px; text-align: center;">☁️</div>
            <h4 style="margin-bottom: 12px; text-align: center;">Cloud Technologies</h4>
            <p style="margin-bottom: 16px;">Міграція в хмару та оптимізація хмарних рішень</p>
            <div style="text-align: center;">
              <a href="#" style="color: var(--color-accent); text-decoration: none; font-weight: 600;">8 статей →</a>
            </div>
          </div>
          <div class="topic-card glass-card reveal">
            <div style="font-size: 32px; margin-bottom: 16px; text-align: center;">📱</div>
            <h4 style="margin-bottom: 12px; text-align: center;">Mobile Development</h4>
            <p style="margin-bottom: 16px;">Тренди в розробці мобільних додатків та UX</p>
            <div style="text-align: center;">
              <a href="#" style="color: var(--color-accent); text-decoration: none; font-weight: 600;">10 статей →</a>
            </div>
          </div>
        </div>
      </section>
      <section class="container" style="padding: 80px 0;">
        <div class="section-header reveal">
          <h2>Підписка на Новини</h2>
          <p>Отримуйте останні інсайти прямо на пошту</p>
        </div>
        <div class="newsletter-card glass-card reveal" style="max-width: 600px; margin: 60px auto 0; text-align: center;">
          <h4 style="margin-bottom: 20px;">Weekly Tech Digest</h4>
          <p style="margin-bottom: 24px;">Щотижня відправляємо добірку найцікавіших матеріалів про технології та бізнес</p>
          <form style="display: flex; gap: 12px; max-width: 400px; margin: 0 auto;">
            <input type="email" placeholder="Ваш email" required style="flex: 1; padding: 12px; border: 1px solid var(--color-glass-border); border-radius: 8px; background: var(--color-glass-bg); color: var(--color-text-primary);">
            <button type="submit" class="cta-button">Підписатися</button>
          </form>
        </div>
      </section>
    `;
  }

  renderAboutPage() {
    const main = document.getElementById('main-content');
    if (!main) return;
    
    main.innerHTML = `
      ${PageHeader({ title: 'Про Nexus Studio', subtitle: 'Команда, що створює цифрове майбутнє.' })}
      <section class="container">
        <div class="section-header reveal">
          <h2>Наша Місія</h2>
          <p>Ми — архітектори цифрового майбутнього, що об'єднуємо створення, інновації та безпеку в цілісну екосистему.</p>
        </div>
        <div class="mission-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; margin-top: 60px;">
          <div class="mission-card glass-card reveal">
            <div style="font-size: 48px; margin-bottom: 20px; text-align: center;">🎯</div>
            <h4 style="margin-bottom: 16px; text-align: center;">Наша Мета</h4>
            <p>Допомагати бізнесу використовувати силу технологій для досягнення амбітних цілей та створення інноваційних продуктів.</p>
          </div>
          <div class="mission-card glass-card reveal">
            <div style="font-size: 48px; margin-bottom: 20px; text-align: center;">💡</div>
            <h4 style="margin-bottom: 16px; text-align: center;">Наш Підхід</h4>
            <p>Поєднуємо глибоку технічну експертизу з розумінням бізнесу, створюючи рішення, що справді працюють.</p>
          </div>
          <div class="mission-card glass-card reveal">
            <div style="font-size: 48px; margin-bottom: 20px; text-align: center;">🚀</div>
            <h4 style="margin-bottom: 16px; text-align: center;">Наше Майбутнє</h4>
            <p>Стати провідною студією в Україні та розширити вплив на міжнародний ринок через інноваційні проєкти.</p>
          </div>
        </div>
      </section>
      ${TeamSection()}
      ${ValuesSection()}
      ${StorySection()}
      ${StatsSection()}
    `;
  }

  renderContactPage() {
    const main = document.getElementById('main-content');
    if (!main) return;
    
    main.innerHTML = `
      ${PageHeader({ title: 'Зв\'яжіться з Нами', subtitle: 'Готові обговорити ваш проєкт?' })}
      ${ContactInfoSection()}
      <section class="container" style="padding: 80px 0;">
        <div class="section-header reveal">
          <h2>Напишіть Нам</h2>
          <p>Розкажіть про ваш проєкт, і ми зв'яжемося протягом 24 годин</p>
        </div>
        <div class="contact-form-container" style="max-width: 800px; margin: 60px auto 0;">
          <form id="contact-form" class="glass-card reveal" style="padding: 40px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: 600;">Ім'я *</label>
                <input type="text" name="name" required style="width: 100%; padding: 12px; border: 1px solid var(--color-glass-border); border-radius: 8px; background: var(--color-glass-bg); color: var(--color-text-primary);">
              </div>
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: 600;">Email *</label>
                <input type="email" name="email" required style="width: 100%; padding: 12px; border: 1px solid var(--color-glass-border); border-radius: 8px; background: var(--color-glass-bg); color: var(--color-text-primary);">
              </div>
            </div>
            <div style="margin-bottom: 20px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 600;">Компанія</label>
              <input type="text" name="company" style="width: 100%; padding: 12px; border: 1px solid var(--color-glass-border); border-radius: 8px; background: var(--color-glass-bg); color: var(--color-text-primary);">
            </div>
            <div style="margin-bottom: 20px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 600;">Тип проєкту</label>
              <select name="project-type" style="width: 100%; padding: 12px; border: 1px solid var(--color-glass-border); border-radius: 8px; background: var(--color-glass-bg); color: var(--color-text-primary);">
                <option value="">Оберіть тип проєкту</option>
                <option value="web-app">Веб-додаток</option>
                <option value="mobile-app">Мобільний додаток</option>
                <option value="ai-solution">ШІ рішення</option>
                <option value="modernization">Модернізація системи</option>
                <option value="consulting">Консультації</option>
                <option value="other">Інше</option>
              </select>
            </div>
            <div style="margin-bottom: 20px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 600;">Бюджет</label>
              <select name="budget" style="width: 100%; padding: 12px; border: 1px solid var(--color-glass-border); border-radius: 8px; background: var(--color-glass-bg); color: var(--color-text-primary);">
                <option value="">Орієнтовний бюджет</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-50k">$15,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k+">$100,000+</option>
                <option value="discuss">Обговорити індивідуально</option>
              </select>
            </div>
            <div style="margin-bottom: 24px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 600;">Опис проєкту *</label>
              <textarea name="message" rows="5" required placeholder="Розкажіть детальніше про ваш проєкт, цілі та очікування..." style="width: 100%; padding: 12px; border: 1px solid var(--color-glass-border); border-radius: 8px; background: var(--color-glass-bg); color: var(--color-text-primary); resize: vertical;"></textarea>
            </div>
            <div style="text-align: center;">
              <button type="submit" class="cta-button" style="padding: 16px 32px;">Відправити запит</button>
            </div>
          </form>
        </div>
      </section>
      ${OfficeLocationsSection()}
      <section class="container" style="padding: 80px 0;">
        <div class="section-header reveal">
          <h2>Слідкуйте за Нами</h2>
          <p>Будьте в курсі наших проєктів та інсайтів</p>
        </div>
        <div class="social-links" style="display: flex; justify-content: center; gap: 30px; margin-top: 40px;">
          <a href="#" class="social-link glass-card reveal" style="display: flex; align-items: center; gap: 12px; padding: 16px 24px; text-decoration: none; color: var(--color-text-primary);">
            <span style="font-size: 24px;">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href="#" class="social-link glass-card reveal" style="display: flex; align-items: center; gap: 12px; padding: 16px 24px; text-decoration: none; color: var(--color-text-primary);">
            <span style="font-size: 24px;">💻</span>
            <span>GitHub</span>
          </a>
          <a href="#" class="social-link glass-card reveal" style="display: flex; align-items: center; gap: 12px; padding: 16px 24px; text-decoration: none; color: var(--color-text-primary);">
            <span style="font-size: 24px;">💬</span>
            <span>Telegram</span>
          </a>
          <a href="#" class="social-link glass-card reveal" style="display: flex; align-items: center; gap: 12px; padding: 16px 24px; text-decoration: none; color: var(--color-text-primary);">
            <span style="font-size: 24px;">🎨</span>
            <span>Dribbble</span>
          </a>
        </div>
      </section>
    `;
  }

  render404() {
    const main = document.getElementById('main-content');
    if (!main) return;
    
    main.innerHTML = `
      ${PageHeader({ title: '404', subtitle: 'Сторінка не знайдена' })}
      <section class="container">
        <div class="glass-card reveal">
          <h3>Упс! Щось пішло не так</h3>
          <p>Сторінка, яку ви шукаєте, не існує або була переміщена.</p>
          <div style="margin-top:16px"><a href="/" class="cta-button" data-link>На головну</a></div>
        </div>
      </section>
    `;
  }

  renderError() {
    const app = document.getElementById('app');
    if (!app) return;
    
    app.innerHTML = `
      <div style="min-height:100vh; display:flex; align-items:center; justify-content:center; text-align:center; color:var(--color-text-primary);">
        <div>
          <h1>Помилка завантаження</h1>
          <p>Спробуйте оновити сторінку</p>
          <button onclick="window.location.reload()" class="cta-button">Оновити</button>
        </div>
      </div>
    `;
  }
}

// Initialize router when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new Router());
} else {
  new Router();
}

export default Router;