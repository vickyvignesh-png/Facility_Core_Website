import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import IndustriesGrid from "../components/IndustriesGrid";
import IndustryScroller from "../components/IndustryScroller";
import IndustriesMarquee from "../components/IndustriesMarquee";
import IndustryBenefits from "../components/IndustryBenefits";
import IndustryTestimonials from "../components/IndustryTestimonials";
import "../styles/IndustriesPage.css";

const IndustriesPage = () => {
  return (
    <div className="industries-page">
      <Navbar />

      <HeroSection
        title="Industry-Specific Facility Management Solutions"
        description="FacilityCore adapts to the unique operational requirements of every industry, helping organizations improve efficiency, reduce costs, and deliver exceptional experiences."
        badge={
          <>
            <FiHome /> INDUSTRIES WE SERVE
          </>
        }
        breadcrumb={
          <nav className="breadcrumb">
            <Link to="/">Home</Link> / <span>Industries</span>
          </nav>
        }
        backgroundImage="/solutionpageherosection.png"
        className="ind-hero"
        titleClassName="ind-hero-title"
      />

      <IndustriesGrid />

      <IndustryScroller />

      <IndustriesMarquee />

      <IndustryBenefits />

      <IndustryTestimonials />

      <Footer />
    </div>
  );
};

export default IndustriesPage;
