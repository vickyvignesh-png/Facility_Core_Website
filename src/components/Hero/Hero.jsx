import React from 'react';
import { motion } from 'framer-motion';
// Icon imports removed as they are no longer used
import '../../styles/Hero.css';

const Hero = () => {
// Removed floatingCards as per design update; no extra card section needed

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden hero-bg-section">
      {/* Background Image with Cover */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('/FacilityHeroSection.png')` }}
      />
      
      {/* Dark Transparent Overlay mask */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 lg:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Entrance animations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 border border-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#69BC45] animate-pulse" />
            Next-Gen Enterprise CMMS & Facility Platform
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Transform Facility Operations With One <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Intelligent Platform</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-200 font-medium max-w-2xl mb-8 leading-relaxed">
            FacilityCore helps organizations streamline maintenance operations, automate workflows, manage assets, improve compliance, and gain complete operational visibility.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <motion.a 
              href="#demo"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4FA3] to-[#69BC45] text-white font-bold text-base shadow-lg hover:brightness-105 transition-all duration-200"
            >
              Book Demo
            </motion.a>
            <motion.a 
              href="#solutions"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-white/10 text-white font-bold text-base border border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
            >
              Explore Solutions
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
