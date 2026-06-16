import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMap, FiHeart, FiBookOpen, FiHome, FiSettings } from 'react-icons/fi';
import '../../styles/Industries.css';

const Industries = () => {
  const industries = [
    { name: 'Commercial', desc: 'Office towers, corporate headquarters & business parks', icon: <FiBriefcase className="w-6 h-6" /> },
    { name: 'Smart Cities', desc: 'Municipal properties, traffic management & smart grids', icon: <FiMap className="w-6 h-6" /> },
    { name: 'Healthcare', desc: 'Hospitals, biotech labs & medical diagnostic spaces', icon: <FiHeart className="w-6 h-6" /> },
    { name: 'Education', desc: 'K-12 schools, university campuses & academic structures', icon: <FiBookOpen className="w-6 h-6" /> },
    { name: 'Residential', desc: 'Multi-family apartments, HOAs & condominium communities', icon: <FiHome className="w-6 h-6" /> },
    { name: 'Manufacturing', desc: 'Assembly lines, production plants & logistics centers', icon: <FiSettings className="w-6 h-6" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section id="industries" className="py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-left mb-16 max-w-2xl">
          <span className="text-sm font-bold text-[#69BC45] uppercase tracking-wider">
            Vertical Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mt-3 mb-4">
            Built for Diverse Industries
          </h2>
          <p className="text-base text-[#6B7280] font-medium leading-relaxed">
            Every industry has unique assets and compliance checklists. FacilityCore offers tailored fields, inspection checklists, and workflow logic matching your sector.
          </p>
        </div>

        {/* 3-Column Modern Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="industry-card p-8 rounded-2xl flex flex-col items-start gap-5 cursor-pointer shadow-sm"
            >
              {/* Icon Circle */}
              <div className="industry-icon-wrapper w-14 h-14 rounded-2xl bg-[#1D4FA3]/5 text-[#1D4FA3] flex items-center justify-center shadow-inner">
                {ind.icon}
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-[#111827] mb-2">{ind.name}</h3>
                <p className="text-sm text-[#6B7280] font-medium leading-relaxed">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Industries;
