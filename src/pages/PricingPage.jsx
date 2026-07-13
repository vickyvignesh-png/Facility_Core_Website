import React from "react";
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
        backgroundImage="/solutionpageherosection.png"
        badge="PRICING PLANS"
        title="Simple, Transparent Pricing"
        description="Choose the right FacilityCore plan for your business, property or facility management operations."
        breadcrumbItems={[
          { label: "Home", link: "/" },
          { label: "Pricing" }
        ]}
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
