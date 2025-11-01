import React, { useState } from 'react';
import GlassCardStatic from '../components/ui/GlassCardStatic';
import FormField from '../components/ui/FormField';
import Button from '../components/ui/Button';
import { EnvelopeIcon, DevicePhoneMobileIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyEmail: '',
    companyWebsite: '',
    yourRole: '',
    mainObjective: '',
    estimatedBudget: '',
    keyChallenge: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        // Очистити форму
        setFormData({
          fullName: '',
          companyEmail: '',
          companyWebsite: '',
          yourRole: '',
          mainObjective: '',
          estimatedBudget: '',
          keyChallenge: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Submission failed. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Our time is our most valuable asset. This qualification form ensures we can provide maximum value from our first conversation.
          </p>

          <GlassCardStatic className="mt-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Qualification Form</h2>

              {/* SUCCESS MESSAGE */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 font-medium">
                    ✓ Thank you! We received your submission and will contact you within 24 hours.
                  </p>
                </div>
              )}

              {/* ERROR MESSAGE */}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 font-medium">
                    ✗ {errorMessage}
                  </p>
                </div>
              )}

              {/* FULL_NAME */}
              <FormField
                id="fullName"
                label="Full Name"
                placeholder="John Doe"
                required
                value={formData.fullName}
                onChange={handleChange}
              />

              {/* COMPANY_EMAIL */}
              <FormField
                id="companyEmail"
                label="Company Email"
                type="email"
                placeholder="john@company.com"
                required
                value={formData.companyEmail}
                onChange={handleChange}
              />

              {/* COMPANY_WEBSITE */}
              <FormField
                id="companyWebsite"
                label="Company Website"
                placeholder="https://yourcompany.com"
                value={formData.companyWebsite}
                onChange={handleChange}
              />

              {/* YOUR_ROLE */}
              <div>
                <label htmlFor="yourRole" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Your Role</label>
                <select
                  id="yourRole"
                  className={inputStyles}
                  required
                  value={formData.yourRole}
                  onChange={handleChange}
                >
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
                <select
                  id="mainObjective"
                  className={inputStyles}
                  required
                  value={formData.mainObjective}
                  onChange={handleChange}
                >
                  <option value="">Select your main objective...</option>
                  <option value="anna">Strategic Partnership (Complex AI / E-com / Security Solution)</option>
                  <option value="taras">Packaged Solution (Clear scope & timeline)</option>
                  <option value="maxim">MVP Scoping</option>
                </select>
              </div>

              {/* ESTIMATED_BUDGET */}
              <div>
                <label htmlFor="estimatedBudget" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Estimated Budget</label>
                <select
                  id="estimatedBudget"
                  className={inputStyles}
                  required
                  value={formData.estimatedBudget}
                  onChange={handleChange}
                >
                  <option value="">Select your estimated budget...</option>
                  <option value="low">&lt; $20,000</option>
                  <option value="mid">$20,000 - $70,000</option>
                  <option value="high">$70,000 - $150,000</option>
                  <option value="ultra-high">$150,000+</option>
                </select>
              </div>

              {/* KEY_CHALLENGE */}
              <FormField
                id="keyChallenge"
                label="Key Challenge"
                as="textarea"
                rows={5}
                placeholder="Briefly describe your key challenge or constraints"
                value={formData.keyChallenge}
                onChange={handleChange}
              />

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT FOR QUALIFICATION'}
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