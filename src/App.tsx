import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import FreeWebPage from './pages/FreeWebPage';
import WelcomePopup from './components/WelcomePopup';

const App = () => {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

  useEffect(() => {
    // Verificar si es la primera vez que entra
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisitedBefore) {
      // Es primera visita, mostrar popup y configurar promoción
      setShowWelcomePopup(true);
      localStorage.setItem('hasVisitedBefore', 'true');
      
      // Establecer el tiempo de expiración de la promo (30 minutos desde ahora)
      const expirationTime = new Date().getTime() + 30 * 60 * 1000; // 30 minutos en milisegundos
      localStorage.setItem('promoData', JSON.stringify({
        active: true,
        endTime: expirationTime
      }));
    } else {
      // No es primera visita, verificar si hay una promo activa o crear una nueva
      const promoData = localStorage.getItem('promoData');
      
      if (!promoData) {
        // No hay datos de promo almacenados, crear una nueva
        const expirationTime = new Date().getTime() + 30 * 60 * 1000;
        localStorage.setItem('promoData', JSON.stringify({
          active: true,
          endTime: expirationTime
        }));
      } else {
        // Hay datos de promo, verificar si expiró
        const { endTime } = JSON.parse(promoData);
        const currentTime = new Date().getTime();
        
        if (currentTime > endTime) {
          // La promo expiró, crear una nueva
          const newExpirationTime = currentTime + 30 * 60 * 1000;
          localStorage.setItem('promoData', JSON.stringify({
            active: true,
            endTime: newExpirationTime
          }));
        }
      }
    }
  }, []);

  const handleClosePopup = () => {
    setShowWelcomePopup(false);
  };

  return (
    <Router>
      {showWelcomePopup && <WelcomePopup onClose={handleClosePopup} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pagina-web-gratis" element={<FreeWebPage />} />
        {/* Redireccionar cualquier otra ruta a la página principal */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;