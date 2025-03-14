import { motion } from 'framer-motion';
import { Home, Grid, PenTool, Users, Mail, MessageCircleMore } from 'lucide-react';

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (id: string) => void;
}

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen, scrollToSection }: NavbarProps) => {
  return (
    <nav className="fixed w-full bg-black/10 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          >
            L&C Soft
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Inicio', 'Servicios', 'Proyectos', 'Nosotros', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <span className="sr-only">Abrir menú</span>
              {!isMobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - Desplegado hacia abajo */}
      <motion.div 
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0, backdropFilter: "blur(0px)" }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
          backdropFilter: isMobileMenuOpen ? "blur(16px)" : "blur(0px)"
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-lg border-t border-white/10">
          {[
            { name: 'Inicio', icon: <Home className="w-5 h-5" /> },
            { name: 'Servicios', icon: <PenTool className="w-5 h-5" /> },
            { name: 'Proyectos', icon: <Grid className="w-5 h-5" /> },
            { name: 'Nosotros', icon: <Users className="w-5 h-5" /> },
            { name: 'Contacto', icon: <Mail className="w-5 h-5" /> }
          ].map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center gap-3 px-3 py-4 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 border-b border-white/5 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.name.toLowerCase());
              }}
            >
              <span className="text-purple-400">{item.icon}</span>
              {item.name}
            </a>
          ))}
          <div className="px-3 py-4">
            <a
              href="https://wa.me/5491141406819?text=Hola,%20me%20gustaría%20consultar%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageCircleMore className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;