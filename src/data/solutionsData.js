import React from "react";
import {
  FiPackage,
  FiTool,
  FiUsers,
  FiTruck,
  FiHome,
  FiBriefcase,
  FiClipboard
} from "react-icons/fi";

export const modules = [
  {
    title: "Asset & Maintenance",
    description: "Manage assets across their lifecycle.",
    modalDescription: "FacilityCore's Asset & Maintenance module helps you manage your assets throughout their entire life cycle—from acquisition to disposal. Plan preventive maintenance, handle breakdowns quickly, track costs, and extend asset life with data-driven decisions.",
    icon: React.createElement(FiPackage),
    img: "/sectionpagedashboard.png",
    link: "/solutions/asset-management",
    tagline: "Keep every asset reliable, safe and performing at its best.",
    tags: [
      "Lifecycle Management",
      "Preventive Maintenance",
      "Reactive Maintenance",
      "Work Orders",
      "SLA & Compliance",
      "Analytics & Reports"
    ],
    whatICanDoDetails: [
      { title: "Centralize All Assets", desc: "Maintain a single, accurate repository of all your assets with details, documents, warranty and locations." },
      { title: "Plan Preventive Maintenance", desc: "Create maintenance schedules based on time, usage or meter reading to prevent breakdowns and reduce downtime." },
      { title: "Manage Work Orders", desc: "Raise, assign and track work orders from one place. Monitor status, priority, SLA and resolution." },
      { title: "Track Asset Performance", desc: "Monitor asset health, service history, costs and performance metrics to make better decisions." },
      { title: "Ensure Compliance", desc: "Stay audit-ready with inspection checklists, compliance schedules and digital certifications." },
      { title: "Control Maintenance Costs", desc: "Analyze costs, vendors and resources to optimize budgets and improve operational efficiency." }
    ],
    whatICanDo: [],
    keyFeatures: [
      "Asset Register & Classification – Maintain all asset details, hierarchy, location, documents and lifecycle.",
      "Preventive Maintenance (PPM) – Create PPM plans, checklists and auto-generate work orders.",
      "Reactive Maintenance – Raise service requests and convert them into work orders instantly.",
      "Work Order Management – Assign, track and close work orders with time, cost and resource details.",
      "SLA Management – Define SLA rules, track breaches and take corrective actions.",
      "Asset Condition Monitoring – Track condition, readings, warranty, AMC and spare parts.",
      "Cost Tracking – Monitor maintenance cost, parts cost, labor cost and overall asset cost.",
      "Reports & Analytics – Get real-time insights on assets, breakdowns, MTTR, costs and more."
    ],
    benefits: [
      "Reduced breakdowns and unplanned downtime",
      "Extended asset life and better performance",
      "Lower maintenance and repair costs",
      "Improved compliance and safety",
      "Data-driven decisions with real-time insights"
    ]
  },
  {
    title: "Visitor Management",
    description: "Secure every entry. Delight every visitor.",
    modalDescription: "FacilityCore's Visitor Management system helps you manage pre-registrations, approvals, digital check-ins, visitor passes, meetings and logs – all in one place. Ensure better security, improve compliance and create a modern visitor experience.",
    icon: React.createElement(FiTool),
    img: "/pmworking.png",
    link: "/solutions/preventive-maintenance",
    tagline: "Secure every entry. Delight every visitor.",
    tags: [
      "Pre-Registration",
      "Digital Check-In",
      "Visitor Pass",
      "Host Notifications",
      "Visit Approval",
      "Real-time Logs"
    ],
    whatICanDoDetails: [
      {
        title: "Pre-Register Visitors",
        desc: "Allow hosts or reception to pre-register visitors with details and visit purpose."
      },
      {
        title: "Approve & Notify",
        desc: "Approve visits, notify hosts and visitors via email, SMS or app instantly."
      },
      {
        title: "Digital Check-In",
        desc: "Visitors check in using QR code, kiosk, mobile app or reception."
      },
      {
        title: "Smart Visitor Pass",
        desc: "Generate digital visitor passes with photo, host and visit validity."
      },
      {
        title: "Host & Meeting Management",
        desc: "Assign visitors to hosts, meeting rooms and manage visit schedules."
      },
      {
        title: "Real-time Monitoring",
        desc: "View live visitor status, in-progress visits and building occupancy."
      },
      {
        title: "Logs & Reports",
        desc: "Maintain complete visitor history with detailed logs and exportable reports."
      },
      {
        title: "Security & Compliance",
        desc: "Manage watchlists, ID verification, NDA agreements and compliance policies."
      }
    ],
    whatICanDo: [],
    keyFeatures: [
      "Pre-Registration & Approval – Register visitors in advance and get digital approvals.",
      "Multiple Check-In Options – QR code, self check-in kiosk, mobile app or manual reception check-in.",
      "Visitor Pass Management – Generate time-bound digital visitor passes with photo and purpose.",
      "Host Notifications – Real-time alerts to hosts on visitor arrival and check-out.",
      "ID Capture & Verification – Capture government ID, take photos and verify visitors.",
      "Watchlist & Blacklist – Screen visitors against watchlists and block restricted entries.",
      "Visit Logs & History – Complete visit history with reports and export options."
    ],
    benefits: [
      "Improve building security and control access.",
      "Enhance visitor experience with digital processes.",
      "Maintain complete compliance and audit trails.",
      "Reduce manual work and waiting time.",
      "Get real-time visibility of all visitor activities."
    ]
  },
  {
    title: "HR Management",
    description: "Manage your workforce efficiently from hire to retire.",
    modalDescription: "FacilityCore's HR Management module helps you manage your entire workforce from onboarding to exit. Automate HR operations, monitor employee performance, manage training, assets, attendance, leave and compliance—all from a single platform.",
    icon: React.createElement(FiUsers),
    img: "/hrmanagement.png",
    link: "/solutions/hr-management",
    tagline: "Empower your people. Elevate your organization.",
    tags: [
      "Employee Master",
      "Skill Matrix",
      "Job Description",
      "Leave Management",
      "Training Management",
      "Career Progression"
    ],
    whatICanDoDetails: [
      {
        title: "Employee Master",
        desc: "Maintain complete employee information including personal details, documents, emergency contacts and qualifications."
      },
      {
        title: "Skill Matrix",
        desc: "Track employee skills, certifications, proficiency levels and department competency."
      },
      {
        title: "Leave Management",
        desc: "Automate leave requests, approvals, balances and leave calendar management."
      },
      {
        title: "Training Management",
        desc: "Plan training schedules, manage enrollments and track employee certifications."
      },
      {
        title: "Career Progression",
        desc: "Monitor promotions, appraisals, talent development and succession planning."
      },
      {
        title: "Rewards & Recognition",
        desc: "Recognize employee achievements with reward programs, incentives and leaderboards."
      },
      {
        title: "Asset Management",
        desc: "Allocate, maintain and track company assets assigned to employees."
      },
      {
        title: "Exit Management",
        desc: "Manage resignation requests, clearance processes, exit interviews and final settlements."
      }
    ],
    whatICanDo: [],
    keyFeatures: [
      "Employee Master – Maintain complete employee records in one centralized platform.",
      "Skill Matrix – Track employee skills, certifications and competency levels.",
      "Job Description – Define roles, responsibilities and reporting structures.",
      "Leave Management – Automate leave requests, approvals and leave balances.",
      "Uniform Management – Manage uniform issuance, sizing and laundry tracking.",
      "Asset Management – Allocate and monitor employee assets throughout their lifecycle.",
      "Training Management – Organize training calendars, enrollments and certifications.",
      "Career Progression – Track promotions, appraisals and career growth plans.",
      "Rewards & Recognition – Reward achievements with recognition programs and incentives.",
      "Exit Management – Streamline employee resignation, clearance and offboarding."
    ],
    benefits: [
      "Centralize employee information and HR operations.",
      "Improve workforce productivity and efficiency.",
      "Ensure HR policy compliance and governance.",
      "Reduce manual HR administration tasks.",
      "Gain real-time employee insights and analytics.",
      "Enhance employee engagement and experience.",
      "Protect sensitive employee data with enterprise security.",
      "Scale HR processes with flexible and customizable workflows."
    ]
  },
  {
    title: "Parking, Vehicle & Visitor Management",
    description: "Manage parking, vehicles and visitors from one platform.",
    modalDescription: "FacilityCore's Parking, Vehicle & Visitor Management module helps you manage parking zones, parking slots, vehicles, visitors and entry operations from a single platform. Improve security, optimize parking utilization and deliver a seamless arrival experience.",
    icon: React.createElement(FiTruck),
    img: "/parkingvehiclevisitor.png",
    link: "/solutions/parking-vehicle-visitor-management",
    tagline: "Smart parking. Secure vehicles. Seamless visitor experience.",
    tags: [
      "Parking Zones",
      "Slot Management",
      "Register Vehicle",
      "Vehicle In / Out",
      "Visitor Pass",
      "Visit Logs"
    ],
    whatICanDoDetails: [
      {
        title: "Parking Zone Management",
        desc: "Create and manage multiple parking zones, floors and parking areas."
      },
      {
        title: "Slot Management",
        desc: "Configure parking slots, availability, allocation rules and occupancy status."
      },
      {
        title: "Vehicle Registration",
        desc: "Register employee, resident and visitor vehicles with complete details."
      },
      {
        title: "Vehicle In / Out",
        desc: "Track vehicle entry and exit with timestamps, QR codes and gate validation."
      },
      {
        title: "Visitor Management",
        desc: "Pre-register visitors, issue digital visitor passes and monitor visits."
      },
      {
        title: "Blacklist Vehicles",
        desc: "Restrict unauthorized or blacklisted vehicles from entering the premises."
      },
      {
        title: "Live Parking Occupancy",
        desc: "Monitor occupied, available and reserved parking slots in real time."
      },
      {
        title: "Reports & Analytics",
        desc: "Generate parking, vehicle and visitor reports with real-time insights."
      }
    ],
    whatICanDo: [],
    keyFeatures: [
      "Parking Zone Management – Organize parking areas, floors and dedicated parking spaces.",
      "Slot Management – Manage slot allocation, availability and occupancy in real time.",
      "Vehicle Registration – Register employee, resident and visitor vehicles with complete records.",
      "Vehicle Entry & Exit – Track vehicle movement with automated check-in and check-out.",
      "Visitor Pass Management – Generate digital visitor passes with QR code verification.",
      "QR Code Access – Enable secure vehicle and visitor access using QR codes.",
      "Automated Barrier Integration – Automate gate operations with smart barrier control.",
      "Host Notifications – Notify hosts instantly when visitors arrive or depart.",
      "Real-time Alerts – Receive alerts for unauthorized or blacklisted vehicle entries.",
      "Reports & Analytics – View parking utilization, vehicle activity and visitor statistics."
    ],
    benefits: [
      "Optimize parking utilization and maximize space efficiency.",
      "Enhance security with controlled vehicle and visitor access.",
      "Reduce congestion and improve traffic flow.",
      "Deliver a seamless visitor experience from entry to exit.",
      "Maintain digital records with audit-ready logs.",
      "Make better operational decisions using real-time analytics."
    ]
  },
  {
    title: "Occupant Management",
    description: "Manage occupants, leases and services from one platform.",
    modalDescription: "FacilityCore's Occupant Management module helps you manage occupant profiles, lease agreements, payments, maintenance requests, visitors and support services—all from a centralized platform. Improve resident experience, streamline operations and gain complete visibility across your property.",
    icon: React.createElement(FiHome),
    img: "/occupantmanagement.png",
    link: "/solutions/occupant-management",
    tagline: "Manage every occupant. Elevate every experience.",
    tags: [
      "Occupancy Profile",
      "Lease Management",
      "Payment History",
      "Asset & Maintenance",
      "Visitor Management",
      "Support Staff"
    ],
    whatICanDoDetails: [
      {
        title: "Occupancy Profile",
        desc: "Maintain complete occupant profiles including family details, emergency contacts and KYC documents."
      },
      {
        title: "Lease Management",
        desc: "Manage lease agreements, renewals, move-in/move-out processes and document records."
      },
      {
        title: "Occupant Directory",
        desc: "View active and inactive occupants, communication history and unit allocation."
      },
      {
        title: "Payment Management",
        desc: "Track rent collection, payment history, dues, penalties and multiple payment methods."
      },
      {
        title: "Asset & Maintenance",
        desc: "Monitor unit assets, maintenance requests, warranties, service history and preventive schedules."
      },
      {
        title: "Material Movement",
        desc: "Track issued materials, consumption, stock deductions and request history."
      },
      {
        title: "Visitor Management",
        desc: "Manage visitor registrations, QR-based visitor passes, check-in/check-out and visit history."
      },
      {
        title: "Support Staff",
        desc: "Assign housekeeping, maintenance and security staff while tracking attendance and schedules."
      }
    ],
    whatICanDo: [],
    keyFeatures: [
      "Occupancy Profile – Maintain complete occupant records, family information and KYC documents.",
      "Lease Management – Manage lease creation, renewals, agreements and move-in/move-out processes.",
      "Occupant Directory – View occupant status, communication history and unit allocation.",
      "Payment History – Track rent collection, payment receipts, dues, penalties and analytics.",
      "Asset & Maintenance – Manage unit assets, maintenance requests and preventive maintenance schedules.",
      "Material Movement – Monitor material issues, returns, stock consumption and inventory history.",
      "Visitor Management – Handle visitor registration, digital visitor passes and live check-in/check-out.",
      "Support Staff Management – Assign and monitor maintenance, housekeeping and security staff."
    ],
    benefits: [
      "Deliver a better occupant experience and satisfaction.",
      "Improve lease collection and reduce outstanding dues.",
      "Streamline maintenance and service request management.",
      "Enhance security with visitor and access control.",
      "Gain complete visibility over occupants and property operations.",
      "Make better decisions using real-time analytics and reports.",
      "Increase occupant retention through better engagement.",
      "Enable seamless communication between occupants and management."
    ]
  },
  {
    title: "CRM Management & Task Management",
    description: "Manage leads, customers, sales and tasks in one platform.",
    modalDescription: "FacilityCore's CRM Management & Task Management module helps you manage your complete sales lifecycle—from lead capture to job completion. Track customers, quotations, tasks, employees and service delivery in one centralized platform with real-time visibility.",
    icon: React.createElement(FiBriefcase),
    img: "/crmtaskmanagement.png",
    link: "/solutions/crm-task-management",
    tagline: "Convert Leads. Win Customers. Deliver Services. Track Tasks.",
    tags: [
      "Service / Product",
      "Customers",
      "Leads",
      "Quotations",
      "Task Management",
      "Reports"
    ],
    whatICanDoDetails: [
      {
        title: "Lead Management",
        desc: "Capture leads from multiple sources and track them through every stage of the sales pipeline."
      },
      {
        title: "Customer Management",
        desc: "Store customer profiles, contact details, communication history and service records."
      },
      {
        title: "Quotation Management",
        desc: "Create, send and convert professional quotations into confirmed sales orders."
      },
      {
        title: "Task Assignment",
        desc: "Assign service tasks to employees or technicians with schedules and priorities."
      },
      {
        title: "Progress Tracking",
        desc: "Monitor task status, employee activities and job completion in real time."
      },
      {
        title: "Employee Management",
        desc: "Manage technicians, workloads, schedules and field assignments efficiently."
      },
      {
        title: "Reports & Analytics",
        desc: "Generate sales reports, lead analytics, task summaries and performance dashboards."
      },
      {
        title: "End-to-End Workflow",
        desc: "Track every stage from lead creation to sale conversion, task execution and customer feedback."
      }
    ],
    whatICanDo: [],
    keyFeatures: [
      "Service / Product – Manage services, pricing, packages, taxes and warranties.",
      "Customer Management – Maintain customer profiles, contacts, communication logs and notes.",
      "Company Management – Manage company accounts, multiple locations and billing information.",
      "Lead Management – Capture, qualify, assign and track leads until conversion.",
      "Quotation Management – Create quotations, define taxes, validate pricing and convert to sales.",
      "Task Management – Create, assign, schedule and monitor tasks until completion.",
      "Employee Assignment – Allocate technicians based on workload and availability.",
      "Workflow Automation – Convert leads into sales, create tasks and track job execution.",
      "Reports & Analytics – Analyze sales, task performance, lead conversion and revenue trends.",
      "Sales Dashboard – Monitor leads, quotations, conversions, revenue and monthly performance."
    ],
    benefits: [
      "Increase lead-to-sale conversion rates.",
      "Track every task in real time.",
      "Improve employee productivity.",
      "Deliver better customer satisfaction.",
      "Manage the complete service lifecycle in one platform.",
      "Make data-driven sales decisions.",
      "Increase revenue and business growth.",
      "Centralize customer data and communication."
    ]
  },
  {
    title: "Vendor Management",
    description: "Manage vendors, contracts, and service providers.",
    modalDescription: "FacilityCore's Vendor Management module helps you manage your external contractors, track their compliance documents, assign work orders, and log service payments—all from a single platform.",
    icon: React.createElement(FiUsers),
    img: "/sectionpagedashboard.png",
    link: "/solutions/vendor-management",
    tagline: "Manage contractors. Verify compliance. Track performance.",
    tags: [
      "Vendor Database",
      "Compliance Documents",
      "Work Allocation",
      "Vendor Ratings",
      "Payment Tracking",
      "Performance Audits"
    ],
    whatICanDoDetails: [
      { title: "Centralize Vendor Directory", desc: "Maintain all contact info, trade categories, and contracts in one search-friendly list." },
      { title: "Verify Compliance Docs", desc: "Upload and track insurance certificates, tax compliance, and local licenses with auto-expiry alerts." },
      { title: "Dispatch Work Orders", desc: "Assign jobs directly to vendors, monitor response times, and approve resolutions online." },
      { title: "Track Billing & Payments", desc: "Process contractor invoices, track payments, and review actual spend against budgets." },
      { title: "Assess Vendor Quality", desc: "Collect stakeholder feedback and rate contractor performance based on SLA speed and quality." },
      { title: "Streamline Communication", desc: "Provide a vendor communication trail to keep everyone aligned on job details and scope." }
    ],
    whatICanDo: [],
    keyFeatures: [
      "Vendor Database – Centralize onboarding, classifications, locations, and documents.",
      "Compliance Tracking – Auto-alerts for expiring vendor insurance and licenses.",
      "Contractor Work Orders – Assign and monitor external work orders and SLAs.",
      "Invoice & Payment Logs – Upload vendor bills, track approvals, and log payments.",
      "SLA Performance Ratings – Track response times, completion rates, and feedback.",
      "Secure Documents – Archive historical contractor agreements and pricing lists."
    ],
    benefits: [
      "Better control over contractor compliance and liability",
      "Reduced time spent on manual dispatching and follow-ups",
      "Improved work quality with ratings and performance logs",
      "Greater transparency on vendor expenditures and contracts"
    ]
  },
  {
    title: "Compliance Logs",
    description: "Maintain audit-ready compliance records.",
    modalDescription: "FacilityCore's Compliance Logs module helps you verify local code safety inspections, fire safety compliance, track certifications, and schedule recurring audits to ensure your building remains fully compliant and safe.",
    icon: React.createElement(FiClipboard),
    img: "/sectionpagedashboard.png",
    link: "/solutions/compliance-logs",
    tagline: "Stay safe. Ensure building code compliance. Simplify audits.",
    tags: [
      "Safety Audits",
      "Inspection Logs",
      "Certifications",
      "Fire Safety",
      "Asset Compliance",
      "Audit Reports"
    ],
    whatICanDoDetails: [
      { title: "Automate Inspections", desc: "Setup periodic checklists for elevator inspections, fire safety, and HVAC certifications." },
      { title: "Log Audit Trails", desc: "Record every compliance task with digital timestamps, signatures, and document uploads." },
      { title: "Track Certification Expiries", desc: "Receive automated email and system alerts before crucial building certificates expire." },
      { title: "Manage Risk Checks", desc: "Run proactive hazards inspections to mitigate safety risks and code violations." },
      { title: "Generate Audit Reports", desc: "Export comprehensive compliance history logs for municipal inspectors or internal audits." },
      { title: "Enforce Checklists", desc: "Force technicians to complete step-by-step verification lists during physical inspections." }
    ],
    whatICanDo: [],
    keyFeatures: [
      "Inspection Schedules – Plan recurring compliance reviews and safety checklists.",
      "Certificate Register – Track safety certificates, permit approvals, and renewal dates.",
      "Digital Sign-Offs – Log inspector names, dates, digital signatures, and comments.",
      "Fire & Safety Logs – Dedicated logging for sprinklers, alarms, extinguishers, and exits.",
      "Compliance Reports – Instant summaries of inspections, outstanding tasks, and audit logs.",
      "Historical Archives – Search and review all past inspections to verify remediation."
    ],
    benefits: [
      "Always remain prepared for government or safety audits",
      "Reduce liability and risk of municipal code compliance penalties",
      "Ensure building equipment runs safely for all occupants",
      "Automated tracking eliminates missed inspection deadlines"
    ]
  }
];
