import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import '../../styles/Stats.css';

const AnimatedCounter = ({ value, suffix = '', duration = 2.5, isDecimal = false }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: [0.16, 1, 0.3, 1], // cubic out
        onUpdate: (latest) => {
          if (ref.current) {
            if (isDecimal) {
              ref.current.textContent = latest.toFixed(1) + suffix;
            } else {
              ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
            }
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix, duration, isDecimal]);

  return <span ref={ref} className="font-extrabold tracking-tight">0{suffix}</span>;
};

const Stats = () => {
  const statsList = [
    { value: 50000, suffix: '+', label: 'Assets Managed', desc: 'Equipment cataloged & tracked', isDecimal: false },
    { value: 99.9, suffix: '%', label: 'System Availability', desc: 'Reliable cloud service SLA', isDecimal: true },
    { value: 40, suffix: '%', label: 'Reduction in Downtime', desc: 'Through preventive triggers', isDecimal: false },
    { value: 30, suffix: '%', label: 'Improved Productivity', desc: 'Faster dispatch and checklists', isDecimal: false }
  ];

  return (
    <section id="stats" className="py-16 bg-brand-bg relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Dark Container with 32px Border Radius */}
        <div className="stats-container-box p-10 md:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10 text-center">
            {statsList.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`stat-item flex flex-col items-center ${idx === statsList.length - 1 ? 'lg:after:hidden' : ''}`}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    isDecimal={stat.isDecimal} 
                  />
                </div>
                <h3 className="text-sm md:text-base font-bold text-brand-green mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-300 font-medium max-w-[180px]">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
