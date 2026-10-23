import { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Inicio.css';

// Array de Experiencia Profesional actualizado (Orden cronológico inverso: 2026 -> 2025)
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
    role: 'Desarrollador Full Stack & Móvil',
    institution: 'Institución de Educación Superior (IES)',
    period: '2025 - Actualidad (En evolución & Prueba Piloto)',
    description:
      'Desarrollo integral (Solo Developer) de una plataforma de gestión académica para digitalizar procesos administrativos. Actualmente el proyecto continúa en desarrollo activo, sumando nuevas funcionalidades y ejecutando una prueba piloto real en la institución con la participación de alumnos en el módulo de noticias.',
    achievements: [
      'Prueba piloto activa: Validación en entorno real con estudiantes gestionando e interactuando en el módulo de noticias institucionales.',
      'Desarrollo y mejora continua de API REST, Panel de Administración Web y generación de documentación en PDF.',
      'App Móvil Android con sistema de notificaciones push en tiempo real para la comunidad educativa.',
      'Mantenimiento evolutivo, optimización de rendimiento y despliegue continuo en producción.',
    ],
    stack: ['React + Vite', 'Node.js', 'Android', 'PostgreSQL', 'Git & GitHub', 'Supabase', 'Firebase'],
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

// Array de Proyectos para el Carrusel (Al hacer click lleva a /proyectos/:id)
const PROJECTS = [
  {
    id: 1,
    title: 'Portal Web & Arcade Python - E.E.T. N° 2 San Pedro',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    description:
      'Landing page institucional con historia escolar, módulo de noticias y sección interactiva con videojuegos en Python creados por alumnos de 4° año.',
    stack: ['React + Vite', 'Node.js', 'PostgreSQL', 'Supabase', 'Python'],
  },
  {
    id: 2,
    title: 'Plataforma Académica & App Móvil IES',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description:
      'Sistema integral en evolución continua con prueba piloto estudiantil en el módulo de noticias, gestión de legajos y App Android con notificaciones push.',
    stack: ['React + Vite', 'Node.js', 'PostgreSQL', 'Android', 'Firebase'],
  },
  {
    id: 3,
    title: 'Portal Institucional & CMS Escuela N° 38',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description:
      'Plataforma web con gestor de contenidos personalizado para publicación de proyectos estudiantiles, noticias y panel docente.',
    stack: ['React', 'Node.js', 'CSS Modules', 'Tiny Cloud', 'SEO'],
  },
  {
    id: 4,
    title: 'Sistema de Reservas Aula Digital Móvil',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    description:
      'Aplicación web para gestión de turnos y reservas de equipamiento tecnológico escolar con reportes imprimibles y control de horarios.',
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
              <span className="hero-greeting">Hola, soy</span>
              <h1 className="section-title">Cruz Delgado Brian Ivan</h1>

              <div className="hero-subtitle-wrapper">
                <span className="hero-role">Desarrollador Full Stack</span>
                <span className="hero-divider">|</span>
                <span className="hero-badge-it">Formación Docente en IT</span>
              </div>

              <p className="hero-description">
                Transformo ideas complejas en <strong>software de calidad e innovador</strong>, construyendo
                soluciones a medida. Combino la <strong>lógica técnica</strong> de tecnologías modernas (React,
                APIs, Ecosistema JS) con las <strong>habilidades blandas</strong> adquiridas en mi formación
                profesional docente.
              </p>

              <p className="hero-description">
                No solo escribo software; entiendo el valor de la <strong>comunicación clara</strong>, la
                planificación estratégica y la documentación precisa. Mi capacidad para gestionar
                grupos y exponer proyectos me permite integrarme en equipos ágiles, aportando
                no solo soluciones técnicas, sino también cohesión y aprendizaje continuo.
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

            {/* Columna Derecha: Foto + Card de Código reubicada abajo para no tapar la cara */}
            <div className="hero-visual">
              <div className="photo-card-Tilt">
                <img
                  src="https://i.postimg.cc/nLfSwTYf/AP1Gcz-PD8n-U-u-KYf-Ijnb3C-ZD8QNUEYj.png"
                  alt="Cruz Delgado Brian Ivan"
                  className="hero-photo"
                />
              </div>

              {/* Ventana de código estilo macOS posicionada más abajo */}
              <div className="code-window">
                <div className="code-window-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="code-filename">developer.js</span>
                </div>
                <pre className="code-content">
                  <code>
                    <span className="c-keyword">const</span> <span className="c-var">developer</span> = {'{\n'}
                    {'  '}name: <span className="c-string">"Cruz Delgado Brian Ivan"</span>,{'\n'}
                    {'  '}skills: [<span className="c-string">"React"</span>, <span className="c-string">"Teaching"</span>],{'\n'}
                    {'  '}hardWorker: <span className="c-bool">true</span>{'\n'}
                    {'};'}
                  </code>
                </pre>
              </div>
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
              Soluciones tecnológicas e iniciativas pedagógicas desarrolladas desde la propuesta hasta su implementación real en instituciones educativas.
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
                Explora mis desarrollos recientes. Haz clic en cualquier tarjeta para ver el detalle técnico.
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