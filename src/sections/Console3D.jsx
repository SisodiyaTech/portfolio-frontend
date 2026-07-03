import { useRef, useState, useEffect } from "react";
import { Terminal, Cpu, HardDrive, Shield } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Console3D = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const terminalLogs = [
    "$ npm run build:production",
    "✓ compiling clients...",
    "✓ built in 1.45s (vite:client)",
    "● [DB] MongoDB cluster0 connected successfully.",
    "● [SYS] Speed Optimization: 100/100 (Core Web Vitals)",
    "● [SYS] Custom Cursor: GSAP Lerp loop active (60fps)",
    "● [SYS] Scroll Engine: Lenis smooth scroll fully loaded",
    "● [SYS] Status: Abhishek Portfolio engine ONLINE."
  ];

  // Handle 3D rotation based on mouse coordinates relative to the card center
  const handleMouseMove = (e) => {
    if (!containerRef.current || !cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const cardWidth = rect.width;
    const cardHeight = rect.height;
    
    // Mouse coords relative to the center of the card
    const mouseX = e.clientX - rect.left - cardWidth / 2;
    const mouseY = e.clientY - rect.top - cardHeight / 2;
    
    // Normalize and scale to max rotation (12 degrees max rotation for smooth natural tilt)
    const rotateY = (mouseX / (cardWidth / 2)) * 12;
    const rotateX = -(mouseY / (cardHeight / 2)) * 12;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth fade-in scroll animation for the entire section
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-32 px-6 bg-[#050505] overflow-hidden flex flex-col items-center justify-center border-b border-white/5"
      id="consoleSection"
    >
      <div ref={containerRef} className="max-w-6xl w-full flex flex-col items-center">
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white text-center mb-4">
          TOTAL SYSTEM <span className="text-primary drop-shadow-[0_0_8px_rgba(57,255,20,0.4)]">CONTROL.</span>
        </h2>
        <p className="text-muted text-sm md:text-base text-center max-w-2xl mb-20 leading-relaxed">
          Run terminal setups, construct responsive UI modules, optimize asset queries, and execute high-performance web systems hands-free.
        </p>

        {/* 3D Viewport wrapper - enabled on MD screens and above */}
        <div 
          className="relative w-full flex justify-center items-center h-[55vh] [perspective:1000px] select-none"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          
          {/* Card Wrapper tilting in 3D */}
          <div 
            ref={cardRef}
            className="relative flex flex-col items-center justify-center w-full max-w-3xl h-full rounded-3xl transition-transform duration-200 ease-out"
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            
            {/* 3D SCREEN: Tilts upright */}
            <div 
              className="absolute w-full h-[280px] bg-[#0c0c0e] rounded-2xl border border-primary/20 shadow-[0_0_30px_rgba(57,255,20,0.15)] p-5 overflow-hidden flex flex-col"
              style={{
                transform: "translateZ(30px) rotateX(10deg)",
                transformStyle: "preserve-3d"
              }}
            >
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4 shrink-0">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-primary" />
                  <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">System Console</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/85"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/85"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/85"></span>
                </div>
              </div>

              {/* Terminal content screen */}
              <div className="flex-1 font-mono text-[11px] md:text-sm text-primary/80 overflow-y-auto space-y-1.5 text-left select-text">
                {terminalLogs.map((log, index) => (
                  <div key={index} className="leading-relaxed">
                    <span className="text-white/40 mr-2">{`[04:24:${index * 7 + 10}]`}</span>
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* 3D KEYBOARD DECK: Tilted flat, lying down */}
            <div 
              className="absolute bottom-[-10px] w-[105%] h-[120px] bg-[#08080a] rounded-2xl border border-primary/20 p-4 shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
              style={{
                transform: "translateY(160px) translateZ(-40px) rotateX(-65deg)",
                transformStyle: "preserve-3d"
              }}
            >
              {/* Glowing keyboard base keycap simulation */}
              <div className="w-full h-full flex flex-col gap-2.5 justify-center">
                {/* Simulated deck variables */}
                <div className="flex justify-between items-center px-4">
                  <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-2 bg-[#0e0e12] border border-primary/10 px-3 py-1 rounded-md">
                      <Cpu size={12} className="text-primary" />
                      <span className="text-[9px] text-gray-400 font-bold uppercase">CPU: 1.2%</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#0e0e12] border border-primary/10 px-3 py-1 rounded-md">
                      <HardDrive size={12} className="text-primary" />
                      <span className="text-[9px] text-gray-400 font-bold uppercase">RAM: 42%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 px-3 py-1 rounded-md shadow-[0_0_10px_rgba(57,255,20,0.1)]">
                    <Shield size={12} className="text-primary" />
                    <span className="text-[9px] text-primary font-bold uppercase">FIREWALL: SECURE</span>
                  </div>
                </div>

                {/* Simulated glowing grid keys row */}
                <div className="flex justify-center gap-1.5 px-4 opacity-75">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-4 flex-1 rounded bg-[#0d0d12] border transition-all duration-300 ${
                        i === 3 || i === 7 || i === 11 
                          ? "border-primary bg-primary/20 shadow-[0_0_8px_rgba(57,255,20,0.5)]" 
                          : "border-white/5"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Console3D;
