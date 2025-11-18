import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import SEOHead from '../../../components/seo/SEOHead';
import { Link } from 'react-router-dom';

const AuxilioJudicialPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Preparación Oposiciones Auxilio Judicial",
    "description": "Curso especializado para la preparación de oposiciones de Auxilio Judicial con José Sousa. Metodología probada y seguimiento personalizado.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "José Sousa - Preparador de Justicia",
      "url": import.meta.env.VITE_SITE_URL || "https://example.com"
    },
    "courseMode": ["online", "onsite"],
    "educationalLevel": "Professional",
    "teaches": [
      "Derecho Constitucional",
      "Organización del Poder Judicial",
      "Ley de Enjuiciamiento Civil",
      "Ley de Enjuiciamiento Criminal",
      "Atención al ciudadano",
      "Nuevas tecnologías"
    ],
    "occupationalCategory": "Auxilio Judicial",
    "timeRequired": "P8M",
    "offers": {
      "@type": "Offer",
      "category": "Educational"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Oposiciones Auxilio Judicial | Preparación Especializada con José Sousa"
        description="Preparación especializada para oposiciones de Auxilio Judicial. Metodología probada, seguimiento personalizado y 95% de éxito. Consulta gratuita disponible."
        keywords="oposiciones auxilio judicial, preparación auxilio judicial, José Sousa, funcionario justicia, examen auxilio judicial"
        ogTitle="Oposiciones Auxilio Judicial | Preparación Especializada"
        ogDescription="Preparación especializada para oposiciones de Auxilio Judicial con metodología probada y 95% de éxito."
        canonicalUrl={`${import.meta.env.VITE_SITE_URL || "https://example.com"}/oposiciones/auxilio-judicial`}
        structuredData={structuredData}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20Spanish%20courthouse%20reception%20area%20with%20modern%20administrative%20desk%2C%20organized%20filing%20systems%2C%20computer%20workstation%20for%20Spanish%20judicial%20support%20staff%2C%20clean%20and%20efficient%20Spanish%20government%20office%20environment&width=1920&height=800&seq=auxilio-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Oposiciones de
              <span className="text-amber-400"> Auxilio Judicial</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Tu puerta de entrada al sistema judicial. Preparación especializada 
              para conseguir tu plaza como funcionario de apoyo administrativo.
            </p>
            <Link 
              to="/contacto"
              className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Solicita Información
            </Link>
          </div>
        </div>
      </section>

      {/* Información General */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                ¿Qué es el Auxilio Judicial?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                El Cuerpo de Auxilio Judicial es la categoría de acceso al funcionariado de la 
                Administración de Justicia. Los funcionarios de este cuerpo desempeñan funciones 
                de apoyo y colaboración en la tramitación de los asuntos judiciales.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Es una excelente oportunidad para comenzar una carrera estable en el ámbito judicial, 
                con posibilidades de promoción interna hacia categorías superiores.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full">
                    <i className="ri-check-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Estabilidad Laboral</h3>
                    <p className="text-gray-600 text-sm">Funcionario público con plaza fija</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full">
                    <i className="ri-check-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Promoción Interna</h3>
                    <p className="text-gray-600 text-sm">Acceso a categorías superiores</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full">
                    <i className="ri-check-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Horario Estable</h3>
                    <p className="text-gray-600 text-sm">Jornada de mañana establecida</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full">
                    <i className="ri-check-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Buen Salario</h3>
                    <p className="text-gray-600 text-sm">Retribución competitiva y segura</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-96 bg-cover bg-center rounded-2xl" style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20Spanish%20courthouse%20administrative%20office%20with%20professional%20staff%20working%20at%20organized%20desks%2C%20filing%20systems%2C%20computer%20workstations%20in%20Spanish%20judicial%20support%20environment&width=600&height=400&seq=auxilio-office&orientation=landscape')`
            }}></div>
          </div>
        </div>
      </section>

      {/* Funciones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Funciones del Auxilio Judicial
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce las responsabilidades que tendrás como funcionario de Auxilio Judicial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-customer-service-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Atención al Público</h3>
              <p className="text-gray-600">
                Información y orientación a ciudadanos, abogados y procuradores sobre 
                trámites y procedimientos judiciales.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-file-text-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Gestión Documental</h3>
              <p className="text-gray-600">
                Recepción, registro y archivo de documentos judiciales, 
                mantenimiento del archivo y custodia de expedientes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-phone-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Comunicaciones</h3>
              <p className="text-gray-600">
                Atención telefónica, gestión de correspondencia y 
                comunicación con otras instituciones judiciales.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-computer-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Apoyo Informático</h3>
              <p className="text-gray-600">
                Manejo de aplicaciones judiciales, digitalización de documentos 
                y soporte en sistemas informáticos del juzgado.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-calendar-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Gestión de Agenda</h3>
              <p className="text-gray-600">
                Programación de señalamientos, control de plazos procesales 
                y organización de la agenda judicial.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-shield-check-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Apoyo Procesal</h3>
              <p className="text-gray-600">
                Colaboración en la tramitación de procedimientos, 
                preparación de expedientes y apoyo en diligencias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Requisitos para Opositar
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full mt-1">
                    <i className="ri-user-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Nacionalidad</h3>
                    <p className="text-gray-600">
                      Ser español o nacional de algún Estado miembro de la Unión Europea
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full mt-1">
                    <i className="ri-calendar-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Edad</h3>
                    <p className="text-gray-600">
                      Tener cumplidos 18 años y no exceder la edad de jubilación forzosa
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full mt-1">
                    <i className="ri-graduation-cap-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Titulación</h3>
                    <p className="text-gray-600">
                      Título de Graduado en Educación Secundaria Obligatoria o equivalente
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full mt-1">
                    <i className="ri-shield-check-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Antecedentes</h3>
                    <p className="text-gray-600">
                      No haber sido separado del servicio de cualquier Administración Pública
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full mt-1">
                    <i className="ri-heart-pulse-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Capacidad</h3>
                    <p className="text-gray-600">
                      Poseer la capacidad funcional para el desempeño de las tareas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Datos de la Convocatoria
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-amber-200">
                  <span className="font-medium text-gray-700">Plazas convocadas</span>
                  <span className="font-bold text-amber-600">2.500 aprox.</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-amber-200">
                  <span className="font-medium text-gray-700">Salario inicial</span>
                  <span className="font-bold text-amber-600">18.000€ - 20.000€</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-amber-200">
                  <span className="font-medium text-gray-700">Tipo de examen</span>
                  <span className="font-bold text-amber-600">Test + Práctico</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-amber-200">
                  <span className="font-medium text-gray-700">Duración preparación</span>
                  <span className="font-bold text-amber-600">8-12 meses</span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-700">Próxima convocatoria</span>
                  <span className="font-bold text-amber-600">2024-2025</span>
                </div>
              </div>

              <div className="mt-8">
                <Link 
                  to="/contacto"
                  className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 cursor-pointer whitespace-nowrap text-center block"
                >
                  Solicita Información Detallada
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temario */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Temario Oficial</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              26 temas fundamentales organizados en 5 bloques temáticos esenciales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-government-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Derecho Constitucional y Organización del Estado
              </h3>
              <p className="text-gray-600 mb-4">
                Constitución española, igualdad de género, Gobierno, Administración, 
                organización territorial y Unión Europea.
              </p>
              <div className="text-amber-600 font-semibold">5 temas</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-scales-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Organización Judicial
              </h3>
              <p className="text-gray-600 mb-4">
                Poder Judicial, CGPJ, Tribunal Supremo, Audiencias, 
                Juzgados y competencias de cada órgano judicial.
              </p>
              <div className="text-amber-600 font-semibold">3 temas</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-shield-user-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Derechos del Ciudadano y Modernización
              </h3>
              <p className="text-gray-600 mb-4">
                Carta de Derechos ante la Justicia, justicia gratuita, 
                nuevas tecnologías y expediente digital.
              </p>
              <div className="text-amber-600 font-semibold">2 temas</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-team-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Personal al Servicio de la Administración de Justicia
              </h3>
              <p className="text-gray-600 mb-4">
                Cuerpos de funcionarios, Letrados de la Administración de Justicia, 
                derechos, deberes, régimen disciplinario y libertad sindical.
              </p>
              <div className="text-amber-600 font-semibold">5 temas</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-file-list-3-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Procedimientos Judiciales
              </h3>
              <p className="text-gray-600 mb-4">
                Ley de Enjuiciamiento Civil, juicio ordinario, juicio verbal, 
                procesos matrimoniales, monitorio y jurisdicción voluntaria.
              </p>
              <div className="text-amber-600 font-semibold">1 tema</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 border-2 border-amber-200">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-600 rounded-lg mb-4">
                <i className="ri-book-open-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Ver Temario Completo
              </h3>
              <p className="text-gray-600 mb-4">
                Accede al programa oficial detallado con todos los temas 
                y contenidos específicos de cada bloque.
              </p>
              <Link 
                to="/oposiciones/auxilio-judicial/temario"
                className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 cursor-pointer"
              >
                Ver todos los temas
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/oposiciones/auxilio-judicial/temario"
              className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors duration-200 cursor-pointer whitespace-nowrap inline-block"
            >
              Consultar Temario Completo
            </Link>
          </div>
        </div>
      </section>

      {/* El Día del Examen */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              El Día del Examen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce en detalle cómo será tu proceso de evaluación para Auxilio Judicial
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Primer Ejercicio */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-amber-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-lg mr-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900">Primer Ejercicio</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Características</h4>
                  <p className="text-gray-600 text-sm">
                    De carácter teórico, escrito, obligatorio y eliminatorio
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contenido</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Cuestionario-test sobre el programa oficial
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 100 preguntas</li>
                    <li>• 4 respuestas alternativas</li>
                    <li>• Solo una correcta</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Duración</h4>
                  <p className="text-amber-600 font-bold">100 minutos</p>
                </div>
              </div>
            </div>

            {/* Segundo Ejercicio */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-amber-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-lg mr-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900">Segundo Ejercicio</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Características</h4>
                  <p className="text-gray-600 text-sm">
                    De carácter práctico, escrito, obligatorio y eliminatorio
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contenido</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Cuestionario-test sobre casos prácticos
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 40 preguntas</li>
                    <li>• 4 respuestas alternativas</li>
                    <li>• 2 casos prácticos de diligencia judicial</li>
                    <li>• Propuestos por el Tribunal</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Duración</h4>
                  <p className="text-amber-600 font-bold">60 minutos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-amber-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Preparación Específica para Cada Ejercicio
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestra metodología incluye entrenamiento específico para casos prácticos 
              y técnicas de optimización del tiempo en exámenes tipo test.
            </p>
            <Link 
              to="/contacto"
              className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Consulta Nuestra Preparación
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Comienza tu Preparación Hoy
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Con nuestra metodología probada y seguimiento personalizado, 
            estarás más cerca de conseguir tu plaza en Auxilio Judicial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacto"
              className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Consulta Gratuita
            </Link>
            <Link 
              to="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Ver Recursos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AuxilioJudicialPage;
