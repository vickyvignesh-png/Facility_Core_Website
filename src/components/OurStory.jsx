import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiBookOpen, 
  FiLink2, 
  FiFileText, 
  FiTool, 
  FiEye, 
  FiUsers, 
  FiPackage, 
  FiShield, 
  FiClock,
  FiMessageCircle
} from 'react-icons/fi';
import "../styles/OurStory.css";

const challenges = [
  { text: "Disconnected software systems", icon: <FiLink2 /> },
  { text: "Manual paperwork and spreadsheets", icon: <FiFileText /> },
  { text: "Reactive maintenance practices", icon: <FiTool /> },
  { text: "Limited operational visibility", icon: <FiEye /> },
  { text: "Poor communication between teams", icon: <FiUsers /> },
  { text: "Inefficient asset management", icon: <FiPackage /> },
  { text: "Difficult compliance tracking", icon: <FiShield /> },
  { text: "Delayed decision-making", icon: <FiClock /> }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const OurStory = () => {
  return (
    <section className="our-story-section">
      <div className="container">
        
        {/* Header Block */}
        <motion.div 
          className="our-story-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="our-story-badge">
            <FiBookOpen /> OUR STORY
          </span>
          <h2 className="our-story-heading">
            Our Story
          </h2>
          <p className="our-story-intro-p">
            FacilityCore was born from years of practical experience managing complex facility operations across commercial buildings, mixed-use developments, corporate offices, residential communities, industrial facilities, and critical infrastructure.
          </p>
        </motion.div>

        {/* Challenges Section */}
        <div className="our-story-challenges">
          <p className="challenges-subheading">
            Throughout our journey, we identified common challenges faced by organizations:
          </p>
          
          <motion.div 
            className="challenges-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {challenges.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="challenge-card"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="challenge-icon-circle">
                  {item.icon}
                </div>
                <h4 className="challenge-card-text">
                  {item.text}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Vision Section */}
        <div className="our-story-vision">
          <h3 className="vision-highlight-text">
            We believed there had to be a better way.
          </h3>
          
          {/* Highlight Gradient Card */}
          <motion.div 
            className="vision-gradient-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="vision-quote-icon">
              <FiMessageCircle />
            </div>
            <p className="vision-gradient-text">
              That vision led to the creation of FacilityCore—a unified platform that connects people, assets, maintenance, compliance, vendors, and occupants into one intelligent ecosystem.
            </p>
          </motion.div>

          <p className="vision-concluding-p">
            Today, FacilityCore helps organizations replace fragmented processes with a smarter, more connected way of managing facilities.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
