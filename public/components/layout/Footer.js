export function Footer() {
  const year = new Date().getFullYear();
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column reveal">
          <h4>NEXUS STUDIO</h4>
          <p>Архітектори Вашого Цифрового Майбутнього.</p>
        </div>
        <div class="footer-column reveal">
          <h4>Навігація</h4>
          <ul>
            <li><a href="/#pillars">Послуги</a></li>
            <li><a href="/#process">Наш Процес</a></li>
            <li><a href="/portfolio">Проєкти</a></li>
            <li><a href="/about">Про Нас</a></li>
          </ul>
        </div>
        <div class="footer-column reveal">
          <h4>Контакти</h4>
          <ul>
            <li><a href="mailto:hello@nexus.studio">hello@nexus.studio</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </div>
        <div class="footer-column reveal">
          <h4>Правова інформація</h4>
          <ul>
            <li><a href="#">Політика Конфіденційності</a></li>
            <li><a href="#">Умови Використання</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom reveal">
        <p>&copy; ${year} Nexus Studio. Всі права захищено.</p>
      </div>
    </div>
  </footer>`;
}
