import React from "react";
import { marqueeItems } from "../data/industriesData";
import "../styles/IndustriesMarquee.css";

const IndustriesMarquee = () => {
  return (
    <section className="ind-marquee-section">
      <div className="ind-marquee-header">
        <h2 className="marquee-title">Industries We Empower</h2>
      </div>
      <div className="ind-marquee-track">
        <div className="ind-marquee-content">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div className="ind-marquee-card" key={idx}>
              <div className="ind-marquee-icon">{item.icon}</div>
              <span className="ind-marquee-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(IndustriesMarquee);
