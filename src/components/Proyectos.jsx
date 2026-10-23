import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Proyectos.css';

// Listado completo de tus proyectos (puedes agregar, editar o quitar cuando gustes)
const ALL_PROJECTS = [
  {
    id: 1,
    title: 'Portal Web & Arcade Python - E.E.T. N° 2 San Pedro',
    image: 'https://i.postimg.cc/tCptvVrC/image.png',
    description:
      'Landing page institucional con historia escolar, módulo de noticias dinámicas y sección interactiva con videojuegos en Python desarrollados por alumnos de 4° año.',
    stack: ['React + Vite', 'Node.js', 'PostgreSQL', 'Supabase', 'Python'],
    category: 'Full Stack & Educativo',
    featured: true,
  },
  {
    id: 2,
    title: 'Plataforma Académica & App Móvil IES',
    image: 'https://i.postimg.cc/QtjdZsv6/image.png',
    description:
      'Sistema integral de gestión de legajos, generación de analíticos en PDF y aplicación Android con notificaciones push en tiempo real. En evolución con prueba piloto estudiantil.',
    stack: ['React + Vite', 'Node.js', 'PostgreSQL', 'Android', 'Firebase'],
    category: 'Full Stack & Mobile',
    featured: true,
  },
  {
    id: 3,
    title: 'Portal Institucional & CMS Escuela N° 38',
    image: 'https://i.postimg.cc/MZFqdyZp/image.png',
    description:
      'Plataforma web institucional con gestor de contenidos personalizado para publicación de proyectos escolares, noticias y panel docente no técnico.',
    stack: ['React', 'Node.js', 'CSS Modules', 'Tiny Cloud', 'SEO'],
    category: 'Web & CMS',
    featured: true,
  },
  {
    id: 4,
    title: 'Sistema de Reservas Aula Digital Móvil',
    image: 'https://i.postimg.cc/sXWqmZTh/image.png',
    description:
      'Aplicación web ágil para gestión de turnos y reservas de equipamiento tecnológico escolar con reportes imprimibles y control automático de horarios.',
    stack: ['JavaScript', 'Google Apps Script', 'Google Sheets API', 'HTML/CSS'],
    category: 'Herramienta Útil',
    featured: false,
  },
  {
    id: 5,
    title: 'Sistema de Votación FNE',
    image: 'https://i.postimg.cc/zDSPfN6W/image.png',
    description:
      'Aplicación web de escrutinio y visualización de resultados en vivo con paneles estadísticos de alto rendimiento y concurrencia.',
    stack: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL', 'CSS vanilla'],
    category: 'Backend & Web',
    featured: false,
  },
];

const Proyectos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('all');

  // Obtener lista única de tecnologías para los filtros
  const allTechnologies = [
    'all',
    ...new Set(ALL_PROJECTS.flatMap((p) => p.stack)),
  ];

  // Filtrado de proyectos por título/descripción y tecnología seleccionada
  const filteredProjects = ALL_PROJECTS.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech =
      selectedTech === 'all' || project.stack.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  return (
    <div className="proyectos-page-wrapper">
      {/* 1. Header Superior */}
      <Header />

      <main className="proyectos-main">
        {/* ================= ENCABEZADO DE LA SECCIÓN ================= */}
        <section className="proyectos-hero">
          <div className="proyectos-glow"></div>
          <span className="proyectos-tag">&lt; Portafolio Profesional /&gt;</span>
          <h1 className="proyectos-title">Proyectos Desarrollados</h1>
          <p className="proyectos-subtitle">
            Explora soluciones de software escalables, aplicaciones web institucionales y desarrollos educativos creados con tecnologías modernas. Haz clic en cualquier tarjeta para ver su detalle en <code>/proyectos/:id</code>.
          </p>
        </section>

        {/* ================= FILTROS Y BUSCADOR ================= */}
        <section className="proyectos-filters-container">
          <div className="proyectos-search-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
            <input
              type="text"
              placeholder="Buscar proyecto por nombre o descripción..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="proyectos-search-input"
            />
          </div>

          <div className="proyectos-tech-filters">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => setSelectedTech(tech)}
                className={`tech-filter-btn ${selectedTech === tech ? 'active' : ''}`}
              >
                {tech === 'all' ? 'Todas las tecnologías' : tech}
              </button>
            ))}
          </div>
        </section>

        {/* ================= GRILLA DE CARDS DE PROYECTOS ================= */}
        <section className="proyectos-grid-section">
          <div className="proyectos-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <a
                  key={project.id}
                  href={`/proyectos/${project.id}`}
                  className="proyecto-card"
                >
                  <div className="proyecto-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="proyecto-image"
                      loading="lazy"
                    />
                    <span className="proyecto-category-badge">{project.category}</span>
                    <div className="proyecto-overlay-link">
                      <span>Ver Detalle ↗</span>
                    </div>
                  </div>

                  <div className="proyecto-content">
                    <h2 className="proyecto-title">{project.title}</h2>
                    <p className="proyecto-description">{project.description}</p>

                    <div className="proyecto-stack">
                      {project.stack.map((tech, idx) => (
                        <span key={idx} className="proyecto-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <div className="proyectos-empty">
                <p>No se encontraron proyectos con los filtros seleccionados.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* 2. Footer Inferior */}
      <Footer />
    </div>
  );
};

export default Proyectos;