import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add glassmorphism effect on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      isScrolled 
        ? 'py-4 bg-white/80 dark:bg-[#080b10]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
            KS
          </div>
          <span className="font-display font-black text-xl tracking-tighter dark:text-white hidden sm:block">
            Kartik <span className="text-blue-600">Sharma</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-slate-200 dark:bg-white/10" />

          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-all active:scale-90"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <a 
              href="#contact"
              className="px-6 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:bg-blue-700 hover:scale-[1.02] transition-all active:scale-95"
            >
              Hire Me →
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 dark:text-slate-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-white dark:bg-[#080b10] z-50 p-6 flex flex-col gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-display font-bold dark:text-white border-b border-slate-100 dark:border-white/5 pb-4"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { toggleTheme(); setMobileMenuOpen(false); }}
            className="flex items-center gap-3 text-lg font-medium dark:text-white"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;