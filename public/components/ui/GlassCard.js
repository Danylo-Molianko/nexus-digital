export function GlassCard({ icon = '', title = '', description = '' } = {}) {
  return `
    <div class="glass-card reveal">
      <div class="icon-wrapper">${icon}</div>
      <h3>${title}</h3>
      <div class="description">${description}</div>
    </div>
  `;
}
