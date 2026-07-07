import React from "react";
import {
  FiBox,
  FiUserCheck,
  FiUserPlus,
  FiUsers,
  FiMapPin,
  FiActivity,
  FiTruck,
  FiGrid,
  FiLock,
  FiSliders,
  FiAward
} from "react-icons/fi";

export const platformPricing = {
  fee: "₹550",
  period: "Month",
  features: [
    "Business Suite",
    "Business Locations",
    "Dashboard",
    "Reports",
    "Notifications",
    "Mobile App",
    "Roles & Permissions"
  ],
  includedUsers: {
    web: "3 Web Users",
    mobile: "2 Mobile Users"
  },
  additionalPricing: {
    web: "Web User ₹120",
    mobile: "Mobile User ₹90"
  }
};

export const propertyPackagesTable = {
  columns: [
    { id: "starter", name: "Starter", subtitle: "For small properties" },
    { id: "professional", name: "Professional", subtitle: "For growing hubs", highlighted: true },
    { id: "enterprise", name: "Enterprise", subtitle: "For large complexes" }
  ],
  rows: [
    { label: "Platform Fee", starter: "₹550 / mo", professional: "₹550 / mo", enterprise: "₹550 / mo" },
    { label: "Package Price", starter: "₹1,200 / mo", professional: "₹2,500 / mo", enterprise: "Custom" },
    { label: "Total Price", starter: "₹1,750 / mo", professional: "₹3,050 / mo", enterprise: "Custom Pricing" },
    { label: "Assets Limit", starter: "Up to 500", professional: "Up to 1,500", enterprise: "Unlimited" },
    { label: "Occupants Limit", starter: "Up to 200", professional: "Up to 800", enterprise: "Unlimited" },
    { label: "Web Users", starter: "3 Included (+ ₹120/ea)", professional: "5 Included (+ ₹120/ea)", enterprise: "Custom Allocation" },
    { label: "Mobile Users", starter: "2 Included (+ ₹90/ea)", professional: "10 Included (+ ₹90/ea)", enterprise: "Custom Allocation" },
    { label: "Asset & Maintenance Module", starter: true, professional: true, enterprise: true },
    { label: "Visitor Management Module", starter: true, professional: true, enterprise: true },
    { label: "Parking & Vehicle Module", starter: false, professional: true, enterprise: true },
    { label: "Vendor Management Module", starter: false, professional: false, enterprise: true },
    { label: "Compliance & Safety Logs", starter: false, professional: false, enterprise: true }
  ]
};

export const additionalCharges = [
  {
    title: "Additional Web User",
    price: "₹120",
    period: "month",
    description: "Full access to dashboard, settings, audits, and configuration reports."
  },
  {
    title: "Additional Mobile User",
    price: "₹90",
    period: "month",
    description: "On-the-go logging, check-ins, tasks execution, and barcode scans."
  },
  {
    title: "100 Assets Pack",
    price: "₹120",
    period: "month",
    description: "Add 100 extra trackable equipment, machines, or property assets."
  }
];

export const individualModules = [
  {
    icon: React.createElement(FiBox),
    name: "Asset & Maintenance",
    price: "₹499",
    platformFee: "₹550",
    total: "₹1,049"
  },
  {
    icon: React.createElement(FiUsers),
    name: "Occupant Management",
    price: "₹399",
    platformFee: "₹550",
    total: "₹949"
  },
  {
    icon: React.createElement(FiUserPlus),
    name: "Visitor Management",
    price: "₹299",
    platformFee: "₹550",
    total: "₹849"
  },
  {
    icon: React.createElement(FiTruck),
    name: "Parking & Vehicle",
    price: "₹349",
    platformFee: "₹550",
    total: "₹899"
  },
  {
    icon: React.createElement(FiGrid),
    name: "Vendor Management",
    price: "₹249",
    platformFee: "₹550",
    total: "₹799"
  },
  {
    icon: React.createElement(FiActivity),
    name: "Compliance Logs",
    price: "₹199",
    platformFee: "₹550",
    total: "₹749"
  }
];

export const businessPackagesTable = {
  columns: [
    { id: "starter", name: "CRM Starter", subtitle: "Basic CRM operations" },
    { id: "professional", name: "Business Pro", subtitle: "Advanced workflows", highlighted: true },
    { id: "enterprise", name: "Business Plus", subtitle: "Custom enterprise CRM" }
  ],
  rows: [
    { label: "Platform Fee", starter: "₹550 / mo", professional: "₹550 / mo", enterprise: "₹550 / mo" },
    { label: "Package Price", starter: "₹1,500 / mo", professional: "₹3,000 / mo", enterprise: "Custom" },
    { label: "Total Price", starter: "₹2,050 / mo", professional: "₹3,550 / mo", enterprise: "Custom Pricing" },
    { label: "Contacts & Leads", starter: "Up to 1,000", professional: "Up to 5,000", enterprise: "Unlimited" },
    { label: "Quotations & Invoices", starter: "Up to 50 / mo", professional: "Unlimited", enterprise: "Unlimited" },
    { label: "Task Workflows", starter: "Standard Tasks", professional: "Advanced Automations", enterprise: "Custom Triggers" },
    { label: "Web Users", starter: "3", professional: "5", enterprise: "Custom" },
    { label: "Mobile Users", starter: "2", professional: "10", enterprise: "Custom" },
    { label: "CRM Module", starter: true, professional: true, enterprise: true },
    { label: "Task Management Module", starter: true, professional: true, enterprise: true },
    { label: "Integrations & API", starter: false, professional: true, enterprise: true },
    { label: "SLA Custom Support", starter: false, starter: false, enterprise: true }
  ]
};

export const fmCompanyPackages = [
  {
    name: "Essential FM",
    price: "₹4,999",
    period: "/ month",
    description: "Perfect for growing facility management firms handling small properties.",
    features: [
      "Up to 5 Properties",
      "2,000 Assets",
      "10 Web Users",
      "20 Mobile Users",
      "Standard Email Support"
    ],
    cta: "Book Demo"
  },
  {
    name: "Professional FM",
    price: "₹9,999",
    period: "/ month",
    description: "Ideal for mid-sized FM companies managing multiple commercial buildings.",
    features: [
      "Up to 15 Properties",
      "10,000 Assets",
      "25 Web Users",
      "50 Mobile Users",
      "Priority 24/7 Support",
      "Advanced Analytics Dashboard"
    ],
    cta: "Book Demo",
    highlighted: true
  },
  {
    name: "Enterprise FM",
    price: "Custom",
    period: " Pricing",
    description: "Designed for large-scale global FM corporations requiring custom scale.",
    features: [
      "Unlimited Properties",
      "Unlimited Assets",
      "Custom Users Allocation",
      "Dedicated Account Manager",
      "Custom API Integrations",
      "99.9% Uptime SLA"
    ],
    cta: "Talk to Sales",
    contactButton: true
  }
];
