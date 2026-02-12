import React from 'react'
import MyIMG from '../../public/MyIMG.png'

const Hero = () => {
    return (
        <div className='flex max-w-[1280px] lg:py-25 my-5 m-auto sm:flex-row flex-col-reverse px-1 py-3 items-center '>
            <div className='flex-auto p-5 lg:basis-[74%] basis-full'>
                <p className='font-bold text-sm lg:text-xl text-center lg:text-left text-gray-500'>Hi, I am</p>
                <h1 className='font-bold  lg:text-5xl lg:my-2 text-4xl text-center lg:text-left bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'>Abhishek Sisodiya</h1>
                <h2 className='font-bold lg:text-2xl text-xl text-center lg:text-left text-fuchsia-900 leading-10'>MERN Stack Developer</h2>
                <p className='text-center lg:text-left lg:my-2 font-semibold'>Building Seamless Full-Stack Web Applications with React & Node.js.</p>
                <p className='text-center lg:text-left'>I design and develop modern, scalable, and user-friendly websites using the MERN stack. From sleek frontends to powerful backends, I craft digital solutions that help businesses grow online. My focus is on clean code, responsive design, and seamless user experience — turning ideas into impactful web applications.</p>
                <div className='mt-5 flex lg:justify-start justify-center'>
                    <button className='hover:scale-105 duration-300 w-35 mr-3 border-fuchsia-700 h-13 border-2 text-fuchsia-700 font-bold rounded'>Download CV</button>
                    <button onClick={() => { window.location.href = '#Contact' }} className='hover:scale-105 duration-300 h-13 w-35  text-white  bg-linear-to-b from-fuchsia-500 to-fuchsia-900 font-bold rounded'>HIRE ME</button>
                </div>
            </div>
            <div className='flex-auto lg:basis-[24%] basis-full'>
                <div className='p-1 bg-linear-to-b from-pink-500  to-fuchsia-900 rounded-full w-80'>
                    <img className='rounded-full w-full' src={MyIMG} alt="My Picture" />
                </div>
            </div>
        </div>
    )
}
export default Hero
