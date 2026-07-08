import React from "react";
import { Link } from "react-router-dom";
import { FiServer } from "react-icons/fi";
import { detailedIndustries } from "../data/industriesData";
import "../styles/IndustryScroller.css";

const IndustryScroller = () => {
  return (
    <section className="ind-scroller-section" id="detailed-scroller">
      <div className="ind-section-header">
        <span className="ind-section-badge">
          <FiServer /> DEEP DIVE
        </span>
        <h2 className="section-title">Operational Excellence Redefined</h2>
        <p className="section-subtitle">
          See how FacilityCore solves unique challenges across key sectors.
        </p>
      </div>

      <div className="ind-scroller-container">
        {detailedIndustries.map((ind, i) => (
          <div className="ind-scroll-wrapper" key={i}>
            <div
              className={`ind-scroll-card ${
                i % 2 === 0 ? "layout-left" : "layout-right"
              }`}
            >
              <div className="ind-scroll-left">
                <span className="ind-scroll-badge">SECTOR OVERVIEW</span>
                <h3 className="ind-scroll-title">{ind.name}</h3>
                <p className="ind-scroll-desc">{ind.overview}</p>

                <div className="ind-scroll-split">
                  <div className="ind-scroll-challenges">
                    <h4>Challenges We Solve</h4>
                    <ul>
                      {ind.challenges.map((c, idx) => (
                        <li key={idx}>
                          <span className="bullet-x">✕</span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="ind-scroll-helps">
                    <h4>How FacilityCore Helps</h4>
                    <p>{ind.solution}</p>
                  </div>
                </div>

                <div className="ind-scroll-benefits">
                  <h4>Key Benefits</h4>
                  <div className="ind-benefits-pills">
                    {ind.benefits.map((b, idx) => (
                      <span key={idx} className="ind-benefit-pill">
                        ✓ {b}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/demo" className="btn btn-primary ind-card-cta">
                  Request Sector Demo
                </Link>
              </div>

              <div className="ind-scroll-right">
                <img
                  src={ind.img}
                  alt={ind.name}
                  className="ind-scroll-img"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(IndustryScroller);
