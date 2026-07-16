import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { whatYouCanMonitorData } from '../data/FeaturesPageData';
import '../styles/WhatYouCanMonitor.css';

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

const WhatYouCanMonitor = () => {
  const { badge, heading, description, monitors } = whatYouCanMonitorData;
  const BadgeIcon = badge.icon;

  return (
    <section className="wycm-section">
      <div className="container mx-auto wycm-container">
        
        {/* Section Header */}
        <div className="wycm-header">
          <div className="wycm-badge">
            <BadgeIcon className="wycm-badge-icon" />
            <span>{badge.text}</span>
          </div>
          <h2 className="wycm-heading">{heading}</h2>
          <p className="wycm-description">{description}</p>
        </div>

        {/* Dashboard Style Cards - Flex wrap layout */}
        <motion.div 
          className="wycm-grid-flex"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {monitors.map((mon, idx) => {
            const MonitorIcon = mon.icon;
            return (
              <motion.div 
                key={idx} 
                className="wycm-card"
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)" }}
              >
                {/* Icon Container */}
                <div className="wycm-icon-wrapper">
                  <MonitorIcon className="wycm-card-icon" />
                </div>
                
                {/* Card Title */}
                <h3 className="wycm-card-title">{mon.title}</h3>
                
                {/* Divider */}
                <hr className="wycm-divider" />
                
                {/* Monitoring Items */}
                <div className="wycm-card-body">
                  <ul className="wycm-bullet-list">
                    {mon.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="wycm-bullet-item">
                        <FiCheckCircle className="wycm-item-icon" />
                        <span className="wycm-bullet-text">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default React.memo(WhatYouCanMonitor);
// End of WhatYouCanMonitor.jsx component file
