import React from "react";
import PricingCard from "./PricingCard";
import { fmCompanyPackages } from "../data/pricingData";
import "../styles/FMCompanyPackages.css";

const FMCompanyPackages = () => {
  return (
    <section className="fm-company-packages-section" id="fm-companies">
      <div className="pricing-section-header">
        <span className="pricing-badge">FM COMPANIES PLANS</span>
        <h2 className="pricing-title">FM Company Packages</h2>
        <p className="pricing-desc">
          Enterprise scales for corporate facility management firms. Manage multiple properties, massive asset counts, and large operations teams.
        </p>
      </div>

      <div className="fm-cards-grid">
        {fmCompanyPackages.map((item, idx) => (
          <PricingCard
            key={idx}
            title={item.name}
            price={item.price}
            period={item.period}
            description={item.description}
            features={item.features}
            cta={item.cta}
            highlighted={item.highlighted}
            className="fm-package-card"
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(FMCompanyPackages);
