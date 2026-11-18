import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/ProyectoDetalle.css';

const PROJECT_DATA = {
  id: 9,
  title: 'NLP - Nube Local Privada (Servidor Offline LAN)',
  subtitle: 'Servidor autónomo de intercambio de archivos a máxima velocidad para redes locales sin conexión a Internet',
  description: 'Solución tecnológica moderna y comercial que convierte cualquier computadora Windows en un servidor de red de alta velocidad para compartir archivos en Wi-Fi o red cableada consumiendo 0 megas de datos móviles. Compilado a .EXE nativo con interfaz SaaS y zero CDNs.',
  demoUrl: '#', 
  githubUrl: 'https://github.com/IvanBrianCruz/N.L.P._Pro/releases/download/2/NLP-NubePrivada.exe', 
  images: [
   'https://i.postimg.cc/k4qChgzs/Screenshot-2026-11-18-122313.png',
   'https://i.postimg.cc/rmMTYw39/Screenshot-2026-11-18-122330.png',
   'https://i.postimg.cc/ZR4mD523/Screenshot-2026-11-18-122409.png',
   'https://i.postimg.cc/V6mwHkpp/Screenshot-2026-11-18-122440.png',
   'https://i.postimg.cc/rmMTYw72/Screenshot-2026-11-18-122511.png',
   'https://i.postimg.cc/RFdmrzx2/Screenshot-2026-11-18-122917.png',
   'https://i.postimg.cc/6Qdw0vj7/Screenshot-2026-11-18-122931.png',
   'https://i.postimg.cc/QthDndwf/Screenshot-2026-11-18-122948.png',
   'https://i.postimg.cc/cHhWqNGD/Screenshot-2026-11-18-123026.png'

  ],
  context: 'En instituciones educativas, aulas técnicas, salas de capacitación, mineras, hospitales, conferencias o parajes rurales, la conectividad a Internet suele ser limitada, lenta o nula. El intercambio de archivos pesados (videos explicativos, instaladores de software, bibliografía en PDF o entregas de trabajos) mediante pendrives USB resulta engorroso y peligroso por la propagación de malware. Se requería una solución digital ágil, segura y moderna que permitiera a docentes y participantes intercambiar archivos a la máxima velocidad de la red Wi-Fi sin gastar megas de datos y sin depender de servidores en la nube.',
  solution: 'Diseñé y desarrollé NLP (Nube Local Privada) v2.0: una plataforma integral 100% fuera de línea construida con Node.js, Express y Multer, con un frontend puro en Vanilla CSS y Vanilla JS (Zero CDNs). Al iniciarse, crea de forma automática la carpeta compartida "NLP_Archivos_Compartidos" en el Escritorio del usuario (con soporte para OneDrive y rutas tradicionales de Windows), detecta la IP física descartando adaptadores virtuales, proyecta un código QR offline para conexión móvil instantánea y abre el navegador del anfitrión. Dispone de carga masiva Drag & Drop con progreso en tiempo real, reproductor multimedia integrado (audio, video, fotos y documentos), buscador con filtros por categoría y selector de Modo Oscuro / Claro con estética SaaS. Todo el sistema se compila en un ejecutable único nativo para Windows (.EXE) listo para operar sin requerir Node.js instalado.',
  stack: {
    backend: ['Node.js', 'Express.js', 'Multer (Multipart Upload)', 'File System API'],
    frontend: ['HTML5', 'Vanilla CSS (Dark/Light Design System)', 'Vanilla JavaScript (Zero CDNs)'],
    empaquetado: ['pkg (Standalone .EXE para Windows)', 'Batch Scripts (.bat)'],
    utilidades: ['QRCode.js Offline', 'Media Previews (Audio, Video, PDF, Imágenes)', 'IP Scanner']
  },
  features: [
    '100% Fuera de Línea (Zero CDNs): Interfaz totalmente autónoma sin dependencias de librerías remotas ni conexión a Internet.',
    'Ejecutable Standalone (.EXE): Compilado en un archivo nativo único (NLP-NubePrivada.exe) que incluye su propio entorno de ejecución.',
    'Almacenamiento Directo en el Escritorio: Sincronización instantánea con la carpeta "NLP_Archivos_Compartidos".',
    'Detección inteligente de IP física: Escanea tarjetas físicas (Wi-Fi y Ethernet) descartando adaptadores virtuales.',
    'Código QR 100% Offline: Generado localmente para que cualquier smartphone escanee y acceda al instante sin escribir números de IP.',
    'Subida Drag & Drop masiva con visualización de barra de progreso porcentual en tiempo real.',
    'Vista previa y reproductor multimedia integrado para escuchar canciones, ver videos y previsualizar imágenes o PDFs sin descargarlos.',
    'Buscador y filtros automáticos por categoría: Documentos, Imágenes, Audio, Video, Comprimidos y Otros.',
    'Modo Oscuro / Claro con diseño comercial moderno de estilo SaaS.'
  ],
  architectureTree: `N.L.P.-Nube-Local-Privada/
├── server.js                      # Backend Node.js / Express con detección de IP y API local
├── package.json                   # Configuración del paquete y reglas de empaquetado para pkg
├── compilar-exe.bat               # Script automatizado para compilar a .EXE en Windows
├── iniciar-servidor.bat           # Script para encender el servidor con un clic
├── dist/
│   └── NLP-NubePrivada.exe        # Ejecutable compilado independiente (Standalone)
└── public/                        # Frontend 100% Offline (Vanilla)
    ├── index.html                 # Interfaz de usuario comercial y moderna
    ├── css/style.css              # Sistema de diseño completo en Vanilla CSS (Dark/Light)
    └── js/
        ├── app.js                 # Lógica interactiva en Vanilla JS (Upload, Search, Preview)
        └── qrcode.min.js          # Generador de códigos QR autónomo y sin internet`
};

