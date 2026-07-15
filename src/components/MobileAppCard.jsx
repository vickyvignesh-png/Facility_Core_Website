import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mobileAppData } from '../data/FeaturesPageData';
import '../styles/MobileAppCard.css';

const tabContentVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3, ease: 'easeIn' } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: 'easeIn' } }
};

const MobileAppCard = () => {
  const [activeTabId, setActiveTabId] = useState('admin');
  const activeTab = mobileAppData.tabs.find(tab => tab.id === activeTabId);

  return (
    <section className="mac-section">
      <div className="container mx-auto mac-container">
        
        {/* Three Premium Tabs */}
        <div className="mac-tabs-wrapper">
          <div className="mac-tabs">
            {mobileAppData.tabs.map((tab) => {
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
              <img src={activeTab.image} alt={activeTab.heading} className="mac-image" />
            </motion.div>

            {/* Right Side: Text & Lists */}
            <motion.div 
              className="mac-text-content"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 className="mac-heading">{activeTab.heading}</h2>
              <p className="mac-description">{activeTab.description}</p>
              
              <div className="mac-lists">
                <div className="mac-features-col">
                  <h3 className="mac-list-title">Key Features</h3>
                  <ul className="mac-bullet-list">
                    {activeTab.features.map((feat, idx) => (
                      <li key={idx} className="mac-bullet-item">
                        <span className="mac-check">✓</span>
                        <span className="mac-text">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mac-ideal-col">
                  <h3 className="mac-list-title">Ideal For</h3>
                  <div className="mac-ideal-tags">
                    {activeTab.idealFor.map((ideal, idx) => (
                      <span key={idx} className="mac-ideal-tag">
                        {ideal}
                      </span>
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
