
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const GestionProcesalPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Executive%20Spanish%20judicial%20management%20office%20with%20leadership%20desk%2C%20strategic%20planning%20documents%2C%20high-level%20administrative%20oversight%20in%20Spanish%20courthouse%2C%20modern%20Spanish%20court%20management%20environment%20with%20professional%20authority&width=1920&height=800&seq=gestion-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Oposiciones de
              <span className="text-amber-400"> Gestión Procesal</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              El nivel más alto en la carrera administrativa judicial. 
              Lidera equipos y gestiona la administración de justicia con máxima responsabilidad.
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
                ¿Qué es la Gestión Procesal?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                El Cuerpo de Gestión Procesal y Administrativa representa la cúspide de la carrera 
                administrativa en el ámbito judicial. Los funcionarios de este cuerpo ejercen funciones 
                de gestión, coordinación y supervisión de las unidades administrativas de los órganos judiciales.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Es el puesto de mayor responsabilidad administrativa en el sistema judicial, 
                con funciones de liderazgo, gestión de equipos y toma de decisiones estratégicas 
                que requieren una formación jurídica superior.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full">
                    <i className="ri-check-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Máxima Responsabilidad</h3>
                    <p className="text-gray-600 text-sm">Gestión y liderazgo de equipos</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full">
                    <i className="ri-check-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Mejor Retribución</h3>
                    <p className="text-gray-600 text-sm">Salario más alto del escalafón</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full">
                    <i className="ri-check-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Prestigio Profesional</h3>
                    <p className="text-gray-600 text-sm">Reconocimiento y autoridad</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full">
                    <i className="ri-check-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Desarrollo Profesional</h3>
                    <p className="text-gray-600 text-sm">Máximo nivel de especialización</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-96 bg-cover bg-center rounded-2xl" style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=High-level%20Spanish%20judicial%20management%20office%20with%20executive%20desk%2C%20strategic%20planning%20materials%20for%20Spanish%20courts%2C%20leadership%20environment%20in%20modern%20Spanish%20courthouse%20administration%20with%20authority%20and%20professional%20responsibility&width=600&height=400&seq=gestion-office&orientation=landscape')`
            }}></div>
          </div>
        </div>
      </section>

      {/* Funciones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Funciones de Gestión Procesal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Responsabilidades de alto nivel en la administración y gestión judicial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-team-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Gestión de Equipos</h3>
              <p className="text-gray-600">
                Dirección y coordinación del personal de Tramitación y Auxilio Judicial, 
                distribución de cargas de trabajo y supervisión del rendimiento.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-line-chart-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Planificación Estratégica</h3>
              <p className="text-gray-600">
                Desarrollo de planes de trabajo, optimización de procesos administrativos 
                y mejora continua de la eficiencia judicial.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-file-shield-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Control de Calidad</h3>
              <p className="text-gray-600">
                Supervisión de la correcta tramitación de procedimientos, 
                control de plazos y garantía de calidad en los procesos.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-bar-chart-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Análisis Estadístico</h3>
              <p className="text-gray-600">
                Elaboración de informes estadísticos, análisis de rendimiento 
                y propuestas de mejora para la gestión judicial.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-links-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Coordinación Institucional</h3>
              <p className="text-gray-600">
                Relación con otros órganos judiciales, instituciones públicas 
                y organismos relacionados con la administración de justicia.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-settings-3-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Gestión de Recursos</h3>
              <p className="text-gray-600">
                Administración de recursos materiales y humanos, 
                gestión presupuestaria y optimización de medios disponibles.
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
                      Título universitario de Grado o equivalente (Diplomatura, Licenciatura)
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
                  <span className="font-bold text-amber-600">800 aprox.</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-amber-200">
                  <span className="font-medium text-gray-700">Salario inicial</span>
                  <span className="font-bold text-amber-600">28.000€ - 32.000€</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-amber-200">
                  <span className="font-medium text-gray-700">Tipo de examen</span>
                  <span className="font-bold text-amber-600">Test + Práctico</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-amber-200">
                  <span className="font-medium text-gray-700">Duración preparación</span>
                  <span className="font-bold text-amber-600">12-18 meses</span>
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

      {/* Temario Oficial Completo */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Temario Oficial Completo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              68 temas organizados en 7 bloques fundamentales del derecho y la administración judicial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-government-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Derecho Constitucional</h3>
              <p className="text-gray-600 mb-4">
                16 temas sobre la Constitución, organización del Estado, 
                Administración Pública y régimen jurídico.
              </p>
              <div className="text-sm text-amber-600 font-medium">Temas 1-16</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-scales-3-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Organización Judicial</h3>
              <p className="text-gray-600 mb-4">
                10 temas sobre la estructura del Poder Judicial, 
                órganos jurisdiccionales y personal de justicia.
              </p>
              <div className="text-sm text-amber-600 font-medium">Temas 17-26</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-file-text-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Derecho Procesal Civil</h3>
              <p className="text-gray-600 mb-4">
                13 temas sobre procedimientos civiles, recursos, 
                ejecución y medidas cautelares.
              </p>
              <div className="text-sm text-amber-600 font-medium">Temas 27-39</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-book-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Registro Civil</h3>
              <p className="text-gray-600 mb-4">
                3 temas sobre la organización, funcionamiento 
                y procedimientos del Registro Civil.
              </p>
              <div className="text-sm text-amber-600 font-medium">Temas 40-42</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-shield-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Derecho Procesal Penal</h3>
              <p className="text-gray-600 mb-4">
                14 temas sobre procedimientos penales, recursos, 
                ejecución y jurisdicción de menores.
              </p>
              <div className="text-sm text-amber-600 font-medium">Temas 43-56</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-briefcase-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Contencioso y Laboral</h3>
              <p className="text-gray-600 mb-4">
                11 temas sobre procedimientos contencioso-administrativos 
                y laborales.
              </p>
              <div className="text-sm text-amber-600 font-medium">Temas 57-67</div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/oposiciones/gestion-procesal/temario"
              className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors duration-200 cursor-pointer whitespace-nowrap inline-flex items-center space-x-2"
            >
              <span>Ver Temario Completo</span>
              <i className="ri-arrow-right-line"></i>
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
              Conoce en detalle cómo será tu proceso de evaluación para Gestión Procesal
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                    De carácter teórico, escrito y eliminatorio
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contenido</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Cuestionario-test sobre las materias del programa
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
                    De carácter práctico, escrito y eliminatorio
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contenido</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    10 preguntas tipo-test sobre caso práctico
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Relacionado con el programa</li>
                    <li>• Funciones propias del cuerpo</li>
                    <li>• Planteado por el Tribunal</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Duración</h4>
                  <p className="text-amber-600 font-bold">30 minutos</p>
                </div>
              </div>
            </div>

            {/* Tercer Ejercicio */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-amber-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-lg mr-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900">Tercer Ejercicio</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Características</h4>
                  <p className="text-gray-600 text-sm">
                    De carácter teórico, escrito y eliminatorio
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contenido</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    5 preguntas de contenido procesal
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Sin ayuda de texto alguno</li>
                    <li>• Con letra legible</li>
                    <li>• Temas 17-39 y 43-67</li>
                    <li>• Limitación de espacio</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Duración</h4>
                  <p className="text-amber-600 font-bold">45 minutos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-amber-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Preparación Específica para Cada Ejercicio
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestra metodología incluye entrenamiento específico para cada tipo de prueba, 
              con simulacros reales y técnicas de optimización del tiempo.
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

      {/* Metodología Avanzada */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Metodología de Élite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preparación de máximo nivel para la oposición más exigente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-600 rounded-full mx-auto mb-4">
                <i className="ri-trophy-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Preparación Integral</h3>
              <p className="text-gray-600">Temario completo con máxima profundidad jurídica</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-600 rounded-full mx-auto mb-4">
                <i className="ri-user-star-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mentoring Personalizado</h3>
              <p className="text-gray-600">Seguimiento individual intensivo y especializado</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-600 rounded-full mx-auto mb-4">
                <i className="ri-line-chart-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Análisis de Rendimiento</h3>
              <p className="text-gray-600">Evaluación continua y mejora constante</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Alcanza la Cúspide de tu Carrera
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Gestión Procesal representa el máximo nivel de responsabilidad y reconocimiento 
            en la administración de justicia. ¿Estás preparado para el desafío?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacto"
              className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Consulta Especializada
            </Link>
            <Link 
              to="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Recursos Avanzados
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GestionProcesalPage;
