import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Inicio from './components/Inicio'

import Proyectos from './components/Proyectos'

import Certificaciones from './components/Certificaciones'


import './App.css'


import Page1 from './pages/Page1.jsx'
import ProjectoDetalle from './pages/ProyectoDetalle.jsx'
import Projecto2Detalle from './pages/Proyecto2Detalle.jsx'
import Proyecto3Detalle from './pages/Proyecto3Detalle.jsx'
import Proyecto4Detalle from './pages/Proyecto4Detalle.jsx'
import Proyecto5Detalle from './pages/Proyecto5Detalle.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta Principal (Tu Portafolio) */}
        <Route path="/" element={
          <>
            <Inicio />
           
          </>
        } />

<Route path="/certificaciones" element={<Certificaciones />} />
<Route path="/proyectos" element={<Proyectos />} />
        {/* Rutas Individuales para cada Proyecto */}
        <Route path="/proyectos/mercado-liebre" element={<Page1 />} />
        <Route path="/proyectos/1" element={<ProjectoDetalle />} />
        <Route path="/proyectos/2" element={<Projecto2Detalle />} />
        <Route path="/proyectos/3" element={<Proyecto3Detalle />} />
        <Route path="/proyectos/4" element={<Proyecto4Detalle />} />
        <Route path="/proyectos/5" element={<Proyecto5Detalle />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App
