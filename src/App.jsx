import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Service from './Components/Service.jsx'
import Skills from './Components/Skills.jsx'
import Contact from './Components/Contact.jsx'
import Projects from './Components/Projects.jsx'
import Footer from './Components/Footer.jsx'

Hero

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Skills />
    <Service />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
