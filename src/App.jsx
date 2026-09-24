import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Body from './components/Body/Body';
import RedesSociales from './components/RedesSociales/RedesSociales';
import Footer from './components/Footer/Footer';
import PreEstilos from './components/PreEstilos/PreEstilos';
import Citas from './vistas/Citas';


import Home from './vistas/Home';
import Galeria from './vistas/Galeria';
import Personal from './vistas/Personal';
import About from './vistas/About';
import AgendarCita from './vistas/Citas';


const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme)
  }, [theme])

  return (
    <div className={`container ${theme}`}>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/Galeria"
            element={<Galeria />}
          />

          <Route
            path="/About"
            element={<About />}
          />

          <Route
            path="/Personal"
            element={<Personal />}
          />
          
          <Route 
            path="/AgendarCita"
            element={<Citas />}
          />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App
