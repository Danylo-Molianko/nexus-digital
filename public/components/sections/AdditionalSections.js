// ===========================================
// ADDITIONAL SECTIONS COMPONENTS  
// ===========================================

// Statistics Section
export function StatsSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>DATA-DRIVEN IMPACT</h2>
        <p>Results that speak louder than words.</p>
      </div>
      <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-top: 60px;">
        <div class="stat-card glass-card reveal" style="text-align: center;">
          <div style="font-size: 48px; font-weight: 700; color: var(--color-accent); margin-bottom: 12px;">+45%</div>
          <h4>Increase in Operational Efficiency</h4>
          <p>Increase in Operational Efficiency for clients leveraging our automation solutions.</p>
        </div>
        <div class="stat-card glass-card reveal" style="text-align: center;">
          <div style="font-size: 48px; font-weight: 700; color: var(--color-accent); margin-bottom: 12px;">>150</div>
          <h4>Secure, Mission-Critical Projects</h4>
          <p>Secure, Mission-Critical Projects delivered on DevSecOps principles.</p>
        </div>
        <div class="stat-card glass-card reveal" style="text-align: center;">
          <div style="font-size: 48px; font-weight: 700; color: var(--color-accent); margin-bottom: 12px;">99.9%</div>
          <h4>System Uptime</h4>
          <p>System Uptime guaranteed through resilient, monitored architecture.</p>
        </div>
        <div class="stat-card glass-card reveal" style="text-align: center;">
          <div style="font-size: 48px; font-weight: 700; color: var(--color-accent); margin-bottom: 12px;">-30%</div>
          <h4>Reduction in Operational Costs</h4>
          <p>Reduction in Operational Costs for businesses deploying our custom AI platforms.</p>
        </div>
      </div>
    </section>
  `;
}

// Testimonials Section
export function TestimonialsSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>WHAT OUR CLIENTS SAY</h2>
        <p>Real feedback from leaders we partner with.</p>
      </div>
      <div class="testimonials-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; margin-top: 60px;">
        <div class="testimonial-card glass-card reveal">
          <div style="margin-bottom: 20px;">⭐⭐⭐⭐⭐</div>
          <p style="font-style: italic; margin-bottom: 20px;">"Nexus Studio delivered a market-ready product in record time. Their integrated approach to security from day one was a game-changer for us."</p>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--color-accent-dimmed); display: flex; align-items: center; justify-content: center; font-weight: 700;">AK</div>
            <div>
              <div style="font-weight: 600;">Anna Kovalenko</div>
              <div style="color: var(--color-text-secondary); font-size: 14px;">CEO, TechStart</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card glass-card reveal">
          <div style="margin-bottom: 20px;">⭐⭐⭐⭐⭐</div>
          <p style="font-style: italic; margin-bottom: 20px;">"The AI-driven automation Nexus implemented saved our team 40% of their time on routine tasks. This isn't just code, it's a genuine business multiplier."</p>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--color-accent-dimmed); display: flex; align-items: center; justify-content: center; font-weight: 700;">MP</div>
            <div>
              <div style="font-weight: 600;">Max Petrov</div>
              <div style="color: var(--color-text-secondary); font-size: 14px;">CTO, FinanceHub</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card glass-card reveal">
          <div style="margin-bottom: 20px;">⭐⭐⭐⭐⭐</div>
          <p style="font-style: italic; margin-bottom: 20px;">"The team's transparent process and consistent communication gave us complete confidence. Nexus is more than a vendor; they are a true partner. Highly recommended."</p>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--color-accent-dimmed); display: flex; align-items: center; justify-content: center; font-weight: 700;">OS</div>
            <div>
              <div style="font-weight: 600;">Olena Savchenko</div>
              <div style="color: var(--color-text-secondary); font-size: 14px;">Director, RetailPro</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// FAQ Section
export function FAQSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <p>Clarity and transparency, by design.</p>
      </div>
      <div class="faq-container" style="max-width: 800px; margin: 60px auto 0;">
        <div class="faq-item glass-card reveal" style="margin-bottom: 20px;">
          <h4 style="margin-bottom: 12px;">How long does a typical project take?</h4>
          <p>Project timelines range from 4 to 16 weeks, depending on complexity. We provide a detailed, realistic timeline during the strategic roadmap phase.</p>
        </div>
        <div class="faq-item glass-card reveal" style="margin-bottom: 20px;">
          <h4 style="margin-bottom: 12px;">Do you provide ongoing support after launch?</h4>
          <p>Absolutely. We view launch as the beginning, not the end. We offer tailored support and evolution packages to ensure your long-term success.</p>
        </div>
        <div class="faq-item glass-card reveal" style="margin-bottom: 20px;">
          <h4 style="margin-bottom: 12px;">What is your core technology stack?</h4>
          <p>We are technology-agnostic, selecting the optimal tools for each project. Our core expertise includes React, Node.js, Python, AWS, and Docker.</p>
        </div>
        <div class="faq-item glass-card reveal" style="margin-bottom: 20px;">
          <h4 style="margin-bottom: 12px;">How do you handle working with international clients?</h4>
          <p>We have extensive experience partnering with clients across the US, Europe, and Asia. A well-managed project makes time zones irrelevant.</p>
        </div>
      </div>
    </section>
  `;
}

