import { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Inicio.css';

// Array de Experiencia Profesional actualizado
const EXPERIENCES = [
  {
    id: 1,
    role: 'Docente en Programación II & Desarrollador Web Full Stack',
    institution: 'Escuela de Educación Técnica N° 2 "Dr. Horacio Guzmán" - San Pedro, Jujuy',
    period: 'Septiembre 2026 - Actualidad',
    description:
      'Lideré una iniciativa propia aprobada por la institución para diseñar y desarrollar su plataforma web oficial, articulando mi rol profesional como desarrollador con mi labor docente frente a los alumnos de 4° año en la materia Programación II.',
    achievements: [
      'Desarrollo de Landing Page institucional con la historia, oferta académica e información relevante del establecimiento.',
      'Implementación de un módulo dinámico de noticias y comunicados para toda la comunidad educativa.',
      'Articulación pedagógica (Programación II - 4° Año): Guié a los estudiantes en el desarrollo de videojuegos en Python, los cuales fueron integrados y publicados en la plataforma para que toda la comunidad escolar pueda jugarlos.',
      'Arquitectura moderna con base de datos relacional en la nube y control de versiones colaborativo.',
    ],
    stack: ['React + Vite', 'Node.js', 'PostgreSQL', 'Supabase', 'Python', 'Git & GitHub'],
  },
  {
    id: 2,
    role: 'Desarrollador Full Stack (Frontend & API REST)',
    institution: 'Instituto de Educación Superior (IES N° 6)',
    period: '2025 - Actualidad (En evolución & Prueba Piloto)',
    description:
      'Desarrollo integral (Solo Developer) de la plataforma web académica y backend RESTful (Atlas) para digitalizar procesos administrativos y académicos. Cuenta con prueba piloto activa con participación estudiantil en la gestión de noticias escolares.',
    achievements: [
      'Prueba piloto activa: Validación en entorno real con estudiantes redactando y publicando en el módulo de noticias institucionales.',
      'Desarrollo de API RESTful con Sequelize ORM y PostgreSQL, con autenticación JWT y roles granulares.',
      'Generación automatizada de analíticos y constancias de alumno regular en PDF con código QR verificable.',
      'Mantenimiento evolutivo, optimización de consultas SQL y despliegue continuo en producción.',
    ],
    stack: ['React + Vite', 'Node.js', 'PostgreSQL', 'Sequelize', 'Supabase', 'Brevo API', 'Git & GitHub'],
  },
  {
    id: 3,
    role: 'Desarrollador Web & Facilitador TIC',
    institution: 'Escuela Secundaria N° 38 "Las Pampitas"',
    period: 'Residencia Profesional 2025 - Evolución Continua',
    description:
      'Diseño e implementación del portal web institucional con doble propósito: difusión escolar y herramienta pedagógica. El sistema sigue recibiendo mejoras funcionales y cuenta con una prueba piloto activa donde los alumnos publican y gestionan contenidos en el módulo de noticias.',
    achievements: [
      'Módulo de noticias en prueba piloto: Participación directa de los estudiantes en la redacción y publicación de novedades escolares.',
      'Desarrollo de CMS (Gestor de Contenidos) a medida y módulo de autenticación para usuarios no técnicos.',
      'Diseño de interfaz (UI) adaptada a la identidad institucional y optimización SEO.',
    ],
    stack: ['React', 'CSS Modules', 'Node.js', 'Corel Draw', 'UX/UI', 'Tiny Cloud'],
  },
];

// Array de Proyectos para el Carrusel
const PROJECTS = [
  {
    id: 1,
    title: 'Portal Web & Arcade Python - E.E.T. N° 2 San Pedro',
    image: 'https://i.postimg.cc/tCptvVrC/image.png',
    description:
      'Landing page institucional con historia escolar, módulo de noticias y sección interactiva con videojuegos en Python creados por alumnos de 4° año.',
    stack: ['React + Vite', 'Node.js', 'PostgreSQL', 'Supabase', 'Python'],
  },
  {
    id: 2,
    title: 'Plataforma Académica IES - Sistema Web',
    image: 'https://i.postimg.cc/26t86MKK/Screenshot-2026-10-23-115508.png',
    description:
      'Sistema institucional web con prueba piloto estudiantil en el módulo de noticias, gestión de legajos y analíticos en PDF con validación QR.',
    stack: ['React + Vite', 'Node.js', 'PostgreSQL', 'Supabase', 'QR Docs'],
  },
  {
    id: 6,
    title: 'Propuesta Web Oficial - Desafío Digital ExpoJuy 2026',
    image: 'https://i.postimg.cc/YSGn0Ks1/image.png',
    description:
      'Portal oficial para la feria productiva ExpoJuy con directorio interactivo de expositores, agenda cronológica y pases digitales con QR.',
    stack: ['React + Vite', 'React Router', 'CSS Vanilla', 'Pases QR'],
  },
  {
    id: 7,
    title: 'API REST Atlas - Backend sistema de gestión',
    image: 'https://i.postimg.cc/7Zm2wzYN/api-baner.webp',
    description:
      'Backend RESTful en Node.js, Express y PostgreSQL con autenticación JWT, carga masiva de notas desde Excel y verificación de certificados.',
    stack: ['Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'JWT'],
  },
  {
    id: 9,
    title: 'NLP - Nube Local Privada (Servidor Offline)',
    image: 'https://i.postimg.cc/x1g6jG3S/Screenshot-2026-11-15-204217.png',
    description:
      'Servidor autónomo offline para compartir archivos en LAN/Wi-Fi sin internet. Compilado a .EXE nativo con subida Drag & Drop y código QR.',
    stack: ['Node.js', 'Express', 'Vanilla JS', 'Zero CDNs', '.EXE Standalone'],
  },
  {
    id: 8,
    title: 'P2P Local Bridge - Pruebas en Intranet',
    image: 'https://i.postimg.cc/QxS0qk9f/image.png',
    description:
      'Proxy inverso y herramienta CLI/Web para exponer servidores de desarrollo en la red Wi-Fi local sin subir a producción ni depender de Internet.',
    stack: ['Node.js', 'Express', 'HTTP Proxy', 'QR Generator'],
  },
  {
    id: 3,
    title: 'Portal Institucional & CMS Escuela N° 38',
    image: 'https://i.postimg.cc/MZFqdyZp/image.png',
    description:
      'Plataforma web con gestor de contenidos personalizado para publicación de proyectos estudiantiles, noticias y panel docente.',
    stack: ['React', 'Node.js', 'CSS Modules', 'Tiny Cloud', 'SEO'],
  },
  {
    id: 5,
    title: 'Sistema de Escrutinio y Votación FNE',
    image: 'https://i.postimg.cc/zDSPfN6W/image.png',
    description:
      'Aplicación web de escrutinio en red local blindada con Java Spring Boot y Spring Security para elecciones estudiantiles seguras.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Intranet'],
  },
  {
    id: 4,
    title: 'Sistema de Reservas Aula Digital Móvil',
    image: 'https://i.postimg.cc/L5ZhsMYN/image.png',
    description:
      'Aplicación web serverless para gestión de turnos y préstamos de equipamiento escolar con reportes imprimibles y control de disponibilidad.',
    stack: ['JavaScript', 'Google Apps Script', 'Google Sheets API', 'HTML/CSS'],
  },
];

const Inicio = () => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 380;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="inicio-wrapper">
      {/* 1. Navbar Superior */}
      <Header />

      <main className="inicio-main">
        {/* ================= SECCIÓN HERO (INICIO) ================= */}
        <section id="inicio" className="hero-section">
          <div className="hero-glow-bg"></div>

          <div className="hero-container">
            {/* Columna Izquierda: Información */}
            <div className="hero-content">
              <span className="hero-greeting">&lt; Desarrollador Full Stack &amp; Docente IT /&gt;</span>
              <h1 className="hero-title">Cruz Delgado Brian Ivan</h1>

              <div className="hero-subtitle-wrapper">
                <span className="hero-role">Full Stack Tech Developer</span>
                <span className="hero-divider">|</span>
                <span className="hero-badge-it">Profesor de Informática</span>
              </div>

              <p className="hero-description">
                Transformo ideas complejas en <strong>software escalable, moderno y funcional</strong>, construyendo
                soluciones a medida tanto en el ecosistema web como en arquitecturas offline y de intranet. Combino la <strong>lógica técnica</strong> de tecnologías modernas (React,
                Node.js, PostgreSQL, Java y Spring Boot) con las <strong>habilidades interpersonales y pedagógicas</strong> adquiridas en mi formación docente.
              </p>

              <p className="hero-description">
                No solo escribo código limpio; entiendo el valor de la <strong>comunicación asertiva</strong>, la
                planificación estratégica y la documentación precisa. Mi experiencia liderando aulas técnicas y coordinando proyectos en producción me permite integrarme fluidamente en equipos ágiles, aportando resolución técnica, visión de producto y aprendizaje continuo.
              </p>

              {/* Botones de Acción */}
              <div className="hero-buttons">
                <a href="/cv-brian-ivan-cruz-delgado.pdf" download className="btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" x2="12" y1="15" y2="3"/>
                  </svg>
                  Descargar CV
                </a>

                <a
                  href="https://www.linkedin.com/in/ivan-brian-cruz-7a42b4173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  LinkedIn
                </a>

                <a
                  href="https://github.com/IvanBrianCruz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Columna Derecha: Foto + Logo Badge + Card de Código */}
            <div className="hero-visual">
              <div className="photo-card-Tilt">
                <img
                  src="https://i.postimg.cc/nLfSwTYf/AP1Gcz-PD8n-U-u-KYf-Ijnb3C-ZD8QNUEYj.png"
                  alt="Cruz Delgado Brian Ivan"
                  className="hero-photo"
                />
                <div className="hero-logo-floating-badge" title="Logo Oficial Brian Iván Cruz">
                  <img src="https://i.postimg.cc/y83nQHm6/logo.png" alt="Logo Oficial" className="hero-floating-logo-img" />
                </div>
              </div>

              {/* Ventana de código estilo macOS 
              <div className="code-window">
                <div className="code-window-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="code-filename">brianCruz.config.js</span>
                </div>
                <pre className="code-content">
                  <code>
                    <span className="c-keyword">const</span> <span className="c-var">developer</span> = {'{\n'}
                    {'  '}name: <span className="c-string">"Cruz Delgado Brian Ivan"</span>,{'\n'}
                    {'  '}role: <span className="c-string">"Full Stack Tech Developer"</span>,{'\n'}
                    {'  '}teaching: <span className="c-string">"Profesor de Informática"</span>,{'\n'}
                    {'  '}stack: [<span className="c-string">"React"</span>, <span className="c-string">"Node"</span>, <span className="c-string">"Postgres"</span>, <span className="c-string">"Java"</span>],{'\n'}
                    {'  '}openToOpportunities: <span className="c-bool">true</span>{'\n'}
                    {'};'}
                  </code>
                </pre>
              </div>*/}
            </div>
          </div>
        </section>

        {/* ================= SECCIÓN EXPERIENCIA PROFESIONAL ================= */}
        <section id="experiencia" className="experience-section">
          <div className="section-header">
            <div className="section-title-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="section-icon">
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
                <path d="M22 10v6"/>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
              </svg>
              <h2 className="section-title">Experiencia Profesional</h2>
            </div>
            <p className="section-subtitle">
              Soluciones tecnológicas e iniciativas pedagógicas desarrolladas desde la propuesta de arquitectura hasta su puesta en producción e impacto real en la comunidad.
            </p>
          </div>

          <div className="timeline-container">
            {EXPERIENCES.map((exp) => (
              <article key={exp.id} className="timeline-card">
                <div className="timeline-dot"></div>

                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-institution">{exp.institution}</h4>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>

                <p className="timeline-description">{exp.description}</p>

                <ul className="timeline-achievements">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx}>
                      <span className="bullet-arrow">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="timeline-tags">
                  {exp.stack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= SECCIÓN CARRUSEL DE PROYECTOS ================= */}
        <section id="proyectos" className="projects-section">
          <div className="projects-header-row">
            <div>
              <h2 className="section-title">Proyectos Destacados</h2>
              <p className="section-subtitle">
                Explora mis desarrollos más representativos. Haz clic en cualquier tarjeta para ver el estudio de caso técnico completo.
              </p>
            </div>

            <div className="carousel-controls">
              <button
                type="button"
                onClick={() => scrollCarousel('left')}
                className="carousel-btn"
                aria-label="Anterior proyecto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel('right')}
                className="carousel-btn"
                aria-label="Siguiente proyecto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="carousel-track" ref={carouselRef}>
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href={`/proyectos/${project.id}`}
                className="project-card"
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <span className="project-view-badge">
                    Ver proyecto ↗
                  </span>
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tags">
                    {project.stack.map((tech, idx) => (
                      <span key={idx} className="tech-tag-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* 2. Footer Inferior */}
      <Footer />
    </div>
  );
};

export default Inicio;
