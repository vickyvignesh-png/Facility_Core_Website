import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheck, FiMessageCircle } from 'react-icons/fi';
import '../styles/WhyChooseFacilityCore.css';

const bullets = [
  'Digitize facility operations',
  'Improve asset reliability',
  'Automate maintenance workflows',
  'Increase workforce productivity',
  'Enhance occupant experiences',
  'Improve SLA performance',
  'Simplify compliance management',
  'Optimize operational costs',
  'Monitor business performance in real time',
  'Support sustainable facility operations',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const WhyChooseFacilityCore = () => {
  return (
    <section className="wcf-section">
      <div className="container mx-auto px-4 md:px-8">
        <div className="wcf-grid">

          {/* LEFT — Image */}
          <motion.div
            className="wcf-image-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="wcf-image-wrapper">
              <motion.img
                src="/vendormangemnt.png"
                alt="Why Choose FacilityCore"
                className="wcf-image"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            className="wcf-content-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Badge */}
            <motion.span className="wcf-badge" variants={fadeUp}>
              <FiAward className="wcf-badge-icon" />
              WHY CHOOSE FACILITYCORE
            </motion.span>

            {/* Heading */}
            <motion.h2 className="wcf-heading" variants={fadeUp}>
              Why Organizations Choose FacilityCore
            </motion.h2>

            {/* Description */}
            <motion.p className="wcf-desc" variants={fadeUp}>
              Organizations choose FacilityCore because it combines industry knowledge with intelligent technology.
            </motion.p>

            {/* Blue highlight line */}
            <motion.p className="wcf-blue-label" variants={fadeUp}>
              Our platform enables businesses to:
            </motion.p>

            {/* Bullet Grid */}
            <motion.ul className="wcf-bullet-grid" variants={stagger}>
              {bullets.map((point, i) => (
                <motion.li
                  key={i}
                  className="wcf-bullet-item"
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                >
                  <span className="wcf-bullet-icon">
                    <FiCheck />
                  </span>
                  <span className="wcf-bullet-text">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Highlight Box */}
            <motion.div
              className="wcf-highlight-box"
              variants={fadeUp}
              whileHover={{ boxShadow: '0 18px 40px rgba(15,23,42,.10)' }}
            >
              <FiMessageCircle className="wcf-quote-icon" />
              <p className="wcf-highlight-text">
                FacilityCore transforms data into actionable insights that help organizations make faster, smarter, and more confident decisions.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseFacilityCore;
