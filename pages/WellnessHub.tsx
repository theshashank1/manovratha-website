import React, { useState, useEffect } from 'react';
import { Reveal } from '../components/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';

// --- Types & Data ---

interface EmotionNode {
    id: string;
    label: string;
    color: string;
    textColor: string;
    borderColor: string;
    definition?: string;
    clinicalNote?: string;
    children?: EmotionNode[];
}

const emotionData: EmotionNode[] = [
    {
        id: "happy", label: "Happy", color: "bg-amber-50", borderColor: "border-amber-200", textColor: "text-amber-900",
        definition: "A state of well-being and contentment.",
        children: [
            {
                id: "playful", label: "Playful", color: "bg-amber-100", borderColor: "border-amber-300", textColor: "text-amber-900", definition: "Spirited and lighthearted interaction.", children: [
                    { id: "aroused", label: "Aroused", color: "bg-amber-200", borderColor: "border-amber-400", textColor: "text-amber-950", definition: "Heightened physiological or emotional activation." },
                    { id: "cheeky", label: "Cheeky", color: "bg-amber-200", borderColor: "border-amber-400", textColor: "text-amber-950", definition: "Bold, irreverent, or amusingly impolite." }
                ]
            },
            {
                id: "content", label: "Content", color: "bg-amber-100", borderColor: "border-amber-300", textColor: "text-amber-900", definition: "Satisfied with what one is or has.", children: [
                    { id: "free", label: "Free", color: "bg-amber-200", borderColor: "border-amber-400", textColor: "text-amber-950", definition: "Not under the control or power of another." },
                    { id: "joyful", label: "Joyful", color: "bg-amber-200", borderColor: "border-amber-400", textColor: "text-amber-950", definition: "Feeling, expressing, or causing great pleasure." }
                ]
            },
            {
                id: "proud", label: "Proud", color: "bg-amber-100", borderColor: "border-amber-300", textColor: "text-amber-900", definition: "Feeling deep pleasure or satisfaction as a result of one's own achievements.", children: [
                    { id: "successful", label: "Successful", color: "bg-amber-200", borderColor: "border-amber-400", textColor: "text-amber-950", definition: "Accomplishing an aim or purpose." },
                    { id: "confident", label: "Confident", color: "bg-amber-200", borderColor: "border-amber-400", textColor: "text-amber-950", definition: "Feeling or showing certainty about something." }
                ]
            }
        ]
    },
    {
        id: "sad", label: "Sad", color: "bg-slate-50", borderColor: "border-slate-200", textColor: "text-slate-900",
        definition: "Emotional pain associated with, or characterized by, feelings of disadvantage, loss, despair, grief.",
        children: [
            {
                id: "lonely", label: "Lonely", color: "bg-slate-100", borderColor: "border-slate-300", textColor: "text-slate-900", definition: "Sadness because one has no friends or company.", children: [
                    { id: "isolated", label: "Isolated", color: "bg-slate-200", borderColor: "border-slate-400", textColor: "text-slate-950", definition: "Far away from other places, buildings, or people." },
                    { id: "abandoned", label: "Abandoned", color: "bg-slate-200", borderColor: "border-slate-400", textColor: "text-slate-950", definition: "Having been deserted or cast off." }
                ]
            },
            {
                id: "depressed", label: "Depressed", color: "bg-slate-100", borderColor: "border-slate-300", textColor: "text-slate-900", definition: "A state of general unhappiness or despondency.", children: [
                    { id: "empty", label: "Empty", color: "bg-slate-200", borderColor: "border-slate-400", textColor: "text-slate-950", definition: "Containing nothing; not filled or occupied." },
                    { id: "inferior", label: "Inferior", color: "bg-slate-200", borderColor: "border-slate-400", textColor: "text-slate-950", definition: "Lower in rank, status, or quality." }
                ]
            }
        ]
    },
    {
        id: "angry", label: "Angry", color: "bg-rose-50", borderColor: "border-rose-200", textColor: "text-rose-900",
        definition: "A strong feeling of annoyance, displeasure, or hostility.",
        children: [
            {
                id: "letdown", label: "Let down", color: "bg-rose-100", borderColor: "border-rose-300", textColor: "text-rose-900", definition: "Disappointment.", children: [
                    { id: "betrayed", label: "Betrayed", color: "bg-rose-200", borderColor: "border-rose-400", textColor: "text-rose-950", definition: "Exposed to danger by treacherously giving information to an enemy." },
                    { id: "resentful", label: "Resentful", color: "bg-rose-200", borderColor: "border-rose-400", textColor: "text-rose-950", definition: "Feeling or expressing bitterness or indignation at having been treated unfairly." }
                ]
            },
            {
                id: "mad", label: "Mad", color: "bg-rose-100", borderColor: "border-rose-300", textColor: "text-rose-900", definition: "Very angry.", children: [
                    { id: "furious", label: "Furious", color: "bg-rose-200", borderColor: "border-rose-400", textColor: "text-rose-950", definition: "Extremely angry." },
                    { id: "jealous", label: "Jealous", color: "bg-rose-200", borderColor: "border-rose-400", textColor: "text-rose-950", definition: "Feeling or showing envy of someone or their achievements and advantages." }
                ]
            }
        ]
    },
    {
        id: "fearful", label: "Fearful", color: "bg-indigo-50", borderColor: "border-indigo-200", textColor: "text-indigo-900",
        definition: "Feeling afraid; showing fear or anxiety.",
        children: [
            {
                id: "scared", label: "Scared", color: "bg-indigo-100", borderColor: "border-indigo-300", textColor: "text-indigo-900", definition: "Fearful; frightened.", children: [
                    { id: "helpless", label: "Helpless", color: "bg-indigo-200", borderColor: "border-indigo-400", textColor: "text-indigo-950", definition: "Unable to defend oneself or to act without help." },
                    { id: "frightened", label: "Frightened", color: "bg-indigo-200", borderColor: "border-indigo-400", textColor: "text-indigo-950", definition: "Afraid or anxious." }
                ]
            },
            {
                id: "anxious", label: "Anxious", color: "bg-indigo-100", borderColor: "border-indigo-300", textColor: "text-indigo-900", definition: "Experiencing worry, unease, or nervousness.", children: [
                    { id: "overwhelmed", label: "Overwhelmed", color: "bg-indigo-200", borderColor: "border-indigo-400", textColor: "text-indigo-950", definition: "Buried or drowned beneath a huge mass." },
                    { id: "worried", label: "Worried", color: "bg-indigo-200", borderColor: "border-indigo-400", textColor: "text-indigo-950", definition: "Anxious or troubled about actual or potential problems." }
                ]
            }
        ]
    }
];

const affirmations = [
    "My presence is an intervention in itself.",
    "I hold space, I do not carry the weight.",
    "I trust the process of therapy and the resilience of my client.",
    "My empathy is a tool, not a burden.",
    "I am enough for the work I am doing today.",
    "It is safe for me to set boundaries.",
    "I release the need to 'fix' and embrace the power to 'witness'.",
    "Scholarly rigor meets compassionate care.",
    "Accuracy in observation is an act of care."
];

// --- Micro-Components ---

const LabCard = ({ title, icon, onClick, children, badge, badgeColor, iconBgColor, iconColor }: any) => (
    <motion.div
        layoutId={`card-${title}`}
        onClick={onClick}
        whileHover={{ y: -4, boxShadow: "0 12px 30px -10px rgba(0,0,0,0.05)" }}
        whileTap={{ scale: 0.98 }}
        className="group relative bg-white rounded-[2rem] p-8 shadow-sm border border-brand-light cursor-pointer overflow-hidden flex flex-col h-full hover:border-brand-primary/20 transition-all"
    >
        <div className="flex justify-between items-start mb-6">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${iconBgColor || 'bg-gray-50'} ${iconColor || 'text-gray-600'}`}>
                <span className="material-symbols-outlined text-2xl">{icon}</span>
            </div>
            {badge && (
                <span className={`text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest ${badgeColor || 'bg-brand-dark text-white'}`}>{badge}</span>
            )}
        </div>

        <div className="mb-4">
            <h3 className="font-display text-2xl text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">{title}</h3>
            <p className="text-sm text-brand-dark/60 font-medium leading-relaxed">{children}</p>
        </div>

        <div className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-dark/30 group-hover:text-brand-primary transition-colors">
            Initialize <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </div>
    </motion.div>
);

// --- Tool Implementations (Focus Mode) ---

const CalibrationFocus = ({ onClose }: { onClose: () => void }) => {
    const [energy, setEnergy] = useState(50);
    const [clarity, setClarity] = useState(50);
    const [objectivity, setObjectivity] = useState(50);
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [resultType, setResultType] = useState<'optimal' | 'functional' | 'needs-care'>('functional');

    const handleCalibrate = () => {
        setAnalyzing(true);
        setTimeout(() => {
            setAnalyzing(false);
            const score = (energy + clarity + objectivity) / 3;
            if (score > 80) {
                setResult("Optimal Resonance. You are well-resourced.");
                setResultType('optimal');
            }
            else if (score > 50) {
                setResult("Functional. Proceed with mindful awareness.");
                setResultType('functional');
            }
            else {
                setResult("Resource Check Recommended. Gentle pacing advised.");
                setResultType('needs-care');
            }
        }, 1500);
    };

    return (
        <div className="flex flex-col w-full max-w-2xl mx-auto py-4 md:py-6">
            <div className="text-center mb-8 md:mb-10">
                <h2 className="text-3xl md:text-4xl font-display text-brand-dark mb-3">Therapist Calibration Station</h2>
                <p className="text-brand-dark/60 text-base md:text-lg">"The primary instrument in therapy is the self." — Check your tuning.</p>
            </div>

            {!result ? (
                <div className="space-y-8 md:space-y-12 bg-[#F8FAF8] p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-brand-light/50">
                    {[
                        { label: "Physical Energy", val: energy, set: setEnergy, left: "Depleted", right: "Vital", tooltip: "Your physiological capacity to hold space." },
                        { label: "Cognitive Clarity", val: clarity, set: setClarity, left: "Foggy", right: "Lucid", tooltip: "Mental sharpness and ability to synthesize information." },
                        { label: "Objectivity (Counter-Transference)", val: objectivity, set: setObjectivity, left: "Reactive", right: "Neutral", tooltip: "Awareness of your own emotional projection onto the client." }
                    ].map((item, i) => (
                        <div key={i}>
                            <div className="flex justify-between mb-3 items-end">
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm md:text-base text-brand-dark">{item.label}</span>
                                    <span className="text-[10px] md:text-xs text-brand-dark/40 font-medium mt-0.5">{item.tooltip}</span>
                                </div>
                                <span className="text-brand-primary font-bold text-lg">{item.val}%</span>
                            </div>
                            <input
                                type="range"
                                min="0" max="100"
                                value={item.val}
                                onChange={(e) => item.set(Number(e.target.value))}
                                className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-brand-primary hover:accent-brand-dark transition-all"
                            />
                            <div className="flex justify-between mt-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                <span>{item.left}</span>
                                <span>{item.right}</span>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={handleCalibrate}
                        disabled={analyzing}
                        className="w-full bg-brand-dark text-white py-4 md:py-5 rounded-2xl font-bold text-lg hover:bg-brand-primary transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                    >
                        {analyzing ? (
                            <>
                                <span className="material-symbols-outlined animate-spin">sync</span>
                                Calibrating...
                            </>
                        ) : (
                            <>
                                <span className="material-symbols-outlined">tune</span>
                                Run Accuracy Check
                            </>
                        )}
                    </button>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border text-center shadow-card ${resultType === 'optimal' ? 'border-emerald-100 bg-emerald-50/30' :
                        resultType === 'functional' ? 'border-amber-100 bg-amber-50/30' :
                            'border-rose-100 bg-rose-50/30'
                        }`}
                >
                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-sm ${resultType === 'optimal' ? 'bg-emerald-100 text-emerald-700' :
                        resultType === 'functional' ? 'bg-amber-100 text-amber-700' :
                            'bg-rose-100 text-rose-700'
                        }`}>
                        <span className="material-symbols-outlined text-4xl md:text-5xl">
                            {resultType === 'optimal' ? 'verified' : resultType === 'functional' ? 'balance' : 'self_improvement'}
                        </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display text-brand-dark mb-4">{result}</h3>
                    <p className="text-brand-dark/70 mb-8 md:mb-10 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
                        {resultType === 'needs-care'
                            ? "Compassion for yourself is a prerequisite for compassion for others. Take a moment."
                            : "Your instrument is tuned. Trust your training and your presence."}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => setResult(null)} className="px-6 py-3 rounded-xl text-brand-dark font-bold hover:bg-gray-100 transition-colors">Recalibrate</button>
                        <button onClick={onClose} className="bg-brand-dark text-white px-10 py-3 rounded-xl font-bold hover:bg-brand-primary transition-colors shadow-md">Return to Lab</button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

const MSEFocus = ({ onClose }: { onClose: () => void }) => {
    const [mseData, setMseData] = useState<Record<string, string>>({});
    const [copied, setCopied] = useState(false);

    const categories = [
        { id: 'appearance', label: 'Appearance', options: ['Well-groomed', 'Disheveled', 'Appropriate', 'Eccentric'] },
        { id: 'behavior', label: 'Behavior', options: ['Cooperative', 'Guarded', 'Agitated', 'Psychomotor Retardation'] },
        { id: 'affect', label: 'Affect', options: ['Euthymic', 'Flat', 'Labile', 'Incongruent'] },
        { id: 'speech', label: 'Speech', options: ['Normal rate/tone', 'Pressured', 'Latent', 'Monosyllabic'] },
        { id: 'thought', label: 'Thought Process', options: ['Linear', 'Tangential', 'Circumstantial', 'Flight of Ideas'] },
    ];

    const toggleOption = (catId: string, option: string) => {
        setMseData(prev => ({ ...prev, [catId]: option }));
    };

    const generateReport = () => {
        const timestamp = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });
        const report = categories.map(c => `${c.label}: ${mseData[c.id] || 'Not noted'}`).join(' | ');
        return `[MSE LOG @ ${timestamp}]\n${report}`;
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generateReport());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="h-full flex flex-col max-w-5xl mx-auto py-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 md:mb-8 border-b border-gray-100 pb-6 shrink-0 gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-display text-brand-dark mb-1">MSE Ledger</h2>
                    <p className="text-brand-dark/60 font-medium text-sm md:text-base">Rapid Mental Status Examination Builder</p>
                </div>
                <button
                    onClick={handleCopy}
                    className={`px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-md w-full sm:w-auto justify-center ${copied ? 'bg-emerald-600 text-white' : 'bg-brand-primary text-white hover:bg-brand-dark'
                        }`}
                >
                    {copied ? <span className="material-symbols-outlined">check_circle</span> : <span className="material-symbols-outlined">content_copy</span>}
                    {copied ? "Copied" : "Copy Log"}
                </button>
            </div>

            <div className="flex-grow overflow-y-auto custom-scrollbar pr-2 md:pr-4 space-y-6 md:space-y-8 pb-10">
                {categories.map((cat) => (
                    <div key={cat.id} className="">
                        <h3 className="font-bold text-brand-dark mb-3 md:mb-4 text-xs uppercase tracking-widest border-l-4 border-brand-primary pl-3">{cat.label}</h3>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {cat.options.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => toggleOption(cat.id, opt)}
                                    className={`px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all border ${mseData[cat.id] === opt
                                        ? 'bg-brand-dark text-white border-brand-dark shadow-md transform scale-105'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-brand-primary hover:text-brand-primary'
                                        }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-4 md:p-6 bg-amber-50 border border-amber-100 rounded-2xl flex gap-4 items-start shrink-0">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-amber-600 text-lg">school</span>
                </div>
                <div>
                    <p className="text-sm font-bold text-amber-900 mb-1">Scholar's Note</p>
                    <p className="text-xs md:text-sm text-amber-800/80 leading-relaxed">
                        This ledger is a rapid-entry aid. In your clinical notes, expand on these observations with specific examples.
                    </p>
                </div>
            </div>
        </div>
    );
};

const GroundingFocus = ({ onClose }: { onClose: () => void }) => {
    const [step, setStep] = useState(0);
    const steps = [
        { count: 5, text: "Things you see", sub: "Look for shadows, light patterns, or specific colors." },
        { count: 4, text: "Things you touch", sub: "The texture of your chair, your clothing, the desk." },
        { count: 3, text: "Things you hear", sub: "Distant traffic, the hum of the AC, silence." },
        { count: 2, text: "Things you smell", sub: "Soap, old paper, or a smell you enjoy imagining." },
        { count: 1, text: "Thing you taste", sub: "A sip of water, or the lingering taste of coffee." }
    ];

    return (
        <div className="flex flex-col h-full max-w-xl mx-auto justify-center py-6 md:py-10 min-h-[500px]">
            <div className="text-center mb-8 md:mb-12 flex-grow flex flex-col justify-center relative">
                <AnimatePresence mode="wait">
                    {step < 5 ? (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            <div className="text-[8rem] md:text-[15rem] font-display text-teal-500/5 leading-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">{steps[step].count}</div>
                            <h2 className="text-3xl md:text-5xl font-display text-brand-dark mb-4 md:mb-6">{steps[step].text}</h2>
                            <p className="text-lg md:text-xl text-brand-dark/60 font-medium max-w-xs mx-auto">{steps[step].sub}</p>
                        </motion.div>
                    ) : (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
                            <motion.span
                                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
                                className="material-symbols-outlined text-6xl md:text-8xl text-teal-600 mb-6 md:mb-8 bg-teal-50 p-6 md:p-8 rounded-full shadow-soft"
                            >spa</motion.span>
                            <h2 className="text-3xl md:text-4xl font-display text-brand-dark mb-3">Grounded.</h2>
                            <p className="text-brand-dark/60 text-base md:text-lg">You are here. You are safe. You are ready.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="flex gap-4 justify-center w-full">
                {step < 5 ? (
                    <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setStep(step + 1)}
                        className="w-full md:w-auto bg-brand-dark text-white px-10 md:px-16 py-4 md:py-5 rounded-2xl text-lg font-bold hover:bg-brand-primary transition-colors shadow-lg"
                    >
                        Next Sense
                    </motion.button>
                ) : (
                    <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={onClose}
                        className="w-full md:w-auto bg-teal-600 text-white px-10 md:px-16 py-4 md:py-5 rounded-2xl text-lg font-bold hover:bg-teal-700 transition-colors shadow-lg"
                    >
                        Return to Lab
                    </motion.button>
                )}
            </div>
        </div>
    );
};

const BreathingFocus = () => {
    const [active, setActive] = useState(false);
    const [phase, setPhase] = useState('Idle');

    useEffect(() => {
        if (!active) { setPhase('Idle'); return; }
        const loop = async () => {
            setPhase('Inhale'); await new Promise(r => setTimeout(r, 4000));
            setPhase('Hold'); await new Promise(r => setTimeout(r, 4000));
            setPhase('Exhale'); await new Promise(r => setTimeout(r, 4000));
            setPhase('Rest'); await new Promise(r => setTimeout(r, 4000));
            if (active) loop();
        };
        loop();
    }, [active]);

    return (
        <div className="flex flex-col items-center justify-center h-full py-6 md:py-10 min-h-[500px]">
            <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
                <motion.div
                    animate={
                        phase === 'Inhale' ? { scale: 1.618, opacity: 1, borderWidth: 12, borderColor: "#0ea5e9" } :
                            phase === 'Hold' ? { rotate: 90, scale: 1.618, borderWidth: 12, borderColor: "#0284c7" } :
                                phase === 'Exhale' ? { scale: 1, opacity: 0.6, borderWidth: 4, borderColor: "#7dd3fc" } :
                                    { scale: 1, opacity: 0.3, borderColor: "#e0f2fe" }
                    }
                    transition={{ duration: 4, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-[3rem] border-sky-500 border-4"
                />

                {active && (
                    <motion.div
                        animate={{ scale: [1, 2.5], opacity: [0.2, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-[3rem] bg-sky-200 -z-10"
                    />
                )}

                <motion.div
                    key={phase}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-display text-brand-dark"
                >
                    {phase}
                </motion.div>
            </div>

            <div className="mt-16 md:mt-20 text-center">
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-dark/40 mb-4">Box Breathing Protocol</p>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActive(!active)}
                    className={`px-10 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg transition-all shadow-md hover:shadow-lg ${active ? 'bg-sky-100 text-sky-700' : 'bg-brand-dark text-white'}`}
                >
                    {active ? "Pause" : "Begin Practice"}
                </motion.button>
            </div>
        </div>
    );
};

const CognitiveContainmentFocus = () => {
    const [input, setInput] = useState("");
    const [cleared, setCleared] = useState(false);

    const handleClear = () => {
        setCleared(true);
        setTimeout(() => {
            setInput("");
            setCleared(false);
        }, 2500);
    };

    return (
        <div className="max-w-2xl mx-auto h-full flex flex-col justify-center py-4 md:py-6 min-h-[500px]">
            <div className="text-center mb-8 md:mb-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-50 text-purple-600 rounded-[2rem] flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-sm">
                    <span className="material-symbols-outlined text-3xl md:text-4xl">lock</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-display text-brand-dark mb-2">Cognitive Containment</h2>
                <p className="text-brand-dark/60 text-base md:text-lg">A digital vault for session residue, intrusive thoughts, or counter-transference.</p>
            </div>

            <div className="relative flex-grow max-h-[300px] md:max-h-[400px]">
                <AnimatePresence>
                    {!cleared ? (
                        <motion.textarea
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ y: 50, opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                            transition={{ duration: 0.5 }}
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder="Type whatever you need to put down..."
                            className="w-full h-full bg-[#F8FAF8] border-2 border-dashed border-purple-200 p-6 md:p-10 rounded-[2.5rem] text-lg md:text-2xl resize-none focus:ring-0 focus:border-purple-400 outline-none leading-relaxed shadow-inner placeholder:text-gray-300"
                        />
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col items-center justify-center bg-purple-50 rounded-[2.5rem] border border-purple-100 shadow-inner"
                        >
                            <motion.span
                                initial={{ rotate: -20, scale: 0.5 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring" }}
                                className="material-symbols-outlined text-6xl md:text-8xl text-purple-400 mb-6"
                            >verified_user</motion.span>
                            <p className="font-bold text-purple-800 text-xl md:text-2xl font-display">Contained.</p>
                            <p className="text-purple-600/70 text-sm md:text-base mt-2">You don't need to carry this anymore.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="mt-8 md:mt-10">
                <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={handleClear}
                    disabled={!input}
                    className="w-full bg-purple-600 text-white py-4 md:py-5 rounded-2xl font-bold text-lg hover:bg-purple-700 transition-colors disabled:opacity-50 shadow-lg disabled:shadow-none flex items-center justify-center gap-3"
                >
                    <span className="material-symbols-outlined">lock_clock</span>
                    Seal in Vault & Clear Mind
                </motion.button>
                <div className="flex items-center justify-center gap-2 mt-4 text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-widest">
                    <span className="material-symbols-outlined text-xs md:text-sm">auto_delete</span>
                    <span>Data is ephemeral & deleted permanently</span>
                </div>
            </div>
        </div>
    );
};

const EmotionWheelFocus = () => {
    const [currentNodes, setCurrentNodes] = useState<EmotionNode[]>(emotionData);
    const [history, setHistory] = useState<{ nodes: EmotionNode[], title: string }[]>([]);
    const [selection, setSelection] = useState<EmotionNode | null>(null);

    const handleSelect = (node: EmotionNode) => {
        if (node.children) {
            const currentTitle = history.length === 0 ? "Primary Emotion" : history[history.length - 1].title;
            setHistory([...history, { nodes: currentNodes, title: node.label }]);
            setCurrentNodes(node.children);
        } else {
            setSelection(node);
        }
    };

    const handleBack = () => {
        if (selection) {
            setSelection(null);
        } else if (history.length > 0) {
            const previous = history[history.length - 1];
            setCurrentNodes(previous.nodes);
            setHistory(history.slice(0, -1));
        }
    };

    const currentTitle = selection
        ? selection.label
        : history.length > 0
            ? history[history.length - 1].title
            : "Identify Emotion";

    return (
        <div className="h-full flex flex-col py-2 md:py-4">
            <div className="flex justify-between items-center mb-6 md:mb-10 border-b border-gray-100 pb-4 md:pb-6 shrink-0">
                <h2 className="text-2xl md:text-3xl font-display text-brand-dark flex items-center gap-2 md:gap-3">
                    {(history.length > 0 || selection) && (
                        <button onClick={handleBack} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 mr-1 md:mr-2 transition-colors">
                            <span className="material-symbols-outlined text-base md:text-lg">arrow_back</span>
                        </button>
                    )}
                    {currentTitle}
                </h2>
                <span className="text-[10px] md:text-xs font-bold uppercase text-gray-400 tracking-widest bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                    {selection ? "Validation" : `Level ${history.length + 1}`}
                </span>
            </div>

            {selection ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex-grow flex flex-col items-center justify-center p-8 md:p-12 rounded-[2.5rem] ${selection.color} border-2 ${selection.borderColor} text-center`}
                >
                    <h3 className={`text-4xl md:text-6xl font-display mb-6 md:mb-8 ${selection.textColor}`}>{selection.label}</h3>
                    <p className={`text-xl md:text-3xl font-medium max-w-2xl leading-relaxed ${selection.textColor} opacity-80 mb-8 md:mb-12`}>
                        {selection.definition || "A distinct emotional state."}
                    </p>

                    <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl max-w-xl mx-auto border border-white/20">
                        <div className="flex items-center justify-center gap-2 mb-3 opacity-60">
                            <span className="material-symbols-outlined text-sm">school</span>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Clinical Note</span>
                        </div>
                        <p className={`text-base md:text-lg opacity-80 ${selection.textColor}`}>
                            "Affect Labeling" (naming the emotion) reduces amygdala activity. By accurately identifying <strong>{selection.label}</strong>, you are actively regulating your nervous system.
                        </p>
                    </div>
                </motion.div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 overflow-y-auto custom-scrollbar p-1 pb-10">
                    {currentNodes.map((node) => (
                        <motion.button
                            key={node.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleSelect(node)}
                            className={`p-6 md:p-8 rounded-[2rem] border ${node.color} ${node.borderColor} ${node.textColor} text-xl md:text-2xl font-bold shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center min-h-[140px] md:min-h-[180px] group`}
                        >
                            <span className="block">{node.label}</span>
                            {node.children && (
                                <span className="flex items-center gap-1 mt-3 text-sm font-medium opacity-50 group-hover:opacity-100 transition-opacity">
                                    drill down <span className="material-symbols-outlined text-sm">expand_more</span>
                                </span>
                            )}
                        </motion.button>
                    ))}
                </div>
            )}
        </div>
    );
};

const AffirmationsFocus = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % affirmations.length);

    return (
        <div className="h-full flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-6 md:py-10 px-2 md:px-4">
            <div className="mb-10 md:mb-20">
                <span className="bg-amber-100 text-amber-900 px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border border-amber-200">For the Scholar & Healer</span>
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.2] md:leading-[1.15]">
                        "{affirmations[index]}"
                    </h2>
                </motion.div>
            </AnimatePresence>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                className="mt-16 md:mt-24 flex items-center gap-3 text-brand-primary font-bold text-base md:text-lg border border-brand-primary/20 px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-brand-primary/5 transition-all"
            >
                Next Reflection <span className="material-symbols-outlined">arrow_forward</span>
            </motion.button>
        </div>
    );
};

// --- Main Page ---

const WellnessHub: React.FC = () => {
    const [activeTool, setActiveTool] = useState<string | null>(null);

    useEffect(() => {
        if (activeTool) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [activeTool]);

    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            <div className="bg-brand-dark/5 border-b border-brand-dark/10 py-2 text-center absolute top-20 w-full z-20 backdrop-blur-sm">
                <p className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-brand-dark/60 flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    RESEARCH PREVIEW • BETA V0.9 • BUILDING WITH CLINICIANS & MENTAL HEALTH PROFESSIONALS
                </p>
            </div>

            <div className="pt-40 md:pt-48 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 md:mb-32 border-b border-brand-dark/5 pb-12 md:pb-16 gap-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="bg-brand-dark text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm">Mental Health Professionals</span>
                            <span className="text-brand-dark/40 text-[10px] md:text-xs font-bold uppercase tracking-widest">Est. 2024</span>
                        </div>
                        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-dark mb-8 leading-[1.1]">
                            Counseling & <br className="hidden md:block" />Clinical Lab
                        </h1>
                        <p className="text-xl md:text-2xl text-brand-dark/60 font-medium max-w-2xl leading-relaxed">
                            A calibrated digital workbench for the Mental Health Scholar. Precision tools for accuracy checks, regulation, and assessment.
                        </p>
                    </div>
                    <div className="hidden lg:block mb-2">
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 text-right">Laboratory Status</div>
                        <div className="flex items-center gap-3 text-emerald-800 font-bold bg-emerald-50 border border-emerald-100 px-6 py-3 rounded-full shadow-sm">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Instruments Calibrated
                        </div>
                    </div>
                </div>

                <div className="space-y-32 mb-24">

                    {/* SECTION 1: Professional Readiness & Hygiene */}
                    <section>
                        <Reveal>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                                    <span className="material-symbols-outlined text-2xl">self_improvement</span>
                                </div>
                                <h2 className="font-display text-4xl text-brand-dark">Clinician Readiness & Hygiene</h2>
                            </div>
                        </Reveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Reveal delay={0.1}>
                                <LabCard
                                    title="Calibration"
                                    icon="tune"
                                    badge="Pre-Session"
                                    badgeColor="bg-[#4F46E5] text-white"
                                    iconBgColor="bg-slate-100"
                                    iconColor="text-slate-600"
                                    onClick={() => setActiveTool('calibration')}
                                >
                                    Calibrate your "Instrument of Self". Monitor energy and objectivity before sessions to prevent burnout.
                                </LabCard>
                            </Reveal>

                            <Reveal delay={0.2}>
                                <LabCard
                                    title="Cognitive Containment"
                                    icon="lock"
                                    badge="Post-Session"
                                    badgeColor="bg-[#9333EA] text-white"
                                    iconBgColor="bg-purple-50"
                                    iconColor="text-purple-600"
                                    onClick={() => setActiveTool('containment')}
                                >
                                    Securely offload session residue. A digital ritual to close the clinical loop and protect your personal peace.
                                </LabCard>
                            </Reveal>

                            <Reveal delay={0.3}>
                                <LabCard
                                    title="Affirmations"
                                    icon="auto_awesome"
                                    badge="Daily Ritual"
                                    badgeColor="bg-[#D97706] text-white"
                                    iconBgColor="bg-amber-50"
                                    iconColor="text-amber-600"
                                    onClick={() => setActiveTool('affirmations')}
                                >
                                    Anchoring statements for the scholar and healer. Realign with your purpose and professional values.
                                </LabCard>
                            </Reveal>
                        </div>
                    </section>

                    {/* SECTION 2: Clinical Assessment & Tools */}
                    <section>
                        <Reveal>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                                    <span className="material-symbols-outlined text-2xl">clinical_notes</span>
                                </div>
                                <h2 className="font-display text-4xl text-brand-dark">Clinical Assessment</h2>
                            </div>
                        </Reveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Reveal delay={0.1}>
                                <LabCard
                                    title="MSE Ledger"
                                    icon="fact_check"
                                    badge="Assessment"
                                    badgeColor="bg-emerald-600 text-white"
                                    iconBgColor="bg-emerald-50"
                                    iconColor="text-emerald-600"
                                    onClick={() => setActiveTool('mse')}
                                >
                                    Standardize clinical observations efficiently. Rapidly capture appearance, affect, and behavior for accurate documentation.
                                </LabCard>
                            </Reveal>

                            <Reveal delay={0.2}>
                                <LabCard
                                    title="Emotion Wheel"
                                    icon="palette"
                                    badge="Intervention"
                                    badgeColor="bg-rose-600 text-white"
                                    iconBgColor="bg-rose-50"
                                    iconColor="text-rose-600"
                                    onClick={() => setActiveTool('emotion')}
                                >
                                    Granular affect labeling based on Plutchik’s model. Expand emotional vocabulary to improve attunement.
                                </LabCard>
                            </Reveal>
                        </div>
                    </section>

                    {/* SECTION 3: Somatic Regulation */}
                    <section>
                        <Reveal>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                                    <span className="material-symbols-outlined text-2xl">nature_people</span>
                                </div>
                                <h2 className="font-display text-4xl text-brand-dark">Somatic Regulation</h2>
                            </div>
                        </Reveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Reveal delay={0.1}>
                                <LabCard
                                    title="Grounding"
                                    icon="nature"
                                    badge="Safety"
                                    badgeColor="bg-teal-600 text-white"
                                    iconBgColor="bg-teal-50"
                                    iconColor="text-teal-600"
                                    onClick={() => setActiveTool('grounding')}
                                >
                                    A structured sensory protocol. Regulate your nervous system between intense sessions or use as a guided intervention.
                                </LabCard>
                            </Reveal>

                            <Reveal delay={0.2}>
                                <LabCard
                                    title="Take a Breath"
                                    icon="air"
                                    badge="Physiology"
                                    badgeColor="bg-sky-600 text-white"
                                    iconBgColor="bg-sky-50"
                                    iconColor="text-sky-600"
                                    onClick={() => setActiveTool('breathing')}
                                >
                                    Visual pacing for autonomic regulation. A physiological reset to shift from sympathetic arousal to parasympathetic calm.
                                </LabCard>
                            </Reveal>
                        </div>
                    </section>

                </div>

                <Reveal>
                    <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 border-l-8 border-brand-primary shadow-soft flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 text-center lg:text-left">
                        <div>
                            <h3 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">Academic & Clinical Partners</h3>
                            <p className="text-brand-dark/70 max-w-2xl leading-relaxed text-base md:text-lg">
                                These tools are designed to support, not replace, clinical judgment. We are actively collaborating with institutions to validate and expand this suite.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center w-full lg:w-auto">
                            <Link to="/contact" className="text-brand-primary font-bold hover:underline px-6 py-3 text-lg flex items-center justify-center">Suggest a Tool</Link>
                            <Link to="/contact" className="bg-brand-dark text-white px-8 md:px-10 py-3 md:py-4 rounded-2xl font-bold text-base shadow-md hover:bg-brand-primary transition-colors flex items-center justify-center">Contribute Research</Link>
                        </div>
                    </div>
                </Reveal>

                <div className="mt-12 md:mt-20 text-center pb-8 md:pb-12 opacity-70 hover:opacity-100 transition-opacity">
                    <p className="text-rose-700 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-sm">warning</span>
                        Clinical Disclaimer
                    </p>
                    <p className="text-[10px] md:text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed px-4 font-medium">
                        This Digital Lab is an adjunctive resource for mental health professionals (Counselors, Clinicians, Social Workers, Students). It is not a substitute for clinical supervision, personal therapy, or standardized diagnostic protocols. Manovratha assumes no liability for the clinical application of these tools. Please use your professional judgment and ethical guidelines at all times.
                    </p>
                </div>
            </div>

            <AnimatePresence>
                {activeTool && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-2xl flex flex-col"
                    >
                        <div className="flex justify-between items-center p-4 md:p-8 border-b border-gray-100 bg-white/60">
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-lg">
                                    <span className="material-symbols-outlined text-sm md:text-lg">science</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">Active Instrument</span>
                                    <span className="font-display text-lg md:text-xl text-brand-dark">{activeTool === 'containment' ? 'Cognitive Containment' : activeTool?.charAt(0).toUpperCase() + activeTool?.slice(1)}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setActiveTool(null)}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-colors group"
                            >
                                <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">close</span>
                            </button>
                        </div>

                        <div className="flex-grow p-4 md:p-10 overflow-y-auto">
                            <motion.div
                                initial={{ scale: 0.98, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="w-full max-w-7xl mx-auto bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-gray-100 p-4 md:p-12 relative overflow-hidden flex flex-col min-h-[500px]"
                            >
                                <div className="absolute top-[-10%] right-[-5%] w-[30vw] h-[30vw] bg-brand-light rounded-full -z-0 opacity-40 pointer-events-none blur-3xl"></div>
                                <div className="absolute bottom-[-10%] left-[-5%] w-[25vw] h-[25vw] bg-brand-light rounded-full -z-0 opacity-40 pointer-events-none blur-3xl"></div>

                                <div className="relative z-10 flex-grow flex flex-col">
                                    {activeTool === 'calibration' && <CalibrationFocus onClose={() => setActiveTool(null)} />}
                                    {activeTool === 'mse' && <MSEFocus onClose={() => setActiveTool(null)} />}
                                    {activeTool === 'grounding' && <GroundingFocus onClose={() => setActiveTool(null)} />}
                                    {activeTool === 'breathing' && <BreathingFocus />}
                                    {activeTool === 'containment' && <CognitiveContainmentFocus />}
                                    {activeTool === 'emotion' && <EmotionWheelFocus />}
                                    {activeTool === 'affirmations' && <AffirmationsFocus />}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WellnessHub;