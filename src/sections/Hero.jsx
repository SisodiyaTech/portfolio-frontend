import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";
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

    gsap.to(HeroRef.current, {
      scale: 0.5,
      opacity: 0,
      borderRadius: "20px",
      ease: "none",
      scrollTrigger: {
        trigger: HeroRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      },
    });

  }, HeroRef);

  return () => ctx.revert();
}, []);

  return (
    <div ref={HeroRef} className="relative w-screen h-screen" id="heroSec">
      <div className="absolute top-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/webm" />
        </video>
      </div>
      <section
        ref={containerRef}
        className="relative min-h-screen flex flex-col justify-center items-center px-8 pt-20"
      >
        <div className="max-w-6xl w-full text-center ">
          <h1
            ref={titleRef}
            className="text-[12vw] md:text-[8vw] font-display text-center font-bold leading-[0.9] tracking-tighter mb-8"
          >
            I BUILD <br />
            <span className="italic text-center font-light opacity-80">
              HIGH-PERFORMANCE
            </span>{" "}
            <br />
            WEBSITES
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
            <p
              ref={subRef}
              className="max-w-md text-lg md:text-xl text-muted text-left leading-relaxed"
            >
              Focused on conversion, speed, and premium aesthetics. Helping
              brands stand out in the digital noise.
            </p>

            <div ref={ctaRef} className="flex flex-col items-center gap-6">
              <a
                href="#projects"
                className="bg-white text-black px-12 py-5 rounded-full font-display font-bold text-lg hover:scale-105 transition-transform duration-300"
              >
                VIEW PROJECTS
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <ArrowDown size={24} />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </div>
  );
};

export default Hero;