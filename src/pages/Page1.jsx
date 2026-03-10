import { useState } from 'react';
import '../styles/pages/Page1.css';
import Header from '../components/Header';

const Page1 = () => {
  // Estado para el carrusel de imágenes
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array de imágenes (Placeholder - reemplaza con tus capturas reales)
  const images = [
    '/proyecto-liebre-home.jpg', // Foto de la home
    '/proyecto-liebre-login.jpg', // Foto del login
    '/proyecto-liebre-mobile.jpg' // Vista responsive
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (


    <div className="page1-container">
          <Header />  
      {/* --- Header del Proyecto --- */}
      <header className="page1-header">
        <a href="/" className="page1-back-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
          Volver al Portafolio
        </a>
        <div className="page1-title-wrapper">
          <h1 className="page1-title">Mercado Liebre <span className="highlight">Replica</span></h1>
          <span className="page1-date">Realizado en 2023</span>
        </div>
        <p className="page1-subtitle">
          Plataforma E-commerce Full Stack con arquitectura MVC y servidor Express.js 
        </p>
      </header>

      {/* --- Contenido Principal: Grid --- */}
      <div className="page1-grid">

        {/* Columna Izquierda: Visuales (Carrusel + Video) */}
        <div className="page1-visuals">
          
          {/* Carrusel de Imágenes */}
          <div className="page1-carousel">
            <div className="page1-slide-container">
              <img src={images[currentSlide]} alt={`Vista previa ${currentSlide + 1}`} className="page1-slide-img" />
              <div className="page1-controls">
                <button onClick={prevSlide} className="page1-control-btn">❮</button>
                <button onClick={nextSlide} className="page1-control-btn">❯</button>
              </div>
            </div>
            <p className="page1-caption">Vista {currentSlide + 1} de {images.length}: Interfaz responsiva y dinámica.</p>
          </div>

          {/* Sección de Video */}
          <div className="page1-video-wrapper">
            <h3 className="page1-section-title">Demo en Funcionamiento</h3>
            <div className="page1-video-placeholder">
              {/* Reemplaza este div con tu etiqueta <video> o iframe de YouTube */}
              <div className="play-icon">▶</div>
              <span>Video Demo del Proyecto</span>
            </div>
          </div>

        </div>

        {/* Columna Derecha: Detalles Técnicos */}
        <div className="page1-details">
          
          {/* Descripción */}
          <section className="page1-section">
            <h2 className="page1-heading">Sobre el Proyecto</h2>
            <p className="page1-text">
              Este proyecto consiste en un servidor backendrobusto diseñado para servir archivos HTML estáticos y recursos públicos. 
              Implementa un sistema de enrutamiento eficiente para gestionar vistas como Home, Login y Registro.
            </p>
            <p className="page1-text">
              El diseño frontend es Mobile-First, utilizando Flexbox y Media Queries para adaptar la navegación (incluyendo menú hamburguesa) a cualquier dispositivo.
            </p>
          </section>

          {/* Stack Tecnológico [cite: 3] */}
          <section className="page1-section">
            <h3 className="page1-heading">Tecnologías Utilizadas</h3>
            <div className="page1-tags">
              <span className="page1-tag">Node.js</span>
              <span className="page1-tag">Express v4.18.2</span>
              <span className="page1-tag">HTML5 & CSS3</span>
              <span className="page1-tag">Font Awesome</span>
              <span className="page1-tag">NPM</span>
            </div>
          </section>

          {/* Arquitectura del Proyecto  */}
          <section className="page1-section">
            <h3 className="page1-heading">Arquitectura de Carpetas</h3>
            <div className="page1-code-block">
              <pre>
{`mercado-liebre/
├── src/
│   ├── app.js (Entry Point)
│   └── views/
│       ├── mercadoliebre.html
│       ├── login.html
│       └── register.html
└── public/
    ├── css/ (Estilos modulares)
    └── img/ (Assets SVG/JPG)`}
              </pre>
            </div>
          </section>

           {/* Cómo Ejecutar  */}
           <section className="page1-section">
            <h3 className="page1-heading">Despliegue Local</h3>
            <div className="page1-terminal">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <div className="terminal-body">
                <p><span className="prompt">$</span> cd mercado-liebre</p>
                <p><span className="prompt">$</span> npm install</p>
                <p className="comment"># Iniciando servidor en puerto 3000...</p>
                <p><span className="prompt">$</span> npm start</p>
                <p className="success">Server running at http://localhost:3000/mercadoliebre</p>
              </div>
            </div>
          </section>

          {/* Botón de Acción */}
          <div className="page1-actions">
            <a href="https://github.com/tu-usuario/mercado-liebre" target="_blank" rel="noreferrer" className="page1-github-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              Ver Código en GitHub
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page1;