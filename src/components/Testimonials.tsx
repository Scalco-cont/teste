import React from 'react';
import { Star, TrendingUp, Users, Target, BadgeCheck } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  source: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, title, value, description, source }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex items-center mb-4">
        <div className="text-blue-900 mr-4">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg text-blue-900">{title}</h3>
          <span className="text-2xl font-bold text-yellow-400">{value}</span>
        </div>
      </div>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-gray-500 italic">Fonte: {source}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const metrics = [
    {
      icon: <Target size={28} />,
      title: "Mercado Potencial",
      value: "R$ 20B+",
      description: "Mercado pet brasileiro em constante crescimento, com forte demanda por serviços de cuidados",
      source: "Instituto Pet Brasil (IPB) - Relatório 2023"
    },
    {
      icon: <Users size={28} />,
      title: "Público Alvo",
      value: "52M+",
      description: "Brasileiros que possuem pelo menos um animal de estimação e precisam de cuidados confiáveis",
      source: "IBGE - Pesquisa Nacional de Saúde (PNS) 2019"
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Crescimento do Setor",
      value: "14% a.a.",
      description: "Taxa de crescimento anual do mercado de serviços pet no Brasil",
      source: "ABINPET - Mercado Pet Brasil 2023"
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">Oportunidade de Mercado</h2>
        <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          O CuidaPet está posicionado para capturar uma fatia significativa do crescente mercado de serviços pet no Brasil.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard 
              key={index}
              icon={metric.icon}
              title={metric.title}
              value={metric.value}
              description={metric.description}
              source={metric.source}
            />
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Dados atualizados em março de 2024. Para mais informações sobre as fontes, consulte:</p>
          <ul className="mt-2">
            <li><a href="https://institutopetbrasil.com" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-yellow-500">Instituto Pet Brasil</a></li>
            <li><a href="https://www.ibge.gov.br" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-yellow-500">IBGE - Pesquisa Nacional de Saúde</a></li>
            <li><a href="http://abinpet.org.br" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-yellow-500">ABINPET</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;