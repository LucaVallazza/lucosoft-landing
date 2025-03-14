import { motion, useAnimation } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

// Modificación al componente FloatingParticle para iniciar inmediatamente
const FloatingParticle = ({ 
  size, 
  color, 
  speed = 1
}: { 
  size: number, 
  color: string,
  speed?: number
}) => {
  // Posiciones iniciales aleatorias dentro de la pantalla
  const initialX = Math.random() * 100; // Porcentaje del ancho
  const initialY = Math.random() * 100; // Porcentaje del alto
  
  // Patrones de movimiento muy ampliados según el tamaño
  const xMovement = size < 4 ? [-30, 30, -30] : size < 7 ? [-60, 60, -60] : [-100, 100, -100];
  const yMovement = size < 4 ? [-30, 30, -30] : size < 7 ? [-60, 60, -60] : [-100, 100, -100];
  
  // Duración del movimiento aumentada para hacerlo más lento
  const movementDuration = (30 - size) * 1.5 * speed;
  
  // Offset aleatorio para que empiecen en diferentes puntos del ciclo de animación
  const xStartOffset = Math.random();
  const yStartOffset = Math.random();
  
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        width: size,
        height: size,
        backgroundColor: color,
        opacity: size > 6 ? 0.15 : size > 3 ? 0.25 : 0.4,
        boxShadow: `0 0 ${size * 2}px ${color}20`,
      }}
      initial={{
        x: xMovement[Math.floor(xStartOffset * 3)], // Comenzar en una posición aleatoria del ciclo
        y: yMovement[Math.floor(yStartOffset * 3)],
      }}
      animate={{
        x: xMovement,
        y: yMovement,
        scale: [1, 1.2, 1],
        opacity: [
          size > 6 ? 0.15 : size > 3 ? 0.25 : 0.4, 
          size > 6 ? 0.25 : size > 3 ? 0.35 : 0.5, 
          size > 6 ? 0.15 : size > 3 ? 0.25 : 0.4
        ],
      }}
      transition={{
        x: {
          duration: movementDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: -xStartOffset * movementDuration, // Comenzar en un punto aleatorio del ciclo
        },
        y: {
          duration: movementDuration * 1.3, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: -yStartOffset * movementDuration * 1.3, // Comenzar en un punto aleatorio del ciclo
        },
        scale: {
          duration: 4 + Math.random() * 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: -Math.random() * 5, // Comenzar en un punto aleatorio del ciclo
        },
        opacity: {
          duration: 4 + Math.random() * 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: -Math.random() * 5, // Comenzar en un punto aleatorio del ciclo
        }
      }}
    />
  );
};

// Componente para palabras destacadas con efectos premium - modificado para tener rebote al salir del hover
const PremiumWord = ({ text, underlineDelay = 0 }: { 
  text: string, 
  delay?: number, 
  underlineDelay?: number
}) => {
  return (
    <motion.span
      className="relative inline-block"
      whileHover={{ 
        scale: 1.05,
        transition: { type: "spring", stiffness: 500, damping: 10 }
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
        bounce: 0.3
      }} // Añade rebote para todas las transiciones
      style={{ 
        transformOrigin: "center",
        filter: "drop-shadow(0 0 3px rgba(192, 132, 252, 0.15))"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 1, transition: { type: "spring", stiffness: 300, damping: 15 } }}
    >
      <span className="text-transparent bg-clip-text italic" style={{
        background: "linear-gradient(to right, #f472b6, #a855f7, #7e22ce)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontStyle: "italic"
      }}>
        {text}
      </span>
      <motion.div
        className="absolute -bottom-2 left-0 w-full h-1"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.6, delay: underlineDelay }}
        style={{ 
          background: "linear-gradient(to right, #f472b6, #a855f7, #7e22ce)"
        }}
      />
    </motion.span>
  );
};

const Hero = ({ scrollToSection }: HeroProps) => {
  // Estados para animaciones especiales
  const logoControls = useAnimation();
  
  // Animar al cargar
  useEffect(() => {
    const sequence = async () => {
      await logoControls.start({ 
        scale: [0.8, 1.1, 1],
        opacity: [0, 1],
        y: [20, -10, 0],
        transition: { duration: 0.5, ease: "easeOut" }
      });
    };
    
    sequence();
  }, [logoControls]);

  // Generar partículas de diferentes tamaños y colores
  const particles = Array.from({ length: 80 }).map((_, i) => {
    const size = Math.random() * 12 + 2; // Tamaños entre 2px y 14px
    let color;
    let speed;
    
    // Asignar diferentes colores y velocidades según el tamaño para crear capas visuales
    if (size < 4) {
      color = 'rgba(147, 197, 253, 0.6)'; // Azul claro para partículas pequeñas
      speed = 0.8; // Más lentas
    } else if (size < 7) {
      color = 'rgba(167, 139, 250, 0.6)'; // Violeta para partículas medianas
      speed = 1; // Velocidad media
    } else {
      color = 'rgba(236, 72, 153, 0.5)'; // Rosa para partículas grandes
      speed = 1.3; // Más rápidas
    }
    
    return {
      id: i,
      size,
      color,
      speed
    };
  });

  return (
    <section 
      id="inicio" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/40 to-violet-950/40"></div>
      
      {/* Floating particles system */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <FloatingParticle
            key={particle.id}
            size={particle.size}
            color={particle.color}
            speed={particle.speed}
          />
        ))}
      </div>
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ 
          x: [0, 40, 0], 
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3]  
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Nuevo orbe central con pulsaciones */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-pink-500/5 to-violet-500/5 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Lu&Co Soft Logo */}
     
      {/* Hero content con estructura en dos líneas */}
      <div className="text-center z-10 px-4 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 flex flex-col items-center gap-4 md:gap-6">
          {/* Primera línea: "Soluciones a medida" */}
          <motion.div 
            className="block "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <PremiumWord 
              text="Soluciones " 
              delay={0.6} 
              underlineDelay={0.9} 
            />
            <span className="mx-2">{" "}a medida</span>
          </motion.div>
          
          {/* Segunda línea: "para tu negocio" */}
          <motion.div 
            className="block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <span>para tu </span>
            <PremiumWord 
              text="Negocio" 
              delay={1.4}
              underlineDelay={1.7} 
            />
          </motion.div>
        </h1>
        
        {/* Párrafo descriptivo */}
        <motion.p 
          className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 2.1 }}
        >
          Potencia tu presencia digital con soluciones profesionales.
        </motion.p>
        
        {/* Botones de acción */}
        <motion.div 
          className="flex flex-wrap gap-3 md:gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 2.3 }}
        >
          <motion.a 
            href="#contacto"
            className="px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white text-sm md:text-base font-medium hover:opacity-90 transition-all flex items-center gap-2 hover:shadow-md hover:shadow-purple-500/20"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contacto');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Consultá sin cargo</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 2.5 }}
            >
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.div>
          </motion.a>
          
          <motion.a 
            href="#proyectos"
            className="px-6 md:px-8 py-2 md:py-3 border border-white/20 rounded-lg text-white text-sm md:text-base font-medium hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/40"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('proyectos');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver proyectos
          </motion.a>
        </motion.div>
      </div>
      
      {/* Animated bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M0,64 C288,96 960,0 1440,64 L1440,120 L0,120 Z" 
            fill="rgba(88, 28, 135, 0.1)"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, delay: 1.8 }}
          />
          <motion.path 
            d="M0,64 C288,32 720,96 1440,64 L1440,120 L0,120 Z" 
            fill="rgba(124, 58, 237, 0.05)"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, delay: 2.0 }}
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;