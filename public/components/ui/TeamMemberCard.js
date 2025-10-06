export function TeamMemberCard({ photoUrl = '', name = '', role = '', bio = '' } = {}) {
  return `
    <div class="glass-card reveal" style="overflow:hidden;">
      <div style="width:100%;aspect-ratio:1.2;border-radius:12px;background:#0e1326 url('${photoUrl}') center/cover no-repeat;margin-bottom:16px;"></div>
      <h3 style="margin-bottom:8px;">${name}</h3>
      <p style="margin-bottom:8px;color:#fff;opacity:.85">${role}</p>
      <p>${bio}</p>
    </div>
  `;
}
