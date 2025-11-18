
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import SEOHead from '../../../../components/seo/SEOHead';
import { Link } from 'react-router-dom';

const TemarioAuxilioJudicialPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Temario Completo Auxilio Judicial",
    "description": "Temario oficial completo para oposiciones de Auxilio Judicial - 26 temas fundamentales",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "José Sousa - Preparador de Justicia"
    }
  };

  const temasSecciones = [
    {
      titulo: "A) Derecho Constitucional y Organización del Estado",
      temas: [
        { numero: 1, titulo: "La Constitución española de 1978: Estructura y contenido. Las atribuciones de la Corona. Las Cortes Generales: Composición, atribuciones y funcionamiento. La elaboración de las leyes. El Tribunal Constitucional. Composición y funciones." },
        { numero: 2, titulo: "Derecho de igualdad y no discriminación por razón de género: especial referencia a la Ley Orgánica 3/2007, para la Igualdad Efectiva de Mujeres y Hombres. La Ley Orgánica 1/2004, de Medidas de Protección Integral contra la Violencia de Género. Antecedentes. Objeto y principios rectores. Medidas de sensibilización, prevención y detección. Derechos de las mujeres víctimas de la violencia de género. Tutela institucional. Ley 15/2022, de 12 de julio, integral para la igualdad de trato y la no discriminación. La Ley 4/2023, de 28 de febrero, para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI." },
        { numero: 3, titulo: "El Gobierno y la Administración. El Presidente del Gobierno. El Consejo de Ministros. Organización administrativa española: Ministros, Secretarios de Estado, Subsecretarios y Directores Generales. La Administración periférica del Estado. Los Delegados de Gobierno en la Comunidad Autónoma y los Subdelegados de Gobierno. La Secretaria de Estado de Justicia: Principales competencias." },
        { numero: 4, titulo: "Organización territorial del Estado en la Constitución. Las Comunidades Autónomas: Su constitución y competencias. Los Estatutos de Autonomía. La Administración Local. La provincia y el municipio." },
        { numero: 5, titulo: "La Unión Europea. Competencias de la Unión Europea. Instituciones y órganos de la Unión Europea: el Parlamento Europeo, el Consejo Europeo, el Consejo de Ministros de la Unión Europea, la Comisión Europea, el Tribunal de Justicia de la Unión Europea y el Tribunal de Cuentas." }
      ]
    },
    {
      titulo: "B) Organización Judicial",
      temas: [
        { numero: 6, titulo: "El Poder Judicial. El Consejo General del Poder Judicial: composición y funciones. La jurisdicción: Jueces y Magistrados. La independencia judicial. El Ministerio Fiscal: Organización y funciones." },
        { numero: 7, titulo: "Organización y competencia del Tribunal Supremo, de la Audiencia Nacional, de los Tribunales Superiores de Justicia y de las Audiencias Provinciales." },
        { numero: 8, titulo: "Organización y competencia: Juzgados de Primera Instancia e Instrucción, Juzgados de lo Penal, Juzgados de lo Contencioso-Administrativo, Juzgados de lo Social, Juzgados de Vigilancia Penitenciaria, Juzgados de Menores, Juzgados Mercantiles y de Marca comunitaria de Alicante, Juzgados de Violencia sobre la mujer y Juzgados de Paz." }
      ]
    },
    {
      titulo: "C) Derechos del Ciudadano y Modernización",
      temas: [
        { numero: 9, titulo: "La carta de Derechos de los Ciudadanos ante la Justicia. Derechos de información, de atención y gestión, de identificación de actuaciones y funcionarios, derechos lingüísticos. Derechos frente a los profesionales que asisten y representan al ciudadano: Abogados, Procuradores, Graduados Sociales. El Derecho a la Justicia Gratuita." },
        { numero: 10, titulo: "La modernización de la oficina judicial. La nueva oficina judicial: su regulación en la Ley Orgánica del Poder Judicial. La Administración de justicia y las nuevas tecnologías: Presentación de escritos y documentos por vía telemática. Concepto de expediente digital y firma digital. La Videoconferencia. Incidencia de la legislación de protección de datos en el uso de las aplicaciones informáticas." }
      ]
    },
    {
      titulo: "D) Personal al Servicio de la Administración de Justicia",
      temas: [
        { numero: 11, titulo: "El Letrado de la Administración de Justicia en la Ley Orgánica del Poder Judicial: funciones y competencias. Ordenación del cuerpo superior jurídico de Letrados de la Administración de Justicia: Secretario de Gobierno y Secretarios Coordinadores." },
        { numero: 12, titulo: "Cuerpos de Funcionarios al servicio de la Administración de Justicia. Cuerpos Generales y Cuerpos Especiales: Definición y Cuerpos que los integran. Cuerpos Especiales: El Cuerpo de Médicos Forenses: Funciones." },
        { numero: 13, titulo: "Los Cuerpos Generales (I): Funciones. Formas de acceso. Promoción interna. Adquisición y pérdida de la condición de funcionario. La rehabilitación. Derechos, deberes e incompatibilidades. Jornada y horarios. Vacaciones, permisos y licencias." },
        { numero: 14, titulo: "Los Cuerpos Generales (II): Situaciones administrativas. Ordenación de la actividad profesional. Provisión de puestos de trabajo. Régimen disciplinario." },
        { numero: 15, titulo: "Libertad sindical. El Sindicato en la Constitución Española. Elecciones sindicales según la Ley de órganos de representación y el Estatuto Básico del Empleado Público. El derecho de huelga. Salud y prevención de riesgos laborales." }
      ]
    },
    {
      titulo: "E) Procedimientos Judiciales Básicos",
      temas: [
        { numero: 16, titulo: "Los procedimientos declarativos en la Ley de Enjuiciamiento Civil 1/2000: juicio ordinario; juicio verbal; procedimientos especiales. Nociones generales de los procesos especiales en la Ley de Enjuiciamiento Civil. Especial consideración a los procesos matrimoniales y al procedimiento monitorio; el requerimiento de pago en el juicio monitorio. Nociones generales de jurisdicción voluntaria." }
      ]
    },
    {
      titulo: "F) Procedimientos de Ejecución y Procesos Especiales",
      temas: [
        { numero: 17, titulo: "Los procedimientos de ejecución en la Ley de Enjuiciamiento Civil. La ejecución dineraria, no dineraria y supuestos especiales: nociones básicas Las medidas cautelares. Diligencia de embargo, diligencia de lanzamiento, remociones y depósitos judiciales." },
        { numero: 18, titulo: "Los procedimientos penales en la Ley de Enjuiciamiento Criminal: ordinario, abreviado, juicio sobre delitos leves y de jurado. Especial mención a los Juicios Rápidos." },
        { numero: 19, titulo: "Los procedimientos contencioso-administrativos: ordinario, abreviado y especiales." },
        { numero: 20, titulo: "El proceso laboral. Procedimiento ordinario. Procedimiento por despido. Procesos de seguridad social." }
      ]
    },
    {
      titulo: "G) Actos Procesales y Resoluciones",
      temas: [
        { numero: 21, titulo: "Los actos procesales. Requisitos de los actos procesales: a) lugar; b) tiempo: Términos y plazos: Cómputo de los plazos; c) forma (consideración de la lengua oficial). Defectos de los actos: Nulidad, anulabilidad, irregularidad; subsanación de defectos." },
        { numero: 22, titulo: "Las resoluciones de los órganos judiciales. Clases de resoluciones judiciales: Contenido y características. Las resoluciones de los órganos judiciales colegiados. Las resoluciones del Letrado de la Administración de Justicia." }
      ]
    },
    {
      titulo: "H) Comunicaciones Judiciales",
      temas: [
        { numero: 23, titulo: "Los actos de comunicación con otros Tribunales y Autoridades: oficios y mandamientos. El auxilio judicial: los exhortos y los mandamientos en el proceso penal. Cooperación jurídica internacional: las comisiones rogatorias." },
        { numero: 24, titulo: "Actos de comunicación a las partes y otros intervinientes en el proceso: notificaciones, requerimientos, citaciones y emplazamientos. Notificaciones, citaciones y mandamientos en el proceso penal. Formas de notificación y nuevas tecnologías." }
      ]
    },
    {
      titulo: "I) Registro Civil y Archivos Judiciales",
      temas: [
        { numero: 25, titulo: "El Registro Civil. Estructura del Registro Civil. Las Oficinas del Registro Civil: Oficina Central, Oficinas Generales y Oficinas Consulares y sus funciones. Hechos y actos inscribibles en el Registro Civil. Las inscripciones: Inscripción de nacimiento y filiación; inscripciones relativas al matrimonio; inscripción del fallecimiento. Otras inscripciones. Certificaciones. Expedientes del Registro Civil." },
        { numero: 26, titulo: "Conceptos de archivo judicial y de documentación judicial en relación con la legislación vigente en materia de archivos judiciales. Formas de remisión de documentación judicial y relaciones documentales. Nuevas tecnologías en los archivos judiciales de gestión. Las juntas de expurgo de la documentación judicial." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Temario Completo Auxilio Judicial | 26 Temas Oficiales | José Sousa"
        description="Temario oficial completo para oposiciones de Auxilio Judicial. 26 temas fundamentales organizados por materias: Constitución, Organización Judicial, Derechos del Ciudadano, Procedimientos y más."
        keywords="temario auxilio judicial, oposiciones justicia, 26 temas auxilio judicial, programa oficial auxilio judicial"
        canonicalUrl={`${import.meta.env.VITE_SITE_URL || "https://example.com"}/oposiciones/auxilio-judicial/temario`}
        structuredData={structuredData}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <div className="mb-6">
              <Link 
                to="/oposiciones/auxilio-judicial"
                className="inline-flex items-center text-teal-100 hover:text-white transition-colors duration-200"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                Volver a Auxilio Judicial
              </Link>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Temario Completo
              <span className="block text-teal-200">Auxilio Judicial</span>
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
              Programa oficial completo de 26 temas fundamentales para las oposiciones de Auxilio Judicial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-pointer whitespace-nowrap"
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
              <div className="text-3xl font-bold text-teal-600 mb-2">26</div>
              <div className="text-gray-600">Temas Totales</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-teal-600 mb-2">9</div>
              <div className="text-gray-600">Bloques Temáticos</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-teal-600 mb-2">8-12</div>
              <div className="text-gray-600">Meses Preparación</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
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
              Temario estructurado en 9 bloques fundamentales del derecho constitucional, organización judicial y procedimientos básicos
            </p>
          </div>

          <div className="space-y-12">
            {temasSecciones.map((seccion, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-teal-600 text-white p-6">
                  <h3 className="text-2xl font-bold">{seccion.titulo}</h3>
                  <p className="text-teal-100 mt-2">{seccion.temas.length} temas</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-4">
                    {seccion.temas.map((tema) => (
                      <div key={tema.numero} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full flex-shrink-0">
                          <span className="text-teal-600 font-bold">{tema.numero}</span>
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
              Estrategias específicas para dominar los 26 temas de Auxilio Judicial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg mb-4">
                <i className="ri-calendar-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Planificación Accesible</h3>
              <p className="text-gray-600">
                Distribución estratégica de los 26 temas en 8-12 meses, 
                con enfoque en los temas más relevantes para el examen.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg mb-4">
                <i className="ri-book-open-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Estudio Estructurado</h3>
              <p className="text-gray-600">
                Metodología clara y directa enfocada en la comprensión 
                de conceptos fundamentales del sistema judicial.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg mb-4">
                <i className="ri-computer-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tecnología Básica</h3>
              <p className="text-gray-600">
                Familiarización con herramientas informáticas básicas 
                y sistemas de gestión judicial esenciales.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg mb-4">
                <i className="ri-file-list-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Esquemas y Resúmenes</h3>
              <p className="text-gray-600">
                Técnicas de síntesis y memorización adaptadas 
                a cada bloque temático del programa.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg mb-4">
                <i className="ri-question-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Test Continuos</h3>
              <p className="text-gray-600">
                Evaluación constante mediante test tipo examen 
                y simulacros adaptados al nivel de dificultad.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg mb-4">
                <i className="ri-team-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Apoyo Personalizado</h3>
              <p className="text-gray-600">
                Seguimiento individual y resolución de dudas 
                para garantizar tu progreso constante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Domina los 26 Temas Fundamentales
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Preparación completa y accesible para superar el temario 
            de las oposiciones de Auxilio Judicial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacto"
              className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Consulta Personalizada
            </Link>
            <Link 
              to="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
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

export default TemarioAuxilioJudicialPage;
