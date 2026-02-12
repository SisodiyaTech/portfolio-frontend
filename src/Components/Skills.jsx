import React from 'react'
import Bars from './Bars'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap , FaNodeJs, FaGithub } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress, SiMongodb, SiPostman , SiNetlify} from "react-icons/si";



const Skills = () => {
  return (
    <div id='Skills' className='p-1 flex max-w-[1280px] m-auto justify-center flex-col'>
      <h1 className='text-4xl font-bold text-center'>My Technical Skills</h1>
      <p className='text-center p-5 '>Technologies I use to build complete full-stack web applications.</p>
      <div className='flex justify-center align-centre text-bg-amber- w-full' >
        <div className="flex flex-wrap max-w-full m-auto p-5">
          <Bars title="Html5" icon={FaHtml5} progress='90' />
          <Bars title="CSS3" icon={FaCss3Alt } progress='85' />
          <Bars title="Tailwind CSS" icon={BiLogoTailwindCss} progress='75' />  
          <Bars title="Bootstrap" icon={FaBootstrap } progress='70' />
          <Bars title="JS ES6+" icon={FaJs} progress='70' />
          <Bars title="React JS" icon={FaReact } progress='70' />
          <Bars title="Node.js" icon={FaNodeJs} progress='50' />
          <Bars title="Express.js" icon={SiExpress} progress='60' />
          <Bars title="Mongo DB" icon={SiMongodb} progress='80' />
          <Bars title="Git/Github" icon={FaGithub} progress='80' />
          <Bars title="Postman" icon={SiPostman} progress='50' />
          <Bars title="Vercel / Netlify" icon={SiNetlify} progress='80' />
        </div>
      </div>
    </div>
  )
}

export default Skills
