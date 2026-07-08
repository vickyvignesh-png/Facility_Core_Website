import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import { FiGrid } from "react-icons/fi";

const heroSlides = [
  {
    image: "/FacilityHeroSection.png",
    badge: "Enterprise CMMS Platform",
    title: "Transform Facility Operations With One",
    highlight: "Intelligent Platform",
    description:
      "FacilityCore helps organizations streamline maintenance operations, automate workflows, manage assets, improve compliance, and gain complete operational visibility."
  },
  {
    image: "/homepageherosection2img.png",
    badge: "Healthcare Management Platform",
    title: "Optimize Hospital Infrastructure With",
    highlight: "Intelligent Facility Solutions",
    description:
      "FacilityCore helps healthcare organizations streamline maintenance operations, manage critical assets, improve compliance, automate workflows, and enhance operational visibility."
  },
  {
    image: "/homepageherosection3img.png",
    badge: "Residential Facility Platform",
    title: "Enhance Residential Operations Through",
    highlight: "Connected Facility Platform",
    description:
      "FacilityCore helps residential communities streamline maintenance operations, manage shared assets, improve resident services, automate workflows, and increase operational visibility."
  }
];

// Responsive spacing configurations (offsets for navbar height and vertical gap balances) are managed in Hero.css
const Hero = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-bg-section">

      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`hero-bg-image ${index === currentSlide ? "active" : ""
            }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="hero-overlay"></div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="hero-wrapper">

          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >

            <div className="hero-badge">
              <FiGrid />
              {heroSlides[currentSlide].badge}
            </div>

            <h1 className="hero-title">
              {heroSlides[currentSlide].title}
              <span className="hero-highlight">
                {heroSlides[currentSlide].highlight}
              </span>
            </h1>

            <p className="hero-description">
              {heroSlides[currentSlide].description}
            </p>

            <div className="hero-buttons">
              <a href="#demo" className="hero-btn-primary">
                Book Demo
              </a>

              <a href="#solutions" className="hero-btn-secondary">
                Explore Solutions
              </a>
            </div>

            {/* Dots */}
            <div className="hero-dots">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={`hero-dot ${currentSlide === index ? "active" : ""
                    }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;