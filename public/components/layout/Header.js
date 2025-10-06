export function Header() {
  return `
  <header id="main-header" class="container">
    <a href="/" class="logo" data-link aria-label="Home Nexus Studio">NEXUS STUDIO</a>
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="/services" data-link>Services</a></li>
        <li><a href="/process" data-link>Our Process</a></li>
        <li><a href="/portfolio" data-link>Projects</a></li>
        <li><a href="/insights" data-link>Insights</a></li>
        <li><a href="/about" data-link>About Us</a></li>
      </ul>
    </nav>
    <a href="/contact" class="cta-button" data-link>Consultation</a>
  </header>`;
}
