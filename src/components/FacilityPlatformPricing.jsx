import React from "react";
import { motion } from "framer-motion";
import { FiHome } from "react-icons/fi";
import { platformPricing } from "../data/pricingData";
import "../styles/FacilityPlatformPricing.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FacilityPlatformPricing = () => {
  return (
    <section className="platform-pricing-section" id="platform">
      <div className="pricing-section-header">
        <span className="pricing-badge">BASE PLATFORM</span>
        <h2 className="pricing-title">FacilityCore Platform Fee</h2>
        <p className="pricing-desc">
          Get started with our core workspace environment. The base platform plan includes robust operations tools.
        </p>
      </div>

      <motion.div
        className="platform-pricing-card"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="card-left">
          <div className="platform-header">
            <div className="platform-icon">
              <FiHome />
            </div>
            <div>
              <h3 className="platform-card-title">Core Workspace Platform</h3>
              <p className="platform-card-subtitle">Included on all packages and custom plans</p>
            </div>
          </div>

          <div className="platform-users-details">
            <h4 className="details-title">Included Base Users</h4>
            <div className="users-flex">
              <div className="user-box">
                <span className="user-num">{platformPricing.includedUsers.web}</span>
                <span className="user-label">Management Dashboard</span>
              </div>
              <div className="user-box">
                <span className="user-num">{platformPricing.includedUsers.mobile}</span>
                <span className="user-label">Mobile Technicians</span>
              </div>
            </div>
          </div>

          <div className="platform-additional-pricing">
            <h4 className="details-title">Additional User Costs</h4>
            <div className="additional-flex">
              <div className="additional-item">
                <span>Extra Web User:</span>
                <strong>{platformPricing.additionalPricing.web} / month</strong>
              </div>
              <div className="additional-item">
                <span>Extra Mobile User:</span>
                <strong>{platformPricing.additionalPricing.mobile} / month</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="card-right">
          <div className="fee-display">
            <span className="fee-label">Monthly Platform Fee</span>
            <span className="fee-val">{platformPricing.fee}</span>
            <span className="fee-period">/ {platformPricing.period}</span>
          </div>

          <div className="features-container">
            <h4 className="features-title">Platform Features Included:</h4>
            <ul className="platform-features-list">
              {platformPricing.features.map((feature, idx) => (
                <li key={idx} className="platform-feature-item">
                  <span className="check-icon">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="btn btn-primary platform-cta">
            Book Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(FacilityPlatformPricing);
