
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SEOHead from '../../components/seo/SEOHead';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog de Oposiciones de Justicia - José Sousa",
    "description": "Consejos, novedades y recursos para tu preparación en oposiciones de justicia",
    "url": `${import.meta.env.VITE_SITE_URL || "https://example.com"}/blog`,
    "publisher": {
      "@type": "Person",
      "name": "José Sousa",
      "jobTitle": "Preparador de Oposiciones de Justicia"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${import.meta.env.VITE_SITE_URL || "https://example.com"}/blog`
    }
  };

  const articulos = [
    {
      id: 1,
      titulo: "Novedades en Gestión Procesal 2024: Cambios Normativos y Nuevas Competencias",
      resumen: "Análisis completo de las principales modificaciones legislativas que afectan a las oposiciones de Gestión Procesal en 2024.",
      fecha: "15 de Enero de 2024",
      categoria: "Gestión Procesal",
      imagen: "https://readdy.ai/api/search-image?query=Modern%20Spanish%20courthouse%20with%20digital%20technology%2C%20legal%20documents%20on%20computer%20screens%20in%20Spanish%20judicial%20office%2C%20professional%20Spanish%20court%20environment%20with%20contemporary%20architecture%20and%20digital%20interfaces&width=400&height=250&seq=gestion2024&orientation=landscape",
      enlace: "/blog/gestion-procesal-2024",
      tiempo: "12 min"
    },
    {
      id: 2,
      titulo: "La Digitalización de la Justicia en 2024: Impacto en Gestión Procesal",
      resumen: "Cómo la transformación digital está revolucionando la Administración de Justicia y redefiniendo las competencias profesionales.",
      fecha: "10 de Marzo de 2024",
      categoria: "Transformación Digital",
      imagen: "https://readdy.ai/api/search-image?query=Digital%20transformation%20in%20Spanish%20justice%20system%2C%20computer%20screens%20showing%20Spanish%20legal%20documents%2C%20modern%20Spanish%20judicial%20office%20with%20technology%20integration%2C%20professional%20digital%20workspace%20in%20Spanish%20courts&width=400&height=250&seq=digital2024&orientation=landscape",
      enlace: "/blog/digitalizacion-justicia-2024",
      tiempo: "10 min"
    },
    {
      id: 3,
      title: "Calendario de Oposiciones 2024-2025",
      excerpt: "Fechas importantes y convocatorias previstas para las oposiciones de justicia en el próximo período.",
      date: "5 de Marzo, 2024",
      category: "Convocatorias",
      image: "https://readdy.ai/api/search-image?query=Professional%20calendar%20and%20planning%20materials%20for%20Spanish%20legal%20examinations%2C%20organized%20schedule%20with%20important%20dates%20marked%20for%20Spanish%20court%20exams%2C%20exam%20preparation%20timeline%20in%20Spanish%20judicial%20context&width=400&height=250&seq=blog-3&orientation=landscape",
      readTime: "4 min"
    },
    {
      id: 4,
      title: "Gestión del Estrés en Época de Exámenes",
      excerpt: "Estrategias psicológicas para mantener la calma y el rendimiento durante la preparación y el día del examen.",
      date: "28 de Febrero, 2024",
      category: "Bienestar",
      image: "https://readdy.ai/api/search-image?query=Peaceful%20study%20environment%20for%20Spanish%20judicial%20exam%20preparation%2C%20stress%20management%20for%20Spanish%20court%20exam%20students%2C%20calm%20and%20organized%20workspace%20for%20Spanish%20legal%20studies&width=400&height=250&seq=blog-4&orientation=landscape",
      readTime: "6 min"
    },
    {
      id: 5,
      title: "Diferencias entre Auxilio, Tramitación y Gestión",
      excerpt: "Guía completa para entender las funciones y requisitos de cada categoría en las oposiciones de justicia.",
      date: "20 de Febrero, 2024",
      category: "Orientación",
      image: "https://readdy.ai/api/search-image?query=Comparison%20chart%20of%20different%20Spanish%20judicial%20positions%2C%20professional%20hierarchy%20in%20Spanish%20court%20system%2C%20organized%20information%20display%20for%20Spanish%20judicial%20career%20guidance&width=400&height=250&seq=blog-5&orientation=landscape",
      readTime: "8 min"
    },
    {
      id: 6,
      title: "Casos Prácticos: Tramitación de Expedientes",
      excerpt: "Ejemplos reales de tramitación procesal con explicaciones paso a paso para dominar la práctica.",
      date: "15 de Febrero, 2024",
      category: "Casos Prácticos",
      image: "https://readdy.ai/api/search-image?query=Spanish%20legal%20case%20files%20and%20procedural%20documents%2C%20practical%20examples%20of%20Spanish%20judicial%20processing%2C%20organized%20Spanish%20legal%20paperwork%2C%20professional%20case%20study%20materials%20for%20Spanish%20courts&width=400&height=250&seq=blog-6&orientation=landscape",
      readTime: "10 min"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Novedades en la Ley de Enjuiciamiento Civil 2024",
      excerpt: "Análisis de las últimas modificaciones que afectan a las oposiciones de justicia y cómo prepararse para los cambios.",
      date: "15 de Marzo, 2024",
      category: "Legislación",
      image: "https://readdy.ai/api/search-image?query=Modern%20Spanish%20law%20books%20and%20legal%20documents%20on%20desk%20with%20gavel%2C%20professional%20Spanish%20legal%20study%20environment%2C%20updated%20Spanish%20legislation%20materials%2C%20clean%20workspace%20for%20Spanish%20legal%20professionals&width=400&height=250&seq=blog-1&orientation=landscape",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Técnicas de Memorización para Opositores",
      excerpt: "Métodos probados para memorizar grandes cantidades de información legal de manera eficiente y duradera.",
      date: "10 de Marzo, 2024",
      category: "Técnicas de Estudio",
      image: "https://readdy.ai/api/search-image?query=Student%20studying%20Spanish%20legal%20materials%20with%20highlighted%20notes%2C%20memory%20techniques%20for%20Spanish%20judicial%20exams%2C%20organized%20study%20space%20with%20Spanish%20legal%20textbooks%2C%20focused%20learning%20environment%20for%20Spanish%20court%20exam%20preparation&width=400&height=250&seq=blog-2&orientation=landscape",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Calendario de Oposiciones 2024-2025",
      excerpt: "Fechas importantes y convocatorias previstas para las oposiciones de justicia en el próximo período.",
      date: "5 de Marzo, 2024",
      category: "Convocatorias",
      image: "https://readdy.ai/api/search-image?query=Professional%20calendar%20and%20planning%20materials%20for%20Spanish%20legal%20examinations%2C%20organized%20schedule%20with%20important%20dates%20marked%20for%20Spanish%20court%20exams%2C%20exam%20preparation%20timeline%20in%20Spanish%20judicial%20context&width=400&height=250&seq=blog-3&orientation=landscape",
      readTime: "4 min"
    },
    {
      id: 4,
      title: "Gestión del Estrés en Época de Exámenes",
      excerpt: "Estrategias psicológicas para mantener la calma y el rendimiento durante la preparación y el día del examen.",
      date: "28 de Febrero, 2024",
      category: "Bienestar",
      image: "https://readdy.ai/api/search-image?query=Peaceful%20study%20environment%20for%20Spanish%20judicial%20exam%20preparation%2C%20stress%20management%20for%20Spanish%20court%20exam%20students%2C%20calm%20and%20organized%20workspace%20for%20Spanish%20legal%20studies&width=400&height=250&seq=blog-4&orientation=landscape",
      readTime: "6 min"
    },
    {
      id: 5,
      title: "Diferencias entre Auxilio, Tramitación y Gestión",
      excerpt: "Guía completa para entender las funciones y requisitos de cada categoría en las oposiciones de justicia.",
      date: "20 de Febrero, 2024",
      category: "Orientación",
      image: "https://readdy.ai/api/search-image?query=Comparison%20chart%20of%20different%20Spanish%20judicial%20positions%2C%20professional%20hierarchy%20in%20Spanish%20court%20system%2C%20organized%20information%20display%20for%20Spanish%20judicial%20career%20guidance&width=400&height=250&seq=blog-5&orientation=landscape",
      readTime: "8 min"
    },
    {
      id: 6,
      title: "Casos Prácticos: Tramitación de Expedientes",
      excerpt: "Ejemplos reales de tramitación procesal con explicaciones paso a paso para dominar la práctica.",
      date: "15 de Febrero, 2024",
      category: "Casos Prácticos",
      image: "https://readdy.ai/api/search-image?query=Spanish%20legal%20case%20files%20and%20procedural%20documents%2C%20practical%20examples%20of%20Spanish%20judicial%20processing%2C%20organized%20Spanish%20legal%20paperwork%2C%20professional%20case%20study%20materials%20for%20Spanish%20courts&width=400&height=250&seq=blog-6&orientation=landscape",
      readTime: "10 min"
    }
  ];

  const categories = ["Todos", "Legislación", "Técnicas de Estudio", "Convocatorias", "Bienestar", "Orientación", "Casos Prácticos"];

  const handleReadMore = (articleId: number) => {
    window.REACT_APP_NAVIGATE(`/blog/article/${articleId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Blog de Oposiciones de Justicia | José Sousa - Consejos y Recursos"
        description="Consejos, novedades y recursos para tu preparación en oposiciones de justicia. Artículos especializados sobre Auxilio Judicial, Tramitación y Gestión Procesal."
        keywords="blog oposiciones justicia, consejos oposiciones, recursos estudio, preparación exámenes, auxilio judicial blog, tramitación procesal"
        ogTitle="Blog de Oposiciones de Justicia | José Sousa"
        ogDescription="Consejos, novedades y recursos para tu preparación en oposiciones de justicia. Artículos especializados y actualizados."
        canonicalUrl={`${import.meta.env.VITE_SITE_URL || "https://example.com"}/blog`}
        structuredData={structuredData}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Blog de Oposiciones
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Consejos, novedades y recursos para tu preparación en oposiciones de justicia
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-amber-600 hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Artículos Destacados */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Artículos Destacados</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Link to="/blog/gestion-procesal-2024" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: `url('${articulos[0].imagen}')`
              }}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                    {articulos[0].categoria}
                  </span>
                  <span className="text-gray-500 text-sm">{articulos[0].tiempo} lectura</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{articulos[0].titulo}</h3>
                <p className="text-gray-600 mb-4">{articulos[0].resumen}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{articulos[0].fecha}</span>
                  <span className="text-teal-600 font-semibold hover:text-teal-700 cursor-pointer">
                    Leer más →
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/blog/digitalizacion-justicia-2024" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: `url('${articulos[1].imagen}')`
              }}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {articulos[1].categoria}
                  </span>
                  <span className="text-gray-500 text-sm">{articulos[1].tiempo} lectura</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{articulos[1].titulo}</h3>
                <p className="text-gray-600 mb-4">{articulos[1].resumen}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{articulos[1].fecha}</span>
                  <span className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                    Leer más →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Artículos de Tramitación Procesal */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tramitación Procesal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Link to="/blog/tramitacion-procesal-2024" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20Spanish%20courthouse%20with%20digital%20technology%20screens%20and%20electronic%20filing%20systems%2C%20professional%20Spanish%20legal%20environment%20with%20computers%20and%20digital%20documents%20for%20Spanish%20judicial%20administration&width=400&height=250&seq=tramitacion2024&orientation=landscape"
                alt="Novedades en Tramitación Procesal 2024"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <i className="ri-calendar-line mr-2"></i>
                  15 de Marzo, 2024
                  <span className="mx-2">•</span>
                  <i className="ri-time-line mr-2"></i>
                  8 min lectura
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Novedades en Tramitación Procesal 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  Análisis completo de las principales novedades en tramitación procesal para 2024, 
                  incluyendo cambios normativos, nuevas competencias y actualizaciones del temario oficial.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-600">
                    <span className="text-sm font-medium">Leer más</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                  <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-xs font-medium">
                    Tramitación Procesal
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/blog/nuevas-tecnologias-tramitacion-2024" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <img 
                src="https://readdy.ai/api/search-image?query=Advanced%20computer%20workstation%20in%20modern%20Spanish%20courthouse%20office%20with%20multiple%20monitors%20showing%20Spanish%20legal%20software%20interfaces%2C%20digital%20filing%20systems%20for%20Spanish%20judicial%20document%20management&width=400&height=250&seq=tecnologia2024&orientation=landscape"
                alt="Nuevas Tecnologías en Tramitación Procesal 2024"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <i className="ri-calendar-line mr-2"></i>
                  10 de Abril, 2024
                  <span className="mx-2">•</span>
                  <i className="ri-time-line mr-2"></i>
                  10 min lectura
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Nuevas Tecnologías en Tramitación Procesal 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  Guía completa sobre las nuevas tecnologías aplicadas a la tramitación procesal. 
                  Herramientas digitales, sistemas de gestión y competencias tecnológicas esenciales.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-blue-600">
                    <span className="text-sm font-medium">Leer más</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                    Tecnología
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Artículos de Auxilio Judicial */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Auxilio Judicial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/blog/auxilio-judicial-2024" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Spanish%20courthouse%20reception%20area%20with%20modern%20administrative%20desk%2C%20organized%20filing%20systems%20for%20Spanish%20judicial%20support%2C%20computer%20workstation%20in%20Spanish%20court%20environment&width=400&height=250&seq=auxilio-blog-1&orientation=landscape"
                alt="Oposiciones Auxilio Judicial 2024"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <i className="ri-calendar-line mr-2"></i>
                  15 de Enero, 2024
                  <span className="mx-2">•</span>
                  <i className="ri-time-line mr-2"></i>
                  8 min lectura
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Oposiciones Auxilio Judicial 2024: Guía Completa
                </h3>
                <p className="text-gray-600 mb-4">
                  Todo lo que necesitas saber sobre las oposiciones de Auxilio Judicial en 2024: 
                  convocatoria, requisitos, temario completo y estrategias para conseguir tu plaza.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-600">
                    <span className="text-sm font-medium">Leer más</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                  <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-xs font-medium">
                    Auxilio Judicial
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/blog/preparacion-auxilio-judicial-2024" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <img 
                src="https://readdy.ai/api/search-image?query=Student%20studying%20Spanish%20judicial%20administration%20materials%20at%20organized%20desk%20with%20Spanish%20legal%20books%2C%20notes%2C%20laptop%2C%20focused%20study%20environment%20for%20Spanish%20court%20exam%20preparation&width=400&height=250&seq=auxilio-blog-2&orientation=landscape"
                alt="Cómo Preparar Auxilio Judicial 2024"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <i className="ri-calendar-line mr-2"></i>
                  20 de Enero, 2024
                  <span className="mx-2">•</span>
                  <i className="ri-time-line mr-2"></i>
                  10 min lectura
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Cómo Preparar las Oposiciones de Auxilio Judicial en 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  Guía práctica con estrategias efectivas, técnicas de estudio y consejos 
                  para aprobar las oposiciones de Auxilio Judicial. Planificación paso a paso.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-600">
                    <span className="text-sm font-medium">Leer más</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                  <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-xs font-medium">
                    Preparación
                  </span>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mantente Actualizado
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Recibe las últimas novedades, consejos y recursos directamente en tu email
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600 text-sm"
              />
              <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-200 cursor-pointer whitespace-nowrap">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
