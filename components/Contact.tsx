
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            Pronto para elevar o nível visual do seu negócio?
          </h2>
          <p className="text-xl text-slate-500 mb-12">
            Seja um projeto freelancer ou uma oportunidade full-time, estou aberto para discutir como posso agregar valor à sua marca.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href={PERSONAL_INFO.whatsapp} 
              target="_blank" 
              rel="noreferrer"
              className="w-full md:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              WhatsApp Direto
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="w-full md:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3"
            >
              <i className="fa-regular fa-envelope text-2xl"></i>
              Mandar E-mail
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-400 font-medium uppercase text-sm tracking-widest">
            <a href={PERSONAL_INFO.behance} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">Behance</a>
            <a href={PERSONAL_INFO.instagram} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">Instagram</a>
            <span className="hidden md:inline">•</span>
            <span>{PERSONAL_INFO.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
