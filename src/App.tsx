
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    // <Router basename='/lucosoft-landing/'>
    <Router >
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Puedes agregar más rutas en el futuro */}
      </Routes>
    </Router>
  );
};

export default App;

// import { BrowserRouter as Router } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowRight, ChevronLeft, ChevronRight, Mail, Phone, Github, Linkedin, Twitter, Globe, Smartphone, Monitor, MessageSquare, BarChart3, MessageCircleMore, Home, Grid, PenTool, Users, FileText } from 'lucide-react';
// import { ComputerDesktopIcon } from '@heroicons/react/16/solid';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { useState, useEffect } from 'react';

// // Add this custom style to handle equal heights for carousel items
// const customCarouselStyles = {
//   height: "100% ",
//   display: "flex",
//   alignItems: "stretch"
// };

// // Add these custom component props
// const CustomDot = ({ onClick, active }: { onClick?: () => void, active?: boolean }) => (
//   <button
//     className={`h-2 mx-1 rounded-full transition-all duration-300 ${
//       active ? 'bg-blue-400 w-6' : 'bg-white/20 w-2 hover:bg-white/40'
//     }`}
//     onClick={onClick}
//   />
// );

// const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
//   <button
//     onClick={onClick ? onClick : () => {}}
//     className="absolute mr-1 mt-[10em] right-0 bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full z-10 -mr-4"
//   >
//     <ChevronRight className="w-6 h-6 text-white" />
//   </button>
// );

// const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
//   <button
//     onClick={onClick ? onClick : () => {}}
//     className="absolute ml-1 left-0 mt-[10em] bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full z-10 -ml-4"
//   >
//     <ChevronLeft className="w-6 h-6 text-white" />
//   </button>
// );

// // Reemplaza la función formatServiceDescription con este componente más simple
// const Keyword = ({ children }: { children: React.ReactNode }) => (
//   <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
//     {children}
//   </span>
// );

// // Agrega este componente para los elementos de la lista de garantías
// const GuaranteeItem = ({ text, highlight }: { text: string, highlight: string }) => (
//   <li className="flex items-start mb-4 text-left">
//     <span className="text-purple-400 mr-3 mt-1 flex-shrink-0">
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
//       </svg>
//     </span>
//     <span className="text-gray-300">
//       <span className="font-bold text-white">{highlight}</span> – {text}
//     </span>
//   </li>
// );

// // Añade este estado para el menú móvil en el componente App
// const App = () => {
//   // Estado para controlar el menú móvil
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
//   // Estados para las palabras animadas
//   const [currentSoftwareIndex, setCurrentSoftwareIndex] = useState(0);
//   const [currentBusinessIndex, setCurrentBusinessIndex] = useState(0);
//   const softwareOptions = ['Landing Pages', 'Apps', 'Software'];
//   const businessOptions = ['Emprendimiento', 'Organización', 'Negocio'];

//   // Efecto para controlar la animación
//   useEffect(() => {
//     const softwareTimer = setTimeout(() => {
//       setCurrentSoftwareIndex((prevIndex) => 
//         prevIndex < softwareOptions.length - 1 ? prevIndex + 1 : prevIndex
//       );
//     }, 3000);

//     const businessTimer = setTimeout(() => {
//       setCurrentBusinessIndex((prevIndex) => 
//         prevIndex < businessOptions.length - 1 ? prevIndex + 1 : prevIndex
//       );
//     }, 3000);

//     return () => {
//       clearTimeout(softwareTimer);
//       clearTimeout(businessTimer);
//     };
//   }, [currentSoftwareIndex, currentBusinessIndex]);

