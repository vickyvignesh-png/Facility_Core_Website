import React from "react";
import {
    FiSmartphone,
    FiCheckCircle,
    FiAlertTriangle,
    FiFileText,
    FiEyeOff,
    FiMessageSquare,
    FiActivity,
    FiClock,
    FiCpu,
    FiUser,
    FiUsers,
    FiBriefcase,
    FiMaximize,
    FiBell,
    FiWifiOff,
    FiCamera,
    FiMapPin,
    FiCheckSquare,
    FiTrendingUp,
    FiHeart,
    FiBarChart2,
    FiZap,
    FiShield,
    FiCloud,
    FiGrid,
    FiMonitor,
    FiBox,
    FiTool,
    FiAward,
    FiLink,
    FiDollarSign,
    FiGlobe,
    FiSettings,
    FiPackage,
    FiSmile,
} from "react-icons/fi";

export const mobileFirstOverviewData = {
    badge: {
        icon: FiSmartphone,
        text: "Mobile-First Operations"
    },
    heading: "Mobile Applications",
    description: "Manage Your Entire Facility Operation—Anytime, Anywhere",
    paragraphs: [
        "Modern facility management doesn’t happen behind a desk. Facility managers are constantly moving between buildings, technicians work in the field, supervisors inspect facilities, business owners travel frequently, and occupants expect immediate service.",
        "FacilityCore is designed with a Mobile-First philosophy, enabling every stakeholder to access critical information, perform daily tasks, and make informed decisions directly from their smartphone or tablet.",
        "Instead of relying on laptops or desktop computers, FacilityCore empowers your entire organization with dedicated mobile applications that keep operations connected in real time.",
        "Whether you're managing a commercial office tower, residential community, manufacturing plant, healthcare facility, educational campus, or smart city infrastructure, FacilityCore ensures your business is always within reach."
    ],
    image: "/futurepage1stsection.png"
};



export const whyMobileFirstData = {
    badge: {
        icon: FiCheckCircle,
        text: "WHY MOBILE FIRST"
    },
    heading: "Why Mobile-First Matters",
    paragraphs: [
        "In today's fast-paced business environment, waiting to return to the office to access operational data can lead to delays, missed opportunities, and reduced productivity.",
        "FacilityCore eliminates these barriers by placing your entire facility operation in the palm of your hand.",
        "From approving work orders and monitoring assets to completing inspections and responding to occupant requests, everything can be managed on the move."
    ]
};

export const businessChallengesData = {
    badge: {
        icon: FiAlertTriangle,
        text: "Business Challenges"
    },
    heading: "Challenges We Solve",
    description: "Many organizations continue to rely on manual processes and desktop-based systems, making it difficult to manage operations efficiently outside the office.",
    tagline: "These challenges reduce productivity, increase operational costs, and negatively impact customer satisfaction.",
    challenges: [
        {
            icon: FiMapPin,
            text: "Limited access to operational information while on-site or traveling."
        },
        {
            icon: FiClock,
            text: "Delayed approvals affecting maintenance response times."
        },
        {
            icon: FiFileText,
            text: "Paper-based inspections that increase administrative effort."
        },
        {
            icon: FiMessageSquare,
            text: "Poor communication between managers, technicians, contractors, and occupants."
        },
        {
            icon: FiEyeOff,
            text: "Lack of real-time visibility into ongoing maintenance activities."
        },
        {
            icon: FiTool,
            text: "Difficulty tracking workforce productivity."
        },
        {
            icon: FiBarChart2,
            text: "Delayed reporting and decision-making."
        },
        {
            icon: FiGrid,
            text: "Inconsistent service delivery across multiple facilities."
        },
        {
            icon: FiAlertTriangle,
            text: "Slow response to emergencies and critical asset failures."
        }
    ]
};

export const howFacilityCoreHelpsData = {
    badge: {
        icon: FiCpu,
        text: "SMART OPERATIONS"
    },
    heading: "How FacilityCore Helps",
    bullets: [
        "FacilityCore transforms traditional facility management into a connected, digital, and mobile experience.",
        "Our mobile ecosystem enables managers, employees, contractors, and occupants to collaborate seamlessly through three purpose-built applications.",
        "Every activity performed through the mobile apps is synchronized instantly with the cloud platform, providing real-time operational visibility and enabling faster, data-driven decisions.",
        "Whether approving a work order, completing an inspection, reporting an issue, or reviewing performance dashboards, FacilityCore keeps everyone connected—regardless of location."
    ],
    image: "/dashboard.png"
};

