
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const TramitacionProcesalPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20Spanish%20judicial%20processing%20office%20with%20organized%20case%20files%2C%20Spanish%20legal%20documents%2C%20computer%20systems%20for%20Spanish%20case%20management%2C%20modern%20Spanish%20courthouse%20administrative%20environment%20with%20procedural%20workflow&width=1920&height=800&seq=tramitacion-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Oposiciones de
              <span className="text-amber-400"> Tramitación Procesal</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Especialízate en la gestión de expedientes judiciales. 
              Una carrera con mayor responsabilidad y mejores perspectivas salariales.
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
                ¿Qué es la Tramitación Procesal?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                El Cuerpo de Tramitación Procesal y Administrativa representa un escalón superior 
                en la carrera judicial. Los funcionarios de este cuerpo se encargan de la gestión 
                y tramitación de los procedimientos judiciales bajo la supervisión del Letrado de la Administración de Justicia.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Es una posición de mayor responsabilidad que requiere conocimientos más profundos 
                del derecho procesal y ofrece mejores condiciones laborales y salariales.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full">
                    <i className="ri-check-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Mayor Responsabilidad</h3>
                    <p className="text-gray-600 text-sm">Gestión directa de expedientes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full">
                    <i className="ri-check-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Mejor Salario</h3>
                    <p className="text-gray-600 text-sm">Retribución superior a Auxilio</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full">
                    <i className="ri-check-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Especialización</h3>
                    <p className="text-gray-600 text-sm">Conocimiento procesal avanzado</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full">
                    <i className="ri-check-line text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Promoción</h3>
                    <p className="text-gray-600 text-sm">Acceso a Gestión Procesal</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-96 bg-cover bg-center rounded-2xl" style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Advanced%20Spanish%20judicial%20processing%20workstation%20with%20multiple%20monitors%2C%20organized%20Spanish%20legal%20case%20files%2C%20procedural%20documents%2C%20professional%20Spanish%20court%20administration%20office%20with%20modern%20technology&width=600&height=400&seq=tramitacion-office&orientation=landscape')`
            }}></div>
          </div>
        </div>
      </section>

      {/* Funciones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Funciones de Tramitación Procesal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Responsabilidades especializadas en la gestión de procedimientos judiciales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-folder-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tramitación de Expedientes</h3>
              <p className="text-gray-600">
                Gestión completa de procedimientos civiles, penales y contencioso-administrativos 
                desde su inicio hasta su finalización.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-file-edit-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Elaboración de Documentos</h3>
              <p className="text-gray-600">
                Redacción de providencias, decretos, diligencias de ordenación 
                y otros documentos procesales bajo supervisión.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-calendar-check-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Control de Plazos</h3>
              <p className="text-gray-600">
                Seguimiento riguroso de plazos procesales, señalamientos 
                y cumplimiento de términos legales.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-mail-send-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Comunicaciones Judiciales</h3>
              <p className="text-gray-600">
                Gestión de citaciones, notificaciones, emplazamientos 
                y comunicaciones con otras instituciones.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-database-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Gestión de Bases de Datos</h3>
              <p className="text-gray-600">
                Mantenimiento de sistemas informáticos judiciales, 
                actualización de datos y generación de estadísticas.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-team-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Coordinación</h3>
              <p className="text-gray-600">
                Supervisión del personal de Auxilio Judicial y coordinación 
                de tareas administrativas del órgano judicial.
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
                      Título de Bachiller o Técnico Superior (Formación Profesional de Grado Superior)
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
                  <span className="font-bold text-amber-600">1.200 aprox.</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-amber-200">
                  <span className="font-medium text-gray-700">Salario inicial</span>
                  <span className="font-bold text-amber-600">22.000€ - 25.000€</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-amber-200">
                  <span className="font-medium text-gray-700">Tipo de examen</span>
                  <span className="font-bold text-amber-600">Test + Práctico + Oral</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-amber-200">
                  <span className="font-medium text-gray-700">Duración preparación</span>
                  <span className="font-bold text-amber-600">10-15 meses</span>
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
              37 temas especializados organizados en 7 bloques temáticos del derecho procesal y la administración judicial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-100 rounded-full mx-auto mb-4">
                <i className="ri-scales-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Procedimientos de Ejecución</h3>
              <p className="text-gray-600 text-sm">Ejecución civil, procesos especiales y jurisdicción voluntaria</p>
              <div className="text-amber-600 font-semibold mt-2">3 temas</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-100 rounded-full mx-auto mb-4">
                <i className="ri-shield-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Procedimientos Penales</h3>
              <p className="text-gray-600 text-sm">Ordinario, abreviado, jurado y delitos leves</p>
              <div className="text-amber-600 font-semibold mt-2">2 temas</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-100 rounded-full mx-auto mb-4">
                <i className="ri-government-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contencioso y Laboral</h3>
              <p className="text-gray-600 text-sm">Procedimientos administrativos y laborales</p>
              <div className="text-amber-600 font-semibold mt-2">2 temas</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-100 rounded-full mx-auto mb-4">
                <i className="ri-file-text-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recursos y Actos</h3>
              <p className="text-gray-600 text-sm">Recursos procesales y actos judiciales</p>
              <div className="text-amber-600 font-semibold mt-2">3 temas</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-100 rounded-full mx-auto mb-4">
                <i className="ri-mail-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comunicaciones</h3>
              <p className="text-gray-600 text-sm">Notificaciones, citaciones y cooperación judicial</p>
              <div className="text-amber-600 font-semibold mt-2">2 temas</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-100 rounded-full mx-auto mb-4">
                <i className="ri-book-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Registro y Archivos</h3>
              <p className="text-gray-600 text-sm">Registro Civil y documentación judicial</p>
              <div className="text-amber-600 font-semibold mt-2">3 temas</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center md:col-span-2 lg:col-span-3">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-100 rounded-full mx-auto mb-4">
                <i className="ri-computer-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Informática y Nuevas Tecnologías</h3>
              <p className="text-gray-600 text-sm">Sistemas operativos, ofimática y herramientas digitales</p>
              <div className="text-amber-600 font-semibold mt-2">6 temas</div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/oposiciones/tramitacion-procesal/temario"
              className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors duration-200 cursor-pointer whitespace-nowrap inline-flex items-center"
            >
              Ver Temario Completo
              <i className="ri-arrow-right-line ml-2"></i>
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
              Conoce en detalle cómo será tu proceso de evaluación para Tramitación Procesal
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
                    <li>• Funciones del cuerpo</li>
                    <li>• Propuesto por el Tribunal</li>
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
                    Informática práctica
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contenido</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Preguntas prácticas sobre Windows y Office
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Windows 10</li>
                    <li>• Microsoft 365 (escritorio)</li>
                    <li>• 20 preguntas tipo test</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Duración</h4>
                  <p className="text-amber-600 font-bold">40 minutos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-amber-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Preparación Integral para Todos los Ejercicios
            </h3>
            <p className="text-gray-600 mb-6">
              Incluimos formación específica en informática y casos prácticos, 
              además del temario teórico completo.
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

      {/* Metodología */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Metodología Especializada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preparación adaptada a la mayor complejidad de Tramitación Procesal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-600 rounded-full mx-auto mb-4">
                <i className="ri-book-open-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Temario Avanzado</h3>
              <p className="text-gray-600">Material jurídico especializado y actualizado</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-600 rounded-full mx-auto mb-4">
                <i className="ri-file-edit-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Casos Prácticos</h3>
              <p className="text-gray-600">Resolución de supuestos reales de tramitación</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-600 rounded-full mx-auto mb-4">
                <i className="ri-user-star-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tutorías Especializadas</h3>
              <p className="text-gray-600">Seguimiento personalizado intensivo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Avanza en tu Carrera Judicial
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Tramitación Procesal te ofrece mayor responsabilidad, mejor salario 
            y excelentes perspectivas de promoción en el sistema judicial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacto"
              className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Consulta Gratuita
            </Link>
            <Link 
              to="/oposiciones/gestion-procesal"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Ver Gestión Procesal
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TramitacionProcesalPage;
