import React from 'react';
import { motion } from 'framer-motion';
import { FiPhoneCall } from 'react-icons/fi';
import '../styles/DemoCTA.css';

const DemoCTA = () => {
  return (
    <section id="demo" className="cta-gradient-section py-24 text-white overflow-hidden">
      {/* Background blobs for premium depth */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-black/10 blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 relative z-10 flex flex-col items-center justify-center">
        <div className="max-w-3xl text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 border border-white/20">
            Interactive Live Demo
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            See FacilityCore in Action
          </h2>

          <p className="text-sm md:text-lg text-slate-100 font-medium mb-10 max-w-2xl leading-relaxed">
            Discover how FacilityCore helps organizations improve productivity, optimize maintenance operations, monitor asset performance, and enhance customer satisfaction through a unified facility management platform.
          </p>

          {/* Buttons Group */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <motion.a
              href="#request-demo"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cta-button-solid px-8 py-4 bg-white text-[#1D4FA3] font-bold text-base rounded-full shadow-lg"
            >
              Request Demo
            </motion.a>

            <motion.a
              href="#talk-expert"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cta-button-outline px-8 py-4 bg-transparent text-white font-bold text-base rounded-full flex items-center gap-2"
            >
              <FiPhoneCall />
              Talk to Expert
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoCTA;
