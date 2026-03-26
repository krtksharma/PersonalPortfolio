import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display font-bold text-xl tracking-tighter dark:text-white">
          KS<span className="text-blue-600">.</span>
        </div>
        
        <p className="text-sm text-slate-500 font-mono">
          © {new Date().getFullYear()} Kartik Sharma. 
        </p>
        
        <div className="flex gap-6 text-xs font-mono uppercase tracking-widest text-slate-400">
          <a href="#home" className="hover:text-blue-600 transition-colors">Top</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;