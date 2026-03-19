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
  }, []);

  return (
    <section 
      id="process"
      ref={sectionRef}
      className="py-32 px-8 bg-[#0f0f0f]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">
            MY PROCESS
          </h2>
          <p className="text-muted uppercase tracking-widest text-sm">
            How I bring your vision to life
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="flex flex-col gap-12 lg:gap-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={el => stepsRef.current[index] = el}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-20 ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                } lg:mb-20 last:mb-0`}
              >
                <div className="flex-1 text-center lg:text-right">
                  {index % 2 === 0 ? (
                    <div className="lg:pr-12">
                      <h3 className="text-3xl font-display font-bold mb-4 uppercase tracking-tight">{step.title}</h3>
                      <p className="text-muted leading-relaxed max-w-md ml-auto">{step.description}</p>
                    </div>
                  ) : null}
                </div>

                <div className="relative z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-display font-bold text-xl">
                  {index + 1}
                </div>

                <div className="flex-1 text-center lg:text-left">
                  {index % 2 !== 0 ? (
                    <div className="lg:pl-12">
                      <h3 className="text-3xl font-display font-bold mb-4 uppercase tracking-tight">{step.title}</h3>
                      <p className="text-muted leading-relaxed max-w-md mr-auto">{step.description}</p>
                    </div>
                  ) : (
                    <div className="lg:hidden">
                       <h3 className="text-3xl font-display font-bold mb-4 uppercase tracking-tight">{step.title}</h3>
                      <p className="text-muted leading-relaxed max-w-md mx-auto">{step.description}</p>
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
