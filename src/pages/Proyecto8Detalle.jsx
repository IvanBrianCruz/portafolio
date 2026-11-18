import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/ProyectoDetalle.css';

const PROJECT_DATA = {
  id: 8,
  title: 'P2P Local Bridge - Pruebas en Intranet y Proxy Inverso',
  subtitle: 'Herramienta de desarrollo y puente HTTP para exponer servidores locales en redes LAN sin depender de Internet',
  description: 'Utilidad multiplataforma con Panel Web y ejecutable nativo de Windows que permite compartir cualquier proyecto web local a través de la red Wi-Fi o intranet mediante proxy inverso en el puerto 4000, detección de IP física, reescritura de redirecciones y códigos QR.',
  demoUrl: '#',
  githubUrl: 'https://github.com/IvanBrianCruz/P2P-Puente-Local.git',
  images: [
    'https://i.postimg.cc/K8B25Tjf/Screenshot-2026-11-18-114831.png',
    'https://i.postimg.cc/dVrY9C3S/Screenshot-2026-11-18-114858.png',
    'https://i.postimg.cc/fRmNvdyq/Screenshot-2026-11-18-120339.png',
    'https://i.postimg.cc/9QZhB90p/Screenshot-2026-11-18-120412.png',
    'https://i.postimg.cc/3JPhp181/Screenshot-2026-11-18-120507.png'
  ],

  context: 'Durante clases de programación, capacitaciones y sesiones de prueba en laboratorios escolares o universitarios, es habitual necesitar probar aplicaciones web en dispositivos móviles reales (smartphones, tablets) conectados a la misma red Wi-Fi. Sin embargo, no siempre se cuenta con acceso a Internet para recurrir a herramientas en la nube como ngrok o locales, y los servidores de desarrollo (como Spring Boot o Express) suelen aplicar redirecciones a localhost, provocando que los dispositivos externos pierdan la conexión. Además, tipear direcciones IP numéricas en teléfonos móviles resulta lento y propenso a errores.',
  solution: 'Diseñé y programé P2P Local Bridge, una solución autónoma que levanta un servidor HTTP y proxy inverso en el puerto 4000 capaz de redirigir el tráfico hacia cualquier puerto local (ej. 3000, 5173, 8080). El motor detecta dinámicamente las tarjetas de red físicas IPv4 descartando adaptadores virtuales (WSL, Docker, VirtualBox), reescribe cabeceras HTTP de redirección en tiempo real y ofrece un Panel Web con visor de códigos QR en alta resolución. Asimismo, empaqueté la herramienta como un ejecutable autónomo para Windows (.EXE) con pkg, posibilitando su ejecución en cualquier computadora sin necesidad de instalar Node.js ni configurar terminales.',
  stack: {
    backend: ['Node.js', 'Express.js', 'http-proxy-middleware', 'OS Network API'],
    empaquetado: ['pkg (Standalone .EXE para Windows)', 'Batch Scripts (.bat)'],
    panelWeb: ['HTML5', 'CSS Vanilla', 'JavaScript Vanilla', 'QRCode.js Offline'],
    protocolos: ['HTTP Proxy Reverso', 'WebSockets (HMR Support)', 'Intranet / LAN']
  },
  features: [
    'Experiencia 100% Web: interfaz visual intuitiva en el navegador que elimina la necesidad de comandos de terminal.',
    'Detección automática e inteligente de interfaces físicas de red (Wi-Fi y Ethernet), seleccionando la IP prioritaria.',
    'Generador de Códigos QR para el acceso directo a la web y conexión a la red Wi-Fi con vista modal en pantalla completa para proyectores.',
    'Reescritura de cabeceras de redirección (Location headers) evitando que frameworks redireccionen de vuelta a localhost.',
    'Soporte completo de WebSockets para garantizar compatibilidad con Hot Module Replacement (HMR en Vite/React).',
    'Empaquetado a ejecutable único (.EXE) listo para distribuir y utilizar sin instalar Node.js.',
    'Monitor de tráfico HTTP en memoria que registra métodos, rutas, códigos de estado e IPs clientes en tiempo real.'
  ],
  architectureTree: `p2p-local-bridge/
├── puente.js                  # Núcleo del servidor: detección IP, proxy y API de control
├── package.json               # Configuración de dependencias y scripts de empaquetado pkg
├── P2P-Local-Bridge.exe       # Ejecutable nativo para Windows (Standalone)
├── comando.txt                # Documentación de puertos y comandos rápidos
└── public/
    └── dashboard.html         # Panel web interactivo con formularios, logs y modales QR`
};

const Proyecto8Detalle = () => {
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
              <a href={PROJECT_DATA.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-action-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                Ver GitHub P2P
              </a>

              <a
                href="https://github.com/IvanBrianCruz/P2P-Puente-Local/releases/download/v2.0/P2P-Local-Bridge.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action-secondary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Descargar P2P
              </a>
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
                alt="Vista de P2P Local Bridge"
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

          {/* CASO DE ESTUDIO */}
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
                <div className="detalle-code-box">
                  <pre className="detalle-code-tree">
                    <code>{PROJECT_DATA.architectureTree}</code>
                  </pre>
                </div>
              </section>

              {/* Cómo Funciona */}
              <section className="content-section">
                <h2>Flujo de Uso Rápido</h2>
                <div className="detalle-terminal-box">
                  <div className="terminal-header">
                    <span className="terminal-dot red"></span>
                    <span className="terminal-dot yellow"></span>
                    <span className="terminal-dot green"></span>
                    <span className="terminal-title">Guía de Inicio Rápido</span>
                  </div>
                  <div className="terminal-body">
                    <p><span className="t-prompt">1.</span> Ejecutar <code>P2P-Local-Bridge.exe</code> con doble clic.</p>
                    <p><span className="t-prompt">2.</span> Se abre el navegador en <code>http://localhost:4000/__bridge/admin</code>.</p>
                    <p><span className="t-prompt">3.</span> Ingresar el puerto de tu app (ej: <code>5173</code>) y pulsar "Desplegar Puente Local".</p>
                    <p className="t-success">✨ ¡Listo! Se genera el código QR y la URL de red para que cualquier smartphone acceda al instante.</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar del Stack */}
            <div className="content-stack-col">
              <div className="stack-card">
                <h3>Tecnologías</h3>

                <div className="stack-group">
                  <h4>Backend & Proxy</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.backend.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="stack-group">
                  <h4>Empaquetado</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.empaquetado.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="stack-group">
                  <h4>Panel Frontend</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.panelWeb.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="stack-group">
                  <h4>Protocolos & Red</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.protocolos.map((tech) => (
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

export default Proyecto8Detalle;
