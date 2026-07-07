import React from "react";
import { motion } from "framer-motion";
import "../styles/PricingCard.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const PricingCard = ({
  title,
  price,
  period = "",
  description,
  features = [],
  cta = "Book Demo",
  onCtaClick,
  highlighted = false,
  icon,
  platformFee,
  total,
  className = ""
}) => {
  return (
    <motion.div
      variants={fadeUp}
      className={`pricing-card ${highlighted ? "highlighted" : ""} ${className}`}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {highlighted && <div className="card-popular-badge">Most Popular</div>}
      
      <div className="card-header">
        {icon && <div className="card-icon">{icon}</div>}
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
      </div>

      <div className="card-pricing">
        <span className="card-price">{price}</span>
        {period && <span className="card-period">{period}</span>}
      </div>

      {platformFee && (
        <div className="card-breakdown">
          <div className="breakdown-row">
            <span>Platform Fee:</span>
            <span>{platformFee}/mo</span>
          </div>
          {total && (
            <div className="breakdown-row total">
              <span>Total Monthly:</span>
              <span>{total}/mo</span>
            </div>
          )}
        </div>
      )}

      {features && features.length > 0 && (
        <ul className="card-features">
          {features.map((feature, idx) => (
            <li key={idx} className="feature-item">
              <span className="feature-tick">✓</span>
              <span className="feature-text">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="card-action">
        <button
          onClick={onCtaClick}
          className={`btn ${highlighted ? "btn-primary" : "btn-secondary"} w-100`}
        >
          {cta}
        </button>
      </div>
    </motion.div>
  );
};

export default React.memo(PricingCard);
