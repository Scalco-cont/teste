import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
            Conectando tutores a cuidadores apaixonados por pets!
          </h1>
          <p className="text-xl md:text-2xl text-blue-700 mb-6">
            Seu cachorro seguro, bem cuidado e sempre feliz.
          </p>
          <a 
            href="https://wa.me/5565984433308" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 text-lg"
          >
            Fale agora com um cuidador!
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Cachorro feliz com cuidador" 
            className="rounded-lg shadow-xl max-w-full h-auto object-cover"
            style={{ maxHeight: '500px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;