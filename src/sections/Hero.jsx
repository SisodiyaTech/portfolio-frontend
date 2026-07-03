import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, Mic, Command } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import videoSrc from "../assets/Videos/BackgroundVideo.webm";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const HeroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(titleRef.current, { y: 100, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.8
      })
      .fromTo(subRef.current, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8
      }, "-=0.6")
      .fromTo(ctaRef.current, { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8
      }, "-=0.4");

      // Scaling down scroll animation to reveal subsequent sections
      gsap.to(HeroRef.current, {
        scale: 0.8,
        opacity: 0,
        borderRadius: "40px",
        ease: "none",
        scrollTrigger: {
          trigger: HeroRef.current,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: true,
        },
      });
    }, HeroRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={HeroRef} className="relative w-screen h-screen bg-[#050505] overflow-hidden" id="heroSec">
      {/* Background Video with Neon Dark Grid Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-40">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
      </div>

      <section
        ref={containerRef}
        className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 pt-20"
      >
        <div className="max-w-5xl w-full text-center flex flex-col items-center">
          
          {/* Glowing Large Neon Title */}
          <h1
            ref={titleRef}
            className="text-[16vw] sm:text-[12vw] md:text-[9vw] font-display font-bold leading-[0.9] tracking-tighter text-primary select-none drop-shadow-[0_0_15px_rgba(57,255,20,0.6)] mb-2"
          >
            ABHISHEK.DEV
          </h1>

          {/* Subtitle */}
          <p
            ref={subRef}
            className="text-[10px] md:text-sm tracking-[0.35em] uppercase text-white font-bold mb-6"
            style={{ textShadow: "0 0 10px rgba(0,0,0,1)" }}
          >
            Your High-Performance Full-Stack Developer
          </p>

          {/* Core description */}
          <p className="max-w-2xl text-sm md:text-lg text-white/80 leading-relaxed mb-6">
            Commanding web experiences. Abhishek crafts lightning-fast websites, modern UX/UI interfaces, and production-ready architectures with <span className="text-primary font-bold">Zero Lag.</span>
          </p>

          {/* Animated voice wave visualizer bar */}
          <div className="flex items-center gap-3 mt-2 mb-8 bg-black/40 px-5 py-2.5 rounded-full border border-primary/20 backdrop-blur-md">
            <Mic size={14} className="text-white" />
            <div className="flex items-end h-[16px]">
              <span className="iris-wave-bar"></span>
              <span className="iris-wave-bar"></span>
              <span className="iris-wave-bar"></span>
              <span className="iris-wave-bar"></span>
              <span className="iris-wave-bar"></span>
              <span className="iris-wave-bar"></span>
              <span className="iris-wave-bar"></span>
            </div>
            <span className="text-[11px] text-white tracking-widest uppercase font-semibold">
              Native Speed OS
            </span>
          </div>

          {/* Button CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="group flex items-center justify-between gap-3 px-8 py-4 rounded-xl bg-primary/25 border border-primary/40 text-white font-semibold text-sm hover:bg-primary/45 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-300 w-full sm:w-auto"
            >
              <div className="flex items-center gap-2">
                <Command size={16} className="text-primary" />
                <span>VIEW PROJECTS</span>
              </div>
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-transparent border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300 w-full sm:w-auto"
            >
              <span>GET IN TOUCH</span>
            </a>
          </div>

          {/* Tech badges at bottom */}
          <div className="flex items-center gap-3 mt-12 flex-wrap justify-center">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-primary/25 bg-black/80 backdrop-blur-md">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Stack</span>
              <span className="text-[11px] text-primary font-bold">MERN / Next.js</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-primary/25 bg-black/80 backdrop-blur-md">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Speed</span>
              <span className="text-[11px] text-primary font-bold">Real-Time</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-primary/25 bg-black/80 backdrop-blur-md">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">UX/UI</span>
              <span className="text-[11px] text-primary font-bold">Premium</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-primary/25 bg-black/80 backdrop-blur-md">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Animations</span>
              <span className="text-[11px] text-primary font-bold">GSAP / Lenis</span>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <ArrowDown size={20} />
        </div>
      </section>
    </div>
  );
};

export default Hero;