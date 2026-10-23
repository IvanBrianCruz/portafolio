import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Certificaciones.css';

const CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Desarrollo Web & Full Stack' },
  { id: 'ai', label: 'Inteligencia Artificial (Google)' },
  { id: 'digital', label: 'Competencias Digitales & Seguridad' },
  { id: 'management', label: 'Gestión & Herramientas' },
];

// Array completo con todos tus certificados reales extraídos de tus PDFs
const CERTIFICATES_DATA = [
  // ================= ESPECIALIZACIONES & FULL STACK (DIGITAL HOUSE / EDUCACIÓN IT) =================
  {
    id: 'dh-react-ts-2026',
    title: 'Especialización en React.js & React + Redux con TypeScript',
    issuer: 'Digital House & Gobierno de Jujuy',
    program: 'Programa "Hacia mi Primer Empleo Digital"',
    date: 'Enero 2026',
    category: 'fullstack',
    featured: true,
    badgeText: 'Especialización',
    description:
      'Especialización avanzada en desarrollo Frontend moderno con React.js, manejo de estado global con Redux y tipado estático con TypeScript.',
    skills: ['React.js', 'Redux', 'TypeScript', 'Frontend Architecture'],
    pdfUrl: 'https://drive.google.com/file/d/1uOe8VtQTFeJKW7FaEe_s-NwM1Xom27PU/view?usp=drive_link',
  },
  {
    id: 'dh-fullstack-2024',
    title: 'Programación Web Full Stack (450 hs)',
    issuer: 'Digital House Academy & Gobierno de Jujuy',
    program: 'Programa "Hacia mi Primer Empleo Digital"',
    date: 'Enero - Septiembre 2024',
    category: 'fullstack',
    featured: true,
    badgeText: '450 Horas',
    description:
      'Formación intensiva de 450 horas en desarrollo web Full Stack, abarcando arquitectura cliente-servidor, bases de datos relacionales, APIs REST y despliegue.',
    skills: ['Node.js', 'Express', 'React', 'SQL', 'APIs REST', 'Git'],
    pdfUrl: 'https://drive.google.com/file/d/13wGKy1_06RJzDkauSewJ64gVQkgkOjuM/view?usp=drive_link',
  },
  {
    id: 'dh-web-dev-2023',
    title: 'Certificado Intermedio: Desarrollador Web',
    issuer: 'Digital House & Gobierno de Jujuy',
    program: 'Programa "Hacia mi Primer Empleo Digital"',
    date: 'Octubre 2023',
    category: 'fullstack',
    badgeText: 'Certificado Intermedio',
    description:
      'Reconocimiento intermedio por alcanzar los objetivos técnicos de maquetado, diseño adaptable y desarrollo de aplicaciones web.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    pdfUrl: 'https://drive.google.com/file/d/17iTKGf6FnVLpZ8-kPJDm70oC_CPqBE2F/view?usp=sharing',
  },
  {
    id: 'dh-beca-2023',
    title: 'Beca Completa 100% - Programación Web Full Stack',
    issuer: 'Digital House Academy & Gobierno de Jujuy',
    program: 'Mérito Académico - Hacia mi Primer Empleo Digital',
    date: 'Mayo 2023',
    category: 'fullstack',
    badgeText: 'Beca 100%',
    description:
      'Adjudicación de beca completa al mérito para cursar el programa intensivo de Programación Web Full Stack.',
    skills: ['Lógica de Programación', 'Desarrollo Web', 'Beca al Mérito'],
    pdfUrl: 'https://drive.google.com/file/d/1TmARj0CVE3GNAdBSxZ5SCFtL0Yf5f1oN/view?usp=sharing',
  },
  {
    id: 'educacionit-prog-2025',
    title: 'Introducción a la Programación',
    issuer: 'EducaciónIT',
    date: 'Mayo 2025',
    category: 'fullstack',
    badgeText: 'Aprobado',
    description:
      'Fundamentos de algoritmia, estructuras de datos, lógica computacional y resolución estructurada de problemas.',
    skills: ['Algoritmos', 'Lógica Computacional', 'Estructuras de Control'],
    pdfUrl: 'https://drive.google.com/file/d/1FZAxa32BtHbOzon1Y9UZUNz-wn9XQTFB/view?usp=drive_link',
  },

  // ================= GOOGLE AI PROFESSIONAL CERTIFICATE & CURSOS (COURSERA) =================
  {
    id: 'google-ai-prof-2026',
    title: 'Google AI Professional Certificate (Programa Completo - 7 Cursos)',
    issuer: 'Google & Coursera',
    date: 'Julio 2026',
    category: 'ai',
    featured: true,
    badgeText: 'Certificado Profesional (7 Cursos)',
    credentialId: 'NUMP41W3HTO6',
    verifyUrl: 'https://coursera.org/verify/professional-cert/NUMP41W3HTO6',
    description:
      'Certificación profesional completa de Google que acredita fluidez en Inteligencia Artificial aplicada a desarrollo de apps (Vibe Coding), análisis de datos, investigación, creación de contenido y comunicación.',
    skills: ['Google AI', 'Vibe Coding', 'Prompt Engineering', 'AI App Building', 'Data Analysis'],
    pdfUrl: '/certificados/2.pdf',
  },
  {
    id: 'google-ai-app-building',
    title: 'AI for App Building',
    issuer: 'Google & Coursera',
    date: '24 Julio 2026',
    category: 'ai',
    badgeText: 'Curso Oficial Google',
    credentialId: 'LVVR7M00120M',
    verifyUrl: 'https://coursera.org/verify/LVVR7M00120M',
    description:
      'Construcción de aplicaciones y soluciones de software a medida asistidas por Inteligencia Artificial.',
    skills: ['AI App Development', 'Vibe Coding', 'Prototipado con IA'],
    pdfUrl: '/certificados/2.pdf',
  },
  {
    id: 'google-ai-data-analysis',
    title: 'AI for Data Analysis',
    issuer: 'Google & Coursera',
    date: '22 Julio 2026',
    category: 'ai',
    badgeText: 'Curso Oficial Google',
    credentialId: 'CNLKU19YK7RX',
    verifyUrl: 'https://coursera.org/verify/CNLKU19YK7RX',
    description:
      'Aplicación de modelos de IA para procesamiento, limpieza, interpretación y visualización de conjuntos de datos.',
    skills: ['Data Analysis', 'Insights con IA', 'Automatización Analítica'],
    pdfUrl: '/certificados/2.pdf',
  },
  {
    id: 'google-ai-content',
    title: 'AI for Content Creation',
    issuer: 'Google & Coursera',
    date: '22 Julio 2026',
    category: 'ai',
    badgeText: 'Curso Oficial Google',
    credentialId: 'SLW1ABOEEMSY',
    verifyUrl: 'https://coursera.org/verify/SLW1ABOEEMSY',
    description:
      'Generación responsable de recursos digitales, multimedia y activos visuales mediante herramientas de IA generativa.',
    skills: ['IA Generativa', 'Producción Digital', 'Flujos Creativos'],
    pdfUrl: '/certificados/2.pdf',
  },
  {
    id: 'google-ai-writing',
    title: 'AI for Writing and Communicating',
    issuer: 'Google & Coursera',
    date: '21 Julio 2026',
    category: 'ai',
    badgeText: 'Curso Oficial Google',
    credentialId: 'CJSYZSMRH6CG',
    verifyUrl: 'https://coursera.org/verify/CJSYZSMRH6CG',
    description:
      'Optimización de documentación técnica, redacción ejecutiva y comunicación efectiva apoyada en modelos de lenguaje.',
    skills: ['Comunicación Técnica', 'LLMs', 'Redacción Asistida'],
    pdfUrl: '/certificados/2.pdf',
  },
  {
    id: 'google-ai-research',
    title: 'AI for Research and Insights',
    issuer: 'Google & Coursera',
    date: '19 Julio 2026',
    category: 'ai',
    badgeText: 'Curso Oficial Google',
    credentialId: '8CBKWPUPHE8L',
    verifyUrl: 'https://coursera.org/verify/8CBKWPUPHE8L',
    description:
      'Metodologías de investigación acelerada, síntesis de información compleja y validación de fuentes con IA.',
    skills: ['Investigación con IA', 'Síntesis de Datos', 'Pensamiento Crítico'],
    pdfUrl: '/certificados/2.pdf',
  },
  {
    id: 'google-ai-brainstorming',
    title: 'AI for Brainstorming and Planning',
    issuer: 'Google & Coursera',
    date: '19 Julio 2026',
    category: 'ai',
    badgeText: 'Curso Oficial Google',
    credentialId: 'Z1HPV08MR14B',
    verifyUrl: 'https://coursera.org/verify/Z1HPV08MR14B',
    description:
      'Planificación estratégica de proyectos, ideación estructurada y organización de flujos de trabajo con IA.',
    skills: ['Planificación de Proyectos', 'Ideación', 'Productividad'],
    pdfUrl: '/certificados/2.pdf',
  },
  {
    id: 'google-ai-fundamentals',
    title: 'AI Fundamentals',
    issuer: 'Google & Coursera',
    date: '19 Julio 2026',
    category: 'ai',
    badgeText: 'Curso Oficial Google',
    credentialId: 'FCU6MBUPLZJU',
    verifyUrl: 'https://coursera.org/verify/FCU6MBUPLZJU',
    description:
      'Principios fundamentales de la Inteligencia Artificial, aprendizaje automático, ética e ingeniería de prompts.',
    skills: ['Fundamentos de IA', 'Machine Learning', 'Prompting Ético'],
    pdfUrl: '/certificados/2.pdf',
  },

  // ================= IMMUNE TECHNOLOGY INSTITUTE & CIBERSEGURIDAD =================
  {
    id: 'immune-360-300h',
    title: 'Programa en Competencias Digitales: Una Visión 360° (300 hs)',
    issuer: 'IMMUNE Technology Institute, OIJ, SEGIB & Cooperación Española',
    date: 'Diploma General - 300 Horas',
    category: 'digital',
    featured: true,
    badgeText: '300 Horas (3 Bloques)',
    description:
      'Programa internacional de 300 horas dividido en 3 bloques integrales: Desarrollo y Cloud (Bloque I), IA, Datos y Frontend (Bloque II), y Habilidades Blandas y Empleabilidad Digital (Bloque III).',
    skills: [
      'Python',
      'SQL',
      'JavaScript & Frontend',
      'Prompt Engineering',
      'Power BI & Big Data',
      'Ciberseguridad',
      'Cloud Computing',
      'Soft Skills',
    ],
    pdfUrl: 'https://drive.google.com/file/d/1kZeiXC5KmITBiZBG4A_-NqGkz-e-rNQR/view?usp=sharing',
  },
  {
    id: 'immune-bloque-1',
    title: 'Bloque I: Python, SQL, Ciberseguridad, Web & Cloud Computing',
    issuer: 'IMMUNE Technology Institute',
    date: 'Competencias Digitales',
    category: 'digital',
    badgeText: 'Bloque Técnico I',
    description:
      'Aprobación de los 5 módulos fundacionales: Programación básica en Python, Diseño y gestión de bases de datos (SQL), Ciberseguridad y ciberamenazas, Fundamentos de Desarrollo Web y Cloud Computing.',
    skills: ['Python', 'SQL', 'Ciberseguridad', 'Cloud Computing', 'Desarrollo Web'],
    pdfUrl: 'https://drive.google.com/file/d/1jKPOry5YcrWwAX_HRvo-FGGL6b1a5oBv/view?usp=sharing',
  },
  {
    id: 'immune-bloque-2',
    title: 'Bloque II: IA Prompt Engineer, Power BI, Big Data, JS & Frontend',
    issuer: 'IMMUNE Technology Institute',
    date: 'Competencias Digitales',
    category: 'digital',
    badgeText: 'Bloque Técnico II',
    description:
      'Aprobación de los módulos avanzados: Inteligencia Artificial (Prompt Engineer), Análisis, minería y visualización de datos con Power BI, Impacto y valor del Big Data, JavaScript y Frontend.',
    skills: ['Prompt Engineer', 'Power BI', 'Big Data', 'JavaScript', 'Frontend'],
    pdfUrl: 'https://drive.google.com/file/d/1KJ6NGpOnBeqOnqw_TCTP8FozYYEG5hy8/view?usp=sharing',
  },
  {
    id: 'immune-bloque-3',
    title: 'Bloque III: Soft Skills & Empleabilidad en la Era Digital',
    issuer: 'IMMUNE Technology Institute',
    date: 'Competencias Digitales',
    category: 'digital',
    badgeText: 'Bloque III',
    description:
      'Formación en habilidades interpersonales para entornos tecnológicos ágiles y competencias estratégicas de inserción laboral.',
    skills: ['Liderazgo', 'Trabajo en Equipo', 'Comunicación Efectiva', 'Empleabilidad IT'],
    pdfUrl: 'https://drive.google.com/file/d/1Noue7_oOQvZEWcPZeIGTTZ-ta9O39v9a/view?usp=sharing',
  },
  {
    id: 'hp-ciberseguridad-2026',
    title: 'Introducción al Conocimiento de la Ciberseguridad',
    issuer: 'HP LIFE & HP Foundation',
    date: '25 Agosto 2026',
    category: 'digital',
    badgeText: 'HP Foundation',
    credentialId: '8ae91d88-57ec-4bd1-9422-c8c52064f7d2',
    description:
      'Identificación de amenazas frecuentes a la seguridad informática y aplicación de protocolos para proteger la integridad de la información y datos en línea.',
    skills: ['Ciberseguridad', 'Protección de Datos', 'Seguridad en Red'],
    pdfUrl: 'https://drive.google.com/file/d/1qRiZGcOMnvqBgtLE5HcjWeGPf6HU7WQo/view?usp=drive_link',
  },

  // ================= GESTIÓN EMPRESARIAL & HERRAMIENTAS (UNJU / TANGO) =================
  {
    id: 'unju-excel-2021',
    title: 'Curso Práctico Profesional de Excel',
    issuer: 'Universidad Nacional de Jujuy (UNJu) - Fac. Ciencias Económicas',
    program: 'Resolución R. N° 1457/21 - Expte. N° S-1203/21',
    date: 'Septiembre 2021 (8 hs cátedra)',
    category: 'management',
    badgeText: 'Resolución UNJu',
    description:
      'Capacitación universitaria en manejo profesional de hojas de cálculo, fórmulas avanzadas y procesamiento de datos administrativos.',
    skills: ['Microsoft Excel', 'Análisis de Datos', 'Automatización Contable'],
    pdfUrl: 'https://drive.google.com/file/d/1eaxaZFBFQt9f4lx6jGi4n4ntjh8n977T/view?usp=sharing',
  },
  {
    id: 'tango-operatoria-2021',
    title: 'Tango Gestión T19 - Operatoria',
    issuer: 'Tango University - Axoft Argentina S.A.',
    date: 'Enero 2021',
    category: 'management',
    badgeText: 'Insignia Verificada',
    verifyUrl: 'https://tangouniversity.axoft.com/badges/badge.php?hash=72dbca656cea9bd7c61cd4ca1e7133969c7ef371',
    description:
      'Certificación oficial en operatoria integral de sistemas ERP: módulos de Operaciones en Stock, Ventas, Compras y Tesorería.',
    skills: ['ERP Tango Gestión', 'Stock & Ventas', 'Compras & Tesorería'],
    pdfUrl: 'https://drive.google.com/file/d/1BsmeE31Uc9ypdC-vjXJlvxzorgHgas9H/view?usp=drive_link',
  },
  {
    id: 'tango-puesta-marcha-2020',
    title: 'Tango Gestión T19 - Puesta en Marcha',
    issuer: 'Tango University - Axoft Argentina S.A.',
    date: 'Diciembre 2020',
    category: 'management',
    badgeText: 'Insignia Verificada',
    verifyUrl: 'https://tangouniversity.axoft.com/badges/badge.php?hash=14dd000cdc3ba1c6ddf231e6491a3209c46316cf',
    description:
      'Parametrización general y configuración inicial de los circuitos administrativos de Stock, Ventas, Compras y Tesorería.',
    skills: ['Configuración ERP', 'Parámetros Generales', 'Sistemas de Gestión'],
    pdfUrl: 'https://drive.google.com/file/d/1p8F-K4Itd6PhqvYR40dZZhXRPqbqX236/view?usp=drive_link',
  },
];

