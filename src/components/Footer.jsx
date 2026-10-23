import { useState } from 'react';
import '../styles/Footer.css';

const SOCIAL_DATA = {
  email: 'ivan4912134@gmail.com',
  phone: '3884211576',
  phoneFormatted: '+54 9 388 421-1576',
  whatsappUrl: 'https://wa.me/5493884211576',
  linkedin: 'https://www.linkedin.com/in/ivan-brian-cruz-7a42b4173',
  github: 'https://github.com/IvanBrianCruz',
};

const TECH_HIGHLIGHTS = [
  'React + Vite',
  'Node.js',
  'PostgreSQL',
  'Supabase',
  'Python',
  'Java & Spring Boot',
];

const Footer = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(SOCIAL_DATA.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="contacto" className="footer-container">
      {/* Resplandor superior decorativo */}
      <div className="footer-glow"></div>

      <div className="footer-content">
        {/* ================= BANNER DE CONTACTO (CTA) ================= */}
        <div className="footer-cta-card">
          <div className="footer-cta-text">
            <span className="footer-cta-tag">¿Tienes un proyecto o propuesta educativa/IT?</span>
            <h2 className="footer-cta-title">Trabajemos juntos</h2>
            <p className="footer-cta-desc">
              Estoy disponible para el desarrollo de aplicaciones web Full Stack, sistemas a medida y proyectos tecnológicos educativos.
            </p>
          </div>

          <div className="footer-cta-actions">
            {/* Fila de botones directos (Correo y WhatsApp) */}
            <div className="footer-direct-btns">
              <a href={`mailto:${SOCIAL_DATA.email}`} className="footer-btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Enviar Correo
              </a>

              <a
                href={SOCIAL_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-btn-whatsapp"
                title="Escribir por WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Tarjetas de copiado rápido (Email + Teléfono) */}
            <div className="footer-copy-group">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="footer-btn-copy"
                title="Copiar dirección de correo"
              >
                {copiedEmail ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className="copied-text">¡Correo copiado!</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span>{SOCIAL_DATA.email}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="footer-btn-copy"
                title="Copiar número de teléfono"
              >
                {copiedPhone ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className="copied-text">¡Teléfono copiado!</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>Tel: {SOCIAL_DATA.phone}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ================= GRILLA PRINCIPAL DEL FOOTER (3 COLUMNAS SIN NAVEGACIÓN) ================= */}
        <div className="footer-grid">
          {/* Columna 1: Marca personal */}
          <div className="footer-brand-col">
            <a href="#inicio" className="footer-logo">
              <span className="code-bracket">&lt;</span>
              Cruz Delgado Brian Ivan
              <span className="code-bracket"> /&gt;</span>
            </a>

            <p className="footer-bio">
              Desarrollador Full Stack &amp; Profesor en Informática. Creando soluciones de software escalables y experiencias educativas innovadoras desde Jujuy, Argentina.
            </p>

            <div className="footer-status">
              <span className="status-ping"></span>
              <span>Disponible para nuevos desafíos</span>
            </div>
          </div>

          {/* Columna 2: Stack Principal */}
          <div className="footer-links-col">
            <h3 className="footer-col-title">Stack Principal</h3>
            <div className="footer-tech-pills">
              {TECH_HIGHLIGHTS.map((tech) => (
                <span key={tech} className="footer-tech-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Columna 3: Conecta */}
          <div className="footer-links-col">
            <h3 className="footer-col-title">Conecta conmigo</h3>
            <div className="footer-social-cards">
              <a
                href={SOCIAL_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <div>
                  <span className="social-name">LinkedIn</span>
                  <span className="social-handle">Perfil Profesional ↗</span>
                </div>
              </a>

              <a
                href={SOCIAL_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                <div>
                  <span className="social-name">GitHub</span>
                  <span className="social-handle">@IvanBrianCruz ↗</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ================= BARRA INFERIOR (COPYRIGHT) ================= */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} <strong>Cruz Delgado Brian Ivan</strong>.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-scroll-top"
            aria-label="Volver arriba"
          >
            <span>Volver arriba</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;