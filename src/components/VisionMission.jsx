import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiCompass } from 'react-icons/fi';
import '../styles/VisionMission.css';

const fadeDown = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariant = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
});

const VisionMission = () => {
  return (
    <section className="vm-section">
      {/* Dark gradient overlay */}
      <div className="vm-overlay" />

      <div className="container mx-auto px-4 md:px-8 vm-content">

        {/* ── Header ─────────────────────────────────────── */}
        <motion.div
          className="vm-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span className="vm-badge" variants={fadeDown}>
            <FiTarget className="vm-badge-icon" />
            OUR VISION &amp; MISSION
          </motion.span>

          <motion.h2 className="vm-heading" variants={fadeUp}>
            Our Vision &amp; Mission
          </motion.h2>

          <motion.p className="vm-intro" variants={fadeUp}>
            Driving smarter facilities through a clear vision and a mission focused on innovation, operational excellence, and long-term customer success.
          </motion.p>
        </motion.div>

        {/* ── Cards Grid ─────────────────────────────────── */}
        <div className="vm-cards-grid">

          {/* Vision Card */}
          <motion.div
            className="vm-glass-card"
            variants={cardVariant(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <div className="vm-card-header">
              <div className="vm-icon-circle vm-vision-gradient">
                <FiEye />
              </div>
              <h3 className="vm-card-title">Our Vision</h3>
            </div>
            <p className="vm-card-desc">
              To become a global leader in intelligent Facility Management solutions, helping organizations create smarter, safer, and more sustainable workplaces through digital innovation.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="vm-glass-card"
            variants={cardVariant(0.35)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <div className="vm-card-header">
              <div className="vm-icon-circle vm-mission-gradient">
                <FiCompass />
              </div>
              <h3 className="vm-card-title">Our Mission</h3>
            </div>
            <p className="vm-card-desc">
              To simplify facility management by providing an integrated platform that empowers organizations to efficiently manage assets, maintenance, workforce, compliance, and occupant experiences.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
