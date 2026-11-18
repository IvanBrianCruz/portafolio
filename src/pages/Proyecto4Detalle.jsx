import { useState, useEffect } from 'react';
import '@justinribeiro/lite-youtube';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/ProyectoDetalle.css';

const PROJECT_DATA = {
  id: 4,
  title: 'Sistema Inteligente de Reservas y Gestión de Turnos',
  subtitle: 'Una solución digital flexible, escalable y personalizable para optimizar la gestión de reservas de cualquier negocio u organización',
  description: 'Plataforma web de gestión de reservas y turnos diseñada para adaptarse a las necesidades de diferentes rubros y modelos de negocio. Desde la administración de equipamiento tecnológico hasta la reserva de servicios, espacios, instalaciones y recursos compartidos.',
  demoUrl: 'https://script.google.com/macros/s/AKfycbysaeSEhNPbEkNijkgmEYnGOwIkw8LiBFS4G36pRxcfp4T8RLjBmOcDCN-SKYslMdWHfQ/exec', // Cambiar por tu link real de la demo
  githubUrl: 'https://docs.google.com/spreadsheets/d/1mXc7aBF34VI64iQFdcG3I_K9bASXCZmKCA1mlm1NJbw/edit?usp=sharing', // Cambiar por tu repositorio real
  youtubeId: 'dQw4w9WgXcQ', // Cambiar por tu video demo
  images: [
    "https://i.postimg.cc/vZZng5zn/Screenshot-2026-11-17-224542.png",
    "https://i.postimg.cc/9FpTQLGy/Screenshot-2026-11-17-224204.png",
    "https://i.postimg.cc/RZZt6wRh/Screenshot-2026-11-17-224235.png",
    "https://i.postimg.cc/9QQ9Rypz/Screenshot-2026-11-17-224257.png",
    "https://i.postimg.cc/bwwnD1Tt/Screenshot-2026-11-17-224334.png",
    "https://i.postimg.cc/pLLjhKZz/Screenshot-2026-11-17-224349.png",
    "https://i.postimg.cc/DwwGJ1g1/Screenshot-2026-11-17-224410.png",
    "https://i.postimg.cc/httmzVr0/Screenshot-2026-11-17-224430.png",
    "https://i.postimg.cc/GhQYmXkH/Screenshot-2026-11-17-224454.png",
    "https://i.postimg.cc/5N3v2sww/Screenshot-2026-11-17-224625.png"

  ],
  context: 'La organización de reservas y turnos es una necesidad presente en numerosos sectores. Comercios, empresas, instituciones y profesionales independientes suelen depender de agendas manuales, mensajes o planillas para administrar sus servicios, recursos y horarios. Estos métodos pueden generar reservas duplicadas, errores de coordinación, pérdida de información y una importante carga administrativa. Frente a esta problemática, surge la propuesta de desarrollar una solución digital que centralice la gestión, automatice las reservas y pueda adaptarse a las particularidades de cada organización.',
  solution: 'Desarrollé una plataforma web utilizando una arquitectura Serverless basada en Google Apps Script y Google Sheets, que permite administrar reservas, horarios, disponibilidad y recursos desde un único sistema. Su principal diferencial es la flexibilidad: no está limitada a un único propósito ni a un sector específico. Puede personalizarse y configurarse a medida según las necesidades, las reglas de funcionamiento y la identidad visual de cada empresa o emprendimiento. Por ejemplo, puede adaptarse para gestionar turnos en peluquerías y centros de estética, consultas profesionales, reservas de canchas deportivas, alquiler de espacios, salas de reuniones, talleres, servicios técnicos, préstamos de equipamiento y administración de recursos institucionales. Cada implementación puede incorporar sus propias categorías, horarios, usuarios, recursos y condiciones de reserva. De esta manera, se obtiene una herramienta digital personalizada sin necesidad de desarrollar una plataforma completamente diferente desde cero.',
  stack: {
    frontend: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
    backend: ['Google Apps Script (Serverless)'],
    database: ['Google Sheets API', 'Google Workspace'],
  },
  features: [
    'Gestión centralizada de reservas, turnos, horarios y disponibilidad.',
    'Validación automática para evitar reservas duplicadas y conflictos de horarios.',
    'Adaptable a múltiples rubros: comercios, servicios profesionales, deportes, alquileres e instituciones.',
    'Personalización a medida: funcionalidades, reglas de negocio, categorías e identidad visual.',
    'Generación automática de reportes y comprobantes listos para imprimir.',
    'Implementación ágil mediante infraestructura Serverless, sin necesidad de administrar servidores propios.',
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
                <path d="m15 18-6-6 6-6" />
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
              <a
                href={PROJECT_DATA.googleSheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M3 15h18M9 9v12M15 9v12" />
                </svg>
                Ver Hoja de Cálculo
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
                alt={`Vista principal del sistema de reservas`}
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

export default Proyecto4Detalle;