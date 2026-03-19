import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.5 },
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-8 mix-blend-difference"
    >
      <div className="text-xl font-display font-bold tracking-tighter" style={{letterSpacing:"3px"}}>
        ABHISHEK<span className="text-muted">.</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
        <a href="#projects" className="hover:opacity-50 transition-opacity">
          Projects
        </a>
        <a href="#services" className="hover:opacity-50 transition-opacity">
          Services
        </a>
        <a href="#about" className="hover:opacity-50 transition-opacity">
          About
        </a>
        <a href="#contact" className="hover:opacity-50 transition-opacity">
          Contact
        </a>
      </div>
      <a
        href="#contact"
        className="group flex items-center gap-2 text-sm font-medium uppercase tracking-widest border border-white/20 rounded-full px-6 py-2 hover:bg-white hover:text-black transition-all duration-300"
      >
        Let&apos;s talk
        <ArrowUpRight
          size={16}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </a>
    </nav>
  );
};
export default Navbar;
