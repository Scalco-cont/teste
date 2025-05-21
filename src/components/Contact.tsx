import React from 'react';
import { MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para encontrar o cuidador perfeito?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Quer saber mais ou contratar um cuidador? Fale conosco agora!
        </p>
        <a 
          href="https://wa.me/5565984433308" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <MessageCircle size={24} className="mr-2" />
          Conversar no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;