import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import SEOHead from '../../../components/seo/SEOHead';
import { Link } from 'react-router-dom';

const GestionProcesal2024Page = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Novedades en Gestión Procesal 2024: Cambios Normativos y Nuevas Competencias",
    "description": "Análisis completo de las principales novedades legislativas que afectan a las oposiciones de Gestión Procesal en 2024",
    "author": {
      "@type": "Person",
      "name": "José Sousa"
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Novedades Gestión Procesal 2024 | Cambios Normativos | José Sousa"
        description="Análisis completo de las principales novedades legislativas que afectan a las oposiciones de Gestión Procesal en 2024. Cambios normativos y nuevas competencias."
        keywords="gestión procesal 2024, novedades legislativas, cambios normativos, oposiciones justicia 2024"
        canonicalUrl={`${import.meta.env.VITE_SITE_URL || "https://example.com"}/blog/gestion-procesal-2024`}
        structuredData={structuredData}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-amber-200 text-sm font-medium mb-4">15 de Enero de 2024</div>
            <h1 className="text-5xl font-bold mb-6">
              Novedades en Gestión Procesal 2024
              <span className="block text-amber-200 text-3xl mt-2">Cambios Normativos y Nuevas Competencias</span>
            </h1>
            <p className="text-xl text-amber-100 mb-8">
              Análisis completo de las principales modificaciones legislativas que afectan 
              al temario y las competencias de Gestión Procesal
            </p>
            <div className="flex items-center justify-center space-x-6 text-amber-200">
              <div className="flex items-center space-x-2">
                <i className="ri-user-line"></i>
                <span>José Sousa</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-time-line"></i>
                <span>12 min lectura</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-bookmark-line"></i>
                <span>Actualización Normativa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido del Artículo */}
      <article className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Introducción */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                El año 2024 ha traído consigo importantes modificaciones normativas que afectan 
                directamente al ámbito de la gestión procesal y administrativa. Estos cambios 
                no solo impactan en el día a día de los profesionales, sino que también 
                requieren una actualización del temario de oposiciones.
              </p>
            </div>

            {/* Principales Novedades */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Principales Modificaciones Legislativas
              </h2>
              
              <div className="space-y-8">
                <div className="bg-amber-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="ri-scales-3-line text-amber-600 mr-3"></i>
                    Ley de Eficiencia Procesal
                  </h3>
                  <p className="text-gray-700 mb-4">
                    La nueva Ley de Eficiencia Procesal introduce cambios significativos en la tramitación 
                    de procedimientos civiles, especialmente en:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Digitalización completa de expedientes judiciales</li>
                    <li>Nuevos plazos para la presentación de escritos</li>
                    <li>Modificación de competencias del Letrado de la Administración de Justicia</li>
                    <li>Procedimientos simplificados para cuantías menores</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="ri-shield-line text-blue-600 mr-3"></i>
                    Reforma del Código Penal
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Las modificaciones en el ámbito penal afectan especialmente a:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Nuevos tipos penales relacionados con delitos informáticos</li>
                    <li>Modificación de penas y medidas alternativas</li>
                    <li>Cambios en el procedimiento de menores</li>
                    <li>Actualización de medidas cautelares</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="ri-government-line text-green-600 mr-3"></i>
                    Ley de Administración Digital
                  </h3>
                  <p className="text-gray-700 mb-4">
                    La transformación digital de la Administración de Justicia incluye:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Obligatoriedad de la tramitación electrónica</li>
                    <li>Nuevos sistemas de identificación y firma</li>
                    <li>Interoperabilidad entre sistemas judiciales</li>
                    <li>Protección de datos en el ámbito judicial</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Impacto en el Temario */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Impacto en el Temario de Oposiciones
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-amber-200 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Temas Más Afectados</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Tema 12: Procedimiento administrativo común</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Tema 24: Letrados de la Administración de Justicia</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Tema 27: Ley de Enjuiciamiento Civil</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Tema 43: Sistema procesal penal</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Nuevas Competencias</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Gestión de expedientes digitales</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Tramitación electrónica avanzada</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Coordinación interinstitucional</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Protección de datos judiciales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Recomendaciones de Estudio */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Recomendaciones para Opositores
              </h2>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <i className="ri-lightbulb-line text-amber-600 mr-2"></i>
                      Estrategias de Actualización
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li>• Seguimiento continuo de modificaciones normativas</li>
                      <li>• Actualización de apuntes con nueva jurisprudencia</li>
                      <li>• Práctica con casos reales actualizados</li>
                      <li>• Formación en herramientas digitales</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <i className="ri-calendar-line text-amber-600 mr-2"></i>
                      Cronograma de Estudio
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li>• Enero-Marzo: Actualización normativa</li>
                      <li>• Abril-Junio: Consolidación de cambios</li>
                      <li>• Julio-Septiembre: Práctica intensiva</li>
                      <li>• Octubre-Diciembre: Repaso y simulacros</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Recursos Adicionales */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Recursos de Actualización
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                    <i className="ri-file-text-line text-2xl text-amber-600"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">BOE Actualizado</h3>
                  <p className="text-gray-600 text-sm">
                    Seguimiento diario de publicaciones oficiales y modificaciones normativas.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                    <i className="ri-scales-line text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Jurisprudencia</h3>
                  <p className="text-gray-600 text-sm">
                    Análisis de sentencias relevantes y criterios interpretativos actuales.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mb-4">
                    <i className="ri-book-open-line text-2xl text-green-600"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Manuales</h3>
                  <p className="text-gray-600 text-sm">
                    Material de estudio actualizado con todas las novedades legislativas.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusión */}
            <section className="mb-16">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusión</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Las modificaciones normativas de 2024 representan un cambio significativo en el 
                  panorama de la gestión procesal. Los opositores deben mantenerse actualizados 
                  y adaptar su estrategia de estudio para incorporar estos cambios.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  La clave del éxito está en la actualización continua y la comprensión profunda 
                  de cómo estos cambios afectan a la práctica diaria de la gestión procesal y administrativa.
                </p>
              </div>
            </section>

            {/* Navegación */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200">
              <Link 
                to="/blog"
                className="text-amber-600 hover:text-amber-700 font-medium flex items-center space-x-2 mb-4 sm:mb-0"
              >
                <i className="ri-arrow-left-line"></i>
                <span>Volver al Blog</span>
              </Link>
              
              <div className="flex space-x-4">
                <button className="text-gray-600 hover:text-amber-600 transition-colors duration-200">
                  <i className="ri-share-line text-xl"></i>
                </button>
                <button className="text-gray-600 hover:text-amber-600 transition-colors duration-200">
                  <i className="ri-bookmark-line text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default GestionProcesal2024Page;