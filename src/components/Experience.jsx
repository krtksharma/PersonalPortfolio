import React from 'react';
import { motion } from 'framer-motion';

const workHistory = [
  {
    company: "Cognizant × ANZ Bank",
    role: "Java Backend Developer",
    location: "Noida, India",
    period: "Aug 2024 — Present",
    points: [
      "Architecting high-availability loan origination and lifecycle microservices using Java 17 and Spring Boot for ANZ Banking Group.",
      "Cut P95 API latency by 20% through targeted service-layer refactoring and DB schema optimization guided by Splunk log analysis.",
      "Engineered a state-machine workflow engine to manage 8 distinct loan lifecycle states, ensuring transactional consistency and zero invalid transitions.",
      "Designed an event-driven notification system integrating Amazon SES and Thymeleaf, automating customer communications at critical milestones.",
      "Automated bulk customer data uploads with a Spring Batch ingestion service, processing 500+ daily records and replacing 3 hours of manual entry.",
      "Resolved 300+ SonarQube quality issues and increased unit test coverage to 85% ahead of a major production release."
    ]
  },
  {
    company: "Cognizant",
    role: "Java Full Stack Developer Intern",
    location: "Pune, India",
    period: "Jan 2024 — May 2024",
    points: [
      "Completed an intensive enablement program focused on Java 17, Spring Boot 3.x, and React 18, mastering enterprise-grade architecture.",
      "Developed simulated enterprise modules utilizing Spring MVC and Hibernate/JPA, focusing on RESTful API design and data persistence.",
      "Gained hands-on experience implementing Spring Security frameworks for Role-Based Access Control (RBAC) and stateless authentication."
    ]
  },
  {
    company: "Paytm Payments Bank (UPI Switch)",
    role: "Software Engineer",
    location: "Noida, India (Hybrid)",
    period: "Oct 2023 — Dec 2023",
    points: [
      "Contributed to the UPI Switch payment system, a mission-critical routing engine processing over 2 million daily bank-to-bank transactions.",
      "Developed a Spring Boot notification microservice that consumed Kafka events to enable real-time customer alerts without impacting core API latency.",
      "Engineered a validation Producer/Consumer service for real-time UPI flows, ensuring 100% message delivery and payment integrity across distributed nodes.",
      "Diagnosed and resolved critical backend bottlenecks via Kibana, achieving a 15% reduction in P99 response times for high-traffic routes."
    ]
  },
  {
    company: "Paytm Payments Bank",
    role: "Software Engineer Intern",
    location: "Noida, India",
    period: "Apr 2023 — Sep 2023",
    points: [
      "Assisted in building and maintaining RESTful API endpoints for internal banking tools, focusing on clean code and SOLID principles.",
      "Strengthened system reliability by writing unit tests with JUnit, helping the team maintain an 85% code coverage standard.",
      "Monitored production API health and tracked error logs using Kibana during high-traffic periods.",
      "Participated in daily stand-ups and sprint planning, gaining hands-on experience with Jira for task tracking and Git for version control"
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
