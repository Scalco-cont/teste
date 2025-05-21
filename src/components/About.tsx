import React from 'react';
import { PawPrint, Home, Scaling as Walking, Pill } from 'lucide-react';

const ServiceIcon: React.FC<{ icon: React.ReactNode, title: string }> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center p-6 hover:transform hover:scale-105 transition-all duration-300">
      <div className="bg-yellow-400 hover:bg-yellow-500 p-5 rounded-full mb-4 shadow-md transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8 animate-fade-in">
          Sobre o CuidaPet
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <p className="text-lg text-gray-700 leading-relaxed">
            O CuidaPet nasceu para oferecer praticidade, segurança e amor para quem precisa de ajuda com seus pets. 
            Conectamos você a cuidadores qualificados próximos de você para serviços como hospedagem, passeios, visitas domiciliares e muito mais.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" id="services">
          <ServiceIcon 
            icon={<Walking size={36} className="text-blue-900" />} 
            title="Passeios" 
          />
          <ServiceIcon 
            icon={<PawPrint size={36} className="text-blue-900" />} 
            title="Hospedagem" 
          />
          <ServiceIcon 
            icon={<Home size={36} className="text-blue-900" />} 
            title="Visitas em Casa" 
          />
          <ServiceIcon 
            icon={<Pill size={36} className="text-blue-900" />} 
            title="Cuidados Especiais" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;