//   const services = [
//     {
//       title: "Landing Pages",
//       description: <>Transforma visitas en <Keyword>oportunidades de negocio</Keyword> con una landing page diseñada para <Keyword>atraer</Keyword> y <Keyword>convertir</Keyword>. Diseños profesionales, mensajes estratégicos y optimización que <Keyword>impulsan tus resultados</Keyword> desde el primer clic.</>,
//       icon: <Globe className="w-8 h-8 text-blue-400" />
//     },
//     {
//       title: "Aplicaciones Web/Desktop",
//       description: <>Lleva tu empresa al siguiente nivel con una plataforma web que <Keyword>automatiza procesos</Keyword>, mejora la <Keyword>experiencia del usuario</Keyword> y optimiza la <Keyword>gestión operativa</Keyword>. Soluciones a medida para <Keyword>potenciar tu rentabilidad</Keyword> y eficiencia.</>,
//       icon: <Monitor className="w-8 h-8 text-purple-400" />
//     },
//     {
//       title: "Aplicaciones Móviles",
//       description: <>Expande tu alcance con una aplicación móvil que <Keyword>fideliza clientes</Keyword> y mantiene tu negocio activo en todo momento. Compatible con <Keyword>iOS</Keyword> y <Keyword>Android</Keyword>, diseñamos soluciones que <Keyword>optimizan la experiencia</Keyword> y generan nuevas oportunidades.</>,
//       icon: <Smartphone className="w-8 h-8 text-blue-400" />
//     },
//     {
//       title: "Campañas de Marketing Digital",
//       description: <>Impulsa tu <Keyword>presencia digital</Keyword> con estrategias de marketing diseñadas para <Keyword>atraer audiencia</Keyword>, <Keyword>generar engagement</Keyword> y <Keyword>convertir clientes</Keyword>. Desde publicidad segmentada hasta contenido estratégico, hacemos crecer tu negocio.</>,
//       icon: <BarChart3 className="w-8 h-8 text-blue-400" />
//     },
//     {
//       title: "Community Management",
//       description: <>Construye una <Keyword>marca sólida</Keyword> y fortalece tu relación con la audiencia a través de una gestión estratégica de redes sociales. Creamos <Keyword>contenido atractivo</Keyword>, fomentamos la <Keyword>interacción</Keyword> y posicionamos tu negocio en el mercado digital.</>,
//       icon: <MessageSquare className="w-8 h-8 text-purple-400" />
//     }
//   ];

//   // Array de garantías
//   const guarantees = [
//     {
//       highlight: "Garantía de calidad",
//       text: "Si no estás 100% satisfecho con el resultado, no pagas. Así de simple."
//     },
//     {
//       highlight: "Diseños a tu medida",
//       text: "Nos aseguramos de que cada detalle sea perfecto, con entregas parciales hasta alcanzar tu total conformidad."
//     },
//     {
//       highlight: "Tiempos de entrega óptimos",
//       text: "Nos comprometemos a cumplir los plazos pactados para que tengas tu proyecto a tiempo y sin demoras."
//     },
//     {
//       highlight: "Precios acordes",
//       text: "Ofrecemos soluciones accesibles y justas, alineadas con el valor real de cada proyecto."
//     },
//     {
//       highlight: "Soporte post-entrega",
//       text: "No te dejamos solo. Brindamos asistencia después de la entrega para asegurarnos de que todo funcione como esperas."
//     }
//   ];

//   const projects = [
//     {
//       title: "Urban House",
//       description: "Página web para una inmobiliaria con un buscador de propiedades incorporado. Diseño moderno y simple.",
//       image: "projects/urban-house.jpg",
//       url: "https://lucavallazza.github.io/urban-house-landing/"
//     },
//     {
//       title: "Ferrero Arquitectura",
//       description: "Página web para un estudio de arquitectura. Con un diseño moderno y profesional.",
//       image: "projects/ferrero-arquitectura.jpg",
//       url: "https://lucavallazza.github.io/ferrero-arquitectura/"
//     },
//     {
//       title: "Perez y Asociados",
//       description: "Página web para un estudio jurídico donde se exponen todos sus servicios. Con un diseño elegante y minimalista.",
//       image: "projects/perez-y-asociados.jpg",
//       url: "https://lucavallazza.github.io/perez-y-asociados-landing/"
//     }
//   ];

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 1280 },
//       items: 3
//     },
//     desktop: {
//       breakpoint: { max: 1280, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 640 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 640, min: 0 },
//       items: 1
//     }
//   };

