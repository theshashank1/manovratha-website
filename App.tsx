import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Professionals from './pages/Professionals';
import Organizations from './pages/Organizations';
import WellnessHub from './pages/WellnessHub';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import { PageRoute } from './types';
import { AnimatePresence, motion } from 'framer-motion';

const MotionDiv = motion.div as any;

export default function App() {
  const [page, setPage] = useState<PageRoute>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home onNavigate={setPage} />;
      case 'about': return <About />;
      case 'professionals': return <Professionals />;
      case 'organizations': return <Organizations />;
      case 'wellness': return <WellnessHub onNavigate={setPage} />;
      case 'careers': return <Careers />;
      case 'faq': return <FAQ />;
      case 'contact': return <Contact />;
      case 'privacy': return <Privacy />;
      default: return <Home onNavigate={setPage} />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-brand-dark bg-brand-surface flex flex-col">
      <Header onNavigate={setPage} currentPage={page} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <MotionDiv
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
          </MotionDiv>
        </AnimatePresence>
      </main>

      <Footer onNavigate={setPage} />

      {/* Floating Action Button - Mobile optimized */}
      {page !== 'contact' && (
        <button
          onClick={() => setPage('contact')}
          className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-40 bg-brand-dark text-white p-4 md:p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 safe-bottom group"
          aria-label="Contact Us"
        >
          <span className="material-symbols-outlined text-2xl md:text-2xl group-hover:animate-bounce">chat</span>
        </button>
      )}
    </div>
  );
}