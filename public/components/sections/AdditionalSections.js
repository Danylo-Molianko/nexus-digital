// ===========================================
// ADDITIONAL SECTIONS COMPONENTS  
// ===========================================

// Statistics Section
export function StatsSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>Наші Досягнення в Цифрах</h2>
        <p>Результати, що говорять самі за себе</p>
      </div>
      <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-top: 60px;">
        <div class="stat-card glass-card reveal" style="text-align: center;">
          <div style="font-size: 48px; font-weight: 700; color: var(--color-accent); margin-bottom: 12px;">150+</div>
          <h4>Успішних Проєктів</h4>
          <p>Від стартапів до корпорацій</p>
        </div>
        <div class="stat-card glass-card reveal" style="text-align: center;">
          <div style="font-size: 48px; font-weight: 700; color: var(--color-accent); margin-bottom: 12px;">95%</div>
          <h4>Задоволених Клієнтів</h4>
          <p>Повертаються знову і знову</p>
        </div>
        <div class="stat-card glass-card reveal" style="text-align: center;">
          <div style="font-size: 48px; font-weight: 700; color: var(--color-accent); margin-bottom: 12px;">5+</div>
          <h4>Років Досвіду</h4>
          <p>В авангарді технологій</p>
        </div>
        <div class="stat-card glass-card reveal" style="text-align: center;">
          <div style="font-size: 48px; font-weight: 700; color: var(--color-accent); margin-bottom: 12px;">24/7</div>
          <h4>Підтримка</h4>
          <p>Завжди на зв'язку</p>
        </div>
      </div>
    </section>
  `;
}

// Testimonials Section
export function TestimonialsSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>Що Кажуть Наші Клієнти</h2>
        <p>Справжні відгуки про нашу роботу</p>
      </div>
      <div class="testimonials-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; margin-top: 60px;">
        <div class="testimonial-card glass-card reveal">
          <div style="margin-bottom: 20px;">⭐⭐⭐⭐⭐</div>
          <p style="font-style: italic; margin-bottom: 20px;">"Nexus Studio перетворили нашу ідею на працюючий продукт за рекордний час. Їхній підхід до безпеки вразив нас."</p>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--color-accent-dimmed); display: flex; align-items: center; justify-content: center; font-weight: 700;">АК</div>
            <div>
              <div style="font-weight: 600;">Анна Коваленко</div>
              <div style="color: var(--color-text-secondary); font-size: 14px;">CEO, TechStart</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card glass-card reveal">
          <div style="margin-bottom: 20px;">⭐⭐⭐⭐⭐</div>
          <p style="font-style: italic; margin-bottom: 20px;">"Автоматизація від Nexus зекономила нам 40% часу на рутинних процесах. Це справжня магія ШІ!"</p>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--color-accent-dimmed); display: flex; align-items: center; justify-content: center; font-weight: 700;">МП</div>
            <div>
              <div style="font-weight: 600;">Максим Петров</div>
              <div style="color: var(--color-text-secondary); font-size: 14px;">CTO, FinanceHub</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card glass-card reveal">
          <div style="margin-bottom: 20px;">⭐⭐⭐⭐⭐</div>
          <p style="font-style: italic; margin-bottom: 20px;">"Прозорість процесу та регулярні звіти дали нам впевненість у проєкті. Рекомендую!"</p>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--color-accent-dimmed); display: flex; align-items: center; justify-content: center; font-weight: 700;">ОС</div>
            <div>
              <div style="font-weight: 600;">Олена Савченко</div>
              <div style="color: var(--color-text-secondary); font-size: 14px;">Директор, RetailPro</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// FAQ Section
export function FAQSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>Часті Питання</h2>
        <p>Відповіді на найпопулярніші запитання</p>
      </div>
      <div class="faq-container" style="max-width: 800px; margin: 60px auto 0;">
        <div class="faq-item glass-card reveal" style="margin-bottom: 20px;">
          <h4 style="margin-bottom: 12px;">Скільки часу займає розробка проєкту?</h4>
          <p>Зазвичай від 4 до 16 тижнів, залежно від складності. Ми завжди надаємо реалістичні терміни на етапі планування.</p>
        </div>
        <div class="faq-item glass-card reveal" style="margin-bottom: 20px;">
          <h4 style="margin-bottom: 12px;">Чи надаєте підтримку після запуску?</h4>
          <p>Так, ми пропонуємо пакети підтримки від базового до преміум. Більшість клієнтів обирають 6-місячну підтримку.</p>
        </div>
        <div class="faq-item glass-card reveal" style="margin-bottom: 20px;">
          <h4 style="margin-bottom: 12px;">Які технології ви використовуєте?</h4>
          <p>React, Node.js, Python, AWS, Docker і багато інших. Обираємо найкращі інструменти для кожного конкретного завдання.</p>
        </div>
        <div class="faq-item glass-card reveal" style="margin-bottom: 20px;">
          <h4 style="margin-bottom: 12px;">Працюєте з міжнародними клієнтами?</h4>
          <p>Абсолютно! У нас є досвід роботи з клієнтами з США, Європи та Азії. Часові пояси не перешкода.</p>
        </div>
      </div>
    </section>
  `;
}

