export function PageHeader({ title = '', subtitle = '' } = {}) {
  return `
    <section class="container" style="min-height: 40vh; display:flex; align-items:center; text-align:center;">
      <div class="hero-content">
        <h1>${title}</h1>
        ${subtitle ? `<p>${subtitle}</p>` : ''}
      </div>
    </section>
  `;
}
