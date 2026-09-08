import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Body from './components/Body/Body';
import RedesSociales from './components/RedesSociales/RedesSociales';
import Footer from './components/Footer/Footer';
import PreEstilos from './components/PreEstilos/PreEstilos';


const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme)
  }, [theme])

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Body />
      <PreEstilos />
      <RedesSociales />
      <Footer />
    </div>

  )
}

export default App