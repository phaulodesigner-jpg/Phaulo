
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-900 text-slate-500 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        <div className="font-bold text-white">
          PH<span className="text-blue-600">.</span>DESIGN © {new Date().getFullYear()}
        </div>
        <div>
          Natal, Rio Grande do Norte — Brasil
        </div>
        <div className="flex space-x-6">
          <a href={PERSONAL_INFO.behance} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Portfolio</a>
          <a href={PERSONAL_INFO.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href={PERSONAL_INFO.whatsapp} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
