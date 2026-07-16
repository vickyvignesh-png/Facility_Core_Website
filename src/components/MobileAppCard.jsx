import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { mobileAppData } from '../data/FeaturesPageData';
import '../styles/MobileAppCard.css';

const tabContentVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: 'easeIn' } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.3, ease: 'easeIn' } }
};

const MobileAppCard = () => {
  const [activeTabId, setActiveTabId] = useState('admin');
  const { badge, heading, description, keyFunctionalitiesTitle, idealForTitle, tabs } = mobileAppData;
  
  const activeTab = tabs.find(tab => tab.id === activeTabId);
  const BadgeIcon = badge.icon;

  return (
    <section className="mac-section">
      <div className="container mx-auto mac-container">
        
        {/* Section Header */}
        <div className="mac-header">
          <div className="mac-badge">
            {BadgeIcon && <BadgeIcon className="mac-badge-icon" />}
            <span>{badge.text}</span>
          </div>
          <h2 className="mac-section-heading">{heading}</h2>
          <p className="mac-section-description">{description}</p>
        </div>

        {/* Three Premium Tabs */}
        <div className="mac-tabs-wrapper">
          <div className="mac-tabs">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`mac-tab ${activeTabId === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  <TabIcon className="mac-tab-icon" />
                  <span className="mac-tab-label">{tab.label}</span>
                  {activeTabId === tab.id && (
                    <motion.div 
                      layoutId="activeTabIndicator" 
                      className="mac-tab-indicator" 
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <div key={activeTabId} className="mac-content-grid">
            
            {/* Left Side: Large Image */}
            <motion.div 
              className="mac-image-wrapper"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <img src={activeTab.image} alt={activeTab.subHeading} className="mac-image" />
            </motion.div>

            {/* Right Side: Text & Lists */}
            <motion.div 
              className="mac-text-content"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <span className="mac-subheading">{activeTab.subHeading}</span>
              <h3 className="mac-highlight">{activeTab.highlightPoint}</h3>
              <p className="mac-description">{activeTab.description}</p>
              
              {/* Key Functionalities - Single White Container */}
              <div className="mac-section-block">
                <h4 className="mac-list-title">{keyFunctionalitiesTitle}</h4>
                <div className="mac-enterprise-container">
                  <div className="mac-enterprise-list">
                    {activeTab.features.map((feat, idx) => (
                      <div key={idx} className="mac-enterprise-item">
                        <FiCheckCircle className="mac-item-icon" />
                        <span className="mac-item-text">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ideal For - Single White Container */}
              <div className="mac-section-block">
                <h4 className="mac-list-title">{idealForTitle}</h4>
                <div className="mac-enterprise-container">
                  <div className="mac-enterprise-list">
                    {activeTab.idealFor.map((ideal, idx) => (
                      <div key={idx} className="mac-enterprise-item">
                        <FiCheckCircle className="mac-item-icon" />
                        <span className="mac-item-text">{ideal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default React.memo(MobileAppCard);
