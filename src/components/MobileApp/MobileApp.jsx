import React from "react";
import { FiSmartphone, FiCheckCircle } from "react-icons/fi";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import "../../styles/MobileApp.css";

// Image path
const mobileAppImage = "/FacilityCore-Mobile-App.svg";

const MobileApp = () => {
  const features = [
    "FC Admin App",
    "FC Employee App",
    "FC Occupant App",
    "Real-Time Updates",
    "QR Asset Scanning",
    "Offline Capability",
  ];

  return (
    <section className="mobileapp-section py-10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 mobileapp-container">
        {/* Left Side Content */}
        <div className="mobileapp-content">
          <div className="mobileapp-tag">
            <FiSmartphone className="mobileapp-tag-icon" size={24} />
            <span className="mobileapp-tag-text">Mobile Workforce Platform</span>
          </div>

          <h2 className="mobileapp-heading">
            Mobile Workforce Platform
          </h2>

          <p className="mobileapp-description">
            Empower managers, technicians, occupants, and stakeholders with real-time access to facility operations from anywhere.
          </p>

          <ul className="mobileapp-grid">
            {features.map((item) => (
              <li key={item} className="mobileapp-item">
                <FiCheckCircle className="mobileapp-item-icon" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mobileapp-downloads">
            <a href="#" className="mobileapp-store-btn">
              <FaApple size={24} />
              <div className="flex flex-col items-start">
                <span className="mobileapp-store-subtitle">Download on the</span>
                <span className="mobileapp-store-title">App Store</span>
              </div>
            </a>
            <a href="#" className="mobileapp-store-btn">
              <FaGooglePlay size={20} />
              <div className="flex flex-col items-start">
                <span className="mobileapp-store-subtitle">GET IT ON</span>
                <span className="mobileapp-store-title">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="mobileapp-image-container">
          <img src={mobileAppImage} alt="FacilityCore Mobile App" className="mobileapp-image" />
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
