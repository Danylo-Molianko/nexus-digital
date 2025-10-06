export function SocialProofSection() {
  return `
    <section class="container">
      <div class="section-header reveal">
        <h2>TRUSTED BY INDUSTRY LEADERS</h2>
        <p>We build partnerships through performance.</p>
      </div>
      <div style="display:grid;gap:20px;margin-bottom:30px;">
        <div style="display:flex;justify-content:center;gap:40px;flex-wrap:wrap;opacity:0.7;">
          <div style="padding:12px 24px;background:var(--color-glass-bg);border-radius:12px;font-weight:600;">TechCorp</div>
          <div style="padding:12px 24px;background:var(--color-glass-bg);border-radius:12px;font-weight:600;">RetailMax</div>
          <div style="padding:12px 24px;background:var(--color-glass-bg);border-radius:12px;font-weight:600;">LogiFlow</div>
          <div style="padding:12px 24px;background:var(--color-glass-bg);border-radius:12px;font-weight:600;">FinanceFirst</div>
        </div>
      </div>
      <div class="glass-card reveal" style="text-align:center;">
        <p style="font-style:italic; color:var(--color-text-secondary);font-size:18px;">"Nexus Studio transformed our platform into a resilient, high-performance ecosystem. They cut processing times by 30% and elevated our security to the ISO 27001 standard. They are not a vendor; they are an essential strategic partner."</p>
        <p style="margin-top:12px; font-weight:600;">— Head of IT, Global Manufacturing Enterprise</p>
        <div style="margin-top:16px;display:flex;justify-content:center;gap:4px;">
          <span style="color:var(--color-accent);">★★★★★</span>
          <span style="margin-left:8px;font-size:14px;">5.0 / 5.0</span>
        </div>
      </div>
    </section>
  `;
}
