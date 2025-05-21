import React from 'react';
import { CheckCircle2, Shield, Clock, MessageCircle } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-l-4 border-yellow-400">
      <div className="flex items-start">
        <div className="mr-4 text-blue-900">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <CheckCircle2 size={28} />,
      title: "Cuidadores Confiáveis",
      description: "Todos os nossos cuidadores são cuidadosamente selecionados, garantindo o melhor cuidado para seu pet."
    },
    {
      icon: <Shield size={28} />,
      title: "Seu pet sempre seguro",
      description: "A segurança é nossa prioridade. Garantimos que seus pets se sintam seguros e confortáveis sob nossos cuidados."
    },
    {
      icon: <Clock size={28} />,
      title: "Serviço rápido e prático",
      description: "Agende um cuidador de forma rápida e fácil, sempre que precisar."
    },
    {
      icon: <MessageCircle size={28} />,
      title: "Contato direto pelo WhatsApp",
      description: "Mantenha contato com o cuidador do seu pet durante todo o serviço."
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">Por que escolher o CuidaPet?</h2>
        <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Estamos comprometidos em oferecer o melhor cuidado para seus amigos peludos, com serviços adaptados às suas necessidades.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              icon={benefit.icon} 
              title={benefit.title} 
              description={benefit.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;