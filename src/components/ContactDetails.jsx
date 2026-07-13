import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiClock, FiMapPin, FiSend } from "react-icons/fi";
import "../styles/ContactDetails.css";

/* ── animation variants ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ── contact info data ───────────────────────────────────── */
const contactBlocks = [
  {
    icon: <FiPhone />,
    title: "Phone Number",
    lines: ["+91 XXXXX XXXXX"],
  },
  {
    icon: <FiMail />,
    title: "Email Address",
    lines: ["info@facilitycore.com", "support@facilitycore.com"],
  },
  {
    icon: <FiMapPin />,
    title: "Office Address",
    lines: ["FacilityCore", "Chennai, Tamil Nadu", "India"],
  },
  {
    icon: <FiClock />,
    title: "Working Hours",
    lines: ["Monday – Friday", "09:00 AM – 06:00 PM"],
  },
];

/* ── component ───────────────────────────────────────────── */
const ContactDetails = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  /* ── helpers ─────────────────────────────────────────── */
  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    setForm((prev) => ({ ...prev, fullName: value }));
    if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: "" }));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    setForm((prev) => ({ ...prev, phone: value }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  /* validation  */
  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) {
      newErrors.fullName = "Please enter your name.";
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim() || form.phone.length !== 10) {
      newErrors.phone = "Phone number must contain exactly 10 digits.";
    }
    if (!form.message.trim() || form.message.trim().length < 20) {
      newErrors.message = "Message should contain at least 20 characters.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  /* render  */
  return (
    <section className="cd-section">
      <div className="cd-container">

        {/* ── Section Header ── */}
        <motion.div
          className="cd-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="cd-badge">
            <FiMail className="cd-badge-icon" />
            CONTACT US
          </span>
          <h2 className="cd-heading">Let's Start a Conversation</h2>
          <p className="cd-description">
            Have questions about FacilityCore or want a personalized demo? Our
            team is ready to help you find the right facility management solution.
          </p>
        </motion.div>

        {/* ── Two-Column Grid ── */}
        <div className="cd-grid">

          {/* ── LEFT: Contact Info Card ── */}
          <motion.div
            className="cd-info-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
          >
            <h3 className="cd-info-title">Contact Information</h3>
            <p className="cd-info-subtitle">
              Reach out through any of the channels below and our team will
              respond within one business day.
            </p>

            <div className="cd-blocks">
              {contactBlocks.map((block, i) => (
                <div className="cd-block" key={i}>
                  <div className="cd-block-icon">{block.icon}</div>
                  <div className="cd-block-text">
                    <h4 className="cd-block-title">{block.title}</h4>
                    {block.lines.map((line, j) => (
                      <p className="cd-block-value" key={j}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Contact Form Card ── */}
          <motion.div
            className="cd-form-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
          >
            <h3 className="cd-form-title">Send Us a Message</h3>
            <p className="cd-form-subtitle">
              Fill in the form and one of our specialists will get back to you
              shortly.
            </p>

            {submitted ? (
              <div className="cd-success">
                <FiSend className="cd-success-icon" />
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. We'll get back to you within one business day.</p>
              </div>
            ) : (
              <form className="cd-form" onSubmit={handleSubmit} noValidate>

                {/* Row 1: Full Name + Email */}
                <div className="cd-form-row">
                  <div className="cd-form-group">
                    <label htmlFor="cd-fullName" className="cd-label">
                      Full Name <span className="cd-required">*</span>
                    </label>
                    <input
                      id="cd-fullName"
                      type="text"
                      className={`cd-input${errors.fullName ? " cd-input-error" : ""}`}
                      placeholder="John David"
                      value={form.fullName}
                      onChange={handleNameChange}
                      autoComplete="name"
                    />
                    {errors.fullName && (
                      <span className="cd-error">{errors.fullName}</span>
                    )}
                  </div>

                  <div className="cd-form-group">
                    <label htmlFor="cd-email" className="cd-label">
                      Email Address <span className="cd-required">*</span>
                    </label>
                    <input
                      id="cd-email"
                      type="email"
                      className={`cd-input${errors.email ? " cd-input-error" : ""}`}
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange("email")}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <span className="cd-error">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone + Company */}
                <div className="cd-form-row">
                  <div className="cd-form-group">
                    <label htmlFor="cd-phone" className="cd-label">
                      Phone Number <span className="cd-required">*</span>
                    </label>
                    <input
                      id="cd-phone"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      className={`cd-input${errors.phone ? " cd-input-error" : ""}`}
                      placeholder="10-digit number"
                      value={form.phone}
                      onChange={handlePhoneChange}
                      autoComplete="tel"
                    />
                    {errors.phone && (
                      <span className="cd-error">{errors.phone}</span>
                    )}
                  </div>

                  <div className="cd-form-group">
                    <label htmlFor="cd-company" className="cd-label">
                      Company Name
                    </label>
                    <input
                      id="cd-company"
                      type="text"
                      className="cd-input"
                      placeholder="Your Company Ltd."
                      value={form.company}
                      onChange={handleChange("company")}
                      autoComplete="organization"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="cd-form-group">
                  <label htmlFor="cd-subject" className="cd-label">
                    Subject
                  </label>
                  <input
                    id="cd-subject"
                    type="text"
                    className="cd-input"
                    placeholder="How can we help you?"
                    value={form.subject}
                    onChange={handleChange("subject")}
                  />
                </div>

                {/* Message */}
                <div className="cd-form-group">
                  <label htmlFor="cd-message" className="cd-label">
                    Message <span className="cd-required">*</span>
                  </label>
                  <textarea
                    id="cd-message"
                    className={`cd-textarea${errors.message ? " cd-input-error" : ""}`}
                    placeholder="Tell us about your requirements (min. 20 characters)…"
                    value={form.message}
                    onChange={handleChange("message")}
                  />
                  {errors.message && (
                    <span className="cd-error">{errors.message}</span>
                  )}
                </div>

                {/* Submit */}
                <button type="submit" className="cd-submit-btn">
                  <FiSend className="cd-submit-icon" />
                  Send Message
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactDetails;