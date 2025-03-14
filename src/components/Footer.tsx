import { Github, Linkedin, Mail, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/30 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Lu&Co Soft</h3>
          <p className="text-gray-400">Soluciones digitales a medida</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contacto</h3>
          <div className="space-y-2">
            <a href="mailto:lucosoft.contacto@gmail.com" className="text-gray-400 flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              lucosoft.contacto@gmail.com
            </a>
            <a href="tel:+5491141406819" className="text-gray-400 flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              +54 9 11 4140 6819
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-white/10 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Lu&Co Soft. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;