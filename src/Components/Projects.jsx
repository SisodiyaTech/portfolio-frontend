import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from './ProjectCard'
import portfolio1 from '../assets/portfolio1.png'
import colorPicker from "../assets/colorPicker.png"
import mahakalFinance from "../assets/mahakalFinance.png"
import SearchEngine from "../assets/SearchEngine.png"
import moneyTracker from "../assets/moneyTracker.png"
import samyakClasses from "../assets/samyakClasses.png"
import AITools from "../assets/AI-Tools.png"

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  let ProjectData = [
    {
      id: 1,
      imageSrc: portfolio1,
      demoLink: "https://sisodiyatech.github.io/MyFirstPortfolio/",
      codeLink: "https://github.com/SisodiyaTech/MyFirstPortfolio",
      title: "Portfolio Project",
      description:
        "A simple yet powerful portfolio where you can explore who I am, my skills, services, and everything I love to build.",
    },
    {
      id: 2,
      imageSrc: colorPicker,
      demoLink: "https://sisodiyatech.github.io/Colors_Picker_byRaz/",
      codeLink: "https://github.com/SisodiyaTech/Colors_Picker_byRaz",
      title: "Color Picker",
      description:
        "A smart color picker tool that lets you generate beautiful gradient colors instantly. You can copy the ready-to-use CSS styles and apply them directly to your elements for creating stunning backgrounds with ease.",
    },
    {
      id: 3,
      imageSrc: mahakalFinance,
      demoLink: "https://sisodiyatech.github.io/MahakalFinance/",
      codeLink: "https://github.com/SisodiyaTech/MahakalFinance",
      title: "Mahakal Finance Services",
      description:
        "A simple demo finance website created for a client, providing essential finance-related information with a clean and user-friendly interface. The site is built using only HTML, CSS, and JavaScript to deliver a smooth frontend experience.",
    },
    {
      id: 4,
      imageSrc: SearchEngine,
      demoLink: "https://sisodiyatech.github.io/GoogleSearch/",
      codeLink: "https://github.com/SisodiyaTech/GoogleSearch",
      title: "Search Engine",
      description:
        "A simple search tool that works like a mini search engine. Whatever you type and search here is directly processed through Google, and it instantly shows you the relevant results on Google.",
    },
    {
      id: 5,
      imageSrc: moneyTracker,
      demoLink: "https://sisodiyatech.github.io/MoneyTracker/",
      codeLink: "https://github.com/SisodiyaTech/MoneyTracker",
      title: "Money Tracker",
      description:
        "A lightweight money tracker that helps you manage income and expenses, shows your remaining balance, and stores a clear history of all your transactions.",
    },
    {
      id: 6,
      imageSrc: samyakClasses,
      demoLink: "https://sisodiyatech.github.io/SamyakClasses/",
      codeLink: "https://github.com/SisodiyaTech/SamyakClasses",
      title: "Samyak Computer Classes",
      description:
        "A simple, responsive demo website for a computer coaching center, showcasing its services and courses. Built with HTML, CSS, and JavaScript.",
    },
    {
      id: 7,
      imageSrc: AITools,
      demoLink: "https://sisodiyatech.github.io/tools/",
      codeLink: "https://github.com/SisodiyaTech/tools",
      title: "AI Tools Blog",
      description:
        "A responsive blog showcasing AI tools with categorized cards. Users can filter tools by type—Image, Video, UI, Audio, Chat—and explore both free and paid options. Built with HTML, CSS, and JavaScript.",
    },
  ];

  const boxRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {

    const ctx = gsap.context(() => {

      const totalWidth = boxRef.current.scrollWidth
      const screenWidth = window.innerWidth

      gsap.to(boxRef.current, {
        x: -(totalWidth - screenWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + (totalWidth - screenWidth),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          // markers: true
        }

      })

    }, sectionRef)

    return () => ctx.revert()

  }, [])

  return (
    <div className='p-1 w-screen h-screen overflow-hidden flex m-auto justify-center flex-col' id='projects' ref={sectionRef}>
      <h1 className="text-5xl font-bold text-center text-[#6f1d1b] my-10">My Projects</h1>
      <div className='flex w-max justify-center flex-row p-5 gap-5' ref={boxRef}>
        {
          ProjectData.map((project, index) => (
            <ProjectCard key={project.id} {...project} />
          ))}
      </div>
    </div>
  )
}

export default Projects