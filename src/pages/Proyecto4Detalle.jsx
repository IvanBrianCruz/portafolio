import { useState, useEffect } from 'react';
import '@justinribeiro/lite-youtube';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/ProyectoDetalle.css';

const PROJECT_DATA = {
  id: 4,
  title: 'Sistema Ágil de Reservas - Equipamiento Tecnológico',
  subtitle: 'Solución escalable de despliegue rápido para la gestión masiva de recursos institucionales',
  description: 'Aplicación web serverless diseñada para automatizar la gestión de turnos, préstamos y reservas de Aulas Digitales Móviles (carritos tecnológicos) y equipos compartidos en cualquier organización.',
  demoUrl: 'https://script.google.com/macros/s/AKfycbycqRRyapZAuSJRFjzSBbO6gOY95EpkyE1CayEed6nI03cnSOFHbficI_e7fpI6pXJx/exec', // Cambiar por tu link real de la demo
  githubUrl: 'https://github.com/IvanBrianCruz', // Cambiar por tu repositorio real
  youtubeId: 'dQw4w9WgXcQ', // Cambiar por tu video demo
  images: [
   'https://i.postimg.cc/hjYTBC8Y/Screenshot-2026-10-23-123043.png',
   'https://i.postimg.cc/RFYKBP12/Screenshot-2026-10-23-123122.png',
   'https://i.postimg.cc/85cMx8WQ/Screenshot-2026-10-23-123141.png'
  ],
  context: 'Las instituciones educativas y corporativas suelen enfrentar un caos logístico al gestionar recursos tecnológicos compartidos (laptops, proyectores, tablets). El seguimiento manual en papel o planillas estáticas genera superposición de horarios, pérdida de equipos y una gran carga administrativa. Se requería una solución tecnológica que no solo resolviera este problema, sino que estuviera pensada para un uso masivo: rápida de configurar, con cero costos de mantenimiento de servidores y fácilmente personalizable para cualquier entidad.',
  solution: 'Diseñé una arquitectura 100% Serverless utilizando Google Apps Script y la API de Google Sheets como motor de base de datos. Esta decisión técnica permite que el sistema se despliegue en minutos en cualquier organización sin requerir infraestructura propia. La aplicación web valida la disponibilidad de los equipos en tiempo real, previene conflictos de horarios, genera reportes de uso listos para imprimir y ofrece un panel de control intuitivo. Su diseño modular permite adaptarla rápidamente a la imagen corporativa y a las reglas de negocio de distintos equipos institucionales.',
  stack: {
    frontend: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
    backend: ['Google Apps Script (Serverless)'],
    database: ['Google Sheets API', 'Google Workspace'],
  },
  features: [
    'Despliegue ágil y escalable: Infraestructura Serverless sin costos de hosting.',
    'Validación en tiempo real para evitar reservas duplicadas o superposición de turnos.',
    'Generación automática de reportes y comprobantes de préstamo listos para impresión.',
    'Altamente personalizable: Diseño adaptable a la identidad visual de diferentes instituciones.',
  ]
};

const Proyecto4Detalle = () => {
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
                alt={`Vista principal del sistema de reservas`} 
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
                  <h4>Frontend</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.frontend.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                  </div>
                </div>

                <div className="stack-group">
                  <h4>Backend (Serverless)</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.backend.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
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
 {/* Video Section 
          {PROJECT_DATA.youtubeId && (
            <section className="detalle-video-section">
              <h2>Video Demostrativo</h2>
              <p>Un recorrido rápido mostrando el despliegue, la personalización y la gestión de reservas en tiempo real.</p>
              
              <div className="youtube-container">
                <lite-youtube videoid={PROJECT_DATA.youtubeId} playlabel="Reproducir video de demostración"></lite-youtube>
              </div>
            </section>
          )}
*/}
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

export default Proyecto4Detalle;