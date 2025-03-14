import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Función para desplazarse a las secciones
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Cierra primero el menú móvil
      setIsMobileMenuOpen(false);
      
      // Pequeño retraso para asegurar que el menú esté cerrado
      setTimeout(() => {
        // Ajuste para la altura de la barra de navegación fija
        const navbarHeight = 64; // Ajusta según sea necesario
        const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-violet-950">
      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;