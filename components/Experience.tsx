
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 bg-white border-r border-slate-100">
      <div className="px-6 lg:px-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-1 w-12 bg-blue-600"></div>
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Trajetória Profissional</h2>
        </div>
        
        <div className="space-y-12 relative before:absolute before:left-[7px] before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-100">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative pl-10 group">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-blue-600 z-10 transition-all group-hover:bg-blue-600 group-hover:scale-125"></div>
              <span className="text-sm font-bold text-blue-600 block mb-1 uppercase tracking-tighter">{exp.year}</span>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{exp.role}</h3>
              <p className="text-slate-500 font-medium mb-2">{exp.company}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
