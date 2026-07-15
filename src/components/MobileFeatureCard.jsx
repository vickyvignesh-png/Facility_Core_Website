import React from 'react';
import { motion } from 'framer-motion';
import { mobileFeatureCardsData } from '../data/FeaturesPageData';
import '../styles/MobileFeatureCard.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const MobileFeatureCard = () => {
  const { badge, heading, description, features } = mobileFeatureCardsData;
  const BadgeIcon = badge.icon;

  return (
    <section className="mfc-section" id="mobile-features">
      <div className="container mx-auto mfc-container">
        
        {/* Section Header */}
        <div className="mfc-header">
          <div className="mfc-badge">
            <BadgeIcon className="mfc-badge-icon" />
            <span>{badge.text}</span>
          </div>
          <h2 className="mfc-heading">{heading}</h2>
          <p className="mfc-description">{description}</p>
        </div>

        {/* Feature Grid */}
        <motion.div 
          className="mfc-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <motion.div 
                key={idx} 
                className="mfc-card"
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(15, 23, 42, 0.08)" }}
              >
                <div className="mfc-icon-wrapper">
                  <IconComponent className="mfc-card-icon" />
                </div>
                <h3 className="mfc-card-title">{feat.title}</h3>
                <p className="mfc-card-desc">{feat.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default React.memo(MobileFeatureCard);
