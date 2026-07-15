import React from 'react';
import { motion } from 'framer-motion';
import { whatYouCanMonitorData } from '../data/FeaturesPageData';
import '../styles/WhatYouCanMonitor.css';

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

const WhatYouCanMonitor = () => {
  const { badge, heading, description, monitors } = whatYouCanMonitorData;
  const BadgeIcon = badge.icon;

  return (
    <section className="wycm-section">
      <div className="container mx-auto wycm-container">
        
        {/* Header */}
        <div className="wycm-header">
          <div className="wycm-badge">
            <BadgeIcon className="wycm-badge-icon" />
            <span>{badge.text}</span>
          </div>
          <h2 className="wycm-heading">{heading}</h2>
          <p className="wycm-description">{description}</p>
        </div>

        {/* Dashboard Style Cards */}
        <motion.div 
          className="wycm-grid"
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
                whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(15, 23, 42, 0.08)" }}
              >
                <div className="wycm-card-header">
                  <div className="wycm-icon-wrapper">
                    <MonitorIcon className="wycm-card-icon" />
                  </div>
                  <h3 className="wycm-card-title">{mon.title}</h3>
                </div>
                <div className="wycm-card-body">
                  <ul className="wycm-bullet-list">
                    {mon.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="wycm-bullet-item">
                        <span className="wycm-dot">•</span>
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