//   // Añade esta función dentro de tu componente App
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       // Cierra primero el menú móvil
//       setIsMobileMenuOpen(false);
      
//       // Pequeño retraso para asegurar que el menú esté cerrado
//       setTimeout(() => {
//         // Ajuste para la altura de la barra de navegación fija
//         const navbarHeight = 64; // Ajusta según sea necesario
//         const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        
//         window.scrollTo({
//           top: y,
//           behavior: 'smooth'
//         });
//       }, 100);
//     }
//   };

//   return (
//     <Router>
//       <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-violet-950">
//         {/* Navbar */}
//         <nav className="fixed w-full bg-black/10 backdrop-blur-lg z-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-16">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
//               >
//                 Lu&Co Soft
//               </motion.div>
              
//               {/* Desktop Menu */}
//               <div className="hidden md:block">
//                 <div className="ml-10 flex items-baseline space-x-4">
//                   {['Inicio', 'Proyectos', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
//                     <a
//                       key={item}
//                       href={`#${item.toLowerCase()}`}
//                       className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
//                     >
//                       {item}
//                     </a>
//                   ))}
//                 </div>
//               </div>
              
//               {/* Mobile menu button */}
//               <div className="md:hidden">
//                 <button 
//                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                   className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
//                 >
//                   <span className="sr-only">Abrir menú</span>
//                   {!isMobileMenuOpen ? (
//                     <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                     </svg>
//                   ) : (
//                     <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           {/* Mobile Menu - Desplegado hacia abajo */}
//           <motion.div 
//             className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
//             initial={{ opacity: 0, height: 0, backdropFilter: "blur(0px)" }}
//             animate={{ 
//               opacity: isMobileMenuOpen ? 1 : 0,
//               height: isMobileMenuOpen ? "auto" : 0,
//               backdropFilter: isMobileMenuOpen ? "blur(16px)" : "blur(0px)"
//             }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-lg border-t border-white/10">
//               {[
//                 { name: 'Inicio', icon: <Home className="w-5 h-5" /> },
//                 { name: 'Proyectos', icon: <Grid className="w-5 h-5" /> },
//                 { name: 'Servicios', icon: <PenTool className="w-5 h-5" /> },
//                 { name: 'Nosotros', icon: <Users className="w-5 h-5" /> },
//                 { name: 'Contacto', icon: <Mail className="w-5 h-5" /> }
//               ].map((item) => (
//                 <a
//                   key={item.name}
//                   href={`#${item.name.toLowerCase()}`}
//                   className="flex items-center gap-3 px-3 py-4 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 border-b border-white/5 transition-colors"
//                   onClick={() => scrollToSection(item.name.toLowerCase())}
//                 >
//                   <span className="text-purple-400">{item.icon}</span>
//                   {item.name}
//                 </a>
//               ))}
//               <div className="px-3 py-4">
//                 <a
//                   href="https://wa.me/5491141406819?text=Hola,%20me%20gustaría%20consultar%20sobre%20sus%20servicios"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   <MessageCircleMore className="w-5 h-5" />
//                   Contactar por WhatsApp
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </nav>

