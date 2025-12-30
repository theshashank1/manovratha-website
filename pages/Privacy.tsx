import React from 'react';
import { Reveal } from '../components/Reveal';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto min-h-screen">
        <Reveal>
            <h1 className="font-display text-5xl text-brand-dark mb-10 text-center">Privacy & Ethics Policy</h1>
            
            <div className="bg-[#E8F0E6] p-12 rounded-[2.5rem] mb-16 text-center">
                <p className="font-display text-3xl text-brand-dark leading-snug">"Dignity, confidentiality, responsible innovation, and trust are always at the center of our work."</p>
            </div>
            
            <div className="space-y-12 text-brand-dark/80">
                <section>
                    <h2 className="font-bold text-2xl mb-4 text-[#3F4E3A]">Privacy & Consent</h2>
                    <p className="text-xl leading-relaxed">We adhere to strict consent protocols. Every interaction on Manovratha begins with your informed consent. We believe you have the right to know exactly how your data is used.</p>
                </section>
                <section>
                    <h2 className="font-bold text-2xl mb-4 text-[#3F4E3A]">Data Security</h2>
                    <p className="text-xl leading-relaxed">Your data is encrypted and handled with the highest standards of security. We use enterprise-grade encryption for all stored data and communication channels.</p>
                </section>
                <section>
                    <h2 className="font-bold text-2xl mb-4 text-[#3F4E3A]">Mental Healthcare Act 2017</h2>
                    <p className="text-xl leading-relaxed">Our practices are fully compliant with Indian regulations, including the Mental Healthcare Act 2017. We respect the rights of persons with mental illness and ensure our platform supports these rights.</p>
                </section>
                 <section>
                    <h2 className="font-bold text-2xl mb-4 text-[#3F4E3A]">Responsible AI</h2>
                    <p className="text-xl leading-relaxed">We use AI responsibly to augment human care, not replace it. All AI tools are developed with ethical oversight and prioritize user safety.</p>
                </section>
            </div>
        </Reveal>
    </div>
  );
};

export default Privacy;