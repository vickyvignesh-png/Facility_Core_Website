import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

import '../styles/FeaturesPage.css';

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
};

const FeaturesPage = () => {
    return (
        <div className="features-page">
            <Navbar />

            <HeroSection
                backgroundImage="/solutionpageherosection.png"
                badge="PLATFORM FEATURES"
                title="Modern Features For Smart Facilities"
                description="Manage assets, automate workflows, gain real-time visibility, and optimize facility performance from a single platform."
                breadcrumbItems={[
                    { label: "Home", link: "/" },
                    { label: "Features" }
                ]}
            />

            {/* Mobile Application Section */}
            <section className="mobile-app-section">
                <div className="container grid-mobile">
                    <motion.div
                        className="mobile-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <h2 className="section-title">Mobile Applications For Every User</h2>
                        <p className="section-description">
                            FacilityCore delivers dedicated applications for administrators, employees, and occupants.
                        </p>
                        <div className="app-cards">
                            <motion.div className="app-card" whileHover={{ y: -5 }}>
                                <div className="app-icon admin" />
                                <h3>FC Admin App</h3>
                                <p>Control settings, manage assets, and monitor operations.</p>
                            </motion.div>
                            <motion.div className="app-card" whileHover={{ y: -5 }}>
                                <div className="app-icon employee" />
                                <h3>FC Employee App</h3>
                                <p>Submit work orders, view schedules, and access resources.</p>
                            </motion.div>
                            <motion.div className="app-card" whileHover={{ y: -5 }}>
                                <div className="app-icon occupant" />
                                <h3>FC Occupant App</h3>
                                <p>Find spaces, report issues, and receive notifications.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                    <div className="mobile-mocks">
                        <div className="mock mock-1" />
                        <div className="mock mock-2" />
                        <div className="mock mock-3" />
                    </div>
                </div>
            </section>

            {/* Dashboard Section */}
            <section className="dashboard-section">
                <div className="container grid-dashboard">
                    <motion.div
                        className="dashboard-image"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <div className="dashboard-screenshot" />
                    </motion.div>
                    <motion.div
                        className="dashboard-content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <h2 className="section-title">Powerful Dashboards & Real-Time Visibility</h2>
                        <ul className="feature-list">
                            <li>Real-Time Monitoring</li>
                            <li>Asset Visibility</li>
                            <li>SLA Tracking</li>
                            <li>Work Order Insights</li>
                            <li>Occupancy Analytics</li>
                            <li>Executive Reports</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Analytics Section */}
            <section className="analytics-section">
                <div className="container">
                    <h2 className="section-title">Advanced Analytics & Intelligence</h2>
                    <p className="section-description">
                        Make faster decisions using actionable insights.
                    </p>
                    <div className="kpi-cards">
                        <motion.div className="kpi-card" whileHover={{ scale: 1.03 }}>
                            <span className="kpi-value">30%</span>
                            <span className="kpi-label">Reduction In Downtime</span>
                        </motion.div>
                        <motion.div className="kpi-card" whileHover={{ scale: 1.03 }}>
                            <span className="kpi-value">40%</span>
                            <span className="kpi-label">Faster Response Times</span>
                        </motion.div>
                        <motion.div className="kpi-card" whileHover={{ scale: 1.03 }}>
                            <span className="kpi-value">25%</span>
                            <span className="kpi-label">Lower Maintenance Costs</span>
                        </motion.div>
                        <motion.div className="kpi-card" whileHover={{ scale: 1.03 }}>
                            <span className="kpi-value">95%</span>
                            <span className="kpi-label">SLA Compliance</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Automation Workflow Section */}
            <section className="automation-section">
                <div className="container">
                    <h2 className="section-title">Automate Every Facility Process</h2>
                    <div className="workflow-timeline">
                        <div className="step">
                            <div className="icon">01</div>
                            <p>Request Created</p>
                        </div>
                        <div className="connector" />
                        <div className="step">
                            <div className="icon">02</div>
                            <p>Auto Assignment</p>
                        </div>
                        <div className="connector" />
                        <div className="step">
                            <div className="icon">03</div>
                            <p>Task Execution</p>
                        </div>
                        <div className="connector" />
                        <div className="step">
                            <div className="icon">04</div>
                            <p>Approval & Verification</p>
                        </div>
                        <div className="connector" />
                        <div className="step">
                            <div className="icon">05</div>
                            <p>Closure</p>
                        </div>
                        <div className="connector" />
                        <div className="step">
                            <div className="icon">06</div>
                            <p>Analytics & Reporting</p>
                        </div>
                    </div>
                    <div className="automation-cards">
                        <motion.div className="auto-card" whileHover={{ scale: 1.04 }}>
                            <h3>No-Code Workflow Builder</h3>
                            <p>Drag‑and‑drop process creation.</p>
                        </motion.div>
                        <motion.div className="auto-card" whileHover={{ scale: 1.04 }}>
                            <h3>Automated Notifications</h3>
                            <p>Instant alerts via email, SMS, or push.</p>
                        </motion.div>
                        <motion.div className="auto-card" whileHover={{ scale: 1.04 }}>
                            <h3>Escalation Rules</h3>
                            <p>Automatic escalation based on SLA breaches.</p>
                        </motion.div>
                        <motion.div className="auto-card" whileHover={{ scale: 1.04 }}>
                            <h3>SLA Automation</h3>
                            <p>Enforce service level agreements programmatically.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FeaturesPage;