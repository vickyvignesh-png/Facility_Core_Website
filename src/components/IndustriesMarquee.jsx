import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/IndustriesMarquee.css";

const IndustriesMarquee = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  const industriesData = [
    {
      name: "Commercial Buildings",
      heading: "Optimize Commercial Building Operations",
      description: "Enhance tenant satisfaction, preserve high property values, and manage common area utilities with smart automated workflows.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      solutions: [
        "Automate tenant request routing and tracking",
        "Deploy condition-based HVAC & lighting checks",
        "Schedule regular common area audits & checklists",
        "Predictive maintenance integrations for lifts and escalators",
        "Track vendor SLA performance on one dashboard"
      ]
    },
    {
      name: "Corporate Offices",
      heading: "Smart Operations for Corporate IT Campuses",
      description: "Improve space utilization, hot-desk operations, and smart energy optimization across modern workspace layouts.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      solutions: [
        "Integrate hot-desk bookings with room occupancy sensors",
        "Dispatch cleaning requests based on actual room usage",
        "Monitor utility and energy consumption trends in real-time",
        "Provide touchless visitor check-in workflows",
        "Centralize IT and office facility support ticketing"
      ]
    },
    {
      name: "Residential Communities",
      heading: "Unified Operations for Residential Hubs",
      description: "Simplify community board management, amenity reservations, and public safety verification with ease.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
      solutions: [
        "Provide user-friendly tenant portal for maintenance tickets",
        "Manage amenity bookings for pools, clubhouses, and gyms",
        "Digitalize guard patrols and gate visitor registries",
        "Automate landscaping and building exterior checks",
        "Generate transparent facility expense and utility reports"
      ]
    },
    {
      name: "Hospitals",
      heading: "Medical-Grade Compliance & Care Facilities",
      description: "Ensure strict sanitation checklists, reliable backup power failovers, and environment conditions are monitored 24/7/365.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      solutions: [
        "Enforce automated sanitation and hygiene checklists",
        "Real-time asset tracking for critical life-support equipment",
        "Instant air pressure and room HVAC condition warnings",
        "Schedule auto-testing for emergency diesel generators",
        "Generate audit-ready compliance logs for certifications"
      ]
    },
    {
      name: "Manufacturing",
      heading: "Predictive Operations for Production Lines",
      description: "Link heavy equipment sensors to prevent unexpected breakdowns and keep production workflows continuous.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      solutions: [
        "Trigger auto-tickets from temperature & vibration sensors",
        "Establish swift escalation logs for assembly line shutdowns",
        "Monitor spare parts inventory with automated reorder limits",
        "Document Environment, Health, and Safety (EHS) logs",
        "Direct ticket routing to technicians by required skill-sets"
      ]
    },
    {
      name: "Warehouses",
      heading: "Smarter Logistics & Distribution Hubs",
      description: "Optimize dock door schedules, logistics safety walks, and large-scale utility distributions across sprawling hubs.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      solutions: [
        "Live status views and maintenance routing for dock doors",
        "Equip staff with mobile building audit and incident report logs",
        "Track fire safety routines and scheduled hazard test logs",
        "Optimize energy footprints with warehouse lighting automation",
        "Map team locations and track SLAs on sprawling grounds"
      ]
    },
    {
      name: "Retail",
      heading: "Elevate Foot Traffic Safety & Retail Spaces",
      description: "Track escalators, public space HVAC controls, and vendor cleaning quality to ensure safe shopping experiences.",
      image: "https://images.unsplash.com/photo-1567401893930-7db712e75313?auto=format&fit=crop&q=80&w=800",
      solutions: [
        "Schedule automated safety audits for high-traffic aisles",
        "Track escalator, lift, and entry door maintenance checks",
        "Integrate tenant utility sub-metering and bills",
        "Optimize public area cleaning based on footfall data",
        "Evaluate vendor cleaning quality against strict SLAs"
      ]
    },
    {
      name: "Educational Institutions",
      heading: "Safe & Efficient Multi-Building Campuses",
      description: "Organize campus services, classroom environments, and seasonal space allocation inside one unified system.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
      solutions: [
        "Deploy student-and-staff helpdesk for class building requests",
        "Enforce classroom, laboratory, and library safety protocols",
        "Manage seasonal power-down logs during school holidays",
        "Digitize dormitory maintenance audits and check-in logs",
        "Schedule inspection alerts for sports and event structures"
      ]
    }
  ];

  const handleTabClick = (idx) => {
    if (idx === activeTab) return;
    setFadeState("fade-out");
    setTimeout(() => {
      setActiveTab(idx);
      setFadeState("fade-in");
    }, 200); // 200ms matches css transition duration
  };

  const selectedIndustry = industriesData[activeTab];

  return (
    <section className="ind-marquee-section">
      <div className="ind-marquee-container">
        {/* Premium Section Header */}
        <div className="ind-section-header">
          <span className="ind-premium-tag">How FacilityCore Helps</span>
          <h2 className="ind-main-heading">How FacilityCore Solves Industry Challenges</h2>
          <p className="ind-section-description">
            Explain how the platform adapts to multiple industries.
          </p>
        </div>

        {/* Vertical Tabs and Content Split Layout */}
        <div className="ind-marquee-content-split">
          {/* Left Side: Tabs List */}
          <div className="ind-tab-list-wrapper">
            <div className="ind-tab-list">
              {industriesData.map((ind, idx) => (
                <button
                  key={idx}
                  className={`ind-tab-btn ${idx === activeTab ? "active" : ""}`}
                  onClick={() => handleTabClick(idx)}
                >
                  {ind.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Dynamic Content Panel */}
          <div className="ind-tab-content-wrapper">
            <div className={`ind-content-panel ${fadeState}`}>
              {/* Info Area */}
              <div className="ind-content-info">
                <h3 className="ind-content-heading">{selectedIndustry.heading}</h3>
                <p className="ind-content-description">{selectedIndustry.description}</p>
                
                <ul className="ind-content-bullet-list">
                  {selectedIndustry.solutions.map((sol, idx) => (
                    <li className="ind-content-bullet-item" key={idx}>
                      <span className="ind-content-bullet-checkmark">✓</span>
                      <span className="ind-content-bullet-text">{sol}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/demo" className="btn btn-primary ind-content-cta">
                  Learn More
                </Link>
              </div>

              {/* Illustration / Image Area */}
              <div className="ind-content-image-area">
                <img
                  src={selectedIndustry.image}
                  alt={selectedIndustry.name}
                  className="ind-content-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(IndustriesMarquee);
