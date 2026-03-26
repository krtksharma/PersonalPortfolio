import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Target, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "P95 Latency Cut", value: "20%", icon: <Zap size={18} /> },
    { label: "Test Coverage", value: "85%", icon: <Target size={18} /> },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-white dark:bg-[#080b10]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-16">
          <span className="h-[1px] w-12 bg-blue-600"></span>
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-blue-600">01 / Profile & Education</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Professional Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-4xl font-display font-bold dark:text-white leading-tight">
              Engineering <span className="text-blue-600">Reliability</span> into Financial Systems.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a Java Backend Developer at **Cognizant**, architecting mission-critical infrastructure for **ANZ Bank**. I specialize in building fault-tolerant systems—from state-machine engines to event-driven notification layers—where transactional consistency is non-negotiable.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              My approach integrates deep technical execution with production observability. By leveraging Splunk analytics and maintaining rigorous JUnit standards, I ensure every deployment enhances system performance and security.
            </p>

            <div className="flex gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                  <div className="text-blue-600">{stat.icon}</div>
                  <div>
                    <div className="text-xl font-bold dark:text-white leading-none">{stat.value}</div>
                    <div className="text-[10px] font-mono uppercase text-slate-500 mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Academic Credentials */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="p-8 rounded-3xl bg-blue-600 text-white relative overflow-hidden shadow-2xl shadow-blue-600/20">
              {/* Decorative Background Icon */}
              <GraduationCap className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10 rotate-12" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <GraduationCap size={24} />
                  </div>
                  <h4 className="font-mono text-xs uppercase tracking-widest opacity-80">Academic Background</h4>
                </div>

                <div className="space-y-8">
                  <div>
                    <p className="text-xs font-mono uppercase opacity-70 mb-1">University / College</p>
                    <h5 className="text-xl font-bold leading-snug">
                      Dr. A.P.J. Abdul Kalam Technical University
                    </h5>
                    <p className="text-sm opacity-90 mt-1">B.Tech in Information Technology</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                    <div>
                      <p className="text-xs font-mono uppercase opacity-70 mb-1">Grade / CGPA</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black">8.01</span>
                        <span className="text-sm opacity-70">/ 10.0</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase opacity-70 mb-1">Focus</p>
                      <p className="text-sm font-bold uppercase tracking-tighter">Software Eng.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;