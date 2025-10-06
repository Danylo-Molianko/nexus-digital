export function CaseStudyCard({ 
  image = '', 
  title = '', 
  summary = '', 
  tags = [], 
  client = '', 
  challenge = '', 
  solution = '', 
  results = '', 
  quote = '' 
} = {}) {
  return `
    <article class="glass-card reveal" style="padding:0;overflow:hidden;">
      <div style="height:200px;background:#0e1326 url('${image}') center/cover no-repeat;display:flex;align-items:center;justify-content:center;color:#666;">
        ${image ? '' : '📊'}
      </div>
      <div style="padding:24px;">
        <h3 style="margin-bottom:12px;">${title}</h3>
        <p style="margin-bottom:16px;font-size:16px;line-height:1.5;">${summary}</p>
        
        <div style="margin-bottom:16px;">
          <h4 style="font-size:14px;font-weight:600;margin-bottom:8px;color:var(--color-accent);">Клієнт:</h4>
          <p style="font-size:14px;">${client}</p>
        </div>
        
        <div style="margin-bottom:16px;">
          <h4 style="font-size:14px;font-weight:600;margin-bottom:8px;color:var(--color-accent);">Виклик:</h4>
          <p style="font-size:14px;">${challenge}</p>
        </div>
        
        <div style="margin-bottom:16px;">
          <h4 style="font-size:14px;font-weight:600;margin-bottom:8px;color:var(--color-accent);">Nexus Рішення:</h4>
          <p style="font-size:14px;">${solution}</p>
        </div>
        
        <div style="margin-bottom:16px;">
          <h4 style="font-size:14px;font-weight:600;margin-bottom:8px;color:var(--color-accent);">Результати:</h4>
          <p style="font-size:14px;font-weight:600;color:#fff;">${results}</p>
        </div>
        
        ${quote ? `<div style="margin-bottom:16px;padding:12px;background:rgba(0,191,255,0.1);border-left:3px solid var(--color-accent);border-radius:8px;">
          <p style="font-style:italic;font-size:14px;">${quote}</p>
        </div>` : ''}
        
        <div style="display:flex;flex-wrap:wrap;gap:8px;">
          ${tags.map(t => `<span style='border:1px solid var(--color-glass-border);border-radius:999px;padding:4px 10px;font-size:12px;color:var(--color-text-secondary);'>${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `;
}