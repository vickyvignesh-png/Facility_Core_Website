import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import "../styles/HeroSection.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSection = ({
  title = "Smart Solutions For Every Facility",
  description = "Stay audit-ready with automated compliance tracking.",
  badge = "FACILITYCORE SOLUTIONS",
  breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Solutions" }
  ],
  backgroundImage = "/solutionpageherosection.png",
  overlay = "linear-gradient(90deg, rgba(8, 20, 43, 0.85), rgba(8, 20, 43, 0.55))",
  height = "450px",
  alignment = "center",
  className = "",
  titleClassName = ""
}) => {
  const alignClass = alignment === "left" ? "text-left items-start" : "text-center items-center text-center";

  return (
    <section className={`hero-section !items-start ${className}`} style={{ height }}>
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div
        className="hero-overlay"
        style={{ background: overlay }}
      />
      <motion.div
        className={`hero-content [section_&]:!pt-[120px] md:[section_&]:!pt-[140px] ${alignClass}`}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <nav className="breadcrumb">
            {breadcrumbItems.map((item, idx) => {
              const isLast = idx === breadcrumbItems.length - 1;
              return (
                <React.Fragment key={idx}>
                  {item.link ? (
                    <Link to={item.link}>{item.label}</Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {!isLast && " / "}
                </React.Fragment>
              );
            })}
          </nav>
        )}

        {badge && (
          <span className="badge">
            <FiHome /> {badge}
          </span>
        )}

        <h1 className={`hero-title ${titleClassName}`}>
          {title}
        </h1>

        <p className="hero-desc">
          {description}
        </p>
      </motion.div>
    </section>
  );
};

export default React.memo(HeroSection);
