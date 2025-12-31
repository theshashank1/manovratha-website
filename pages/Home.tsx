import React from 'react';
import Hero from '../components/Hero';
import InteractiveStrip from '../components/InteractiveStrip';
import { Reveal } from '../components/Reveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Cast motion components to any to bypass strict type checking issues in this environment
const MotionDiv = motion.div as any;
const MotionSpan = motion.span as any;

const Home: React.FC = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <Hero />

            <Reveal>
                <InteractiveStrip />
            </Reveal>

            {/* Why Choose Us */}
            <section className="py-16 md:py-24 px-6 md:px-8 bg-white relative">
                {/* Gentle curve top */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F8FAF8"></path>
                    </svg>
                </div>

                <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20 relative z-10">
                    <Reveal>
                        <h2 className="font-display text-4xl md:text-5xl text-brand-dark mb-6 md:mb-8">Why choose Manovratha?</h2>
                        <p className="text-lg md:text-2xl text-brand-dark/80 font-medium leading-relaxed">
                            We are so excited to welcome you to Manovratha, a community where mental health professionals and those seeking support come together. Here’s what makes us unique.
                        </p>
                    </Reveal>
                </div>
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 md:gap-10">
                    {[
                        { title: "Collaboration over Competition", desc: "Resources and training for professionals." },
                        { title: "A Safe, Healing Space", desc: "For anyone seeking support, including professionals." },
                        { title: "Evidence-based Programs", desc: "Workshops, peer discussions, and validated tools." }
                    ].map((card, i) => (
                        <Reveal key={i} delay={i * 0.2}>
                            <MotionDiv
                                whileHover={{ y: -10 }}
                                className="bg-[#F8FAF8] p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] transition-colors h-full"
                            >
                                <div className="w-14 h-14 bg-[#6B8E5E]/10 rounded-full flex items-center justify-center text-[#6B8E5E] mb-6 md:mb-8">
                                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                                </div>
                                <h3 className="font-bold text-xl md:text-2xl text-brand-dark mb-3 md:mb-4">{card.title}</h3>
                                <p className="text-base md:text-lg text-brand-dark/70 leading-relaxed">{card.desc}</p>
                            </MotionDiv>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-16 md:py-24 px-6 md:px-8 bg-[#3F4E3A] text-white rounded-t-[3rem] md:rounded-t-[4rem] relative overflow-hidden">
                {/* Abstract pattern opacity */}
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-12 md:mb-16">
                        <Reveal>
                            <h2 className="font-display text-4xl md:text-6xl mb-4 md:mb-6">Mental Health Needs Are Growing.<br />Support Systems Aren’t.</h2>
                            <p className="text-[#8FB381] font-bold tracking-widest uppercase text-base md:text-lg">Support for supporters also</p>
                        </Reveal>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 md:mb-16">
                        {['Fragmented services', 'Lack of standardization', 'Limited access to experts', 'No unified platform', 'Professionals feel isolated'].map((item, i) => (
                            <div key={i} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                                <Reveal delay={i * 0.1} width="100%">
                                    <div className="flex items-center gap-4 bg-white/5 p-5 md:p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors h-full min-h-[80px] md:min-h-[100px]">
                                        <span className="material-symbols-outlined text-[#FDE68A] text-2xl md:text-3xl shrink-0">warning</span>
                                        <span className="font-bold text-lg md:text-xl leading-tight">{item}</span>
                                    </div>
                                </Reveal>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Reveal>
                            <p className="font-display text-2xl md:text-3xl italic">We’re changing that.</p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="py-16 md:py-24 px-6 md:px-8 bg-[#F8FAF8]">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <h2 className="font-display text-4xl md:text-5xl text-brand-dark text-center mb-12 md:mb-20">How We Bridge the Gap</h2>
                    </Reveal>
                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-12">
                        {[
                            { t: "Unified Platform", d: "We bring schools, colleges, corporates, hospitals, and professionals onto one integrated ecosystem." },
                            { t: "Standardized Care Frameworks", d: "Consistent, ethical, and evidence-based practices through structured protocols." },
                            { t: "Access to the Right Experts", d: "Reducing delays and improving quality of care through timely access." },
                            { t: "Continuity of Support", d: "Creating seamless transitions across settings so no one is lost." },
                            { t: "Support for the Supporters", d: "Supervision, peer networks, training, and emotional support for professionals." },
                            { t: "Scalable, Inclusive Reach", d: "Expanding access to services across diverse populations." }
                        ].map((sol, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="flex gap-4 md:gap-6 group">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#6B8E5E] text-white flex items-center justify-center shrink-0 font-bold text-base md:text-lg group-hover:scale-110 transition-transform">{i + 1}</div>
                                    <div>
                                        <h3 className="font-bold text-xl md:text-2xl text-brand-dark mb-2 md:mb-3">{sol.t}</h3>
                                        <p className="text-brand-dark/70 text-base md:text-lg leading-relaxed">{sol.d}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="py-16 md:py-24 px-6 md:px-8 bg-white rounded-[2rem] md:rounded-[3rem] my-4 md:my-8 mx-0 md:mx-4 shadow-sm">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <h2 className="font-display text-4xl md:text-5xl text-brand-dark text-center mb-12 md:mb-20">Who We Serve</h2>
                    </Reveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { t: "Schools", d: "Student wellness, screening, workshops.", icon: "school" },
                            { t: "Colleges", d: "Mental health programs, peer support, research.", icon: "account_balance" },
                            { t: "Corporates", d: "Employee wellness, EAP, burnout management.", icon: "business_center" },
                            { t: "Hospitals", d: "Professional network, training, tools.", icon: "local_hospital" },
                            { t: "Professionals", d: "Community, learning, practice support.", icon: "psychology" },
                            { t: "Individuals", d: "AI Support Tools, self-help resources.", icon: "person" },
                            { t: "NRI & Global", d: "Culturally attuned support.", icon: "public" },
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <MotionDiv
                                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                    className="bg-[#F8FAF8] p-6 md:p-8 rounded-2xl md:rounded-3xl transition-all cursor-default h-full"
                                >
                                    <span className="material-symbols-outlined text-[#6B8E5E] text-3xl md:text-4xl mb-3 md:mb-4">{item.icon}</span>
                                    <h4 className="font-bold text-lg md:text-xl text-brand-dark mb-2 md:mb-3">{item.t}</h4>
                                    <p className="text-sm md:text-base text-brand-dark/70 leading-relaxed">{item.d}</p>
                                </MotionDiv>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Because Mental Health... */}
            <section className="py-16 md:py-24 px-6 md:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <Reveal>
                        <h3 className="font-display text-3xl md:text-5xl text-brand-dark mb-8 md:mb-12 leading-tight">Because Mental Health Deserves More Than Just a Session.</h3>
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                            {[
                                "AI–human collaboration", "Evidence‑based frameworks", "Professional‑first community",
                                "Data security & ethics", "Inclusive & Trauma-informed", "Designed for India", "Scalable & Accessible"
                            ].map((tag, i) => (
                                <MotionSpan
                                    key={i}
                                    whileHover={{ scale: 1.05, borderColor: "#6B8E5E" }}
                                    className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full border border-brand-light text-sm md:text-lg font-bold text-brand-dark/80 shadow-sm cursor-default"
                                >
                                    {tag}
                                </MotionSpan>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Story Teaser */}
            <section className="py-16 md:py-24 px-6 md:px-8 text-center bg-[#E8F0E6]/30">
                <Reveal>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl md:text-3xl font-display italic text-brand-dark mb-6 md:mb-8 leading-relaxed">
                            "Manovratha began with one powerful belief – mental health deserves the same innovation, precision, and accessibility as every modern industry..."
                        </p>
                        <Link
                            to="/about"
                            className="text-[#6B8E5E] font-bold text-lg md:text-xl border-b-2 border-[#6B8E5E] pb-1 hover:text-[#3F4E3A] hover:border-[#3F4E3A] transition-colors"
                        >
                            Read our full story
                        </Link>
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

export default Home;