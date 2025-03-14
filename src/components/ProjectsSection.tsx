import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Carousel from 'react-multi-carousel';
import { CustomDot, CustomRightArrow, CustomLeftArrow } from './CarouselControls';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Urban House",
      description: "Página web para una inmobiliaria con un buscador de propiedades incorporado. Diseño moderno y simple.",
      image: "projects/urban-house.jpg",
      url: "https://lucavallazza.github.io/urban-house-landing/"
    },
    {
      title: "Ferrero Arquitectura",
      description: "Página web para un estudio de arquitectura. Con un diseño moderno y profesional.",
      image: "projects/ferrero-arquitectura.jpg",
      url: "https://lucavallazza.github.io/ferrero-arquitectura/"
    },
    {
      title: "Perez y Asociados",
      description: "Página web para un estudio jurídico donde se exponen todos sus servicios. Con un diseño elegante y minimalista.",
      image: "projects/perez-y-asociados.jpg",
      url: "https://lucavallazza.github.io/perez-y-asociados-landing/"
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

  // Estilos personalizados para el carrusel
  // const customCarouselStyles = {
  //   height: "100%",
  //   display: "flex",
  //   alignItems: "stretch"
  // };

  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Nuestros Proyectos</h2>
          <p className="text-gray-300">Conoce algunos de nuestros trabajos destacados</p>
        </motion.div>

        <Carousel
          responsive={responsive}
          infinite={true}
          removeArrowOnDeviceType={["mobile"]}
          showDots={true}
          autoPlay={false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={300}
          containerClass="pb-12"
          itemClass="h-full px-4"
          // style={customCarouselStyles}
          customDot={<CustomDot />}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          dotListClass="mt-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden group hover:border-purple-500/50 transition-all duration-300 border border-white/10"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <span className="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                    Ver proyecto <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;