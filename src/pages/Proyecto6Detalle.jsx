import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/ProyectoDetalle.css';

const PROJECT_DATA = {
  id: 6,
  title: 'Propuesta Web Oficial - Desafío Digital ExpoJuy 2026',
  subtitle: 'Portal digital interactivo para el certamen provincial más relevante del sector productivo y comercial',
  description: 'Desarrollo de una Single Page Application (SPA) moderna con React y Vite diseñada para centralizar la experiencia de visitantes, empresas expositoras y la organización de la feria ExpoJuy.',
  demoUrl: 'https://expojuy-seven.vercel.app',
  githubUrl: 'https://github.com/IvanBrianCruz/Expojuy.git',
  images: [
    'https://i.postimg.cc/YSGn0Ks1/image.png',
    'https://i.postimg.cc/FFLhbfqH/Screenshot-2026-11-17-215106.png',
    'https://i.postimg.cc/8k6TdF3C/Screenshot-2026-11-17-215134.png',
    'https://i.postimg.cc/1Rqy0gTX/Screenshot-2026-11-17-215150.png',
    'https://i.postimg.cc/qR94V0t4/Screenshot-2026-11-17-215207.png',
    'https://i.postimg.cc/Fz3mhqcj/Screenshot-2026-11-17-215231.png',
    'https://i.postimg.cc/L5LRm7fk/Screenshot-2026-11-17-215245.png',
    'https://i.postimg.cc/7h0Dqc7V/Screenshot-2026-11-17-215259.png',
    'https://i.postimg.cc/T1gGTSmQ/Screenshot-2026-11-17-215316.png',
    'https://i.postimg.cc/mkCRTqM7/Screenshot-2026-11-17-215335.png',
    'https://i.postimg.cc/NMWBqYyx/Screenshot-2026-11-17-215351.png',
    'https://i.postimg.cc/sXtsdyBp/Screenshot-2026-11-17-215409.png',
    'https://i.postimg.cc/NMWBqYy6/Screenshot-2026-11-17-215424.png',
    'https://i.postimg.cc/fL6DnZ30/Screenshot-2026-11-17-215437.png',
    'https://i.postimg.cc/Y0YktVgW/Screenshot-2026-11-17-215458.png',
    'https://i.postimg.cc/qqy0pYnj/Screenshot-2026-11-17-215537.png',
    'https://i.postimg.cc/cCwZdjYF/Screenshot-2026-11-17-215554.png',
    'https://i.postimg.cc/nrBZn57g/Screenshot-2026-1１-１７-２１５６０７.png',
    'https://i.postimg.cc/cCwZdjYV/Screenshot-2026-１１－１７－２１５６２３.png'

  ],
  context: 'ExpoJuy es el evento productivo, comercial y tecnológico de mayor envergadura del noroeste argentino. Para la edición 2026 y en el marco del certamen Desafío Digital, se requería una propuesta web innovadora que resolviera la dispersión de información, ofreciera un canal oficial de comunicación para miles de asistentes, facilitara la localización de stands en el predio y proyectara una imagen tecnológica de vanguardia alineada a estándares internacionales.',
  solution: 'Diseñé e implementé una SPA construida con React, React Router y Vite. La arquitectura del portal combina un diseño Mobile-First y navegación fluida con módulos especializados: cuenta regresiva interactiva, agenda cronológica de conferencias con filtros por día, directorio completo de expositores con buscador por categorías, visor de planos del predio, sistema de boletería digital con pases y acreditación QR imprimible, galería multimedia y un panel administrativo para gestión de expositores y novedades.',
  stack: {
    frontend: ['React 18', 'Vite', 'React Router DOM', 'HTML5', 'CSS Modules / Vanilla'],
    arquitectura: ['Component-Driven', 'Mobile-Design', 'SPA', 'Responsive Web Design'],
    despliegue: ['Vercel', 'Git & GitHub', 'ESLint']
  },
  features: [
    'Hero dinámico con cuenta regresiva en vivo (useCountdown) hacia la inauguración y barra de estadísticas del evento.',
    'Directorio inteligente de expositores con búsqueda en tiempo real, filtrado por rubros comerciales y vistas de perfil.',
    'Agenda cronológica de actividades estructurada por jornadas, horarios y salas de conferencias.',
    'Módulo de boletería y acreditación digital con generación de pases (Diario, Dual y Completo) y código QR verificable.',
    'Galería multimedia interactiva con efectos visuales fluidos e imágenes optimizadas en carga diferida.',
    'Panel de administración conceptual para control de expositores, publicación de noticias oficiales y métricas de concurrencia.',
    'Diseño 100% responsivo adaptable a smartphones, tablets y pantallas de escritorio.'
  ],
  architectureTree: `expojuy-portal/
├── src/
│   ├── main.jsx (Entry Point con StrictMode)
│   ├── App.jsx (Enrutador con React Router DOM)
│   ├── components/
│   │   ├── Navbar.jsx (Navegación pública con glassmorphism)
│   │   ├── AdminNavbar.jsx (Barra de control para gestión)
│   │   ├── Footer.jsx (Enlaces institucionales y redes)
│   │   └── NotFound404.jsx (Manejo de rutas no encontradas)
│   ├── pages/
│   │   ├── inicio/ (Hero, Stats, Agenda, Galería, Mapa)
│   │   ├── expositores/ (Directorio, Filtros y Perfil)
│   │   ├── noticias/ (Listado, Paginación y Detalle)
│   │   ├── login/ (Acceso al sistema y Registro)
│   │   └── panelAdmin/ (Resumen, Entradas y Stands)
│   └── assets/css/ (Estilos modulares organizados por vista)
└── public/ (Assets estáticos, logos y fotografías)`
};

