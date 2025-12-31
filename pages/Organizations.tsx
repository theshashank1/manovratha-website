import React from 'react';
import { Reveal } from '../components/Reveal';

const Organizations: React.FC = () => {
    return (
        <div className="pt-32 pb-24 px-6 md:px-12">
            <section className="text-center max-w-5xl mx-auto mb-24">
                <Reveal>
                    <h1 className="font-display text-6xl md:text-7xl text-brand-dark mb-8">Empowering Mentally Healthier Institutions</h1>
                    <p className="text-2xl md:text-3xl text-brand-dark/70 mb-12 font-medium">For schools, colleges, corporates, hospitals, and NGOs.</p>
                    <div className="flex justify-center gap-6">
                        <button className="bg-[#3F4E3A] text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-transform">Explore Programs</button>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdf89DNocoljg5iSb-PqaCpb8YmHQOJRBkK5TCz9HAIZOFSZQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="border-2 border-[#3F4E3A] text-[#3F4E3A] px-10 py-4 rounded-full font-bold text-xl hover:bg-brand-light transition-colors">Partner with Us</a>
                    </div>
                </Reveal>
            </section>

            <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 mb-20 items-start">
                <Reveal>
                    <div>
                        <h2 className="font-display text-4xl text-brand-dark mb-10">Tailored for Your Needs</h2>
                        <ul className="space-y-6">
                            {[
                                { t: "Schools", d: "Student wellness, screening, workshops, counsellor dashboard." },
                                { t: "Colleges", d: "Mental health programs, peer support, internship and research." },
                                { t: "Corporates", d: "Employee wellness, EAP, burnout and stress management." },
                                { t: "Hospitals & Clinics", d: "Professional network, training, tools, referrals." },
                                { t: "NGOs", d: "Scalable support and outreach." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-6 p-6 bg-white rounded-3xl shadow-sm border border-brand-light/50">
                                    <span className="material-symbols-outlined text-[#6B8E5E] text-3xl mt-1">check_circle</span>
                                    <div>
                                        <span className="font-bold block text-brand-dark text-xl mb-1">{item.t}</span>
                                        <span className="text-lg text-brand-dark/60">{item.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="bg-[#E8F0E6] rounded-[3rem] p-12 flex flex-col justify-center sticky top-24">
                        <h3 className="font-display text-3xl text-brand-dark mb-8">Institutional Programs</h3>
                        <div className="space-y-6">
                            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl text-brand-dark font-medium text-lg shadow-sm">
                                <span className="font-bold block mb-1">Institution Wellness Programs</span>
                                Ready‑to‑implement mental health curriculums and frameworks for schools, colleges, and organizations.
                            </div>
                            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl text-brand-dark font-medium text-lg shadow-sm">
                                <span className="font-bold block mb-1">Standardized Care</span>
                                Frameworks for assessment, intervention, referral, and follow‑up.
                            </div>
                            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl text-brand-dark font-medium text-lg shadow-sm">
                                <span className="font-bold block mb-1">Collaborative Care Pathways</span>
                                Seamless connection between institutions and professionals, so no one falls through the cracks.
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Value Promises */}
            <section className="py-16 text-center max-w-4xl mx-auto">
                <Reveal>
                    <h2 className="font-display text-3xl text-brand-dark mb-10">Our Commitment</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "Unified platform for all stakeholders",
                            "Scalable, inclusive reach",
                            "Data-secure, ethical, MHA 2017 compliant"
                        ].map((val, i) => (
                            <div key={i} className="bg-brand-dark text-white p-6 rounded-2xl flex flex-col items-center justify-center min-h-[140px]">
                                <span className="material-symbols-outlined mb-3 text-3xl">verified_user</span>
                                <span className="font-medium text-lg leading-snug">{val}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

export default Organizations;