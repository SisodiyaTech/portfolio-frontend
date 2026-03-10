import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Service from "./Components/Service.jsx";
import Skills from "./Components/Skills.jsx";
import Contact from "./Components/Contact.jsx";
import Projects from "./Components/Projects.jsx";
import Footer from "./Components/Footer.jsx";


function ScrollLogger() {
  useLenis((lenis) => {
    // called every scroll
    console.log(lenis.scroll);
  });

  return null;
}

const App = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        duration: 2,
        smoothWheel: true,
        wheelMultiplier: 0.7,
        smoothTouch: true,
        touchMultiplier: 1.5
      }}
    >
      <ScrollLogger />

      <section>
        <Navbar />
      </section>

      <section>
        <Hero />
      </section>

      <section>
        <Skills />
      </section>

      <section>
        <Service />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </ReactLenis>
  );
};

export default App;