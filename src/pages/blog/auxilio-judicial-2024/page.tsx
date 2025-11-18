import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import SEOHead from '../../../components/seo/SEOHead';
import { Link } from 'react-router-dom';

const AuxilioJudicial2024Page = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Oposiciones Auxilio Judicial 2024: Guía Completa y Novedades",
    "description": "Todo lo que necesitas saber sobre las oposiciones de Auxilio Judicial en 2024: convocatoria, requisitos, temario y consejos para aprobar.",
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
    "author": {
      "@type": "Person",
      "name": "José Sousa"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Oposiciones Auxilio Judicial 2024: Guía Completa | José Sousa"
        description="Guía actualizada sobre las oposiciones de Auxilio Judicial 2024. Convocatoria, requisitos, temario completo y estrategias para conseguir tu plaza."
        keywords="auxilio judicial 2024, oposiciones justicia, convocatoria auxilio judicial, temario auxilio judicial"
        canonicalUrl={`${import.meta.env.VITE_SITE_URL || "https://example.com"}/blog/auxilio-judicial-2024`}
        structuredData={structuredData}
      />
      
      <Header />
      
      {/* Hero */}
      <article className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link 
            to="/blog"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-8 cursor-pointer"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Volver al Blog
          </Link>

          <div className="mb-8">
            <span className="bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold">
              Auxilio Judicial
            </span>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Oposiciones Auxilio Judicial 2024: Guía Completa y Novedades
          </h1>

          <div className="flex items-center text-gray-600 mb-8">
            <i className="ri-calendar-line mr-2"></i>
            <span>15 de enero de 2024</span>
            <span className="mx-3">•</span>
            <i className="ri-time-line mr-2"></i>
            <span>8 min de lectura</span>
          </div>

          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20courthouse%20administrative%20office%20with%20professional%20staff%20working%20at%20reception%20desk%2C%20organized%20filing%20systems%2C%20computer%20workstations%2C%20welcoming%20and%20efficient%20judicial%20support%20environment%20with%20natural%20lighting&width=1200&height=600&seq=auxilio-blog-hero&orientation=landscape"
            alt="Oficina de Auxilio Judicial moderna"
            className="w-full h-96 object-cover rounded-2xl mb-12"
          />

          {/* Contenido */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Las oposiciones de Auxilio Judicial representan la puerta de entrada al funcionariado 
              de la Administración de Justicia. En 2024, miles de aspirantes buscarán conseguir una 
              de las plazas más accesibles y con mejores perspectivas de promoción interna del sistema judicial español.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              ¿Qué es el Auxilio Judicial?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              El Cuerpo de Auxilio Judicial es la categoría de acceso al funcionariado de la Administración 
              de Justicia. Los funcionarios de este cuerpo desempeñan funciones esenciales de apoyo administrativo 
              en juzgados y tribunales, siendo fundamentales para el correcto funcionamiento del sistema judicial.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="ri-lightbulb-line text-amber-600 mr-2"></i>
                Ventajas de ser Auxilio Judicial
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <i className="ri-check-line text-amber-600 mr-2 mt-1"></i>
                  <span>Estabilidad laboral como funcionario público</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-amber-600 mr-2 mt-1"></i>
                  <span>Posibilidad de promoción interna a Tramitación y Gestión Procesal</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-amber-600 mr-2 mt-1"></i>
                  <span>Horario estable de mañana (8:00 a 15:00)</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-amber-600 mr-2 mt-1"></i>
                  <span>Salario competitivo desde 18.000€ anuales</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-amber-600 mr-2 mt-1"></i>
                  <span>Requisitos de acceso accesibles (ESO o equivalente)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Convocatoria 2024: Datos Clave
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Aunque la convocatoria oficial aún no se ha publicado, se espera que en 2024-2025 
              se oferten aproximadamente 2.500 plazas de Auxilio Judicial en todo el territorio nacional. 
              Esta cifra responde a la necesidad de renovación generacional y al incremento de la carga 
              de trabajo en los juzgados.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Requisitos para Opositar
            </h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <i className="ri-arrow-right-s-line text-amber-600 mt-1 mr-2"></i>
                <span><strong>Nacionalidad:</strong> Española o de algún Estado miembro de la UE</span>
              </li>
              <li className="flex items-start">
                <i className="ri-arrow-right-s-line text-amber-600 mt-1 mr-2"></i>
                <span><strong>Edad:</strong> Mayor de 18 años y no exceder la edad de jubilación</span>
              </li>
              <li className="flex items-start">
                <i className="ri-arrow-right-s-line text-amber-600 mt-1 mr-2"></i>
                <span><strong>Titulación:</strong> Graduado en ESO o equivalente</span>
              </li>
              <li className="flex items-start">
                <i className="ri-arrow-right-s-line text-amber-600 mt-1 mr-2"></i>
                <span><strong>Capacidad:</strong> Funcional para el desempeño de las tareas</span>
              </li>
              <li className="flex items-start">
                <i className="ri-arrow-right-s-line text-amber-600 mt-1 mr-2"></i>
                <span><strong>Antecedentes:</strong> No haber sido separado de ninguna Administración Pública</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Estructura del Examen
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              El proceso selectivo de Auxilio Judicial consta de dos ejercicios eliminatorios:
            </p>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                <i className="ri-file-list-line text-amber-600 mr-2"></i>
                Primer Ejercicio: Test de Conocimientos
              </h4>
              <p className="text-gray-700 mb-3">
                Cuestionario tipo test de 100 preguntas con cuatro respuestas alternativas sobre el temario oficial. 
                Las respuestas incorrectas penalizan, restando un tercio del valor de una respuesta correcta.
              </p>
              <p className="text-gray-700">
                <strong>Tiempo:</strong> 90 minutos
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                <i className="ri-edit-line text-amber-600 mr-2"></i>
                Segundo Ejercicio: Supuesto Práctico
              </h4>
              <p className="text-gray-700 mb-3">
                Resolución de un supuesto práctico relacionado con las funciones propias del cuerpo, 
                que puede incluir atención al público, gestión documental o manejo de aplicaciones informáticas básicas.
              </p>
              <p className="text-gray-700">
                <strong>Tiempo:</strong> 60 minutos
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Temario Oficial: 16 Temas Fundamentales
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              El temario de Auxilio Judicial está compuesto por 16 temas organizados en 5 bloques temáticos:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">
                  A) Derecho Constitucional y Organización del Estado (5 temas)
                </h4>
                <p className="text-gray-600 text-sm">
                  Constitución española, igualdad de género, Gobierno, organización territorial y Unión Europea
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">
                  B) Organización Judicial (3 temas)
                </h4>
                <p className="text-gray-600 text-sm">
                  Poder Judicial, CGPJ, Tribunal Supremo, Audiencias y Juzgados
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">
                  C) Derechos del Ciudadano y Modernización (2 temas)
                </h4>
                <p className="text-gray-600 text-sm">
                  Carta de Derechos ante la Justicia y nuevas tecnologías judiciales
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">
                  D) Personal al Servicio de la Administración de Justicia (5 temas)
                </h4>
                <p className="text-gray-600 text-sm">
                  Cuerpos de funcionarios, derechos, deberes, régimen disciplinario y libertad sindical
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">
                  E) Procedimientos Judiciales (1 tema)
                </h4>
                <p className="text-gray-600 text-sm">
                  Ley de Enjuiciamiento Civil, juicio ordinario, verbal y procesos especiales
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8 rounded-r-lg">
              <p className="text-gray-700">
                <strong>💡 Consejo:</strong> Aunque el temario es más reducido que en otros cuerpos, 
                es fundamental dominar todos los temas con profundidad, especialmente los relacionados 
                con la organización judicial y los derechos del ciudadano.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Estrategia de Preparación
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Para aprobar las oposiciones de Auxilio Judicial en 2024, es fundamental seguir 
              una estrategia de estudio bien planificada:
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-full flex-shrink-0 mt-1">
                  <span className="text-amber-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Planificación Realista</h4>
                  <p className="text-gray-700">
                    Establece un calendario de estudio de 8-12 meses, distribuyendo los 16 temas 
                    de forma equilibrada y dejando tiempo para repasos y simulacros.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-full flex-shrink-0 mt-1">
                  <span className="text-amber-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Material Actualizado</h4>
                  <p className="text-gray-700">
                    Utiliza temarios actualizados a 2024, especialmente en temas de igualdad de género, 
                    nuevas tecnologías y organización judicial.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-full flex-shrink-0 mt-1">
                  <span className="text-amber-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Test Continuos</h4>
                  <p className="text-gray-700">
                    Realiza test de forma regular desde el principio. La práctica constante 
                    es clave para familiarizarte con el formato del examen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-full flex-shrink-0 mt-1">
                  <span className="text-amber-600 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Práctica de Supuestos</h4>
                  <p className="text-gray-700">
                    Dedica tiempo específico a practicar supuestos prácticos relacionados 
                    con atención al público y gestión documental.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-full flex-shrink-0 mt-1">
                  <span className="text-amber-600 font-bold">5</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Apoyo Profesional</h4>
                  <p className="text-gray-700">
                    Contar con un preparador experimentado puede marcar la diferencia, 
                    especialmente en la resolución de dudas y la motivación constante.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Funciones del Auxilio Judicial
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Como funcionario de Auxilio Judicial, tus principales responsabilidades incluirán:
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <i className="ri-check-double-line text-amber-600 mt-1 mr-2"></i>
                <span>Atención e información al público sobre trámites y procedimientos</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-double-line text-amber-600 mt-1 mr-2"></i>
                <span>Recepción, registro y archivo de documentos judiciales</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-double-line text-amber-600 mt-1 mr-2"></i>
                <span>Gestión de correspondencia y comunicaciones telefónicas</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-double-line text-amber-600 mt-1 mr-2"></i>
                <span>Apoyo en el manejo de aplicaciones informáticas judiciales</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-double-line text-amber-600 mt-1 mr-2"></i>
                <span>Colaboración en la organización de la agenda judicial</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-double-line text-amber-600 mt-1 mr-2"></i>
                <span>Custodia y mantenimiento del archivo del juzgado</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Conclusión
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Las oposiciones de Auxilio Judicial 2024 representan una excelente oportunidad 
              para acceder a un empleo público estable con buenas condiciones laborales y 
              posibilidades de promoción. Con una preparación adecuada, constancia y el apoyo 
              necesario, conseguir tu plaza es un objetivo totalmente alcanzable.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              El momento de empezar es ahora. Cuanto antes comiences tu preparación, 
              más sólida será tu base de conocimientos y mayor tu confianza el día del examen.
            </p>

            <div className="bg-amber-600 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                ¿Listo para Comenzar tu Preparación?
              </h3>
              <p className="mb-6 text-amber-100">
                Solicita una consulta gratuita y descubre cómo podemos ayudarte 
                a conseguir tu plaza de Auxilio Judicial
              </p>
              <Link 
                to="/contacto"
                className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-pointer whitespace-nowrap inline-block"
              >
                Consulta Gratuita
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default AuxilioJudicial2024Page;