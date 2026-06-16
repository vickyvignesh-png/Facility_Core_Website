import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiSmartphone, FiBarChart2, FiTarget, FiClock, 
  FiGitCommit, FiTrendingUp, FiCpu, FiUserCheck,
  FiCheckCircle, FiAlertCircle, FiChevronRight, FiDownload, FiCheck
} from 'react-icons/fi';
import '../../styles/Features.css';

const Features = () => {
  const list = [
    {
      id: 'mobile',
      tag: 'Field Operations',
      name: 'Fully Functional Mobile App',
      desc: 'Empower your field technicians with standard operating procedures (SOPs), offline capability, route navigation, and instant photo logs to solve tickets faster.',
      visual: (
        <div className="w-full max-w-[320px] aspect-[9/16] bg-slate-900 rounded-[36px] p-3 shadow-2xl border-4 border-slate-800 relative overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20" />
          
          <div className="w-full h-full bg-[#F5F7FA] rounded-[28px] overflow-hidden flex flex-col p-4 pt-8 text-left text-xs">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-[10px] text-gray-400 font-semibold">Technician View</p>
                <h4 className="font-extrabold text-gray-800">My Work Orders</h4>
              </div>
              <span className="w-6 h-6 rounded-full bg-[#1D4FA3]/10 text-[#1D4FA3] flex items-center justify-center font-bold">JD</span>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold text-[9px] rounded-full">In Progress</span>
                  <span className="text-[9px] text-gray-400 font-semibold">#WO-2041</span>
                </div>
                <h5 className="font-bold text-gray-800">HVAC Compressor Vibration</h5>
                <p className="text-[10px] text-gray-400">Server Room C • Building 2</p>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-[#1D4FA3] h-full w-2/3" />
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 bg-rose-100 text-rose-800 font-bold text-[9px] rounded-full">High Priority</span>
                  <span className="text-[9px] text-gray-400 font-semibold">#WO-2043</span>
                </div>
                <h5 className="font-bold text-gray-800">Elevator B Calibration</h5>
                <p className="text-[10px] text-gray-400">Main Lobby • Building 1</p>
              </div>
            </div>

            <div className="mt-auto bg-[#1D4FA3] text-white p-3 rounded-xl text-center font-bold shadow-md cursor-pointer hover:bg-opacity-95 transition-all">
              Update Task Status
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'analytics',
      tag: 'Analytics & Insights',
      name: 'Real-Time Dashboard Analytics',
      desc: 'Gain actionable insights with custom operational dashboards showing completion times, technician load, and active backlogs.',
      visual: (
        <div className="w-full max-w-[420px] bg-white rounded-2xl p-6 border border-gray-100 shadow-lg text-left text-xs">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold text-gray-800 text-sm">Monthly Operational Performance</h4>
            <span className="text-[10px] bg-[#69BC45]/10 text-[#69BC45] font-bold px-2.5 py-1 rounded-lg">Live</span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 p-4 rounded-xl flex flex-col justify-between">
              <span className="text-gray-400 font-bold text-[10px]">Uptime Rate</span>
              <span className="text-2xl font-extrabold text-[#111827] mt-1">98.8%</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl flex flex-col justify-between">
              <span className="text-gray-400 font-bold text-[10px]">Completed WO</span>
              <span className="text-2xl font-extrabold text-[#111827] mt-1">1,482</span>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-1">
                <span>Preventive compliance</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#69BC45] h-full w-[85%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-1">
                <span>Average resolution speed</span>
                <span>92%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#1D4FA3] h-full w-[92%]" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'qr',
      tag: 'Asset Intelligence',
      name: 'Instant QR Code Asset Scanning',
      desc: 'Affix QR codes to hardware. Scan to pull up complete repair histories, technical manuals, safety SOPs, and log new tasks immediately.',
      visual: (
        <div className="w-full max-w-[340px] bg-white rounded-2xl p-6 border border-gray-100 shadow-lg relative overflow-hidden flex flex-col items-center text-center">
          <div className="scanner-overlay w-32 h-32 border-2 border-[#1D4FA3]/30 rounded-xl relative flex items-center justify-center mb-4 bg-slate-50">
            {/* Mock QR SVG */}
            <svg viewBox="0 0 100 100" className="w-24 h-24 text-slate-800">
              <path d="M10 10 h20 v20 h-20 z M15 15 h10 v10 h-10 z M70 10 h20 v20 h-20 z M75 15 h10 v10 h-10 z M10 70 h20 v20 h-20 z M15 75 h10 v10 h-10 z" fill="currentColor" />
              <path d="M45 15 h10 v10 h-10 z M45 35 h15 v5 h-15 z M35 45 h10 v15 h-10 z M55 55 h20 v5 h-20 z M65 75 h10 v10 h-10 z M45 70 h10 v5 h-10 z" fill="currentColor" />
            </svg>
          </div>
          <div className="text-xs">
            <h4 className="font-bold text-gray-800 mb-1">Chiller Unit #CH-9041</h4>
            <p className="text-[10px] text-gray-400 mb-3 font-semibold">Location: Roof Deck East</p>
            <span className="px-3 py-1 bg-[#1D4FA3]/10 text-[#1D4FA3] font-bold rounded-full text-[10px]">
              Ready to Log Task
            </span>
          </div>
        </div>
      )
    },
    {
      id: 'sla',
      tag: 'Service Level Agreement',
      name: 'Proactive SLA Compliance Monitoring',
      desc: 'Establish custom response and resolution thresholds. Automatically trigger escalations and notifications before deadlines pass.',
      visual: (
        <div className="w-full max-w-[380px] bg-white rounded-2xl p-6 border border-gray-100 shadow-lg text-left text-xs">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
            <span className="font-bold text-gray-800 text-sm">SLA Escalation Node</span>
            <span className="px-2 py-0.5 bg-rose-100 text-rose-800 text-[10px] font-bold rounded-full flex items-center gap-1">
              <FiAlertCircle /> Alert Status
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <h5 className="font-bold text-gray-800">Critical Server Room Temp</h5>
                <p className="text-[10px] text-gray-400 mt-0.5">Assigned to: HVAC Lead</p>
              </div>
              <span className="text-[10px] font-bold text-rose-500">12m Left</span>
            </div>

            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-rose-500 h-full w-[90%] animate-pulse" />
            </div>

            <div className="bg-[#F5F7FA] p-3 rounded-lg flex items-center justify-between mt-2 text-[10px]">
              <span className="text-gray-500 font-semibold">Next Step: Escalation to Director</span>
              <FiChevronRight className="text-gray-400" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'workflow',
      tag: 'Automation',
      name: 'No-Code Workflow Automation',
      desc: 'Create intelligent routing rules in seconds. Dispatch work orders to the right specialist based on category, location, or severity.',
      visual: (
        <div className="w-full max-w-[400px] bg-white rounded-2xl p-6 border border-gray-100 shadow-lg text-left text-xs">
          <h4 className="font-bold text-gray-800 text-sm mb-6">Dispatch Routing Rule</h4>
          
          <div className="flex flex-col items-stretch gap-3 relative">
            <div className="bg-[#1D4FA3]/10 text-[#1D4FA3] p-3 rounded-xl border border-[#1D4FA3]/20 font-bold">
              IF Category = "Electrical"
            </div>
            
            <div className="w-0.5 h-6 bg-slate-300 mx-auto" />
            
            <div className="bg-[#69BC45]/10 text-[#69BC45] p-3 rounded-xl border border-[#69BC45]/20 font-bold">
              THEN Route to Electrician Group
            </div>

            <div className="w-0.5 h-6 bg-slate-300 mx-auto" />

            <div className="bg-slate-100 text-gray-600 p-3 rounded-xl border border-gray-200 font-bold flex justify-between items-center">
              <span>Notify Property Director</span>
              <FiCheckCircle className="text-[#69BC45]" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'reports',
      tag: 'Reporting & BI',
      name: 'Robust Reports & Business Intelligence',
      desc: 'Export clean PDF summaries, utility cost tracking, and work order audit reports to keep stakeholders informed and compliant.',
      visual: (
        <div className="w-full max-w-[360px] bg-white rounded-2xl p-6 border border-gray-100 shadow-lg text-left text-xs">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
            <h4 className="font-bold text-gray-800 text-sm">Monthly Cost Report</h4>
            <button className="flex items-center gap-1.5 text-xs text-[#1D4FA3] hover:text-[#69BC45] font-bold">
              <FiDownload /> Export
            </button>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <p className="text-[10px] text-gray-400 font-semibold">Utility Consumption</p>
              <h5 className="text-lg font-extrabold text-gray-800">$12,450</h5>
            </div>
            <span className="px-2 py-1 bg-[#69BC45]/10 text-[#69BC45] font-bold rounded-lg text-[10px]">
              -8% vs Last Month
            </span>
          </div>

          <div className="h-16 w-full flex items-end gap-2 pt-2">
            <div className="h-6 w-full bg-slate-100 rounded-t" />
            <div className="h-10 w-full bg-slate-100 rounded-t" />
            <div className="h-8 w-full bg-slate-100 rounded-t" />
            <div className="h-12 w-full bg-[#1D4FA3] rounded-t" />
            <div className="h-16 w-full bg-[#69BC45] rounded-t" />
          </div>
        </div>
      )
    },
    {
      id: 'integrations',
      tag: 'Connection Hub',
      name: 'BMS & IoT Integrations API',
      desc: 'Seamlessly sync with building automation systems (BMS), smart temperature sensors, utility meters, and standard corporate ERP platforms.',
      visual: (
        <div className="w-full max-w-[380px] bg-slate-900 rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col items-center">
          <div className="relative w-44 h-44 flex items-center justify-center">
            
            {/* Pulsing glow background */}
            <div className="absolute w-36 h-36 rounded-full bg-[#1D4FA3]/10 blur-[16px] pulse-node-glow" />
            
            {/* SVG Connecting lines */}
            <svg viewBox="0 0 100 100" className="absolute w-full h-full inset-0">
              <line x1="50" y1="50" x2="15" y2="20" stroke="rgba(29, 79, 163, 0.4)" strokeWidth="1.5" className="connect-line-flow" />
              <line x1="50" y1="50" x2="85" y2="20" stroke="rgba(105, 188, 69, 0.4)" strokeWidth="1.5" className="connect-line-flow" />
              <line x1="50" y1="50" x2="50" y2="85" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" className="connect-line-flow" />
            </svg>

            {/* Central hub */}
            <div className="absolute w-12 h-12 rounded-full bg-white text-slate-800 flex items-center justify-center font-bold text-xs shadow-lg z-10">
              Core
            </div>

            {/* Nodes */}
            <div className="absolute top-2 left-2 w-8 h-8 rounded-lg bg-[#1D4FA3]/20 border border-[#1D4FA3]/40 text-[#2563eb] flex items-center justify-center font-bold text-[10px]">
              BMS
            </div>
            <div className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-[#69BC45]/20 border border-[#69BC45]/40 text-[#69BC45] flex items-center justify-center font-bold text-[10px]">
              IoT
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-white/10 border border-white/20 text-white flex items-center justify-center font-bold text-[10px]">
              ERP
            </div>

          </div>
          <span className="text-[10px] text-gray-400 font-bold mt-2">Active API Sync Pipeline</span>
        </div>
      )
    },
    {
      id: 'roles',
      tag: 'Access & Security',
      name: 'Granular Role & Permission Management',
      desc: 'Configure secure portals with custom access views for system administrators, service technicians, third-party contractors, and property tenants.',
      visual: (
        <div className="w-full max-w-[360px] bg-white rounded-2xl p-6 border border-gray-100 shadow-lg text-left text-xs">
          <h4 className="font-bold text-gray-800 text-sm mb-4">User Roles Controls</h4>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2.5 bg-[#1D4FA3]/5 rounded-xl border border-[#1D4FA3]/15">
              <span className="font-bold text-[#1D4FA3]">Administrator Portal</span>
              <span className="px-2 py-0.5 bg-[#69BC45] text-white text-[9px] font-bold rounded-full">Full Access</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-gray-100">
              <span className="font-semibold text-gray-800">Technician View</span>
              <div className="flex gap-1">
                <span className="px-1.5 py-0.5 bg-gray-200 text-gray-600 text-[8px] font-bold rounded-full">SOPs</span>
                <span className="px-1.5 py-0.5 bg-gray-200 text-gray-600 text-[8px] font-bold rounded-full">Log WO</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-gray-100">
              <span className="font-semibold text-gray-800">Tenant Desk</span>
              <span className="px-1.5 py-0.5 bg-gray-200 text-gray-600 text-[8px] font-bold rounded-full">Read-Only</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-bold text-[#69BC45] uppercase tracking-wider">
            Operational Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight mt-3 mb-5">
            Powerful Features Built for Modern Facilities
          </h2>
          <p className="text-base text-[#6B7280] font-medium leading-relaxed">
            Configure the platform to match your operational patterns. Out-of-the-box features designed to streamline every detail of asset management.
          </p>
        </div>

        {/* Alternating Feature Blocks */}
        <div className="flex flex-col gap-28">
          {list.map((feat, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={feat.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Visual Column */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-6 flex justify-center ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}
                >
                  {feat.visual}
                </motion.div>

                {/* Text Content Column */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-6 flex flex-col text-left ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}
                >
                  <span className="text-xs font-bold text-[#1D4FA3] uppercase tracking-widest mb-3">
                    {feat.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#111827] tracking-tight mb-5 leading-tight">
                    {feat.name}
                  </h3>
                  <p className="text-base text-[#6B7280] font-medium leading-relaxed mb-6">
                    {feat.desc}
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2.5 text-sm font-semibold text-[#111827]">
                      <FiCheck className="text-[#69BC45] w-4 h-4 shrink-0" />
                      <span>Enterprise-ready performance</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm font-semibold text-[#111827]">
                      <FiCheck className="text-[#69BC45] w-4 h-4 shrink-0" />
                      <span>Fully customizable configurations</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
