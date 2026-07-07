import React from "react";
import PricingTable from "./PricingTable";
import { propertyPackagesTable } from "../data/pricingData";
import "../styles/PropertyPackages.css";

const PropertyPackages = () => {
  return (
    <section className="property-packages-section" id="properties">
      <div className="pricing-section-header">
        <span className="pricing-badge">PROPERTY PLANS</span>
        <h2 className="pricing-title">Property Packages</h2>
        <p className="pricing-desc">
          Compare our property operations plans. Choose the capacity and modules that match your buildings or real estate portfolio size.
        </p>
      </div>

      <div className="pricing-table-container">
        <PricingTable tableData={propertyPackagesTable} />
      </div>
    </section>
  );
};

export default React.memo(PropertyPackages);
