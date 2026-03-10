import { Link } from 'react-router-dom'; // IMPORTANTE: Importar Link
import '../styles/Proyectos.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión Académica',
      description: 'Plataforma integral para IES N°6. Digitalización de legajos, generación de PDFs y notificaciones push.',
      image: '/proyecto-ies.jpg',
      tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'Android'],
      route: '/proyectos/gestion-academica', // RUTA INTERNA (Componente distinto)
      demoLink: 'https://demo-gestion.vercel.app' 
    },
    {
      id: 2,
      title: 'Mercado Liebre - Replica', // Asumiendo que este es el Page1 que hicimos
      description: 'Réplica e-commerce con servidor Express, arquitectura MVC y diseño mobile-first.',
      image: '/proyecto-escuela.jpg',
      tech: ['Node.js', 'Express', 'HTML/CSS', 'MVC'],
      route: '/proyectos/mercado-liebre', // RUTA INTERNA (Lleva a Page1)
      demoLink: null 
    },
    {
      id: 3,
      title: 'Control RC con Arduino',
      description: 'Vehículo robótico controlado vía Bluetooth con firmware en C++ y app móvil propia.',
      image: '/proyecto-arduino.jpg',
      tech: ['C++', 'Arduino', 'Bluetooth', 'Electronics'],
      route: '/proyectos/arduino-rc', // RUTA INTERNA (Componente distinto)
      demoLink: 'https://youtube.com/demo-video'
    }
  ];

  return (
    <section className="projects-section" id="proyectos">
      <div className="projects-container">
        
        <div className="projects-header">
          <h2 className="projects-title">Proyectos Destacados</h2>
          <p className="projects-subtitle">
            Una selección de mis trabajos técnicos y soluciones educativas.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              
              {/* Imagen del Proyecto */}
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={`Captura de pantalla de ${project.title}`} 
                  className="project-image" 
                  loading="lazy"
                />
                <div className="project-overlay"></div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">
                  {project.description}
                </p>

                {/* Tags de Tecnologías */}
                <div className="project-tech-stack">
                  {project.tech.map((tech) => (
                    <span key={tech} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones de Acción */}
                <div className="project-actions">
                  
                  {/* CAMBIO PRINCIPAL: Usamos Link en lugar de <a> */}
                  <Link 
                    to={project.route} 
                    className="project-btn project-btn-outline"
                  >
                    Ver Detalles
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  </Link>

                  {/* El demoLink sigue siendo un <a> normal porque es externo */}
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-btn project-btn-fill"
                    >
                      Ver Demo
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                    </a>
                  )}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;