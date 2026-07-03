import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: '01',
    title: 'Performance',
    description: 'Lightning-fast loading speeds optimized for core web vitals and user retention.'
  },
  {
    number: '02',
    title: 'UX/UI Design',
    description: 'Intuitive interfaces that guide users and create memorable brand experiences.'
  },
  {
    number: '03',
    title: 'Strategy',
    description: 'Data-driven approaches to ensure your digital presence aligns with business goals.'
  },
  {
    number: '04',
    title: 'Quality',
    description: 'Clean, maintainable code built with the latest industry standards and best practices.'
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        );
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="services"
      ref={sectionRef}
      className="py-32 px-6 bg-[#050505] border-t border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white">
            CORE <br /> <span className="text-primary drop-shadow-[0_0_8px_rgba(57,255,20,0.4)]">CAPABILITIES.</span>
          </h2>
          <p className="max-w-xs text-muted text-sm uppercase tracking-widest leading-relaxed">
            Specialized in creating high-performance web applications that drive conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-card-bg/40 backdrop-blur-md p-10 flex flex-col gap-12 rounded-2xl border border-white/5 group hover:border-primary/40 hover:bg-card-bg/80 hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] transition-all duration-500 cursor-default relative overflow-hidden"
            >
              {/* Highlight background on hover */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/10 transition-all duration-500" />
              
              <span className="text-4xl font-display font-black text-white/20 group-hover:text-primary group-hover:drop-shadow-[0_0_6px_rgba(57,255,20,0.5)] transition-all duration-500">
                {service.number}
              </span>
              <div className="flex flex-col gap-4 relative z-10">
                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed text-sm group-hover:text-white/80 transition-colors duration-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
