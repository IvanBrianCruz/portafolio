import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Inicio from './components/Inicio'

import Proyectos from './components/Proyectos'

import Certificaciones from './components/Certificaciones'

import './styles/globals.css'
import './App.css'


import Page1 from './pages/Page1.jsx'


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
        {/* <Route path="/proyectos/gestion-academica" element={<Page2 />} /> */}
        {/* <Route path="/proyectos/arduino-rc" element={<Page3 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
