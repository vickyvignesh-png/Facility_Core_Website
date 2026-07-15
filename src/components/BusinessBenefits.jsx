import React from 'react';
import { motion } from 'framer-motion';
import { businessBenefitsData } from '../data/FeaturesPageData';
import '../styles/BusinessBenefits.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const imageFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
};

const BusinessBenefits = () => {
  const { badge, heading, description, benefits, image } = businessBenefitsData;
  const BadgeIcon = badge.icon;

  return (
    <section className="bb-section">
      <div className="container mx-auto bb-container">
        {/* Left Side - Image */}
        <motion.div 
          className="bb-image-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageFade}
        >
          <img src={image} alt={heading} className="bb-image" />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div 
          className="bb-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="bb-badge">
            <BadgeIcon className="bb-badge-icon" />
            <span>{badge.text}</span>
          </div>
          <h2 className="bb-heading">{heading}</h2>
          <p className="bb-description">{description}</p>
          
          <ul className="bb-benefits-list">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="bb-benefit-item">
                <span className="bb-check-mark">✓</span>
                <span className="bb-benefit-text">{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(BusinessBenefits);
