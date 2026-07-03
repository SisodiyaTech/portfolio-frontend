import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myPhoto from "../assets/Images/MyIMG.webp";


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (!textRef.current || !statsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        statsRef.current.children,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        },
      );
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 bg-[#0a0a0a] border-t border-b border-white/5 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div ref={textRef} className="flex flex-col gap-8">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white">
            ABOUT <br /> <span className="text-primary drop-shadow-[0_0_8px_rgba(57,255,20,0.4)]">MYSELF.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
            I&apos;m a full-stack developer with a passion for building high-end
            digital experiences. With over 2 years of experience, I&apos;ve
            helped brands transform concepts into production-grade systems.
          </p>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            I believe that great design is invisible. My goal is to build
            interfaces that are not only beautiful but also highly functional,
            fast, and intuitive. Every pixel and every line of code is crafted with
            performance and clean architecture in mind.
          </p>
        </div>

        <div ref={statsRef} className="relative group flex justify-center items-center">
          {/* Neon back-lighting */}
          <div className="absolute w-[80%] h-[80%] bg-primary/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/10 transition-all duration-700" />
          
          <div className="relative flex justify-center items-center z-10 w-full">
            <img
              src={myPhoto}
              alt="My Photo"
              className="w-[80%] rounded-2xl grayscale hover:grayscale-0 border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(57,255,20,0.25)] transition-all duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
