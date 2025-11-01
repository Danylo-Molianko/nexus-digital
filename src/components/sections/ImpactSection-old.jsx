import React from 'react';
import GlassCardStatic from '../ui/GlassCardStatic';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';

const metricsData = [
  {
    value: "+45%",
    title: "Operational Efficiency",
    description: "Average increase for clients after implementing our automation solutions."
  },
  {
    value: ">150",
    title: "Projects Delivered",
    description: "Mission-critical projects successfully delivered and secured according to DevSecOps principles."
  },
  {
    value: "99.9%",
    title: "System Uptime",
    description: "Uptime achieved for our clients through resilient architecture and 24/7 system monitoring."
  },
  {
    value: "-30%",
    title: "Cost Reduction",
    description: "Average reduction in operational costs for businesses leveraging our custom AI-powered tools."
  }
];

const ImpactSection = () => {
  return (
    <section className="py-24 my-12 bg-[var(--bg-level1)]">
      <div className="container mx-auto px-4">
      <div className="mb-16 max-w-3xl mx-auto">
        <div className="holo-frame p-6 md:p-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
            Trusted by leaders
          </h2>
        </div>
      </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {metricsData.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <GlassCardStatic className="text-center">
              <MetricValue value={metric.value} />
              <h3 className="text-xl font-bold mb-2">{metric.title}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm">{metric.description}</p>
            </GlassCardStatic>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ImpactSection;

// Helper component for animated metric counting using Framer Motion
const MetricValue = ({ value }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  // Parse prefix (e.g., '+', '>'), numeric part, and suffix (e.g., '%')
  const match = String(value).trim().match(/^([+>≤≥~<]?)(-?\d+(?:\.\d+)?)(%?)$/);
  const prefix = match ? match[1] : '';
  const numStr = match ? match[2] : '0';
  const suffix = match ? match[3] : '';
  const target = parseFloat(numStr);
  const decimals = (numStr.split('.')[1] || '').length;

  const motionValue = useMotionValue(0);
  const [display, setDisplay] = React.useState('0');

  React.useEffect(() => {
    const unsub = motionValue.on('change', (v) => {
      const formatted = decimals > 0 ? Number(v).toFixed(decimals) : Math.round(v).toString();
      setDisplay(formatted);
    });
    return () => unsub();
  }, [decimals, motionValue]);

  React.useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, target, {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      });
      return () => controls.stop();
    }
  }, [inView, motionValue, target]);

  return (
    <p ref={ref} className="text-5xl font-bold text-[var(--color-accent)] mb-4">
      {prefix}{display}{suffix}
    </p>
  );
};
