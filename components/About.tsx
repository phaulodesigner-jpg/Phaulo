
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-blue-600"></div>
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Objetivo Profissional</h2>
          </div>
          <p className="text-3xl md:text-4xl font-light text-slate-800 leading-relaxed italic">
            "{PERSONAL_INFO.objective}"
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 border-t border-slate-100 pt-16">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Localização</h4>
              <p className="text-slate-500">{PERSONAL_INFO.address}</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Contato Direto</h4>
              <p className="text-slate-500">{PERSONAL_INFO.phone}</p>
              <p className="text-slate-500">{PERSONAL_INFO.email}</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Idiomas</h4>
              <p className="text-slate-500">Inglês - Intermediário</p>
              <p className="text-slate-500">Português - Nativo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
