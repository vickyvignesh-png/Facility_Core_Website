import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { mobileAppAdvantagesData } from '../data/FeaturesPageData';
import '../styles/MobileAppAdvantages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const MobileAppAdvantages = () => {
  const { badge, heading, description, leftColumn, rightColumn } = mobileAppAdvantagesData;
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

          {/* Enterprise Two-Column Checklist */}
          <div className="maa-grid-columns">
            
            {/* Left Column */}
            <div className="maa-list-column">
              {leftColumn.map((item, idx) => (
                <div key={idx} className="maa-list-item">
                  <FiCheckCircle className="maa-item-icon" />
                  <span className="maa-item-text">{item}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="maa-list-column">
              {rightColumn.map((item, idx) => (
                <div key={idx} className="maa-list-item">
                  <FiCheckCircle className="maa-item-icon" />
                  <span className="maa-item-text">{item}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(MobileAppAdvantages);
// End of MobileAppAdvantages.jsx component file

