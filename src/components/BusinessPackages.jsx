import React from "react";
import PricingTable from "./PricingTable";
import { businessPackagesTable } from "../data/pricingData";
import "../styles/BusinessPackages.css";

const BusinessPackages = () => {
  return (
    <section className="business-packages-section" id="business">
      <div className="pricing-section-header">
        <span className="pricing-badge">BUSINESS WORKFLOWS</span>
        <h2 className="pricing-title">Business Packages</h2>
        <p className="pricing-desc">
          Compare CRM features, task limits, customer invoice automation, and dynamic workflow pipelines.
        </p>
      </div>

      <div className="pricing-table-container">
        <PricingTable tableData={businessPackagesTable} />
      </div>
    </section>
  );
};

export default React.memo(BusinessPackages);
