import React from 'react';
import { motion } from 'framer-motion';
import { whyMobileFirstData } from '../data/FeaturesPageData';
import '../styles/WhyMobileFirst.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const WhyMobileFirst = () => {
  const { badge, heading, description, checklist } = whyMobileFirstData;
  const BadgeIcon = badge.icon;

  return (
    <section className="wmf-section">
      <div className="container mx-auto wmf-container">
        <motion.div 
          className="wmf-box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          {/* Centered Header */}
          <div className="wmf-header">
            <div className="wmf-badge">
              <BadgeIcon className="wmf-badge-icon" />
              <span>{badge.text}</span>
            </div>
            <h2 className="wmf-heading">{heading}</h2>
            <p className="wmf-description">{description}</p>
          </div>

          {/* Two-Column Checklist */}
          <div className="wmf-grid">
            {checklist.map((item, idx) => (
              <div key={idx} className="wmf-item">
                <div className="wmf-icon-wrapper">
                  <BadgeIcon className="wmf-item-icon" />
                </div>
                <div className="wmf-item-content">
                  <h3 className="wmf-item-label">{item.label}</h3>
                  <p className="wmf-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(WhyMobileFirst);
