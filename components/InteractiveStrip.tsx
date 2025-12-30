import React, { useState } from 'react';
import BoxBreathing from './BoxBreathing';
import { WeatherOption } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

// Cast motion components to any to bypass strict type checking issues in this environment
const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;

const weatherOptions: WeatherOption[] = [
  { id: 'heavy', label: 'Heavy', icon: 'thunderstorm', bgColorClass: 'bg-blue-100', textColorClass: 'text-blue-600' },
  { id: 'cloudy', label: 'Cloudy', icon: 'cloud', bgColorClass: 'bg-gray-100', textColorClass: 'text-gray-600' },
  { id: 'shining', label: 'Shining', icon: 'light_mode', bgColorClass: 'bg-yellow-100', textColorClass: 'text-yellow-600' },
  { id: 'clear', label: 'Clear', icon: 'wb_twilight', bgColorClass: 'bg-orange-100', textColorClass: 'text-orange-600' },
];

const InteractiveStrip: React.FC = () => {
    const [mood, setMood] = useState<string | null>(null);
    const [showPrompt, setShowPrompt] = useState(false);

    const handleMoodSelect = (id: string) => {
        setMood(id);
        setShowPrompt(true);
    };

    return (
        <section className="py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
                {/* Mood Check Component */}
                <MotionDiv 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-soft border border-brand-light relative overflow-hidden h-full flex flex-col justify-between"
                >
                    <div className="relative z-10">
                        <span className="bg-accent-rose/30 text-[#9F1239] px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 inline-block">Daily Check-in</span>
                        <h3 className="font-display text-3xl md:text-4xl text-brand-dark mb-3 md:mb-4">How are you feeling?</h3>
                        <p className="text-brand-dark/70 text-lg md:text-xl mb-8 md:mb-12 font-medium">Take a playful pause to register your inner weather.</p>
                        
                        <div className="flex flex-wrap justify-center sm:justify-between gap-4 mb-6 md:mb-8">
                            {weatherOptions.map((w, index) => (
                                <MotionButton 
                                    key={w.id} 
                                    onClick={() => handleMoodSelect(w.id)}
                                    // Subtle floating animation for each icon
                                    animate={{ 
                                        y: mood === w.id ? -10 : [0, -5, 0],
                                        scale: mood === w.id ? 1.15 : 1
                                    }}
                                    transition={{
                                        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }, // Staggered float
                                        scale: { type: "spring", stiffness: 300, damping: 15 }
                                    }}
                                    whileHover={{ scale: 1.1, y: -8 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`flex flex-col items-center gap-2 md:gap-3 transition-all duration-500 ${mood && mood !== w.id ? 'opacity-40 grayscale-[0.5]' : 'opacity-100'} w-[calc(50%-1rem)] sm:w-auto`}
                                >
                                    <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full ${w.bgColorClass} flex items-center justify-center ${w.textColorClass} shadow-sm border-2 ${mood === w.id ? 'border-brand-primary shadow-md' : 'border-transparent'}`}>
                                        <span className="material-symbols-outlined text-3xl sm:text-4xl">{w.icon}</span>
                                    </div>
                                    <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-dark/70">{w.label}</span>
                                </MotionButton>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence>
                        {showPrompt && (
                            <MotionDiv 
                                initial={{ opacity: 0, height: 0, y: 20 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="bg-[#E8F0E6] p-4 md:p-6 rounded-3xl border border-brand-primary/20 overflow-hidden relative z-10"
                            >
                                <p className="text-brand-dark font-medium text-base md:text-lg text-center leading-relaxed">
                                    Thank you for checking in. <br/>
                                    <span className="text-[#6B8E5E] font-bold text-lg md:text-xl block mt-2">Try the breathing exercise next to center yourself →</span>
                                </p>
                            </MotionDiv>
                        )}
                    </AnimatePresence>
                    
                    {/* Background blob for organic feel */}
                    <MotionDiv 
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-sun/20 rounded-full blur-3xl pointer-events-none"
                    />
                </MotionDiv>

                {/* Breathing Component */}
                <MotionDiv 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`relative transition-all duration-500 h-[350px] md:h-full`}
                >
                    <AnimatePresence>
                        {showPrompt && (
                            <MotionDiv 
                                initial={{ opacity: 0, scale: 0, y: 10, x: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                                exit={{ opacity: 0, scale: 0 }}
                                className="absolute -top-4 right-4 md:-top-6 md:right-10 bg-[#6B8E5E] text-white text-xs md:text-sm font-bold px-4 py-1.5 md:px-6 md:py-2 rounded-full uppercase tracking-widest z-20 shadow-lg transform rotate-2"
                            >
                                Psychologist Recommended
                            </MotionDiv>
                        )}
                    </AnimatePresence>
                    <div className={`${showPrompt ? 'ring-4 ring-[#6B8E5E]/30 rounded-[2.5rem] shadow-xl' : ''} h-full transition-all duration-500`}>
                        <BoxBreathing />
                    </div>
                </MotionDiv>
            </div>
        </section>
    );
};

export default InteractiveStrip;