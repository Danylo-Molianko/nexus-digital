import React from 'react';

const LogosStrip = ({ items = ['Meta', 'Uber', 'Ingenico', 'Accenture', 'Adidas', 'Atlassian', 'Logitech'] }) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <ul className="logos-strip grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 items-center">
          {items.map((label) => (
            <li key={label} className="text-center text-white/60 text-sm sm:text-base">
              <span className="inline-block px-2 py-1 rounded">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LogosStrip;
