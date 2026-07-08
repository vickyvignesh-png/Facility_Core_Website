import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAward, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { testimonials } from "../data/industriesData";
import "../styles/IndustryTestimonials.css";

const IndustryTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="ind-testimonials-section">
      <div className="ind-section-header">
        <span className="ind-section-badge">
          <FiAward /> PROVEN RESULTS
        </span>
        <h2 className="section-title">What Industry Leaders Say</h2>
        <p className="section-subtitle">
          See how facility executives coordinate workflows and achieve maximum system reliability.
        </p>
      </div>

      <div className="ind-testimonial-slider-container">
        <div className="ind-testimonial-window">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="ind-testimonial-slide"
            >
              <p className="ind-testimonial-quote">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div className="ind-testimonial-profile">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="ind-testimonial-avatar"
                />
                <div className="ind-testimonial-meta">
                  <h4 className="ind-testimonial-name">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="ind-testimonial-desc">
                    {testimonials[activeTestimonial].name} •{" "}
                    <span className="text-highlight">
                      {testimonials[activeTestimonial].industry}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="ind-slider-nav">
          <button
            onClick={() =>
              setActiveTestimonial(
                (prev) => (prev - 1 + testimonials.length) % testimonials.length
              )
            }
            className="ind-nav-btn"
          >
            <FiChevronLeft />
          </button>
          <div className="ind-nav-dots">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`ind-nav-dot ${
                  idx === activeTestimonial ? "active" : ""
                }`}
              />
            ))}
          </div>
          <button
            onClick={() =>
              setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
            }
            className="ind-nav-btn"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(IndustryTestimonials);
