import React from 'react';
import { motion } from 'framer-motion';
import { FiSmartphone, FiCheck, FiSettings, FiTool, FiUsers } from 'react-icons/fi';
import "../styles/MobileFirst.css";

const MobileFirst = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="mobile-first-section">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Block */}
        <motion.div 
          className="mobile-first-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.span className="mobile-first-badge" variants={fadeUpVariants}>
            <FiSmartphone className="badge-icon" /> MOBILE-FIRST PLATFORM
          </motion.span>
          <motion.h2 className="mobile-first-heading" variants={fadeUpVariants}>
            Mobile-First by Design
          </motion.h2>
          <motion.p className="mobile-first-intro-p" variants={fadeUpVariants}>
            FacilityCore is built with a Mobile-First philosophy, empowering facility teams to manage operations, assets, and services from anywhere with complete real-time visibility.
          </motion.p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="mobile-first-main-grid">
          
          {/* Left Side Content (55%) */}
          <motion.div 
            className="mobile-first-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Block 1 */}
            <motion.div className="content-block-1" variants={fadeUpVariants}>
              <h3 className="block-title">Why Mobile-First?</h3>
              <ul className="premium-bullet-list">
                {[
                  "Facility management doesn't happen behind a desk",
                  "Managers inspect sites",
                  "Supervisors move between buildings",
                  "Technicians work in the field",
                  "Business owners travel frequently",
                  "FacilityCore was designed with a Mobile-First philosophy"
                ].map((point, index) => (
                  <li key={index} className="bullet-item">
                    <span className="bullet-icon-circle">
                      <FiCheck />
                    </span>
                    <span className="bullet-text">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Block 2 */}
            <motion.div className="content-block-2" variants={fadeUpVariants}>
              <h3 className="block-title">Stay Connected Anywhere</h3>
              <div className="connected-card">
                <p>
                  Instead of depending on laptops or desktop computers, FacilityCore allows users to manage their entire operation directly from their mobile devices.
                </p>
                <p>
                  Whether you're visiting another facility, attending meetings, traveling internationally, or working remotely, your business remains connected in real time.
                </p>
                <p>
                  Our dedicated mobile applications ensure every stakeholder has access to the information they need, wherever they are.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Image & Floating Cards (45%) */}
          <motion.div 
            className="mobile-first-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <div className="premium-image-wrapper">
              <img 
                src="/facility_mobile_app.png" 
                alt="Facility Management Mobile Application" 
                className="premium-mobile-image" 
              />
              
              {/* Floating Card 1 */}
              <div className="floating-card card-top-left">
                <span className="floating-emoji">📱</span>
                <span className="floating-text">Real-Time Monitoring</span>
              </div>

              {/* Floating Card 2 */}
              <div className="floating-card card-bottom-right">
                <span className="floating-emoji">✔</span>
                <span className="floating-text">Work Orders Completed</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Dedicated Mobile Applications Sub-section */}
        <div className="dedicated-apps-section">
          <h2 className="dedicated-apps-heading">Dedicated Mobile Applications</h2>
          
          <motion.div 
            className="app-cards-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              {
                icon: <FiSettings />,
                title: "FC Admin App",
                desc: "Designed for facility managers, operations managers, and business leaders to monitor performance, approve requests, review dashboards, and oversee operations."
              },
              {
                icon: <FiTool />,
                title: "FC Employee App",
                desc: "Designed for technicians, engineers, supervisors, and maintenance teams to receive work orders, complete inspections, update maintenance activities, and capture information directly from the field."
              },
              {
                icon: <FiUsers />,
                title: "FC Occupant Management App",
                desc: "Designed for occupants, tenants, residents, and employees to submit service requests, receive updates, access facility services, and communicate with management."
              }
            ].map((card, i) => (
              <motion.div 
                key={i} 
                className="premium-app-card" 
                variants={fadeUpVariants}
              >
                <div className="card-icon-gradient-circle">
                  {card.icon}
                </div>
                <h4 className="card-app-title">{card.title}</h4>
                <p className="card-app-desc">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Highlight Quote Card */}
        <motion.div 
          className="bottom-highlight-quote-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="highlight-quote-icon">❝</span>
          <p className="highlight-quote-text">
            With FacilityCore, your entire facility operation is always within reach.
          </p>
          <p className="highlight-quote-sub">
            Manage facilities anytime, anywhere with secure, real-time access from every device.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default MobileFirst;
