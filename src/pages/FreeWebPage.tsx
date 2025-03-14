import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Layout, Users, SearchCheck, Clock, Globe, TrendingUp, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import ProjectsSection from '../components/ProjectsSection';

const FreeWebPage = () => {

  useEffect(() => {
    window.scrollTo(0,0)
    return () => {
      
    };
  }, []);
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section - Mobile First */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Creamos tu Página Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">GRATIS</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto">
              Impulsa tu negocio con presencia digital profesional sin costo de diseño o desarrollo
            </p>
          </div>
          
          {/* Main Benefits Section - Improved Copywriting with Keywords */}
          <div className="mb-8 md:mb-12 bg-white/5 rounded-xl p-5 sm:p-6 border border-white/10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-5">
              Beneficios de invertir en diseño web profesional
            </h2>
            
            <ul className="space-y-4">
              <li className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 mr-3" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Aumenta tu visibilidad en Google</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Tu negocio aparecerá en búsquedas relevantes, captando clientes potenciales que buscan exactamente tus productos o servicios.</p>
                </div>
              </li>
              
              <li className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 mr-3" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Genera leads y ventas automáticamente</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Una página web efectiva trabaja para vos 24/7, convirtiéndose en tu mejor vendedor y superando las limitaciones del local físico.</p>
                </div>
              </li>
              
              <li className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 mr-3" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Construye credibilidad empresarial online</h3>
                  <p className="text-gray-300 text-sm sm:text-base">El 75% de los usuarios juzga la confiabilidad de un negocio por su web. Un diseño web profesional transmite seriedad y confianza.</p>
                </div>
              </li>
              
              <li className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 mr-3" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Exhibe tu catálogo de productos y servicios</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Una web bien organizada permite a tus clientes explorar tu oferta completa, entender tus ventajas y contactarte fácilmente.</p>
                </div>
              </li>
              
              <li className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 mr-3" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Multiplica tu marketing digital</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Tu web es el centro de tus estrategias digitales, permitiéndote integrar redes sociales, email marketing y publicidad paga con máxima efectividad.</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Features Cards - Mobile First Design */}
          <div className="mb-8 md:mb-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-purple-500/30 transition-colors">
              <div className="flex items-center mb-3">
                <Layout className="w-6 h-6 text-purple-400 mr-2" />
                <h3 className="text-lg font-bold text-white">Diseño Web Responsive</h3>
              </div>
              <p className="text-gray-300 text-sm">Tu sitio se verá perfecto en celulares, tablets y computadoras, mejorando la experiencia de usuario y el posicionamiento en Google.</p>
            </div>
            
            <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-purple-500/30 transition-colors">
              <div className="flex items-center mb-3">
                <SearchCheck className="w-6 h-6 text-blue-400 mr-2" />
                <h3 className="text-lg font-bold text-white">SEO Local para PyMEs</h3>
              </div>
              <p className="text-gray-300 text-sm">Implementamos optimización SEO básica para que tu negocio sea encontrado por clientes potenciales en tu zona de influencia.</p>
            </div>
            
            <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-purple-500/30 transition-colors">
              <div className="flex items-center mb-3">
                <Clock className="w-6 h-6 text-pink-400 mr-2" />
                <h3 className="text-lg font-bold text-white">Web de Alto Rendimiento</h3>
              </div>
              <p className="text-gray-300 text-sm">Desarrollamos páginas optimizadas para cargar rápidamente, reduciendo la tasa de rebote y mejorando la experiencia de navegación.</p>
            </div>
            
            <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-purple-500/30 transition-colors">
              <div className="flex items-center mb-3">
                <Globe className="w-6 h-6 text-green-400 mr-2" />
                <h3 className="text-lg font-bold text-white">Configuración Profesional</h3>
              </div>
              <p className="text-gray-300 text-sm">Te asesoramos en la compra del dominio y hosting más adecuado para tu negocio, asegurando una configuración técnica óptima.</p>
            </div>
          </div>
          
          {/* Why Now Section - Made More Convincing */}
          <div className="mb-8 md:mb-12 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-5 sm:p-6 border border-purple-500/20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              Por qué necesitas una web profesional ahora
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <TrendingUp className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0 mr-2" />
                <p className="text-gray-200 text-sm sm:text-base">
                  <strong className="text-white">El 93% de las experiencias online</strong> comienzan con un buscador. Sin presencia web, eres invisible para este enorme flujo de clientes potenciales.
                </p>
              </div>
              
              <div className="flex items-start">
                <Users className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0 mr-2" />
                <p className="text-gray-200 text-sm sm:text-base">
                  <strong className="text-white">Tu competencia ya está conquistando el mercado digital:</strong> cada día que pasa sin web profesional, pierdes clientes frente a competidores con mejor presencia online.
                </p>
              </div>
              
              <div className="flex items-start">
                <Globe className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0 mr-2" />
                <p className="text-gray-200 text-sm sm:text-base">
                  <strong className="text-white">Expansión sin límites geográficos:</strong> una página web bien posicionada te permite captar clientes más allá de tu barrio, ciudad e incluso país.
                </p>
              </div>
            </div>
          </div>
          
          {/* FAQ Section - More Keyword Rich */}
          <div className="mb-8 md:mb-12 bg-white/5 rounded-xl p-5 sm:p-6 border border-white/10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              Preguntas frecuentes sobre creación de páginas web
            </h2>
            
            <div className="space-y-5">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">¿Cuánto cuesta crear una página web para mi negocio en Argentina?</h3>
                <p className="text-gray-300 text-sm sm:text-base">Normalmente, el diseño web profesional tiene un costo inicial de entre ARS 60.000 y ARS 800.000 (sin contar los gastos de hosting, dominio y mantenimiento, que rondan los ARS 50.000) según su complejidad. <br></br> <br></br> Nuestra oferta elimina estos costos iniciales de diseño y desarrollo. El cliente solo asume el costo anual del dominio y el costo mensual del hosting y mantenimiento.</p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">¿Que costos adicionales tiene la pagina web?</h3>
                <p className="text-gray-300 text-sm sm:text-base">Cuando estes contento con el resultado se realiza el lanzamiento de la pagina web, y el costo mensual de mantenimiento y de hosting es de ARS 48.000/mes + Un unico pago de alrededor de ARS 30.000 para la compra del dominio. Sin costos adicionales ni ocultos. <br></br> <br></br> Todos estos costos se abonan una vez la pagina se encuentre funcionando y usted de el visto bueno.</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">¿Y si no me gusta el diseño de la pagina?</h3>
                <p className="text-gray-300 text-sm sm:text-base">Si no te gusta, no pagas, asi de sencillo.</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">¿Y si me arrepiento y quiero dar de baja el servicio?</h3>
                <p className="text-gray-300 text-sm sm:text-base"> El servicio se puede dar de baja en el momento que usted desee de forma rapida y sencilla. </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">¿Qué información necesito para desarrollar mi sitio web?</h3>
                <p className="text-gray-300 text-sm sm:text-base">Solo necesitás proporcionarnos: información básica sobre tu empresa, preferencias de diseño y secciones de la pagina, logotipos/branding existente, fotos de productos o servicios, y el contenido descriptivo. Nosotros nos encargamos del diseño web responsive y la implementación técnica.</p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">¿En cuánto tiempo estará lista mi página web gratuita?</h3>
                <p className="text-gray-300 text-sm sm:text-base">El tiempo de desarrollo web para una landing page gratuita es de aproximadamente 7 a 14 días hábiles desde que recibimos todo el material necesario y se completa la contratación del hosting.</p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">¿Puedo actualizar el contenido de mi página web después?</h3>
                <p className="text-gray-300 text-sm sm:text-base">Ofrecemos un paquete básico de mantenimiento web que permite solicitar hasta 10 cambios menores mensualmente (actualizacion de precios, productos, cambios de redaccion, etc).</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section - Mobile Optimized */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              ¡Lanza tu presencia web profesional hoy!
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Hace tu consulta gratuita y averiguá si esta promo se adapta a tus necesidades.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a 
                href={`https://wa.me/5491141406819?text=${encodeURIComponent("Hola! Vi la promoción de la página web GRATIS y me interesa obtener más información.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-lg text-white text-base sm:text-lg font-medium transition-all flex items-center justify-center gap-2"
              >
                <span>¡Quiero mi página GRATIS!</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              

            </div>
          </div>

<ProjectsSection/>

          {/* SEO Content Section - Improved and More Visible */}
          <div className="text-gray-400 text-sm border-t border-white/10 pt-8 space-y-3">
            <h2 className="text-white text-lg font-medium mb-2">Diseño de páginas web profesionales en Argentina</h2>
            <p>
              Especialistas en creación de páginas web para PyMEs, diseño web profesional, 
              desarrollo de sitios web corporativos, landing pages efectivas y tiendas online. 
              Servicios de diseño web en Buenos Aires con los mejores precios del mercado y ahora 
              con promoción especial: desarrollo web gratis (cliente cubre dominio/hosting).
            </p>
            <p>
              Si estás buscando crear una página web económica, comprar una página web profesional o 
              contratar servicios de diseño web para tu empresa, nuestro equipo de desarrolladores web 
              te ofrece soluciones a medida que impulsan tu presencia online y aumentan tus ventas.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FreeWebPage;