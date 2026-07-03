import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FiHome,
    FiMapPin,
    FiPhone,
    FiMail,
    FiClock,
    FiHeadphones,
    FiUsers,
    FiTarget,
    FiZap
} from 'react-icons/fi';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/ContactPage.css';

const benefits = [
    {
        icon: <FiHeadphones />,
        title: 'Expert Consultation',
        desc: 'Get guidance from facility management specialists.'
    },
    {
        icon: <FiUsers />,
        title: 'Personalized Demo',
        desc: 'Discover how FacilityCore fits your organization.'
    },
    {
        icon: <FiTarget />,
        title: 'Industry Guidance',
        desc: 'Receive recommendations tailored to your industry.'
    },
    {
        icon: <FiZap />,
        title: 'Dedicated Support',
        desc: 'Our support team is ready to assist you anytime.'
    }
];

const ContactPage = () => {
    return (
        <div className="contact-page">

            <Navbar />

            {/* Hero Section */}
            <section className="contact-hero">

                <div className="contact-hero-overlay"></div>

                <div className="contact-hero-content">

                    <nav className="contact-breadcrumb">
                        <Link to="/">Home</Link> / <span>Contact</span>
                    </nav>

                    <span className="contact-badge">
                        <FiHome />
                        CONTACT US
                    </span>

                    <h1 className="contact-hero-title">
                        Let's Transform Your Facility Operations Together
                    </h1>

                    <p className="contact-hero-desc">
                        Have questions or need a personalized demo? Our experts are ready
                        to help you streamline facility management.
                    </p>

                </div>

            </section>

            {/* Contact Info + Form */}
            <section className="contact-section">

                <div className="container contact-grid">

                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >

                        <span className="section-badge">
                            GET IN TOUCH
                        </span>

                        <h2>Talk With Our Experts</h2>

                        <p>
                            Whether you need a demo, pricing information, or implementation
                            guidance, we're here to help.
                        </p>

                        <div className="info-card">
                            <FiMapPin />
                            <div>
                                <h4>Office Address</h4>
                                <p>Chennai, Tamil Nadu, India</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <FiPhone />
                            <div>
                                <h4>Phone Number</h4>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <FiMail />
                            <div>
                                <h4>Email Address</h4>
                                <p>sales@facilitycore.com</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <FiClock />
                            <div>
                                <h4>Working Hours</h4>
                                <p>Mon - Fri | 9:00 AM - 6:00 PM</p>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >

                        <form className="contact-form">

                            <div className="form-group">
                                <input type="text" placeholder="Full Name" />
                            </div>

                            <div className="form-group">
                                <input type="text" placeholder="Company Name" />
                            </div>

                            <div className="form-group">
                                <input type="email" placeholder="Email Address" />
                            </div>

                            <div className="form-group">
                                <input type="tel" placeholder="Phone Number" />
                            </div>

                            <div className="form-group">
                                <select>
                                    <option>Select Industry</option>
                                    <option>Healthcare</option>
                                    <option>Manufacturing</option>
                                    <option>Retail</option>
                                    <option>Corporate</option>
                                    <option>Education</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <textarea
                                    rows="5"
                                    placeholder="Tell us about your requirements"
                                ></textarea>
                            </div>

                            <button className="submit-btn">
                                Request Demo
                            </button>

                        </form>

                    </motion.div>

                </div>

            </section>

            {/* Why Contact Section */}
            <section className="why-contact">

                <div className="container">

                    <div className="section-header">
                        <span className="section-badge">
                            WHY CONTACT US
                        </span>

                        <h2>Why Contact FacilityCore?</h2>

                        <p>
                            Our team helps organizations identify the right solutions and
                            accelerate digital transformation.
                        </p>
                    </div>

                    <div className="benefits-grid">

                        {benefits.map((item, index) => (

                            <div className="benefit-card" key={index}>

                                <div className="benefit-icon">
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.desc}</p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            <Footer />

        </div>
    );
};

export default ContactPage;