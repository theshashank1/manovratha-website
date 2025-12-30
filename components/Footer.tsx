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
                <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">spa</span>
                </div>
                <span className="font-display text-3xl text-white">Manovratha</span>
             </div>
             <p className="leading-relaxed max-w-sm mb-8 text-lg">
                Empowering professionals, institutions, and every mind that matters with ethical, AI-integrated care.
             </p>
             <div className="flex gap-4">
                 {[
                    { l: 'IG', bg: 'hover:bg-pink-600', link: 'https://instagram.com/manovratha' },
                    { l: 'WA', bg: 'hover:bg-green-600', link: '#' },
                    { l: 'EM', bg: 'hover:bg-blue-600', link: 'mailto:wellbeing@manovratha.in' }
                 ].map((s, i) => (
                     <a key={i} href={s.link} target="_blank" rel="noreferrer" className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors ${s.bg}`}>
                        <span className="font-bold text-xs">{s.l}</span>
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