const Proyecto9Detalle = () => {
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
               {/*<a href={PROJECT_DATA.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-action-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                Ver Repositorio en GitHub
              </a>*/}
               <a
                href="https://github.com/IvanBrianCruz/N.L.P._Pro/releases/download/2/NLP-NubePrivada.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action-secondary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Descargar NLP V2.0 Pro
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
                alt="Vista principal de NLP Nube Local Privada"
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

              {/* Modo de Uso Rápido */}
              <section className="content-section">
                <h2>Guía de Uso para el Usuario</h2>
                <div className="detalle-terminal-box">
                  <div className="terminal-header">
                    <span className="terminal-dot red"></span>
                    <span className="terminal-dot yellow"></span>
                    <span className="terminal-dot green"></span>
                    <span className="terminal-title">Guía de Inicio Rápido - NLP</span>
                  </div>
                  <div className="terminal-body">
                    <p><span className="t-prompt">1.</span> Conectar la PC a la red Wi-Fi o crear un "Punto de acceso móvil" desde Windows.</p>
                    <p><span className="t-prompt">2.</span> Abrir <code>NLP-NubePrivada.exe</code> (se crea automáticamente <code>NLP_Archivos_Compartidos</code> en el Escritorio).</p>
                    <p><span className="t-prompt">3.</span> Los participantes escanean el código QR en pantalla o ingresan la IP local (ej. <code>192.168.1.15:3000</code>).</p>
                    <p className="t-success">🚀 ¡Listo! Descarga y subida de archivos inmediata a máxima velocidad de red sin consumir megas de Internet.</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar del Stack */}
            <div className="content-stack-col">
              <div className="stack-card">
                <h3>Tecnologías</h3>

                <div className="stack-group">
                  <h4>Backend & Motor</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.backend.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="stack-group">
                  <h4>Frontend Offline</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.frontend.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="stack-group">
                  <h4>Empaquetado Nativo</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.empaquetado.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="stack-group">
                  <h4>Utilidades & Visores</h4>
                  <div className="stack-tags">
                    {PROJECT_DATA.stack.utilidades.map((tech) => (
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

export default Proyecto9Detalle;
