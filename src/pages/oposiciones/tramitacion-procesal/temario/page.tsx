
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import SEOHead from '../../../../components/seo/SEOHead';
import { Link } from 'react-router-dom';

const TemarioTramitacionProcesalPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Temario Completo Tramitación Procesal",
    "description": "Temario oficial completo para oposiciones de Tramitación Procesal y Administrativa - 37 temas especializados",
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
        { numero: 4, titulo: "Organización territorial del Estado en la Constitución. El Estado de las Autonomías. Las Comunidades Autónomas: Su constitución y competencias. Los Estatutos de Autonomía. La Administración Local. La provincia y el municipio." },
        { numero: 5, titulo: "La Unión Europea. Competencias de la UE. Instituciones y órganos de la Unión Europea: el Parlamento Europeo, el Consejo Europeo, el Consejo de Ministros de la Unión Europea, la Comisión Europea, el Tribunal de Justicia de la Unión Europea, el Tribunal de Cuentas." }
      ]
    },
    {
      titulo: "B) Organización Judicial",
      temas: [
        { numero: 6, titulo: "El Poder Judicial. El Consejo General del Poder Judicial: composición y funciones. La jurisdicción: Jueces y Magistrados: Funciones y competencias. La independencia judicial. El Ministerio Fiscal: Organización y funciones. Sistemas de acceso a las carreras judicial y fiscal." },
        { numero: 7, titulo: "Examen de la organización y competencia del Tribunal Supremo, de la Audiencia Nacional, de los Tribunales Superiores y de las Audiencias Provinciales." },
        { numero: 8, titulo: "Examen de la organización y competencia: Juzgados de Primera Instancia e Instrucción. Juzgados de lo Penal. Juzgados de lo Contencioso-Administrativo. Juzgados de lo Social. Juzgados de Vigilancia Penitenciaria. Juzgados de Menores. Juzgados Mercantiles, y el Tribunal de Marca Comunitaria de Alicante, Juzgados de Violencia sobre la mujer y Juzgados de Paz." }
      ]
    },
    {
      titulo: "C) Derechos del Ciudadano y Modernización",
      temas: [
        { numero: 9, titulo: "La carta de Derechos de los Ciudadanos ante la Justicia. Derechos de información, de atención y gestión, de identificación de actuaciones y funcionarios, derechos lingüísticos. Derechos frente a los profesionales que asisten y representan al ciudadano: Abogados, Procuradores, Graduados Sociales. El Derecho a la Justicia Gratuita en la Carta de Derechos. El plan de Transparencia Judicial." },
        { numero: 10, titulo: "La modernización de la oficina judicial. La nueva oficina judicial. Su regulación en la Ley Orgánica del Poder Judicial. La administración de justicia y las nuevas tecnologías. Código de Conducta para usuarios de equipos y sistemas informáticos al servicio de la Administración de Justicia. El expediente digital y la presentación telemática de escritos y documentos. La firma digital, el correo electrónico. Incidencia de la legislación de protección de datos en el uso de las aplicaciones informáticas." }
      ]
    },
    {
      titulo: "D) Personal al Servicio de la Administración de Justicia",
      temas: [
        { numero: 11, titulo: "El Letrado de la Administración de Justicia en la Ley Orgánica del Poder Judicial: funciones y competencias. Ordenación del cuerpo superior jurídico de Letrados de la Administración de Justicia: Secretario de Gobierno y Secretarios Coordinadores." },
        { numero: 12, titulo: "Cuerpos de Funcionarios al servicio de la Administración de Justicia. Cuerpos Generales y Cuerpos Especiales: Definición y Cuerpos que los integran. Cuerpos Especiales: El Cuerpo de Médicos Forenses: Funciones." },
        { numero: 13, titulo: "Los Cuerpos Generales (I): Funciones. Formas de acceso. Promoción interna. Adquisición y pérdida de la condición de funcionarios. La rehabilitación. Derechos, deberes e incompatibilidades. Jornada y horarios. Vacaciones, permisos y licencias." },
        { numero: 14, titulo: "Los Cuerpos Generales (II): Situaciones administrativas. Ordenación de la actividad profesional. Provisión de puestos de trabajo. Régimen disciplinario." },
        { numero: 15, titulo: "Libertad sindical: El Sindicato en la Constitución Española. Elecciones sindicales según la Ley de órganos de representación y el Estatuto Básico del Empleado Público. El derecho de huelga. Salud y prevención de riesgos laborales." }
      ]
    },
    {
      titulo: "E) Procedimientos Declarativos",
      temas: [
        { numero: 16, titulo: "Los procedimientos declarativos en la Ley de Enjuiciamiento Civil: juicio ordinario y verbal." }
      ]
    },
    {
      titulo: "F) Procedimientos de Ejecución y Procesos Especiales",
      temas: [
        { numero: 17, titulo: "Los procedimientos de ejecución en la Ley de Enjuiciamiento Civil. Clases de ejecución: disposiciones generales de cada una de ellas. Especial referencia a la libranza de mandamientos, efectividad de los embargos acordados en el decreto acordando medidas ejecutivas concretas para llevar a cabo lo dispuesto por la orden general de ejecución y en los decretos de mejora, averiguación patrimonial, preparación procesal de la vía de apremio de muebles e inmuebles, actas de celebración de subastas y trámite de depósito judicial. Las medidas cautelares." },
        { numero: 18, titulo: "Procesos especiales en la Ley de Enjuiciamiento Civil. Especial consideración a los procesos matrimoniales y al proceso monitorio. El requerimiento de pago en el procedimiento monitorio. El juicio cambiario." },
        { numero: 19, titulo: "La jurisdicción voluntaria: Naturaleza y clases de procedimientos. Especial referencia a los actos de conciliación." }
      ]
    },
    {
      titulo: "G) Procedimientos Penales",
      temas: [
        { numero: 20, titulo: "Los procedimientos penales en la Ley de Enjuiciamiento Criminal; ordinario, abreviado y de jurado." },
        { numero: 21, titulo: "Procedimiento de juicio sobre delitos leves. Juicios Rápidos. La ejecución en el proceso penal, con especial referencia a la ejecución de los delitos leves. La pieza de responsabilidad civil en el proceso penal." }
      ]
    },
    {
      titulo: "H) Procedimientos Contencioso-Administrativos y Laborales",
      temas: [
        { numero: 22, titulo: "Recurso contencioso-administrativo. Procedimientos ordinarios, abreviados y especiales." },
        { numero: 23, titulo: "El proceso laboral. Procedimiento ordinario. Procedimiento por despido. Procesos de seguridad social." }
      ]
    },
    {
      titulo: "I) Recursos y Actos Procesales",
      temas: [
        { numero: 24, titulo: "Recursos. Cuestiones generales sobre el derecho al recurso. El depósito para recurrir. Los recursos en el ámbito civil: Reposición, revisión contra resoluciones del Letrado de la Administración de Justicia, queja, apelación, y los recursos extraordinarios de infracción procesal y casación. Los recursos en el procedimiento penal: reforma, apelación y queja y Recursos extraordinarios. Los recursos contra las resoluciones del Letrado de la Administración de Justicia." },
        { numero: 25, titulo: "Los actos procesales. Requisitos de los actos procesales: a) lugar; b) tiempo: Términos y plazos: Cómputo de los plazos; c) forma (consideración de la lengua oficial). Defectos de los actos: Nulidad, anulabilidad, irregularidad; subsanación de defectos." },
        { numero: 26, titulo: "Las resoluciones de los órganos judiciales. Clases de resoluciones judiciales: Contenido y características. Las resoluciones de los órganos judiciales colegiados. Las resoluciones del Letrado de la Administración de Justicia." }
      ]
    },
    {
      titulo: "J) Comunicaciones Judiciales",
      temas: [
        { numero: 27, titulo: "Los actos de comunicación con otros Tribunales y Autoridades: oficios y mandamientos. El auxilio judicial: los exhortos y los mandamientos en el proceso penal. Cooperación jurídica internacional: las comisiones rogatorias." },
        { numero: 28, titulo: "Actos de comunicación a las partes y otros intervinientes en el proceso: notificaciones, requerimientos, citaciones y emplazamientos. Notificaciones, citaciones y mandamientos en el proceso penal. Formas de notificación y nuevas tecnologías." }
      ]
    },
    {
      titulo: "K) Registro Civil y Archivos Judiciales",
      temas: [
        { numero: 29, titulo: "El Registro Civil. Estructura del Registro Civil. las Oficinas del Registro Civil: Oficina Central, Oficinas Generales y Oficinas Consulares y sus funciones. Hechos y actos inscribibles en el Registro Civil." },
        { numero: 30, titulo: "Las inscripciones: Inscripción de nacimiento y filiación; inscripciones relativas al matrimonio; inscripción del fallecimiento. Otras inscripciones. Certificaciones. Expedientes del Registro Civil." },
        { numero: 31, titulo: "Conceptos de archivo judicial y de documentación judicial en relación con la legislación vigente en materia de archivos judiciales. Formas de remisión de documentación judicial y relaciones documentales. Nuevas tecnologías en los archivos judiciales de gestión. Las juntas de expurgo de la documentación judicial." }
      ]
    },
    {
      titulo: "L) Informática y Nuevas Tecnologías",
      temas: [
        { numero: 32, titulo: "Informática básica: conceptos fundamentales sobre el hardware y el software. Sistemas de almacenamiento de datos. Sistemas operativos. Nociones básicas de seguridad informática." },
        { numero: 33, titulo: "Introducción al sistema operativo: el entorno Windows. Fundamentos. Trabajo en el entorno gráfico de Windows: ventanas, iconos, menús contextuales, cuadros de diálogo. El escritorio y sus elementos. El menú inicio." },
        { numero: 34, titulo: "El explorador de Windows. Gestión de carpetas y archivos. Operaciones de búsqueda. Herramientas «Este equipo» y «Acceso rápido». Accesorios. Herramientas del sistema." },
        { numero: 35, titulo: "Procesadores de texto: Word 365. Principales funciones y utilidades. Creación y estructuración del documento. Gestión, grabación, recuperación e impresión de ficheros. Personalización del entorno de trabajo." },
        { numero: 36, titulo: "Correo electrónico: Outlook 365. Conceptos elementales y funcionamiento. El entorno de trabajo. Enviar, recibir, responder y reenviar mensajes. Creación de mensajes. Reglas de mensaje. Libreta de direcciones." },
        { numero: 37, titulo: "La Red Internet: origen, evolución y estado actual. Conceptos elementales sobre protocolos y servicios en Internet. Funcionalidades básicas de los navegadores web." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Temario Completo Tramitación Procesal | 37 Temas Oficiales | José Sousa"
        description="Temario oficial completo para oposiciones de Tramitación Procesal y Administrativa. 37 temas especializados organizados por materias: Constitución, Organización Judicial, Procedimientos, Registro Civil, Informática y más."
        keywords="temario tramitación procesal, oposiciones justicia, 37 temas tramitación procesal, programa oficial tramitación procesal"
        canonicalUrl={`${import.meta.env.VITE_SITE_URL || "https://example.com"}/oposiciones/tramitacion-procesal/temario`}
        structuredData={structuredData}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <div className="mb-6">
              <Link 
                to="/oposiciones/tramitacion-procesal"
                className="inline-flex items-center text-amber-100 hover:text-white transition-colors duration-200"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                Volver a Tramitación Procesal
              </Link>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Temario Completo
              <span className="block text-amber-200">Tramitación Procesal</span>
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              Programa oficial completo de 37 temas especializados para las oposiciones de Tramitación Procesal y Administrativa
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
              <div className="text-3xl font-bold text-amber-600 mb-2">37</div>
              <div className="text-gray-600">Temas Totales</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-amber-600 mb-2">12</div>
              <div className="text-gray-600">Bloques Temáticos</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-amber-600 mb-2">10-15</div>
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
              Temario estructurado en 12 bloques especializados del derecho procesal y la administración judicial
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
              Estrategias específicas para dominar los 37 temas de Tramitación Procesal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-calendar-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Planificación Eficiente</h3>
              <p className="text-gray-600">
                Distribución estratégica de los 37 temas en 10-15 meses, 
                priorizando procedimientos con mayor aplicación práctica.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-book-open-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Estudio Especializado</h3>
              <p className="text-gray-600">
                Metodología enfocada en la aplicación práctica de procedimientos 
                y tramitación real de expedientes judiciales.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-computer-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tecnología Aplicada</h3>
              <p className="text-gray-600">
                Dominio de herramientas informáticas y sistemas de gestión 
                judicial esenciales para el desempeño profesional.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-file-list-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Casos Prácticos</h3>
              <p className="text-gray-600">
                Resolución de supuestos reales de tramitación procesal 
                en todas las jurisdicciones y procedimientos.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-question-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Test Especializados</h3>
              <p className="text-gray-600">
                Evaluación continua mediante test específicos de procedimientos 
                y simulacros de examen adaptados al nivel.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                <i className="ri-presentation-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Preparación Oral</h3>
              <p className="text-gray-600">
                Técnicas específicas para la exposición oral de temas 
                y defensa de casos prácticos ante el tribunal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Domina los 37 Temas Especializados
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Preparación integral y especializada para superar el temario más práctico 
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

export default TemarioTramitacionProcesalPage;
