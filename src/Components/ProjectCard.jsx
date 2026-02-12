import React from 'react'
import pPhoto from '../assets/portfolio1.png'
import { FaEye, FaCode } from "react-icons/fa";


const ProjectCard = ({ imageSrc, title, description, demoLink, codeLink }) => {
    return (
        <div className='border border-gray-300 shrink-0 shadow w-80 bg-white rounded-lg pb-3 mb-5 flex flex-col gap-3'>
            <img className='rounded-t-lg shadow-lg' src={imageSrc} />
            <div className='p-2 flex flex-col justify-between grow'>
                <div>
                    <h1 className='font-bold text-2xl'>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className='flex gap-5 my-3'>
                    <a href={demoLink} target='blank' className='hover:scale-105 cursor-pointer duration-300 bg-fuchsia-700 border-2 flex items-center gap-1 px-3 py-2 font-semibold text-white rounded' ><FaEye />Live Demo</a>
                    <a href={codeLink} target='blank' className='hover:scale-105 cursor-pointer duration-300 border-fuchsia-700 border box-border flex items-center gap-1 px-3 py-2 font-semibold text-fuchsia-700 rounded' ><FaCode />view code</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard