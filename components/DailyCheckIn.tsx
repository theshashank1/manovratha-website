import React, { useState } from 'react';
import { WeatherOption } from '../types';

const weatherOptions: WeatherOption[] = [
  { id: 'heavy', label: 'Heavy', icon: 'thunderstorm', bgColorClass: 'bg-blue-100', textColorClass: 'text-blue-500' },
  { id: 'cloudy', label: 'Cloudy', icon: 'cloud', bgColorClass: 'bg-gray-100', textColorClass: 'text-gray-500' },
  { id: 'shining', label: 'Shining', icon: 'light_mode', bgColorClass: 'bg-yellow-100 border-2 border-yellow-300', textColorClass: 'text-yellow-600' },
  { id: 'clear', label: 'Clear', icon: 'wb_twilight', bgColorClass: 'bg-orange-100', textColorClass: 'text-orange-500' },
];

const DailyCheckIn: React.FC = () => {
  const [selected, setSelected] = useState('shining');

  return (
    <section className="py-8 px-4 relative z-20">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-brand-light relative">
            
            {/* Top Badge */}
            <div className="flex justify-between items-start mb-6">
                <span className="bg-[#FFE4E6] text-[#9F1239] px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest">Daily Check-in</span>
                <span className="material-symbols-outlined text-gray-300">more_horiz</span>
            </div>

            {/* Content */}
            <h2 className="font-display text-3xl text-brand-dark mb-3">
                How is your <span className="text-accent-rose italic font-medium">inner weather?</span>
            </h2>
            <p className="text-brand-dark/60 mb-10 text-sm font-medium">
                Take a playful pause to register your<br/> emotional temperature. No judgment.
            </p>

            {/* Options */}
            <div className="flex justify-between items-end gap-2 mb-8 px-2">
                {weatherOptions.map((w) => (
                    <button 
                        key={w.id} 
                        onClick={() => setSelected(w.id)}
                        className={`flex flex-col items-center gap-3 transition-transform duration-300 ${selected === w.id ? 'scale-110 -translate-y-2' : 'hover:scale-105 opacity-70 hover:opacity-100'}`}
                    >
                        <div className={`w-14 h-14 rounded-full ${w.bgColorClass} flex items-center justify-center ${w.textColorClass}`}>
                            <span className="material-symbols-outlined text-2xl">{w.icon}</span>
                        </div>
                        <span className={`text-xs font-bold ${selected === w.id ? 'text-brand-dark' : 'text-brand-dark/50'}`}>{w.label}</span>
                    </button>
                ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                <div className="flex -space-x-1">
                    <div className="w-6 h-6 rounded-full bg-accent-sky text-[8px] flex items-center justify-center font-bold border border-white">JD</div>
                    <div className="w-6 h-6 rounded-full bg-accent-lavender text-[8px] flex items-center justify-center font-bold border border-white">AM</div>
                    <div className="w-6 h-6 rounded-full bg-accent-sun text-[8px] flex items-center justify-center font-bold border border-white">M</div>
                </div>
                <span className="text-xs text-brand-dark/40 font-bold">120+ pros checked in</span>
            </div>

            {/* Decorative */}
            <div className="absolute -right-16 top-0 w-32 h-32 bg-[#E8F0E6] rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default DailyCheckIn;
