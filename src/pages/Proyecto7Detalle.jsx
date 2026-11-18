import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/ProyectoDetalle.css';

const PROJECT_DATA = {
  id: 7,
  title: 'API REST Atlas - Gestión y Control de Inscripciones y Documentación',
  subtitle: 'Backend RESTful robusto en Node.js, Express y PostgreSQL para la digitalización del IES N° 6',
  description: 'Arquitectura de servicios REST que sirve como cerebro central del ecosistema Atlas. Centraliza autenticación con roles granulares, inscripciones académicas, carga masiva de notas vía Excel y validación criptográfica de documentos con QR.',
  demoUrl: 'https://api-atlas.vercel.app/api/noticias?page=1&limit=12', 
  githubUrl: 'https://github.com/IvanBrianCruz/CURSO-ATLAS', 
  images: [
    'https://i.postimg.cc/7Zm2wzYN/api-baner.webp',
    'https://i.postimg.cc/YCwZfqVH/Screenshot-2026-11-17-220811.png',
    'https://i.postimg.cc/kgdzFXZV/Screenshot-2026-11-17-221234.png',
    'https://i.postimg.cc/wjdZcTPs/Screenshot-2026-11-17-221323.png',
    'https://i.postimg.cc/8zB3ygQF/Screenshot-2026-11-17-221404.png',
    'https://i.postimg.cc/0yqFd23p/Screenshot-2026-11-17-221607.png',
    'https://i.postimg.cc/FHgqPX5d/Screenshot-2026-11-17-221926.png'
  ],
  context: 'El Instituto de Educación Superior N° 6 enfrentaba importantes demoras y uso intensivo de planillas físicas para administrar la matrícula de cientos de alumnos, el registro de calificaciones por cátedra y la emisión de constancias de estudio. Además, los preceptores necesitaban gestionar únicamente a los estudiantes de las carreras que tenían asignadas. Se requería un motor backend seguro, escalable y transaccional capaz de alimentar la plataforma web y la app móvil garantizando integridad de datos y auditoría en cada operación.',
  solution: 'Diseñé y programé una API REST integral en Node.js, Express y PostgreSQL con Sequelize ORM. La solución implementa un sistema estricto de autenticación JWT y autorización basada en contexto y roles (Admin, Secretario Académico, Preceptor, Periodista Estudiantil y Alumno). Incluye un motor de carga masiva de calificaciones mediante hojas de cálculo Excel (.xlsx), validación atómica mediante transacciones de base de datos, servicio de email transaccional con la API de Brevo para activación y reseteo de claves, y un módulo de documentación legal que expide analíticos y certificados con código QR y hash de verificación pública.',
  stack: {
    backend: ['Node.js', 'Express.js', 'Sequelize ORM', 'RESTful API'],
    database: ['PostgreSQL', 'Transacciones ACID', 'pg-hstore'],
    seguridad: ['JWT (JSON Web Tokens)', 'bcrypt', 'express-validator', 'Helmet', 'CORS'],
    servicios: ['Brevo API (Email Transaccional)', 'ExcelJS (Procesamiento .XLSX)', 'Firebase Admin (Push)']
  },
  features: [
    'Autenticación robusta y roles granulares: user, admin, preceptor, secretarioAcademico y periodistaEstudiantil.',
    'Flujo seguro de activación de cuenta por correo y recuperación de contraseñas con tokens temporales vía Brevo.',
    'Gestión integral de alumnos con filtrado avanzado por DNI, estado de legajo y paginación optimizada.',
    'Carga masiva de notas desde planillas Excel con normalización de encabezados y reversión (rollback) automática ante errores.',
    'Generación y verificación pública de documentación estudiantil (Analíticos y Constancias de Alumno Regular) con hash y código QR.',
    'Módulo de inscripciones con validación de cupos y vinculación automática entre usuario y legajo al aprobarse.',
    'Arquitectura modular desacoplada en Controllers, Middlewares, Models y Routes con transacciones SQL concurrentes.'
  ],
  endpoints: [
    { method: 'POST', path: '/api/auth/registro', desc: 'Registro de usuario y despacho de correo de activación' },
    { method: 'POST', path: '/api/auth/login', desc: 'Autenticación con emisión de JWT en cookies seguras' },
    { method: 'GET', path: '/api/alumnos', desc: 'Búsqueda paginada de legajos filtrada por carreras asignadas al preceptor' },
    { method: 'POST', path: '/api/notas/upload-excel', desc: 'Carga masiva de calificaciones analizando archivo .xlsx con ExcelJS' },
    { method: 'POST', path: '/api/solicitudes/:id/aprobar', desc: 'Aprobación de inscripción con creación transaccional de legajo' },
    { method: 'GET', path: '/api/documentacion/verificar/:hash', desc: 'Endpoint público para validar autenticidad de certificados mediante QR' }
  ],
  architectureTree: `atlas-backend/
├── config/
│   └── database.js (Pool PostgreSQL + Sequelize ORM)
├── controllers/
│   ├── authController.js (Login, Registro, Activación, Password)
│   ├── alumnoController.js (CRUD legajos, filtros por preceptor)
│   ├── notaController.js (Carga manual y Excel masivo)
│   ├── inscripcionController.js (Flujo de solicitudes y carreras)
│   └── documentacionController.js (Constancias y QR de verificación)
├── middlewares/
│   ├── authMiddleware.js (Verificación de tokens JWT)
│   ├── roleMiddleware.js (Restricción por roles y asignación de carrera)
│   └── uploadMiddleware.js (Procesamiento multipart con Multer)
├── models/
│   ├── Usuario.js, Alumno.js, Carrera.js
│   ├── Curso.js, Materia.js, Nota.js
│   └── SolicitudInscripcion.js, DocumentoVerificable.js
├── routes/ (Rutas RESTful versionadas)
└── app.js (Configuración de Express, CORS, Helmet y Rate Limiting)`
};

