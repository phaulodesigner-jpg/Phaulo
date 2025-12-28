
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
           <Experience />
           <div className="bg-slate-900 text-white">
              <Skills />
              <Education />
           </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
