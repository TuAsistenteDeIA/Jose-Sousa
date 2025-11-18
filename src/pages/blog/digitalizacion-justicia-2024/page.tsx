import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import SEOHead from '../../../components/seo/SEOHead';
import { Link } from 'react-router-dom';

const DigitalizacionJusticia2024Page = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "La Digitalización de la Justicia en 2024: Impacto en Gestión Procesal",
    "description": "Análisis del proceso de transformación digital en la Administración de Justicia y su impacto en las competencias de gestión procesal",
    "author": {
      "@type": "Person",
      "name": "José Sousa"
    },
    "datePublished": "2024-03-10",
    "dateModified": "2024-03-10"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Digitalización de la Justicia 2024 | Gestión Procesal Digital | José Sousa"
        description="Análisis del proceso de transformación digital en la Administración de Justicia y su impacto en las competencias de gestión procesal en 2024."
        keywords="digitalización justicia, gestión procesal digital, transformación digital judicial, expediente electrónico"
        canonicalUrl={`${import.meta.env.VITE_SITE_URL || "https://example.com"}/blog/digitalizacion-justicia-2024`}
        structuredData={structuredData}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-blue-200 text-sm font-medium mb-4">10 de Marzo de 2024</div>
            <h1 className="text-5xl font-bold mb-6">
              La Digitalización de la Justicia en 2024
              <span className="block text-blue-200 text-3xl mt-2">Impacto en Gestión Procesal</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Cómo la transformación digital está revolucionando la Administración de Justicia 
              y redefiniendo las competencias profesionales
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center space-x-2">
                <i className="ri-user-line"></i>
                <span>José Sousa</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-time-line"></i>
                <span>10 min lectura</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-computer-line"></i>
                <span>Transformación Digital</span>
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
                La digitalización de la Administración de Justicia ha experimentado una aceleración 
                sin precedentes en 2024. Este proceso de transformación no solo moderniza los 
                procedimientos, sino que también redefine las competencias y responsabilidades 
                de los profesionales de gestión procesal.
              </p>
            </div>

            {/* Estado Actual */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Estado Actual de la Digitalización
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
                    Logros Alcanzados
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• 85% de juzgados con expediente electrónico</li>
                    <li>• Firma digital implementada en todos los órganos</li>
                    <li>• Notificaciones electrónicas operativas</li>
                    <li>• Interoperabilidad entre sistemas básica</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="ri-time-line text-orange-600 mr-2"></i>
                    Retos Pendientes
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Unificación de sistemas informáticos</li>
                    <li>• Formación completa del personal</li>
                    <li>• Integración con otras administraciones</li>
                    <li>• Ciberseguridad avanzada</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Herramientas Digitales */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Principales Herramientas Digitales
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="ri-folder-line text-blue-600 mr-3"></i>
                    Expediente Judicial Electrónico (EJE)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Sistema integral que permite la gestión completa de expedientes de forma digital:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Funcionalidades:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Creación y tramitación de expedientes</li>
                        <li>• Gestión documental avanzada</li>
                        <li>• Seguimiento en tiempo real</li>
                        <li>• Archivo digital permanente</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ventajas:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Reducción de papel en 90%</li>
                        <li>• Acceso inmediato a información</li>
                        <li>• Mayor seguridad documental</li>
                        <li>• Ahorro de espacio físico</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="ri-notification-line text-green-600 mr-3"></i>
                    Sistema de Notificaciones Electrónicas
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Plataforma que automatiza y agiliza el proceso de notificaciones:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Automatización</h4>
                      <p className="text-gray-700 text-sm">Envío automático según plazos establecidos</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Trazabilidad</h4>
                      <p className="text-gray-700 text-sm">Seguimiento completo del proceso</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Eficiencia</h4>
                      <p className="text-gray-700 text-sm">Reducción de tiempos en 70%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="ri-video-line text-purple-600 mr-3"></i>
                    Videoconferencia Judicial
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Tecnología que permite la celebración de actos procesales a distancia:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Declaraciones de testigos y peritos</li>
                    <li>• Vistas y comparecencias</li>
                    <li>• Coordinación entre órganos judiciales</li>
                    <li>• Reducción de desplazamientos y costes</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Nuevas Competencias */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Nuevas Competencias Profesionales
              </h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <i className="ri-computer-line text-blue-600 mr-2"></i>
                      Competencias Técnicas
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li>• Manejo avanzado de sistemas informáticos</li>
                      <li>• Gestión de bases de datos judiciales</li>
                      <li>• Conocimiento de ciberseguridad</li>
                      <li>• Dominio de herramientas de videoconferencia</li>
                      <li>• Administración de expedientes digitales</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <i className="ri-team-line text-blue-600 mr-2"></i>
                      Competencias Transversales
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li>• Adaptabilidad a nuevas tecnologías</li>
                      <li>• Capacidad de formación continua</li>
                      <li>• Resolución de problemas técnicos</li>
                      <li>• Comunicación digital efectiva</li>
                      <li>• Gestión del cambio organizacional</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Impacto en Oposiciones */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Impacto en las Oposiciones
              </h2>
              
              <div className="space-y-6">
                <div className="bg-amber-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Actualización del Temario</h3>
                  <p className="text-gray-700 mb-4">
                    Los cambios tecnológicos requieren una actualización significativa del programa:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Temas Nuevos:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Administración electrónica judicial</li>
                        <li>• Protección de datos en el ámbito judicial</li>
                        <li>• Firma y certificación digital</li>
                        <li>• Interoperabilidad de sistemas</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Temas Modificados:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Procedimientos administrativos</li>
                        <li>• Gestión documental</li>
                        <li>• Notificaciones y comunicaciones</li>
                        <li>• Archivo y custodia de expedientes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Nuevos Métodos de Evaluación</h3>
                  <p className="text-gray-700 mb-4">
                    Las pruebas de oposición incorporan elementos de evaluación digital:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Casos prácticos con herramientas informáticas</li>
                    <li>• Simulación de gestión de expedientes digitales</li>
                    <li>• Evaluación de competencias tecnológicas</li>
                    <li>• Pruebas de adaptación a nuevos sistemas</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Recomendaciones */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Recomendaciones para Opositores
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="ri-book-open-line text-blue-600 mr-2"></i>
                    Formación Teórica
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Estudiar normativa de administración electrónica</li>
                    <li>• Conocer sistemas informáticos judiciales</li>
                    <li>• Comprender protección de datos</li>
                    <li>• Dominar procedimientos digitales</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="ri-computer-line text-green-600 mr-2"></i>
                    Práctica Digital
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Familiarizarse con herramientas ofimáticas</li>
                    <li>• Practicar con simuladores judiciales</li>
                    <li>• Desarrollar habilidades informáticas</li>
                    <li>• Mantenerse actualizado tecnológicamente</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusión */}
            <section className="mb-16">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusión</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  La digitalización de la Justicia representa una oportunidad histórica para 
                  modernizar y mejorar la eficiencia del sistema judicial. Los profesionales 
                  de gestión procesal deben adaptarse a este nuevo paradigma digital.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  El éxito en las oposiciones de 2024 requiere no solo dominar el temario 
                  tradicional, sino también desarrollar competencias digitales que serán 
                  fundamentales en el ejercicio profesional futuro.
                </p>
              </div>
            </section>

            {/* Navegación */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200">
              <Link 
                to="/blog"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 mb-4 sm:mb-0"
              >
                <i className="ri-arrow-left-line"></i>
                <span>Volver al Blog</span>
              </Link>
              
              <div className="flex space-x-4">
                <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <i className="ri-share-line text-xl"></i>
                </button>
                <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
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

export default DigitalizacionJusticia2024Page;