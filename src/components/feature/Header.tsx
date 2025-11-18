
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOposicionesOpen, setIsOposicionesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-16 h-16 flex items-center justify-center">
              <img 
                src="https://static.readdy.ai/image/51728865a55bff14b24f6409935f8cb7/bafdaaf5821431c7c6f7e3fdf9310462.png" 
                alt="José Sousa Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: '"Pacifico", serif' }}>
                José Sousa
              </h1>
              <p className="text-sm text-gray-600">Preparador de Justicia</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200 cursor-pointer"
            >
              Inicio
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsOposicionesOpen(!isOposicionesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-amber-600 transition-colors duration-200 cursor-pointer"
              >
                <span>Oposiciones</span>
                <i className={`ri-arrow-down-s-line transition-transform duration-200 ${isOposicionesOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isOposicionesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <Link
                    to="/oposiciones/auxilio-judicial"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-amber-600 transition-colors duration-200 cursor-pointer"
                    onClick={() => setIsOposicionesOpen(false)}
                  >
                    <div className="font-medium">Auxilio Judicial</div>
                    <div className="text-sm text-gray-500">Apoyo administrativo en juzgados</div>
                  </Link>
                  <Link
                    to="/oposiciones/tramitacion-procesal"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-amber-600 transition-colors duration-200 cursor-pointer"
                    onClick={() => setIsOposicionesOpen(false)}
                  >
                    <div className="font-medium">Tramitación Procesal</div>
                    <div className="text-sm text-gray-500">Gestión de expedientes judiciales</div>
                  </Link>
                  <Link
                    to="/oposiciones/gestion-procesal"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-amber-600 transition-colors duration-200 cursor-pointer"
                    onClick={() => setIsOposicionesOpen(false)}
                  >
                    <div className="font-medium">Gestión Procesal</div>
                    <div className="text-sm text-gray-500">Administración y gestión judicial</div>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/blog" 
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200 cursor-pointer"
            >
              Blog
            </Link>
            
            <Link 
              to="/contacto" 
              className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`text-2xl transition-transform duration-200 ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-amber-600 transition-colors duration-200 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              
              <div>
                <button
                  onClick={() => setIsOposicionesOpen(!isOposicionesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-amber-600 transition-colors duration-200 cursor-pointer"
                >
                  <span>Oposiciones</span>
                  <i className={`ri-arrow-down-s-line transition-transform duration-200 ${isOposicionesOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {isOposicionesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link
                      to="/oposiciones/auxilio-judicial"
                      className="block py-2 text-gray-600 hover:text-amber-600 transition-colors duration-200 cursor-pointer"
                      onClick={() => {
                        setIsOposicionesOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Auxilio Judicial
                    </Link>
                    <Link
                      to="/oposiciones/tramitacion-procesal"
                      className="block py-2 text-gray-600 hover:text-amber-600 transition-colors duration-200 cursor-pointer"
                      onClick={() => {
                        setIsOposicionesOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Tramitación Procesal
                    </Link>
                    <Link
                      to="/oposiciones/gestion-procesal"
                      className="block py-2 text-gray-600 hover:text-amber-600 transition-colors duration-200 cursor-pointer"
                      onClick={() => {
                        setIsOposicionesOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Gestión Procesal
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-amber-600 transition-colors duration-200 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              
              <Link 
                to="/contacto" 
                className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors duration-200 cursor-pointer text-center whitespace-nowrap"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
