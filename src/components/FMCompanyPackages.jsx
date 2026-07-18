import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiTag } from "react-icons/fi";
import { fmSaasPlans, fmModules } from "../data/pricingData";
import "../styles/FMCompanyPackages.css";

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

const headerVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

// ─── Pricing Card Component ───────────────────────────────────────────────────

const SaasPricingCard = ({ plan, index }) => {
  const navigate = useNavigate();
  const isCustomize = plan.buttonType === "contact";

  const handleButtonClick = () => {
    if (isCustomize) {
      navigate(plan.buttonLink);
      // Smooth scroll to ContactDetails section after navigation
      setTimeout(() => {
        const target = document.querySelector('.cd-section');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.open(plan.buttonLink, "_blank", "noopener noreferrer");
    }
  };

  // Build module list for this card
  const cardModules = fmModules.filter((mod) =>
    plan.moduleIds.includes(mod.id)
  );

  return (
    <motion.div
      className="fmsp-card"
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -8, boxShadow: "0 32px 64px rgba(15, 23, 42, 0.12)", transition: { duration: 0.3 } }}
    >
      {/* Plan Name */}
      <div className="fmsp-card-header">
        <h3 className="fmsp-plan-name">{plan.name}</h3>
        <p className="fmsp-plan-meta">
          <span>{plan.users}</span>
          <span className="fmsp-meta-dot">·</span>
          <span>{plan.platform}</span>
        </p>
      </div>

      {/* Price Display */}
      <div className="fmsp-price-block">
        {plan.originalPrice !== "Custom" ? (
          <>
            <span className="fmsp-original-price">{plan.originalPrice}</span>
            <span className="fmsp-discount-badge">{plan.discountPercent}</span>
            <div className="fmsp-discounted-row">
              <span className="fmsp-discounted-price">{plan.discountedPrice}</span>
              {plan.period && <span className="fmsp-price-period">{plan.period}</span>}
            </div>
          </>
        ) : (
          <>
            <div className="fmsp-custom-label">Enterprise Pricing</div>
            <div className="fmsp-discounted-row">
              <span className="fmsp-discounted-price fmsp-contact-price">{plan.discountedPrice}</span>
            </div>
          </>
        )}
      </div>

      {/* Divider */}
      <div className="fmsp-divider" />

      {/* Features List */}
      <ul className="fmsp-features-list">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="fmsp-feature-item">
            <span className="fmsp-check-icon">✓</span>
            <span className="fmsp-feature-text">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Modules Included */}
      <div className="fmsp-modules-section">
        <p className="fmsp-modules-label">Modules Included</p>
        <div className="fmsp-modules-grid">
          {cardModules.map((mod) => {
            const IconComponent = mod.icon;
            return (
              <div key={mod.id} className="fmsp-module-chip">
                <IconComponent className="fmsp-module-chip-icon" />
                <span className="fmsp-module-chip-name">{mod.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Button */}
      <div className="fmsp-card-action">
        <button
          className={`fmsp-btn ${isCustomize ? "fmsp-btn-outline" : "fmsp-btn-primary"}`}
          onClick={handleButtonClick}
        >
          {plan.buttonText}
        </button>
      </div>
    </motion.div>
  );
};

// ─── Products Included Grid ──

const ProductsIncluded = () => {
  return (
    <motion.div
      className="fmsp-products-section"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="fmsp-products-header">
        <h3 className="fmsp-products-title">Products Included</h3>
        <p className="fmsp-products-desc">
          All plans include access to our core suite of facility management modules.
          Higher plans unlock more advanced capabilities.
        </p>
      </div>

      <div className="fmsp-products-grid">
        {fmModules.map((mod, idx) => {
          const IconComponent = mod.icon;
          return (
            <motion.div
              key={mod.id}
              className="fmsp-product-card"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.4, delay: idx * 0.04 } }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <div className="fmsp-product-icon-wrap">
                <IconComponent className="fmsp-product-icon" />
              </div>
              <span className="fmsp-product-name">{mod.name}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const FMCompanyPackages = () => {
  return (
    <section className="fmsp-section" id="fm-companies">
      <div className="fmsp-container">

        {/* Section Header */}
        <motion.div
          className="fmsp-section-header"
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="fmsp-badge">
            <FiTag className="fmsp-badge-icon" />
            PRICING PLANS
          </span>
          <h2 className="fmsp-heading">Choose the Perfect Plan</h2>
          <p className="fmsp-description">
            Flexible pricing plans designed for businesses of every size.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="fmsp-cards-grid">
          {fmSaasPlans.map((plan, idx) => (
            <SaasPricingCard key={plan.id || idx} plan={plan} index={idx} />
          ))}
        </div>

        {/* Products Included */}
        <ProductsIncluded />

      </div>
    </section>
  );
};

export default React.memo(FMCompanyPackages);

