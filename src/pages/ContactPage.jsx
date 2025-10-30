import React from 'react';
import GlassCardStatic from '../components/ui/GlassCardStatic';
import FormField from '../components/ui/FormField';
import Button from '../components/ui/Button';
import { EnvelopeIcon, DevicePhoneMobileIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactPage = () => {
  const inputStyles = "w-full bg-[var(--color-glass-bg)] border border-[var(--color-glass-border)] rounded-lg py-3 px-4 text-white placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all duration-300";

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Form */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-white">
            Request a Strategy Session
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl">
            Our time is our most valuable asset...
          </p>

          <GlassCardStatic className="mt-10">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Qualification Form</h2>

              {/* FULL_NAME */}
              <FormField id="fullName" label="Full Name" placeholder="John Doe" required />

              {/* COMPANY_EMAIL */}
              <FormField id="companyEmail" label="Company Email" type="email" placeholder="john@company.com" required />

              {/* COMPANY_WEBSITE */}
              <FormField id="companyWebsite" label="Company Website" placeholder="https://yourcompany.com" required />

              {/* YOUR_ROLE */}
              <div>
                <label htmlFor="yourRole" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Your Role</label>
                <select id="yourRole" className={inputStyles} required defaultValue="">
                  <option value="">Select your role...</option>
                  <option value="ceo_founder">CEO / Founder</option>
                  <option value="tech_lead">Technical Lead (CTO / VP Eng)</option>
                  <option value="financial_lead">Financial Lead (CFO)</option>
                  <option value="manager">Manager (Marketing / Operations)</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* MAIN_OBJECTIVE */}
              <div>
                <label htmlFor="mainObjective" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Main Objective</label>
                <select id="mainObjective" className={inputStyles} required defaultValue="">
                  <option value="">Select your main objective...</option>
                  <option value="anna">Strategic Partnership (Complex AI / E-com / Security Solution)</option>
                  <option value="taras">Packaged Solution (Clear scope & timeline)</option>
                  <option value="maxim">MVP Scoping</option>
                </select>
              </div>

              {/* ESTIMATED_BUDGET */}
              <div>
                <label htmlFor="estimatedBudget" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Estimated Budget</label>
                <select id="estimatedBudget" className={inputStyles} required defaultValue="">
                  <option value="">Select your estimated budget...</option>
                  <option value="low">&lt; $20,000</option>
                  <option value="mid">$20,000 - $70,000</option>
                  <option value="high">$70,000 - $150,000</option>
                  <option value="ultra-high">$150,000+</option>
                </select>
              </div>

              {/* KEY_CHALLENGE */}
              <FormField id="keyChallenge" label="Key Challenge" as="textarea" rows={5} placeholder="Briefly describe your key challenge or constraints" />

              <Button type="submit" variant="primary" className="w-full">
                SUBMIT FOR QUALIFICATION
              </Button>
            </form>
          </GlassCardStatic>
        </div>

        {/* Right Column: Alternative Channels */}
        <div>
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-4">Alternative Channels</h2>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-xl">
            Prefer a different approach? Reach us via the following channels and we’ll respond promptly.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-[var(--color-accent-dimmed)] p-3 rounded-lg border border-[var(--color-accent)]/30 mr-6">
                <EnvelopeIcon className="h-8 w-8 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Email</h3>
                <a href="mailto:hello@nexus.studio" className="text-[var(--color-text-secondary)] hover:text-white transition-colors">hello@nexus.studio</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[var(--color-accent-dimmed)] p-3 rounded-lg border border-[var(--color-accent)]/30 mr-6">
                <DevicePhoneMobileIcon className="h-8 w-8 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Call Us</h3>
                <a href="tel:+15551234567" className="text-[var(--color-text-secondary)] hover:text-white transition-colors">+1 (555) 123-4567</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[var(--color-accent-dimmed)] p-3 rounded-lg border border-[var(--color-accent)]/30 mr-6">
                <MapPinIcon className="h-8 w-8 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Find Us</h3>
                <p className="text-[var(--color-text-secondary)]">Kyiv, Ukraine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;