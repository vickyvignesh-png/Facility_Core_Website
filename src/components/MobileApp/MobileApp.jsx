import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSmartphone, FiUser, FiBriefcase, FiSend, FiPlus, FiCheck } from 'react-icons/fi';
import '../../styles/MobileApp.css';

const MobileApp = () => {
  const [activeTab, setActiveTab] = useState('admin');

  const apps = {
    admin: {
      title: 'FC Admin App',
      description: 'Review operational dashboards, authorize large PO expenditures, schedule emergency shifts, and track team GPS routes in real time.',
      buttonText: 'Admin App View',
      screen: (
        <div className="w-full h-full bg-[#111827] text-white flex flex-col p-4 pt-8 text-[11px] justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-gray-800">
              <div>
                <p className="text-gray-500 text-[9px] font-bold">Admin Portal</p>
                <h4 className="font-extrabold text-sm">Site Director</h4>
              </div>
              <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">SD</span>
            </div>

            <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700/40 flex flex-col gap-1">
              <span className="text-gray-500 font-bold text-[8px]">Daily Cost Estimate</span>
              <span className="text-lg font-black text-white">$4,850.00</span>
              <span className="text-[8px] text-emerald-400 font-semibold mt-0.5">✔ On Track</span>
            </div>

            <div className="space-y-2">
              <h5 className="font-bold text-gray-400 text-[10px]">Awaiting Sign-off</h5>
              <div className="bg-gray-850 p-2.5 rounded-lg border border-gray-800 flex justify-between items-center">
                <div>
                  <p className="font-bold text-white text-[10px]">Cooler B Refurbish</p>
                  <p className="text-[8px] text-gray-500 font-semibold">Budget: $1,200</p>
                </div>
                <button className="px-2.5 py-1 bg-[#69BC45] hover:bg-opacity-95 text-white font-bold rounded-lg text-[9px]">
                  Approve
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-850 p-3 rounded-xl border border-gray-800 flex justify-between items-center text-[9px] text-gray-400">
            <span>System Status: Optimal</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#69BC45] animate-pulse" />
          </div>
        </div>
      )
    },
    employee: {
      title: 'FC Employee App',
      description: 'Equip technicians with direct schedule notifications, digital checklists, asset manuals, photo upload fields, and offline signature capabilities.',
      buttonText: 'Technician View',
      screen: (
        <div className="w-full h-full bg-[#F5F7FA] text-slate-800 flex flex-col p-4 pt-8 text-[11px] justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-gray-200">
              <div>
                <p className="text-gray-400 text-[9px] font-bold">My Tasks</p>
                <h4 className="font-extrabold text-sm text-slate-900">John Doe</h4>
              </div>
              <span className="px-2 py-0.5 bg-[#1D4FA3]/10 text-[#1D4FA3] font-bold text-[9px] rounded-full">Level 2 Tech</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2">
              <h5 className="font-bold text-slate-900">Fire-Life Safety Audit</h5>
              
              <div className="space-y-1.5 text-gray-600">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-[#1D4FA3] focus:ring-[#1D4FA3]" />
                  <span>Verify extinguisher pressure</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-[#1D4FA3] focus:ring-[#1D4FA3]" />
                  <span>Inspect exit light batteries</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-[#1D4FA3] focus:ring-[#1D4FA3]" />
                  <span>Log check pressure levels</span>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-[#1D4FA3] text-white p-2.5 rounded-xl text-center font-bold shadow-md cursor-pointer hover:bg-opacity-95 transition-all text-[10px]">
            Submit Audit Logs
          </div>
        </div>
      )
    },
    occupant: {
      title: 'FC Occupant App',
      description: 'Allow building tenants and visitors to log repair requests in seconds. Simply scan a room QR code, write the problem description, and submit.',
      buttonText: 'Tenant Desk',
      screen: (
        <div className="w-full h-full bg-white text-slate-800 flex flex-col p-4 pt-8 text-[11px] justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <div>
                <p className="text-gray-400 text-[9px] font-bold">New Ticket</p>
                <h4 className="font-extrabold text-sm text-slate-900">Request Service</h4>
              </div>
              <FiUser className="text-gray-400 w-4 h-4" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-500 text-[8px] uppercase">Service Type</label>
              <div className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-semibold">
                Plumbing / Leakage
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-500 text-[8px] uppercase">Description</label>
              <textarea 
                placeholder="Describe the problem here..."
                disabled
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 h-16 resize-none outline-none font-medium placeholder-gray-400"
                value="Water leakage in kitchen faucet, leaking continuously."
              />
            </div>
          </div>

          <div className="bg-[#1D4FA3] text-white p-2.5 rounded-xl text-center font-bold shadow-md flex items-center justify-center gap-1.5 cursor-pointer text-[10px]">
            <FiSend /> Send Request
          </div>
        </div>
      )
    }
  };

  return (
    <section id="resources" className="py-24 bg-[#F5F7FA] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text Info and Switch Controls */}
          <div className="lg:col-span-6 text-left">
            <span className="text-sm font-bold text-[#1D4FA3] uppercase tracking-wider mb-3 block">
              Manage Facility Operations Anywhere
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.15] mb-6">
              Connected Operations on Any Mobile Screen
            </h2>
            <p className="text-base text-[#6B7280] font-medium leading-relaxed mb-8">
              Empower managers, technicians, occupants, and stakeholders with real-time access to facility operations. Streamline updates, checklists, and approvals.
            </p>

            {/* Tabs Selector Buttons */}
            <div className="flex flex-col gap-3 max-w-md">
              {Object.keys(apps).map((key) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`p-4 rounded-xl text-left border transition-all duration-300 flex items-start gap-4 ${
                      isActive 
                        ? 'bg-white border-[#1D4FA3] shadow-md' 
                        : 'bg-transparent border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-lg ${
                      isActive ? 'bg-[#1D4FA3]/10 text-[#1D4FA3]' : 'bg-gray-200/50 text-gray-500'
                    }`}>
                      {key === 'admin' && <FiBriefcase />}
                      {key === 'employee' && <FiSmartphone />}
                      {key === 'occupant' && <FiUser />}
                    </div>
                    <div>
                      <h4 className={`text-base font-bold ${isActive ? 'text-[#1D4FA3]' : 'text-gray-800'}`}>
                        {apps[key].title}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium leading-normal mt-1">
                        {apps[key].description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4 mt-8">
              <a 
                href="#demo"
                className="px-6 py-3 rounded-full bg-[#1D4FA3] hover:bg-opacity-95 text-white font-bold text-sm shadow-md transition-colors"
              >
                Book Demo
              </a>
              <a 
                href="#learn-more"
                className="px-6 py-3 rounded-full border border-gray-300 text-[#1D4FA3] font-bold text-sm hover:bg-gray-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column: High-fidelity mobile screen tabs visualization */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/16] bg-slate-900 rounded-[38px] p-3 shadow-2xl border-4 border-slate-800 relative overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20" />
              
              <div className="w-full h-full rounded-[28px] overflow-hidden bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full"
                  >
                    {apps[activeTab].screen}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileApp;
