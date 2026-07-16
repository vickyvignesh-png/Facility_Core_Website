import React from 'react';
import { motion } from 'framer-motion';
import { whyMobileFirstData } from '../data/FeaturesPageData';
import '../styles/WhyMobileFirst.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const WhyMobileFirst = () => {
  const { badge, heading, paragraphs } = whyMobileFirstData;
  const BadgeIcon = badge.icon;

  return (
    <section className="wmf-section">
      <div className="container mx-auto wmf-container">
        <motion.div 
          className="wmf-content-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          {/* Centered Header */}
          <div className="wmf-header">
            <div className="wmf-badge">
              {BadgeIcon && <BadgeIcon className="wmf-badge-icon" />}
              <span>{badge.text}</span>
            </div>
            <h2 className="wmf-heading">{heading}</h2>
          </div>

          {/* Three Individual Premium Cards */}
          <div className="wmf-panels-wrapper">
            {paragraphs && paragraphs.map((para, idx) => (
              <div key={idx} className="wmf-premium-panel">
                <p className="wmf-panel-paragraph">{para}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(WhyMobileFirst);

