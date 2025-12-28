
import React from 'react';
import { PERSONAL_INFO } from '../constants';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className={`font-extrabold text-2xl tracking-tighter transition-colors ${scrolled ? 'text-blue-900' : 'text-white'}`}>
          PH<span className="text-blue-600">.</span>DESIGN
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className={`text-sm font-semibold transition-all hover:text-blue-500 relative group ${
                scrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        <div className="flex items-center">
          <a 
            href={PERSONAL_INFO.whatsapp} 
            target="_blank" 
            rel="noreferrer" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 active:scale-95"
          >
            Contratar
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
