import React from 'react';
import { motion } from 'framer-motion';
import { businessChallengesData } from '../data/FeaturesPageData';
import '../styles/BusinessChallenges.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const BusinessChallenges = () => {
  const { badge, heading, description, tagline, challenges } = businessChallengesData;
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

        {/* Challenge Cards — Flexbox wrap */}
        <motion.div
          className="bc-cards-flex"
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
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.10)" }}
              >
                <div className="bc-card-icon-wrapper">
                  <ChallengeIcon className="bc-card-icon" />
                </div>
                <p className="bc-card-text">{challenge.text}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Tagline Banner */}
        <div className="bc-tagline-banner">
          <p className="bc-tagline-text">{tagline}</p>
        </div>

      </div>
    </section>
  );
};

export default React.memo(BusinessChallenges);
