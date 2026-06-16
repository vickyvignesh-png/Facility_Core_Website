import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiSiemens, 
  SiCisco, 
  SiSchneiderelectric, 
  SiSalesforce, 
  SiIntel, 
  SiTesla, 
  SiFord 
} from 'react-icons/si';
import { FaGoogle } from 'react-icons/fa';
import '../../styles/Clients.css';

const Clients = () => {
  const logos = [
    { name: 'Siemens Smart', icon: <SiSiemens className="w-8 h-8" /> },
    { name: 'Cisco Connect', icon: <SiCisco className="w-8 h-8" /> },
    { name: 'Schneider Electric', icon: <SiSchneiderelectric className="w-8 h-8" /> },
    { name: 'Salesforce CRM', icon: <SiSalesforce className="w-8 h-8" /> },
    { name: 'Google Cloud', icon: <FaGoogle className="w-8 h-8" /> },
    { name: 'Intel Labs', icon: <SiIntel className="w-8 h-8" /> },
    { name: 'Tesla Energy', icon: <SiTesla className="w-8 h-8" /> },
    { name: 'Ford Operations', icon: <SiFord className="w-8 h-8" /> }
  ];

  // Duplicate the list for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-brand-bg select-none">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">
            Trusted Across Global Industries
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="clients-carousel-wrapper py-6">
          <div className="clients-scroll-container flex items-center gap-16 md:gap-24">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 text-slate-400 hover:text-brand-blue/80 transition-colors duration-300"
              >
                <div className="opacity-70 hover:opacity-100 transition-opacity">
                  {logo.icon}
                </div>
                <span className="text-sm font-semibold tracking-wide uppercase">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
