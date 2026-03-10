import { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  // Estado para el tema (oscuro/claro)
  const [theme, setTheme] = useState(() => {
    // 1. Verificar si hay algo guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    // 2. Si no, usar preferencia del sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para aplicar el tema al HTML y escuchar cambios del sistema
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Efecto para detectar scroll y añadir sombra
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Certificaciones', href: '#certificaciones' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`header-container ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-content">
        
        {/* Sección Izquierda: Foto y Nombre */}
        <div className="header-profile">
          <div className="header-avatar-wrapper">
            <img src="https://i.postimg.cc/nLfSwTYf/AP1Gcz-PD8n-U-u-KYf-Ijnb3C-ZD8QNUEYj.png" alt="Perfil" className="header-avatar" />
            <span className="header-status-dot"></span>
          </div>
          <h1 className="header-name">
            &lt; Cruz Ivan Brian /&gt;
          </h1>
        </div>

        {/* Sección Centro: Navegación Desktop */}
        <nav className="header-nav-desktop">
          <ul className="header-nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="header-nav-item">
                <a href={link.href} className="header-nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sección Derecha: Redes, Tema y Menú Móvil */}
        <div className="header-actions">
          
          {/* Redes Sociales (Iconos SVG) */}
          <div className="header-socials">
            <a href="ivan4912134@gmail.com" className="header-social-link" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer" className="header-social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/IvanBrianCruz" target="_blank" rel="noreferrer" className="header-social-link" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>

          {/* Interruptor de Tema */}
          <button 
            onClick={toggleTheme} 
            className="header-theme-toggle" 
            aria-label="Cambiar tema"
          >
            <div className={`header-toggle-track ${theme === 'dark' ? 'active' : ''}`}>
              <div className="header-toggle-thumb">
                {theme === 'light' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="header-icon-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="header-icon-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                )}
              </div>
            </div>
          </button>

          {/* Botón Menú Hamburguesa (Móvil) */}
          <button 
  className="header-menu-btn" 
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  aria-label="Menú"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {isMenuOpen ? (
      /* Estado: Cerrar (X) - Envolvemos los dos paths en un fragmento <> */
      <>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </>
    ) : (
      /* Estado: Hamburguesa - Envolvemos las tres lines en un fragmento <> */
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
            {navLinks.map((link) => (
              <li key={link.name} className="header-mobile-item">
                <a 
                  href={link.href} 
                  className="header-mobile-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;