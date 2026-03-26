import React from 'react';
import { motion } from 'framer-motion';

const workHistory = [
  {
    company: "Cognizant × ANZ Bank",
    role: "Java Full Stack Developer",
    location: "Noida, India (Remote/Australia Support)",
    period: "Sep 2024 — Present",
    points: [
      "Engineered Java 17 / Spring Boot REST APIs supporting high-volume loan lifecycle workflows for thousands of daily transactions.",
      "Architected an event-driven notification system integrating Amazon SES and Thymeleaf templates for automated, personalized customer communications.",
      "Designed a custom state-machine engine to manage complex loan status transitions, ensuring transactional consistency across distributed services.",
      "Built an automated bulk data ingestion service using Spring Batch and Apache POI, eliminating manual entry for 500+ daily records.",
      "Reduced P95 API latency by 20% through service-layer refactoring and Splunk-based bottleneck identification.",
      "Maintained 85% test coverage and resolved 300+ SonarQube issues to meet strict banking compliance standards."
    ]
  },
  {
    company: "PayTM Payments Bank",
    role: "Software Engineer Trainee",
    location: "Noida, India",
    period: "Oct 2023 — Dec 2023",
    points: [
      "Contributed to the UPI Switch payment system, developing core transaction validation logic in Java and Spring.",
      "Diagnosed production bottlenecks via Kibana log analysis and improved system reliability.",
      "Achieved 85%+ unit test coverage using JUnit and TestNG to ensure zero-defect payment flows."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12 bg-slate-50 dark:bg-[#0d1117]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-16">
          <span className="h-[1px] w-12 bg-blue-600"></span>
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-blue-600">02 / Experience</h2>
        </div>

        <div className="space-y-16">
          {workHistory.map((job, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-slate-200 dark:border-white/10"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1 ring-4 ring-white dark:ring-[#0d1117]" />
              
              <div className="mb-6">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">{job.period}</span>
                <h3 className="text-3xl font-display font-bold dark:text-white mt-1">{job.role}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">
                  {job.company} · <span className="text-xs italic">{job.location}</span>
                </p>
              </div>

              <ul className="space-y-4">
                {job.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="text-blue-600 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;