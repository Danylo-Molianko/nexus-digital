export function FeaturedContentSection() {
  return `
    <section class="container">
      <div class="section-header reveal">
        <h2>FEATURED WORK & INSIGHTS</h2>
        <p>A highlight case study and our latest thought leadership.</p>
      </div>
      <div class="pillars-grid">
        <div class="glass-card reveal">
          <h3>Case Study: Manufacturing Automation</h3>
          <p>We integrated ML to forecast product demand, reducing equipment downtime by 20% and boosting output.</p>
          <div style="margin-top:12px"><a href="/portfolio" class="cta-button secondary" data-link>VIEW CASE STUDY</a></div>
        </div>
        <div class="glass-card reveal">
          <h3>Insight: AI-Readiness for SMEs</h3>
          <p>A practical guide for leaders on implementing AI with measurable ROI and real-world business impact.</p>
          <div style="margin-top:12px"><a href="/insights" class="cta-button secondary" data-link>READ INSIGHTS</a></div>
        </div>
        <div class="glass-card reveal">
          <h3>Security as an Advantage</h3>
          <p>Our DevSecOps and 360° security approach turns compliance requirements into a competitive edge built on trust.</p>
          <div style="margin-top:12px"><a href="/services" class="cta-button secondary" data-link>OUR SERVICES</a></div>
        </div>
      </div>
    </section>
  `;
}
