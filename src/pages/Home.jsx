import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyFacilityCore from '../components/WhyFacilityCore';
import Solutions from '../components/Solutions';
import Industries from '../components/Industries';
import Features from '../components/Features';
import MobileApp from '../components/MobileApp';
import DemoCTA from '../components/DemoCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark flex flex-col font-sans overflow-x-hidden">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Section 1: Hero Banner */}
        <Hero />

        {/* Section 2: Why FacilityCore (About) */}
        <WhyFacilityCore />

        {/* Section 3: Solutions Suite */}
        <Solutions />

        {/* Section 4: Industries Verticals */}
        <Industries />

        {/* Section 5: Features Alternating Layout */}
        <Features />

        {/* Section 6: Mobile App Showcase */}
        <MobileApp />

      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default Home;
