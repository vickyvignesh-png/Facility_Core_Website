import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

import AboutIntro from '../components/AboutIntro';
import OurStory from '../components/OurStory';
import IndustryExperience from '../components/IndustryExperience';
import MobileFirst from '../components/MobileFirst';
import WhyChooseFacilityCore from '../components/WhyChooseFacilityCore';
import OurApproach from '../components/OurApproach';
import VisionMission from '../components/VisionMission';
import CoreValues from '../components/CoreValues';
import WhyChooseUs from '../components/WhyChooseUs';
import LookingAhead from '../components/LookingAhead';


import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Navbar />

      {/* Reusing existing HeroSection with About context */}
      <HeroSection
        backgroundImage="/solutionpageherosection.png"
        badge="ABOUT FACILITYCORE"
        title="Driving Smarter Facility Operations"
        description="Helping organizations streamline operations, automate workflows, and achieve operational excellence through intelligent technology."
        breadcrumbItems={[
          { label: "Home", link: "/" },
          { label: "About Us" }
        ]}
      />

      {/* Assembly of the new page sections */}
      <AboutIntro />

      <OurStory />

      <IndustryExperience />

      <MobileFirst />

      <WhyChooseFacilityCore />

      <OurApproach />

      <VisionMission />

      <CoreValues />

      <WhyChooseUs />

      <LookingAhead />

      <Footer />
    </div>
  );
};

export default AboutPage;