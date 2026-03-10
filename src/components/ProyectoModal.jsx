import '../styles/ProyectoModal.css';

export default function ProyectoModal({ proyecto, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <img src={proyecto.imagen} alt={proyecto.titulo} className="modal-imagen" />
        
        <div className="modal-body">
          <h2>{proyecto.titulo}</h2>
          
          <div className="modal-section">
            <h3>Descripción</h3>
            <p>{proyecto.detalles.descripcionCompleta}</p>
          </div>

          <div className="modal-section">
            <h3>Características</h3>
            <ul>
              {proyecto.detalles.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3>Tecnologías</h3>
            <div className="modal-techs">
              {proyecto.tecnologias.map((tech, idx) => (
                <span key={idx} className="tech-badge-large">{tech}</span>
              ))}
            </div>
          </div>

          <div className="modal-buttons">
            <a href={proyecto.detalles.github} target="_blank" rel="noopener noreferrer" className="btn btn-github">
              Ver en GitHub
            </a>
            <a href={proyecto.detalles.demo} target="_blank" rel="noopener noreferrer" className="btn btn-demo">
              Ver Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
