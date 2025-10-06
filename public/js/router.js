// ===========================================
// NEXUS DIGITAL - SPA ROUTER WITH RICH SECTIONS
// ===========================================

import { AuroraBackground } from '../components/layout/AuroraBackground.js';
import { Header } from '../components/layout/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { attachEffects } from '../utils/effects.js';

// Import all page components
import { HeroSection } from '../components/sections/HeroSection.js';
import { PillarsSection } from '../components/sections/PillarsSection.js';
import { ProcessSection } from '../components/sections/ProcessSection.js';
import { SocialProofSection } from '../components/sections/SocialProofSection.js';
import { FeaturedContentSection } from '../components/sections/FeaturedContentSection.js';
import { FinalCTASection } from '../components/sections/FinalCTASection.js';
import { PageHeader } from '../components/sections/PageHeader.js';
import { GlassCard } from '../components/ui/GlassCard.js';

// Import additional sections
import { 
  StatsSection, 
  TestimonialsSection, 
  FAQSection, 
  LatestNewsSection,
  ServiceDetailsSection,
  PricingSection
} from '../components/sections/AdditionalSections.js';

import {
  ProjectShowcaseSection,
  ProcessTimelineSection,
  ToolsSection
} from '../components/sections/ProjectSections.js';

import {
  TeamSection,
  ValuesSection,
  StorySection,
  ContactInfoSection,
  OfficeLocationsSection
} from '../components/sections/AboutContactSections.js';

class Router {
  constructor() {
    this.routes = {
      '/': this.renderHomePage,
      '/services': this.renderServicesPage,
      '/process': this.renderProcessPage,
      '/portfolio': this.renderPortfolioPage,
      '/insights': this.renderInsightsPage,
      '/about': this.renderAboutPage,
      '/contact': this.renderContactPage
    };
    
    this.init();
  }

