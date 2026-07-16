import React from 'react';
import { motion } from 'framer-motion';
import { businessBenefitsData } from '../data/FeaturesPageData';
import '../styles/BusinessBenefits.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const BusinessBenefits = () => {
  const { badge, heading, description, benefits } = businessBenefitsData;
  const BadgeIcon = badge.icon;

  return (
    <section className="bb-section">
      <div className="container mx-auto bb-container">
        
        {/* Section Header */}
        <div className="bb-header">
          <div className="bb-badge">
            <BadgeIcon className="bb-badge-icon" />
            <span>{badge.text}</span>
          </div>
          <h2 className="bb-heading">{heading}</h2>
          <p className="bb-description">{description}</p>
        </div>

        {/* Benefits Cards Wrapper - Flex wrap layout */}
        <motion.div 
          className="bb-grid-flex"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div 
                key={idx} 
                className="bb-card"
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)" }}
              >
                <div className="bb-icon-wrapper">
                  <IconComponent className="bb-card-icon" />
                </div>
                <h3 className="bb-card-title">{benefit.title}</h3>
                <p className="bb-card-desc">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default React.memo(BusinessBenefits);
