/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import About from './sections/About';
import Process from './sections/Process';
import Contact from './sections/Contacts';
import Console3D from './sections/Console3D';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // Connect Lenis scroll to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Custom cursor logic
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor hidden md:block';
    document.body.appendChild(cursor);

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: mouse.x, y: mouse.y };

    const moveCursor = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('cursor-pointer')
      ) {
        cursor.classList.add('hovered');
      } else {
        cursor.classList.remove('hovered');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    // Named function for GSAP ticker callback to enable exact cleanup
    const updateRaf = (time) => {
      // Tick Lenis smooth scroll
      lenis.raf(time * 1000);

      // Cursor smooth linear interpolation (lerp)
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;
      gsap.set(cursor, { x: pos.x, y: pos.y, xPercent: -50, yPercent: -50 });
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
    };
  }, []);

  return (
    <main className="relative bg-background text-foreground selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Console3D />
      <Process />
      <Contact />
    </main>
  );
}
