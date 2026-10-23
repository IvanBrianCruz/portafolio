import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/ProyectoDetalle.css';

const PROJECT_DATA = {
  id: 2,
  title: 'Plataforma Académica & App Móvil IES',
  subtitle: 'Digitalización integral de procesos administrativos y comunicación institucional',
  description: 'Desarrollo de extremo a extremo (Solo Developer) de un ecosistema que incluye una API REST, un Panel de Administración Web para gestión de legajos y generación de PDFs, y una App Android para estudiantes.',
  demoUrl: 'https://frontend-ten-lemon-21.vercel.app/', 
  githubUrl: 'https://github.com/IvanBrianCruz', 
  googleDriveVideoUrl: 'https://drive.google.com/file/d/11Vk-hlX9ohUaW_1dorwFqlKZzSMc5hLg/preview', 
  images: [
    "https://i.postimg.cc/26t86MKK/Screenshot-2026-10-23-115508.png",
    "https://i.postimg.cc/wvrTvZGw/Screenshot-2026-10-23-115548.png",
    "https://i.postimg.cc/xCZTCh4F/Screenshot-2026-10-23-115603.png",
    "https://i.postimg.cc/FR6sR864/Screenshot-2026-10-23-115628.png",
    "https://i.postimg.cc/KzWvzwWy/Screenshot-2026-10-23-115645.png",
    "https://i.postimg.cc/SRzQzV0k/Screenshot-2026-10-23-115701.png",
    "https://i.postimg.cc/1XNRNMxQ/Screenshot-2026-10-23-115744.png",
    "https://i.postimg.cc/1XNRNMxS/Screenshot-2026-10-23-115803.png",
    "https://i.postimg.cc/PxJ5dT2H/Screenshot-2026-10-23-121744.png",
    "https://i.postimg.cc/SsRxmkDL/Screenshot-2026-10-23-121757.png",
    "https://i.postimg.cc/63qpBtYL/Screenshot-2026-10-23-121828.png",
    "https://i.postimg.cc/SsRxmkDG/Screenshot-2026-10-23-121841.png",
    "https://i.postimg.cc/G2tmbdqk/Screenshot-2026-10-23-121903.png",
    "https://i.postimg.cc/63P53gmh/Screenshot-2026-10-23-121941.png"
  ],
  context: 'La Institución de Educación Superior (IES) dependía de procesos manuales y un alto consumo de papel para la administración de legajos, emisión de constancias y reportes analíticos. Además, la comunicación oficial de novedades a los estudiantes carecía de inmediatez, por lo que se requería un canal moderno, directo y notificado en tiempo real.',
  solution: 'Diseñé y programé un sistema integral compuesto por tres partes. Primero, una API REST centralizada en Node.js y PostgreSQL. Segundo, un Panel Web en React donde el personal administrativo puede gestionar estudiantes y generar documentación legal (PDFs) con un clic. Tercero, una Aplicación Móvil nativa para Android conectada a Firebase, permitiendo a los alumnos recibir notificaciones push instantáneas sobre noticias y su estado académico. Actualmente el proyecto se encuentra evolucionando con una prueba piloto activa.',
  stack: {
    frontend: ['React', 'Vite', 'CSS'],
    backend: ['Node.js', 'Express', 'PDF Generation'],
    mobile: ['Android', 'Expo React', 'Firebase Push'],
    database: ['PostgreSQL', 'Supabase'],
  },
  features: [
    'Automatización de trámites: Generación dinámica de reportes y analíticos en formato PDF.',
    'App Móvil Android con sistema de notificaciones push en tiempo real para estudiantes.',
    'Administración digital completa de legajos y documentación escolar.',
    'Arquitectura segura con despliegue en producción y en etapa de prueba piloto interactiva.',
  ]
};

const Proyecto2Detalle = () => {
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
              </a>    */}
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
                alt={`Vista principal del proyecto IES`} 
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
                  <h4>Frontend Web</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.frontend.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                  </div>
                </div>

                <div className="stack-group">
                  <h4>Backend & API</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.backend.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                  </div>
                </div>
                
                <div className="stack-group">
                  <h4>App Móvil</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.mobile.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                  </div>
                </div>

                <div className="stack-group">
                  <h4>Base de Datos</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.database.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {PROJECT_DATA.googleDriveVideoUrl && (
            <section className="detalle-video-section">
              <h2>Video Demostrativo</h2>
              <p>Un recorrido por el Panel Web de administración y la App Android recibiendo notificaciones.</p>
              
              <div className="youtube-container">
                <iframe 
                  src={PROJECT_DATA.googleDriveVideoUrl} 
                  width="100%" 
                  height="480" 
                  style={{ border: 'none' }}
                  allow="autoplay"
                  title="Video Demostrativo del Proyecto"
                ></iframe>
              </div>
            </section>
          )}

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

export default Proyecto2Detalle;