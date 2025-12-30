import React, { useState, useEffect } from 'react';
import { PageRoute, NavItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;

interface HeaderProps {
  onNavigate: (page: PageRoute) => void;
  currentPage: PageRoute;
}

const navItems: NavItem[] = [
  { label: 'Home', route: 'home' },
  { label: 'About', route: 'about' },
  { label: 'Professionals', route: 'professionals' },
  { label: 'Organizations', route: 'organizations' },
  { label: 'Wellness Lab', route: 'wellness' },
];

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3 border-white/20' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-white transition-colors duration-300 shadow-lg ${scrolled ? 'bg-brand-dark' : 'bg-brand-primary'}`}>
               <span className="material-symbols-outlined text-2xl md:text-3xl">spa</span>
            </div>
            <span className={`font-display text-2xl md:text-3xl tracking-tight transition-colors ${scrolled ? 'text-brand-dark' : 'text-brand-dark'}`}>
                Manovratha
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2 bg-white/60 backdrop-blur-md px-2 py-2 rounded-full border border-white/40 shadow-sm">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => handleNav(item.route)}
                className={`relative px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  currentPage === item.route 
                    ? 'text-brand-dark' 
                    : 'text-brand-dark/60 hover:text-brand-dark hover:bg-white/50'
                }`}
              >
                {item.label}
                {currentPage === item.route && (
                  <motion.div
                    layoutId="underline"
                    className="absolute inset-0 bg-white rounded-full shadow-sm -z-10 border border-black/5"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
              <MotionButton 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNav('contact')}
                  className="px-6 py-3 rounded-xl bg-brand-dark text-white font-bold text-sm hover:bg-brand-primary transition-colors shadow-lg shadow-brand-dark/20 flex items-center gap-2"
              >
                  Contact Us
                  <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </MotionButton>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center text-brand-dark bg-white/60 rounded-xl backdrop-blur-md border border-white/40 shadow-sm z-50 relative"
          >
            <span className="material-symbols-outlined text-3xl transition-transform duration-300" style={{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'none' }}>
                {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MotionDiv 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ type: "spring", stiffness: 30, damping: 15 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl lg:hidden flex flex-col pt-32 px-8"
          >
             <div className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <MotionDiv
                  key={item.route}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                    <button
                        onClick={() => handleNav(item.route)}
                        className={`text-4xl sm:text-5xl font-display text-left w-full transition-colors flex items-center justify-between group ${currentPage === item.route ? 'text-brand-primary' : 'text-brand-dark'}`}
                    >
                        {item.label}
                        <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-300">arrow_right_alt</span>
                    </button>
                </MotionDiv>
              ))}
              <div className="h-px bg-gray-200 w-full my-4"></div>
              <MotionDiv 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
              >
                  <button 
                    onClick={() => handleNav('contact')} 
                    className="w-full text-xl font-bold text-white bg-brand-dark p-5 rounded-2xl shadow-xl flex justify-between items-center active:scale-95 transition-transform"
                  >
                      Contact Us
                      <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
              </MotionDiv>
             </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;