import { portfolioData } from '../data/portfolioData';
import '../styles/Hero.css';

export default function Hero() {
  const { personal, skills } = portfolioData;

  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{personal.name}</h1>
          <h2 className="hero-subtitle">{personal.title}</h2>
          <p className="hero-description">{personal.description}</p>

          <div className="hero-skills">
            <h3>Mis Tecnologías:</h3>
            <div className="skills-grid">
              {skills.flatMap(skill => skill.items).map((tech, idx) => (
                <span key={idx} className="skill-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
            <a href="#contacto" className="btn btn-secondary">Contactar</a>
          </div>
        </div>

        <div className="hero-social">
          <a href="#" className="social-link" title="GitHub">
            <i>GH</i>
          </a>
          <a href="#" className="social-link" title="LinkedIn">
            <i>LI</i>
          </a>
          <a href="#" className="social-link" title="Twitter">
            <i>TW</i>
          </a>
          <a href="#" className="social-link" title="Email">
            <i>@</i>
          </a>
        </div>
      </div>
    </section>
  );
}
