import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import "../styles/LookingAhead.css";

const bulletPoints = [
  'Integrating advanced AI and predictive analysis tools for preemptive asset maintenance.',
  'Expanding global infrastructure to support faster response times and multi-region deployments.',
  'Enhancing sustainability and energy tracking tools to help clients meet carbon goals.',
  'Scaling mobile app features with offline-first capabilities for remote facility zones.',
  'Deepening API integrations with third-party building automation and IoT sensor systems.'
];

const LookingAhead = () => {
  return (
    <section className="looking-ahead-section">
      <div className="container mx-auto px-6 lg:px-8 xl:px-10">
        <div className="looking-ahead-grid">

          {/* Left: Image (on mobile, it will appear below content) */}
          <motion.div
            className="looking-ahead-image-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/about_dashboard_preview.png"
              alt="FacilityCore Future Product Features"
              className="looking-ahead-img"
            />
          </motion.div>

          {/* Right: Content Block */}
          <div className="looking-ahead-content">
            <span className="premium-tag">Looking Ahead</span>
            <h2 className="looking-ahead-heading">Future Focus & Expansion</h2>
            <p className="looking-ahead-desc">
              We are constantly evolving our system to handle the next generation of smart facilities. Here is what we are building for the near future.
            </p>

            <ul className="looking-ahead-bullets">
              {bulletPoints.map((bullet, i) => (
                <motion.li
                  key={i}
                  className="bullet-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <FiCheckCircle className="bullet-icon" />
                  <span className="bullet-text">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LookingAhead;
