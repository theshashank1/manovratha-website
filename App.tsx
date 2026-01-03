import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Professionals from './pages/Professionals';
import Organizations from './pages/Organizations';
import WellnessHub from './pages/WellnessHub';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';

// Utility for scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    );
};

export default function App() {
    return (
        <div className="min-h-screen font-sans text-brand-dark bg-brand-surface flex flex-col">
            <SEO
                title="Home"
                description="Manovratha - A holistic global mental health sanctuary connecting professionals, organizations, and individuals."
            />
            <ScrollToTop />
            <Header />

            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <Routes>
                        <Route path="/" element={
                            <PageWrapper>
                                <Home />
                            </PageWrapper>
                        } />
                        <Route path="/home" element={
                            <PageWrapper>
                                <Home />
                            </PageWrapper>
                        } />
                        <Route path="/about" element={
                            <PageWrapper>
                                <SEO title="About Us" description="Learn about Manovratha's mission to bridge the gap in mental healthcare." />
                                <About />
                            </PageWrapper>
                        } />
                        <Route path="/professionals" element={
                            <PageWrapper>
                                <SEO title="For Professionals" description="Join our network of mental health professionals for supervision, resources, and community." />
                                <Professionals />
                            </PageWrapper>
                        } />
                        <Route path="/organizations" element={
                            <PageWrapper>
                                <SEO title="For Organizations" description="Mental health solutions for schools, corporations, and healthcare institutions." />
                                <Organizations />
                            </PageWrapper>
                        } />
                        <Route path="/wellness" element={
                            <PageWrapper>
                                <SEO title="Wellness Lab" description="Explore our library of mental health resources, tools, and assessments." />
                                <WellnessHub />
                            </PageWrapper>
                        } />
                        <Route path="/contact" element={
                            <PageWrapper>
                                <SEO title="Contact Us" description="Get in touch with the Manovratha team." />
                                <Contact />
                            </PageWrapper>
                        } />
                        <Route path="/privacy" element={
                            <PageWrapper>
                                <SEO title="Privacy & Ethics" description="Learn about our commitment to privacy, ethics, and MHC Act 2017 compliance." />
                                <Privacy />
                            </PageWrapper>
                        } />
                        <Route path="/faq" element={
                            <PageWrapper>
                                <SEO
                                    title="FAQ"
                                    description="Frequently asked questions about Manovratha's mental health services for individuals, professionals, and institutions."
                                    keywords="mental health FAQ, therapy questions, counseling help, Manovratha support"
                                />
                                <FAQ />
                            </PageWrapper>
                        } />
                        <Route path="/careers" element={
                            <PageWrapper>
                                <SEO
                                    title="Careers"
                                    description="Join Manovratha's mission to transform mental healthcare. Explore career opportunities for mental health professionals, researchers, and tech innovators."
                                    keywords="mental health careers, psychology jobs, counselor jobs India, Manovratha careers"
                                />
                                <Careers />
                            </PageWrapper>
                        } />
                        {/* Fallback */}
                        <Route path="*" element={
                            <PageWrapper>
                                <Home />
                            </PageWrapper>
                        } />
                    </Routes>
                </AnimatePresence>
            </main>

            <Footer />

            {/* Floating Action Button - Mobile optimized */}
            <FloatingContactButton />
        </div>
    );
}

const FloatingContactButton = () => {
    const location = useLocation();
    if (location.pathname === '/contact') return null;

    return (
        <a
            href="/contact"
            className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-40 bg-brand-dark text-white p-4 md:p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 safe-bottom group"
            aria-label="Contact Us"
        >
            <span className="material-symbols-outlined text-2xl md:text-2xl group-hover:animate-bounce">chat</span>
        </a>
    )
}
