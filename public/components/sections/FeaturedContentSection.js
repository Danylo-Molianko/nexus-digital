export function FeaturedContentSection() {
  return `
    <section class="container">
      <div class="section-header reveal">
        <h2>Вибрані Роботи та Інсайти</h2>
        <p>Один яскравий кейс та свіжа стаття з лідерства думок.</p>
      </div>
      <div class="pillars-grid">
        <div class="glass-card reveal">
          <h3>Кейс: Автоматизація виробництва</h3>
          <p>Інтегрували ML для прогнозу попиту та зменшили простої на 20%.</p>
          <div style="margin-top:12px"><a href="/portfolio" class="cta-button secondary">Переглянути кейси</a></div>
        </div>
        <div class="glass-card reveal">
          <h3>Інсайт: Готовність до ШІ для МСП</h3>
          <p>Практичний посібник для керівників щодо впровадження ШІ з вимірюваним ROI.</p>
          <div style="margin-top:12px"><a href="/insights" class="cta-button secondary">Читати інсайти</a></div>
        </div>
        <div class="glass-card reveal">
          <h3>Безпека як перевага</h3>
          <p>DevSecOps і 360° захист перетворюють відповідність на довіру клієнтів.</p>
          <div style="margin-top:12px"><a href="/services" class="cta-button secondary">Наші послуги</a></div>
        </div>
      </div>
    </section>
  `;
}