export const mobileAppData = {
    badge: {
        icon: FiSmartphone,
        text: "Smart Mobile Apps"
    },
    heading: "Our Mobile Ecosystem",
    description: "FacilityCore offers three dedicated mobile applications, each designed for a specific group of users.",
    keyFunctionalitiesTitle: "Key Functionalities",
    idealForTitle: "Ideal For",
    tabs: [
        {
            id: "admin",
            label: "FC Admin App",
            icon: FiBriefcase,
            subHeading: "FC Admin App",
            highlightPoint: "Complete Operational Control in Your Pocket",
            description: "The FC Admin App is a comprehensive mobile solution designed for facility managers, supervisors, business owners, and field teams. Monitor operations, approve work orders, track assets, manage maintenance activities, and oversee workforce performance in real time from anywhere.",
            features: [
                "Executive dashboards",
                "Live operational KPIs",
                "Asset health monitoring",
                "Work order approvals",
                "Preventive maintenance monitoring",
                "Workforce performance tracking",
                "Vendor and contractor management",
                "Compliance monitoring",
                "Inspection approvals",
                "Budget and operational insights",
                "Push notifications and alerts",
                "Multi-site monitoring"
            ],
            idealFor: [
                "Facility Managers",
                "Property Managers",
                "Operations Managers",
                "Supervisors",
                "Business Owners",
                "Field Engineers",
                "Maintenance Teams",
                "Senior Leadership"
            ],
            image: "/adminapp.png"
        },
        {
            id: "employee",
            label: "FC Employee App",
            icon: FiUser,
            subHeading: "FC Employee App",
            highlightPoint: "Empowering Your Mobile Workforce",
            description: "The FC Employee App is built for technicians, engineers, maintenance staff, inspectors, housekeeping teams, security personnel, and field supervisors.\n\nThe application eliminates paperwork by allowing employees to receive, execute, and complete maintenance activities directly from their mobile devices.",
            features: [
                "Receive assigned work orders",
                "Accept or reject jobs",
                "Scan QR-coded assets",
                "View maintenance history",
                "Complete inspection checklists",
                "Capture photos and videos",
                "Record labour hours",
                "Update work progress",
                "Request spare parts",
                "Capture customer signatures",
                "GPS-enabled attendance",
                "Offline working mode",
                "Instant notifications"
            ],
            idealFor: [
                "Maintenance Technicians",
                "HVAC Engineers",
                "Electrical Engineers",
                "Housekeeping Staff",
                "Security Teams",
                "Landscape Teams",
                "Plumbing Teams",
                "Field Supervisors"
            ],
            image: "/employeapp.png"
        },
        {
            id: "occupant",
            label: "FC Occupant App",
            icon: FiUsers,
            subHeading: "FC Occupant App",
            highlightPoint: "Deliver Exceptional Occupant Experiences",
            description: "The FC Occupant App is designed for tenants, residents, employees, visitors, and building occupants.\n\nIt provides a simple self-service platform that improves communication between occupants and facility management while reducing the workload of helpdesk teams.",
            features: [
                "Submit service requests",
                "Track request status",
                "Receive maintenance updates",
                "Book common facilities",
                "Visitor pre-registration",
                "Community announcements",
                "Emergency notifications",
                "Digital notices",
                "Feedback surveys",
                "View service history",
                "Contact facility management"
            ],
            idealFor: [
                "Corporate Employees",
                "Office Occupants",
                "Residents",
                "Apartment Owners",
                "Tenants",
                "Visitors"
            ],
            image: "/adminapp.png"
        }
    ]
};

export const mobileFeatureCardsData = {
    badge: {
        icon: FiGrid,
        text: "Mobile App Features"
    },
    heading: "Mobile Features That Make FacilityCore Different",
    description: "Unlike traditional desktop-based facility management systems, FacilityCore is designed around mobility.",
    features: [
        {
            icon: FiCheckSquare,
            title: "Mobile Approvals",
            description: "Approve work orders, inspections, purchase requests, leave requests, and service requests instantly."
        },
        {
            icon: FiBell,
            title: "Real-Time Notifications",
            description: "Receive alerts for emergencies, overdue work orders, SLA breaches, asset failures, and inspection results."
        },
        {
            icon: FiGrid,
            title: "QR Code Integration",
            description: "Simply scan a QR code to access complete asset information, maintenance history, manuals, warranties, and previous inspections."
        },
        {
            icon: FiWifiOff,
            title: "Offline Operation",
            description: "Continue working even without an internet connection. Data automatically synchronizes once connectivity is restored."
        },
        {
            icon: FiCloud,
            title: "Cloud Synchronization",
            description: "Every action performed in the field is instantly updated across the platform, ensuring managers always have accurate, real-time information."
        }
    ]
};

