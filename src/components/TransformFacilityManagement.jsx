import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { transformFacilityManagementData } from '../data/FeaturesPageData';
import '../styles/TransformFacilityManagement.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const TransformFacilityManagement = () => {
  const navigate = useNavigate();
  const { badge, heading, description, closingLine, ctaText, ctaLink } = transformFacilityManagementData;
  const BadgeIcon = badge.icon;

  const handleCtaClick = () => {
    navigate(ctaLink);
  };

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
            
            <p className="tfm-description">{description}</p>
            
            {/* Divider */}
            <div className="tfm-divider" />
            
            {/* Highlighted Closing Line */}
            <p className="tfm-closing-line">{closingLine}</p>
            
            {/* Large CTA Style Button */}
            <div className="tfm-action">
              <button onClick={handleCtaClick} className="tfm-btn">
                {ctaText}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(TransformFacilityManagement);
