import React from 'react';

const TestimonialCard = ({ title, body, author }) => {
  return (
    <article className="navy-surface p-5">
      {title && <h3 className="text-white text-sm font-semibold mb-2">{title}</h3>}
      <p className="text-white/70 text-sm leading-6">{body}</p>
      {author && <div className="mt-4 text-white/50 text-xs">— {author}</div>}
    </article>
  );
};

export default TestimonialCard;
