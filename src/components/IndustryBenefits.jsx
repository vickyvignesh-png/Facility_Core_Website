import React from "react";
import { motion } from "framer-motion";
import {
  FiTrendingDown,
  FiClock,
  FiPercent,
  FiAward
} from "react-icons/fi";
import "../styles/IndustryBenefits.css";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const statsData = [
  { val: "30%", icon: <FiTrendingDown />, label: "Reduction in Downtime" },
  { val: "40%", icon: <FiClock />, label: "Faster Response Times" },
  { val: "25%", icon: <FiPercent />, label: "Lower Maintenance Costs" },
  { val: "95%", icon: <FiAward />, label: "SLA Compliance Rate" }
];

const IndustryBenefits = () => {
  return (
    <section className="ind-benefits-section">
      <div className="ind-benefits-bg" />
      <div className="ind-benefits-overlay" />
      <div className="ind-benefits-container">
        <div className="ind-section-header light">
          <h2 className="section-title">Driving Measurable Facility Excellence</h2>
          <p className="section-subtitle">
            Quantifiable ROI and performance metrics achieved by enterprise operators globally.
          </p>
        </div>

        <div className="ind-stats-grid">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              className="ind-stat-card"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="ind-stat-icon">{stat.icon}</div>
              <div className="ind-stat-value">{stat.val}</div>
              <div className="ind-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(IndustryBenefits);
