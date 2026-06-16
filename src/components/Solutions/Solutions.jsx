import React from 'react';
import { motion } from 'framer-motion';
import { FiPackage, FiCalendar, FiAlertCircle, FiHeadphones, FiUsers, FiShield, FiArrowRight } from 'react-icons/fi';
import '../../styles/Solutions.css';

const Solutions = () => {
  const suites = [
    {
      title: 'Asset Management',
      description: 'Track equipment locations, operational health, depreciation schedules, and maintenance history in one central register.',
      icon: <FiPackage className="w-6 h-6 text-[#1D4FA3]" />,
      color: 'from-[#1D4FA3]/10 to-[#1D4FA3]/5'
    },
    {
      title: 'Preventive Maintenance',
      description: 'Automate schedule routines, calendar recurring inspections, and receive alerts to prevent unplanned downtime.',
      icon: <FiCalendar className="w-6 h-6 text-[#69BC45]" />,
      color: 'from-[#69BC45]/10 to-[#69BC45]/5'
    },
    {
      title: 'Reactive Maintenance',
      description: 'Respond instantly to unexpected breakages. Log, assign, and track reactive repairs through dispatch routes.',
      icon: <FiAlertCircle className="w-6 h-6 text-rose-500" />,
      color: 'from-rose-500/10 to-rose-500/5'
    },
    {
      title: 'Helpdesk Portal',
      description: 'Provide tenants and occupants an easy portal to submit tickets, track live progress, and leave ratings.',
      icon: <FiHeadphones className="w-6 h-6 text-indigo-500" />,
      color: 'from-indigo-500/10 to-indigo-500/5'
    },
    {
      title: 'Vendor Management',
      description: 'Manage external contractors, verify compliance insurance documents, assign work, and log payments.',
      icon: <FiUsers className="w-6 h-6 text-amber-500" />,
      color: 'from-amber-500/10 to-amber-500/5'
    },
    {
      title: 'Compliance Logs',
      description: 'Verify local code safety inspections, fire safety compliance, and maintain records to simplify audits.',
      icon: <FiShield className="w-6 h-6 text-teal-500" />,
      color: 'from-teal-500/10 to-teal-500/5'
    }
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
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
    <section id="solutions" className="py-24 bg-[#F5F7FA] relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#1D4FA3]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#69BC45]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-[#1D4FA3] uppercase tracking-widest">
            Platform Modules
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight mt-3 mb-5">
            Complete Facility Suite
          </h2>
          <p className="text-base text-[#6B7280] font-medium leading-relaxed">
            Eliminate operational silos. Our modular software suite provides everything you need to run high-performance facility structures.
          </p>
        </div>

        {/* 6-Card Grid */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {suites.map((suite, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="solution-card p-8 flex flex-col justify-between"
            >
              <div>
                {/* Icon wrapper */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${suite.color} flex items-center justify-center mb-6 solution-icon-wrapper shadow-inner`}>
                  {suite.icon}
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">{suite.title}</h3>
                <p className="text-sm text-[#6B7280] font-medium leading-relaxed mb-6">{suite.description}</p>
              </div>

              <div>
                <a 
                  href={`#solutions-${index}`} 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1D4FA3] hover:text-[#69BC45] transition-all"
                >
                  Learn More 
                  <FiArrowRight className="w-4 h-4 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Solutions;
