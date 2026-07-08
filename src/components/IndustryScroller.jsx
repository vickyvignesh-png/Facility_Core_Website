import React from "react";
import "../styles/IndustryScroller.css";

const IndustryScroller = () => {
  const challenges = [
    {
      title: "Siloed Operations & Delayed Responses",
      desc: "Legacy setups rely on manual logs, paper trails, and isolated spreadsheets, resulting in slow response times, communication gaps, and missed SLAs."
    },
    {
      title: "Lack of Real-Time Asset Visibility",
      desc: "Without unified dashboards, managers struggle to track active team status, equipment performance metrics, energy waste, and compliance audits."
    },
    {
      title: "High Preventive Maintenance Overhead",
      desc: "Relying on reactive run-to-failure practices increases equipment failure rates, leads to expensive repairs, and causes unplanned operational shutdowns."
    }
  ];

  return (
    <section className="ind-scroller-section">
      <div className="ind-scroller-container">
        {/* Premium Section Header */}
        <div className="ind-section-header">
          <span className="ind-premium-tag">Industry Challenges</span>
          <h2 className="ind-main-heading">Industry Challenges Across Modern Facilities</h2>
          <p className="ind-section-description">
            Introduce the common operational challenges faced by different industries before implementing FacilityCore.
          </p>
        </div>

        {/* Content Area */}
        <div className="ind-scroller-content">
          {/* Left Side: Illustration / Image */}
          <div className="ind-scroller-left">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
              alt="Industry Operational Challenges"
              className="ind-scroller-img"
            />
          </div>

          {/* Right Side: Heading, Description, Bullet List */}
          <div className="ind-scroller-right">
            <h3 className="ind-right-heading">Unifying Fragmented Facility Workflows</h3>
            <p className="ind-right-description">
              Before adopting FacilityCore, organizations across key sectors face persistent hurdles that hamper growth, drive up overheads, and lower tenant satisfaction.
            </p>

            <div className="ind-bullet-list">
              {challenges.map((item, idx) => (
                <div className="ind-bullet-item" key={idx}>
                  <div className="ind-bullet-icon-container">
                    <svg
                      className="ind-bullet-svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ind-bullet-text">
                    <h4 className="ind-bullet-title">{item.title}</h4>
                    <p className="ind-bullet-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(IndustryScroller);
