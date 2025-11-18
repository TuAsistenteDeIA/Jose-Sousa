
import { useParams, Link } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import SEOHead from '../../../components/seo/SEOHead';

const ArticlePage = () => {
  const { id } = useParams();

  const articles = {
    '1': {
      title: "Novedades en la Ley de Enjuiciamiento Civil 2024",
      content: `
        <h2>Principales cambios en la LEC 2024</h2>
        <p>La Ley de Enjuiciamiento Civil ha experimentado importantes modificaciones en 2024 que afectan directamente a las oposiciones de justicia. Estos cambios son fundamentales para todos los opositores que se preparan para las convocatorias de Auxilio Judicial, Tramitación Procesal y Gestión Procesal.</p>
        
        <h3>1. Digitalización de procedimientos</h3>
        <p>Una de las principales novedades es la implementación obligatoria de sistemas digitales en todos los juzgados. Esto incluye:</p>
        <ul>
          <li>Presentación electrónica de escritos</li>
          <li>Notificaciones telemáticas</li>
          <li>Archivo digital de expedientes</li>
          <li>Videoconferencias para comparecencias</li>
        </ul>
        
        <h3>2. Nuevos plazos procesales</h3>
        <p>Se han modificado varios plazos importantes que debes conocer:</p>
        <ul>
          <li>Contestación a la demanda: ampliado a 25 días hábiles</li>
          <li>Recurso de apelación: reducido a 15 días hábiles</li>
          <li>Ejecución provisional: nuevos requisitos temporales</li>
        </ul>
        
        <h3>3. Procedimientos simplificados</h3>
        <p>La reforma introduce nuevos procedimientos para agilizar la justicia:</p>
        <ul>
          <li>Juicio verbal electrónico para cuantías menores</li>
          <li>Procedimiento monitorio digital</li>
          <li>Ejecución hipotecaria simplificada</li>
        </ul>
        
        <h3>4. Impacto en las oposiciones</h3>
        <p>Estas modificaciones afectan especialmente a:</p>
        <ul>
          <li><strong>Temario de Tramitación Procesal:</strong> Nuevos procedimientos digitales</li>
          <li><strong>Casos prácticos:</strong> Aplicación de nuevos plazos</li>
          <li><strong>Gestión Procesal:</strong> Coordinación de sistemas informáticos</li>
        </ul>
        
        <h3>Recomendaciones para opositores</h3>
        <p>Para adaptarte a estos cambios:</p>
        <ol>
          <li>Actualiza tus apuntes con las nuevas disposiciones</li>
          <li>Practica casos con los nuevos plazos</li>
          <li>Familiarízate con la terminología digital</li>
          <li>Estudia los nuevos formularios electrónicos</li>
        </ol>
        
        <p>En José Sousa Oposiciones mantenemos nuestro material actualizado con todas estas novedades. Nuestros alumnos reciben las actualizaciones inmediatamente para estar siempre al día.</p>
      `,
      date: "15 de Marzo, 2024",
      category: "Legislación",
      image: "https://readdy.ai/api/search-image?query=Modern%20law%20books%20and%20legal%20documents%20on%20desk%20with%20gavel%2C%20professional%20legal%20study%20environment%2C%20updated%20legislation%20materials%2C%20clean%20and%20organized%20workspace%20for%20legal%20professionals&width=800&height=400&seq=article-1&orientation=landscape",
      readTime: "5 min",
      author: "José Sousa"
    },
    '2': {
      title: "Técnicas de Memorización para Opositores",
      content: `
        <h2>Métodos probados para memorizar información legal</h2>
        <p>La preparación de oposiciones requiere memorizar grandes cantidades de información. Aquí te comparto las técnicas más efectivas que han ayudado a cientos de mis alumnos a aprobar.</p>
        
        <h3>1. Técnica del Palacio de la Memoria</h3>
        <p>Esta técnica milenaria es especialmente útil para memorizar artículos y procedimientos:</p>
        <ul>
          <li>Elige un lugar familiar (tu casa, trabajo, etc.)</li>
          <li>Asigna cada artículo a una habitación específica</li>
          <li>Crea imágenes mentales vívidas</li>
          <li>Recorre mentalmente el espacio para recordar</li>
        </ul>
        
        <h3>2. Mapas Mentales Jurídicos</h3>
        <p>Organiza la información de forma visual:</p>
        <ul>
          <li>Coloca el tema principal en el centro</li>
          <li>Ramifica los subtemas con colores diferentes</li>
          <li>Usa símbolos y dibujos simples</li>
          <li>Conecta conceptos relacionados</li>
        </ul>
        
        <h3>3. Técnica de Repetición Espaciada</h3>
        <p>Optimiza tus repasos siguiendo este calendario:</p>
        <ul>
          <li>Primera revisión: 1 día después</li>
          <li>Segunda revisión: 3 días después</li>
          <li>Tercera revisión: 1 semana después</li>
          <li>Cuarta revisión: 2 semanas después</li>
          <li>Quinta revisión: 1 mes después</li>
        </ul>
        
        <h3>4. Acrónimos y Reglas Nemotécnicas</h3>
        <p>Crea frases memorables para recordar listas:</p>
        <ul>
          <li><strong>DRAC:</strong> Demanda, Respuesta, Alegaciones, Conclusiones</li>
          <li><strong>PAJE:</strong> Prueba, Alegaciones, Juicio, Ejecución</li>
          <li><strong>CITE:</strong> Citación, Incomparecencia, Testigos, Ejecución</li>
        </ul>
        
        <h3>5. Técnica de la Cadena</h3>
        <p>Para memorizar secuencias de procedimientos:</p>
        <ol>
          <li>Crea una historia que conecte todos los pasos</li>
          <li>Usa imágenes absurdas y exageradas</li>
          <li>Incluye emociones en la narrativa</li>
          <li>Practica contando la historia completa</li>
        </ol>
        
        <h3>6. Fichas de Repaso Activo</h3>
        <p>Método tradicional pero efectivo:</p>
        <ul>
          <li>Pregunta en una cara, respuesta en la otra</li>
          <li>Incluye casos prácticos simples</li>
          <li>Usa colores para diferentes materias</li>
          <li>Repasa diariamente las más difíciles</li>
        </ul>
        
        <h3>Consejos adicionales</h3>
        <ul>
          <li><strong>Estudia en bloques de 25-30 minutos</strong> con descansos de 5 minutos</li>
          <li><strong>Varía los lugares de estudio</strong> para fortalecer la memoria</li>
          <li><strong>Explica en voz alta</strong> lo que has memorizado</li>
          <li><strong>Duerme bien</strong> - el sueño consolida la memoria</li>
        </ul>
        
        <p>Recuerda que cada persona tiene su método preferido. Experimenta con estas técnicas y adapta las que mejor funcionen para ti. La constancia es clave para el éxito.</p>
      `,
      date: "10 de Marzo, 2024",
      category: "Técnicas de Estudio",
      image: "https://readdy.ai/api/search-image?query=Student%20studying%20legal%20materials%20with%20highlighted%20notes%2C%20memory%20techniques%20visualization%2C%20organized%20study%20space%20with%20legal%20textbooks%2C%20focused%20learning%20environment%20for%20exam%20preparation&width=800&height=400&seq=article-2&orientation=landscape",
      readTime: "7 min",
      author: "José Sousa"
    },
    '3': {
      title: "Calendario de Oposiciones 2024-2025",
      content: `
        <h2>Fechas importantes para las oposiciones de justicia</h2>
        <p>Mantente al día con todas las convocatorias y fechas clave para planificar tu preparación de manera efectiva.</p>
        
        <h3>Convocatorias confirmadas 2024</h3>
        
        <h4>Auxilio Judicial</h4>
        <ul>
          <li><strong>Publicación convocatoria:</strong> Abril 2024</li>
          <li><strong>Plazo de inscripción:</strong> Mayo - Junio 2024</li>
          <li><strong>Primer ejercicio:</strong> Septiembre 2024</li>
          <li><strong>Segundo ejercicio:</strong> Octubre 2024</li>
          <li><strong>Plazas convocadas:</strong> 1.500 aproximadamente</li>
        </ul>
        
        <h4>Tramitación Procesal</h4>
        <ul>
          <li><strong>Publicación convocatoria:</strong> Junio 2024</li>
          <li><strong>Plazo de inscripción:</strong> Julio - Agosto 2024</li>
          <li><strong>Primer ejercicio:</strong> Noviembre 2024</li>
          <li><strong>Segundo ejercicio:</strong> Diciembre 2024</li>
          <li><strong>Plazas convocadas:</strong> 2.000 aproximadamente</li>
        </ul>
        
        <h4>Gestión Procesal</h4>
        <ul>
          <li><strong>Publicación convocatoria:</strong> Agosto 2024</li>
          <li><strong>Plazo de inscripción:</strong> Septiembre - Octubre 2024</li>
          <li><strong>Primer ejercicio:</strong> Enero 2025</li>
          <li><strong>Segundo ejercicio:</strong> Febrero 2025</li>
          <li><strong>Plazas convocadas:</strong> 1.200 aproximadamente</li>
        </ul>
        
        <h3>Previsiones para 2025</h3>
        
        <h4>Segunda convocatoria Auxilio Judicial</h4>
        <ul>
          <li><strong>Publicación estimada:</strong> Marzo 2025</li>
          <li><strong>Exámenes estimados:</strong> Junio - Julio 2025</li>
          <li><strong>Plazas estimadas:</strong> 1.000</li>
        </ul>
        
        <h4>Convocatoria extraordinaria Tramitación</h4>
        <ul>
          <li><strong>Publicación estimada:</strong> Mayo 2025</li>
          <li><strong>Exámenes estimados:</strong> Septiembre 2025</li>
          <li><strong>Plazas estimadas:</strong> 800</li>
        </ul>
        
        <h3>Fechas clave para la preparación</h3>
        
        <h4>Trimestre actual (Marzo - Mayo 2024)</h4>
        <ul>
          <li>Intensificar estudio para Auxilio Judicial</li>
          <li>Completar primera vuelta del temario</li>
          <li>Comenzar práctica de test</li>
        </ul>
        
        <h4>Verano 2024 (Junio - Agosto)</h4>
        <ul>
          <li>Repaso intensivo para Auxilio Judicial</li>
          <li>Inicio preparación Tramitación Procesal</li>
          <li>Simulacros de examen semanales</li>
        </ul>
        
        <h4>Otoño 2024 (Septiembre - Noviembre)</h4>
        <ul>
          <li>Exámenes de Auxilio Judicial</li>
          <li>Preparación intensiva Tramitación</li>
          <li>Inicio estudio Gestión Procesal</li>
        </ul>
        
        <h3>Consejos de planificación</h3>
        
        <h4>Para opositores de primera vez</h4>
        <ul>
          <li>Elige una especialidad y céntrate en ella</li>
          <li>Dedica al menos 6 meses de preparación</li>
          <li>Practica con exámenes de años anteriores</li>
        </ul>
        
        <h4>Para opositores con experiencia</h4>
        <ul>
          <li>Actualiza conocimientos con nuevas leyes</li>
          <li>Refuerza puntos débiles identificados</li>
          <li>Considera presentarte a múltiples convocatorias</li>
        </ul>
        
        <h3>Documentación necesaria</h3>
        <p>Prepara con antelación:</p>
        <ul>
          <li>DNI en vigor</li>
          <li>Titulación académica requerida</li>
          <li>Certificado de antecedentes penales</li>
          <li>Certificado médico oficial</li>
          <li>Justificante de pago de tasas</li>
        </ul>
        
        <p><strong>Importante:</strong> Estas fechas son orientativas y pueden sufrir modificaciones. Te recomendamos estar atento a las publicaciones oficiales en el BOE y en nuestra academia para recibir actualizaciones inmediatas.</p>
      `,
      date: "5 de Marzo, 2024",
      category: "Convocatorias",
      image: "https://readdy.ai/api/search-image?query=Professional%20calendar%20and%20planning%20materials%20for%20legal%20examinations%2C%20organized%20schedule%20with%20important%20dates%20marked%2C%20exam%20preparation%20timeline%2C%20clean%20desk%20setup&width=800&height=400&seq=article-3&orientation=landscape",
      readTime: "4 min",
      author: "José Sousa"
    },
    '4': {
      title: "Gestión del Estrés en Época de Exámenes",
      content: `
        <h2>Mantén la calma y el rendimiento durante tu preparación</h2>
        <p>El estrés es uno de los mayores enemigos del opositor. Aprende a gestionarlo de manera efectiva para maximizar tu rendimiento y bienestar.</p>
        
        <h3>Identificando las señales de estrés</h3>
        
        <h4>Síntomas físicos</h4>
        <ul>
          <li>Dolores de cabeza frecuentes</li>
          <li>Tensión muscular en cuello y hombros</li>
          <li>Problemas digestivos</li>
          <li>Alteraciones del sueño</li>
          <li>Fatiga constante</li>
        </ul>
        
        <h4>Síntomas emocionales</h4>
        <ul>
          <li>Ansiedad y nerviosismo</li>
          <li>Irritabilidad</li>
          <li>Sensación de agobio</li>
          <li>Pérdida de motivación</li>
          <li>Dudas sobre las propias capacidades</li>
        </ul>
        
        <h4>Síntomas cognitivos</h4>
        <ul>
          <li>Dificultad para concentrarse</li>
          <li>Problemas de memoria</li>
          <li>Pensamientos negativos recurrentes</li>
          <li>Indecisión</li>
          <li>Bloqueos mentales</li>
        </ul>
        
        <h3>Técnicas de relajación</h3>
        
        <h4>Respiración diafragmática</h4>
        <ol>
          <li>Siéntate cómodamente con la espalda recta</li>
          <li>Coloca una mano en el pecho y otra en el abdomen</li>
          <li>Inhala lentamente por la nariz (4 segundos)</li>
          <li>Mantén el aire (4 segundos)</li>
          <li>Exhala por la boca (6 segundos)</li>
          <li>Repite 10 veces</li>
        </ol>
        
        <h4>Relajación muscular progresiva</h4>
        <ul>
          <li>Tensa y relaja cada grupo muscular</li>
          <li>Comienza por los pies y sube hasta la cabeza</li>
          <li>Mantén la tensión 5 segundos</li>
          <li>Relaja durante 10 segundos</li>
          <li>Practica 15-20 minutos diarios</li>
        </ul>
        
        <h4>Mindfulness para opositores</h4>
        <ul>
          <li>Dedica 10 minutos diarios a la meditación</li>
          <li>Concéntrate en el momento presente</li>
          <li>Observa tus pensamientos sin juzgarlos</li>
          <li>Usa apps como Headspace o Calm</li>
        </ul>
        
        <h3>Organización y planificación</h3>
        
        <h4>Técnica Pomodoro adaptada</h4>
        <ul>
          <li>25 minutos de estudio intenso</li>
          <li>5 minutos de descanso</li>
          <li>Cada 4 pomodoros, descanso de 30 minutos</li>
          <li>Ajusta los tiempos según tu capacidad</li>
        </ul>
        
        <h4>Planificación realista</h4>
        <ul>
          <li>Establece objetivos diarios alcanzables</li>
          <li>Incluye tiempo para descanso y ocio</li>
          <li>Deja margen para imprevistos</li>
          <li>Celebra los pequeños logros</li>
        </ul>
        
        <h3>Hábitos saludables</h3>
        
        <h4>Alimentación para el cerebro</h4>
        <ul>
          <li><strong>Desayuno completo:</strong> Avena, frutos secos, fruta</li>
          <li><strong>Snacks saludables:</strong> Nueces, yogur, frutas</li>
          <li><strong>Hidratación:</strong> 2-3 litros de agua diarios</li>
          <li><strong>Evita:</strong> Exceso de cafeína, azúcar refinado, comida procesada</li>
        </ul>
        
        <h4>Ejercicio físico</h4>
        <ul>
          <li>30 minutos de actividad diaria</li>
          <li>Caminar, correr, nadar, yoga</li>
          <li>Ejercicios de estiramiento entre sesiones de estudio</li>
          <li>Actividades al aire libre cuando sea posible</li>
        </ul>
        
        <h4>Higiene del sueño</h4>
        <ul>
          <li>7-8 horas de sueño nocturno</li>
          <li>Horarios regulares de acostarse y levantarse</li>
          <li>Evita pantallas 1 hora antes de dormir</li>
          <li>Ambiente fresco, oscuro y silencioso</li>
        </ul>
        
        <h3>Estrategias para el día del examen</h3>
        
        <h4>La noche anterior</h4>
        <ul>
          <li>Repaso ligero, no estudies material nuevo</li>
          <li>Prepara todo lo necesario para el examen</li>
          <li>Cena ligera y acuéstate temprano</li>
          <li>Evita conversaciones sobre el examen</li>
        </ul>
        
        <h4>El día del examen</h4>
        <ul>
          <li>Levántate con tiempo suficiente</li>
          <li>Desayuna bien pero sin excesos</li>
          <li>Llega al lugar con antelación</li>
          <li>Practica respiración profunda antes de entrar</li>
        </ul>
        
        <h4>Durante el examen</h4>
        <ul>
          <li>Lee todas las preguntas antes de empezar</li>
          <li>Gestiona bien el tiempo</li>
          <li>Si te bloqueas, pasa a otra pregunta</li>
          <li>Mantén la calma y confía en tu preparación</li>
        </ul>
        
        <h3>Apoyo social y profesional</h3>
        <ul>
          <li>Mantén contacto con familia y amigos</li>
          <li>Únete a grupos de estudio</li>
          <li>Considera ayuda psicológica si es necesario</li>
          <li>Comunica tus necesidades a tu entorno</li>
        </ul>
        
        <p>Recuerda que cierto nivel de estrés es normal y puede ser beneficioso para el rendimiento. La clave está en mantenerlo en niveles manejables y desarrollar herramientas efectivas para gestionarlo.</p>
      `,
      date: "28 de Febrero, 2024",
      category: "Bienestar",
      image: "https://readdy.ai/api/search-image?query=Peaceful%20study%20environment%20with%20relaxation%20elements%2C%20stress%20management%20for%20students%2C%20calm%20and%20organized%20workspace%2C%20mental%20wellness%20for%20exam%20preparation&width=800&height=400&seq=article-4&orientation=landscape",
      readTime: "6 min",
      author: "José Sousa"
    },
    '5': {
      title: "Diferencias entre Auxilio, Tramitación y Gestión",
      content: `
        <h2>Guía completa para elegir tu especialidad</h2>
        <p>Una de las decisiones más importantes al preparar oposiciones de justicia es elegir la especialidad adecuada. Te explico las diferencias, funciones y requisitos de cada categoría.</p>
        
        <h3>Auxilio Judicial</h3>
        
        <h4>Funciones principales</h4>
        <ul>
          <li>Apoyo directo al Letrado de la Administración de Justicia</li>
          <li>Atención al público en ventanilla</li>
          <li>Recepción y registro de documentos</li>
          <li>Archivo y custodia de expedientes</li>
          <li>Preparación de salas para vistas</li>
          <li>Notificaciones y citaciones</li>
          <li>Tareas administrativas generales</li>
        </ul>
        
        <h4>Requisitos académicos</h4>
        <ul>
          <li>Título de Graduado en ESO o equivalente</li>
          <li>Certificado de Profesionalidad nivel 2</li>
          <li>Formación Profesional de Grado Medio</li>
        </ul>
        
        <h4>Temario básico</h4>
        <ul>
          <li>Organización del Estado y la Administración de Justicia</li>
          <li>Derecho Procesal Civil básico</li>
          <li>Derecho Procesal Penal básico</li>
          <li>Atención al ciudadano</li>
          <li>Ofimática y nuevas tecnologías</li>
        </ul>
        
        <h4>Salario y condiciones</h4>
        <ul>
          <li><strong>Sueldo base:</strong> Aproximadamente 1.200-1.400€ mensuales</li>
          <li><strong>Jornada:</strong> 37,5 horas semanales</li>
          <li><strong>Vacaciones:</strong> 22 días hábiles + días adicionales por antigüedad</li>
          <li><strong>Estabilidad:</strong> Funcionario de carrera</li>
        </ul>
        
        <h3>Tramitación Procesal</h3>
        
        <h4>Funciones principales</h4>
        <ul>
          <li>Tramitación de procedimientos judiciales</li>
          <li>Elaboración de diligencias y providencias</li>
          <li>Gestión de plazos procesales</li>
          <li>Coordinación entre diferentes órganos judiciales</li>
          <li>Supervisión del trabajo de Auxilio Judicial</li>
          <li>Atención especializada al público</li>
          <li>Manejo de sistemas informáticos judiciales</li>
        </ul>
        
        <h4>Requisitos académicos</h4>
        <ul>
          <li>Título de Bachiller o equivalente</li>
          <li>Formación Profesional de Grado Superior</li>
          <li>Certificado de Profesionalidad nivel 3</li>
        </ul>
        
        <h4>Temario ampliado</h4>
        <ul>
          <li>Derecho Constitucional</li>
          <li>Organización del Poder Judicial</li>
          <li>Derecho Procesal Civil completo</li>
          <li>Derecho Procesal Penal completo</li>
          <li>Derecho Procesal Contencioso-Administrativo</li>
          <li>Derecho Procesal Laboral</li>
          <li>Nuevas tecnologías aplicadas</li>
        </ul>
        
        <h4>Salario y condiciones</h4>
        <ul>
          <li><strong>Sueldo base:</strong> Aproximadamente 1.400-1.700€ mensuales</li>
          <li><strong>Responsabilidades:</strong> Mayores que Auxilio Judicial</li>
          <li><strong>Promoción:</strong> Posibilidad de acceso a Gestión Procesal</li>
          <li><strong>Especialización:</strong> Diferentes jurisdicciones</li>
        </ul>
        
        <h3>Gestión Procesal</h3>
        
        <h4>Funciones principales</h4>
        <ul>
          <li>Dirección de la oficina judicial</li>
          <li>Supervisión del personal subalterno</li>
          <li>Gestión de recursos humanos y materiales</li>
          <li>Coordinación con otros órganos judiciales</li>
          <li>Planificación y organización del trabajo</li>
          <li>Resolución de incidencias complejas</li>
          <li>Apoyo directo al Letrado de la Administración de Justicia</li>
        </ul>
        
        <h4>Requisitos académicos</h4>
        <ul>
          <li>Título universitario de Grado</li>
          <li>Diplomatura universitaria</li>
          <li>Licenciatura universitaria</li>
          <li>Título de Técnico Superior + experiencia</li>
        </ul>
        
        <h4>Temario especializado</h4>
        <ul>
          <li>Derecho Constitucional avanzado</li>
          <li>Organización del Estado</li>
          <li>Derecho Administrativo</li>
          <li>Gestión de recursos humanos</li>
          <li>Derecho Procesal en todas las jurisdicciones</li>
          <li>Gestión de calidad en la Administración</li>
          <li>Estadística judicial</li>
        </ul>
        
        <h4>Salario y condiciones</h4>
        <ul>
          <li><strong>Sueldo base:</strong> Aproximadamente 1.700-2.100€ mensuales</li>
          <li><strong>Responsabilidades:</strong> Gestión y coordinación</li>
          <li><strong>Carrera profesional:</strong> Múltiples especializaciones</li>
          <li><strong>Promoción:</strong> Acceso a puestos directivos</li>
        </ul>
        
        <h3>Comparativa de dificultad</h3>
        
        <h4>Auxilio Judicial</h4>
        <ul>
          <li><strong>Nivel de dificultad:</strong> Básico-Intermedio</li>
          <li><strong>Tiempo de preparación:</strong> 6-12 meses</li>
          <li><strong>Competencia:</strong> Alta (muchos candidatos)</li>
          <li><strong>Temario:</strong> Más reducido y específico</li>
        </ul>
        
        <h4>Tramitación Procesal</h4>
        <ul>
          <li><strong>Nivel de dificultad:</strong> Intermedio</li>
          <li><strong>Tiempo de preparación:</strong> 12-18 meses</li>
          <li><strong>Competencia:</strong> Media-Alta</li>
          <li><strong>Temario:</strong> Amplio pero estructurado</li>
        </ul>
        
        <h4>Gestión Procesal</h4>
        <ul>
          <li><strong>Nivel de dificultad:</strong> Alto</li>
          <li><strong>Tiempo de preparación:</strong> 18-24 meses</li>
          <li><strong>Competencia:</strong> Media (menos candidatos)</li>
          <li><strong>Temario:</strong> Muy extenso y complejo</li>
        </ul>
        
        <h3>¿Cuál elegir?</h3>
        
        <h4>Elige Auxilio Judicial si:</h4>
        <ul>
          <li>Es tu primera oposición</li>
          <li>Prefieres funciones más operativas</li>
          <li>Quieres acceso rápido al empleo público</li>
          <li>Te gusta el trato directo con el público</li>
        </ul>
        
        <h4>Elige Tramitación Procesal si:</h4>
        <ul>
          <li>Tienes formación de bachillerato o superior</li>
          <li>Te interesan los procedimientos judiciales</li>
          <li>Buscas equilibrio entre responsabilidad y dificultad</li>
          <li>Quieres especializarte en una jurisdicción</li>
        </ul>
        
        <h4>Elige Gestión Procesal si:</h4>
        <ul>
          <li>Tienes titulación universitaria</li>
          <li>Te gusta liderar y gestionar equipos</li>
          <li>Buscas mayor responsabilidad y salario</li>
          <li>Tienes experiencia previa en administración</li>
        </ul>
        
        <h3>Promoción interna</h3>
        <p>Una ventaja del sistema es la posibilidad de promoción:</p>
        <ul>
          <li><strong>De Auxilio a Tramitación:</strong> Con 2 años de servicio</li>
          <li><strong>De Tramitación a Gestión:</strong> Con 2 años de servicio</li>
          <li><strong>Requisitos adicionales:</strong> Formación específica</li>
        </ul>
        
        <p>La elección de especialidad debe basarse en tus objetivos profesionales, formación académica y preferencias personales. Todas las opciones ofrecen estabilidad laboral y buenas condiciones de trabajo en el sector público.</p>
      `,
      date: "20 de Febrero, 2024",
      category: "Orientación",
      image: "https://readdy.ai/api/search-image?query=Comparison%20chart%20of%20different%20judicial%20positions%2C%20professional%20hierarchy%20in%20court%20system%2C%20organized%20information%20display%2C%20educational%20materials%20for%20career%20guidance&width=800&height=400&seq=article-5&orientation=landscape",
      readTime: "8 min",
      author: "José Sousa"
    },
    '6': {
      title: "Casos Prácticos: Tramitación de Expedientes",
      content: `
        <h2>Ejemplos reales paso a paso</h2>
        <p>La práctica es fundamental para dominar la tramitación procesal. Aquí tienes casos reales con explicaciones detalladas para que entiendas cada paso del proceso.</p>
        
        <h3>Caso Práctico 1: Juicio Verbal Civil</h3>
        
        <h4>Situación inicial</h4>
        <p><strong>Demandante:</strong> Juan Pérez García<br>
        <strong>Demandado:</strong> Talleres Martín S.L.<br>
        <strong>Cuantía:</strong> 4.500€<br>
        <strong>Objeto:</strong> Reclamación por daños en vehículo</p>
        
        <h4>Paso 1: Presentación de la demanda</h4>
        <ul>
          <li><strong>Fecha:</strong> 15 de enero de 2024</li>
          <li><strong>Documentos aportados:</strong> DNI, presupuesto de reparación, fotografías</li>
          <li><strong>Tasa judicial:</strong> 45€ (1% de la cuantía)</li>
          <li><strong>Acción:</strong> Registro de entrada y asignación de número de procedimiento</li>
        </ul>
        
        <h4>Paso 2: Examen de la demanda</h4>
        <ul>
          <li><strong>Verificación:</strong> Competencia territorial y objetiva</li>
          <li><strong>Documentación:</strong> Completa y en regla</li>
          <li><strong>Decisión:</strong> Admisión a trámite</li>
          <li><strong>Providencia:</strong> Auto de admisión del 18 de enero</li>
        </ul>
        
        <h4>Paso 3: Citación para juicio</h4>
        <ul>
          <li><strong>Fecha señalada:</strong> 25 de febrero de 2024, 10:00h</li>
          <li><strong>Citación al demandante:</strong> 20 días de antelación</li>
          <li><strong>Citación al demandado:</strong> 20 días de antelación + copia de la demanda</li>
          <li><strong>Método:</strong> Notificación por correo certificado</li>
        </ul>
        
        <h4>Paso 4: Desarrollo del juicio</h4>
        <ul>
          <li><strong>Comparecencia:</strong> Ambas partes presentes</li>
          <li><strong>Alegaciones:</strong> Demandante ratifica, demandado se opone</li>
          <li><strong>Prueba:</strong> Testifical y documental</li>
          <li><strong>Conclusiones:</strong> Cada parte mantiene su posición</li>
        </ul>
        
        <h4>Paso 5: Sentencia y ejecución</h4>
        <ul>
          <li><strong>Sentencia:</strong> 10 de marzo de 2024 - Estimatoria parcial</li>
          <li><strong>Condena:</strong> 3.200€ + costas</li>
          <li><strong>Notificación:</strong> 15 de marzo de 2024</li>
          <li><strong>Cumplimiento voluntario:</strong> Plazo de 20 días</li>
        </ul>
        
        <h3>Caso Práctico 2: Procedimiento Monitorio</h3>
        
        <h4>Situación inicial</h4>
        <p><strong>Acreedor:</strong> Suministros Industriales S.A.<br>
        <strong>Deudor:</strong> Construcciones López S.L.<br>
        <strong>Deuda:</strong> 12.000€<br>
        <strong>Concepto:</strong> Facturas impagadas</p>
        
        <h4>Paso 1: Petición inicial</h4>
        <ul>
          <li><strong>Formulario:</strong> Modelo oficial cumplimentado</li>
          <li><strong>Documentos:</strong> Facturas originales, albaranes, contratos</li>
          <li><strong>Justificación:</strong> Deuda líquida, vencida y exigible</li>
          <li><strong>Competencia:</strong> Juzgado del domicilio del deudor</li>
        </ul>
        
        <h4>Paso 2: Examen de la petición</h4>
        <ul>
          <li><strong>Verificación documental:</strong> Facturas conformes</li>
          <li><strong>Cuantía:</strong> Dentro de los límites legales</li>
          <li><strong>Decisión:</strong> Despacho del decreto</li>
          <li><strong>Plazo:</strong> 5 días desde la presentación</li>
        </ul>
        
        <h4>Paso 3: Requerimiento de pago</h4>
        <ul>
          <li><strong>Contenido:</strong> Pago en 20 días o oposición</li>
          <li><strong>Advertencia:</strong> Consecuencias del silencio</li>
          <li><strong>Notificación:</strong> Correo certificado con acuse</li>
          <li><strong>Fecha:</strong> 8 de febrero de 2024</li>
        </ul>
        
        <h4>Paso 4: Respuesta del deudor</h4>
        <ul>
          <li><strong>Opción elegida:</strong> Oposición parcial (8.000€)</li>
          <li><strong>Motivos:</strong> Defectos en el suministro</li>
          <li><strong>Consecuencia:</strong> Transformación en juicio ordinario</li>
          <li><strong>Cantidad no controvertida:</strong> Ejecución inmediata de 4.000€</li>
        </ul>
        
        <h3>Caso Práctico 3: Ejecución Hipotecaria</h3>
        
        <h4>Situación inicial</h4>
        <p><strong>Ejecutante:</strong> Banco Nacional S.A.<br>
        <strong>Ejecutado:</strong> María González Ruiz<br>
        <strong>Garantía:</strong> Hipoteca sobre vivienda<br>
        <strong>Deuda:</strong> 85.000€</p>
        
        <h4>Paso 1: Demanda ejecutiva</h4>
        <ul>
          <li><strong>Título ejecutivo:</strong> Escritura de préstamo hipotecario</li>
          <li><strong>Certificación registral:</strong> Cargas posteriores</li>
          <li><strong>Liquidación de deuda:</strong> Capital + intereses + costas</li>
          <li><strong>Tasación:</strong> Valor de la finca para subasta</li>
        </ul>
        
        <h4>Paso 2: Auto despachando ejecución</h4>
        <ul>
          <li><strong>Verificación:</strong> Título ejecutivo válido</li>
          <li><strong>Embargo:</strong> Anotación preventiva en Registro</li>
          <li><strong>Requerimiento:</strong> Pago en 10 días</li>
          <li><strong>Advertencia:</strong> Procedimiento de subasta</li>
        </ul>
        
        <h4>Paso 3: Procedimiento de subasta</h4>
        <ul>
          <li><strong>Anuncios:</strong> BOE, portal de subastas, tablón</li>
          <li><strong>Tipo de subasta:</strong> 75% del valor de tasación</li>
          <li><strong>Depósito:</strong> 5% del tipo de subasta</li>
          <li><strong>Celebración:</strong> Sala de vistas del juzgado</li>
        </ul>
        
        <h4>Paso 4: Adjudicación</h4>
        <ul>
          <li><strong>Mejor postor:</strong> Oferta de 95.000€</li>
          <li><strong>Aprobación:</strong> Auto de adjudicación</li>
          <li><strong>Pago del resto:</strong> 30 días</li>
          <li><strong>Escritura:</strong> Otorgamiento ante notario</li>
        </ul>
        
        <h3>Aspectos clave a recordar</h3>
        
        <h4>Plazos procesales</h4>
        <ul>
          <li><strong>Cómputo:</strong> Días hábiles salvo excepciones</li>
          <li><strong>Inicio:</strong> Día siguiente a la notificación</li>
          <li><strong>Vencimiento:</strong> Hasta las 15:00h del último día</li>
          <li><strong>Prórroga:</strong> Solo en casos excepcionales</li>
        </ul>
        
        <h4>Notificaciones</h4>
        <ul>
          <li><strong>Domicilio procesal:</strong> Designado en la demanda</li>
          <li><strong>Métodos:</strong> Correo, comparecencia, edictos</li>
          <li><strong>Efectos:</strong> Desde el conocimiento efectivo</li>
          <li><strong>Nulidad:</strong> Por defectos sustanciales</li>
        </ul>
        
        <h4>Recursos</h4>
        <ul>
          <li><strong>Reposición:</strong> Contra providencias (5 días)</li>
          <li><strong>Apelación:</strong> Contra autos (20 días)</li>
          <li><strong>Casación:</strong> Contra sentencias (20 días)</li>
          <li><strong>Efectos:</strong> Suspensivos o no suspensivos</li>
        </ul>
        
        <h3>Errores frecuentes a evitar</h3>
        <ul>
          <li><strong>Cómputo de plazos:</strong> No incluir días inhábiles</li>
          <li><strong>Competencia:</strong> Verificar territorial y objetiva</li>
          <li><strong>Documentación:</strong> Aportar originales o copias compulsadas</li>
          <li><strong>Tarifas:</strong> Calcular correctamente según cuantía</li>
          <li><strong>Notificaciones:</strong> Seguir el orden legal establecido</li>
        </ul>
        
        <p>La práctica constante con casos reales es la mejor forma de dominar la tramitación procesal. Cada procedimiento tiene sus particularidades, pero siguiendo estos esquemas básicos podrás resolver la mayoría de situaciones que se presenten en el examen y en tu futura actividad profesional.</p>
      `,
      date: "15 de Febrero, 2024",
      category: "Casos Prácticos",
      image: "https://readdy.ai/api/search-image?query=Legal%20case%20files%20and%20procedural%20documents%2C%20practical%20examples%20of%20judicial%20processing%2C%20organized%20legal%20paperwork%2C%20professional%20case%20study%20materials&width=800&height=400&seq=article-6&orientation=landscape",
      readTime: "10 min",
      author: "José Sousa"
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
          <Link to="/blog" className="text-amber-600 hover:text-amber-700">
            ← Volver al blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.content.substring(0, 160).replace(/<[^>]*>/g, ''),
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": article.author,
      "jobTitle": "Preparador de Oposiciones de Justicia"
    },
    "publisher": {
      "@type": "Person",
      "name": "José Sousa",
      "jobTitle": "Preparador de Oposiciones de Justicia"
    },
    "datePublished": new Date(article.date.replace(/(\d+) de (\w+), (\d+)/, (match, day, month, year) => {
      const months = {
        'Enero': '01', 'Febrero': '02', 'Marzo': '03', 'Abril': '04',
        'Mayo': '05', 'Junio': '06', 'Julio': '07', 'Agosto': '08',
        'Septiembre': '09', 'Octubre': '10', 'Noviembre': '11', 'Diciembre': '12'
      };
      return `${year}-${months[month]}-${day.padStart(2, '0')}`;
    })).toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${import.meta.env.VITE_SITE_URL || "https://example.com"}/blog/article/${id}`
    },
    "articleSection": article.category,
    "wordCount": article.content.replace(/<[^>]*>/g, '').split(' ').length
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={`${article.title} | Blog José Sousa - Oposiciones de Justicia`}
        description={article.content.substring(0, 160).replace(/<[^>]*>/g, '')}
        keywords={`${article.category.toLowerCase()}, oposiciones justicia, ${article.title.toLowerCase()}, José Sousa`}
        ogTitle={article.title}
        ogDescription={article.content.substring(0, 160).replace(/<[^>]*>/g, '')}
        ogImage={article.image}
        canonicalUrl={`${import.meta.env.VITE_SITE_URL || "https://example.com"}/blog/article/${id}`}
        structuredData={structuredData}
      />
      
      <Header />
      
      {/* Hero del artículo */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {article.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-amber-100">
              <span>Por {article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime} de lectura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Imagen destacada */}
      <section className="py-0">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="h-96 bg-cover bg-center rounded-2xl shadow-lg -mt-10 relative z-10" style={{
              backgroundImage: `url('${article.image}')`
            }}></div>
          </div>
        </div>
      </section>

      {/* Contenido del artículo */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
                style={{
                  lineHeight: '1.8',
                  fontSize: '18px'
                }}
              />
            </div>

            {/* Navegación */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                Volver al blog
              </Link>
            </div>

            {/* Compartir */}
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comparte este artículo</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const text = encodeURIComponent(`${article.title} - ${article.author}`);
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
                  }}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-facebook-fill"></i>
                  Facebook
                </button>
                <button 
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const text = encodeURIComponent(`${article.title} - ${article.author}`);
                    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
                  }}
                  className="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-twitter-fill"></i>
                  Twitter
                </button>
                <button 
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const text = encodeURIComponent(`${article.title} - ${article.author}`);
                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
                  }}
                  className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-linkedin-fill"></i>
                  LinkedIn
                </button>
                <button 
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const text = encodeURIComponent(`${article.title} - ${article.author}\n\n${url}`);
                    window.open(`https://wa.me/?text=${text}`, '_blank');
                  }}
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-whatsapp-fill"></i>
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticlePage;
