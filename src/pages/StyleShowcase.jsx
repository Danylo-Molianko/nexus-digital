import React, { Suspense } from 'react';
import AnnouncementBar from '../components/experiments/uizard-navy/AnnouncementBar';
import HeroFrame from '../components/experiments/uizard-navy/HeroFrame';
import LogosStrip from '../components/experiments/uizard-navy/LogosStrip';
import TestimonialCard from '../components/experiments/uizard-navy/TestimonialCard';

const StyleShowcase = () => {
  const testimonials = [
    { title: 'Powerful & fast', body: 'I can\'t believe how quickly we got from prompt to polished UI. It\'s become our team\'s daily driver.', author: 'Product Lead' },
    { title: 'Bridges the gap', body: 'Helps designers and PMs collaborate in real time. Fewer meetings, more output.', author: 'Design Manager' },
    { title: 'No effort mode', body: 'From idea to prototype in minutes. The velocity change is unreal.', author: 'Founder' }
  ];

  return (
    <>
      {/* Option A: Navy Neon Glow (closest to screenshot, blue accent) */}
      <AnnouncementBar text="Navy Neon is here — premium deep-navy palette with electric blue accents" cta="Preview" />
      <HeroFrame />
      <LogosStrip />
      <section className="container mx-auto px-4 pb-16">
        <h2 className="h3-fluid text-white/90 mb-6 text-left">What our customers say about us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
      </section>

      {/* Option B: Navy Glass Minimal (reusing glass-interactive) */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-2xl border border-white/10 bg-[var(--bg-level1)]/70 backdrop-blur-md p-8 glass-interactive">
          <h2 className="h3-fluid text-left">Navy Glass Minimal</h2>
          <p className="text-white/70 mt-2 text-left max-w-prose">More understated glow, heavier reliance on glass panels, perfect for dense product content.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="btn-gold" href="#">Primary</a>
            <a className="btn-blue" href="#">Secondary</a>
          </div>
        </div>
      </section>

      {/* Option C: Navy Gradient Halo (bold halos behind sections) */}
      <section className="relative py-16">
        <div className="absolute inset-x-0 -top-10 h-40" style={{
          background: 'radial-gradient(50% 120% at 50% 0%, rgba(59,163,255,0.25), transparent 70%)'
        }} aria-hidden />
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-white/10 p-8 bg-[var(--bg-level1)]/80">
            <h2 className="h3-fluid text-left">Navy Gradient Halo</h2>
            <p className="text-white/70 mt-2 text-left max-w-prose">Stronger radial halos to frame content clusters and calls to action.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default StyleShowcase;
