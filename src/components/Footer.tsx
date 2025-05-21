import React from 'react';
import { PawPrint as Paw } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Paw className="h-8 w-8 text-yellow-400" />
            <span className="ml-2 text-xl font-bold text-blue-900">CuidaPet</span>
          </div>
          
          <div className="text-gray-600 text-sm">
            © 2025 CuidaPet. Todos os direitos reservados.
          </div>
          
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-blue-900 hover:text-yellow-500 text-sm mx-2 transition">Termos de Uso</a>
            <span className="text-blue-900">|</span>
            <a href="#" className="text-blue-900 hover:text-yellow-500 text-sm mx-2 transition">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;