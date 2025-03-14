import { motion } from "framer-motion";
import {
  Globe,
  Monitor,
  Smartphone,
  BarChart3,
  MessageSquare,
  MessageCircleMore,
  Gift,
  Timer,
} from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  CustomDot,
  CustomRightArrow,
  CustomLeftArrow,
} from "./CarouselControls";
import { Keyword } from "./ui/Keyword";
import { useState, useEffect } from "react";
// Importar estilos específicos para el OfferBurst
import "./styles/offer-burst.css";

// Componente para el contador regresivo
const CountdownTimer = ({ endTime }: { endTime: number }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = endTime - now;

    if (difference <= 0) {
      return { minutes: "00", seconds: "00", isExpired: true };
    }

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      if (updatedTimeLeft.isExpired) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="flex items-center text-white">
      <Timer className="w-4 h-4 mr-1 text-pink-400" />
      <span className="font-mono font-medium text-sm">
        {timeLeft.minutes}:{timeLeft.seconds}
      </span>
    </div>
  );
};
// Componente para el icono de oferta con forma de estrella/burst
const OfferBurst = ({ active }: { active: boolean }) => {
  if (!active) return null;

  return (
    // Fixed positioning con Portal
    <div className="offer-burst-container">
      <motion.div
        className="offer-burst"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [-12, -8, -12],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="offer-burst-inner">
          <div className="offer-burst-text">OFERTA</div>
        </div>
      </motion.div>
    </div>
  );
};