export const businessBenefitsData = {
    badge: {
        icon: FiTrendingUp,
        text: "Business Benefits"
    },
    heading: "Drive Better Business Outcomes",
    description: "FacilityCore’s mobile-first approach delivers measurable improvements across the organization.",
    benefits: [
        {
            icon: FiTrendingUp,
            title: "Improve Productivity",
            description: "Enable employees to complete more work with fewer administrative tasks."
        },
        {
            icon: FiActivity,
            title: "Accelerate Decision-Making",
            description: "Managers can review dashboards, approve requests, and monitor operations from anywhere."
        },
        {
            icon: FiAward,
            title: "Enhance Service Delivery",
            description: "Respond to maintenance requests faster and improve occupant satisfaction."
        },
        {
            icon: FiUsers,
            title: "Increase Workforce Efficiency",
            description: "Reduce paperwork and provide technicians with all the information they need in the field."
        },
        {
            icon: FiLink,
            title: "Improve Collaboration",
            description: "Connect managers, technicians, contractors, vendors, and occupants through a single platform."
        },
        {
            icon: FiDollarSign,
            title: "Reduce Operational Costs",
            description: "Eliminate unnecessary travel, paperwork, duplicate data entry, and manual reporting."
        },
        {
            icon: FiGlobe,
            title: "Support Multi-Site Operations",
            description: "Monitor multiple buildings and facilities through one mobile platform."
        }
    ]
};

export const whatYouCanMonitorData = {
    badge: {
        icon: FiMonitor,
        text: "DASHBOARD ANALYTICS"
    },
    heading: "What You Can Monitor",
    description: "FacilityCore provides real-time visibility into every aspect of your operations.",
    monitors: [
        {
            icon: FiSettings,
            title: "Operations",
            bullets: [
                "Active Work Orders",
                "Pending Approvals",
                "Overdue Maintenance",
                "Emergency Requests",
                "Service Completion Rate"
            ]
        },
        {
            icon: FiUsers,
            title: "Workforce",
            bullets: [
                "Technician Productivity",
                "Attendance",
                "Job Allocation",
                "Field Activity",
                "Labour Utilization"
            ]
        },
        {
            icon: FiPackage,
            title: "Assets",
            bullets: [
                "Asset Health",
                "Equipment Downtime",
                "Maintenance History",
                "Asset Availability",
                "Warranty Status"
            ]
        },
        {
            icon: FiSmile,
            title: "Customer Experience",
            bullets: [
                "Occupant Satisfaction",
                "Complaint Trends",
                "Feedback Ratings",
                "Request Resolution Time",
                "SLA Compliance"
            ]
        },
        {
            icon: FiBarChart2,
            title: "Business Performance",
            bullets: [
                "Maintenance Costs",
                "Vendor Performance",
                "Operational KPIs",
                "Compliance Status",
                "Executive Dashboards"
            ]
        }
    ]
};

export const mobileAppAdvantagesData = {
    badge: {
        icon: FiCheckCircle,
        text: "CORE ADVANTAGES"
    },
    heading: "Why Choose FacilityCore Mobile Applications?",
    description: "Robust, secure, and modern infrastructure designed to support enterprise-grade operations around the clock.",
    leftColumn: [
        "Mobile-First Platform",
        "Real-Time Cloud Synchronization",
        "QR Code Enabled",
        "Multi-Site Management",
        "Digital Inspections",
        "Anywhere, Anytime Access"
    ],
    rightColumn: [
        "Purpose-Built Apps for Every User",
        "Offline Capability",
        "Enterprise-Grade Security",
        "Instant Notifications",
        "Smart Dashboards"
    ]
};

export const transformFacilityManagementData = {
    badge: {
        icon: FiZap,
        text: "GET STARTED"
    },
    heading: "Transform the Way You Manage Facilities",
    paragraph1: "FacilityCore’s mobile applications empower your entire organization to work smarter, respond faster, and make better decisions—whether in the office, on-site, or on the move.",
    paragraph2: "With everything you need in the palm of your hand, managing facilities has never been simpler, faster, or more connected.",
    highlightText: "FacilityCore — Where Facilities Run Smarter."
};
// End of FeaturesPageData.js
