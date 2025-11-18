import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src="https://static.readdy.ai/image/51728865a55bff14b24f6409935f8cb7/bafdaaf5821431c7c6f7e3fdf9310462.png" 
                  alt="José Sousa Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
                  José Sousa
                </h3>
                <p className="text-gray-400 text-base">Preparador de Justicia</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md text-center md:text-left mx-auto md:mx-0">
              Especialista en preparación de oposiciones de justicia con años de experiencia 
              ayudando a opositores a alcanzar sus objetivos profesionales en el ámbito judicial.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-amber-600 transition-colors duration-200 cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-amber-600 transition-colors duration-200 cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-amber-600 transition-colors duration-200 cursor-pointer">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-amber-600 transition-colors duration-200 cursor-pointer">
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Oposiciones</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/oposiciones/auxilio-judicial" className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                  Auxilio Judicial
                </Link>
              </li>
              <li>
                <Link to="/oposiciones/tramitacion-procesal" className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                  Tramitación Procesal
                </Link>
              </li>
              <li>
                <Link to="/oposiciones/gestion-procesal" className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                  Gestión Procesal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 TuAsistenteDeIA. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
