import React from 'react';
import { motion } from 'framer-motion';
import { transformFacilityManagementData } from '../data/FeaturesPageData';
import '../styles/TransformFacilityManagement.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const TransformFacilityManagement = () => {
  const { badge, heading, paragraph1, paragraph2, highlightText } = transformFacilityManagementData;
  const BadgeIcon = badge.icon;

  return (
    <section className="tfm-section">
      <div className="container mx-auto tfm-container">
        <motion.div 
          className="tfm-card-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          {/* Centered Content */}
          <div className="tfm-content">
            <div className="tfm-badge">
              <BadgeIcon className="tfm-badge-icon" />
              <span>{badge.text}</span>
            </div>
            
            <h2 className="tfm-heading">{heading}</h2>
            
            {/* Paragraph 1 */}
            <p className="tfm-paragraph">{paragraph1}</p>
            
            {/* Paragraph 2 */}
            <p className="tfm-paragraph">{paragraph2}</p>
            
            {/* Divider */}
            <div className="tfm-divider" />
            
            {/* Highlighted Statement */}
            <p className="tfm-closing-line">{highlightText}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(TransformFacilityManagement);
