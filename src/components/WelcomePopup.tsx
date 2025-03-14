import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface WelcomePopupProps {
  onClose: () => void;
}

const WelcomePopup = ({ onClose }: WelcomePopupProps) => {
  const handleMoreInfoClick = () => {
    onClose();
    
    // Dar tiempo para que el popup se cierre antes de hacer scroll
    setTimeout(() => {
      const serviciosSection = document.getElementById('servicios');
      if (serviciosSection) {
        serviciosSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-gradient-to-br from-gray-900 to-purple-950 rounded-2xl p-6 md:p-8 border border-purple-500/30 max-w-md w-full relative shadow-xl shadow-purple-900/20"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 15 }}
      >
        <button 
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            ¡Bienvenido!
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 text-lg">
            Por ser la primera vez que nos visitas, te regalamos una <span className="text-pink-400 font-semibold">promo por tiempo limitado</span>.
          </p>
        </div>
        
        <div className="bg-white/10 p-4 rounded-lg border border-white/10 mb-6">
          <p className="text-center text-white font-medium">
            ¡Te hacemos tu landing page <span className="text-pink-400 font-bold">GRATIS</span>!
          </p>
          <p className="text-center text-sm text-gray-400 mt-1">
            Esta oferta expira en 30 minutos
          </p>
        </div>
        
        <div className="flex flex-col space-y-3">
          <button
            onClick={handleMoreInfoClick}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity w-full"
          >
            Más información
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-transparent border border-white/20 rounded-lg text-white/80 font-medium hover:bg-white/10 transition-colors w-full"
          >
            Ver después
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomePopup;