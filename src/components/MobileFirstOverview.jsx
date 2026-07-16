import React from 'react';
import { motion } from 'framer-motion';
import { mobileFirstOverviewData } from '../data/FeaturesPageData';
import '../styles/MobileFirstOverview.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const imageFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
};

const MobileFirstOverview = () => {
  const { badge, heading, description, paragraphs, image } = mobileFirstOverviewData;
  const BadgeIcon = badge.icon;

  return (
    <section className="mfo-section">
      <div className="container mx-auto mfo-container">
        
        {/* Left Column (Desktop) / 4th item (Mobile) - Image */}
        <motion.div 
          className="mfo-image-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageFade}
        >
          <img src={image} alt={heading} className="mfo-image" />
        </motion.div>

        {/* Right Column Elements */}
        
        {/* Badge */}
        <motion.div 
          className="mfo-badge"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <BadgeIcon className="mfo-badge-icon" />
          <span>{badge.text}</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          className="mfo-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          {heading}
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="mfo-description"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          {description}
        </motion.p>

        {/* Content Paragraphs */}
        <motion.div 
          className="mfo-paragraphs"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          {paragraphs.map((para, idx) => (
            <p key={idx} className="mfo-paragraph">
              {para}
            </p>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default React.memo(MobileFirstOverview);

