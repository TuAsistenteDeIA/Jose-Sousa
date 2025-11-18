import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SEOHead from '../../components/seo/SEOHead';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "José Sousa - Preparador de Justicia",
    "description": "Preparación especializada para oposiciones de justicia con más de 25 años de experiencia",
    "url": import.meta.env.VITE_SITE_URL || "https://example.com",
    "logo": `${import.meta.env.VITE_SITE_URL || "https://example.com"}/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madrid",
      "addressCountry": "ES"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+34-123-456-789",
      "contactType": "customer service",
      "availableLanguage": "Spanish"
    },
    "founder": {
      "@type": "Person",
      "name": "José Sousa",
      "jobTitle": "Preparador de Oposiciones de Justicia"
    },
    "offers": [
      {
        "@type": "Course",
        "name": "Preparación Auxilio Judicial",
        "description": "Curso de preparación para oposiciones de Auxilio Judicial",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "José Sousa - Preparador de Justicia"
        }
      },
      {
        "@type": "Course",
        "name": "Preparación Tramitación Procesal",
        "description": "Curso de preparación para oposiciones de Tramitación Procesal",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "José Sousa - Preparador de Justicia"
        }
      },
      {
        "@type": "Course",
        "name": "Preparación Gestión Procesal",
        "description": "Curso de preparación para oposiciones de Gestión Procesal",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "José Sousa - Preparador de Justicia"
        }
      }
    ]
  };

  // Fallback for canonical URL
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";
  const canonicalUrl = `${siteUrl}/`;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="José Sousa - Preparador de Justicia | Oposiciones Auxilio, Tramitación y Gestión Procesal"
        description="Preparación especializada para oposiciones de justicia con José Sousa. Auxilio Judicial, Tramitación Procesal y Gestión Procesal. Más de 25 años de experiencia y 70% de éxito."
        keywords="oposiciones justicia, auxilio judicial, tramitación procesal, gestión procesal, preparador oposiciones, José Sousa"
        ogTitle="José Sousa - Preparador de Justicia | Oposiciones de Justicia"
        ogDescription="Preparación especializada para oposiciones de justicia. Más de 25 años de experiencia y 70% de éxito en Auxilio Judicial, Tramitación y Gestión Procesal."
        canonicalUrl={canonicalUrl}
        structuredData={structuredData}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://static.readdy.ai/image/51728865a55bff14b24f6409935f8cb7/90e97c4fd04fdc2ec813248e63a29f5c.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="w-full flex justify-start">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Tu éxito en las<span className="text-amber-400"> oposiciones de Justicia</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Preparación especializada con más de 25 años de experiencia. Te acompañamos hasta conseguir tu plaza en la Administración de Justicia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contacto" 
                  className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors duration-200 cursor-pointer whitespace-nowrap text-center"
                >
                  Consulta Gratuita
                </Link>
                <Link 
                  to="/oposiciones/auxilio-judicial" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 cursor-pointer whitespace-nowrap text-center"
                >
                  Ver Oposiciones
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre José Sousa */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Conoce a José Sousa
              </h2>
              <p className="text-base text-gray-600 mb-4">
                Con más de 25 años de experiencia en la preparación de oposiciones de justicia, 
                José Sousa se ha consolidado como uno de los preparadores más reconocidos y exitosos 
                del sector judicial en España.
              </p>
              <p className="text-base text-gray-600 mb-4">
                Su metodología única y personalizada ha ayudado a más de 500 opositores a conseguir 
                su plaza en el sistema judicial, manteniendo una tasa de éxito del 70%.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center bg-amber-100 rounded-full mr-3">
                    <i className="ri-check-line text-amber-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700 text-sm">25+ años de experiencia en preparación de oposiciones</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center bg-amber-100 rounded-full mr-3">
                    <i className="ri-check-line text-amber-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700 text-sm">Más de 500 alumnos aprobados en diferentes convocatorias</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center bg-amber-100 rounded-full mr-3">
                    <i className="ri-check-line text-amber-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700 text-sm">Metodología personalizada y seguimiento individual</span>
                </div>
              </div>
              <div className="mt-6">
                <Link 
                  to="/contacto"
                  className="bg-amber-600 text-white px-6 py-2 rounded-full text-base font-semibold hover:bg-amber-700 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  Conoce más sobre mi metodología
                </Link>
              </div>
            </div>
            <div className="lg:order-first">
              <div className="relative max-w-md mx-auto">
                <img 
                  src="https://static.readdy.ai/image/51728865a55bff14b24f6409935f8cb7/4a1c90acee3229c148e9c9f6651cf1f3.jpeg"
                  alt="José Sousa - Preparador de Justicia"
                  className="w-full h-80 rounded-2xl shadow-2xl object-cover object-top"
                />
                <div className="absolute -bottom-3 -right-3 bg-amber-600 text-white p-2 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold">25+</div>
                    <div className="text-xs">Años de experiencia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">25+</div>
              <div className="text-gray-600">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-600">Alumnos aprobados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">70%</div>
              <div className="text-gray-600">Tasa de éxito</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">3</div>
              <div className="text-gray-600">Especialidades</div>
            </div>
          </div>
        </div>
      </section>

      {/* Oposiciones */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Especialidades en Oposiciones de Justicia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preparación integral para las principales oposiciones del ámbito judicial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Spanish%20courthouse%20interior%20with%20professional%20administrative%20office%2C%20organized%20legal%20documents%2C%20modern%20judicial%20workspace%20in%20Spain%2C%20clean%20government%20office%20environment%20with%20Spanish%20judicial%20architecture&width=400&height=300&seq=auxilio-judicial&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                  <i className="ri-file-text-line text-2xl text-amber-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Auxilio Judicial</h3>
                <p className="text-gray-600 mb-4">
                  Acceso a puestos de apoyo administrativo en juzgados y tribunales. 
                  Funciones de atención al público y gestión documental.
                </p>
                <Link 
                  to="/oposiciones/auxilio-judicial"
                  className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 cursor-pointer"
                >
                  Más información
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Spanish%20court%20procedural%20processing%20office%20with%20legal%20case%20files%2C%20judicial%20documents%20management%2C%20modern%20Spanish%20courthouse%20administrative%20environment%20with%20organized%20workflow%20systems&width=400&height=300&seq=tramitacion-procesal&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                  <i className="ri-folder-line text-2xl text-amber-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tramitación Procesal</h3>
                <p className="text-gray-600 mb-4">
                  Gestión de expedientes y procedimientos judiciales. 
                  Tramitación de documentos y seguimiento de procesos.
                </p>
                <Link 
                  to="/oposiciones/tramitacion-procesal"
                  className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 cursor-pointer"
                >
                  Más información
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Spanish%20judicial%20management%20office%20with%20executive%20oversight%2C%20high-level%20court%20administration%20in%20Spain%2C%20professional%20judicial%20leadership%20environment%20with%20Spanish%20legal%20system%20architecture&width=400&height=300&seq=gestion-procesal&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                  <i className="ri-settings-line text-2xl text-amber-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gestión Procesal</h3>
                <p className="text-gray-600 mb-4">
                  Responsabilidades administrativas y de gestión en el ámbito judicial. 
                  Coordinación y supervisión de procesos.
                </p>
                <Link 
                  to="/oposiciones/gestion-procesal"
                  className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 cursor-pointer"
                >
                  Más información
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Metodología Probada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un sistema de preparación integral que te garantiza el máximo rendimiento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-600 rounded-full mx-auto mb-4">
                <i className="ri-book-open-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Material Actualizado</h3>
              <p className="text-gray-600">Temarios y legislación siempre al día</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-600 rounded-full mx-auto mb-4">
                <i className="ri-user-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Seguimiento Personal</h3>
              <p className="text-gray-600">Atención individualizada y personalizada</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-600 rounded-full mx-auto mb-4">
                <i className="ri-file-list-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Simulacros</h3>
              <p className="text-gray-600">Exámenes tipo con corrección detallada</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-600 rounded-full mx-auto mb-4">
                <i className="ri-calendar-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planificación</h3>
              <p className="text-gray-600">Cronograma de estudio optimizado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros alumnos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900">María González</h4>
                <p className="text-sm text-gray-600">Auxilio Judicial - 2023</p>
              </div>
              <p className="text-gray-600 italic">
                "Gracias a José conseguí mi plaza en el primer intento. Su metodología 
                y apoyo constante fueron clave para mi éxito."
              </p>
              <div className="flex text-amber-400 mt-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900">Carlos Ruiz</h4>
                <p className="text-sm text-gray-600">Tramitación Procesal - 2023</p>
              </div>
              <p className="text-gray-600 italic">
                "La preparación fue excelente. Los simulacros y el material de estudio 
                me dieron la confianza necesaria para aprobar."
              </p>
              <div className="flex text-amber-400 mt-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900">Ana Martínez</h4>
                <p className="text-sm text-gray-600">Gestión Procesal - 2024</p>
              </div>
              <p className="text-gray-600 italic">
                "Profesionalidad y dedicación excepcionales. José realmente se preocupa 
                por el éxito de sus alumnos."
              </p>
              <div className="flex text-amber-400 mt-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            ¿Listo para conseguir tu plaza?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Únete a los cientos de opositores que ya han conseguido su objetivo 
            con nuestra preparación especializada.
          </p>
          <Link 
            to="/contacto"
            className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            Solicita Información
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
