
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import SEOHead from '../../../../components/seo/SEOHead';
import { Link } from 'react-router-dom';

const TemarioGestionProcesalPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Temario Completo Gestión Procesal",
    "description": "Temario oficial completo para oposiciones de Gestión Procesal y Administrativa - 68 temas",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "José Sousa - Preparador de Justicia"
    }
  };

  const temasSecciones = [
    {
      titulo: "A) Derecho Constitucional y Administrativo",
      temas: [
        { numero: 1, titulo: "La Constitución Española de 1978: Características. Los principios constitucionales y los valores superiores. Derechos y deberes fundamentales. Su garantía y suspensión." },
        { numero: 2, titulo: "El Tribunal Constitucional. La reforma de la Constitución. La Corona. Funciones constitucionales del Rey. Sucesión y Regencia." },
        { numero: 3, titulo: "Las Cortes Generales: Composición, atribuciones y funcionamiento del Congreso de los Diputados y Senado. El Defensor del Pueblo." },
        { numero: 4, titulo: "El Poder Judicial. Principios constitucionales. El Consejo General del Poder Judicial: composición y competencias. El Ministerio Fiscal." },
        { numero: 5, titulo: "El Gobierno y la Administración. El Presidente del Gobierno. El Consejo de Ministros. Designación, causas de cese y responsabilidad del Gobierno." },
        { numero: 6, titulo: "La Administración Pública: Principios constitucionales. La Administración General del Estado. Las Comunidades Autónomas. La Administración Local." },
        { numero: 7, titulo: "La Ley. Concepto y caracteres. Clases de Leyes. Disposiciones del Ejecutivo con fuerza de Ley. El Reglamento." },
        { numero: 8, titulo: "Los órganos de la Administración General del Estado. Órganos centrales y territoriales. Principios de organización, funcionamiento y relaciones." },
        { numero: 9, titulo: "Políticas de Igualdad de Género. La Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres." },
        { numero: 10, titulo: "El personal al servicio de la Administración Pública. Régimen jurídico. Programación de efectivos. Oferta de empleo público." },
        { numero: 11, titulo: "El contrato de trabajo en la Administración Pública. Derechos y deberes del personal al servicio de la Administración Pública." },
        { numero: 12, titulo: "El procedimiento administrativo común. Principios generales. Fases del procedimiento. Derechos de los interesados en el procedimiento." },
        { numero: 13, titulo: "Los recursos administrativos. Principios generales. Clases. Órganos competentes. Materias recurribles." },
        { numero: 14, titulo: "La responsabilidad de la Administración. Principios. Procedimiento. La responsabilidad de las autoridades y personal al servicio de la Administración." },
        { numero: 15, titulo: "Los contratos del sector público. Ámbito subjetivo de aplicación. Contratos sujetos a regulación armonizada. Órganos de contratación." },
        { numero: 16, titulo: "Régimen jurídico del sector público. Principios de actuación y funcionamiento. Competencia. Órganos de las Administraciones Públicas." }
      ]
    },
    {
      titulo: "B) Organización del Poder Judicial",
      temas: [
        { numero: 17, titulo: "La Ley Orgánica del Poder Judicial. El gobierno del Poder Judicial. El Consejo General del Poder Judicial." },
        { numero: 18, titulo: "La demarcación judicial. Órganos jurisdiccionales. Planta y organización territorial." },
        { numero: 19, titulo: "Los Juzgados de Paz. Los Juzgados de Primera Instancia e Instrucción. Los Juzgados de lo Mercantil." },
        { numero: 20, titulo: "Los Juzgados de Violencia sobre la Mujer. Los Juzgados de lo Penal. Los Juzgados de Vigilancia Penitenciaria." },
        { numero: 21, titulo: "Los Juzgados de Menores. Los Juzgados de lo Social. Los Juzgados Centrales." },
        { numero: 22, titulo: "Las Audiencias Provinciales. La Audiencia Nacional. Los Tribunales Superiores de Justicia." },
        { numero: 23, titulo: "El Tribunal Supremo. El Ministerio Fiscal: Principios de actuación. El Fiscal General del Estado." },
        { numero: 24, titulo: "Los Letrados de la Administración de Justicia. Competencias. Los Médicos Forenses. Otros profesionales al servicio de la Administración de Justicia." },
        { numero: 25, titulo: "Personal funcionario al servicio de la Administración de Justicia. Cuerpos de funcionarios. Provisión de puestos de trabajo." },
        { numero: 26, titulo: "Organización y competencias de las oficinas judiciales. Unidades procesales de apoyo directo. Servicio común procesal." }
      ]
    },
    {
      titulo: "C) Derecho Procesal Civil",
      temas: [
        { numero: 27, titulo: "La Ley de Enjuiciamiento Civil: Estructura y ámbito de aplicación. Principios del proceso civil." },
        { numero: 28, titulo: "La jurisdicción civil. Competencia objetiva, territorial y funcional. Las partes en el proceso civil." },
        { numero: 29, titulo: "El proceso declarativo ordinario. La demanda. Contestación a la demanda. La audiencia previa al juicio." },
        { numero: 30, titulo: "Los procesos matrimoniales y sus clases. Competencia. Procedimientos: nulidad, separación y divorcio." },
        { numero: 31, titulo: "Procedimientos de jurisdicción voluntaria: la Ley 15/2015. Disposiciones generales y normas comunes." },
        { numero: 32, titulo: "Los recursos. Concepto. Clases de recursos. El recurso de apelación. La prueba en la apelación." },
        { numero: 33, titulo: "El recurso de casación. Características. Resoluciones recurribles. Motivos de recurso." },
        { numero: 34, titulo: "La ejecución forzosa. El título ejecutivo y sus clases. La demanda ejecutiva. Oposición a la ejecución." },
        { numero: 35, titulo: "Ejecución dineraria. Supuestos en que procede. Requerimiento de pago. Embargo de bienes." },
        { numero: 36, titulo: "El procedimiento de apremio. Valoración de los bienes embargados. La subasta de los bienes trabados." },
        { numero: 37, titulo: "Ejecuciones no dinerarias. Ejecuciones de dar, de hacer y de no hacer. Ejecución de desahucios." },
        { numero: 38, titulo: "Las medidas cautelares: Concepto. Tipos de medidas cautelares. Tramitación y oposición." },
        { numero: 39, titulo: "Costas y gastos procesales. La condena en costas. La tasación de costas. La Asistencia Jurídica Gratuita." }
      ]
    },
    {
      titulo: "D) Registro Civil",
      temas: [
        { numero: 40, titulo: "El Registro Civil: legislación vigente. Naturaleza, contenido y competencias. Estructura del Registro Civil." },
        { numero: 41, titulo: "Los asientos registrales y sus clases. Hechos y actos inscribibles en el Registro Civil." },
        { numero: 42, titulo: "Publicidad del Registro Civil. Las certificaciones y sus clases. Rectificación de los asientos." }
      ]
    },
    {
      titulo: "E) Procedimiento Penal",
      temas: [
        { numero: 43, titulo: "El sistema procesal penal de la Ley de Enjuiciamiento Criminal. Principios del proceso penal." },
        { numero: 44, titulo: "Las partes en el proceso penal: Ministerio Fiscal, acusador particular, acusador privado." },
        { numero: 45, titulo: "El Sumario: Incoación del proceso. Las actuaciones de la Policía Judicial. Comprobación del delito." },
        { numero: 46, titulo: "Las medidas cautelares personales en el proceso penal. La detención. La prisión provisional." },
        { numero: 47, titulo: "El período intermedio; auto de conclusión del sumario. El sobreseimiento y sus clases." },
        { numero: 48, titulo: "La prueba en el proceso penal. Medios de prueba. El juicio oral. La suspensión del juicio oral." },
        { numero: 49, titulo: "El procedimiento abreviado: Información de derechos, prueba anticipada. La fase de juicio oral." },
        { numero: 50, titulo: "Procedimiento para el enjuiciamiento rápido de determinados delitos. Ámbito de aplicación." },
        { numero: 51, titulo: "El proceso ante el Tribunal del Jurado. Competencia. Composición y constitución del Jurado." },
        { numero: 52, titulo: "La tutela judicial ante los Juzgados de violencia sobre la mujer. Especialidades procesales." },
        { numero: 53, titulo: "El procedimiento de Responsabilidad Penal del Menor. Principios reguladores." },
        { numero: 54, titulo: "Tramitación del juicio sobre delitos leves. Convocatoria de la vista de juicio." },
        { numero: 55, titulo: "Régimen general de recursos en el proceso penal. Los recursos no devolutivos y devolutivos." },
        { numero: 56, titulo: "La ejecución de sentencias penales. Los Juzgados de Vigilancia Penitenciaria." }
      ]
    },
    {
      titulo: "F) Procedimiento Contencioso-Administrativo y Laboral",
      temas: [
        { numero: 57, titulo: "Breve referencia del recurso contencioso-administrativo. Organización de la jurisdicción." },
        { numero: 58, titulo: "Recurso contencioso-administrativo: Capacidad procesal, legitimación, representación y defensa." },
        { numero: 59, titulo: "Recurso contencioso-administrativo: Diligencias preliminares. Interposición del recurso." },
        { numero: 60, titulo: "Recurso contencioso-administrativo: Demanda y contestación. Alegaciones previas. Prueba." },
        { numero: 61, titulo: "El procedimiento abreviado en el ámbito contencioso-administrativo." },
        { numero: 62, titulo: "Los recursos en el proceso contencioso administrativo." },
        { numero: 63, titulo: "Procedimientos especiales: Protección de derechos fundamentales. Cuestión de ilegalidad." },
        { numero: 64, titulo: "Disposiciones comunes a los procedimientos contencioso-administrativos: Plazos. Medidas cautelares." },
        { numero: 65, titulo: "El proceso laboral: Principios que lo informan. Competencia objetiva y territorial." },
        { numero: 66, titulo: "La evitación del proceso: Conciliación previa. El proceso ordinario: Demanda, conciliación y juicio." },
        { numero: 67, titulo: "Procesos especiales: Despidos, Seguridad Social, Conflictos Colectivos." }
      ]
    },
    {
      titulo: "G) Normativa sobre Derecho Mercantil",
      temas: [
        { numero: 68, titulo: "El Concurso de acreedores. Concepto de concurso sus clases. El administrador concursal." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Temario Completo Gestión Procesal | 68 Temas Oficiales | José Sousa"
        description="Temario oficial completo para oposiciones de Gestión Procesal y Administrativa. 68 temas organizados por materias: Derecho Constitucional, Procesal Civil, Penal, Contencioso y más."
        keywords="temario gestión procesal, oposiciones justicia, 68 temas gestión procesal, programa oficial gestión procesal"
        canonicalUrl={`${import.meta.env.VITE_SITE_URL || "https://example.com"}/oposiciones/gestion-procesal/temario`}
        structuredData={structuredData}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <div className="mb-6">
              <Link 
                to="/oposiciones/gestion-procesal"
                className="inline-flex items-center text-amber-100 hover:text-white transition-colors duration-200"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                Volver a Gestión Procesal
              </Link>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Temario Completo
              <span className="block text-amber-200">Gestión Procesal</span>
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              Programa oficial completo de 68 temas para las oposiciones de Gestión Procesal y Administrativa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                Solicita Preparación
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Información del Temario */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-amber-600 mb-2">68</div>
              <div className="text-gray-600">Temas Totales</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-amber-600 mb-2">7</div>
              <div className="text-gray-600">Bloques Temáticos</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-amber-600 mb-2">12-18</div>
              <div className="text-gray-600">Meses Preparación</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
              <div className="text-gray-600">Actualizado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Temario por Secciones */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Programa Oficial Completo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temario estructurado en 7 bloques fundamentales del derecho y la administración judicial
            </p>
          </div>

          <div className="space-y-12">
            {temasSecciones.map((seccion, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-amber-600 text-white p-6">
                  <h3 className="text-2xl font-bold">{seccion.titulo}</h3>
                  <p className="text-amber-100 mt-2">{seccion.temas.length} temas</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-4">
                    {seccion.temas.map((tema) => (
                      <div key={tema.numero} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-full flex-shrink-0">
                          <span className="text-amber-600 font-bold">{tema.numero}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            Tema {tema.numero}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {tema.titulo}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología de Estudio */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cómo Abordar este Temario
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estrategias específicas para dominar los 68 temas de Gestión Procesal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-calendar-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Planificación Temporal</h3>
              <p className="text-gray-600">
                Distribución estratégica de los 68 temas en 12-18 meses, 
                priorizando materias con mayor peso en el examen.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-book-open-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Estudio Progresivo</h3>
              <p className="text-gray-600">
                Metodología de estudio por bloques temáticos, 
                consolidando conocimientos antes de avanzar.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-refresh-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Repaso Continuo</h3>
              <p className="text-gray-600">
                Sistema de repasos programados para mantener 
                frescos todos los temas hasta el día del examen.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-file-list-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Casos Prácticos</h3>
              <p className="text-gray-600">
                Aplicación práctica de la teoría mediante 
                casos reales de gestión procesal y administrativa.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-question-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Test y Simulacros</h3>
              <p className="text-gray-600">
                Evaluación continua mediante test específicos 
                de cada tema y simulacros de examen completo.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-presentation-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Preparación Oral</h3>
              <p className="text-gray-600">
                Técnicas específicas para la defensa oral 
                de temas ante el tribunal evaluador.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Domina los 68 Temas con Garantías
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Preparación integral y personalizada para superar el temario más exigente 
            de las oposiciones de justicia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacto"
              className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Consulta Personalizada
            </Link>
            <Link 
              to="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Recursos de Estudio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TemarioGestionProcesalPage;
