import React from "react";
import {
  FiHome,
  FiBriefcase,
  FiSettings,
  FiTruck,
  FiActivity,
  FiBookOpen,
  FiCoffee,
  FiShoppingBag,
  FiNavigation,
  FiGlobe,
  FiMap,
  FiServer,
  FiCpu,
  FiGrid
} from "react-icons/fi";

export const industriesGrid = [
  { icon: React.createElement(FiHome), name: "Commercial Real Estate", desc: "Maximize tenant satisfaction and property value with smart operations." },
  { icon: React.createElement(FiBriefcase), name: "Corporate Offices & IT Campuses", desc: "Optimize desk sharing, meeting spaces, and workspace workflows." },
  { icon: React.createElement(FiHome), name: "Residential Communities", desc: "Streamline association requests, amenity bookings, and security." },
  { icon: React.createElement(FiSettings), name: "Manufacturing & Factories", desc: "Automate machine checkups and prevent critical assembly shutdowns." },
  { icon: React.createElement(FiTruck), name: "Warehouses & Logistics", desc: "Keep distribution hubs, loading docks, and sorting lines moving." },
  { icon: React.createElement(FiActivity), name: "Healthcare", desc: "Maintain medical-grade compliance and strict environmental standards." },
  { icon: React.createElement(FiBookOpen), name: "Education", desc: "Provide safe, comfortable campuses and manage inventory seamlessly." },
  { icon: React.createElement(FiCoffee), name: "Hospitality & Hotels", desc: "Deliver 5-star service with rapid guest request dispatch systems." },
  { icon: React.createElement(FiShoppingBag), name: "Retail & Shopping Malls", desc: "Manage foot traffic safety, HVAC parameters, and vendor audits." },
  { icon: React.createElement(FiNavigation), name: "Airports & Transportation", desc: "Handle high-throughput baggage lines, security checkpoints, and terminals." },
  { icon: React.createElement(FiGlobe), name: "Utilities & Infrastructure", desc: "Monitor water, power grid structures, and public assets efficiently." },
  { icon: React.createElement(FiMap), name: "Government & Public Sector", desc: "Provide high reliability and stay audit-ready with public compliance." },
  { icon: React.createElement(FiServer), name: "Data Centers & Critical Facilities", desc: "Eliminate downtime with automated failover testing and routine tracking." },
  { icon: React.createElement(FiCpu), name: "Smart Cities", desc: "Link public asset maps with automated service order assignments." },
  { icon: React.createElement(FiGrid), name: "Industrial Facilities", desc: "Integrate specialized heavy equipment sensors with auto-work orders." }
];

export const marqueeItems = [
  { icon: React.createElement(FiActivity), name: "Healthcare" },
  { icon: React.createElement(FiSettings), name: "Manufacturing" },
  { icon: React.createElement(FiHome), name: "Commercial" },
  { icon: React.createElement(FiShoppingBag), name: "Retail" },
  { icon: React.createElement(FiBookOpen), name: "Education" },
  { icon: React.createElement(FiCoffee), name: "Hospitality" },
  { icon: React.createElement(FiMap), name: "Government" },
  { icon: React.createElement(FiCpu), name: "Smart Cities" },
  { icon: React.createElement(FiTruck), name: "Warehousing" },
  { icon: React.createElement(FiBriefcase), name: "Corporate" }
];

export const detailedIndustries = [
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

export const testimonials = [
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
