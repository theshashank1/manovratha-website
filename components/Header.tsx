import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;

// Removed interface HeaderProps as we no longer pass props for navigation

const navItems: NavItem[] = [
  { label: 'Home', route: 'home' },
  { label: 'About', route: 'about' },
  { label: 'Professionals', route: 'professionals' },
  { label: 'Organizations', route: 'organizations' },
  { label: 'Wellness Lab', route: 'wellness' },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  // Helper to check if route is active
  const isActive = (route: string) => {
    if (route === 'home' && location.pathname === '/') return true;
    return location.pathname === `/${route}`;
  };

  // Dynamic header transformations
  const headerWidth = useTransform(scrollY, [0, 50], ["100%", "92%"]);
  const headerTop = useTransform(scrollY, [0, 50], ["0px", "16px"]);
  const headerRadius = useTransform(scrollY, [0, 50], ["0px", "24px"]);
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(243, 246, 244, 0.01)", "rgba(250, 250, 249, 0.92)"]
  );
  const headerBackdrop = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(16px)"]
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(90, 122, 88, 0)", "rgba(90, 122, 88, 0.15)"]
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 40px -10px rgba(26, 46, 34, 0.12)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <MotionDiv
        style={{
          width: headerWidth,
          marginTop: headerTop,
          borderRadius: headerRadius,
          backgroundColor: headerBg,
          borderColor: headerBorder,
          boxShadow: headerShadow,
          backdropFilter: headerBackdrop,
        }}
        className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-7xl border border-transparent transition-all duration-300 transform-gpu"
      >
        <div className="px-6 py-4 flex justify-between items-center">
          {/* Creative Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-3 cursor-pointer group select-none relative z-10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <motion.img
                  src="/logo.svg"
                  alt="Manovratha"
                  className="w-10 h-10 md:w-11 md:h-11 object-contain"
                  animate={{ rotate: scrolled ? 360 : 0 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                />
                <div className="absolute inset-0 bg-brand-secondary/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl md:text-2xl tracking-tight text-brand-dark leading-none">
                  Manovratha
                </span>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[10px] text-brand-primary font-bold tracking-widest uppercase"
                >
                  Healing Minds
                </motion.span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Nav - Floating Glass Pill */}
          <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <motion.div
              className="px-1.5 py-1.5 bg-brand-light/5 backdrop-blur-md rounded-full border border-brand-primary/5 shadow-[inset_0_1px_4px_rgba(0,0,0,0.03),0_4px_12px_-4px_rgba(0,0,0,0.06)] flex items-center gap-1"
              layout
            >
              {navItems.map((item) => {
                const active = isActive(item.route);
                return (
                  <Link key={item.route} to={`/${item.route === 'home' ? '' : item.route}`}>
                    <div
                      className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 z-10 ${active ? 'text-brand-dark' : 'text-brand-dark/70 hover:text-brand-dark'
                        }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {active && (
                        <motion.div
                          layoutId="nav-bg"
                          className="absolute inset-0 bg-white rounded-full shadow-[0_2px_10px_-2px_rgba(0,0,0,0.1)] border border-white/50"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      {/* Subtle hover effect for non-active items */}
                      {!active && (
                        <motion.div
                          className="absolute inset-0 bg-white/40 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200"
                        />
                      )}
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4 relative z-10">
            <Link to="/contact">
              <MotionButton
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(26, 46, 34, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-dark to-[#2C4A3B] text-white font-medium text-sm shadow-lg shadow-brand-dark/20 flex items-center gap-2 group overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Talk
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="material-symbols-outlined text-sm"
                  >
                    arrow_forward
                  </motion.span>
                </span>
                {/* Shine effect */}
                <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[wiggle_1s_ease-in-out_infinite]" />
              </MotionButton>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <MotionButton
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-brand-dark bg-white/50 rounded-full backdrop-blur-md border border-white/40 shadow-sm z-50 relative"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'segment'}
            </span>
          </MotionButton>
        </div>
      </MotionDiv>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MotionDiv
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ type: "spring", stiffness: 30, damping: 15 }}
            className="fixed inset-0 z-40 bg-[#F3F6F4] lg:hidden flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background Decorations */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

            <div className="flex flex-col gap-6 w-full max-w-md px-10 relative z-10">
              {navItems.map((item, i) => (
                <MotionDiv
                  key={item.route}
                  initial={{ opacity: 0, y: 50, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 100 }}
                  className="perspective-1000"
                >
                  <Link
                    to={`/${item.route === 'home' ? '' : item.route}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-5xl font-display text-center w-full transition-all duration-300 hover:scale-110 active:scale-95 ${isActive(item.route) ? 'text-brand-dark scale-105' : 'text-brand-dark/40 hover:text-brand-dark'
                      }`}
                  >
                    {item.label}
                  </Link>
                </MotionDiv>
              ))}

              <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <div className="w-full text-xl font-bold text-white bg-brand-dark py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3 overflow-hidden relative group">
                    <span className="relative z-10 flex items-center gap-2">
                      Start Your Journey
                      <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">arrow_downward</span>
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </div>
                </Link>
              </MotionDiv>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;