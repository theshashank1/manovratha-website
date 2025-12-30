import React from 'react';
import { Reveal } from '../components/Reveal';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto min-h-screen">
        <Reveal>
            <div className="text-center mb-20">
                <h1 className="font-display text-6xl md:text-7xl text-brand-dark mb-8">Manovratha</h1>
                <p className="text-2xl md:text-3xl text-brand-dark/70 font-medium leading-relaxed max-w-4xl mx-auto">
                    A holistic global mental health sanctuary for professionals, institutions, and every mind that matters.
                </p>
                <div className="mt-8 text-xl text-brand-primary font-medium italic">
                    "A collaborative ecosystem where mental health professionals, organizations, and individuals unite to learn, heal, grow, and drive real change."
                </div>
            </div>
        </Reveal>

        <Reveal>
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-soft mb-20 border border-brand-light">
                <h2 className="font-display text-4xl text-brand-dark mb-8">Our Story</h2>
                <div className="space-y-8 text-xl text-brand-dark/80 leading-relaxed font-medium">
                    <p>
                        Manovratha began with one powerful belief – mental health deserves the same innovation, precision, and accessibility as every modern industry.
                    </p>
                    <p>
                        This belief brought together an uncommon team – licensed mental health professionals and forward-thinking tech innovators. We saw the fragmented care, the inconsistent support, and professionals working in isolation.
                    </p>
                    <p>
                        It is a movement born from lived experience. Every mind holds a story and every story deserves to be heard. Here, every voice matters. Every journey is valued. And every person is supported to heal, grow, and thrive.
                    </p>
                </div>
            </div>
        </Reveal>

        <Reveal>
            <div>
                <h2 className="font-display text-4xl text-brand-dark mb-12 text-center">Values & Ethics</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        "Dignity, privacy, and consent first.",
                        "Stigma-free and compassionate care.",
                        "Transparency and accountability in every interaction.",
                        "Evidence-based clinical guidance.",
                        "Full legal compliance with the Mental Healthcare Act 2017.",
                        "Responsible AI and robust data safety.",
                        "Gender equality and inclusion."
                    ].map((val, i) => (
                        <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-brand-light/30 border border-transparent hover:border-brand-primary/20 transition-all">
                            <span className="material-symbols-outlined text-[#6B8E5E] mt-1 text-2xl">verified</span>
                            <span className="font-bold text-lg text-brand-dark">{val}</span>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 p-8 bg-brand-dark text-white rounded-[2rem] text-center max-w-3xl mx-auto shadow-lg">
                    <p className="font-bold text-2xl mb-6">Dignity, confidentiality, responsible innovation, and trust are always at the center of our work.</p>
                </div>
            </div>
        </Reveal>
    </div>
  );
};

export default About;