// Latest News Section
export function LatestNewsSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>LATEST NEWS & INSIGHTS</h2>
        <p>Stay ahead with our thought leadership and industry updates.</p>
      </div>
      <div class="news-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; margin-top: 60px;">
        <div class="news-card glass-card reveal">
          <div style="height: 200px; background: linear-gradient(135deg, var(--color-accent-dimmed) 0%, var(--color-glass-bg) 100%); border-radius: 12px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center;">
            <div style="font-size: 48px;">🚀</div>
          </div>
          <div style="color: var(--color-accent); font-size: 14px; margin-bottom: 8px;">December 2024</div>
          <h4 style="margin-bottom: 12px;">5 AI Implementation Wins for Manufacturing</h4>
          <p>Real examples of AI delivering measurable ROI in manufacturing operations...</p>
          <a href="/insights" style="color: var(--color-accent); text-decoration: none; font-weight: 600;" data-link>Read More →</a>
        </div>
        <div class="news-card glass-card reveal">
          <div style="height: 200px; background: linear-gradient(135deg, var(--color-accent-dimmed) 0%, var(--color-glass-bg) 100%); border-radius: 12px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center;">
            <div style="font-size: 48px;">🔒</div>
          </div>
          <div style="color: var(--color-accent); font-size: 14px; margin-bottom: 8px;">November 2024</div>
          <h4 style="margin-bottom: 12px;">Zero-Trust Security in 2025</h4>
          <p>Practical steps to implement zero-trust architecture without disrupting operations...</p>
          <a href="/insights" style="color: var(--color-accent); text-decoration: none; font-weight: 600;" data-link>Read More →</a>
        </div>
        <div class="news-card glass-card reveal">
          <div style="height: 200px; background: linear-gradient(135deg, var(--color-accent-dimmed) 0%, var(--color-glass-bg) 100%); border-radius: 12px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center;">
            <div style="font-size: 48px;">⚡</div>
          </div>
          <div style="color: var(--color-accent); font-size: 14px; margin-bottom: 8px;">October 2024</div>
          <h4 style="margin-bottom: 12px;">API-First Development Guide</h4>
          <p>Why API-first accelerates development and ensures future scalability...</p>
          <a href="/insights" style="color: var(--color-accent); text-decoration: none; font-weight: 600;" data-link>Read More →</a>
        </div>
      </div>
    </section>
  `;
}

// Service Details Section
export function ServiceDetailsSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>DETAILED SERVICE BREAKDOWN</h2>
        <p>Deep dive into each area of our expertise</p>
      </div>
      <div class="service-details" style="margin-top: 60px;">
        <div class="service-detail-card glass-card reveal" style="margin-bottom: 40px;">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            <div style="font-size: 32px;">🏗️</div>
            <h3>Build & Modernize</h3>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
            <div>
              <h4 style="margin-bottom: 16px;">What's Included:</h4>
              <ul style="color: var(--color-text-secondary);">
                <li>Architectural Planning</li>
                <li>Custom Development</li>
                <li>API Integrations</li>
                <li>Database Design</li>
                <li>Testing & QA</li>
              </ul>
            </div>
            <div>
              <h4 style="margin-bottom: 16px;">Technologies:</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">React</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">Node.js</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">Python</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">PostgreSQL</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">AWS</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="service-detail-card glass-card reveal" style="margin-bottom: 40px;">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            <div style="font-size: 32px;">🤖</div>
            <h3>Innovate & Automate</h3>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
            <div>
              <h4 style="margin-bottom: 16px;">What's Included:</h4>
              <ul style="color: var(--color-text-secondary);">
                <li>Business ML Models</li>
                <li>Workflow Automation</li>
                <li>Chatbots & Assistants</li>
                <li>Analytics & Reporting</li>
                <li>AI API Integration</li>
              </ul>
            </div>
            <div>
              <h4 style="margin-bottom: 16px;">Tools:</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">TensorFlow</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">OpenAI</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">Zapier</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">Power BI</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">Azure AI</span>
              </div>
            </div>
          </div>
        </div>

        <div class="service-detail-card glass-card reveal">
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            <div style="font-size: 32px;">🛡️</div>
            <h3>Secure & Comply</h3>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
            <div>
              <h4 style="margin-bottom: 16px;">What's Included:</h4>
              <ul style="color: var(--color-text-secondary);">
                <li>Security Audits</li>
                <li>Penetration Testing</li>
                <li>GDPR Compliance</li>
                <li>DevSecOps Setup</li>
                <li>Threat Monitoring</li>
              </ul>
            </div>
            <div>
              <h4 style="margin-bottom: 16px;">Standards:</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">ISO 27001</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">OWASP</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">GDPR</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">SOC 2</span>
                <span style="background: var(--color-accent-dimmed); padding: 4px 12px; border-radius: 20px; font-size: 14px;">PCI DSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Pricing Section
export function PricingSection() {
  return `
    <section class="container" style="padding: 80px 0;">
      <div class="section-header reveal">
        <h2>SERVICE PACKAGES</h2>
        <p>Flexible solutions for every budget and ambition.</p>
      </div>
      <div class="pricing-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 60px;">
        <div class="pricing-card glass-card reveal" style="text-align: center;">
          <h4 style="margin-bottom: 12px;">Startup</h4>
          <div style="font-size: 36px; font-weight: 700; color: var(--color-accent); margin: 20px 0;">$5,000</div>
          <p style="margin-bottom: 24px;">Ideal for an MVP</p>
          <ul style="text-align: left; margin-bottom: 24px;">
            <li>Landing page</li>
            <li>Basic CMS</li>
            <li>Mobile responsive version</li>
            <li>30 days of support</li>
          </ul>
          <a href="/contact" class="cta-button" data-link>CHOOSE PLAN</a>
        </div>
        <div class="pricing-card glass-card reveal" style="text-align: center; border: 2px solid var(--color-accent);">
          <div style="background: var(--color-accent); color: #000; padding: 8px; margin: -20px -20px 20px; border-radius: 12px 12px 0 0; font-weight: 700;">Popular</div>
          <h4 style="margin-bottom: 12px;">Business</h4>
          <div style="font-size: 36px; font-weight: 700; color: var(--color-accent); margin: 20px 0;">$15,000</div>
          <p style="margin-bottom: 24px;">For growing companies</p>
          <ul style="text-align: left; margin-bottom: 24px;">
            <li>Full web application</li>
            <li>API integration</li>
            <li>Admin panel</li>
            <li>6 months of support</li>
            <li>Analytics dashboard</li>
          </ul>
          <a href="/contact" class="cta-button" data-link>CHOOSE PLAN</a>
        </div>
        <div class="pricing-card glass-card reveal" style="text-align: center;">
          <h4 style="margin-bottom: 12px;">Enterprise</h4>
          <div style="font-size: 36px; font-weight: 700; color: var(--color-accent); margin: 20px 0;">Custom</div>
          <p style="margin-bottom: 24px;">Comprehensive solutions</p>
          <ul style="text-align: left; margin-bottom: 24px;">
            <li>Full product ecosystem</li>
            <li>AI feature integration</li>
            <li>Enterprise-grade security</li>
            <li>Dedicated ongoing support</li>
            <li>Team training & onboarding</li>
          </ul>
          <a href="/contact" class="cta-button secondary" data-link>DISCUSS</a>
        </div>
      </div>
    </section>
  `;
}