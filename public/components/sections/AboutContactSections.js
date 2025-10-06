// ===========================================
// ABOUT AND CONTACT PAGE COMPONENTS
// ===========================================

// Team Section
export function TeamSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>Наша Команда</h2>
        <p>Експерти, які створюють ваше цифрове майбутнє</p>
      </div>
      <div class="team-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; margin-top: 60px;">
        <div class="team-member glass-card reveal" style="text-align: center;">
          <div style="width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(135deg, var(--color-accent) 0%, #764ba2 100%); margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 36px; color: white; font-weight: 700;">АК</div>
          <h4 style="margin-bottom: 8px;">Андрій Коваленко</h4>
          <div style="color: var(--color-accent); margin-bottom: 16px;">CTO & Співзасновник</div>
          <p style="margin-bottom: 20px;">15+ років у розробці. Експерт з архітектури та масштабування систем.</p>
          <div style="display: flex; justify-content: center; gap: 12px;">
            <a href="#" style="color: var(--color-accent);">LinkedIn</a>
            <a href="#" style="color: var(--color-accent);">GitHub</a>
          </div>
        </div>
        
        <div class="team-member glass-card reveal" style="text-align: center;">
          <div style="width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 36px; color: white; font-weight: 700;">МС</div>
          <h4 style="margin-bottom: 8px;">Марія Смирнова</h4>
          <div style="color: var(--color-accent); margin-bottom: 16px;">Lead UX/UI Designer</div>
          <p style="margin-bottom: 20px;">Магістр дизайну. Створює інтуїтивні інтерфейси для складних систем.</p>
          <div style="display: flex; justify-content: center; gap: 12px;">
            <a href="#" style="color: var(--color-accent);">Dribbble</a>
            <a href="#" style="color: var(--color-accent);">Behance</a>
          </div>
        </div>

        <div class="team-member glass-card reveal" style="text-align: center;">
          <div style="width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 36px; color: white; font-weight: 700;">ОП</div>
          <h4 style="margin-bottom: 8px;">Олександр Петренко</h4>
          <div style="color: var(--color-accent); margin-bottom: 16px;">AI/ML Specialist</div>
          <p style="margin-bottom: 20px;">PhD в Computer Science. Розробляє ШІ-рішення для бізнесу.</p>
          <div style="display: flex; justify-content: center; gap: 12px;">
            <a href="#" style="color: var(--color-accent);">Research</a>
            <a href="#" style="color: var(--color-accent);">LinkedIn</a>
          </div>
        </div>

        <div class="team-member glass-card reveal" style="text-align: center;">
          <div style="width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 36px; color: white; font-weight: 700;">ЄМ</div>
          <h4 style="margin-bottom: 8px;">Євгенія Мельник</h4>
          <div style="color: var(--color-accent); margin-bottom: 16px;">DevOps Engineer</div>
          <p style="margin-bottom: 20px;">Сертифікований AWS архітект. Експерт з containerization та CI/CD.</p>
          <div style="display: flex; justify-content: center; gap: 12px;">
            <a href="#" style="color: var(--color-accent);">AWS</a>
            <a href="#" style="color: var(--color-accent);">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Company Values Section
