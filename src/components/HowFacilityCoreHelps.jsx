import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { howFacilityCoreHelpsData } from '../data/FeaturesPageData';
import '../styles/HowFacilityCoreHelps.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const imageFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
};

const HowFacilityCoreHelps = () => {
  const { badge, heading, bullets, image } = howFacilityCoreHelpsData;
  const BadgeIcon = badge.icon;

  return (
    <section className="hfch-section">
      <div className="container mx-auto hfch-container">

        {/* Left Side - Content */}
        <motion.div
          className="hfch-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="hfch-badge">
            <BadgeIcon className="hfch-badge-icon" />
            <span>{badge.text}</span>
          </div>
          <h2 className="hfch-heading">{heading}</h2>

          <ul className="hfch-bullets">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="hfch-bullet-item">
                <FiCheckCircle className="hfch-bullet-icon" />
                <span className="hfch-bullet-text">{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="hfch-image-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageFade}
        >
          <img src={image} alt={heading} className="hfch-image" />
        </motion.div>

      </div>
    </section>
  );
};

export default React.memo(HowFacilityCoreHelps);
