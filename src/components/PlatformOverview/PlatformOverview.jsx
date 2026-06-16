import React from 'react';
import { motion } from 'framer-motion';
import { FiSmartphone, FiBarChart2, FiDatabase, FiCpu, FiTrendingUp, FiCheckSquare } from 'react-icons/fi';
import '../../styles/PlatformOverview.css';

const PlatformOverview = () => {
  const topics = [
    {
      title: 'Empower Your Mobile Workforce',
      desc: 'Give your field technicians the tools they need to execute tasks efficiently. Access assigned work orders, check asset manuals, update logs, upload files, scan QR codes, and record travel times directly from our offline-first mobile application.',
      points: [
        'Full offline sync capability',
        'Standard operating procedures (SOPs) on mobile screen',
        'Direct photo upload and signature capture'
      ],
      icon: <FiSmartphone className="w-5 h-5" />,
      visualType: 'mobile',
      color: 'from-brand-blue/10 to-brand-green/10'
    },
    {
      title: 'Turn Data Into Actionable Insights',
      desc: 'Track team backlog, monitor average response and resolution metrics, compare vendor performance, and review asset lifecycles in real-time. Make data-driven decisions that minimize operating costs and maximize building uptime.',
      points: [
        'Interactive charts and KPI cards',
        'Custom report builder with automated email scheduling',
        'Mean Time to Repair (MTTR) calculation'
      ],
      icon: <FiBarChart2 className="w-5 h-5" />,
      visualType: 'analytics',
      color: 'from-indigo-500/10 to-brand-blue/10'
    },
    {
      title: 'Complete Uptime & Asset Visibility',
      desc: 'Know where your machinery is, who is maintaining it, and when it was last audited. Store manual documentation, manufacturer warranties, depreciation schedules, and historical service reports under a single asset registry.',
      points: [
        'Nested location and parent-child hierarchy trees',
        'Warranty tracking with expiration alerts',
        'Spare parts inventory integration'
      ],
      icon: <FiDatabase className="w-5 h-5" />,
      visualType: 'visibility',
      color: 'from-brand-green/10 to-teal-500/10'
    },
    {
      title: 'Automate Routine Operations',
      desc: 'Create rules that route work orders to the right technician instantly. Connect FacilityCore with temperature, humidity, and vibration sensors to trigger preventative service requests automatically when readings cross safe levels.',
      points: [
        'Conditional drag-and-drop workflow builder',
        'BMS & IoT sensor live telemetry feeds',
        'Automatic vendor dispatch on threshold alarms'
      ],
      icon: <FiCpu className="w-5 h-5" />,
      visualType: 'automation',
      color: 'from-orange-500/10 to-rose-500/10'
    }
  ];

  return (
    <section id="platform-overview" className="py-24 bg-brand-bg relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-bold text-brand-blue uppercase tracking-widest">Platform Walkthrough</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark tracking-tight mt-2.5 mb-5">
            How FacilityCore Drives Excellence
          </h2>
          <p className="text-base text-brand-light font-medium leading-relaxed">
            A closer look at the key technologies powering modern operations, maintenance, and asset management.
          </p>
        </div>

        {/* Alternating Sections */}
        <div className="flex flex-col gap-28">
          {topics.map((topic, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center overflow-hidden py-4"
              >
                
                {/* Visual Column - Slides from Left if Even, Right if Odd */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}
                >
                  <div className={`overview-visual-box w-full max-w-[420px] aspect-[4/3.5] bg-gradient-to-br ${topic.color} p-6 border border-white flex items-center justify-center shadow-premium`}>
                    
                    {/* Render visual mockups dynamically in React styling */}
                    {topic.visualType === 'mobile' && (
                      <div className="w-[180px] h-[300px] bg-slate-900 rounded-[36px] p-2.5 border-[3px] border-slate-800 shadow-2xl relative flex flex-col justify-between overflow-hidden">
                        {/* Notch */}
                        <div className="w-20 h-4 bg-slate-800 rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20" />
                        
                        {/* Mobile content */}
                        <div className="flex-1 bg-slate-50 rounded-[28px] pt-5 px-3 pb-3 flex flex-col gap-2.5 text-left text-slate-800 relative z-10 overflow-hidden">
                          <span className="text-[8px] font-bold text-slate-400">TODAY'S TASKS</span>
                          {/* Active Work Order Card */}
                          <div className="bg-white rounded-xl p-2 border border-slate-100 shadow-sm flex flex-col gap-1">
                            <span className="text-[7px] font-bold px-1.5 py-0.5 bg-brand-blue/10 text-brand-blue rounded-full self-start">High Priority</span>
                            <span className="text-[9px] font-bold">Chiller Check #42</span>
                            <span className="text-[7px] text-brand-light flex items-center gap-0.5">Location: Basement B</span>
                          </div>
                          
                          {/* Checklist item */}
                          <div className="bg-white rounded-xl p-2 border border-slate-100 shadow-sm flex flex-col gap-1.5">
                            <span className="text-[7px] font-bold text-brand-light">SOP CHECKLIST</span>
                            <div className="flex items-center gap-1.5">
                              <span className="w-3.5 h-3.5 rounded bg-brand-green/20 text-brand-green flex items-center justify-center text-[8px] font-bold"><FiCheckSquare /></span>
                              <span className="text-[8px] font-semibold text-brand-dark">Read pressure gauge</span>
                            </div>
                            <div className="flex items-center gap-1.5 opacity-60">
                              <span className="w-3.5 h-3.5 rounded border border-slate-300 flex items-center justify-center text-[8px] font-bold"></span>
                              <span className="text-[8px] font-semibold text-brand-dark">Clean primary filters</span>
                            </div>
                          </div>
                          
                          {/* Bottom dispatcher button */}
                          <div className="mt-auto py-1.5 bg-brand-green text-white text-center text-[8px] font-bold rounded-lg shadow-sm">
                            Complete & Close
                          </div>
                        </div>
                      </div>
                    )}

                    {topic.visualType === 'analytics' && (
                      <div className="w-full bg-white rounded-2xl p-4 shadow-lg border border-slate-100 flex flex-col gap-3">
                        <div className="flex items-center justify-between border-b border-slate-50 pb-2">
                          <span className="text-[10px] font-bold text-brand-dark">SLA Compliance Rate</span>
                          <span className="text-[10px] font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">99.4% Target</span>
                        </div>
                        {/* Circular indicators */}
                        <div className="flex items-center justify-around py-1">
                          <div className="flex flex-col items-center">
                            <div className="w-12 h-12 flex items-center justify-center relative rounded-full border-[3px] border-slate-100 border-t-brand-blue border-r-brand-blue">
                              <span className="text-[9px] font-extrabold text-brand-dark">82%</span>
                            </div>
                            <span className="text-[8px] text-brand-light font-bold mt-1.5">Reactive</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-12 h-12 flex items-center justify-center relative rounded-full border-[3px] border-slate-100 border-t-brand-green border-r-brand-green border-b-brand-green">
                              <span className="text-[9px] font-extrabold text-brand-dark">96%</span>
                            </div>
                            <span className="text-[8px] text-brand-light font-bold mt-1.5">Preventive</span>
                          </div>
                        </div>
                        {/* Mini log row */}
                        <div className="p-2 bg-slate-50 rounded-xl flex items-center justify-between text-[9px]">
                          <span className="font-semibold text-brand-light">Average MTTR</span>
                          <span className="font-bold text-brand-dark flex items-center gap-0.5"><FiTrendingUp className="text-brand-green" /> 1.2 Hours</span>
                        </div>
                      </div>
                    )}

                    {topic.visualType === 'visibility' && (
                      <div className="w-full bg-white rounded-2xl p-4 shadow-lg border border-slate-100 flex flex-col gap-3">
                        <span className="text-[10px] font-bold text-brand-dark">Asset Lifecycle Timeline</span>
                        <div className="flex flex-col gap-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-slate-200">
                          {/* Node 1 */}
                          <div className="flex items-start gap-3 relative z-10">
                            <span className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-[10px] font-bold">1</span>
                            <div className="flex flex-col">
                              <span className="text-[9px] font-bold text-brand-dark">Asset Registered</span>
                              <span className="text-[8px] text-brand-light">Pump Chiller #04 - Warranty active</span>
                            </div>
                          </div>
                          {/* Node 2 */}
                          <div className="flex items-start gap-3 relative z-10">
                            <span className="w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center text-[10px] font-bold">2</span>
                            <div className="flex flex-col">
                              <span className="text-[9px] font-bold text-brand-dark">Preventative Check</span>
                              <span className="text-[8px] text-brand-light">Completed by Tech J. Smith on June 12</span>
                            </div>
                          </div>
                          {/* Node 3 */}
                          <div className="flex items-start gap-3 relative z-10">
                            <span className="w-6 h-6 rounded-full bg-slate-200 text-brand-light flex items-center justify-center text-[10px] font-bold">3</span>
                            <div className="flex flex-col">
                              <span className="text-[9px] font-bold text-brand-light">Next Scheduled Test</span>
                              <span className="text-[8px] text-slate-400">Due in 14 days (Automatic reminder)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {topic.visualType === 'automation' && (
                      <div className="w-full bg-white rounded-2xl p-4 shadow-lg border border-slate-100 flex flex-col gap-2.5">
                        <span className="text-[10px] font-bold text-brand-dark">Automation Rule Builder</span>
                        
                        {/* Flow block 1 */}
                        <div className="p-2 bg-rose-50 border border-rose-100 rounded-xl flex items-center justify-between text-[9px] font-bold text-rose-700">
                          <span>IF IoT Sensor Temp &gt; 80°C</span>
                          <span className="px-1.5 py-0.5 bg-rose-200 rounded text-[8px]">Trigger</span>
                        </div>
                        
                        {/* Connecting Line */}
                        <div className="h-4 w-[1.5px] bg-slate-200 mx-auto" />
                        
                        {/* Flow block 2 */}
                        <div className="p-2 bg-brand-blue/5 border border-brand-blue/10 rounded-xl flex items-center justify-between text-[9px] font-bold text-brand-blue">
                          <span>THEN Generate Work Order</span>
                          <span className="px-1.5 py-0.5 bg-brand-blue/20 rounded text-[8px]">Action</span>
                        </div>

                        {/* Connecting Line */}
                        <div className="h-4 w-[1.5px] bg-slate-200 mx-auto" />

                        {/* Flow block 3 */}
                        <div className="p-2 bg-brand-green/10 border border-brand-green/20 rounded-xl flex items-center justify-between text-[9px] font-bold text-brand-green">
                          <span>AND Dispatch On-Call Electrician</span>
                          <span className="px-1.5 py-0.5 bg-brand-green/20 rounded text-[8px]">Notify</span>
                        </div>
                      </div>
                    )}

                  </div>
                </motion.div>

                {/* Text Column - Slides from Right if Even, Left if Odd */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center text-left`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                      {topic.icon}
                    </span>
                    <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Pillar {index + 1}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight mb-4">
                    {topic.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-brand-light font-medium leading-relaxed mb-6">
                    {topic.desc}
                  </p>

                  <div className="flex flex-col gap-3">
                    {topic.points.map((pt, pIdx) => (
                      <span key={pIdx} className="overview-bullet text-xs md:text-sm font-semibold text-brand-dark">
                        {pt}
                      </span>
                    ))}
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

export default PlatformOverview;
