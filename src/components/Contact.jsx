import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-3xl p-8 md:p-16 overflow-hidden relative">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 leading-tight">
                Ready to build the <br />next big thing?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-md">
                Currently open to Java Backend roles and interesting side collaborations. 
                Let's discuss how I can contribute to your team.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:krtksharma7@gmail.com" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-colors"
                >
                  <Mail size={18} /> Email Me
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <SocialLink 
                icon={<Linkedin size={20} />} 
                label="LinkedIn" 
                href="https://www.linkedin.com/in/kartik-sharma-6b47b3210/" 
              />
              <SocialLink 
                icon={<Github size={20} />} 
                label="GitHub" 
                href="https://github.com/krtksharma" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ icon, label, href }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between p-6 rounded-2xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all group"
  >
    <div className="flex items-center gap-4">
      {icon}
      <span className="font-mono text-sm uppercase tracking-widest">{label}</span>
    </div>
    <ArrowUpRight size={18} className="opacity-50 group-hover:opacity-100 transition-opacity" />
  </a>
);

export default Contact;