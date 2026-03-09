import React from 'react'
import pPhoto from '../assets/portfolio1.png'
import { FaEye, FaCode } from "react-icons/fa";


const ProjectCard = ({ imageSrc, title, description, demoLink, codeLink }) => {
    return (
        <div className='border backdrop-blur-md border-[#bb9457] shrink-0 shadow w-80 bg-white/30 rounded-lg pb-3 mb-5 flex flex-col gap-3'>
            <img className='rounded-t-lg shadow-lg' src={imageSrc} />
            <div className='p-2 flex flex-col justify-between grow'>
                <div>
                    <h1 className='font-bold text-2xl text-[#6f1d1b]'>{title}</h1>
                    <p className='text-[#432818]'>{description}</p>
                </div>
                <div className='flex gap-5 my-3'>
                    <a href={demoLink} target='blank' className='hover:scale-105 cursor-pointer duration-300 px-3 py-2 bg-[#6f1d1b] text-white rounded flex items-center gap-1 px-3 py-2 font-semibold text-white rounded' ><FaEye />Live Demo</a>
                    <a href={codeLink} target='blank' className='hover:scale-105 cursor-pointer duration-300 px-3 py-2 border-2 border-[#6f1d1b] text-[#6f1d1b] font-semibold rounded flex items-center gap-1' ><FaCode />view code</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard