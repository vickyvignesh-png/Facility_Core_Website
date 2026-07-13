import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import '../styles/WhyChooseUs.css';

const features = [
    'Mobile-First Platform',
    'Cloud-Based & Scalable',
    'Enterprise-Ready',
    'Built on Real Industry Experience',
    'Real-Time Operational Visibility',
    'Intelligent Automation',
    'Comprehensive Asset Lifecycle Management',
    'Powerful Analytics & Dashboards',
    'Multi-Site Management',
    'Secure & Reliable Infrastructure',
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const featureVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const WhyChooseUs = () => {
    return (
        <section className="wcu-section">
            <div className="container mx-auto px-4 md:px-8">

                {/* ── Header ───────────────────────────────────────── */}
                <motion.div
                    className="wcu-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.span className="wcu-badge" variants={fadeUp}>
                        <FiCheckCircle className="wcu-badge-icon" />
                        WHY FACILITYCORE
                    </motion.span>

                    <motion.h2 className="wcu-heading" variants={fadeUp}>
                        Why FacilityCore?
                    </motion.h2>

                    <motion.p className="wcu-intro" variants={fadeUp}>
                        Discover why organizations trust FacilityCore to simplify operations, improve productivity, and deliver smarter facility management.
                    </motion.p>
                </motion.div>

                {/* ── Feature Grid ─────────────────────────────────── */}
                <motion.ul
                    className="wcu-feature-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {features.map((feature, i) => (
                        <motion.li
                            key={i}
                            className="wcu-feature-item"
                            variants={featureVariants}
                        >
                            <FiCheckCircle className="wcu-feature-icon" />
                            <span className="wcu-feature-text">
                                {feature}
                            </span>
                        </motion.li>
                    ))}
                </motion.ul>

            </div>
        </section>
    );
};

export default WhyChooseUs;
