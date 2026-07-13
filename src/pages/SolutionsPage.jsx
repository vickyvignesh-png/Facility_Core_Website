import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import PlatformModules from "../components/PlatformModules";
import DetailedModules from "../components/DetailedModules";
import WorkflowSection from "../components/WorkflowSection";
import "../styles/SolutionsPage.css";

const SolutionsPage = () => {
  return (
    <div className="solutions-page">
      <Navbar />
      <HeroSection
        backgroundImage="/solutionpageherosection.png"
        badge="SMART SOLUTIONS"
        title="Smart Solutions For Every Facility"
        description="Stay audit-ready with automated compliance tracking."
        breadcrumbItems={[
          { label: "Home", link: "/" },
          { label: "Solutions" }
        ]}
      />
      <PlatformModules />
      <DetailedModules />
      <WorkflowSection />
      <Footer />
    </div>
  );
};

export default SolutionsPage;