  init() {
    // Handle initial page load
    this.handleRoute();
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.handleRoute();
    });

    // Handle navigation clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[href^="/"]')) {
        e.preventDefault();
        this.navigate(e.target.getAttribute('href'));
      }
    });
  }

  navigate(path) {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  handleRoute() {
    const path = window.location.pathname || '/';
    const routeHandler = this.routes[path] || this.render404;
    
    try {
      this.renderLayout();
      routeHandler.call(this);
      attachEffects();
    } catch (error) {
      console.error('Routing error:', error);
      this.renderError();
    }
  }

  renderLayout() {
    const app = document.getElementById('app');
    if (!app) return;
    
    app.innerHTML = `
      ${AuroraBackground()}
      ${Header()}
      <main id="main-content">
        <!-- Dynamic content will be inserted here -->
      </main>
      ${Footer()}
    `;
  }

  renderHomePage() {
    const main = document.getElementById('main-content');
    if (!main) return;
    
    main.innerHTML = `
      ${HeroSection()}
      ${PillarsSection()}
      ${StatsSection()}
      ${SocialProofSection()}
      ${ProcessSection()}
      ${TestimonialsSection()}
      ${FeaturedContentSection()}
      ${LatestNewsSection()}
      ${FAQSection()}
      ${FinalCTASection()}
    `;
  }

  renderServicesPage() {
    const main = document.getElementById('main-content');
    if (!main) return;

    const buildList = `<ul><li>Architecture & Design</li><li>Migration & Modernization</li><li>DevOps Practices</li></ul>`;
    const aiList = `<ul><li>Process Automation</li><li>Business ML Models</li><li>Analytics & Insights</li></ul>`;
    const secList = `<ul><li>Security Audits</li><li>DevSecOps Implementation</li><li>Compliance Standards</li></ul>`;
    
    main.innerHTML = `
      ${PageHeader({ title: 'OUR SERVICES', subtitle: 'Three pillars that create one resilient digital ecosystem.' })}
      <section class="container">
        <div class="pillars-grid">
          ${GlassCard({ title: 'Build & Modernize', description: 'Custom software development, infrastructure scaling. ' + buildList })}
          ${GlassCard({ title: 'Innovate & Automate', description: 'AI solutions for efficiency enhancement. ' + aiList })}
          ${GlassCard({ title: 'Secure & Comply', description: 'Security at all lifecycle stages. ' + secList })}
        </div>
      </section>
      ${ServiceDetailsSection()}
      ${PricingSection()}
      <section class="container">
        <div class="section-header reveal">
          <h2>THE NEXUS EFFECT</h2>
          <p>The pillars work together: creation, innovation, and security integrate into a holistic architecture.</p>
        </div>
        <div class="glass-card reveal">
          <h3>Integration Examples</h3>
          <p>When we create a new mobile application (<strong>Build</strong>), we add personalization through AI (<strong>Innovate</strong>) and implement DevSecOps from day one (<strong>Secure</strong>).</p>
          <p>Modernizing your system is an opportunity to embed AI-powered analytics and strengthen it against modern threats.</p>
          <div style="margin-top:16px"><a href="/contact" class="cta-button" data-link>SCHEDULE A CONSULTATION</a></div>
        </div>
      </section>
      ${TestimonialsSection()}
      ${FAQSection()}
    `;
  }

  renderProcessPage() {
    const main = document.getElementById('main-content');
    if (!main) return;
    
    main.innerHTML = `
      ${PageHeader({ title: 'Our Process', subtitle: 'Transparent path from idea to product evolution.' })}
      ${ProcessSection()}
      ${ProcessTimelineSection()}
      ${ToolsSection()}
      <section class="container" style="padding: 80px 0;">
        <div class="section-header reveal">
          <h2>Quality Guarantees</h2>
          <p>What you get at every stage</p>
        </div>
        <div class="guarantees-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 60px;">
          <div class="guarantee-card glass-card reveal">
            <div style="font-size: 32px; margin-bottom: 16px; text-align: center;">✅</div>
            <h4 style="margin-bottom: 12px; text-align: center;">Weekly Demos</h4>
            <p>See progress every week and make real-time adjustments.</p>
          </div>
          <div class="guarantee-card glass-card reveal">
            <div style="font-size: 32px; margin-bottom: 16px; text-align: center;">📊</div>
            <h4 style="margin-bottom: 12px; text-align: center;">Transparent Reports</h4>
            <p>Detailed analytics of time, budget, and task completion progress.</p>
          </div>
          <div class="guarantee-card glass-card reveal">
            <div style="font-size: 32px; margin-bottom: 16px; text-align: center;">🔒</div>
            <h4 style="margin-bottom: 12px; text-align: center;">Code Security</h4>
            <p>Automated security checks on every commit and detailed audits.</p>
          </div>
        </div>
      </section>
      ${TestimonialsSection()}
    `;
  }

  renderPortfolioPage() {
    const main = document.getElementById('main-content');
    if (!main) return;
    
    main.innerHTML = `
      ${PageHeader({ title: 'Our Projects', subtitle: 'Real case studies demonstrating the power of Nexus Effect.' })}
      ${ProjectShowcaseSection()}
      ${StatsSection()}
      <section class="container" style="padding: 80px 0;">
        <div class="section-header reveal">
          <h2>Industries We Work In</h2>
          <p>Expertise across different business sectors</p>
        </div>
        <div class="industries-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-top: 60px;">
          <div class="industry-card glass-card reveal" style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 16px;">🏦</div>
            <h4 style="margin-bottom: 12px;">Fintech</h4>
            <p>Banking apps, payment systems, crypto platforms</p>
          </div>
          <div class="industry-card glass-card reveal" style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 16px;">🛒</div>
            <h4 style="margin-bottom: 12px;">E-commerce</h4>
            <p>Online stores, marketplaces, loyalty systems</p>
          </div>
          <div class="industry-card glass-card reveal" style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 16px;">🏥</div>
            <h4 style="margin-bottom: 12px;">MedTech</h4>
            <p>Telemedicine, clinic management systems, AI diagnostics</p>
          </div>
          <div class="industry-card glass-card reveal" style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 16px;">🎓</div>
            <h4 style="margin-bottom: 12px;">EdTech</h4>
            <p>Educational platforms, LMS systems, adaptive learning</p>
          </div>
          <div class="industry-card glass-card reveal" style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 16px;">🏭</div>
            <h4 style="margin-bottom: 12px;">Manufacturing</h4>
            <p>IoT solutions, automation, production management systems</p>
          </div>
          <div class="industry-card glass-card reveal" style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 16px;">🚚</div>
            <h4 style="margin-bottom: 12px;">Logistics</h4>
            <p>Tracking systems, route optimization, warehouse software</p>
          </div>
        </div>
      </section>
      ${TestimonialsSection()}
    `;
  }

  renderInsightsPage() {
    const main = document.getElementById('main-content');
    if (!main) return;
    
    main.innerHTML = `
      ${PageHeader({ title: 'Insights', subtitle: 'Thoughts and analytics from Nexus Studio experts.' })}
      ${LatestNewsSection()}
      <section class="container" style="padding: 80px 0;">
        <div class="section-header reveal">
          <h2>Popular Topics</h2>
          <p>Most relevant trends in technology</p>
        </div>
        <div class="topics-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 60px;">
          <div class="topic-card glass-card reveal">
            <div style="font-size: 32px; margin-bottom: 16px; text-align: center;">🤖</div>
            <h4 style="margin-bottom: 12px; text-align: center;">Artificial Intelligence</h4>
            <p style="margin-bottom: 16px;">How AI transforms business processes and creates new opportunities</p>
            <div style="text-align: center;">
              <a href="#" style="color: var(--color-accent); text-decoration: none; font-weight: 600;">15 articles →</a>
            </div>
          </div>
          <div class="topic-card glass-card reveal">
            <div style="font-size: 32px; margin-bottom: 16px; text-align: center;">🔒</div>
            <h4 style="margin-bottom: 12px; text-align: center;">Cybersecurity</h4>
            <p style="margin-bottom: 16px;">Modern threats and methods for protecting digital assets</p>
            <div style="text-align: center;">
              <a href="#" style="color: var(--color-accent); text-decoration: none; font-weight: 600;">12 articles →</a>
            </div>
          </div>
          <div class="topic-card glass-card reveal">
            <div style="font-size: 32px; margin-bottom: 16px; text-align: center;">☁️</div>
            <h4 style="margin-bottom: 12px; text-align: center;">Cloud Technologies</h4>
            <p style="margin-bottom: 16px;">Cloud migration and cloud solutions optimization</p>
            <div style="text-align: center;">
              <a href="#" style="color: var(--color-accent); text-decoration: none; font-weight: 600;">8 articles →</a>
            </div>
          </div>
          <div class="topic-card glass-card reveal">
            <div style="font-size: 32px; margin-bottom: 16px; text-align: center;">📱</div>
            <h4 style="margin-bottom: 12px; text-align: center;">Mobile Development</h4>
            <p style="margin-bottom: 16px;">Trends in mobile app development and UX</p>
            <div style="text-align: center;">
              <a href="#" style="color: var(--color-accent); text-decoration: none; font-weight: 600;">10 articles →</a>
            </div>
          </div>
        </div>
      </section>
      <section class="container" style="padding: 80px 0;">
        <div class="section-header reveal">
          <h2>Newsletter Subscription</h2>
          <p>Get the latest insights delivered to your inbox</p>
        </div>
        <div class="newsletter-card glass-card reveal" style="max-width: 600px; margin: 60px auto 0; text-align: center;">
          <h4 style="margin-bottom: 20px;">Weekly Tech Digest</h4>
          <p style="margin-bottom: 24px;">Weekly compilation of the most interesting materials about technology and business</p>
          <form style="display: flex; gap: 12px; max-width: 400px; margin: 0 auto;">
            <input type="email" placeholder="Your email" required style="flex: 1; padding: 12px; border: 1px solid var(--color-glass-border); border-radius: 8px; background: var(--color-glass-bg); color: var(--color-text-primary);">
            <button type="submit" class="cta-button">Subscribe</button>
          </form>
        </div>
      </section>
    `;
  }

  renderAboutPage() {
    const main = document.getElementById('main-content');
    if (!main) return;
    
    main.innerHTML = `
      ${PageHeader({ title: 'About Nexus Studio', subtitle: 'The team creating the digital future.' })}
      <section class="container">
        <div class="section-header reveal">
          <h2>Our Mission</h2>
          <p>We are architects of the digital future, combining creation, innovation, and security into a cohesive ecosystem.</p>
        </div>
        <div class="mission-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; margin-top: 60px;">
          <div class="mission-card glass-card reveal">
            <div style="font-size: 48px; margin-bottom: 20px; text-align: center;">🎯</div>
            <h4 style="margin-bottom: 16px; text-align: center;">Our Goal</h4>
            <p>Help businesses harness the power of technology to achieve ambitious goals and create innovative products.</p>
          </div>
          <div class="mission-card glass-card reveal">
            <div style="font-size: 48px; margin-bottom: 20px; text-align: center;">💡</div>
            <h4 style="margin-bottom: 16px; text-align: center;">Our Approach</h4>
            <p>We combine deep technical expertise with business understanding, creating solutions that truly work.</p>
          </div>
          <div class="mission-card glass-card reveal">
            <div style="font-size: 48px; margin-bottom: 20px; text-align: center;">🚀</div>
            <h4 style="margin-bottom: 16px; text-align: center;">Our Future</h4>
            <p>Become a leading studio in Ukraine and expand our influence to the international market through innovative projects.</p>
          </div>
        </div>
      </section>
      ${TeamSection()}
      ${ValuesSection()}
      ${StorySection()}
      ${StatsSection()}
    `;
  }

  renderContactPage() {
    const main = document.getElementById('main-content');
    if (!main) return;
    
    main.innerHTML = `
      ${PageHeader({ title: 'Contact Us', subtitle: 'Ready to discuss your project?' })}
      ${ContactInfoSection()}
      <section class="container" style="padding: 80px 0;">
        <div class="section-header reveal">
          <h2>Write to Us</h2>
          <p>Tell us about your project, and we'll get back to you within 24 hours</p>
        </div>
        <div class="contact-form-container" style="max-width: 800px; margin: 60px auto 0;">
          <form id="contact-form" class="glass-card reveal" style="padding: 40px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: 600;">Name *</label>
                <input type="text" name="name" required style="width: 100%; padding: 12px; border: 1px solid var(--color-glass-border); border-radius: 8px; background: var(--color-glass-bg); color: var(--color-text-primary);">
              </div>
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: 600;">Email *</label>
                <input type="email" name="email" required style="width: 100%; padding: 12px; border: 1px solid var(--color-glass-border); border-radius: 8px; background: var(--color-glass-bg); color: var(--color-text-primary);">
              </div>
            </div>
            <div style="margin-bottom: 20px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 600;">Company</label>
              <input type="text" name="company" style="width: 100%; padding: 12px; border: 1px solid var(--color-glass-border); border-radius: 8px; background: var(--color-glass-bg); color: var(--color-text-primary);">
            </div>
            <div style="margin-bottom: 20px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 600;">Project Type</label>
              <select name="project-type" style="width: 100%; padding: 12px; border: 1px solid var(--color-glass-border); border-radius: 8px; background: var(--color-glass-bg); color: var(--color-text-primary);">
                <option value="">Choose project type</option>
                <option value="web-app">Web Application</option>
                <option value="mobile-app">Mobile Application</option>
                <option value="ai-solution">AI Solution</option>
                <option value="modernization">System Modernization</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div style="margin-bottom: 20px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 600;">Budget</label>
              <select name="budget" style="width: 100%; padding: 12px; border: 1px solid var(--color-glass-border); border-radius: 8px; background: var(--color-glass-bg); color: var(--color-text-primary);">
                <option value="">Estimated budget</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-50k">$15,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k+">$100,000+</option>
                <option value="discuss">Discuss individually</option>
              </select>
            </div>
            <div style="margin-bottom: 24px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 600;">Project Description *</label>
              <textarea name="message" rows="5" required placeholder="Tell us more about your project, goals and expectations..." style="width: 100%; padding: 12px; border: 1px solid var(--color-glass-border); border-radius: 8px; background: var(--color-glass-bg); color: var(--color-text-primary); resize: vertical;"></textarea>
            </div>
            <div style="text-align: center;">
              <button type="submit" class="cta-button" style="padding: 16px 32px;">Send Request</button>
            </div>
          </form>
        </div>
      </section>
      ${OfficeLocationsSection()}
      <section class="container" style="padding: 80px 0;">
        <div class="section-header reveal">
          <h2>Follow Us</h2>
          <p>Stay updated on our projects and insights</p>
        </div>
        <div class="social-links" style="display: flex; justify-content: center; gap: 30px; margin-top: 40px;">
          <a href="#" class="social-link glass-card reveal" style="display: flex; align-items: center; gap: 12px; padding: 16px 24px; text-decoration: none; color: var(--color-text-primary);">
            <span style="font-size: 24px;">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href="#" class="social-link glass-card reveal" style="display: flex; align-items: center; gap: 12px; padding: 16px 24px; text-decoration: none; color: var(--color-text-primary);">
            <span style="font-size: 24px;">💻</span>
            <span>GitHub</span>
          </a>
          <a href="#" class="social-link glass-card reveal" style="display: flex; align-items: center; gap: 12px; padding: 16px 24px; text-decoration: none; color: var(--color-text-primary);">
            <span style="font-size: 24px;">💬</span>
            <span>Telegram</span>
          </a>
          <a href="#" class="social-link glass-card reveal" style="display: flex; align-items: center; gap: 12px; padding: 16px 24px; text-decoration: none; color: var(--color-text-primary);">
            <span style="font-size: 24px;">🎨</span>
            <span>Dribbble</span>
          </a>
        </div>
      </section>
    `;
  }

  render404() {
    const main = document.getElementById('main-content');
    if (!main) return;
    
    main.innerHTML = `
      ${PageHeader({ title: '404', subtitle: 'Page not found' })}
      <section class="container">
        <div class="glass-card reveal">
          <h3>Oops! Something went wrong</h3>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <div style="margin-top:16px"><a href="/" class="cta-button" data-link>Go Home</a></div>
        </div>
      </section>
    `;
  }

  renderError() {
    const app = document.getElementById('app');
    if (!app) return;
    
    app.innerHTML = `
      <div style="min-height:100vh; display:flex; align-items:center; justify-content:center; text-align:center; color:var(--color-text-primary);">
        <div>
          <h1>Loading Error</h1>
          <p>Please try refreshing the page</p>
          <button onclick="window.location.reload()" class="cta-button">Refresh</button>
        </div>
      </div>
    `;
  }
}

// Initialize router when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new Router());
} else {
  new Router();
}

export default Router;