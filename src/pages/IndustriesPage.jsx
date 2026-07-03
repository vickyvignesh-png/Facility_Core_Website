import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiMonitor,
  FiCpu,
  FiSettings,
  FiTruck,
  FiActivity,
  FiBookOpen,
  FiCoffee,
  FiShoppingBag,
  FiNavigation,
  FiGlobe,
  FiGrid,
  FiServer,
  FiMap,
  FiBriefcase,
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
  FiPercent,
  FiClock,
  FiTrendingDown,
  FiAward,
  FiAlertTriangle
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/IndustriesPage.css";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const IndustriesPage = () => {
  // Testimonial Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "FacilityCore transformed our hospital compliance operations. We went from manual logs to audit-ready digital checklists within weeks. The interface is intuitive, and our SLA compliance rose to 98%.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
      name: "Dr. Sarah Jenkins",
      designation: "Chief Operations Officer",
      industry: "Healthcare Operations"
    },
    {
      quote: "Managing critical power systems across multiple data centers requires absolute precision. FacilityCore gives us real-time SLA tracking and instant incident dispatch, helping us keep our promise of 99.999% uptime.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      name: "Marcus Vance",
      designation: "VP of Infrastructure",
      industry: "Data Centers"
    },
    {
      quote: "With over 4 million square feet of logistics space, tracking maintenance issues was chaotic. FacilityCore unified our workflow, slashed downtime by 35%, and gave our facility managers a single pane of glass.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
      name: "David Chen",
      designation: "Director of Facilities",
      industry: "Warehouses & Logistics"
    }
  ];

  // Auto-slide Testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const industriesGrid = [
    { icon: <FiHome />, name: "Commercial Real Estate", desc: "Maximize tenant satisfaction and property value with smart operations." },
    { icon: <FiBriefcase />, name: "Corporate Offices & IT Campuses", desc: "Optimize desk sharing, meeting spaces, and workspace workflows." },
    { icon: <FiHome />, name: "Residential Communities", desc: "Streamline association requests, amenity bookings, and security." },
    { icon: <FiSettings />, name: "Manufacturing & Factories", desc: "Automate machine checkups and prevent critical assembly shutdowns." },
    { icon: <FiTruck />, name: "Warehouses & Logistics", desc: "Keep distribution hubs, loading docks, and sorting lines moving." },
    { icon: <FiActivity />, name: "Healthcare", desc: "Maintain medical-grade compliance and strict environmental standards." },
    { icon: <FiBookOpen />, name: "Education", desc: "Provide safe, comfortable campuses and manage inventory seamlessly." },
    { icon: <FiCoffee />, name: "Hospitality & Hotels", desc: "Deliver 5-star service with rapid guest request dispatch systems." },
    { icon: <FiShoppingBag />, name: "Retail & Shopping Malls", desc: "Manage foot traffic safety, HVAC parameters, and vendor audits." },
    { icon: <FiNavigation />, name: "Airports & Transportation", desc: "Handle high-throughput baggage lines, security checkpoints, and terminals." },
    { icon: <FiGlobe />, name: "Utilities & Infrastructure", desc: "Monitor water, power grid structures, and public assets efficiently." },
    { icon: <FiMap />, name: "Government & Public Sector", desc: "Provide high reliability and stay audit-ready with public compliance." },
    { icon: <FiServer />, name: "Data Centers & Critical Facilities", desc: "Eliminate downtime with automated failover testing and routine tracking." },
    { icon: <FiCpu />, name: "Smart Cities", desc: "Link public asset maps with automated service order assignments." },
    { icon: <FiGrid />, name: "Industrial Facilities", desc: "Integrate specialized heavy equipment sensors with auto-work orders." }
  ];

  const marqueeItems = [
    { icon: <FiActivity />, name: "Healthcare" },
    { icon: <FiSettings />, name: "Manufacturing" },
    { icon: <FiHome />, name: "Commercial" },
    { icon: <FiShoppingBag />, name: "Retail" },
    { icon: <FiBookOpen />, name: "Education" },
    { icon: <FiCoffee />, name: "Hospitality" },
    { icon: <FiMap />, name: "Government" },
    { icon: <FiCpu />, name: "Smart Cities" },
    { icon: <FiTruck />, name: "Warehousing" },
    { icon: <FiBriefcase />, name: "Corporate" }
  ];

  const detailedIndustries = [
    {
      name: "Healthcare Facilities",
      overview: "Hospitals and healthcare clinics operate 24/7/365. Uptime, compliance, and hygiene are matters of patient safety.",
      challenges: [
        "Strict infection control requirements",
        "Rigorous regulatory compliance audits",
        "High energy consumption and cooling needs",
        "Critical backup power reliability"
      ],
      solution: "FacilityCore automates sanitation checklists, provides instant notifications for air pressure alarms, and records audit trails to ensure compliance with medical standards.",
      benefits: [
        "100% Audit Readiness",
        "Automated Compliance Logs",
        "Zero Critical Asset Downtime",
        "HVAC Condition-based Alerts"
      ],
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
    },
    {
      name: "Manufacturing Plants",
      overview: "Factory lines rely on predictive maintenance. A single machine failure can trigger massive assembly downtime costs.",
      challenges: [
        "Unplanned assembly line breakdowns",
        "High asset wear-and-tear",
        "Complex worker safety protocols",
        "Vendor supply-chain delays"
      ],
      solution: "Integrate vibration, temperature, and usage sensors into FacilityCore. Generate preventive tickets automatically when normal operating bounds are exceeded.",
      benefits: [
        "35% Reduction in Equipment Failures",
        "Lower Total Cost of Ownership",
        "Auto-assigned Preventive Tasks",
        "Integrated Spare Parts Inventory"
      ],
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
    },
    {
      name: "Commercial & Corporate Offices",
      overview: "Modern office towers demand exceptional workspaces. FacilityCore ensures modern, highly efficient corporate environments.",
      challenges: [
        "Inefficient HVAC/Lighting schedules",
        "Manual hot-desk maintenance logs",
        "Delayed tenant request resolutions",
        "Poor energy utilization insights"
      ],
      solution: "Our portal connects desk booking systems to occupancy sensors. Automate service dispatches, streamline cleanups, and scale back HVAC when office zones are empty.",
      benefits: [
        "40% Faster Response to Tenant Requests",
        "Optimize Desk Cleanups",
        "20% Utility Cost Reductions",
        "Live Operational Status Panel"
      ],
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
    },
    {
      name: "Data Centers & Critical Infrastructure",
      overview: "Uninterrupted power, precise air filtration, and tight security are crucial to keeping data operations running.",
      challenges: [
        "Strict cooling systems maintenance",
        "Automating backup diesel test audits",
        "Rapid fire hazard mitigation dispatch",
        "Rigorous access permission checks"
      ],
      solution: "FacilityCore schedules failover tests, validates key vendor credentials, and routes cooling systems alarms directly to technicians within seconds.",
      benefits: [
        "100% Uptime for Critical Equipment",
        "Precise HVAC Health Checks",
        "Secured Site Check-in Logs",
        "Instant Outage Ticket Generation"
      ],
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200"
    },
    {
      name: "Warehouses & Logistics Hubs",
      overview: "Massive scale demands streamlined automation. Keep loading docks, sorting lanes, and inventory zones functional.",
      challenges: [
        "High-frequency facility wear",
        "Sprawling geographic footprints",
        "Complex dock door dispatch schedules",
        "Frequent fire inspection regulations"
      ],
      solution: "Empower facility managers with mobile building audits. Log broken docks, assign path inspections, and review fire safety logs on-the-go.",
      benefits: [
        "25% Faster Loading Dock Fixes",
        "Mobile Asset Mapping",
        "Routine Safety Audit Logs",
        "Automated SLA Alert System"
      ],
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
    },
    {
      name: "Education & Campus Operations",
      overview: "Educational systems must manage student centers, dorm halls, laboratories, and lecture auditoriums under tight budgets.",
      challenges: [
        "Managing distributed campus layouts",
        "Fluctuating seasonal space utility",
        "Aged central central utility structures",
        "Manual lab equipment verification"
      ],
      solution: "Organize campus requests inside a central helpdesk. Track maintenance workflows, optimize seasonal setups, and keep lecture spaces ready.",
      benefits: [
        "Streamlined Campus Assistance",
        "Optimized Utility Management",
        "Reduced Maintenance Backlog",
        "Better Asset Allocation Control"
      ],
      img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="industries-page">
      <Navbar />

      {/* SECTION 1 — HERO BANNER */}
      <section className="ind-hero">
        <div className="ind-hero-bg" />
        <div className="ind-hero-overlay" />
        <div className="ind-hero-container">
          <motion.div
            className="ind-hero-content"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <nav className="ind-breadcrumb">
              <Link to="/">Home</Link> / <span>Industries</span>
            </nav>
            <span className="ind-badge">
              <FiHome /> INDUSTRIES WE SERVE
            </span>
            <h1 className="ind-hero-title">
              Industry-Specific Facility Management Solutions
            </h1>
            <p className="ind-hero-desc">
              FacilityCore adapts to the unique operational requirements of every industry, helping organizations improve efficiency, reduce costs, and deliver exceptional experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — INDUSTRIES GRID */}
      <section className="ind-grid-section" id="explore-grid">
        <div className="ind-section-header">
          <span className="ind-section-badge">
            <FiGrid /> COMPREHENSIVE SUITE
          </span>
          <h2 className="section-title">Built For Every Industry</h2>
          <p className="section-subtitle">
            Purpose-built facility solutions for diverse operational environments.
          </p>
        </div>

        <div className="ind-grid">
          {industriesGrid.map((ind, i) => (
            <motion.div
              key={i}
              className="ind-grid-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="ind-grid-circle">
                {ind.icon}
              </div>
              <h3 className="ind-grid-name">{ind.name}</h3>
              <p className="ind-grid-desc">{ind.desc}</p>
              <a href="#detailed-scroller" className="ind-grid-cta">
                Learn More <FiArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — INDUSTRY DETAILS (STICKY SCROLL) */}
      <section className="ind-scroller-section" id="detailed-scroller">
        <div className="ind-section-header">
          <span className="ind-section-badge">
            <FiServer /> DEEP DIVE
          </span>
          <h2 className="section-title">Operational Excellence Redefined</h2>
          <p className="section-subtitle">
            See how FacilityCore solves unique challenges across key sectors.
          </p>
        </div>

        <div className="ind-scroller-container">
          {detailedIndustries.map((ind, i) => (
            <div className="ind-scroll-wrapper" key={i}>
              <div
                className={`ind-scroll-card ${i % 2 === 0 ? "layout-left" : "layout-right"
                  }`}
              >
                <div className="ind-scroll-left">
                  <span className="ind-scroll-badge">SECTOR OVERVIEW</span>
                  <h3 className="ind-scroll-title">{ind.name}</h3>
                  <p className="ind-scroll-desc">{ind.overview}</p>

                  <div className="ind-scroll-split">
                    <div className="ind-scroll-challenges">
                      <h4>Challenges We Solve</h4>
                      <ul>
                        {ind.challenges.map((c, idx) => (
                          <li key={idx}>
                            <span className="bullet-x">✕</span> {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="ind-scroll-helps">
                      <h4>How FacilityCore Helps</h4>
                      <p>{ind.solution}</p>
                    </div>
                  </div>

                  <div className="ind-scroll-benefits">
                    <h4>Key Benefits</h4>
                    <div className="ind-benefits-pills">
                      {ind.benefits.map((b, idx) => (
                        <span key={idx} className="ind-benefit-pill">
                          ✓ {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/demo" className="btn btn-primary ind-card-cta">
                    Request Sector Demo
                  </Link>
                </div>

                <div className="ind-scroll-right">
                  <img
                    src={ind.img}
                    alt={ind.name}
                    className="ind-scroll-img"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — INDUSTRIES WE EMPOWER (INFINITE MARQUEE) */}
      <section className="ind-marquee-section">
        <div className="ind-marquee-header">
          <h2 className="marquee-title">Industries We Empower</h2>
        </div>
        <div className="ind-marquee-track">
          <div className="ind-marquee-content">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <div className="ind-marquee-card" key={idx}>
                <div className="ind-marquee-icon">{item.icon}</div>
                <span className="ind-marquee-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — KEY BENEFITS */}
      <section className="ind-benefits-section">
        <div className="ind-benefits-bg" />
        <div className="ind-benefits-overlay" />
        <div className="ind-benefits-container">
          <div className="ind-section-header light">
            <h2 className="section-title">Driving Measurable Facility Excellence</h2>
            <p className="section-subtitle">
              Quantifiable ROI and performance metrics achieved by enterprise operators globally.
            </p>
          </div>

          <div className="ind-stats-grid">
            {[
              { val: "30%", icon: <FiTrendingDown />, label: "Reduction in Downtime" },
              { val: "40%", icon: <FiClock />, label: "Faster Response Times" },
              { val: "25%", icon: <FiPercent />, label: "Lower Maintenance Costs" },
              { val: "95%", icon: <FiAward />, label: "SLA Compliance Rate" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="ind-stat-card"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="ind-stat-icon">{stat.icon}</div>
                <div className="ind-stat-value">{stat.val}</div>
                <div className="ind-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — TESTIMONIALS */}
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
                  className={`ind-nav-dot ${idx === activeTestimonial ? "active" : ""
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

      <Footer />
    </div>
  );
};

export default IndustriesPage;
