import React from 'react';
import { Reveal } from '../components/Reveal';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
        <Reveal>
            <div className="text-center mb-20">
                <h1 className="font-display text-6xl text-brand-dark mb-6">Contact Us</h1>
                <p className="text-brand-dark/70 text-2xl font-medium">We’re here to listen, collaborate, and support your next step in mental health.</p>
            </div>
        </Reveal>
        
        <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <Reveal>
                <div className="space-y-8 h-full">
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-brand-light h-full flex flex-col justify-between">
                        <div>
                            <h2 className="font-display text-3xl text-brand-dark mb-10">Get in Touch</h2>
                            
                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 rounded-full bg-[#E8F0E6] flex items-center justify-center text-[#6B8E5E] shrink-0">
                                        <span className="material-symbols-outlined text-2xl">mail</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold uppercase tracking-widest text-brand-dark/50 mb-2">Email</p>
                                        <a href="mailto:wellbeing@manovratha.in" className="font-bold text-2xl text-brand-dark hover:text-[#6B8E5E] transition-colors break-all">wellbeing@manovratha.in</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 rounded-full bg-[#E8F0E6] flex items-center justify-center text-[#6B8E5E] shrink-0">
                                        <span className="material-symbols-outlined text-2xl">call</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold uppercase tracking-widest text-brand-dark/50 mb-2">Phone</p>
                                        <p className="font-bold text-2xl text-brand-dark">9492834190</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 space-y-4">
                             <button className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl shadow-md hover:bg-brand-dark transition-all">For Professionals</button>
                             <button className="w-full bg-white border-2 border-brand-dark text-brand-dark font-bold py-4 rounded-xl hover:bg-gray-50 transition-all">For Organizations</button>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.2}>
                <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-brand-light">
                    <h2 className="font-display text-3xl text-brand-dark mb-8">Send a Message</h2>
                    <div className="space-y-6 mb-10">
                        <div>
                            <label className="block text-sm font-bold uppercase tracking-widest text-brand-dark/50 mb-3">Name</label>
                            <input type="text" className="w-full bg-[#F8FAF8] border-brand-light rounded-2xl p-4 text-lg focus:ring-[#6B8E5E] focus:border-[#6B8E5E] outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold uppercase tracking-widest text-brand-dark/50 mb-3">Email</label>
                            <input type="email" className="w-full bg-[#F8FAF8] border-brand-light rounded-2xl p-4 text-lg focus:ring-[#6B8E5E] focus:border-[#6B8E5E] outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold uppercase tracking-widest text-brand-dark/50 mb-3">Message</label>
                            <textarea rows={5} className="w-full bg-[#F8FAF8] border-brand-light rounded-2xl p-4 text-lg focus:ring-[#6B8E5E] focus:border-[#6B8E5E] outline-none transition-all"></textarea>
                        </div>
                    </div>
                    <button className="w-full bg-[#6B8E5E] text-white font-bold py-5 rounded-2xl text-xl shadow-md hover:bg-[#5A7A4E] transition-all hover:shadow-lg">Send Message</button>
                </div>
            </Reveal>
        </div>
    </div>
  );
};

export default Contact;