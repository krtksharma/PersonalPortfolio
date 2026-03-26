import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Download, ExternalLink, Target, 
  BarChart3, Cpu, Cloud, ShieldCheck, Zap 
} from 'lucide-react';

const Resume = () => {
  const resumeUrl = "/Kartik_Sharma_Resume.pdf"; 

  const metrics = [
    { label: "ATS-Optimized", icon: <Target size={16} />, desc: "Engineering Format" },
    { label: "High Performance", icon: <Zap size={16} />, desc: "P95 Latency Focus" },
    { label: "Backend Stack", icon: <Cpu size={16} />, desc: "Java 17 / Spring" },
    { label: "Cloud Native", icon: <Cloud size={16} />, desc: "Azure & Docker" }
  ];

  return (
    <section id="resume" className="py-24 px-6 lg:px-12 bg-white dark:bg-[#080b10] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-16">
          <span className="h-[1px] w-12 bg-blue-600"></span>
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-blue-600 font-bold">04 / Credentials</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Professional Narrative */}
          <div className="lg:col-span-6 z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl font-display font-black dark:text-white mb-6 leading-tight tracking-tighter">
                Technical <br />
                <span className="text-blue-600">Blueprint.</span>
              </h3>
             <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
                A deep dive into my professional tenure at **Cognizant** and **PayTM**, where I’ve translated complex 
                banking requirements into **scalable Java 17 architectures**. My work emphasizes **enterprise-level 
                reliability**, high-concurrency payment handling, and the delivery of performant, maintainable backend systems.
             </p>

              {/* NEW: The "Good" Technical Grid */}


              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href={resumeUrl} 
                  download 
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center gap-2 group"
                >
                  <Download size={18} className="group-hover:animate-bounce" /> Download CV
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: THE "BLUEPRINT" PREVIEW */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[420px] group"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-blue-600/20 to-cyan-500/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />
              
              {/* Main Container */}
              <div className="relative bg-white dark:bg-[#0d1117] border-2 border-slate-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[1/1.41] group-hover:border-blue-600/30 transition-colors">
                
                {/* Header mimicking a dev environment */}
                <div className="absolute top-0 inset-x-0 h-14 bg-slate-50/90 dark:bg-[#161b22]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10 z-20 flex items-center justify-between px-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/20" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/20" />
                    <div className="w-3 h-3 rounded-full bg-green-400/20" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                    <ShieldCheck size={14} className="text-blue-600" /> Secure_Preview.pdf
                  </span>
                </div>

                {/* PDF Content */}
                <div className="w-full h-full pt-14 overflow-hidden pointer-events-none select-none relative group-hover:scale-[1.02] transition-transform duration-700">
                  {/* Subtle technical overlay */}
                  <div className="absolute inset-0 z-10 opacity-10 pointer-events-none dark:invert" 
                       style={{ backgroundImage: 'radial-gradient(#444 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }} />
                  
                  <iframe
                    src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    className="w-full h-full border-none grayscale-[0.3] dark:invert-[0.05] dark:hue-rotate-180"
                    title="Resume Glimpse"
                  />
                </div>

                {/* Hover Action */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-all z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
                   <a 
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-7 py-3.5 rounded-2xl font-bold flex items-center gap-2 shadow-2xl scale-90 group-hover:scale-100 transition-all hover:bg-blue-50"
                   >
                     Inspect Blueprint <ExternalLink size={18} />
                   </a>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-[#161b22] border-2 border-slate-200 dark:border-blue-600/20 p-5 rounded-3xl shadow-2xl z-40 flex items-center gap-4">
                <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-600/30">
                  <FileText size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-blue-600">Latest Resume</p>
                  <p className="text-xs font-bold dark:text-white">March 2026</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;