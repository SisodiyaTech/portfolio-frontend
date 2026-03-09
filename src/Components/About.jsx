import React from 'react'
import myPhoto from '../../public/MyPicture.png'

const About = () => {
    return (
        <div className='p-5 sm:p-16 sm:h-screen m-auto bg-[url(https://images.unsplash.com/photo-1641630377246-80e94e73c0cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-fixed bg-cover bg-center' id='About'>
            <div className='grid grid-cols-1 sm:grid-cols-3 m-auto gap-5 sm:bg-[#ffe6a7]'>
                <div className='items-center flex justify-center'>
                    <img className='shadow-lg w-80 object-cover rounded-t-full'
                        src={myPhoto} alt="My Picture" />
                </div>
                <div className='backdrop-blur-md bg-white/30 p-5 sm:p-16 sm:col-span-2'>
                    <h1 className='text-5xl text-[#6f1d1b]'>About Me</h1><br /><br />
                    <h2 className='text-2xl text-[#6f1d1b]'>Full Stack Web Developer</h2>
                    <p className='text-sm sm:text-lg text-[#432818] mb-1'>Hello, I’m <span className='font-semibold'>Abhishek Sisodiya</span>, a <span className='font-semibold'>Full Stack MERN Developer</span> with a strong focus on building
                        scalable, high-performance web applications.</p>
                    <p className='text-sm sm:text-lg mb-1'>I specialize in crafting robust backend systems and intuitive frontend experiences using
                        <span className='font-semibold'> MongoDB, Express, React, and Node.js</span>. I enjoy solving complex problems and transforming
                        ideas into clean, maintainable, and efficient solutions.</p>
                    <p className='text-sm sm:text-lg  mb-2'>My experience includes real-time applications, secure authentication using JWT, and
                        integrating third-party APIs. I follow Agile development practices and continuously
                        upgrade my skills to stay aligned with modern web technologies.</p>
                    <button onClick={() => { window.location.href = '#Contact' }} className='px-3 py-3 bg-[#6f1d1b] text-white rounded w-[150px]'>Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default About