export function ValuesSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>Наші Цінності</h2>
        <p>Принципи, які направляють нашу роботу</p>
      </div>
      <div class="values-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 60px;">
        <div class="value-card glass-card reveal">
          <div style="font-size: 48px; margin-bottom: 20px; text-align: center;">🎯</div>
          <h4 style="margin-bottom: 16px; text-align: center;">Фокус на Результат</h4>
          <p>Кожен проєкт має конкретні, вимірювані цілі. Ми не просто пишемо код - ми вирішуємо бізнес-задачі.</p>
        </div>
        
        <div class="value-card glass-card reveal">
          <div style="font-size: 48px; margin-bottom: 20px; text-align: center;">🔄</div>
          <h4 style="margin-bottom: 16px; text-align: center;">Безперервне Вдосконалення</h4>
          <p>Технології розвиваються швидко, і ми йдемо в ногу з часом. Регулярно навчаємось та оновлюємо наші підходи.</p>
        </div>

        <div class="value-card glass-card reveal">
          <div style="font-size: 48px; margin-bottom: 20px; text-align: center;">🤝</div>
          <h4 style="margin-bottom: 16px; text-align: center;">Партнерство</h4>
          <p>Ми не просто виконавці - ми партнери. Ваш успіх є нашим успіхом, і ми інвестуємо в довгострокові відносини.</p>
        </div>

        <div class="value-card glass-card reveal">
          <div style="font-size: 48px; margin-bottom: 20px; text-align: center;">🔒</div>
          <h4 style="margin-bottom: 16px; text-align: center;">Безпека Перш за Все</h4>
          <p>Кібербезпека не є опцією - це основа. Кожен рядок коду пишеться з думкою про захист.</p>
        </div>

        <div class="value-card glass-card reveal">
          <div style="font-size: 48px; margin-bottom: 20px; text-align: center;">💡</div>
          <h4 style="margin-bottom: 16px; text-align: center;">Інновації</h4>
          <p>Ми не боїмось експериментувати з новими технологіями, якщо це принесе користь вашому бізнесу.</p>
        </div>

        <div class="value-card glass-card reveal">
          <div style="font-size: 48px; margin-bottom: 20px; text-align: center;">🌍</div>
          <h4 style="margin-bottom: 16px; text-align: center;">Глобальна Перспектива</h4>
          <p>Створюємо продукти, готові до міжнародного масштабування з першого дня.</p>
        </div>
      </div>
    </section>
  `;
}

// Company Story Section
export function StorySection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>Наша Історія</h2>
        <p>Шлях від ідеї до провідної студії</p>
      </div>
      <div class="story-timeline" style="margin-top: 60px;">
        <div class="story-item glass-card reveal" style="margin-bottom: 30px; padding: 40px;">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            <div style="background: var(--color-accent); color: #000; padding: 8px 16px; border-radius: 20px; font-weight: 700;">2020</div>
            <h4>Початок Шляху</h4>
          </div>
          <p>Двоє друзів-розробників вирішили створити студію, яка б поєднувала технічну експертизу з бізнес-мисленням. Перші проєкти - локальні стартапи.</p>
        </div>

        <div class="story-item glass-card reveal" style="margin-bottom: 30px; padding: 40px;">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            <div style="background: var(--color-accent); color: #000; padding: 8px 16px; border-radius: 20px; font-weight: 700;">2021</div>
            <h4>Перші Великі Контракти</h4>
          </div>
          <p>Успішна реалізація проєкту для фінтех-стартапу привела до сотрудництва з інвестиційними фондами. Команда розширилась до 8 осіб.</p>
        </div>

        <div class="story-item glass-card reveal" style="margin-bottom: 30px; padding: 40px;">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            <div style="background: var(--color-accent); color: #000; padding: 8px 16px; border-radius: 20px; font-weight: 700;">2022</div>
            <h4>Фокус на ШІ</h4>
          </div>
          <p>Додали експертизу в машинному навчанні. Першi AI-powered проєкти принесли клієнтам реальну автоматизацію та економію.</p>
        </div>

        <div class="story-item glass-card reveal" style="margin-bottom: 30px; padding: 40px;">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            <div style="background: var(--color-accent); color: #000; padding: 8px 16px; border-radius: 20px; font-weight: 700;">2023</div>
            <h4>Міжнародна Експансія</h4>
          </div>
          <p>Почали працювати з європейськими та американськими клієнтами. Отримали сертифікації AWS та ISO 27001.</p>
        </div>

        <div class="story-item glass-card reveal" style="padding: 40px;">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            <div style="background: var(--color-accent); color: #000; padding: 8px 16px; border-radius: 20px; font-weight: 700;">2025</div>
            <h4>Nexus Studio Сьогодні</h4>
          </div>
          <p>Команда з 25+ експертів, 150+ успішних проєктів, клієнти у 15 країнах. Ми продовжуємо розвиватись та формувати майбутнє цифрових технологій.</p>
        </div>
      </div>
    </section>
  `;
}

