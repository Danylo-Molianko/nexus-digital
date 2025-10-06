// ===========================================
// PORTFOLIO AND PROJECT COMPONENTS
// ===========================================

// Project Showcase Section
export function ProjectShowcaseSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>Наші Найкращі Проєкти</h2>
        <p>Реальні кейси з детальним розбором</p>
      </div>
      <div class="project-filters reveal" style="display: flex; justify-content: center; gap: 20px; margin: 40px 0;">
        <button class="filter-btn active" data-filter="all" style="background: var(--color-accent); color: #000; border: none; padding: 12px 24px; border-radius: 25px; font-weight: 600;">Всі</button>
        <button class="filter-btn" data-filter="web" style="background: var(--color-glass-bg); color: var(--color-text-primary); border: 1px solid var(--color-glass-border); padding: 12px 24px; border-radius: 25px; font-weight: 600;">Веб-додатки</button>
        <button class="filter-btn" data-filter="mobile" style="background: var(--color-glass-bg); color: var(--color-text-primary); border: 1px solid var(--color-glass-border); padding: 12px 24px; border-radius: 25px; font-weight: 600;">Мобільні</button>
        <button class="filter-btn" data-filter="ai" style="background: var(--color-glass-bg); color: var(--color-text-primary); border: 1px solid var(--color-glass-border); padding: 12px 24px; border-radius: 25px; font-weight: 600;">ШІ рішення</button>
      </div>
      <div class="projects-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 40px; margin-top: 60px;">
        <div class="project-card glass-card reveal" data-category="web">
          <div style="height: 250px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; margin-bottom: 20px; position: relative; overflow: hidden;">
            <div style="position: absolute; bottom: 20px; left: 20px; background: rgba(0,0,0,0.7); padding: 8px 16px; border-radius: 20px; color: white; font-size: 14px;">E-commerce</div>
          </div>
          <h4 style="margin-bottom: 12px;">Інтернет-магазин ElectroHub</h4>
          <p style="margin-bottom: 16px;">Повний редизайн та розробка платформи з ШІ-рекомендаціями</p>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="color: var(--color-accent); font-weight: 600;">+150% продажів</div>
            <a href="#" style="color: var(--color-accent); text-decoration: none;">Детальніше →</a>
          </div>
        </div>
        <div class="project-card glass-card reveal" data-category="mobile">
          <div style="height: 250px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 12px; margin-bottom: 20px; position: relative; overflow: hidden;">
            <div style="position: absolute; bottom: 20px; left: 20px; background: rgba(0,0,0,0.7); padding: 8px 16px; border-radius: 20px; color: white; font-size: 14px;">Mobile App</div>
          </div>
          <h4 style="margin-bottom: 12px;">FitTracker Pro</h4>
          <p style="margin-bottom: 16px;">Мобільний додаток для фітнесу з ШІ-тренером</p>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="color: var(--color-accent); font-weight: 600;">50K+ завантажень</div>
            <a href="#" style="color: var(--color-accent); text-decoration: none;">Детальніше →</a>
          </div>
        </div>
        <div class="project-card glass-card reveal" data-category="ai">
          <div style="height: 250px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 12px; margin-bottom: 20px; position: relative; overflow: hidden;">
            <div style="position: absolute; bottom: 20px; left: 20px; background: rgba(0,0,0,0.7); padding: 8px 16px; border-radius: 20px; color: white; font-size: 14px;">AI Solution</div>
          </div>
          <h4 style="margin-bottom: 12px;">DocuBot Assistant</h4>
          <p style="margin-bottom: 16px;">ШІ-асистент для автоматизації документообігу</p>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="color: var(--color-accent); font-weight: 600;">-60% часу на документи</div>
            <a href="#" style="color: var(--color-accent); text-decoration: none;">Детальніше →</a>
          </div>
        </div>
        <div class="project-card glass-card reveal" data-category="web">
          <div style="height: 250px; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); border-radius: 12px; margin-bottom: 20px; position: relative; overflow: hidden;">
            <div style="position: absolute; bottom: 20px; left: 20px; background: rgba(0,0,0,0.7); padding: 8px 16px; border-radius: 20px; color: white; font-size: 14px;">Platform</div>
          </div>
          <h4 style="margin-bottom: 12px;">EduConnect Learning</h4>
          <p style="margin-bottom: 16px;">Освітня платформа з адаптивним навчанням</p>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="color: var(--color-accent); font-weight: 600;">10K+ студентів</div>
            <a href="#" style="color: var(--color-accent); text-decoration: none;">Детальніше →</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Process Timeline Section
