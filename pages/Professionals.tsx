import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';

const MotionA = motion.a as any;

const offerings = [
    {
        icon: "groups",
        title: "Professional Community",
        description: "Connect with peers in a curated network built for mental health practitioners."
    },
    {
        icon: "psychology",
        title: "Clinical Supervision",
        description: "Access structured supervision and mentorship from experienced professionals."
    },
    {
        icon: "library_books",
        title: "Evidence-Based Resources",
        description: "Therapy materials, research papers, and clinical templates at your fingertips."
    },
    {
        icon: "smart_toy",
        title: "AI-Powered Tools",
        description: "Assessments, mood trackers, and intelligent triage support for better outcomes."
    },
    {
        icon: "verified",
        title: "Practice Standards",
        description: "Frameworks to standardize assessment, intervention, and follow-up protocols."
    },
    {
        icon: "shield",
        title: "Ethics & Security",
        description: "Built with data privacy and professional ethics at the core of every feature."
    }
];

const trustIndicators = [
    { label: "Evidence-based frameworks", icon: "science" },
    { label: "HIPAA-aligned security", icon: "lock" },
    { label: "Built for India's context", icon: "public" },
    { label: "Peer-reviewed resources", icon: "verified" }
];

const Professionals: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-brand-cream via-white to-brand-light">
            {/* Hero Section - Clean, Focused, Conversion-Optimized */}
            <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl mx-auto text-center">
                    <Reveal>
                        {/* Eyebrow Label */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full mb-8">
                            <span className="material-symbols-outlined text-brand-primary text-lg">verified</span>
                            <span className="text-sm font-semibold text-brand-primary tracking-wide uppercase">For Mental Health Professionals</span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        {/* Main Headline - Clear Value Proposition */}
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-brand-dark mb-6 leading-[1.1] tracking-tight">
                            Elevate Your Practice.
                            <br />
                            <span className="text-brand-primary">Support Your Growth.</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        {/* Supporting Copy - Benefit-focused */}
                        <p className="text-xl md:text-2xl text-brand-dark/60 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                            Join a community of practitioners with access to supervision, resources, and tools designed to make your practice thrive.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        {/* Single Primary CTA - Dominant & Clear */}
                        <div className="flex flex-col items-center gap-4">
                            <MotionA
                                href="https://docs.google.com/forms/d/e/1FAIpQLSf7D_n_nngrDrdUv3YM74zWuP4QDcICINwyC4maRgtLZD0kZg/viewform?usp=header"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03, boxShadow: "0 20px 50px -10px rgba(90, 122, 88, 0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-primary to-[#4A6A48] text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl shadow-lg shadow-brand-primary/30 transition-all duration-300 group"
                            >
                                <span>Join the Professional Network</span>
                                <motion.span
                                    className="material-symbols-outlined text-2xl"
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                >
                                    arrow_forward
                                </motion.span>
                            </MotionA>
                            <span className="text-sm text-brand-dark/50 font-medium">Free to join • No commitment required</span>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Trust Indicators Strip */}
            <section className="py-8 border-y border-brand-light/60 bg-white/50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {trustIndicators.map((item, i) => (
                            <Reveal key={i} delay={i * 0.05} width="fit-content">
                                <div className="flex items-center gap-3 text-brand-dark/70 px-4 py-2 bg-white/50 rounded-full border border-brand-light/50 shadow-sm">
                                    <span className="material-symbols-outlined text-brand-primary text-xl select-none">{item.icon}</span>
                                    <span className="text-base font-medium whitespace-nowrap">{item.label}</span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition Section */}
            <section className="py-24 px-6 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <Reveal>
                            <h2 className="font-display text-4xl md:text-5xl text-brand-dark mb-4">
                                Everything You Need to Thrive
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="text-lg text-brand-dark/60 max-w-xl mx-auto">
                                A comprehensive ecosystem built by professionals, for professionals.
                            </p>
                        </Reveal>
                    </div>

                    {/* Offerings Grid - Clean Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {offerings.map((offer, i) => (
                            <Reveal key={i} delay={i * 0.08}>
                                <div className="group bg-white p-8 rounded-2xl border border-brand-light/80 hover:border-brand-primary/30 hover:shadow-floating transition-all duration-300 h-full">
                                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-brand-primary text-2xl">{offer.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-xl text-brand-dark mb-3">{offer.title}</h3>
                                    <p className="text-brand-dark/60 leading-relaxed">{offer.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Proof / Why Section - Subtle but Impactful */}
            <section className="py-20 px-6 md:px-12 lg:px-20 bg-brand-dark">
                <div className="max-w-4xl mx-auto text-center">
                    <Reveal>
                        <span className="material-symbols-outlined text-brand-secondary text-4xl mb-6 block">format_quote</span>
                        <blockquote className="font-display text-3xl md:text-4xl text-white/95 mb-8 leading-relaxed">
                            "A space where we're not alone in this journey — where learning and support go hand in hand."
                        </blockquote>
                        <p className="text-white/50 font-medium">— Mental Health Professional, Bengaluru</p>
                    </Reveal>
                </div>
            </section>

            {/* Final CTA Section - Reinforcement */}
            <section className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-brand-light to-white">
                <div className="max-w-3xl mx-auto text-center">
                    <Reveal>
                        <h2 className="font-display text-4xl md:text-5xl text-brand-dark mb-6">
                            Ready to Join a Community<br />That Supports Your Practice?
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-lg text-brand-dark/60 mb-10 max-w-xl mx-auto">
                            Take the first step toward sustainable practice. Connect with peers who understand your challenges.
                        </p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <MotionA
                            href="https://docs.google.com/forms/d/e/1FAIpQLSf7D_n_nngrDrdUv3YM74zWuP4QDcICINwyC4maRgtLZD0kZg/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-3 bg-brand-dark text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <span>Get Started — It's Free</span>
                            <span className="material-symbols-outlined text-xl">arrow_forward</span>
                        </MotionA>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default Professionals;