//         {/* Hero Section */}
//         <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient-x"></div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center z-10 px-4"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//               Desarrollamos{" "}
//               <div className="relative inline-block">
//                 <div className="h-[1.2em] overflow-hidden">
//                   {softwareOptions.map((option, index) => (
//                     <motion.div
//                       key={option}
//                       initial={{ y: index === 0 ? 0 : 60 }}
//                       animate={{ y: currentSoftwareIndex === index ? 0 : currentSoftwareIndex > index ? -60 : 60 }}
//                       transition={{ duration: 0.6, ease: "easeInOut" }}
//                       className={`${
//                         currentSoftwareIndex === index 
//                           ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600" 
//                           : "text-white/20"
//                       }`}
//                     >
//                       {option}
//                     </motion.div>
//                   ))}
//                 </div>
//                 <svg className="absolute -bottom-3 left-0 w-full h-3 md:h-4 text-purple-500/70" viewBox="0 0 200 9" preserveAspectRatio="none">
//                   <motion.path 
//                     d="M0,5 Q40,0 80,5 T160,5 T200,5" 
//                     stroke="currentColor" 
//                     strokeWidth="3" 
//                     fill="none" 
//                     strokeLinecap="round"
//                     initial={{ pathLength: 0, opacity: 0 }}
//                     animate={currentSoftwareIndex === softwareOptions.length - 1 
//                       ? { pathLength: 1, opacity: 1 } 
//                       : { pathLength: 0, opacity: 0 }}
//                     transition={{ duration: 1, delay: 0.3 }}
//                   />
//                 </svg>
//               </div>
//               <br />
//               <span className="block mt-2">a medida para tu{" "}</span>
//               <div className="relative inline-block">
//                 <div className="h-[1.2em] overflow-hidden">
//                   {businessOptions.map((option, index) => (
//                     <motion.div
//                       key={option}
//                       initial={{ y: index === 0 ? 0 : 60 }}
//                       animate={{ y: currentBusinessIndex === index ? 0 : currentBusinessIndex > index ? -60 : 60 }}
//                       transition={{ duration: 0.6, ease: "easeInOut" }}
//                       className={`${
//                         currentBusinessIndex === index 
//                           ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" 
//                           : "text-white/20"
//                       }`}
//                     >
//                       {option}
//                     </motion.div>
//                   ))}
//                 </div>
//                 <svg className="absolute -bottom-3 left-0 w-full h-3 md:h-4 text-blue-500/70" viewBox="0 0 200 9" preserveAspectRatio="none">
//                   <motion.path 
//                     d="M0,5 Q40,2 80,5 T160,8 T200,5" 
//                     stroke="currentColor" 
//                     strokeWidth="3" 
//                     fill="none" 
//                     strokeLinecap="round"
//                     initial={{ pathLength: 0, opacity: 0 }}
//                     animate={currentBusinessIndex === businessOptions.length - 1 
//                       ? { pathLength: 1, opacity: 1 } 
//                       : { pathLength: 0, opacity: 0 }}
//                     transition={{ duration: 1, delay: 0.3 }}
//                   />
//                 </svg>
//               </div>
//             </h1>
//             <p className="text-xl text-gray-300 mb-8">
//               Potencia tu presencia digital con soluciones profesionales
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <a 
//                 href="#contacto"
//                 className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   scrollToSection('contacto');
//                 }}
//               >
//                 Consultá sin cargo
//                 <ArrowRight className="w-5 h-5" />
//               </a>
//               <a 
//                 href="#proyectos"
//                 className="px-8 py-3 border border-white/20 rounded-lg text-white font-medium hover:bg-white/10 transition-colors"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   scrollToSection('proyectos');
//                 }}
//               >
//                 Ver proyectos
//               </a>
//             </div>
//           </motion.div>
//         </section>


//         {/* Services Carousel */}
//         <section id="servicios" className="py-20 px-4">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <h2 className="text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
//               <p className="text-gray-300">Soluciones integrales para tu presencia digital</p>
//             </motion.div>

//             <Carousel
              
