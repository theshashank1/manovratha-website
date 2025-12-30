import React from 'react';
import { Pillar } from '../types';

const pillars: Pillar[] = [
  {
    id: 'incubation',
    icon: 'self_improvement',
    title: 'Incubation',
    bgColorClass: 'bg-[#EEF2FF]'
  },
  {
    id: 'sanctuary',
    icon: 'spa',
    title: 'Sanctuary',
    bgColorClass: 'bg-[#ECFDF5]'
  },
  {
    id: 'community',
    icon: 'handshake',
    title: 'Community',
    bgColorClass: 'bg-[#FFFBEB]'
  },
  {
    id: 'tech',
    icon: 'laptop_chromebook',
    title: 'Tech Support',
    bgColorClass: 'bg-[#EFF6FF]'
  }
];

const Pillars: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl text-brand-dark">Holistic Pillars</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id}
              className={`${pillar.bgColorClass} rounded-[2rem] p-8 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer`}
            >
              <span className={`material-symbols-outlined text-4xl mb-3 ${
                  pillar.id === 'incubation' ? 'text-indigo-500' :
                  pillar.id === 'sanctuary' ? 'text-emerald-500' :
                  pillar.id === 'community' ? 'text-amber-400' :
                  'text-blue-500'
              }`}>
                {pillar.icon}
              </span>
              <h3 className="font-bold text-lg text-brand-dark">{pillar.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
