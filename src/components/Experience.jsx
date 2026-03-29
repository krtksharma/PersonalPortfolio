import React from 'react';
import { motion } from 'framer-motion';

const workHistory = [
  {
    company: "Cognizant (Fintech — ANZ Bank)",
    role: "Java Backend Developer",
    location: "Bengaluru, India",
    period: "Aug 2024 — Present",
    points: [
      "Optimizing high-availability loan origination microservices for ANZ Bank, managing 40,000+ monthly loan records and 1,500+ peak concurrent requests.",
      "Achieved a 20% reduction in P95 API latency by refactoring service layers and optimizing PostgreSQL schemas guided by Splunk log analysis.",
      "Engineered a robust state-machine workflow engine to manage 8 distinct loan lifecycle states, ensuring transactional consistency and zero invalid transitions.",
      "Designed an event-driven notification pipeline using Amazon SES and Thymeleaf, successfully decoupling customer alerts from the core loan processing path.",
      "Developed a Spring Batch ingestion service processing 500+ daily records, eliminating ~3 hours of manual data entry via automated Excel processing (Apache POI).",
      "Resolved 300+ SonarQube quality issues and increased unit test coverage to 85% ahead of major production banking releases."
    ]
  },
  {
    company: "Cognizant",
    role: "Java Full Stack Developer Intern",
    location: "Pune, India",
    period: "Jan 2024 — May 2024",
    points: [
      "Completed a rigorous 5-month Full-Stack Enablement program, mastering Java 17, Spring Boot 3.x, and React 18 through 4 phases of technical validation.",
      "Architected modular banking services utilizing Spring Security 6 (JWT/RBAC) and Hibernate/JPA, clearing all technical juries with top-tier ratings.",
      "Implemented enterprise-grade quality gates by resolving 300+ SonarQube vulnerabilities and maintaining 85%+ JUnit test coverage across developed modules."
    ]
  },
  {
    company: "Paytm Payments Bank (UPI Switch)",
    role: "Software Engineer",
    location: "Noida, India",
    period: "Oct 2023 — Dec 2023",
    points: [
      "Contributed to the mission-critical UPI Switch, a high-concurrency routing engine processing over 2 million daily bank-to-bank transactions.",
      "Re-engineered the routing engine to support 'Credit Line on UPI,' implementing dynamic identifiers to redirect requests to credit-ledger systems.",
      "Developed the Transaction Status Enquiry API for UPI LITE, providing real-time tracking of on-device payments and reducing support tickets by 20%.",
      "Engineered a Kafka-based notification microservice to consume transaction events, enabling real-time alerts without impacting core payment API latency.",
      "Utilized Kibana to monitor API health and latency trends, ensuring 99.9% uptime for mission-critical payment routes."
    ]
  },
  {
    company: "Paytm Payments Bank",
    role: "Software Engineer Intern",
    location: "Noida, India",
    period: "Apr 2023 — Sep 2023",
    points: [
      "Refactored the Common Validation Library and updated DB schemas to support international country codes (NRE/NRO), enabling global UPI onboarding.",
      "Optimized 10+ legacy REST API modules to align with SOLID principles and Java 17 standards, significantly reducing technical debt.",
      "Developed comprehensive automation test suites using JUnit and Mockito to identify edge-case logic failures in payment processing microservices.",
      "Authored detailed Swagger/OpenAPI documentation for internal banking services to streamline team onboarding and ensure Agile alignment."
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
