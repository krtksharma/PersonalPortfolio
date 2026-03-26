import React from 'react';
import { motion } from 'framer-motion';
import { Server, Globe, ShieldCheck, Database, BarChart3, Binary, Cpu, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: "Core Backend & Engineering",
    icon: <Server size={20} />,
    skills: ["Java 17/11", "Spring Boot", "Spring MVC", "Hibernate/JPA", "Microservices", "Multithreading", "REST API Design"]
  },
  {
    title: "Distributed Systems",
    icon: <Binary size={20} />,
    skills: ["Event-driven Architecture", "Spring Batch", "Amazon SES", "State-machine Workflows", "Async Processing"]
  },
  {
    title: "Cloud & Observability",
    icon: <Globe size={20} />,
    skills: ["AWS (EC2, RDS, CloudFront)", "Microsoft Azure", "Splunk", "Kibana", "SonarQube", "Docker","GitHub Actions"]
  },
  {
    title: "Data Architecture",
    icon: <Database size={20} />,
    skills: ["PostgreSQL", "MySQL", "Schema Design", "Query Optimization", "Hibernate Tuning", "Redis"]
  },
  {
    title: "Quality & Testing",
    icon: <ShieldCheck size={20} />,
    skills: ["JUnit 5", "TestNG", "Jest", "TDD", "85%+ Coverage Discipline", "Postman", "Spring Security"]
  },
  {
    title: "Frontend & UI",
    icon: <Code2 size={20} />,
    skills: ["React 18", "Angular (Basics)", "JavaScript (ES6+)", "HTML5/CSS3"]
  },
  {
    title: "Computer Science Core",
    icon: <Cpu size={20} />,
    skills: ["SOLID Principles", "OOD", "Design Patterns", "Data Structures and Algorithms"]
  },
  {
    title: "AI & Productivity",
    icon: <BarChart3 size={20} />,
    skills: ["GitHub Copilot", "Claude", "Jira", "Git/GitHub", "Maven", "CI/CD Pipelines"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12 bg-white dark:bg-[#080b10]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-16">
          <span className="h-[1px] w-12 bg-blue-600"></span>
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-blue-600">01 / Technical Arsenal</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 rounded-3xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-600/10 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {cat.icon}
                </div>
                <h3 className="font-display font-bold text-[15px] dark:text-white uppercase tracking-tight">
                  {cat.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 text-[13px] font-mono font-medium rounded-lg bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 group-hover:border-blue-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;