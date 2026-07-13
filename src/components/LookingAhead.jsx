import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp } from 'react-icons/fi';
import "../styles/LookingAhead.css";

const LookingAhead = () => {
  return (
    <section className="la-section">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="la-card"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtle background glow effects */}
          <div className="la-glow la-glow-1" />
          <div className="la-glow la-glow-2" />

          {/* Card Content Wrapper */}
          <div className="la-card-content">
            {/* Badge */}
            <div className="la-badge">
              <FiTrendingUp className="la-badge-icon" />
              <span>LOOKING AHEAD</span>
            </div>

            {/* Heading */}
            <h2 className="la-heading">The Future of Facility Management</h2>

            {/* Description */}
            <div className="la-desc-container">
              <p className="la-desc-p">
                The future of facility management is intelligent, connected, mobile, and data-driven.
              </p>
              <p className="la-desc-p">
                FacilityCore is committed to helping organizations embrace this transformation through a platform that connects assets, people, technology, and operations into one unified ecosystem.
              </p>
              <p className="la-desc-p">
                As organizations continue to grow and facilities become more complex, FacilityCore will continue to innovate, enabling businesses to improve efficiency, maximize asset value, enhance occupant experiences, and make smarter operational decisions.
              </p>
            </div>

            {/* Premium Divider */}
            <div className="la-divider" />

            {/* Bottom Highlight */}
            <p className="la-bottom-highlight">
              Together, we're building the future of facility management.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LookingAhead;
