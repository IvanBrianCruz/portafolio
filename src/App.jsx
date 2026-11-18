import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Inicio from './components/Inicio';
import Proyectos from './components/Proyectos';
import Certificaciones from './components/Certificaciones';

import './App.css';

import Page1 from './pages/Page1.jsx';
import ProjectoDetalle from './pages/ProyectoDetalle.jsx';
import Projecto2Detalle from './pages/Proyecto2Detalle.jsx';
import Proyecto3Detalle from './pages/Proyecto3Detalle.jsx';
import Proyecto4Detalle from './pages/Proyecto4Detalle.jsx';
import Proyecto5Detalle from './pages/Proyecto5Detalle.jsx';
import Proyecto6Detalle from './pages/Proyecto6Detalle.jsx';
import Proyecto7Detalle from './pages/Proyecto7Detalle.jsx';
import Proyecto8Detalle from './pages/Proyecto8Detalle.jsx';
import Proyecto9Detalle from './pages/Proyecto9Detalle.jsx';

// Componente para resetear el scroll arriba al cambiar de página
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Ruta Principal (Portafolio) */}
        <Route path="/" element={<Inicio />} />

        {/* Secciones Principales */}
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/certificaciones" element={<Certificaciones />} />

        {/* Rutas Individuales de Detalle de Proyectos */}
        <Route path="/proyectos/1" element={<ProjectoDetalle />} />
        <Route path="/proyectos/2" element={<Projecto2Detalle />} />
        <Route path="/proyectos/3" element={<Proyecto3Detalle />} />
        <Route path="/proyectos/4" element={<Proyecto4Detalle />} />
        <Route path="/proyectos/5" element={<Proyecto5Detalle />} />
        <Route path="/proyectos/6" element={<Proyecto6Detalle />} />
        <Route path="/proyectos/7" element={<Proyecto7Detalle />} />
        <Route path="/proyectos/8" element={<Proyecto8Detalle />} />
        <Route path="/proyectos/9" element={<Proyecto9Detalle />} />

        {/* Vistas Adicionales */}
        <Route path="/proyectos/mercado-liebre" element={<Page1 />} />

        {/* Fallback a inicio */}
        <Route path="*" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
