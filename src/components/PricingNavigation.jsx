import React, { useState, useEffect } from "react";
import "../styles/PricingNavigation.css";

const navItems = [
  { label: "FacilityCore Platform", targetId: "platform" },
  { label: "Property Packages", targetId: "properties" },
  { label: "Additional Charges", targetId: "charges" },
  { label: "Individual Modules", targetId: "modules" },
  { label: "Business Packages", targetId: "business" },
  { label: "FM Company Packages", targetId: "fm-companies" }
];

const PricingNavigation = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160; // offset for sticky nav header

      for (let item of navItems) {
        const element = document.getElementById(item.targetId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.targetId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100; // offset to not hide heading under sticky menu
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="pricing-nav-wrapper">
      <div className="pricing-nav-container">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={`#${item.targetId}`}
            onClick={(e) => handleNavClick(e, item.targetId)}
            className={`pricing-nav-item ${
              activeSection === item.targetId ? "active" : ""
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default React.memo(PricingNavigation);