const ServicesSection = () => {
  // Estado para la promoción
  const [promoData, setPromoData] = useState<{
    active: boolean;
    endTime: number;
  } | null>(null);

  useEffect(() => {
    // Obtener datos de promo del localStorage
    const storedPromoData = localStorage.getItem("promoData");

    if (storedPromoData) {
      const parsedData = JSON.parse(storedPromoData);
      const currentTime = new Date().getTime();

      // Verificar si la promo está activa
      if (currentTime < parsedData.endTime) {
        setPromoData(parsedData);
      } else {
        setPromoData({ active: false, endTime: 0 });
      }
    }

    // Establecer un intervalo para verificar el estado de la promo
    const interval = setInterval(() => {
      const updatedPromoData = localStorage.getItem("promoData");

      if (updatedPromoData) {
        const parsedData = JSON.parse(updatedPromoData);
        const currentTime = new Date().getTime();

        if (currentTime < parsedData.endTime) {
          setPromoData(parsedData);
        } else {
          setPromoData({ active: false, endTime: 0 });
          // Actualizar localStorage
          localStorage.setItem(
            "promoData",
            JSON.stringify({
              active: false,
              endTime: 0,
            })
          );
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Landing Pages",
      description: (
        <>
          Transforma visitas en <Keyword>oportunidades de negocio</Keyword> con
          una landing page diseñada para <Keyword>atraer</Keyword> y{" "}
          <Keyword>convertir</Keyword>. Diseños profesionales, mensajes
          estratégicos y optimización que{" "}
          <Keyword>impulsan tus resultados</Keyword> desde el primer clic.
        </>
      ),
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      promo: {
        text: promoData?.active ? (
          <>
            ¡Te hacemos tu landing page{" "}
            <span className="font-bold text-white">GRATIS</span>!
          </>
        ) : (
          <>
            Si todavía no tenés tu propia página o la que tenes no te gusta.{" "}
            <br /> ¡Te la hacemos GRATIS!
          </>
        ),
        icon: <Gift className="w-10 h-5 text-pink-400 animate-pulse" />,
      },
    },
    {
      title: "Aplicaciones Web/Desktop",
      description: (
        <>
          Lleva tu empresa al siguiente nivel con una plataforma web que{" "}
          <Keyword>automatiza procesos</Keyword>, mejora la{" "}
          <Keyword>experiencia del usuario</Keyword> y optimiza la{" "}
          <Keyword>gestión operativa</Keyword>. Soluciones a medida para{" "}
          <Keyword>potenciar tu rentabilidad</Keyword> y eficiencia.
        </>
      ),
      icon: <Monitor className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "Aplicaciones Móviles",
      description: (
        <>
          Expande tu alcance con una aplicación móvil que{" "}
          <Keyword>fideliza clientes</Keyword> y mantiene tu negocio activo en
          todo momento. Compatible con <Keyword>iOS</Keyword> y{" "}
          <Keyword>Android</Keyword>, diseñamos soluciones que{" "}
          <Keyword>optimizan la experiencia</Keyword> y generan nuevas
          oportunidades.
        </>
      ),
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Campañas de Marketing Digital",
      description: (
        <>
          Impulsa tu <Keyword>presencia digital</Keyword> con estrategias de
          marketing diseñadas para <Keyword>atraer audiencia</Keyword>,{" "}
          <Keyword>generar engagement</Keyword> y{" "}
          <Keyword>convertir clientes</Keyword>. Desde publicidad segmentada
          hasta contenido estratégico, hacemos crecer tu negocio.
        </>
      ),
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Community Management",
      description: (
        <>
          Construye una <Keyword>marca sólida</Keyword> y fortalece tu relación
          con la audiencia a través de una gestión estratégica de redes
          sociales. Creamos <Keyword>contenido atractivo</Keyword>, fomentamos
          la <Keyword>interacción</Keyword> y posicionamos tu negocio en el
          mercado digital.
        </>
      ),
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
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
          <h2 className="text-4xl font-bold text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-300">
            Soluciones integrales para tu presencia digital
          </p>
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
          containerClass="pb-12 flex items-stretch relative"
          className="items-stretch"
          sliderClass="items-stretch"
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
              <div
                className={`offer-card-container h-full bg-white/5 backdrop-blur-lg rounded-2xl p-6 border ${
                  service.title === "Landing Pages" && promoData?.active
                    ? "border-pink-500/30 hover:border-pink-500/50"
                    : "border-white/10 hover:border-purple-500/50"
                } transition-colors group flex flex-col relative`}
              >
                {/* Mostrar el ícono de oferta solo en Landing Pages cuando la promo está activa */}
                {service.title === "Landing Pages" && promoData?.active && (
                  <OfferBurst active={true} />
                )}

                <span className="flex flex-row justify-between items-start">
                  <span className="flex flex-row">
                    <div className="mb-4 mr-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                  </span>

                  {/* Contador solo para Landing Pages cuando la promo está activa */}
                  {service.title === "Landing Pages" && promoData?.active && (
                    <CountdownTimer endTime={promoData.endTime} />
                  )}
                </span>

                <p className="text-gray-300 flex-grow">{service.description}</p>

                {service.promo && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{
                      opacity: 1,
                      scale: [0.95, 1.05, 0.98, 1.02, 1],
                      y: [0, -2, 0, -1, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + index * 0.1,
                    }}
                    className={`mt-4 mb-2 p-3 ${
                      promoData?.active
                        ? "bg-gradient-to-r from-pink-900/60 to-red-900/60"
                        : "bg-gradient-to-r from-purple-900/60 to-pink-900/60"
                    } backdrop-blur-md rounded-lg border border-pink-500/30`}
                  >
                    <div className="flex items-center">
                      {service.promo.icon}
                      <span className="ml-2 text-pink-200 font-medium text-sm">
                        {service.promo.text}
                      </span>
                    </div>
                  </motion.div>
                )}

                <a
                  href={`https://wa.me/5491141406819?text=${encodeURIComponent(
                    `Hola buenas! Queria consultar por el servicio de ${
                      service.title
                    }${
                      service.title === "Landing Pages"
                        ? promoData?.active
                          ? " GRATIS (¡Oferta por tiempo limitado!)"
                          : " GRATIS"
                        : ""
                    }`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 ${
                    service.title === "Landing Pages" && promoData?.active
                      ? "bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700"
                      : "bg-green-600 hover:bg-green-700"
                  } transition-colors rounded-lg text-white text-sm font-medium mt-6 self-end`}
                >
                  <MessageCircleMore className="w-4 h-4" />
                  {service.title === "Landing Pages"
                    ? promoData?.active
                      ? "¡Quiero mi página GRATIS AHORA!"
                      : "¡Quiero mi página GRATIS!"
                    : "Consultar"}
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
