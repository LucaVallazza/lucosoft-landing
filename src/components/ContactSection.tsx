import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircleMore } from 'lucide-react';
import { useEffect } from 'react';

const ContactSection = () => {
  // Este efecto se ejecuta cada vez que el componente se monta
  // y fuerza overflow-hidden en todo el documento
  useEffect(() => {
    // Guardar estilos originales
    const originalHtmlOverflow = document.documentElement.style.overflowX;
    const originalBodyOverflow = document.body.style.overflowX;
    
    // Aplicar overflow-hidden inmediatamente
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    
    // Asegurarnos que permanece aplicado incluso después de la carga completa
    const applyHiddenOverflow = () => {
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.overflowX = 'hidden';
    };
    
    // Aplicar en diferentes eventos para garantizar que funcione
    window.addEventListener('resize', applyHiddenOverflow);
    window.addEventListener('load', applyHiddenOverflow);
    
    // También aplicar después de un tiempo para asegurar que las animaciones hayan terminado
    const timeoutId = setTimeout(applyHiddenOverflow, 1500);
    
    // Limpieza al desmontar el componente
    return () => {
      document.documentElement.style.overflowX = originalHtmlOverflow;
      document.body.style.overflowX = originalBodyOverflow;
      window.removeEventListener('resize', applyHiddenOverflow);
      window.removeEventListener('load', applyHiddenOverflow);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="contacto" className="py-20 px-4 overflow-hidden w-full">
      <div className="max-w-4xl mx-auto overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">¿Listo para construir software a tu medida?</h2>
          <p className="text-gray-300">Estamos listos para ayudarte con tu próximo proyecto</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 overflow-hidden">
          {/* Contact Form - Eliminamos la animación horizontal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>
            <form 
              action="https://formsubmit.co/lucosoft.contacto@gmail.com" 
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value="Nuevo contacto desde la web" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="referal" className="block text-gray-300 mb-2">¿Quién te envio la pagina? <span className='italic text-sm'>(Opcional)</span></label>
                <input
                  type="text"
                  id="referal"
                  name="referal"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Nombre del vendedor"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity w-full flex items-center justify-center gap-2"
              >
                Enviar mensaje
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
          
          {/* Contact Info - Eliminamos la animación horizontal */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-4 md:mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:lucosoft.contacto@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors break-all">
                      lucosoft.contacto@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Teléfono</p>
                    <a href="tel:+5491141406819" className="text-gray-300 hover:text-purple-400 transition-colors">
                      +54 9 11 4140 6819
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-4 md:mb-6">Contacto directo</h3>
              <p className="text-gray-300 mb-6">
                ¿Preferís una comunicación más directa? Contactanos por WhatsApp y te responderemos a la brevedad.
              </p>
              <a
                href="https://wa.me/5491141406819?text=Hola,%20me%20gustaría%20consultar%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors w-full flex items-center justify-center gap-2"
              >
                Hablar por WhatsApp
                <MessageCircleMore className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;