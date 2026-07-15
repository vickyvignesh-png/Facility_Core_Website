import React from 'react';
import { motion } from 'framer-motion';
import { mobileAppAdvantagesData } from '../data/FeaturesPageData';
import '../styles/MobileAppAdvantages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const MobileAppAdvantages = () => {
  const { badge, heading, description, checklist } = mobileAppAdvantagesData;
  const BadgeIcon = badge.icon;

  return (
    <section className="maa-section">
      <div className="container mx-auto maa-container">
        <motion.div 
          className="maa-content-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          {/* Centered Header */}
          <div className="maa-header">
            <div className="maa-badge">
              <BadgeIcon className="maa-badge-icon" />
              <span>{badge.text}</span>
            </div>
            <h2 className="maa-heading">{heading}</h2>
            <p className="maa-description">{description}</p>
          </div>

          {/* Checklist Layout (Two-column on Desktop, Single-column on Mobile) */}
          <div className="maa-grid">
            {checklist.map((item, idx) => (
              <div key={idx} className="maa-item">
                <div className="maa-icon-wrapper">
                  <span className="maa-check-icon">✔</span>
                </div>
                <div className="maa-item-text">
                  <h3 className="maa-item-label">{item.label}</h3>
                  <p className="maa-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(MobileAppAdvantages);
