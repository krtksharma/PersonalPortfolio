import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github as GithubIcon, 
  ExternalLink, 
  ShieldCheck, 
  RefreshCcw, 
  History, 
  Bell, 
  Database, 
  Zap, 
  CreditCard 
} from 'lucide-react';

const projects = [
  {
    type: "Featured Platform",
    title: "BugTrackr",
    subtitle: "Full-Stack Defect Management System",
    desc: "A production-grade platform featuring a robust bug lifecycle (Open → Resolved) with secure RBAC. Implements a custom drag-and-drop Kanban board and a DB-backed immutable audit trail.",
    tags: ["Spring Boot 3", "React 18", "JWT", "Azure", "PostgreSQL"],
    features: [
      { icon: <ShieldCheck size={14} />, text: "JWT Stateless Auth & Role Guards" },
      { icon: <RefreshCcw size={14} />, text: "Interactive Kanban Workflow" },
      { icon: <History size={14} />, text: "Immutable Change Audit Logs" },
      { icon: <Bell size={14} />, text: "Live DB-backed Notifications" }
    ],
    links: { 
      github: "https://github.com/krtksharma/defect-tracker-backend", 
      live: "https://defect-tracker-frontend.vercel.app/" 
    },
    highlight: "CI/CD: GitHub Actions → Azure App Service"
  },
  {
    type: "Enterprise Fintech",
    title: "Loan Lifecycle Engine",
    subtitle: "ANZ Banking Group (via Cognizant)",
    desc: "Engineered a high-availability state-machine workflow managing 8 distinct loan states. Implemented automated Spring Batch ingestion for bulk data processing, eliminating manual entry bottlenecks.",
    tags: ["Java 17", "Spring Boot", "Spring Batch", "Amazon SES", "Splunk"],
    features: [
      { icon: <Zap size={14} />, text: "20% Reduction in P95 Latency" },
      { icon: <Database size={14} />, text: "Automated 500+ Daily Record Ingestion" },
      { icon: <ShieldCheck size={14} />, text: "Transactional Consistency Logic" },
      { icon: <Bell size={14} />, text: "Event-driven SES Communications" }
    ],
    isBackend: true
  },
  {
    type: "Payment Infrastructure",
    title: "UPI Switch & Global Systems",
    subtitle: "Paytm Payments Bank",
    desc: "Architected high-volume routing logic for a switch processing 2M+ daily transactions. Re-engineered the engine for 'Credit Line on UPI' and automated status resolution for UPI LITE, while refactoring core libraries for international (NRE/NRO) onboarding.",
    tags: ["Java 17", "Spring Boot", "Apache Kafka", "Kibana", "Microservices", "JUnit"],
    features: [
      { icon: <CreditCard size={14} />, text: "2M+ Daily Transaction Routing" },
      { icon: <Zap size={14} />, text: "UPI LITE Status Enquiry API" },
      { icon: <ShieldCheck size={14} />, text: "Credit Line & NRE/NRO Logic" },
      { icon: <RefreshCcw size={14} />, text: "10+ Legacy REST Modules Refactored" }
    ],
    isBackend: true
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-slate-50 dark:bg-[#0d1117]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-16">
          <span className="h-[1px] w-12 bg-blue-600"></span>
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-blue-600">03 / Key Systems & Projects</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${proj.type === "Featured Platform" ? "lg:col-span-12" : "lg:col-span-6"} 
                bg-white dark:bg-[#080b10] border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col`}
            >
              <div className={`p-8 lg:p-10 ${proj.type === "Featured Platform" ? "lg:grid lg:grid-cols-2 gap-12" : ""}`}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 text-[10px] font-mono font-bold uppercase rounded-full">
                      {proj.type}
                    </span>
                    {proj.highlight && (
                      <span className="text-[10px] font-mono text-slate-400 italic">
                        {proj.highlight}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-3xl font-display font-black dark:text-white mb-2">{proj.title}</h3>
                  <p className="text-blue-600 font-mono text-sm mb-6">{proj.subtitle}</p>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    {proj.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-xs rounded-lg border border-slate-200 dark:border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-4">Key Capabilities</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {proj.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/2 border border-slate-100 dark:border-white/5">
                        <div className="text-blue-600">{feat.icon}</div>
                        <span className="text-xs font-medium dark:text-slate-300">{feat.text}</span>
                      </div>
                    ))}
                  </div>

                  {proj.links && (
                    <div className="flex gap-4 pt-8">
                      <a href="https://defect-tracker-frontend.vercel.app/" className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                      <a href="https://github.com/krtksharma/defect-tracker-backend" className="flex items-center gap-2 text-sm font-bold dark:text-white hover:text-blue-600 transition-colors">
                        <GithubIcon size={16} /> Source Code
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;