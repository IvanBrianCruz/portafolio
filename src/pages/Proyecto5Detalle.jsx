import { useState, useEffect } from 'react';
import '@justinribeiro/lite-youtube';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/ProyectoDetalle.css';
const PROJECT_DATA = {
  id: 5,
  title: 'Sistema de Escrutinio y Votación en Tiempo Real',
  subtitle: 'Plataforma segura de Intranet con Spring Security para elecciones institucionales',
  description: 'Aplicación web de backend robusto diseñada para operar en redes locales (cerradas al exterior) garantizando máxima seguridad. Permite la generación de credenciales, control de acceso y contabilización dinámica de votos.',
  demoUrl: '#', // Puedes dejarlo inactivo o poner un link a un video si es un sistema cerrado
  githubUrl: 'https://github.com/IvanBrianCruz/FNE-2025.git', // Tu repo real
  youtubeId: 'Ybc86TleBg8', // Video demo del sistema funcionando
  images: [
  'https://i.postimg.cc/02nWgvMt/Screenshot-2026-10-23-124303.png',
  'https://i.postimg.cc/X74HDqJT/Screenshot-2026-10-23-124321.png',
  'https://i.postimg.cc/9FC8N0Ms/Screenshot-2026-10-23-124340.png',
  'https://i.postimg.cc/fTD2gyLF/Screenshot-2026-10-23-124357.png',
  'https://i.postimg.cc/J4x6w8DK/Screenshot-2026-10-23-124408.png',
  'https://i.postimg.cc/FspWtvdC/Screenshot-2026-10-23-124424.png',
  'https://i.postimg.cc/TYf7H1w7/Screenshot-2026-10-23-124437.png'
  ],
  context: 'Las elecciones y certámenes institucionales suelen padecer de lentitud en el escrutinio, errores humanos en el conteo manual y preocupaciones sobre la transparencia. Se requería una solución digital capaz de manejar un alto volumen de votos concurrentes, pero que, por estrictas razones de seguridad e integridad de datos, estuviera completamente aislada de Internet y funcionara de manera autónoma en una red local.',
  solution: 'Desarrollé un sistema cerrado de alta fiabilidad basado en Java Spring Boot y bases de datos MySQL. El núcleo de seguridad está respaldado por Spring Security, encargado de gestionar el login y la generación automatizada de usuarios y contraseñas únicos. Al funcionar exclusivamente sobre una Intranet, elimina cualquier vector de ataque externo. El motor del sistema contabiliza los votos en tiempo real, calcula las posiciones dinámicamente según ingresan los datos y, al concluir el evento, exporta una planilla estructurada y lista para su auditoría.',
  stack: {
    frontend: ['HTML5', 'CSS Vanilla', 'Thymeleaf'],
    backend: ['Java', 'Spring Boot', 'Spring Security'],
    database: ['MySQL', 'Red Local (Intranet)'],
  },
  features: [
    'Entorno cerrado: Operación exclusiva vía Intranet (sin conexión a Internet) para blindar el sistema.',
    'Autenticación robusta: Login y generación masiva de credenciales (usuarios/contraseñas) con Spring Security.',
    'Motor de escrutinio en vivo: Contabilización en tiempo real y actualización dinámica del ranking de posiciones.',
    'Generación automática de planillas finales listas para revisión, validación y archivo.',
  ]
};

const Proyecto5Detalle = () => {
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
              <a href={PROJECT_DATA.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-action-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                Ver Código Fuente
              </a>
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
                alt={`Vista principal del sistema de votación`} 
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
                  <h4>Backend & Seguridad</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.backend.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                  </div>
                </div>

                <div className="stack-group">
                  <h4>Frontend (Server-side)</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.frontend.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                  </div>
                </div>
                
                <div className="stack-group">
                  <h4>Base de Datos & Red</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.database.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {PROJECT_DATA.youtubeId && (
            <section className="detalle-video-section">
              <h2>Video Demostrativo</h2>
              <p>Muestra del entorno aislado, proceso de validación con Spring Security y actualización dinámica del ranking.</p>
              
              <div className="youtube-container">
                <lite-youtube videoid={PROJECT_DATA.youtubeId} playlabel="Reproducir video de demostración"></lite-youtube>
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

export default Proyecto5Detalle;