const Proyecto7Detalle = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
      if (e.key === 'ArrowRight' && isFullscreen) {
        setActiveImageIndex((prev) => (prev + 1) % PROJECT_DATA.images.length);
      }
      if (e.key === 'ArrowLeft' && isFullscreen) {
        setActiveImageIndex((prev) => (prev === 0 ? PROJECT_DATA.images.length - 1 : prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % PROJECT_DATA.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? PROJECT_DATA.images.length - 1 : prev - 1));
  };

  return (
    <div className="detalle-wrapper">
      <Header />

      <main className="detalle-main">
        <div className="detalle-container">

          {/* BOTÓN VOLVER */}
          <div className="detalle-nav-top">
            <a href="/proyectos" className="btn-back">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Volver a Proyectos
            </a>
          </div>

          {/* CABECERA */}
          <header className="detalle-header">
            <h1 className="detalle-title">{PROJECT_DATA.title}</h1>
            <p className="detalle-subtitle">{PROJECT_DATA.subtitle}</p>

            <div className="detalle-actions">
              <a href={PROJECT_DATA.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-action-primary">
                Ver API ↗
              </a>
               {/* <a href={PROJECT_DATA.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-action-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                Ver Repositorio en GitHub
              </a>*/}
            </div>
          </header>

          {/* GALERÍA */}
          <section className="detalle-gallery">
            <div
              className="gallery-main-view"
              onClick={() => setIsFullscreen(true)}
              title="Click para ver en pantalla completa"
            >
              <img
                src={PROJECT_DATA.images[activeImageIndex]}
                alt="Vista de la API REST Atlas"
                className="gallery-main-img"
              />
              <div className="gallery-expand-hint">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
              </div>
            </div>

            <div className="gallery-thumbnails">
              {PROJECT_DATA.images.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`thumbnail-btn ${activeImageIndex === index ? 'active' : ''}`}
                >
                  <img src={img} alt={`Miniatura ${index + 1}`} />
                </button>
              ))}
            </div>
          </section>

          {/* CONTENIDO DEL CASO */}
          <div className="detalle-content-grid">
            <div className="content-text-col">
              <section className="content-section">
                <h2>El Desafío</h2>
                <p>{PROJECT_DATA.context}</p>
              </section>

              <section className="content-section">
                <h2>La Solución</h2>
                <p>{PROJECT_DATA.solution}</p>
                <ul className="features-list">
                  {PROJECT_DATA.features.map((feat, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Endpoints Destacados */}
              <section className="content-section">
                <h2>Endpoints Principales</h2>
                <p>Mapeo de rutas RESTful con autenticación y validación de esquemas:</p>
                <div className="endpoints-table-wrapper">
                  {PROJECT_DATA.endpoints.map((ep, idx) => (
                    <div key={idx} className="endpoint-item">
                      <span className={`method-badge ${ep.method.toLowerCase()}`}>{ep.method}</span>
                      <code className="endpoint-path">{ep.path}</code>
                      <span className="endpoint-desc">{ep.desc}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Arquitectura */}
              <section className="content-section">
                <h2>Arquitectura de Carpetas Backend</h2>
                <div className="detalle-code-box">
                  <pre className="detalle-code-tree">
                    <code>{PROJECT_DATA.architectureTree}</code>
                  </pre>
                </div>
              </section>

              {/* Despliegue Local 
              <section className="content-section">
                <h2>Instalación y Despliegue Local</h2>
                <div className="detalle-terminal-box">
                  <div className="terminal-header">
                    <span className="terminal-dot red"></span>
                    <span className="terminal-dot yellow"></span>
                    <span className="terminal-dot green"></span>
                    <span className="terminal-title">bash - atlas-backend</span>
                  </div>
                  <div className="terminal-body">
                    <p><span className="t-prompt">$</span> git clone https://github.com/IvanBrianCruz/CURSO-ATLAS.git</p>
                    <p><span className="t-prompt">$</span> cd CURSO-ATLAS</p>
                    <p><span className="t-prompt">$</span> npm install</p>
                    <p className="t-comment"># Configurar variables en .env (DATABASE_URL, JWT_SECRET, BREVO_KEY)</p>
                    <p><span className="t-prompt">$</span> npm run dev</p>
                    <p className="t-success">🚀 Atlas API corriendo en http://localhost:3000 con PostgreSQL conectado.</p>
                  </div>
                </div>
              </section>*/}
            </div>

            {/* Sidebar de Tecnologías */}
            <div className="content-stack-col">
              <div className="stack-card">
                <h3>Tecnologías</h3>

                <div className="stack-group">
                  <h4>Backend & API</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.backend.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="stack-group">
                  <h4>Base de Datos</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.database.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="stack-group">
                  <h4>Seguridad & Auth</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.seguridad.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="stack-group">
                  <h4>Servicios Externos</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.servicios.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* MODAL FULLSCREEN */}
      {isFullscreen && (
        <div className="fullscreen-modal" onClick={() => setIsFullscreen(false)}>
          <button className="fullscreen-close" onClick={() => setIsFullscreen(false)}>✕</button>

          <button className="fullscreen-nav prev" onClick={prevImage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>

          <img
            src={PROJECT_DATA.images[activeImageIndex]}
            alt="Vista expandida"
            className="fullscreen-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button className="fullscreen-nav next" onClick={nextImage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>

          <div className="fullscreen-counter">
            {activeImageIndex + 1} / {PROJECT_DATA.images.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Proyecto7Detalle;
