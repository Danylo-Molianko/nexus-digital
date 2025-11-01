import React from 'react';

const AnnouncementBar = ({ text = 'Autodesigner is here. The most popular UI generator just got even better!', cta = 'Learn more' }) => {
  return (
    <div className="announcement-bar text-[13px] text-white/80">
      <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-2">
          <span className="relative inline-flex w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--blue-electric)' }} />
          {text}
        </span>
        <a href="#" className="btn-blue ml-2">{cta}</a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