const Proyecto6Detalle = () => {
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

          {/* CABECERA DEL PROYECTO */}
          <header className="detalle-header">
            <h1 className="detalle-title">{PROJECT_DATA.title}</h1>
            <p className="detalle-subtitle">{PROJECT_DATA.subtitle}</p>

            <div className="detalle-actions">
              <a href={PROJECT_DATA.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-action-primary">
                Ver Demo en Vivo ↗
              </a>
              <a href={PROJECT_DATA.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-action-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                Ver Código Fuente
              </a>
            </div>
          </header>

          {/* GALERÍA DE IMÁGENES INTERACTIVA */}
          <section className="detalle-gallery">
            <div
              className="gallery-main-view"
              onClick={() => setIsFullscreen(true)}
              title="Click para ver en pantalla completa"
            >
              <img
                src={PROJECT_DATA.images[activeImageIndex]}
                alt="Vista principal de ExpoJuy 2026"
                className="gallery-main-img"
              />
              <div className="gallery-expand-hint">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
              </div>
            </div>

            {/* Miniaturas */}
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

          {/* CUERPO DEL CASO DE ESTUDIO */}
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

              {/* Arquitectura de Carpetas */}
              <section className="content-section">
                <h2>Estructura del Proyecto</h2>
                <p>Organización modular basada en páginas y componentes desacoplados para máxima escalabilidad:</p>
                <div className="detalle-code-box">
                  <pre className="detalle-code-tree">
                    <code>{PROJECT_DATA.architectureTree}</code>
                  </pre>
                </div>
              </section>

              {/* Despliegue Local */}
              <section className="content-section">
                <h2>Ejecución y Despliegue Local</h2>
                <div className="detalle-terminal-box">
                  <div className="terminal-header">
                    <span className="terminal-dot red"></span>
                    <span className="terminal-dot yellow"></span>
                    <span className="terminal-dot green"></span>
                    <span className="terminal-title">bash - expo-juy-2026</span>
                  </div>
                  <div className="terminal-body">
                    <p><span className="t-prompt">$</span> git clone https://github.com/IvanBrianCruz/expojuy-2026.git</p>
                    <p><span className="t-prompt">$</span> cd expojuy-2026</p>
                    <p><span className="t-prompt">$</span> npm install</p>
                    <p><span className="t-prompt">$</span> npm run dev</p>
                    <p className="t-success">➜ Local: http://localhost:5173/ (Servidor listo en ~240ms)</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar del Stack Tecnológico */}
            <div className="content-stack-col">
              <div className="stack-card">
                <h3>Tecnologías</h3>

                <div className="stack-group">
                  <h4>Frontend</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.frontend.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>



                <div className="stack-group">
                  <h4>Arquitectura</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.arquitectura.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="stack-group">
                  <h4>Despliegue & Calidad</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.despliegue.map((tech) => (
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

export default Proyecto6Detalle;
