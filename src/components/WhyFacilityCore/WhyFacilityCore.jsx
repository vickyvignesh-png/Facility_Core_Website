import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import '../../styles/WhyFacilityCore.css';

const WhyFacilityCore = () => {
  const points = [
    { title: 'Asset Visibility', desc: 'Real-time dashboard tracking of asset location, lifecycle logs, and current operational states.' },
    { title: 'Maintenance Automation', desc: 'Usage-based and calendar triggers to schedule preventive maintenance automatically.' },
    { title: 'Work Order Management', desc: 'Dispatch work orders to field technicians with digital checklists, routing, and logs.' },
    { title: 'Compliance Tracking', desc: 'Audit-ready safety checks, local code certifications, and digital signature records.' },
    { title: 'Vendor Management', desc: 'Collaborate with external contractors, verify insurance status, and check SLA metrics.' }
  ];

  return (
    <section id="about-us" className="bg-white overflow-hidden py-12 flex items-center min-h-[650px] lg:h-[750px] max-h-[850px]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Professional Image with scroll reveal */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center h-full max-h-[500px] overflow-hidden rounded-2xl shadow-xl border border-gray-100"
          >
            <img 
              src="/about_facility_image.png" 
              alt="Facility Management Specialist" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Right: Key highlights checklist */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-left flex flex-col justify-center"
          >
            <span className="text-sm font-bold text-[#69BC45] uppercase tracking-wider mb-2">
              Why FacilityCore
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-6 leading-tight">
              Transforming Operations, Maximizing Lifecycles
            </h2>

            {/* Icon List Checklist */}
            <div className="flex flex-col gap-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="mt-1 shrink-0 text-[#1D4FA3]">
                    <FiCheckCircle className="w-5 h-5 font-bold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111827]">{point.title}</h3>
                    <p className="text-xs text-[#6B7280] font-medium mt-0.5 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyFacilityCore;
