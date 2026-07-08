import React from "react";
import PricingCard from "./PricingCard";
import { individualModules } from "../data/pricingData";
import "../styles/IndividualModules.css";

const IndividualModules = () => {
  return (
    <section className="individual-modules-section" id="modules">
      <div className="pricing-section-header">
        <span className="pricing-badge">STANDALONE MODULES</span>
        <h2 className="pricing-title">Individual Modules</h2>
        <p className="pricing-desc">
          Only pay for what you need. Standardize operations by purchasing individual platform modules separately.
        </p>
      </div>

      <div className="modules-cards-grid">
        {individualModules.map((item, idx) => (
          <PricingCard
            key={idx}
            title={item.name}
            price={item.price}
            period="/mo"
            icon={item.icon}
            platformFee={item.platformFee}
            total={item.total}
            cta="View Details"
            className="module-pricing-card"
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(IndividualModules);
