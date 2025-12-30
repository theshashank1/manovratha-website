import React from 'react';
import { Reveal } from '../components/Reveal';

const Careers: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto min-h-screen">
        <Reveal>
            <div className="text-center mb-20">
                <h1 className="font-display text-6xl text-brand-dark mb-8">Careers at Manovratha</h1>
                <p className="text-2xl text-brand-dark/70 font-medium max-w-3xl mx-auto">Join a movement that brings innovation, empathy, and evidence‑based care together.</p>
            </div>
        </Reveal>
        
        <Reveal>
            <div className="bg-white p-12 rounded-[3rem] shadow-soft mb-16">
                <h2 className="font-display text-3xl text-brand-dark mb-8">Who can apply</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {['Mental health professionals', 'Researchers and educators', 'Product, design, and tech innovators', 'Operations and community roles'].map((role, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 bg-[#F8FAF8] rounded-2xl border border-transparent hover:border-brand-primary/20">
                            <span className="material-symbols-outlined text-[#6B8E5E] text-3xl">work</span>
                            <span className="font-bold text-xl text-brand-dark/80">{role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Reveal>

        <Reveal>
            <div className="bg-brand-dark text-white p-12 rounded-[3rem] text-center mb-16">
                <h2 className="font-display text-3xl mb-6">Our Culture</h2>
                <p className="text-xl opacity-80 max-w-2xl mx-auto">
                    We value dignity, collaboration, responsible AI usage, and maintaining an inclusive, trauma-informed culture.
                </p>
            </div>
        </Reveal>
        
        <Reveal>
            <div className="text-center bg-[#E8F0E6] p-10 rounded-[3rem] max-w-3xl mx-auto">
                <p className="text-brand-dark text-lg mb-6 font-medium">We are currently in the early stages of our journey. All positions are dynamic and evolving.</p>
                <a 
                    href="mailto:wellbeing@manovratha.in"
                    className="inline-flex items-center gap-2 bg-[#6B8E5E] text-white px-12 py-5 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-transform"
                >
                    <span className="material-symbols-outlined">mail</span>
                    Send your CV to wellbeing@manovratha.in
                </a>
            </div>
        </Reveal>
    </div>
  );
};

export default Careers;