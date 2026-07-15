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
    heading: "Why Mobile-First Operations Matter",
    description: "Traditional paper-based operations slow down your facility team. Empower them with direct mobile access.",
    checklist: [
        { label: "Mobile Productivity", desc: "Technicians spend more time on field repairs and less time filling spreadsheets." },
        { label: "Faster Decisions", desc: "Access manuals, blueprints, and asset histories directly at the job site." },
        { label: "Real-time Updates", desc: "Keep managers and clients updated with instant task status synchronization." },
        { label: "Anywhere Access", desc: "Work without restrictions across commercial blocks, basements, or remote campus buildings." },
        { label: "Better Communication", desc: "Collaborate seamlessly using built-in task comments, photo uploads, and technician chats." },
        { label: "Paperless Operations", desc: "Eliminate lost work orders, physical receipts, and double-entry errors." }
    ]
};

export const businessChallengesData = {
    badge: {
        icon: FiAlertTriangle,
        text: "BUSINESS CHALLENGES"
    },
    heading: "Challenges We Solve",
    description: "Traditional facility management suffers from manual inefficiencies, lack of real-time visibility, and compliance risks.",
    challenges: [
        {
            icon: FiClock,
            title: "Downtime Bottlenecks",
            description: "Frequent unplanned breakdowns and delayed reactive maintenance response times disrupt your main business operations."
        },
        {
            icon: FiFileText,
            title: "Manual Paperwork",
            description: "Wasting administrative hours on printing work orders, physical compliance checklists, and manual reports compilation."
        },
        {
            icon: FiEyeOff,
            title: "Zero Real-time Tracking",
            description: "No dashboard visibility into active technician field coordinates, task completion timelines, or current asset status."
        },
        {
            icon: FiMessageSquare,
            title: "Communication Gaps",
            description: "Miscommunication between facility occupants, helpdesk dispatchers, technicians, and vendor suppliers."
        },
        {
            icon: FiActivity,
            title: "Compliance Risks",
            description: "Failure to maintain digital audit trails, equipment testing records, and required workplace safety logs."
        },
        {
            icon: FiAlertTriangle,
            title: "SLA Breaches",
            description: "Slow ticket resolution speeds leading to client dissatisfaction, vendor penalties, and property downtime."
        }
    ]
};

export const howFacilityCoreHelpsData = {
    badge: {
        icon: FiCpu,
        text: "SMART OPERATIONS"
    },
    heading: "How FacilityCore Simplifies Management",
    description: "We unify your workspace operations under a single, intelligent workflow platform that automates assignments and tracks performance metrics.",
    bullets: [
        "Intelligent auto-assignment rules dispatch tasks to the closest available technician.",
        "Comprehensive preventive schedules forecast machinery check-ups to minimize failures.",
        "Centralized dashboards track vendor SLAs and response metrics automatically.",
        "Instant feedback forms let occupants evaluate work quality directly on completion."
    ],
    image: "/dashboard.png"
};

export const mobileAppData = {
    tabs: [
        {
            id: "admin",
            label: "FC Admin App",
            icon: FiBriefcase,
            image: "/about_dashboard_preview.png",
            heading: "Complete Control for Administrators",
            description: "Manage overall facility operations, configure workflow triggers, track performance analytics, and oversee dispatch schedules.",
            features: [
                "Asset & Inventory Management controls",
                "Workflow automation configuration and approval triggers",
                "Advanced executive dashboards & analytics reporting",
                "Team status tracking & manual task dispatch"
            ],
            idealFor: ["Facility Managers", "Operations Directors", "Property Owners"]
        },
        {
            id: "employee",
            label: "FC Employee App",
            icon: FiUser,
            image: "/mobileworkforceplatform.png",
            heading: "Empowering Technicians & Ground Staff",
            description: "Equip your maintenance crews, cleaners, and safety inspectors with tools to receive tickets, log check-ins, scan codes, and request parts.",
            features: [
                "Interactive daily task list & inspection routines",
                "QR Code scanning for asset verification & history lookup",
                "Offline work order logging with automatic sync",
                "Photo attachments & digital signature capture"
            ],
            idealFor: ["Technicians", "Maintenance Engineers", "Inspectors"]
        },
        {
            id: "occupant",
            label: "FC Occupant App",
            icon: FiUsers,
            image: "/facility_mobile_app.png",
            heading: "Seamless Experience for Tenants & Occupants",
            description: "Let employees, residents, and visitors submit maintenance reports, reserve office spaces, request entry passes, and receive community alerts.",
            features: [
                "Intuitive incident reporting & ticket status checks",
                "Meeting room, desk, & visitor booking options",
                "Digital entry passes with secure QR codes",
                "Direct updates on building news and scheduled downtime"
            ],
            idealFor: ["Office Employees", "Tenants", "Building Visitors"]
        }
    ]
};

export const mobileFeatureCardsData = {
    badge: {
        icon: FiGrid,
        text: "PLATFORM FEATURES"
    },
    heading: "Advanced Mobile Capabilities",
    description: "Engineered specifically to solve real-world facility challenges directly from your mobile device.",
    features: [
        {
            icon: FiMaximize,
            title: "Asset Scanning",
            description: "Scan asset QR codes directly from the mobile app to quickly access equipment logs, manuals, and submit repair tickets."
        },
        {
            icon: FiBell,
            title: "Instant Push Alerts",
            description: "Receive real-time notifications about critical issues, upcoming inspections, and direct manager notes on the fly."
        },
        {
            icon: FiWifiOff,
            title: "Offline Sync",
            description: "Keep performing work audits and log checklists in basements or low-signal areas; updates sync automatically when online."
        },
        {
            icon: FiCamera,
            title: "Photo Capture",
            description: "Attach clear photo evidence of repair tasks, issues, and visual parts conditions directly to the maintenance ticket."
        },
        {
            icon: FiMapPin,
            title: "Location Tracking",
            description: "Optimize technician dispatching and verify service times with built-in location markers and optimized route maps."
        },
        {
            icon: FiCheckSquare,
            title: "Digital Audits",
            description: "Perform regular building safety checks and compliance reviews easily using customized digital forms."
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
