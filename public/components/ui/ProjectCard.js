export function ProjectCard({ image = '', title = '', summary = '', tags = [] } = {}) {
  return `
    <article class="glass-card reveal" style="padding:0;overflow:hidden;">
      <div style="height:200px;background:#0e1326 url('${image}') center/cover no-repeat;"></div>
      <div style="padding:24px;">
        <h3 style="margin-bottom:8px;">${title}</h3>
        <p style="margin-bottom:16px;">${summary}</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;">
          ${tags.map(t => `<span style='border:1px solid var(--color-glass-border);border-radius:999px;padding:4px 10px;font-size:12px;color:var(--color-text-secondary);'>${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `;
}
