import '../styles/Experiencia.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Desarrollador Full Stack & Móvil',
      company: 'Institución de Educación Superior (IES)',
      period: '1 Año - Proyecto en Producción 2025',
      description: 'Lideré el desarrollo integral (Solo Developer) de una plataforma de gestión académica para digitalizar procesos administrativos manuales. El sistema permite la administración de legajos de alumnos, generación automática de documentación legal (analíticos, constancias) y gestión de novedades.',
      achievements: [
        'Desarrollo de API REST y Panel de Administración Web.',
        'Automatización de trámites: Reducción del uso de papel mediante generación de PDFs dinámicos.',
        'App Móvil Android: Implementación de sistema de notificaciones push en tiempo real para la comunidad educativa.',
        'Despliegue a producción y mantenimiento del sistema.'
      ],
      tech: ['React + Vite', 'Node.js', 'Android', 'PosgreSQL', 'Git, GitHub', "Supabase", "Firebase" ]
    },
    {
      id: 2,
      role: 'Desarrollador Web & Facilitador TIC',
      company: 'Escuela Secundaria N°38 "Las Pampitas"',
      period: 'Residencia Profesional 2025',
      description: 'Diseño e implementación del portal web institucional con doble propósito: captación de matrícula y herramienta pedagógica. Desarrollé un CMS (Gestor de Contenidos) a medida que permite a docentes y alumnos publicar noticias y proyectos.',
      achievements: [
        'Creación de módulo de Login y gestión de noticias para usuarios no técnicos.',
        'Integración pedagógica: La plataforma se utiliza para enseñar creación de contenido digital e inserción en TIC.',
        'Diseño de interfaz (UI) orientada a la identidad institucional.',
        'Optimización SEO para mejorar la visibilidad de la escuela en la web.'
      ],
      tech: ['React', 'CSS Modules', 'Node.js', 'Corel Draw', 'UX/UI', "Tiny Cloud" ]
    }
  ];

  return (
    <section className="experience-section" id="experiencia">
      <div className="experience-container">
        
        {/* Encabezado de la sección */}
        <div className="experience-header">
          <h2 className="experience-title">
            <span className="experience-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </span>
            Experiencia Profesional
          </h2>
          <p className="experience-subtitle">
            Soluciones tecnológicas desarrolladas desde la toma de requerimientos hasta el despliegue en producción.
          </p>
        </div>

        {/* Línea de tiempo */}
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              
              {/* Punto en la línea de tiempo */}
              <div className="experience-dot"></div>
              
              {/* Tarjeta de contenido */}
              <div className="experience-card">
                <div className="experience-card-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>

                <p className="experience-desc">{exp.description}</p>

                <ul className="experience-achievements">
                  {exp.achievements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <div className="experience-tags">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="experience-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;