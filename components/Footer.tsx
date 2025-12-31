import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
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
                                    l: 'LinkedIn',
                                    bg: 'hover:bg-[#0077b5]',
                                    link: 'https://www.linkedin.com/company/manovratha/',
                                    path: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                },
                                {
                                    l: 'Instagram',
                                    bg: 'hover:bg-pink-600',
                                    link: 'https://www.instagram.com/manovratha/',
                                    path: <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M16.5,6.33A1.17,1.17 0 0,1 17.67,7.5C17.67,8.14 17.14,8.67 16.5,8.67A1.17,1.17 0 0,1 15.33,7.5A1.17,1.17 0 0,1 16.5,6.33Z" />
                                },
                                {
                                    l: 'X (Twitter)',
                                    bg: 'hover:bg-black',
                                    link: 'https://x.com/manovratha',
                                    path: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
                        <h3 className="font-bold text-white text-lg mb-8 tracking-wide">Explore</h3>
                        <ul className="space-y-6 text-base">
                            {[
                                { label: 'For Professionals', route: '/professionals', icon: 'psychology' },
                                { label: 'For Institutions', route: '/organizations', icon: 'corporate_fare' },
                                { label: 'Wellness Hub', route: '/wellness', icon: 'self_improvement' },
                                { label: 'Careers', route: 'https://www.linkedin.com/company/manovratha/jobs/', icon: 'work_history' }
                            ].map((item, idx) => (
                                <li key={idx}>
                                    {item.route.startsWith('http') ? (
                                        <a
                                            href={item.route}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-3 hover:text-brand-primary transition-colors text-left w-full"
                                        >
                                            <span className="material-symbols-outlined text-xl text-brand-secondary group-hover:text-brand-primary transition-colors" aria-hidden="true">{item.icon}</span>
                                            <span>{item.label}</span>
                                        </a>
                                    ) : (
                                        <Link
                                            to={item.route}
                                            className="group flex items-center gap-3 hover:text-brand-primary transition-colors text-left w-full"
                                        >
                                            <span className="material-symbols-outlined text-xl text-brand-secondary group-hover:text-brand-primary transition-colors" aria-hidden="true">{item.icon}</span>
                                            <span>{item.label}</span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white text-lg mb-8 tracking-wide">Support</h3>
                        <ul className="space-y-6 text-base">
                            {[
                                { label: 'Contact Us', route: '/contact', icon: 'mail' },
                                { label: 'FAQ', route: '/faq', icon: 'live_help' },
                                { label: 'Privacy & Ethics', route: '/privacy', icon: 'gavel' }
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={item.route}
                                        className="group flex items-center gap-3 hover:text-brand-primary transition-colors text-left w-full"
                                    >
                                        <span className="material-symbols-outlined text-xl text-brand-secondary group-hover:text-brand-primary transition-colors" aria-hidden="true">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-brand-light/70">
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