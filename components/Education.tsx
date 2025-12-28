
import React from 'react';
import { COURSES } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="educação" className="py-24 px-6 lg:px-20">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-1 w-12 bg-blue-500"></div>
        <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm text-white">Formação & Cursos</h2>
      </div>
      
      <div className="space-y-8">
        <div className="border-l-2 border-white/10 pl-6 pb-6">
          <h3 className="text-white font-bold text-lg mb-1">Ensino Médio Completo</h3>
          <p className="text-slate-400">Miryam Coelli - Natal</p>
        </div>

        {COURSES.map((course, index) => (
          <div key={index} className="border-l-2 border-white/10 pl-6 pb-6">
            <h3 className="text-white font-bold text-lg mb-1">{course.title}</h3>
            <p className="text-slate-400">{course.provider}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
