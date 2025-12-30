import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// Cast motion components
const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;

const Hero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // GSAP Text Reveal Animation
    if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        const ctx = gsap.context(() => {
            gsap.fromTo(words, 
                { y: 100, opacity: 0, rotate: 5 },
                { y: 0, opacity: 1, rotate: 0, stagger: 0.05, duration: 1.2, ease: "power4.out", delay: 0.2 }
            );
        }, containerRef);
        return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={containerRef} className="relative pt-28 pb-12 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Dynamic Background Elements */}
      <MotionDiv 
        animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-gradient-to-tr from-[#E8F0E6] to-[#dcfce7] rounded-full blur-[80px] -z-10"
      ></MotionDiv>
      <MotionDiv 
        animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-gradient-to-br from-[#FECDD3] to-[#fff1f2] rounded-full blur-[80px] -z-10"
      ></MotionDiv>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Content */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            <MotionDiv 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 md:px-6 rounded-full bg-white/80 backdrop-blur-sm border border-brand-light shadow-sm mb-6 md:mb-8 hover:shadow-md transition-shadow cursor-default group"
            >
                <span className="material-symbols-outlined text-[#6B8E5E] text-lg md:text-xl group-hover:animate-spin transition-transform">spa</span>
                <span className="text-[10px] md:text-sm font-bold tracking-widest text-brand-dark/70 uppercase">Wellness Reimagined</span>
            </MotionDiv>
            
            <h1 ref={headlineRef} className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-dark leading-[1.1] mb-6 md:mb-8">
                <span className="block overflow-hidden"><span className="word inline-block">The</span> <span className="word inline-block">sanctuary</span></span>
                <span className="block overflow-hidden"><span className="word inline-block">for</span> <span className="word inline-block relative text-[#6B8E5E]">
                    healing
                    <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-[#FDE68A] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.5" />
                    </svg>
                </span> <span className="word inline-block">minds</span></span>
            </h1>
            
            <p className="text-base md:text-xl text-brand-dark/70 font-medium mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 md:px-0">
                A vibrant ecosystem for psychology professionals to learn, connect, and nurture their own wellbeing without the heaviness.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 md:px-0">
                <MotionButton 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#6B8E5E] text-white font-bold text-lg shadow-xl shadow-[#6B8E5E]/20 hover:shadow-[#6B8E5E]/40 flex items-center justify-center gap-2 transition-all"
                >
                    <span>Join the Community</span>
                    <span className="material-symbols-outlined text-sm">favorite</span>
                </MotionButton>
                
                <MotionButton 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-brand-light text-brand-dark font-bold text-lg shadow-sm hover:border-[#6B8E5E]/50 flex items-center justify-center gap-2 group transition-all"
                >
                    <span>Explore Solutions</span>
                    <span className="material-symbols-outlined text-sm group-hover:rotate-45 transition-transform">explore</span>
                </MotionButton>
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
                <div className="flex -space-x-3">
                    {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
                    ].map((src, i) => (
                    <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-white overflow-hidden shadow-sm">
                        <img alt="User" className="w-full h-full object-cover" src={src} />
                    </div>
                    ))}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#D1E2CF] flex items-center justify-center text-[10px] md:text-xs font-bold text-[#4A6741] border-[3px] border-white shadow-sm">+2k</div>
                </div>
                <div className="text-left">
                    <p className="text-xs md:text-sm font-bold text-brand-dark">Trusted by pros</p>
                    <div className="flex text-yellow-400 text-xs">★★★★★</div>
                </div>
            </div>
        </div>

        {/* Right Visual - 4 Pillars */}
        {/* Changed from hidden lg:block to visible on all screens but adjusted styling for mobile */}
        <div className="relative h-[400px] md:h-[600px] w-full perspective-[2000px] order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Main Image Container */}
            <MotionDiv 
                initial={{ opacity: 0, rotateY: 15, x: 50 }}
                animate={{ opacity: 1, rotateY: -5, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center z-10 scale-[0.8] md:scale-100"
            >
                <div className="relative w-[300px] md:w-[400px] h-[400px] md:h-[550px] group">
                    <div className="absolute inset-0 bg-brand-primary rounded-[3rem] rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Happy professional" 
                        className="w-full h-full object-cover rounded-[3rem] border-8 border-white shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    
                    {/* 4 Pillars Floating Cards - Staggered Entry */}
                    {/* Position adjustments for mobile: simplified layout logic via classNames isn't easy with absolute, so keeping absolute but ensuring container scale handles it */}
                    {[
                        { title: "Incubation", icon: "self_improvement", color: "bg-indigo-100 text-indigo-600", pos: "-top-8 -right-12", delay: 0.5 },
                        { title: "Sanctuary", icon: "spa", color: "bg-emerald-100 text-emerald-600", pos: "top-1/3 -left-12 md:-left-24", delay: 0.7 },
                        { title: "Community", icon: "handshake", color: "bg-amber-100 text-amber-600", pos: "bottom-1/4 -right-12 md:-right-20", delay: 0.9 },
                        { title: "Tech Support", icon: "laptop_chromebook", color: "bg-blue-100 text-blue-600", pos: "-bottom-6 -left-8 md:-left-12", delay: 1.1 },
                    ].map((pillar, i) => (
                        <MotionDiv 
                            key={i}
                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: pillar.delay, duration: 0.5, type: "spring" }}
                            whileHover={{ scale: 1.1, zIndex: 50 }}
                            className={`absolute ${pillar.pos} bg-white/90 backdrop-blur-md p-3 md:p-4 pr-6 rounded-2xl shadow-floating z-20 flex items-center gap-3 border border-white/50 w-44 md:w-52 cursor-pointer hover:shadow-xl transition-shadow`}
                        >
                             <div className={`w-8 h-8 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${pillar.color} shadow-inner shrink-0`}>
                                <span className="material-symbols-outlined text-lg md:text-2xl">{pillar.icon}</span>
                            </div>
                            <div>
                                <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pillar {i+1}</p>
                                <p className="font-bold text-brand-dark text-xs md:text-base leading-tight">{pillar.title}</p>
                            </div>
                        </MotionDiv>
                    ))}
                </div>
            </MotionDiv>
            
            {/* Decorative Orbit */}
            <MotionDiv 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] border border-brand-primary/10 rounded-full border-dashed -z-10"
            ></MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Hero;