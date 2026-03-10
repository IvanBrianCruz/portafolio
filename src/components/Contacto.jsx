import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Contacto.css';

export default function Contacto() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    // Resetear el formulario
    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
    alert('Mensaje enviado correctamente!');
  };

  return (
    <section id="contacto" className="contacto">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        
        <div className="contacto-contenido">
          <div className="contacto-info">
            <h3>¿Hablemos?</h3>
            <p>Me encantaría conocer tus proyectos y hablar sobre cómo puedo ayudarte.</p>
            
            <div className="info-item">
              <span className="label">Email:</span>
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </div>

            <div className="info-item">
              <span className="label">Teléfono:</span>
              <a href={`tel:${personal.phone}`}>{personal.phone}</a>
            </div>

            <div className="info-item">
              <span className="label">Ubicación:</span>
              <p>{personal.location}</p>
            </div>

            <div className="contacto-links">
              <a href="#" className="contact-link">GitHub</a>
              <a href="#" className="contact-link">LinkedIn</a>
              <a href="#" className="contact-link">Twitter</a>
            </div>
          </div>

          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="asunto">Asunto</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-enviar">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
}
