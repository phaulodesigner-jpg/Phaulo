
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="py-24 px-6 lg:px-20 border-b border-white/10">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-1 w-12 bg-blue-500"></div>
        <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm text-white">Domínio Técnico</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {SKILLS.map((skill, index) => (
          <div key={index} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-blue-600/20 transition-all duration-300">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
              <i className={`${skill.icon} text-2xl text-blue-400`}></i>
            </div>
            <span className="font-bold text-white text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
