import { motion } from 'framer-motion';
import React from 'react';

type GuaranteeItemProps = {
  highlight: string;
  text: string;
};

const GuaranteeItem = ({ text, highlight }: GuaranteeItemProps) => (
  <li className="flex items-start mb-4 text-left">
    <span className="text-purple-400 mr-3 mt-1 flex-shrink-0">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
      </svg>
    </span>
    <span className="text-gray-300">
      <span className="font-bold text-white">{highlight}</span> – {text}
    </span>
  </li>
);

const AboutSection = () => {
  const guarantees = [
    {
      highlight: "Garantía de calidad",
      text: "Si no estás 100% satisfecho con el resultado, no pagas. Así de simple."
    },
    {
      highlight: "Diseños a tu medida",
      text: "Nos aseguramos de que cada detalle sea perfecto, con entregas parciales hasta alcanzar tu total conformidad."
    },
    {
      highlight: "Tiempos de entrega óptimos",
      text: "Nos comprometemos a cumplir los plazos pactados para que tengas tu proyecto a tiempo y sin demoras."
    },
    {
      highlight: "Precios acordes",
      text: "Ofrecemos soluciones accesibles y justas, alineadas con el valor real de cada proyecto."
    },
    {
      highlight: "Soporte post-entrega",
      text: "No te dejamos solo. Brindamos asistencia después de la entrega para asegurarnos de que todo funcione como esperas."
    }
  ];

  return (
    <section id="nosotros" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Acerca de Nosotros
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Somos un grupo con mas de 2 años de experiencia en el desarrollo de software, enfocados en crear
              <span className="text-blue-400 font-semibold"> soluciones tecnológicas.</span>
              <br/> En
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-bold"> Lu&Co Soft</span>,
              nos dedicamos a ofrecer soluciones a medida para cada cliente, buscando como principal objetivo ofrecer
              <span className="text-purple-400 font-semibold"> resultados y calidad.</span>
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Nuestras Garantías</h3>
            <ul className="space-y-4">
              {guarantees.map((guarantee, index) => (
                <GuaranteeItem 
                  key={index}
                  highlight={guarantee.highlight}
                  text={guarantee.text}
                />
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;