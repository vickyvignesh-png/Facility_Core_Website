import React from "react";
import PricingCard from "./PricingCard";
import { additionalCharges } from "../data/pricingData";
import "../styles/AdditionalCharges.css";

const AdditionalCharges = () => {
  return (
    <section className="additional-charges-section" id="charges">
      <div className="pricing-section-header">
        <span className="pricing-badge">ADD-ONS</span>
        <h2 className="pricing-title">Additional Charges</h2>
        <p className="pricing-desc">
          Scale your operation up as you grow. Purchase extra web or mobile operator profiles or add asset capacity anytime.
        </p>
      </div>

      <div className="additional-cards-grid">
        {additionalCharges.map((item, idx) => (
          <PricingCard
            key={idx}
            title={item.title}
            price={item.price}
            period={`/ ${item.period}`}
            description={item.description}
            cta="Add to Plan"
            className="additional-charge-card"
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(AdditionalCharges);
