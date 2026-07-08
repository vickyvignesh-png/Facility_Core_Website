import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import PricingNavigation from "../components/PricingNavigation";
import FacilityPlatformPricing from "../components/FacilityPlatformPricing";
import PropertyPackages from "../components/PropertyPackages";
import AdditionalCharges from "../components/AdditionalCharges";
import IndividualModules from "../components/IndividualModules";
import BusinessPackages from "../components/BusinessPackages";
import FMCompanyPackages from "../components/FMCompanyPackages";
import "../styles/PricingPage.css";

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <Navbar />

      <HeroSection
        title="Simple, Transparent Pricing"
        description="Choose the right FacilityCore plan for your business, property or facility management operations."
        badge={
          <>
            <FiHome /> PRICING
          </>
        }
        breadcrumb={
          <nav className="breadcrumb">
            <Link to="/">Home</Link> / <span>Pricing</span>
          </nav>
        }
        backgroundImage="/solutionpageherosection.png"
      />

      <PricingNavigation />

      <FacilityPlatformPricing />

      <PropertyPackages />

      <AdditionalCharges />

      <IndividualModules />

      <BusinessPackages />

      <FMCompanyPackages />

      <Footer />
    </div>
  );
};

export default PricingPage;
