import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

import MobileFirstOverview from '../components/MobileFirstOverview';
import WhyMobileFirst from '../components/WhyMobileFirst';
import BusinessChallenges from '../components/BusinessChallenges';
import HowFacilityCoreHelps from '../components/HowFacilityCoreHelps';
import MobileAppCard from '../components/MobileAppCard';
import MobileFeatureCard from '../components/MobileFeatureCard';
import BusinessBenefits from '../components/BusinessBenefits';
import WhatYouCanMonitor from '../components/WhatYouCanMonitor';
import MobileAppAdvantages from '../components/MobileAppAdvantages';
import TransformFacilityManagement from '../components/TransformFacilityManagement';

import '../styles/FeaturesPage.css';

const FeaturesPage = () => {
  return (
    <div className="features-page">
      <Navbar />

      <HeroSection
        backgroundImage="/solutionpageherosection.png"
        badge="PLATFORM FEATURES"
        title="Modern Features For Smart Facilities"
        description="Manage assets, automate workflows, gain real-time visibility, and optimize facility performance from a single platform."
        breadcrumbItems={[
          { label: "Home", link: "/" },
          { label: "Features" }
        ]}
      />

      {/* Section 1: Mobile First Overview (White) */}
      <MobileFirstOverview />

      {/* Section 2: Why Mobile First (Light Gray) */}
      <WhyMobileFirst />

      {/* Section 3: Business Challenges (White) */}
      <BusinessChallenges />

      {/* Section 4: How FacilityCore Helps (Light Gray) */}
      <HowFacilityCoreHelps />

      {/* Section 5: Mobile App Card (White) */}
      <MobileAppCard />

      {/* Section 6: Mobile Feature Card (Light Gray) */}
      <MobileFeatureCard />

      {/* Section 7: Business Benefits (White) */}
      <BusinessBenefits />

      {/* Section 8: What You Can Monitor (Light Gray) */}
      <WhatYouCanMonitor />

      {/* Section 9: Mobile App Advantages (White) */}
      <MobileAppAdvantages />

      {/* Section 10: Transform Facility Management (Light Gray container) */}
      <TransformFacilityManagement />

      <Footer />
    </div>
  );
};

export default React.memo(FeaturesPage);