import { portfolioData } from '../data/portfolioData';
import '../styles/Certificaciones.css';

export default function Certificaciones() {
  const { certificaciones } = portfolioData;

  return (
    <section id="certificaciones" className="certificaciones">
      <div className="container">
        <h2 className="section-title">Certificaciones</h2>
        <div className="certificaciones-grid">
          {certificaciones.map((cert) => (
            <div key={cert.id} className="certificacion-card">
              <img src={cert.imagen} alt={cert.titulo} className="cert-imagen" />
              <div className="cert-info">
                <h3>{cert.titulo}</h3>
                <p className="cert-emisor">{cert.emisor}</p>
                <p className="cert-fecha">{cert.fecha}</p>
                <p className="cert-descripcion">{cert.descripcion}</p>
                <a href={cert.enlace} target="_blank" rel="noopener noreferrer" className="btn-cert">
                  Ver Credencial
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
