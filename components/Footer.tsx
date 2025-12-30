import React from 'react';
import { PageRoute } from '../types';

interface FooterProps {
    onNavigate: (page: PageRoute) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <div className="bg-brand-dark text-brand-light/80 pt-20 rounded-t-[3rem] md:rounded-t-[5rem] mt-12 relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/logo.svg" alt="Manovratha" className="w-10 h-10 object-contain bg-white rounded-lg p-1" />
                            <span className="font-display text-3xl text-white">Manovratha</span>
                        </div>
                        <p className="leading-relaxed max-w-sm mb-8 text-lg">
                            Empowering professionals, institutions, and every mind that matters with ethical, AI-integrated care.
                        </p>
                        <div className="flex gap-4">
                            {[
                                {
                                    l: 'Instagram',
                                    bg: 'hover:bg-pink-600',
                                    link: 'https://instagram.com/manovratha',
                                    path: <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M16.5,6.33A1.17,1.17 0 0,1 17.67,7.5C17.67,8.14 17.14,8.67 16.5,8.67A1.17,1.17 0 0,1 15.33,7.5A1.17,1.17 0 0,1 16.5,6.33Z" />
                                },
                                {
                                    l: 'WhatsApp',
                                    bg: 'hover:bg-green-600',
                                    link: '#',
                                    path: <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67M9.53 7.32C9.32 7.32 8.97 7.32 8.67 7.32C8.36 7.32 7.85 7.44 7.65 7.66C7.44 7.88 6.88 8.41 6.88 9.48C6.88 10.55 7.65 11.6 7.85 11.89C8.06 12.18 9.4 14.26 11.45 15.15C13.49 16.03 13.91 15.86 14.35 15.86C14.8 15.86 15.8 15.3 16 14.73C16.2 14.16 16.2 13.67 16.14 13.57C16.08 13.47 15.93 13.41 15.71 13.3C15.49 13.19 14.41 12.66 14.2 12.56C14 12.46 13.85 12.41 13.7 12.63C13.56 12.85 13.13 13.37 13 13.53C12.87 13.68 12.74 13.71 12.53 13.6C12.31 13.49 11.62 13.26 10.8 12.53C10.15 11.95 9.71 11.24 9.59 11C9.46 10.8 9.58 10.66 9.69 10.55C9.79 10.45 9.9 10.29 10 10.16C10.12 10.04 10.16 9.95 10.23 9.8C10.3 9.66 10.26 9.54 10.2 9.42C10.15 9.3 9.76 8.35 9.6 7.97C9.43 7.6 9.27 7.64 9.14 7.64L9.53 7.32Z" />
                                },
                                {
                                    l: 'Email',
                                    bg: 'hover:bg-blue-600',
                                    link: 'mailto:wellbeing@manovratha.in',
                                    path: <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                                }
                            ].map((s, i) => (
                                <a key={i} href={s.link} target="_blank" rel="noreferrer"
                                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 ${s.bg}`}
                                    aria-label={s.l}
                                >
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                                        {s.path}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-lg mb-8 tracking-wide">Explore</h4>
                        <ul className="space-y-6 text-base">
                            {[
                                { label: 'For Professionals', route: 'professionals', icon: 'psychology' },
                                { label: 'For Institutions', route: 'organizations', icon: 'corporate_fare' },
                                { label: 'Wellness Hub', route: 'wellness', icon: 'self_improvement' },
                                { label: 'Careers', route: 'careers', icon: 'work_history' }
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <button
                                        onClick={() => onNavigate(item.route as PageRoute)}
                                        className="group flex items-center gap-3 hover:text-brand-primary transition-colors text-left w-full"
                                    >
                                        <span className="material-symbols-outlined text-xl text-brand-primary/60 group-hover:text-brand-primary transition-colors">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-lg mb-8 tracking-wide">Support</h4>
                        <ul className="space-y-6 text-base">
                            {[
                                { label: 'Contact Us', route: 'contact', icon: 'mail' },
                                { label: 'FAQ', route: 'faq', icon: 'live_help' },
                                { label: 'Privacy & Ethics', route: 'privacy', icon: 'gavel' }
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <button
                                        onClick={() => onNavigate(item.route as PageRoute)}
                                        className="group flex items-center gap-3 hover:text-brand-primary transition-colors text-left w-full"
                                    >
                                        <span className="material-symbols-outlined text-xl text-brand-primary/60 group-hover:text-brand-primary transition-colors">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium opacity-60">
                    <p>© 2023 Manovratha Pvt Ltd.</p>
                    <div className="flex gap-6">
                        <span>Made with ❤️ in India</span>
                        <span>MHC Act 2017 Compliant</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;