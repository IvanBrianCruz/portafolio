import { useState, useEffect } from 'react';
import '@justinribeiro/lite-youtube'; // Importación del web component de YouTube
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/ProyectoDetalle.css';

// Mockup de datos para el Proyecto 1 (Normalmente esto vendría de una base de datos o un archivo de datos)
const PROJECT_DATA = {
  id: 1,
  title: 'Portal Web & Arcade Python - E.E.T. N° 2 San Pedro',
  subtitle: 'Plataforma institucional y educativa con integración de videojuegos',
  description: 'Desarrollo de una landing page institucional con historia escolar, módulo dinámico de noticias y una sección arcade interactiva que aloja videojuegos creados en Python por alumnos de 4° año.',
  demoUrl: 'https://tecnica-n2.vercel.app/', // Cambiar por tu link real
  githubUrl: 'https://github.com/IvanBrianCruz/eet2-portal',
  youtubeId: 'eqcTJ0w-FIs', // Cambiar por el ID real de tu video de YouTube
  images: [
    "https://i.postimg.cc/MT5PzYMW/Screenshot-2026-10-23-111206.png",
    "https://i.postimg.cc/63cjBh23/Screenshot-2026-10-23-111237.png",
    "https://i.postimg.cc/NMDJQx9j/Screenshot-2026-10-23-111309.png",
    "https://i.postimg.cc/MT5PzYMX/Screenshot-2026-10-23-111322.png",
    "https://i.postimg.cc/769sqNGf/Screenshot-2026-10-23-111410.png",
    "https://i.postimg.cc/Kzfqm5k3/Screenshot-2026-10-23-111443.png",
    "https://i.postimg.cc/854KTbJW/Screenshot-2026-10-23-111513.png",

  ],
  context: 'La Escuela de Educación Técnica N° 2 necesitaba modernizar su presencia digital para comunicar novedades a los padres y alumnos de forma ágil. Además, como docente de Programación II, buscaba una forma de motivar a mis alumnos dándoles un espacio real donde publicar los videojuegos que desarrollaban en clase.',
  solution: 'Diseñé una arquitectura Full Stack robusta. El frontend permite una navegación fluida por la historia y oferta académica de la escuela. Se implementó un CMS a medida para que directivos publiquen noticias, y un "Módulo Arcade" que ejecuta los scripts de Python de los alumnos directamente en el navegador, cerrando la brecha entre el aprendizaje en el aula y un producto en producción.',
  stack: {
    frontend: ['React', 'Vite', 'CSS Modules'],
    backend: ['Node.js', 'Express', 'Python (Scripts)'],
    database: ['PostgreSQL', 'Supabase'],
  },
  features: [
    'Panel de administrador para gestión de noticias sin conocimientos técnicos.',
    'Integración de juegos Python jugables desde la web.',
    'Diseño responsivo optimizado para móviles (donde acceden la mayoría de los tutores).',
    'Arquitectura de base de datos relacional segura con Row Level Security (RLS).',
  ]
};

const ProyectoDetalle = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Cerrar modal de imagen con la tecla Escape
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

          {/* BOTÓN VOLVER */}
          <div className="detalle-nav-top">
            <a href="/proyectos" className="btn-back">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Volver a Proyectos
            </a>
          </div>

          {/* CABECERA DEL PROYECTO */}
          <header className="detalle-header">
            <h1 className="detalle-title">{PROJECT_DATA.title}</h1>
            <p className="detalle-subtitle">{PROJECT_DATA.subtitle}</p>

            <div className="detalle-actions">
              <a href={PROJECT_DATA.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-action-primary">
                Ver Demo en Vivo ↗
              </a>
              {/*<a href={PROJECT_DATA.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-action-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                Ver Código Fuente
              </a> */}
            </div>
          </header>

          {/* GALERÍA DE IMÁGENES */}
          <section className="detalle-gallery">
            {/* Imagen Principal */}
            <div
              className="gallery-main-view"
              onClick={() => setIsFullscreen(true)}
              title="Click para ver en pantalla completa"
            >
              <img
                src={PROJECT_DATA.images[activeImageIndex]}
                alt={`Vista principal del proyecto`}
                className="gallery-main-img"
              />
              <div className="gallery-expand-hint">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
              </div>
            </div>

            {/* Miniaturas (Thumbnails) */}
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

          {/* CUERPO DEL ESTUDIO DE CASO (Texto y Stack) */}
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

            {/* Sidebar del Stack */}
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
                  <h4>Backend</h4>
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

          {/* SECCIÓN DE VIDEO YOUTUBE */}
          {PROJECT_DATA.youtubeId && (
            <section className="detalle-video-section">
              <h2>Video Demostrativo</h2>
              <p>Un recorrido por el funcionamiento real de la plataforma.</p>

              <div className="youtube-container">
                {/* Componente Web de Justin Ribeiro (Carga súper rápida sin iframes pesados) */}
                <lite-youtube videoid={PROJECT_DATA.youtubeId} playlabel="Reproducir video de demostración"></lite-youtube>
              </div>
            </section>
          )}

        </div>
      </main>

      {/* MODAL FULLSCREEN DE IMAGEN */}
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
            onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer click en la foto
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

export default ProyectoDetalle;