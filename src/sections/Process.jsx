import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: 'Discovery',
    description: 'We dive deep into your goals, target audience, and market landscape to build a solid foundation.'
  },
  {
    title: 'Design',
    description: 'Creating high-fidelity prototypes and visual concepts that align with your brand identity.'
  },
  {
    title: 'Development',
    description: 'Transforming designs into high-performance, responsive code using the latest technologies.'
  },
  {
    title: 'Delivery',
    description: 'Rigorous testing and optimization before launching your project to the world.'
  }
];

const Process = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepsRef.current.forEach((step, index) => {
        if (!step) return;
        
        gsap.fromTo(
          step,
          { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
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
      id="process"
      ref={sectionRef}
      className="py-32 px-6 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white mb-6">
            MY <span className="text-primary drop-shadow-[0_0_8px_rgba(57,255,20,0.4)]">PIPELINE.</span>
          </h2>
          <p className="text-muted uppercase tracking-widest text-sm font-semibold">
            How I bring your concepts to life
          </p>
        </div>

        <div className="relative">
          {/* Glowing Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 -translate-x-1/2 shadow-[0_0_8px_rgba(57,255,20,0.15)]" />
          
          <div className="flex flex-col gap-16 lg:gap-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={el => stepsRef.current[index] = el}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-20 group ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                } lg:mb-20 last:mb-0`}
              >
                <div className="flex-1 text-center lg:text-right">
                  {index % 2 === 0 ? (
                    <div className="lg:pr-12">
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 uppercase tracking-tight text-white group-hover:text-primary transition-colors duration-500">{step.title}</h3>
                      <p className="text-muted leading-relaxed max-w-md ml-auto text-sm md:text-base group-hover:text-white/80 transition-colors duration-500">{step.description}</p>
                    </div>
                  ) : null}
                </div>

                {/* Glowing step counter badge */}
                <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center bg-black border border-primary/40 text-primary font-display font-black text-lg shadow-[0_0_12px_rgba(57,255,20,0.2)] group-hover:bg-primary group-hover:text-black group-hover:shadow-[0_0_20px_rgba(57,255,20,0.7)] transition-all duration-500">
                  {index + 1}
                </div>

                <div className="flex-1 text-center lg:text-left">
                  {index % 2 !== 0 ? (
                    <div className="lg:pl-12">
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 uppercase tracking-tight text-white group-hover:text-primary transition-colors duration-500">{step.title}</h3>
                      <p className="text-muted leading-relaxed max-w-md mr-auto text-sm md:text-base group-hover:text-white/80 transition-colors duration-500">{step.description}</p>
                    </div>
                  ) : (
                    <div className="lg:hidden">
                       <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 uppercase tracking-tight text-white group-hover:text-primary transition-colors duration-500">{step.title}</h3>
                      <p className="text-muted leading-relaxed max-w-md mx-auto text-sm group-hover:text-white/80 transition-colors duration-500">{step.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