export function ProcessTimelineSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>Детальний Timeline Проєкту</h2>
        <p>Прозорість на кожному етапі розробки</p>
      </div>
      <div class="timeline-container" style="margin-top: 60px;">
        <div class="timeline-week glass-card reveal" style="margin-bottom: 30px; padding: 30px;">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            <div style="background: var(--color-accent); color: #000; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">1</div>
            <h4>Тиждень 1-2: Дослідження та Планування</h4>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
            <div>
              <h5 style="color: var(--color-accent); margin-bottom: 8px;">Deliverables:</h5>
              <ul style="font-size: 14px;">
                <li>Технічне завдання</li>
                <li>Wireframes</li>
                <li>Architecture diagram</li>
              </ul>
            </div>
            <div>
              <h5 style="color: var(--color-accent); margin-bottom: 8px;">Команда:</h5>
              <p style="font-size: 14px;">PM, UX/UI Designer, Solution Architect</p>
            </div>
            <div>
              <h5 style="color: var(--color-accent); margin-bottom: 8px;">Milestone:</h5>
              <p style="font-size: 14px;">Затвердження концепції та технічного стеку</p>
            </div>
          </div>
        </div>
        
        <div class="timeline-week glass-card reveal" style="margin-bottom: 30px; padding: 30px;">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            <div style="background: var(--color-accent); color: #000; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">2</div>
            <h4>Тиждень 3-6: Дизайн та Прототипування</h4>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
            <div>
              <h5 style="color: var(--color-accent); margin-bottom: 8px;">Deliverables:</h5>
              <ul style="font-size: 14px;">
                <li>UI/UX дизайн</li>
                <li>Інтерактивний прототип</li>
                <li>Design system</li>
              </ul>
            </div>
            <div>
              <h5 style="color: var(--color-accent); margin-bottom: 8px;">Команда:</h5>
              <p style="font-size: 14px;">UX/UI Designer, Frontend Lead</p>
            </div>
            <div>
              <h5 style="color: var(--color-accent); margin-bottom: 8px;">Milestone:</h5>
              <p style="font-size: 14px;">Затвердження фінального дизайну</p>
            </div>
          </div>
        </div>

        <div class="timeline-week glass-card reveal" style="margin-bottom: 30px; padding: 30px;">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            <div style="background: var(--color-accent); color: #000; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">3</div>
            <h4>Тиждень 7-12: Розробка MVP</h4>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
            <div>
              <h5 style="color: var(--color-accent); margin-bottom: 8px;">Deliverables:</h5>
              <ul style="font-size: 14px;">
                <li>Робочий MVP</li>
                <li>Базовий API</li>
                <li>Unit тести</li>
              </ul>
            </div>
            <div>
              <h5 style="color: var(--color-accent); margin-bottom: 8px;">Команда:</h5>
              <p style="font-size: 14px;">Full-stack developers, QA Engineer</p>
            </div>
            <div>
              <h5 style="color: var(--color-accent); margin-bottom: 8px;">Milestone:</h5>
              <p style="font-size: 14px;">Демо першої робочої версії</p>
            </div>
          </div>
        </div>

        <div class="timeline-week glass-card reveal" style="margin-bottom: 30px; padding: 30px;">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            <div style="background: var(--color-accent); color: #000; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">4</div>
            <h4>Тиждень 13-16: Фіналізація та Запуск</h4>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
            <div>
              <h5 style="color: var(--color-accent); margin-bottom: 8px;">Deliverables:</h5>
              <ul style="font-size: 14px;">
                <li>Production ready код</li>
                <li>Документація</li>
                <li>Deployment</li>
              </ul>
            </div>
            <div>
              <h5 style="color: var(--color-accent); margin-bottom: 8px;">Команда:</h5>
              <p style="font-size: 14px;">DevOps, Security Expert, PM</p>
            </div>
            <div>
              <h5 style="color: var(--color-accent); margin-bottom: 8px;">Milestone:</h5>
              <p style="font-size: 14px;">Успішний запуск у продакшен</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Tools and Technologies Section
export function ToolsSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>Інструменти та Технології</h2>
        <p>Сучасний стек для надійних рішень</p>
      </div>
      <div class="tools-categories" style="margin-top: 60px;">
        <div class="tool-category glass-card reveal" style="margin-bottom: 40px; padding: 40px;">
          <h3 style="margin-bottom: 30px; display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 24px;">💻</span>
            Frontend Development
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 20px;">
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; background: var(--color-accent-dimmed); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 24px;">⚛️</div>
              <div style="font-weight: 600;">React</div>
            </div>
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; background: var(--color-accent-dimmed); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 24px;">📱</div>
              <div style="font-weight: 600;">React Native</div>
            </div>
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; background: var(--color-accent-dimmed); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 24px;">🎨</div>
              <div style="font-weight: 600;">Tailwind</div>
            </div>
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; background: var(--color-accent-dimmed); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 24px;">⚡</div>
              <div style="font-weight: 600;">Vite</div>
            </div>
          </div>
        </div>

        <div class="tool-category glass-card reveal" style="margin-bottom: 40px; padding: 40px;">
          <h3 style="margin-bottom: 30px; display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 24px;">🔧</span>
            Backend Development
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 20px;">
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; background: var(--color-accent-dimmed); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 24px;">🟢</div>
              <div style="font-weight: 600;">Node.js</div>
            </div>
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; background: var(--color-accent-dimmed); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 24px;">🐍</div>
              <div style="font-weight: 600;">Python</div>
            </div>
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; background: var(--color-accent-dimmed); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 24px;">🗄️</div>
              <div style="font-weight: 600;">PostgreSQL</div>
            </div>
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; background: var(--color-accent-dimmed); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 24px;">📦</div>
              <div style="font-weight: 600;">Docker</div>
            </div>
          </div>
        </div>

        <div class="tool-category glass-card reveal" style="padding: 40px;">
          <h3 style="margin-bottom: 30px; display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 24px;">☁️</span>
            Cloud & DevOps
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 20px;">
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; background: var(--color-accent-dimmed); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 24px;">☁️</div>
              <div style="font-weight: 600;">AWS</div>
            </div>
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; background: var(--color-accent-dimmed); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 24px;">🔄</div>
              <div style="font-weight: 600;">CI/CD</div>
            </div>
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; background: var(--color-accent-dimmed); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 24px;">📊</div>
              <div style="font-weight: 600;">Monitoring</div>
            </div>
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; background: var(--color-accent-dimmed); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-size: 24px;">🔒</div>
              <div style="font-weight: 600;">Security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}