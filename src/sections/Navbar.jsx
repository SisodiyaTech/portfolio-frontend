import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    // Animate navbar sliding down, leaving horizontal centering to native CSS layout (left-0 right-0 mx-auto)
    gsap.fromTo(
      navRef.current,
      { y: -120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.5 },
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-6 md:top-8 left-0 right-0 mx-auto w-[92%] md:w-[85%] lg:w-[75%] px-8 py-4 flex justify-center items-center bg-black/60 backdrop-blur-lg z-50 border border-primary/20 rounded-full text-white shadow-[0_4px_30px_rgba(57,255,20,0.15)]"
    >
      <a href="#heroSec" className="absolute left-8 text-lg md:text-xl font-display font-black tracking-tighter text-primary drop-shadow-[0_0_8px_rgba(57,255,20,0.5)] cursor-pointer">
        ABHISHEK<span className="text-white">.</span>
      </a>
      
      <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest mx-auto">
        <a href="#projects" className="hover:text-primary transition-all duration-300 relative group whitespace-nowrap">
          Projects
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#services" className="hover:text-primary transition-all duration-300 relative group whitespace-nowrap">
          Services
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#about" className="hover:text-primary transition-all duration-300 relative group whitespace-nowrap">
          About
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#process" className="hover:text-primary transition-all duration-300 relative group whitespace-nowrap">
          Process
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#contact" className="hover:text-primary transition-all duration-300 relative group whitespace-nowrap">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>
      
      <a
        href="#contact"
        className="absolute right-8 group flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest border border-primary/80 bg-primary/10 rounded-full px-5 py-2.5 hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-300"
      >
        Let&apos;s talk
        <ArrowUpRight
          size={14}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </a>
    </nav>
  );
};
export default Navbar;
