import { portfolioData } from '../data/portfolioData';
import '../styles/Cursos.css';

export default function Cursos() {
  const { cursos } = portfolioData;

  return (
    <section id="cursos" className="cursos">
      <div className="container">
        <h2 className="section-title">Cursos Completados</h2>
        <div className="cursos-grid">
          {cursos.map((curso) => (
            <div key={curso.id} className="curso-card">
              <div className="curso-header">
                <h3>{curso.titulo}</h3>
                <span className="curso-plataforma">{curso.plataforma}</span>
              </div>
              <p className="curso-instructor">Instructor: {curso.instructor}</p>
              <p className="curso-duracion">⏱️ {curso.duracion}</p>
              <p className="curso-descripcion">{curso.descripcion}</p>
              
              <div className="progreso-container">
                <div className="progreso-bar">
                  <div className="progreso-fill" style={{ width: `${curso.progreso}%` }}></div>
                </div>
                <span className="progreso-text">{curso.progreso}% Completado</span>
              </div>

              <a href={curso.enlace} target="_blank" rel="noopener noreferrer" className="btn-enlace">
                Ver Certificado
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
