import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import About from './components/About'
import Hero from './components/Hero'
import Experiencia from './components/Experiencia'
import Proyectos from './components/Proyectos'
import Cursos from './components/Cursos'
import Certificaciones from './components/Certificaciones'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
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
            <Header />
            <About />
            <Experiencia />
            <Proyectos />
           
          </>
        } />

        {/* Rutas Individuales para cada Proyecto */}
        <Route path="/proyectos/mercado-liebre" element={<Page1 />} />
        {/* <Route path="/proyectos/gestion-academica" element={<Page2 />} /> */}
        {/* <Route path="/proyectos/arduino-rc" element={<Page3 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
