import { useState, useEffect } from 'react';
import '@justinribeiro/lite-youtube';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/ProyectoDetalle.css';

const PROJECT_DATA = {
  id: 3,
  title: 'Portal Institucional & CMS Escuela N° 38',
  subtitle: 'Plataforma web con gestor de contenidos a medida y enfoque pedagógico',
  description: 'Diseño e implementación de un portal web institucional para la Escuela Secundaria N° 38 "Las Pampitas". Incluye un CMS (Gestor de Contenidos) desarrollado a medida para usuarios no técnicos.',
  demoUrl: 'https://secu38.vercel.app/', // Cambiar por tu link real si la escuela lo tiene público
  githubUrl: 'https://github.com/IvanBrianCruz', // Cambiar por el repo real
  youtubeId: 'dQw4w9WgXcQ', // Cambiar por tu video demo
  images: [
    "https://i.postimg.cc/FzmxkkSW/Screenshot-2026-10-23-112927.png",
    "https://i.postimg.cc/7hVn3P1c/Screenshot-2026-10-23-112940.png",
    "https://i.postimg.cc/9Xtb513n/Screenshot-2026-10-23-113001.png",
    "https://i.postimg.cc/tJ5N3Rt6/Screenshot-2026-10-23-113030.png",
    "https://i.postimg.cc/5y3SB9qY/Screenshot-2026-10-23-113059.png"
  ],
  context: 'La Escuela Secundaria N° 38 necesitaba una presencia digital moderna para mejorar su visibilidad institucional y captar nueva matrícula. Simultáneamente, como parte de mi Residencia Profesional, identifiqué la oportunidad de convertir esta necesidad en una herramienta pedagógica: un espacio donde docentes y alumnos pudieran interactuar con la tecnología mediante la creación y publicación de contenido real.',
  solution: 'Desarrollé una plataforma web responsiva con optimización SEO para la identidad de la escuela. El núcleo del proyecto es un CMS (Content Management System) creado desde cero, equipado con un editor intuitivo (Tiny Cloud) y sistema de autenticación. Actualmente, el portal no solo difunde información oficial, sino que cuenta con una prueba piloto activa donde los propios estudiantes redactan y publican noticias, desarrollando sus competencias digitales (TIC) en un entorno de producción real.',
  stack: {
    frontend: ['React', 'CSS Modules', 'UX/UI (Corel Draw)'],
    backend: ['Node.js', 'Autenticación', 'Tiny Cloud API'],
    database: ['Bases de Datos Relacionales', 'Gestión de Usuarios'],
  },
  features: [
    'CMS personalizado con editor de texto enriquecido para usuarios sin conocimientos técnicos.',
    'Módulo de noticias operado directamente por estudiantes (Integración pedagógica TIC).',
    'Sistema de Login y control de acceso seguro para administración de contenido.',
    'Optimización SEO (Search Engine Optimization) para mejorar el posicionamiento web del colegio.',
  ]
};

const Proyecto3Detalle = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
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
          
          <div className="detalle-nav-top">
            <a href="/proyectos" className="btn-back">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Volver a Proyectos
            </a>
          </div>

          <header className="detalle-header">
            <h1 className="detalle-title">{PROJECT_DATA.title}</h1>
            <p className="detalle-subtitle">{PROJECT_DATA.subtitle}</p>

            <div className="detalle-actions">
              <a href={PROJECT_DATA.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-action-primary">
                Ver Demo en Vivo ↗
              </a>
              {/* <a href={PROJECT_DATA.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-action-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                Ver Código Fuente
              </a> */}
            </div>
          </header>

          <section className="detalle-gallery">
            <div 
              className="gallery-main-view" 
              onClick={() => setIsFullscreen(true)}
              title="Click para ver en pantalla completa"
            >
              <img 
                src={PROJECT_DATA.images[activeImageIndex]} 
                alt={`Vista principal del proyecto de la Escuela 38`} 
                className="gallery-main-img"
              />
              <div className="gallery-expand-hint">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
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
            </div>

            <div className="content-stack-col">
              <div className="stack-card">
                <h3>Tecnologías</h3>
                
                <div className="stack-group">
                  <h4>Frontend & Diseño</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.frontend.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                  </div>
                </div>

                <div className="stack-group">
                  <h4>Backend & CMS</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.backend.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                  </div>
                </div>
                
                <div className="stack-group">
                  <h4>Estructura de Datos</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.database.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*{PROJECT_DATA.youtubeId && (
            <section className="detalle-video-section">
              <h2>Video Demostrativo</h2>
              <p>Un recorrido por el funcionamiento del CMS y la interfaz pública de la escuela.</p>
              
              <div className="youtube-container">
                <lite-youtube videoid={PROJECT_DATA.youtubeId} playlabel="Reproducir video de demostración"></lite-youtube>
              </div>
            </section>
          )} */}

        </div>
      </main>

      {isFullscreen && (
        <div className="fullscreen-modal" onClick={() => setIsFullscreen(false)}>
          <button className="fullscreen-close" onClick={() => setIsFullscreen(false)}>✕</button>
          
          <button className="fullscreen-nav prev" onClick={prevImage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <img 
            src={PROJECT_DATA.images[activeImageIndex]} 
            alt="Vista expandida" 
            className="fullscreen-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button className="fullscreen-nav next" onClick={nextImage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
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

export default Proyecto3Detalle;