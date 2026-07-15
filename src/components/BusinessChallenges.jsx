import React from 'react';
import { motion } from 'framer-motion';
import { businessChallengesData } from '../data/FeaturesPageData';
import '../styles/BusinessChallenges.css';

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

const BusinessChallenges = () => {
  const { badge, heading, description, challenges } = businessChallengesData;
  const BadgeIcon = badge.icon;

  return (
    <section className="bc-section">
      <div className="container mx-auto bc-container">
        {/* Section Header */}
        <div className="bc-header">
          <div className="bc-badge">
            <BadgeIcon className="bc-badge-icon" />
            <span>{badge.text}</span>
          </div>
          <h2 className="bc-heading">{heading}</h2>
          <p className="bc-description">{description}</p>
        </div>

        {/* Challenges Grid */}
        <motion.div 
          className="bc-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {challenges.map((challenge, idx) => {
            const ChallengeIcon = challenge.icon;
            return (
              <motion.div 
                key={idx} 
                className="bc-card"
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(15, 23, 42, 0.08)" }}
              >
                <div className="bc-card-icon-wrapper">
                  <ChallengeIcon className="bc-card-icon" />
                </div>
                <h3 className="bc-card-title">{challenge.title}</h3>
                <p className="bc-card-desc">{challenge.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(BusinessChallenges);
