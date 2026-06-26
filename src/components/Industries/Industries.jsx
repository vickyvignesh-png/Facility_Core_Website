import React from 'react';
import { motion } from 'framer-motion';
import { FiGrid } from 'react-icons/fi';
import '../../styles/Industries.css';

const Industries = () => {
  const industries = [
    { title: 'Commercial', image: '/commercialimg.png', description: 'Office towers, corporate headquarters & business parks' },
    { title: 'Smart Cities', image: '/smartcitiesimg.png', description: 'Municipal properties, traffic management & smart grids' },
    { title: 'Hospital', image: '/hospitalimg.png', description: 'Hospitals, biotech labs & medical diagnostic spaces' },
    { title: 'School', image: '/schoolimg.png', description: 'K‑12 schools, university campuses & academic structures' },
    { title: 'Apartment', image: '/appartemntimg.png', description: 'Multi‑family apartments, HOAs & condominium communities' },
    { title: 'Industry', image: '/industryimg.png', description: 'Assembly lines, production plants & logistics centers' },
    { title: 'IT Campuses', image: '/itcampusesimg.png', description: 'Tech campuses, data centers & innovation hubs' },
    { title: 'Shopping Mall', image: '/shoppingmallimg.png', description: 'Retail malls, entertainment complexes & mixed‑use spaces' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="industries" className="py-10 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="platform-label"><FiGrid className="w-5 h-5" /> Vertical Solutions</span>
          <h2 className="industries-heading">Built for Diverse Industries</h2>
          <p className="industries-paragraph">
            Every industry has unique assets and compliance checklists. FacilityCore offers tailored fields, inspection checklists, and workflow logic matching your sector.
          </p>
        </div>

        {/* Grid of industry cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="industries-grid"
        >
          {industries.map((ind, idx) => (
            <motion.div key={idx} variants={cardVariants} className="industry-card">
              <img src={ind.image} alt={ind.title} className="industry-image" />
              <div className="industry-overlay">
                <h3 className="industry-title">{ind.title}</h3>
                <p className="industry-description">{ind.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
