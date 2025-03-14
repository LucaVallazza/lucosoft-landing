import { motion } from 'framer-motion';
import { Globe, Monitor, Smartphone, BarChart3, MessageSquare, MessageCircleMore } from 'lucide-react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomDot, CustomRightArrow, CustomLeftArrow } from './CarouselControls';
import { Keyword } from './ui/Keyword';

const ServicesSection = () => {
  const services = [
    {
      title: "Landing Pages",
      description: <>Transforma visitas en <Keyword>oportunidades de negocio</Keyword> con una landing page diseñada para <Keyword>atraer</Keyword> y <Keyword>convertir</Keyword>. Diseños profesionales, mensajes estratégicos y optimización que <Keyword>impulsan tus resultados</Keyword> desde el primer clic.</>,
      icon: <Globe className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Aplicaciones Web/Desktop",
      description: <>Lleva tu empresa al siguiente nivel con una plataforma web que <Keyword>automatiza procesos</Keyword>, mejora la <Keyword>experiencia del usuario</Keyword> y optimiza la <Keyword>gestión operativa</Keyword>. Soluciones a medida para <Keyword>potenciar tu rentabilidad</Keyword> y eficiencia.</>,
      icon: <Monitor className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Aplicaciones Móviles",
      description: <>Expande tu alcance con una aplicación móvil que <Keyword>fideliza clientes</Keyword> y mantiene tu negocio activo en todo momento. Compatible con <Keyword>iOS</Keyword> y <Keyword>Android</Keyword>, diseñamos soluciones que <Keyword>optimizan la experiencia</Keyword> y generan nuevas oportunidades.</>,
      icon: <Smartphone className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Campañas de Marketing Digital",
      description: <>Impulsa tu <Keyword>presencia digital</Keyword> con estrategias de marketing diseñadas para <Keyword>atraer audiencia</Keyword>, <Keyword>generar engagement</Keyword> y <Keyword>convertir clientes</Keyword>. Desde publicidad segmentada hasta contenido estratégico, hacemos crecer tu negocio.</>,
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Community Management",
      description: <>Construye una <Keyword>marca sólida</Keyword> y fortalece tu relación con la audiencia a través de una gestión estratégica de redes sociales. Creamos <Keyword>contenido atractivo</Keyword>, fomentamos la <Keyword>interacción</Keyword> y posicionamos tu negocio en el mercado digital.</>,
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />
    }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1
    }
  };

  return (
    <section id="servicios" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
          <p className="text-gray-300">Soluciones integrales para tu presencia digital</p>
        </motion.div>

        <Carousel
          responsive={responsive}
          infinite={true}
          showDots={true}
          removeArrowOnDeviceType={["mobile"]}
          autoPlay={false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={300}
          containerClass="pb-12 flex items-stretch"
          className='items-stretch'
          sliderClass='items-stretch'
          itemClass="h-[99%] px-4 flex items-stretch"
          customDot={<CustomDot />}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          dotListClass="mt-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="h-full flex"
            >
              <div className="h-full bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-colors group flex flex-col">
                <span className='flex flex-row'>
                <div className="mb-4 mr-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

                </span>
                
                <p className="text-gray-300 flex-grow">
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/5491141406819?text=${encodeURIComponent(
                    `Hola buenas! Queria consultar por el servicio de ${service.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 transition-colors rounded-lg text-white text-sm font-medium mt-6 self-end"
                >
                  <MessageCircleMore className="w-4 h-4" />
                  Consultar
                </a>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesSection;