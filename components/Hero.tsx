
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 skew-x-[-12deg] translate-x-20"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-400 font-bold tracking-widest text-[10px] uppercase">Disponível para novos projetos</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
              {PERSONAL_INFO.name.split(' ').slice(0, 2).join(' ')}<br/>
              <span className="text-blue-600">{PERSONAL_INFO.name.split(' ').slice(2).join(' ')}</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Transformando conceitos em impacto visual. Especialista em <span className="text-white font-semibold">Design Gráfico</span>, <span className="text-white font-semibold">Motion</span> e <span className="text-white font-semibold">Edição de Vídeo</span> com foco em resultados.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <a 
                href={PERSONAL_INFO.behance} 
                target="_blank" 
                rel="noreferrer"
                className="group bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center gap-3 shadow-xl hover:-translate-y-1"
              >
                <i className="fa-brands fa-behance text-2xl text-blue-600 group-hover:scale-110 transition-transform"></i>
                Acessar Portfólio
              </a>
              <a 
                href={PERSONAL_INFO.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="group border-2 border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/5 transition-all flex items-center gap-3 hover:-translate-y-1"
              >
                <i className="fa-brands fa-instagram text-2xl group-hover:text-blue-400 transition-colors"></i>
                @phaulodesign
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] mx-auto">
              {/* Efeito de brilho atrás da foto */}
              <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
              
              {/* Moldura da Foto */}
              <div className="absolute inset-0 border-[1px] border-white/10 rounded-3xl rotate-6"></div>
              <div className="absolute inset-0 border-[1px] border-blue-600/30 rounded-3xl -rotate-3"></div>
              
              {/* Foto Principal: Pessoa usando computador */}
              <div className="absolute inset-0 rounded-3xl bg-slate-800 overflow-hidden border-2 border-white/5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop" 
                  alt="Designer trabalhando no computador" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                />
              </div>

              {/* Badges Flutuantes */}
              <div className="absolute -top-6 -right-6 bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-2xl font-black text-center backdrop-blur-sm">
                <div className="text-2xl italic leading-none">8+</div>
                <div className="text-[10px] uppercase tracking-tighter opacity-80">Anos de XP</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 px-6 py-4 rounded-2xl shadow-2xl font-bold flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase leading-none mb-1">Especialidade</div>
                  <div className="text-sm">Designer Gráfico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
