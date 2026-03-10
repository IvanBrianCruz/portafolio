export const portfolioData = {
  personal: {
    name: "Iván Brian Cruz",
    title: "Desarrollador Full Stack",
    subtitle: "Profesor de Informática",
    description: "Desarrollador Full Stack especializado en React, Node.js y bases de datos. Apasionado por crear soluciones web innovadoras y transferir conocimiento.",
    email: "ivan@email.com",
    phone: "+1234567890",
    location: "Tu ubicación"
  },

  skills: [
    { category: "Frontend", items: ["React", "JSX", "JavaScript", "CSS3", "Vite"] },
    { category: "Backend", items: ["Node.js", "Express", "APIs REST"] },
    { category: "Bases de Datos", items: ["PostgreSQL", "MySQL", "Firebase", "Supabase"] },
    { category: "Otros", items: ["Git", "SQL", "Full Stack Development"] }
  ],

  experiencia: [
    {
      id: 1,
      puesto: "Profesor de Informática",
      empresa: "Institución Educativa",
      periodo: "2020 - Presente",
      descripcion: "Enseñanza de programación, bases de datos y desarrollo web a estudiantes de diferentes niveles.",
      logros: [
        "Desarrollo de plan de estudios actualizado",
        "Mentoring a estudiantes en proyectos finales",
        "Capacitación en tecnologías modernas"
      ]
    },
    {
      id: 2,
      puesto: "Desarrollador Full Stack Freelance",
      empresa: "Proyectos Independientes",
      periodo: "2019 - Presente",
      descripcion: "Desarrollo de aplicaciones web completas con React, Node.js y bases de datos.",
      logros: [
        "Aplicaciones web escalables",
        "Integración con APIs externas",
        "Optimización de rendimiento"
      ]
    }
  ],

  proyectos: [
    {
      id: 1,
      titulo: "Sistema de Gestión de Tareas",
      descripcion: "Aplicación web para gestionar proyectos y tareas",
      imagen: "https://via.placeholder.com/300x200?text=Proyecto+1",
      tecnologias: ["React", "Node.js", "PostgreSQL", "Express"],
      detalles: {
        descripcionCompleta: "Una aplicación completa de gestión de tareas con autenticación de usuarios, tableros colaborativos y seguimiento de progreso.",
        features: [
          "Autenticación de usuarios",
          "Crear, editar y eliminar tareas",
          "Asignar tareas a usuarios",
          "Trackeo de progreso",
          "Notificaciones en tiempo real"
        ],
        github: "https://github.com",
        demo: "https://demo.com"
      },
      linkGitHub: "https://github.com",
      linkDemo: "https://demo.com"
    },
    {
      id: 2,
      titulo: "E-commerce Multiplataforma",
      descripcion: "Tienda en línea con carrito y pasarela de pago",
      imagen: "https://via.placeholder.com/300x200?text=Proyecto+2",
      tecnologias: ["React", "Firebase", "Stripe", "Vite"],
      detalles: {
        descripcionCompleta: "Plataforma de e-commerce completa con gestión de inventario, carrito de compras, procesamiento de pagos y panel de administración.",
        features: [
          "Catálogo de productos dinámico",
          "Sistema de carrito",
          "Integración Stripe",
          "Autenticación con Firebase",
          "Panel de administración",
          "Historial de órdenes"
        ],
        github: "https://github.com",
        demo: "https://demo.com"
      },
      linkGitHub: "https://github.com",
      linkDemo: "https://demo.com"
    },
    {
      id: 3,
      titulo: "API REST de Usuarios",
      descripcion: "Backend API para gestión de usuarios y autenticación",
      imagen: "https://via.placeholder.com/300x200?text=Proyecto+3",
      tecnologias: ["Node.js", "Express", "MySQL", "JWT"],
      detalles: {
        descripcionCompleta: "API REST robusta construida con Express.js para gestionar usuarios, autenticación con JWT y operaciones CRUD completas.",
        features: [
          "Autenticación JWT",
          "CRUD de usuarios",
          "Validación de datos",
          "Manejo de errores",
          "Documentación con Swagger",
          "Rate limiting"
        ],
        github: "https://github.com",
        demo: "https://demo.com"
      },
      linkGitHub: "https://github.com",
      linkDemo: "https://demo.com"
    }
  ],

  cursos: [
    {
      id: 1,
      titulo: "React Avanzado",
      plataforma: "Udemy",
      instructor: "Nombre del Instructor",
      duracion: "40 horas",
      descripcion: "Curso especializado en conceptos avanzados de React, hooks, context API y optimización.",
      enlace: "https://udemy.com",
      progreso: 100
    },
    {
      id: 2,
      titulo: "Node.js & Express",
      plataforma: "Coursera",
      instructor: "Nombre del Instructor",
      duracion: "35 horas",
      descripcion: "Desarrollo backend con Node.js, creación de APIs REST y manejo de bases de datos.",
      enlace: "https://coursera.org",
      progreso: 100
    },
    {
      id: 3,
      titulo: "Bases de Datos SQL",
      plataforma: "LinkedIn Learning",
      instructor: "Nombre del Instructor",
      duracion: "25 horas",
      descripcion: "Diseño y gestión de bases de datos SQL, PostgreSQL y MySQL.",
      enlace: "https://linkedin.com",
      progreso: 100
    },
    {
      id: 4,
      titulo: "Full Stack Development",
      plataforma: "FreeCodeCamp",
      instructor: "Nombre del Instructor",
      duracion: "50 horas",
      descripcion: "Ruta completa de desarrollo full stack con proyectos prácticos.",
      enlace: "https://freecodecamp.org",
      progreso: 100
    }
  ],

  certificaciones: [
    {
      id: 1,
      titulo: "React Developer Certified",
      emisor: "Meta (Facebook)",
      fecha: "2023",
      descripcion: "Certificación oficial de Meta en React y desarrollo frontend.",
      imagen: "https://via.placeholder.com/200x150?text=Certificado+1",
      enlace: "https://credential.example.com"
    },
    {
      id: 2,
      titulo: "Full Stack JavaScript Developer",
      emisor: "The Odin Project",
      fecha: "2023",
      descripcion: "Certificación en desarrollo full stack con JavaScript, React y Node.js.",
      imagen: "https://via.placeholder.com/200x150?text=Certificado+2",
      enlace: "https://credential.example.com"
    },
    {
      id: 3,
      titulo: "Database Design & SQL",
      emisor: "Udemy",
      fecha: "2022",
      descripcion: "Certificación en diseño de bases de datos y SQL avanzado.",
      imagen: "https://via.placeholder.com/200x150?text=Certificado+3",
      enlace: "https://credential.example.com"
    },
    {
      id: 4,
      titulo: "AWS Solutions Architect",
      emisor: "Amazon Web Services",
      fecha: "2023",
      descripcion: "Certificación en arquitectura y servicios de AWS.",
      imagen: "https://via.placeholder.com/200x150?text=Certificado+4",
      enlace: "https://credential.example.com"
    }
  ]
};