// Latest News Section
export function LatestNewsSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>Останні Новини</h2>
        <p>Тренди і новинки з світу технологій</p>
      </div>
      <div class="news-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; margin-top: 60px;">
        <div class="news-card glass-card reveal">
          <div style="height: 200px; background: linear-gradient(135deg, var(--color-accent-dimmed) 0%, var(--color-glass-bg) 100%); border-radius: 12px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center;">
            <div style="font-size: 48px;">🚀</div>
          </div>
          <div style="color: var(--color-accent); font-size: 14px; margin-bottom: 8px;">15 вересня 2025</div>
          <h4 style="margin-bottom: 12px;">Майбутнє ШІ в Веб-розробці</h4>
          <p>Як штучний інтелект змінює підходи до створення веб-додатків...</p>
          <a href="/insights" style="color: var(--color-accent); text-decoration: none; font-weight: 600;">Читати більше →</a>
        </div>
        <div class="news-card glass-card reveal">
          <div style="height: 200px; background: linear-gradient(135deg, var(--color-accent-dimmed) 0%, var(--color-glass-bg) 100%); border-radius: 12px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center;">
            <div style="font-size: 48px;">🔒</div>
          </div>
          <div style="color: var(--color-accent); font-size: 14px; margin-bottom: 8px;">10 вересня 2025</div>
          <h4 style="margin-bottom: 12px;">Нові Стандарти Кібербезпеки</h4>
          <p>Огляд актуальних загроз та методів захисту в 2025 році...</p>
          <a href="/insights" style="color: var(--color-accent); text-decoration: none; font-weight: 600;">Читати більше →</a>
        </div>
        <div class="news-card glass-card reveal">
          <div style="height: 200px; background: linear-gradient(135deg, var(--color-accent-dimmed) 0%, var(--color-glass-bg) 100%); border-radius: 12px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center;">
            <div style="font-size: 48px;">⚡</div>
          </div>
          <div style="color: var(--color-accent); font-size: 14px; margin-bottom: 8px;">5 вересня 2025</div>
          <h4 style="margin-bottom: 12px;">Оптимізація Продуктивності</h4>
          <p>10 способів зробити ваш додаток швидшим за 24 години...</p>
          <a href="/insights" style="color: var(--color-accent); text-decoration: none; font-weight: 600;">Читати більше →</a>
        </div>
      </div>
    </section>
  `;
}

// Service Details Section
export function ServiceDetailsSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>Детальний Опис Послуг</h2>
        <p>Глибоке занурення в кожен напрямок нашої експертизи</p>
      </div>
      <div class="service-details" style="margin-top: 60px;">
        <div class="service-detail-card glass-card reveal" style="margin-bottom: 40px;">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            <div style="font-size: 32px;">🏗️</div>
            <h3>Створення та Модернізація</h3>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
            <div>
              <h4 style="margin-bottom: 16px;">Що включено:</h4>
              <ul style="color: var(--color-text-secondary);">
                <li>Архітектурне планування</li>
                <li>Custom розробка</li>
                <li>API інтеграції</li>
                <li>База даних дизайн</li>
                <li>Тестування та QA</li>
              </ul>
            </div>
            <div>
              <h4 style="margin-bottom: 16px;">Технології:</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">React</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">Node.js</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">Python</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">PostgreSQL</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">AWS</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="service-detail-card glass-card reveal" style="margin-bottom: 40px;">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            <div style="font-size: 32px;">🤖</div>
            <h3>Інновації та Автоматизація</h3>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
            <div>
              <h4 style="margin-bottom: 16px;">Що включено:</h4>
              <ul style="color: var(--color-text-secondary);">
                <li>ML моделі під бізнес</li>
                <li>Автоматизація workflow</li>
                <li>Чат-боти та асистенти</li>
                <li>Аналітика та звіти</li>
                <li>Інтеграція AI API</li>
              </ul>
            </div>
            <div>
              <h4 style="margin-bottom: 16px;">Інструменти:</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">TensorFlow</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">OpenAI</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">Zapier</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">Power BI</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">Azure AI</span>
              </div>
            </div>
          </div>
        </div>

        <div class="service-detail-card glass-card reveal">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            <div style="font-size: 32px;">🛡️</div>
            <h3>Захист та Відповідність</h3>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
            <div>
              <h4 style="margin-bottom: 16px;">Що включено:</h4>
              <ul style="color: var(--color-text-secondary);">
                <li>Аудити безпеки</li>
                <li>Pen-testing</li>
                <li>GDPR комплаєнс</li>
                <li>DevSecOps setup</li>
                <li>Моніторинг загроз</li>
              </ul>
            </div>
            <div>
              <h4 style="margin-bottom: 16px;">Стандарти:</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">ISO 27001</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">OWASP</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">GDPR</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">SOC 2</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">PCI DSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Pricing Section
export function PricingSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>Пакети Послуг</h2>
        <p>Гнучкі рішення для кожного бюджету</p>
      </div>
      <div class="pricing-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 60px;">
        <div class="pricing-card glass-card reveal" style="text-align: center;">
          <h4 style="margin-bottom: 12px;">Стартап</h4>
          <div style="font-size: 36px; font-weight: 700; color: var(--color-accent); margin: 20px 0;">$5,000</div>
          <p style="margin-bottom: 24px;">Ідеально для MVP</p>
          <ul style="text-align: left; margin-bottom: 24px;">
            <li>Landing page</li>
            <li>Базовий CMS</li>
            <li>Мобільна версія</li>
            <li>30 днів підтримки</li>
          </ul>
          <a href="/contact" class="cta-button">Вибрати план</a>
        </div>
        <div class="pricing-card glass-card reveal" style="text-align: center; border: 2px solid var(--color-accent);">
          <div style="background: var(--color-accent); color: #000; padding: 8px; margin: -20px -20px 20px; border-radius: 12px 12px 0 0; font-weight: 700;">Популярний</div>
          <h4 style="margin-bottom: 12px;">Бізнес</h4>
          <div style="font-size: 36px; font-weight: 700; color: var(--color-accent); margin: 20px 0;">$15,000</div>
          <p style="margin-bottom: 24px;">Для зростаючих компаній</p>
          <ul style="text-align: left; margin-bottom: 24px;">
            <li>Повний веб-додаток</li>
            <li>API інтеграції</li>
            <li>Адмін панель</li>
            <li>6 місяців підтримки</li>
            <li>Аналітика</li>
          </ul>
          <a href="/contact" class="cta-button">Вибрати план</a>
        </div>
        <div class="pricing-card glass-card reveal" style="text-align: center;">
          <h4 style="margin-bottom: 12px;">Ентерпрайз</h4>
          <div style="font-size: 36px; font-weight: 700; color: var(--color-accent); margin: 20px 0;">Індивідуально</div>
          <p style="margin-bottom: 24px;">Комплексні рішення</p>
          <ul style="text-align: left; margin-bottom: 24px;">
            <li>Екосистема продуктів</li>
            <li>ШІ інтеграція</li>
            <li>Безпека enterprise</li>
            <li>Постійна підтримка</li>
            <li>Навчання команди</li>
          </ul>
          <a href="/contact" class="cta-button secondary">Обговорити</a>
        </div>
      </div>
    </section>
  `;
}