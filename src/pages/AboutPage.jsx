import React from 'react';
import { motion } from 'framer-motion';
import {
    FiHome,
    FiTarget,
    FiEye,
    FiAward,
    FiUsers,
    FiShield,
    FiZap,
    FiTrendingUp
} from 'react-icons/fi';

import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/AboutPage.css';

const values = [
    {
        icon: <FiShield />,
        title: 'Integrity',
        desc: 'We build trust through transparency and accountability.'
    },
    {
        icon: <FiZap />,
        title: 'Innovation',
        desc: 'We continuously innovate to simplify facility operations.'
    },
    {
        icon: <FiUsers />,
        title: 'Customer Success',
        desc: 'Customer growth and satisfaction remain our top priority.'
    },
    {
        icon: <FiAward />,
        title: 'Excellence',
        desc: 'We strive for excellence in every solution we deliver.'
    },
    {
        icon: <FiTrendingUp />,
        title: 'Continuous Improvement',
        desc: 'We constantly evolve our platform to deliver more value.'
    },
    {
        icon: <FiUsers />,
        title: 'Collaboration',
        desc: 'Strong collaboration drives better outcomes and innovation.'
    }
];

const achievements = [
    { count: '1000+', label: 'Assets Managed' },
    { count: '50+', label: 'Enterprise Clients' },
    { count: '99.9%', label: 'Platform Uptime' },
    { count: '10+', label: 'Industries Served' }
];

const AboutPage = () => {
    return (
        <div className="about-page">

            <Navbar />

            {/* Hero */}
            <section className="about-hero">
                <div className="about-hero-overlay" />

                <div className="about-hero-content">

                    <nav className="about-breadcrumb">
                        <Link to="/">Home</Link> / <span>About Us</span>
                    </nav>

                    <span className="about-badge">
                        <FiHome />
                        ABOUT FACILITYCORE
                    </span>

                    <h1 className="about-hero-title">
                        Transforming Facility Management Through Innovation
                    </h1>

                    <p className="about-hero-desc">
                        Helping organizations streamline operations, automate workflows,
                        and achieve operational excellence through intelligent technology.
                    </p>

                    <div className="about-hero-cta">
                        <Link to="/contact" className="btn btn-primary">
                            Contact Us
                        </Link>

                        <Link to="/demo" className="btn btn-secondary">
                            Book Demo
                        </Link>
                    </div>

                </div>
            </section>

            {/* Who We Are */}
            <section className="who-we-are">

                <div className="container who-grid">

                    <motion.div
                        className="who-image"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <img src="/about-company.jpg" alt="FacilityCore" />
                    </motion.div>

                    <motion.div
                        className="who-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <span className="section-badge">
                            WHO WE ARE
                        </span>

                        <h2>Empowering Modern Facilities With Smart Technology</h2>

                        <p>
                            FacilityCore is a modern facility management platform designed
                            to simplify operations, automate workflows, improve compliance,
                            and provide real-time visibility across the organization.
                        </p>

                        <div className="who-highlights">
                            <span>Enterprise Ready</span>
                            <span>Scalable Platform</span>
                            <span>Real-Time Visibility</span>
                        </div>

                    </motion.div>

                </div>

            </section>

            {/* Mission Vision */}
            <section className="mission-vision">

                <div className="container mission-grid">

                    <div className="mission-card">
                        <FiTarget />
                        <h3>Our Mission</h3>

                        <p>
                            To simplify facility operations through intelligent automation,
                            workflow optimization, and real-time visibility.
                        </p>
                    </div>

                    <div className="vision-card">
                        <FiEye />
                        <h3>Our Vision</h3>

                        <p>
                            To become the world's most trusted facility management platform.
                        </p>
                    </div>

                </div>

            </section>

            {/* Core Values */}
            <section className="core-values">

                <div className="container">

                    <div className="section-header">
                        <span className="section-badge">OUR VALUES</span>
                        <h2>Core Values That Drive Us</h2>
                    </div>

                    <div className="values-grid">

                        {values.map((item, index) => (

                            <div className="value-card" key={index}>

                                <div className="value-icon">
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.desc}</p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Achievements */}
            <section className="achievements-section">

                <div className="container">

                    <div className="achievement-grid">

                        {achievements.map((item, index) => (

                            <div className="achievement-card" key={index}>
                                <h2>{item.count}</h2>
                                <p>{item.label}</p>
                            </div>

                        ))}

                    </div>

                </div>

            </section>

            <Footer />

        </div>
    );
};

export default AboutPage;