export function Header() {
  return `
  <header id="main-header" class="container">
    <a href="/" class="logo" aria-label="На головну Nexus Studio">NEXUS STUDIO</a>
    <nav aria-label="Головна навігація">
      <ul>
        <li><a href="/services">Послуги</a></li>
        <li><a href="/process">Наш Процес</a></li>
        <li><a href="/portfolio">Проєкти</a></li>
        <li><a href="/insights">Інсайти</a></li>
        <li><a href="/about">Про Нас</a></li>
      </ul>
    </nav>
    <a href="/contact" class="cta-button">Консультація</a>
  </header>`;
}
