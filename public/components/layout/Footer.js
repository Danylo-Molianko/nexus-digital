export function Footer() {
  const year = new Date().getFullYear();
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column reveal">
          <h4>NEXUS STUDIO</h4>
          <p>Architects of Your Digital Future.</p>
        </div>
        <div class="footer-column reveal">
          <h4>NAVIGATION</h4>
          <ul>
            <li><a href="/services" data-link>Services</a></li>
            <li><a href="/process" data-link>Our Process</a></li>
            <li><a href="/portfolio" data-link>Portfolio</a></li>
            <li><a href="/about" data-link>About Us</a></li>
          </ul>
        </div>
        <div class="footer-column reveal">
          <h4>CONNECT</h4>
          <ul>
            <li><a href="mailto:hello@nexus.studio">hello@nexus.studio</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </div>
        <div class="footer-column reveal">
          <h4>LEGAL</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom reveal">
        <p>&copy; ${year} Nexus Studio. All rights reserved.</p>
      </div>
    </div>
  </footer>`;
}
