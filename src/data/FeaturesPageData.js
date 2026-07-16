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
            description: "The FC Admin App is designed for Facility Managers, Property Managers, Operations Directors, Business Owners, Supervisors, and Senior Management.\n\nIt provides a real-time operational command center, allowing decision-makers to monitor facilities, approve requests, review dashboards, and oversee business performance from anywhere.",
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
                "Regional Managers",
                "Business Owners",
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
        text: "BUSINESS VALUE"
    },
    heading: "Unlock High Operational Efficiency",
    description: "Maximize your return on facility assets by minimizing downtime, reducing overheads, and raising compliance standards.",
    benefits: [
        "30% reduction in unplanned equipment breakdowns using automated preventive plans.",
        "40% faster work order resolution times with smart routing algorithms.",
        "25% drop in manual documentation expenses by switching to digital checklists.",
        "100% auditable record keeping for all compliance and fire safety logs."
    ],
    image: "/qrtracking.png"
};

export const whatYouCanMonitorData = {
    badge: {
        icon: FiMonitor,
        text: "DASHBOARD ANALYTICS"
    },
    heading: "What You Can Monitor",
    description: "Get full granular visibility into every aspect of your facility operations via specialized data categories.",
    monitors: [
        {
            icon: FiActivity,
            title: "Operations",
            bullets: [
                "Open & overdue work orders count",
                "SLA compliance & response times",
                "Preventive vs reactive maintenance ratio",
                "Inspection passing rates"
            ]
        },
        {
            icon: FiUsers,
            title: "Workforce",
            bullets: [
                "Technician utilization & task load",
                "Average completion time per worker",
                "Active team member locations",
                "Safety compliance record"
            ]
        },
        {
            icon: FiBox,
            title: "Assets",
            bullets: [
                "Key equipment uptime & downtime",
                "Asset total cost of ownership",
                "Asset lifecycle & depreciation state",
                "Warranty expiry milestones"
            ]
        },
        {
            icon: FiHeart,
            title: "Customer Experience",
            bullets: [
                "Occupant ticket feedback rating",
                "Tenant response duration metrics",
                "Visitor check-in volume patterns",
                "Common complaints hotspot maps"
            ]
        },
        {
            icon: FiBarChart2,
            title: "Business Performance",
            bullets: [
                "Vendor contract compliance scores",
                "Utilities consumption & carbon metrics",
                "Maintenance budget allocations",
                "Audit pass probability index"
            ]
        }
    ]
};

export const mobileAppAdvantagesData = {
    badge: {
        icon: FiCheckCircle,
        text: "CORE ADVANTAGES"
    },
    heading: "High-Performance Cloud Architecture",
    description: "Robust, secure, and modern infrastructure designed to support enterprise-grade operations around the clock.",
    checklist: [
        { label: "Mobile First Design", desc: "Optimized specifically for handheld devices with clean layout structures." },
        { label: "Cloud Syncing", desc: "AWS-backed cloud architecture with 99.9% availability." },
        { label: "Offline Mode", desc: "Technicians keep compiling logs offline and sync instantly on connection." },
        { label: "QR Code Actions", desc: "Direct asset actions via code scans without manual entry." },
        { label: "Real-time Notifications", desc: "Frictionless notifications through push alerts, email, and SMS." },
        { label: "Multi-site Support", desc: "Manage properties located in different cities under a single master profile." },
        { label: "Security & Encryption", desc: "All user data encrypted in transit and at rest." },
        { label: "Interactive Dashboards", desc: "Visualize metrics on mobile screens with responsive layout." },
        { label: "Digital Inspection Checks", desc: "Eliminate physical checklist sheets completely." },
        { label: "Anywhere Access", desc: "Access the entire workspace database anytime from any global region." }
    ]
};

export const transformFacilityManagementData = {
    badge: {
        icon: FiZap,
        text: "GET STARTED"
    },
    heading: "Transform Your Facility Management Today",
    description: "Unify your operations teams, automate routines, and make intelligence-driven workspace decisions with FacilityCore.",
    closingLine: "Experience the future of intelligent facility workspace operations.",
    ctaText: "Schedule a Live Demo",
    ctaLink: "/contact"
};
// End of FeaturesPageData.js
