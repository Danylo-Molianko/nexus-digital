import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import FormField from '../components/ui/FormField';
import Button from '../components/ui/Button';
import { EnvelopeIcon, DevicePhoneMobileIcon, MapPinIcon } from '@heroicons/react/24/outline';

const contactInfo = [
  { icon: EnvelopeIcon, title: "Email Us", value: "hello@nexus.studio" },
  { icon: DevicePhoneMobileIcon, title: "Call Us", value: "+380 (XX) XXX-XX-XX" },
  { icon: MapPinIcon, title: "Find Us", value: "Kyiv, Ukraine" }
];

const ContactPage = () => {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Let's start a conversation. We're here to help you engineer your digital core."
      />

      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-wider mb-8">Get In Touch</h2>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[var(--color-accent-dimmed)] p-3 rounded-lg border border-[var(--color-accent)]/30 mr-6">
                    <item.icon className="h-8 w-8 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-[var(--color-text-secondary)]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form Column */}
          <GlassCard>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <h2 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h2>
              <FormField id="name" label="Your Name" placeholder="John Doe" />
              <FormField id="email" label="Your Email" type="email" placeholder="john.doe@example.com" />
              <FormField id="message" label="Your Message" as="textarea" placeholder="Tell us about your project..." />
              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </GlassCard>
        </div>
      </section>
    </>
  );
};

export default ContactPage;