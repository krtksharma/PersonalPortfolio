import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Mail, Phone, ExternalLink, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-12 flex items-center bg-white dark:bg-[#080b10] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-green-600 uppercase tracking-widest">Open to new challenges</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-8xl font-display font-black dark:text-white leading-[0.9] tracking-tighter mb-8"
          >
            Kartik<br />
            <span className="text-blue-600">Sharma</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-10"
          >
            Building **scalable, fault-tolerant financial systems**. Currently a Java Backend Developer at **Cognizant**, engineering mission-critical APIs for **ANZ Bank** with a focus on high-concurrency and production reliability.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center gap-2">
              View Projects <ChevronRight size={18} />
            </a>
            
            {/* Contact Actions */}
            <div className="flex gap-3">
              <a 
                href="mailto:krtksharma7@gmail.com" 
                className="px-6 py-4 border border-slate-200 dark:border-white/10 dark:text-white font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all flex items-center gap-2"
                title="krtksharma7@gmail.com"
              >
                <Mail size={18} className="text-blue-600" /> Contact
              </a>
              <a 
                href="tel:9560486491" 
                className="p-4 border border-slate-200 dark:border-white/10 dark:text-white rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all flex items-center justify-center"
                title="+91 9560486491"
              >
                <Phone size={18} className="text-blue-600" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Console Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Developer Console</div>
              </div>
              
              {/* Console Content */}
              <div className="p-8 font-mono text-sm leading-relaxed">
                <div className="flex gap-3 mb-4">
                  <span className="text-blue-600 font-bold">❯</span>
                  <span className="dark:text-white">whoami</span>
                </div>
                <div className="text-slate-500 dark:text-slate-400 ml-6 mb-6">
                  kartik_sharma (Java Backend Software Engineer)
                </div>

                <div className="flex gap-3 mb-4">
                  <span className="text-blue-600 font-bold">❯</span>
                  <span className="dark:text-white">locate --skills</span>
                </div>
                <div className="ml-6 mb-6 flex flex-wrap gap-2">
                  <span className="text-blue-400">Java 17</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-blue-400">Spring Boot</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-blue-400">React</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-blue-400">AWS</span>
                </div>

                <div className="flex gap-3 mb-4">
                  <span className="text-blue-600 font-bold">❯</span>
                  <span className="dark:text-white">cat status.log</span>
                </div>
                <div className="ml-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="italic text-slate-500 dark:text-slate-400">Currently optimizing ANZ Bank loan systems...</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;