const Certificaciones = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalCert, setActiveModalCert] = useState(null);

  // Filtrado combinado por categoría y buscador
  const filteredCertificates = CERTIFICATES_DATA.filter((cert) => {
    const matchesCategory =
      selectedCategory === 'all' || cert.category === selectedCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="cert-page-wrapper">
      {/* 1. Header Superior */}
      <Header />

      <main className="cert-main">
        {/* ================= ENCABEZADO Y ESTADÍSTICAS ================= */}
        <section className="cert-hero">
          <div className="cert-glow"></div>

          <span className="cert-hero-tag">&lt; Formación Continua Verificada /&gt;</span>
          <h1 className="cert-hero-title">Cursos &amp; Certificaciones</h1>
          <p className="cert-hero-subtitle">
            Credenciales académicas, especializaciones en desarrollo de software e Inteligencia Artificial otorgadas por instituciones como <strong>Google, Digital House, IMMUNE Technology Institute, UNJu y EducaciónIT</strong>.
          </p>

          {/* Resumen rápido en números */}
          <div className="cert-stats-row">
            <div className="cert-stat-card">
              <span className="stat-number">{CERTIFICATES_DATA.length}</span>
              <span className="stat-label">Certificaciones</span>
            </div>
            <div className="cert-stat-card">
              <span className="stat-number">+750h</span>
              <span className="stat-label">Horas Acreditadas</span>
            </div>
            <div className="cert-stat-card">
              <span className="stat-number">7</span>
              <span className="stat-label">Cursos Google AI</span>
            </div>
            <div className="cert-stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Verificables</span>
            </div>
          </div>
        </section>

        {/* ================= BARRA DE FILTROS Y BUSCADOR ================= */}
        <section className="cert-controls-section">
          <div className="cert-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`cert-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="cert-search-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
            <input
              type="text"
              placeholder="Buscar por tecnología (ej. React, IA, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="cert-search-input"
            />
          </div>
        </section>

        {/* ================= GRILLA DE CERTIFICADOS ================= */}
        <section className="cert-grid-section">
          <div className="cert-grid">
            {filteredCertificates.map((cert) => (
              <article
                key={cert.id}
                className={`cert-card ${cert.featured ? 'cert-card-featured' : ''}`}
              >
                <div className="cert-card-top">
                  <span className={`cert-badge cat-${cert.category}`}>
                    {cert.badgeText}
                  </span>
                  <span className="cert-date">{cert.date}</span>
                </div>

                <h2 className="cert-title">{cert.title}</h2>
                <p className="cert-issuer">{cert.issuer}</p>
                {cert.program && <p className="cert-program">{cert.program}</p>}

                <p className="cert-description">{cert.description}</p>

                {/* Etiquetas de habilidades */}
                <div className="cert-skills">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="cert-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* ID de credencial si existe */}
                {cert.credentialId && (
                  <div className="cert-credential-id">
                    <span>ID Credencial:</span> <code>{cert.credentialId}</code>
                  </div>
                )}

                {/* Botones de acción en cada certificado */}
                <div className="cert-card-actions">
                  <button
                    type="button"
                    onClick={() => setActiveModalCert(cert)}
                    className="cert-btn-detail"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    Ver Detalle
                  </button>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-btn-verify"
                    >
                      Verificar Online ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* ================= MODAL DE VISTA DETALLADA ================= */}
      {activeModalCert && (
        <div className="cert-modal-overlay" onClick={() => setActiveModalCert(null)}>
          <div className="cert-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="cert-modal-close"
              onClick={() => setActiveModalCert(null)}
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            <span className="cert-modal-badge">{activeModalCert.badgeText}</span>
            <h3 className="cert-modal-title">{activeModalCert.title}</h3>
            <p className="cert-modal-issuer">
              Emitido por: <strong>{activeModalCert.issuer}</strong> ({activeModalCert.date})
            </p>

            <div className="cert-modal-recipient">
              Otorgado a: <strong>Cruz Delgado Brian Ivan</strong>
            </div>

            <p className="cert-modal-desc">{activeModalCert.description}</p>

            <div className="cert-modal-skills">
              {activeModalCert.skills.map((skill, idx) => (
                <span key={idx} className="cert-skill-pill">
                  {skill}
                </span>
              ))}
            </div>

            <div className="cert-modal-footer">
              {activeModalCert.verifyUrl && (
                <a
                  href={activeModalCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-btn-primary"
                >
                  Validar Credencial Oficial ↗
                </a>
              )}
              {activeModalCert.pdfUrl && (
                <a
                  href={activeModalCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-btn-secondary"
                >
                  Abrir PDF Original
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. Footer Inferior */}
      <Footer />
    </div>
  );
};

export default Certificaciones;