import React, { useState, useEffect } from 'react';
import { PawPrint as Paw, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <Paw className="h-10 w-10 text-yellow-400" />
          <span className="ml-2 text-2xl font-bold text-blue-900">CuidaPet</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-blue-900 hover:text-yellow-500 font-medium transition">Início</a>
          <a href="#about" className="text-blue-900 hover:text-yellow-500 font-medium transition">Sobre</a>
          <a href="#services" className="text-blue-900 hover:text-yellow-500 font-medium transition">Serviços</a>
          <a href="#contact" className="text-blue-900 hover:text-yellow-500 font-medium transition">Contato</a>
          <a 
            href="https://wa.me/5565984433308" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition flex items-center"
          >
            Falar no WhatsApp
          </a>
        </nav>

        <button className="md:hidden text-blue-900" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-transform duration-300 transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#home" onClick={closeMenu} className="text-blue-900 hover:text-yellow-500 font-medium py-2 transition">Início</a>
          <a href="#about" onClick={closeMenu} className="text-blue-900 hover:text-yellow-500 font-medium py-2 transition">Sobre</a>
          <a href="#services" onClick={closeMenu} className="text-blue-900 hover:text-yellow-500 font-medium py-2 transition">Serviços</a>
          <a href="#contact" onClick={closeMenu} className="text-blue-900 hover:text-yellow-500 font-medium py-2 transition">Contato</a>
          <a 
            href="https://wa.me/5565984433308" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition inline-flex items-center justify-center"
          >
            Falar no WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;