import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCompass,
  FiFeather,
  FiActivity,
  FiCpu,
  FiHeart,
} from 'react-icons/fi';
import '../styles/OurApproach.css';

const tabs = [
  {
    step: '01',
    label: 'Simplicity',
    icon: <FiFeather />,
    title: 'Simplicity',
    desc: 'Technology should make work easier. We create intuitive solutions that simplify even the most complex facility operations.',
  },
  {
    step: '02',
    label: 'Operational Excellence',
    icon: <FiActivity />,
    title: 'Operational Excellence',
    desc: 'We help organizations standardize processes, improve service quality, and achieve consistent operational performance.',
  },
  {
    step: '03',
    label: 'Innovation',
    icon: <FiCpu />,
    title: 'Innovation',
    desc: 'We continuously invest in modern technologies, automation, mobility, analytics, and intelligent workflows to meet the future needs of facility management.',
  },
  {
    step: '04',
    label: 'Customer Success',
    icon: <FiHeart />,
    title: 'Customer Success',
    desc: 'Our success is measured by the success of our customers. We are committed to building long-term partnerships and delivering measurable business value.',
  },
];

const panelVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit:   { opacity: 0, y: -12, transition: { duration: 0.25, ease: 'easeIn' } },
};

const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const OurApproach = () => {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section className="oa-section">
      <div className="container mx-auto px-4 md:px-8">

        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          className="oa-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          <motion.span className="oa-badge" variants={fadeUp}>
            <FiCompass className="oa-badge-icon" />
            OUR APPROACH
          </motion.span>
          <motion.h2 className="oa-heading" variants={fadeUp}>
            Our Approach
          </motion.h2>
          <motion.p className="oa-desc" variants={fadeUp}>
            Everything we build is guided by four key principles.
          </motion.p>
        </motion.div>

        {/* ── Two-Column Panel ──────────────────────────────── */}
        <div className="oa-panel-grid">

          {/* LEFT — Vertical Tabs */}
          <nav className="oa-tab-nav">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`oa-tab-item${active === i ? ' oa-tab-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="oa-tab-num-circle">{tab.step}</span>
                <span className="oa-tab-label">{tab.label}</span>
              </button>
            ))}
          </nav>

          {/* RIGHT — Dynamic Content Panel */}
          <div className="oa-content-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="oa-content-inner"
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Large icon circle */}
                <div className="oa-icon-circle">
                  {current.icon}
                </div>

                {/* Title */}
                <h3 className="oa-content-title">{current.title}</h3>

                {/* Description */}
                <p className="oa-content-desc">{current.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurApproach;