//               responsive={responsive}
//               infinite={true}
//               showDots={true}
//               removeArrowOnDeviceType={["mobile"]}
//               autoPlay={false}
//               autoPlaySpeed={3000}
//               keyBoardControl={true}
//               customTransition="transform 300ms ease-in-out"
//               transitionDuration={300}
//               containerClass="pb-12 flex items-stretch"
//               className='items-stretch'
//               sliderClass='items-stretch'
//               itemClass="h-[99%] px-4 flex items-stretch"
//               customDot={<CustomDot />}
//               customRightArrow={<CustomRightArrow />}
//               customLeftArrow={<CustomLeftArrow />}
//               dotListClass="mt-6"
//             >
//               {services.map((service, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="h-full flex"
//                 >
//                   <div className="h-full bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-colors group flex flex-col">
//                     <span className='flex flex-row'>
//                     <div className="mb-4 mr-4">{service.icon}</div>
//                     <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

//                     </span>
                    
//                     <p className="text-gray-300 flex-grow">
//                       {service.description}
//                     </p>
//                     <a
//                       href={`https://wa.me/5491141406819?text=${encodeURIComponent(
//                         `Hola buenas! Queria consultar por el servicio de ${service.title}`
//                       )}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 transition-colors rounded-lg text-white text-sm font-medium mt-6 self-end"
//                     >
//                       <MessageCircleMore className="w-4 h-4" />
//                       Consultar
//                     </a>
//                   </div>
//                 </motion.div>
//               ))}
//             </Carousel>
//           </div>
//         </section>

//         {/* Projects Carousel */}
//         <section id="proyectos" className="py-20 px-4">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <h2 className="text-4xl font-bold text-white mb-4">Nuestros Proyectos</h2>
//               <p className="text-gray-300">Conoce algunos de nuestros trabajos destacados</p>
//             </motion.div>

//             <Carousel
//               responsive={responsive}
//               infinite={true}
//               removeArrowOnDeviceType={["mobile"]}
//               showDots={true}
//               autoPlay={false}
//               autoPlaySpeed={3000}
//               keyBoardControl={true}
//               customTransition="transform 300ms ease-in-out"
//               transitionDuration={300}
//               containerClass="pb-12"
//               itemClass="h-full px-4"
//               style={customCarouselStyles}
//               customDot={<CustomDot />}
//               customRightArrow={<CustomRightArrow />}
//               customLeftArrow={<CustomLeftArrow />}
//               dotListClass="mt-6"
//             >
//               {projects.map((project, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="h-full"
//                 >
//                   <a 
//                     href={project.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block h-full bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden group hover:border-purple-500/50 transition-all duration-300 border border-white/10"
//                   >
//                     <div className="aspect-video relative overflow-hidden">
//                       <img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     </div>
//                     <div className="p-6 flex flex-col flex-grow">
//                       <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                       <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
//                       <span className="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
//                         Ver proyecto <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                       </span>
//                     </div>
//                   </a>
//                 </motion.div>
//               ))}
//             </Carousel>
//           </div>
//         </section>

//                 {/* About Section */}
//                 <section id="nosotros" className="py-20 px-4">
//           <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="space-y-12"
//             >
//               <div className="text-center">
//                 <h2 className="text-4xl font-bold text-white mb-8">
//                   Acerca de Nosotros
//                 </h2>
//                 <p className="text-lg text-gray-300 leading-relaxed">
//                   Somos un grupo con mas de 2 años de experiencia en el desarrollo de software, enfocados en crear
//                   <span className="text-blue-400 font-semibold"> soluciones tecnologicas.</span>
//                   <br/> En
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-bold"> Lu&Co Soft</span>,
//                   nos dedicamos a ofrecer soluciones a medida para cada cliente, buscando como principal objetivo ofrecer
//                   <span className="text-purple-400 font-semibold"> resultados y calidad.</span>
//                 </p>
//               </div>
              
//               <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
//                 <h3 className="text-2xl font-bold text-white mb-6 text-center">Nuestras Garantías</h3>
//                 <ul className="space-y-4">
//                   {guarantees.map((guarantee, index) => (
//                     <GuaranteeItem 
//                       key={index}
//                       highlight={guarantee.highlight}
//                       text={guarantee.text}
//                     />
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contacto" className="py-20 px-4">
//           <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <h2 className="text-4xl font-bold text-white mb-4">¿Listo para construir software a tu medida?</h2>
//               <p className="text-gray-300">Estamos listos para ayudarte con tu próximo proyecto</p>
//             </motion.div>
            
