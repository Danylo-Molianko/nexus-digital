import React from 'react';

const HeroFrame = ({ title = 'AI UI design for disruptive product teams', subtitle = 'Collaborate in real-time with AI and your product team. Everyone contributes to building the next big thing.', primary = 'Get started', secondary = 'See how it works' }) => {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="holo-frame p-6 sm:p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-left">
              <h1 className="h2-fluid font-headings text-white mb-4">{title}</h1>
              <p className="text-white/70 max-w-prose">{subtitle}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a className="btn-gold" href="#">{primary}</a>
                <a className="btn-blue" href="#">{secondary}</a>
              </div>
            </div>
            <div className="rounded-xl bg-black/60 aspect-video border border-white/10 flex items-center justify-center text-white/50">
              <span>Media / Product preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFrame;
