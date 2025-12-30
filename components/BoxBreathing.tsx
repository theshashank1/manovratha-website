import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;

const BoxBreathing: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'IDLE' | 'INHALE' | 'HOLD' | 'EXHALE'>('IDLE');
  const [text, setText] = useState('Start');

  const circleVariants = {
    IDLE: { scale: 1, opacity: 0.5, borderColor: "#E2E8E0", borderWidth: "1px" },
    INHALE: { scale: 1.5, opacity: 1, borderColor: "#5A7A58", borderWidth: "4px", transition: { duration: 4, ease: "easeInOut" } },
    HOLD: { scale: 1.5, opacity: 1, borderColor: "#5A7A58", borderWidth: "4px", transition: { duration: 4, ease: "linear" } },
    HOLD_EMPTY: { scale: 1, opacity: 0.5, borderColor: "#E2E8E0", borderWidth: "1px", transition: { duration: 4, ease: "linear" } },
    EXHALE: { scale: 1, opacity: 0.5, borderColor: "#E2E8E0", borderWidth: "1px", transition: { duration: 4, ease: "easeInOut" } },
  };

  useEffect(() => {
    let interval: any;
    if (isActive) {
      const runCycle = async () => {
        setPhase('INHALE'); setText('Inhale');
        await new Promise(r => setTimeout(r, 4000));
        if (!isActive) return;
        setPhase('HOLD'); setText('Hold');
        await new Promise(r => setTimeout(r, 4000));
        if (!isActive) return;
        setPhase('EXHALE'); setText('Exhale');
        await new Promise(r => setTimeout(r, 4000));
        if (!isActive) return;
        setPhase('IDLE'); setText('Wait');
        await new Promise(r => setTimeout(r, 4000));
      };
      runCycle();
      interval = setInterval(runCycle, 16000);
    } else {
      setPhase('IDLE');
      setText('Start');
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div 
      className="bg-brand-dark text-white rounded-3xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden h-full cursor-pointer group"
      onClick={() => setIsActive(!isActive)}
    >
        <div className="flex justify-between items-center z-10">
            <h3 className="font-display text-2xl">Take a breath with us.</h3>
            <span className="material-symbols-outlined opacity-50">schedule</span>
        </div>

        <div className="flex-grow flex items-center justify-center relative z-10 py-8">
            <div className="relative w-48 h-48 flex items-center justify-center">
                <MotionDiv 
                    variants={circleVariants}
                    animate={phase === 'IDLE' && isActive && text === 'Wait' ? 'HOLD_EMPTY' : phase}
                    className="absolute w-24 h-24 rounded-full border-white/20 border"
                ></MotionDiv>
                <span className="font-medium text-xl tracking-widest uppercase">{text}</span>
            </div>
        </div>
        
        <p className="text-white/40 text-sm text-center z-10">A box breathing timer: Inhale, Hold, Exhale, Hold.</p>
    </div>
  );
};

export default BoxBreathing;