import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import '../../styles/Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'VP of Property Operations',
      company: 'Crestview Properties',
      quote: 'FacilityCore transformed our portfolio operations. We saw a 35% reduction in work order cycle times and saved over $120k in emergency repairs in the first year alone. The mobile app is exceptionally popular with our technicians.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120'
    },
    {
      name: 'Marcus Vance',
      role: 'Director of Facilities',
      company: 'St. Jude Healthcare',
      quote: 'In healthcare, compliance and safety audit preparedness are non-negotiable. FacilityCore automates our routine checks and keeps our maintenance logs completely audit-ready. I highly recommend it for compliance-focused teams.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120'
    },
    {
      name: 'David Chen',
      role: 'Smart Infrastructure Lead',
      company: 'Metro Transit Authority',
      quote: 'We integrated FacilityCore with our BMS temperature and pressure sensors. Now, high reading levels trigger work orders automatically before failures happen. It is truly predictive maintenance made simple.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-brand-bg relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-brand-blue uppercase tracking-widest">Client Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark tracking-tight mt-2.5 mb-5">
            Loved by Facility Leaders
          </h2>
          <p className="text-base text-brand-light font-medium leading-relaxed">
            Read how organizations around the globe leverage FacilityCore to streamline maintenance, reduce overhead, and audit operations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="testimonial-card bg-white p-8 rounded-3xl shadow-premium hover:shadow-premium-hover flex flex-col justify-between"
            >
              {/* Rating & Review */}
              <div>
                <div className="flex items-center gap-1 mb-5 text-amber-500">
                  {[...Array(rev.rating)].map((_, sIdx) => (
                    <FaStar key={sIdx} className="w-4.5 h-4.5" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-brand-dark font-medium italic leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                <img 
                  src={rev.avatar} 
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-green/20"
                />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-brand-dark leading-tight">{rev.name}</h4>
                  <p className="text-[11px] text-brand-light font-semibold">{rev.role}</p>
                  <span className="text-[10px] text-brand-blue font-extrabold uppercase tracking-wider block mt-0.5">
                    {rev.company}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