// Contact Info Section
export function ContactInfoSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>Способи Зв'язку</h2>
        <p>Оберіть зручний для вас варіант</p>
      </div>
      <div class="contact-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; margin-top: 60px;">
        <div class="contact-card glass-card reveal" style="text-align: center;">
          <div style="font-size: 48px; margin-bottom: 20px;">📧</div>
          <h4 style="margin-bottom: 16px;">Email</h4>
          <p style="margin-bottom: 20px;">Надішліть нам деталі вашого проєкту</p>
          <a href="mailto:hello@nexus.studio" class="cta-button">hello@nexus.studio</a>
        </div>

        <div class="contact-card glass-card reveal" style="text-align: center;">
          <div style="font-size: 48px; margin-bottom: 20px;">📞</div>
          <h4 style="margin-bottom: 16px;">Телефон</h4>
          <p style="margin-bottom: 20px;">Зателефонуйте для швидкої консультації</p>
          <a href="tel:+380501234567" class="cta-button">+380 50 123 45 67</a>
        </div>

        <div class="contact-card glass-card reveal" style="text-align: center;">
          <div style="font-size: 48px; margin-bottom: 20px;">💬</div>
          <h4 style="margin-bottom: 16px;">Telegram</h4>
          <p style="margin-bottom: 20px;">Миттєві відповіді на ваші питання</p>
          <a href="https://t.me/nexusstudio" class="cta-button">@nexusstudio</a>
        </div>
      </div>
    </section>
  `;
}

// Office Locations Section
export function OfficeLocationsSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>Наші Офіси</h2>
        <p>Знайдіть нас в найближчому місті</p>
      </div>
      <div class="offices-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px; margin-top: 60px;">
        <div class="office-card glass-card reveal">
          <h4 style="margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 24px;">🏢</span>
            Київ (Головний офіс)
          </h4>
          <div style="margin-bottom: 20px;">
            <div style="height: 200px; background: linear-gradient(135deg, var(--color-accent-dimmed) 0%, var(--color-glass-bg) 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
              <div style="font-size: 48px;">🌆</div>
            </div>
            <p><strong>Адреса:</strong> вул. Хрещатик, 22, БЦ "Tech Tower"</p>
            <p><strong>Години роботи:</strong> Пн-Пт 9:00-18:00</p>
            <p><strong>Команда:</strong> 20 спеціалістів</p>
          </div>
          <a href="#" class="cta-button secondary">Показати на карті</a>
        </div>

        <div class="office-card glass-card reveal">
          <h4 style="margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 24px;">🌊</span>
            Одеса
          </h4>
          <div style="margin-bottom: 20px;">
            <div style="height: 200px; background: linear-gradient(135deg, var(--color-accent-dimmed) 0%, var(--color-glass-bg) 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
              <div style="font-size: 48px;">🏖️</div>
            </div>
            <p><strong>Адреса:</strong> вул. Дерибасівська, 15</p>
            <p><strong>Години роботи:</strong> Пн-Пт 9:00-18:00</p>
            <p><strong>Команда:</strong> 8 спеціалістів</p>
          </div>
          <a href="#" class="cta-button secondary">Показати на карті</a>
        </div>

        <div class="office-card glass-card reveal">
          <h4 style="margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 24px;">🌍</span>
            Remote Hub
          </h4>
          <div style="margin-bottom: 20px;">
            <div style="height: 200px; background: linear-gradient(135deg, var(--color-accent-dimmed) 0%, var(--color-glass-bg) 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
              <div style="font-size: 48px;">💻</div>
            </div>
            <p><strong>Географія:</strong> Україна, Європа, США</p>
            <p><strong>Доступність:</strong> 24/7 для критичних питань</p>
            <p><strong>Команда:</strong> 15+ віддалених експертів</p>
          </div>
          <a href="#" class="cta-button secondary">Онлайн зустріч</a>
        </div>
      </div>
    </section>
  `;
}