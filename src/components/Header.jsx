import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const NAV_LINKS = [
  { name: 'Inicio', href: '/' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Certificaciones', href: '/certificaciones' },
  { name: 'Contacto', href: '/#contacto' },
];

const SOCIAL_DATA = {
  email: 'ivan4912134@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ivan-brian-cruz-7a42b4173',
  github: 'https://github.com/IvanBrianCruz',
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 968 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(SOCIAL_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const isLinkActive = (href) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('/#')) return false;
    return location.pathname.startsWith(href);
  };

  return (
    <header className={`header-container ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-content">
        
        {/* Izquierda: Logo personal, Foto y Firma Developer */}
        <Link to="/" className="header-profile" aria-label="Ir al inicio del portafolio">
          

          <div className="header-avatar-wrapper">
            <img 
              src="https://i.postimg.cc/nLfSwTYf/AP1Gcz-PD8n-U-u-KYf-Ijnb3C-ZD8QNUEYj.png" 
              alt="Cruz Delgado Brian Ivan" 
              className="header-avatar" 
            />
            <span className="header-status-dot" title="Disponible para nuevos proyectos"></span>
          </div>

          <div className="header-title-group">
            <h1 className="header-name">
              <span className="code-bracket">&lt;</span>
              Cruz Delgado Brian Ivan
              <span className="code-bracket"> /&gt;</span>
            </h1>
            <span className="header-role">Full Stack Developer &amp; Docente IT</span>
          </div>
        </Link>

        {/* Centro: Navegación Desktop estilo cápsula */}
        <nav className="header-nav-desktop" aria-label="Navegación principal">
          <ul className="header-nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="header-nav-item">
                {link.href.startsWith('/#') ? (
                  <a 
                    href={link.href} 
                    className="header-nav-link"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    to={link.href} 
                    className={`header-nav-link ${isLinkActive(link.href) ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Derecha: Botones Sociales Funcionales y Menú Móvil */}
        <div className="header-actions">
          <div className="header-socials">
            
            {/* Botón Email */}
            <a 
              href={`mailto:${SOCIAL_DATA.email}`}
              onClick={handleEmailClick}
              className="header-social-link email-btn" 
              aria-label="Enviar correo electrónico"
              title="Copiar correo y enviar mensaje"
            >
              {copiedEmail && <span className="copied-badge">¡Copiado!</span>}
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>

            {/* Botón LinkedIn */}
            <a 
              href={SOCIAL_DATA.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="header-social-link" 
              aria-label="Perfil de LinkedIn"
              title="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>

            {/* Botón GitHub */}
            <a 
              href={SOCIAL_DATA.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="header-social-link" 
              aria-label="Perfil de GitHub"
              title="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <button 
            type="button"
            className={`header-menu-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      <div className={`header-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="header-mobile-list">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="header-mobile-item">
              {link.href.startsWith('/#') ? (
                <a 
                  href={link.href} 
                  className="header-mobile-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  to={link.href} 
                  className={`header-mobile-link ${isLinkActive(link.href) ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="header-mobile-footer">
          <a href={`mailto:${SOCIAL_DATA.email}`} className="mobile-contact-pill">
            {SOCIAL_DATA.email}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
