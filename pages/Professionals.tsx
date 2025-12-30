import React from 'react';
import { Reveal } from '../components/Reveal';

const Professionals: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
        {/* Hero */}
        <section className="text-center max-w-5xl mx-auto mb-24">
            <Reveal>
                <h1 className="font-display text-6xl md:text-7xl text-brand-dark mb-8">A Home for Mental Health Professionals</h1>
                <p className="text-2xl md:text-3xl text-brand-dark/70 mb-12 font-medium">A space to connect, learn, grow, and receive emotional support.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button className="bg-[#6B8E5E] text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-[#5A7A4E] hover:scale-105 transition-all">Join the Professional Community</button>
                    <button className="border-2 border-brand-dark text-brand-dark px-10 py-4 rounded-full font-bold text-xl hover:bg-brand-light transition-all">Register as a Professional</button>
                </div>
            </Reveal>
        </section>

        {/* Problem/Promise */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-stretch mb-24">
            <Reveal>
                <div className="bg-white p-12 rounded-[3rem] shadow-card h-full flex flex-col justify-center">
                    <h2 className="font-display text-4xl text-brand-dark mb-6">The Challenge</h2>
                    <p className="text-xl text-brand-dark/70 leading-relaxed font-medium">
                        Mental health professionals often work in isolation, with fragmented support and limited structured supervision.
                    </p>
                </div>
            </Reveal>
            <Reveal delay={0.2}>
                <div className="bg-[#F8FAF8] p-12 rounded-[3rem] border border-brand-light h-full flex flex-col justify-center">
                    <h2 className="font-display text-4xl text-[#6B8E5E] mb-6">Our Promise</h2>
                    <p className="text-xl text-brand-dark leading-relaxed font-bold">
                        Manovratha brings professionals into a unified ecosystem with peer support, training, and tools that make practice sustainable.
                    </p>
                </div>
            </Reveal>
        </section>

        {/* Offerings */}
        <section className="max-w-7xl mx-auto mb-20">
            <Reveal>
                <h2 className="font-display text-5xl text-brand-dark text-center mb-16">Key Offerings</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { t: "Professional Community Hub", d: "A safe space to network, learn, collaborate, and grow." },
                    { t: "Supervision & Peer Networks", d: "Regular spaces for case discussions, emotional support, and mentorship." },
                    { t: "Resource Library", d: "Evidence-based therapy materials, research, templates, and training modules." },
                    { t: "AI-Integrated Wellness Suite", d: "Tools to support your clients’ journeys: assessments, mood trackers, therapeutic workbooks, AI-based triage support." },
                    { t: "Practice Support", d: "Frameworks and tools to standardize assessment, intervention, referral, and follow-up." }
                ].map((offer, i) => (
                    <Reveal key={i} delay={i * 0.1}>
                        <div className="bg-white border border-brand-light p-10 rounded-[2.5rem] hover:shadow-soft transition-all duration-300 h-full">
                            <div className="w-14 h-14 bg-[#E8F0E6] rounded-full flex items-center justify-center text-[#6B8E5E] font-bold text-xl mb-6">{i+1}</div>
                            <h3 className="font-bold text-2xl text-brand-dark mb-4">{offer.t}</h3>
                            <p className="text-lg text-brand-dark/70 leading-relaxed">{offer.d}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>

        {/* Why Choose Strip */}
        <section className="bg-brand-primary text-white py-16 px-6 md:px-12 rounded-[3rem] mx-0 md:mx-4 mb-16">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="font-display text-3xl mb-10">Why professionals choose Manovratha</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        "Evidence-based frameworks",
                        "Data security & ethics by design",
                        "Professional-first community space",
                        "Designed for India's real needs"
                    ].map((item, i) => (
                         <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                            <span className="material-symbols-outlined mb-2 text-2xl">star</span>
                            <p className="font-medium text-lg">{item}</p>
                         </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
};

export default Professionals;