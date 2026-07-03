import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import Portfolio from "../assets/Images/portfolioFirst.webp"
import colorPicker from "../assets/Images/colorPicker.webp"
import mahakalFinance from "../assets/Images/mahakalFinance.webp"
import SearchEngine from "../assets/Images/SearchEngine.webp"
import moneyTracker from "../assets/Images/moneyTracker.webp"
import samyakClasses from "../assets/Images/samyakClasses.webp"
import AITools from "../assets/Images/AI-Tools.webp"

gsap.registerPlugin(ScrollTrigger);


const projects = [
  {
    id: 1,
    title: "Portfolio Project",
    category: "Portfolio Website",
    image: Portfolio,
  },
  {
    id: 2,
    title: "Color Picker",
    category: "Tool / Utility",
    image: colorPicker,
  },
  {
    id: 3,
    title: "Mahakal Finance Services",
    category: "Business Website",
    image: mahakalFinance,
  },
  {
    id: 4,
    title: "Search Engine",
    category: "Web Tool",
    image: SearchEngine,
  },
  {
    id: 5,
    title: "Money Tracker",
    category: "Finance App",
    image: moneyTracker,
  },
  {
    id: 6,
    title: "Samyak Computer Classes",
    category: "Educational Website",
    image: samyakClasses,
  },
  {
    id: 7,
    title: "AI Tools Blog",
    category: "Blog / Directory",
    image: AITools,
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        if (!item) return;
        
        gsap.fromTo(
          item,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
            }
          }
        );
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="py-32 px-6 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white">
            FEATURED <br /> <span className="text-primary drop-shadow-[0_0_8px_rgba(57,255,20,0.4)]">PRODUCTIONS.</span>
          </h2>
          <div className="flex gap-4">
            <div className="w-12 h-px bg-primary/30 self-center" />
            <p className="text-muted text-sm uppercase tracking-widest">
              2024 — 2026
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => itemsRef.current[index] = el}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#0d0d0d] border border-white/5 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(57,255,20,0.15)] transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Neon tint and play hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 bg-primary text-black rounded-full flex items-center justify-center scale-0 group-hover:scale-100 shadow-[0_0_20px_rgba(57,255,20,0.6)] transition-all duration-500 delay-100">
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-500 mb-1">
                    {project.title}
                  </h3>
                  <div className="inline-block text-[9px] text-primary font-bold uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-md mt-1">
                    {project.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary/80 bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase rounded-full hover:bg-primary hover:text-black hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] transition-all duration-300">
            VIEW ALL WORK
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