//             {/* Cambia el grid para solucionar problemas de overflow */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
//               {/* Contact Form - Sin cambios */}
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10"
//               >
//                 <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>
//                 <form 
//                   action="https://formsubmit.co/lucosoft.contacto@gmail.com" 
//                   method="POST"
//                   className="space-y-4"
//                 >
//                   <input type="hidden" name="_subject" value="Nuevo contacto desde la web" />
//                   <input type="hidden" name="_captcha" value="false" />
//                   <input type="hidden" name="_next" value={window.location.href} />
                  
//                   <div>
//                     <label htmlFor="name" className="block text-gray-300 mb-2">Nombre</label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       required
//                       className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                       placeholder="Tu nombre"
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                       className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                       placeholder="tu@email.com"
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="message" className="block text-gray-300 mb-2">Mensaje</label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       required
//                       rows={4}
//                       className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
//                       placeholder="¿En qué podemos ayudarte?"
//                     ></textarea>
//                   </div>
                  
//                   <button 
//                     type="submit"
//                     className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity w-full flex items-center justify-center gap-2"
//                   >
//                     Enviar mensaje
//                     <Mail className="w-5 h-5" />
//                   </button>
//                 </form>
//               </motion.div>
              
//               {/* Contact Info - Con ajustes para corregir overflow */}
//               <div className="flex flex-col space-y-6 md:space-y-8">
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10"
//                 >
//                   <h3 className="text-2xl font-bold text-white mb-4 md:mb-6">Información de contacto</h3>
//                   <div className="space-y-4">
//                     <div className="flex items-start gap-3">
//                       <Mail className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
//                       <div>
//                         <p className="text-white font-semibold">Email</p>
//                         <a href="mailto:lucosoft.contacto@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors break-all">
//                           lucosoft.contacto@gmail.com
//                         </a>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-3">
//                       <Phone className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
//                       <div>
//                         <p className="text-white font-semibold">Teléfono</p>
//                         <a href="tel:+5491141406819" className="text-gray-300 hover:text-purple-400 transition-colors">
//                           +54 9 11 4140 6819
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
                
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10"
//                 >
//                   <h3 className="text-2xl font-bold text-white mb-4 md:mb-6">Contacto directo</h3>
//                   <p className="text-gray-300 mb-6">
//                     ¿Preferís una comunicación más directa? Contactanos por WhatsApp y te responderemos a la brevedad.
//                   </p>
//                   <a
//                     href="https://wa.me/5491141406819?text=Hola,%20me%20gustaría%20consultar%20sobre%20sus%20servicios"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors w-full flex items-center justify-center gap-2"
//                   >
//                     Hablar por WhatsApp
//                     <MessageCircleMore className="w-5 h-5" />
//                   </a>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </section>


//         {/* Footer */}
//         <footer className="bg-black/30 py-12">
//           <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="text-2xl font-bold text-white mb-4">Lu&Co Soft</h3>
//               <p className="text-gray-400">Soluciones digitales a medida</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Contacto</h3>
//               <div className="space-y-2">
//                 <a href="mailto:lucosoft.contacto@gmail.com" className="text-gray-400 flex items-center gap-2 hover:text-white transition-colors">
//                   <Mail className="w-5 h-5" />
//                   lucosoft.contacto@gmail.com
//                 </a>
//                 <a href="tel:+5491141406819" className="text-gray-400 flex items-center gap-2 hover:text-white transition-colors">
//                   <Phone className="w-5 h-5" />
//                   +54 9 11 4140 6819
//                 </a>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Síguenos</h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   <Github className="w-6 h-6" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   <Linkedin className="w-6 h-6" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   <Twitter className="w-6 h-6" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </Router>
//   );
// };

// export default App;