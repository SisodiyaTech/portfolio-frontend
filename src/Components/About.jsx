import React from 'react'
import myPhoto from '../../public/MyPicture.png'

const About = () => {
    return (
        <div className='px-1 py-3 my-5 max-w-[1280px] m-auto' id='About'>
            <div className='flex flex-wrap justify-center m-auto gap-5'>
                <div className='lg:basis-[25%] md:basis-[25%]  basis-[80%] items-center flex justify-center'>
                    <img className='shadow-lg w-full'
                        src={myPhoto} alt="My Picture" />
                </div>
                <div className='text-xl sm:basis-[70%] lg:basis-[70%] basis-[85%] lg:pl-5 text-stone-700 flex flex-col justify-between'>
                    <div>
                        <h1 className='text-5xl font-bold'>About Me</h1><br />
                        <h2 className='text-2xl font-bold text-fuchsia-700'>Full Stack Web Developer</h2><br />
                        <p className='text-sm sm:text-lg'>Hello, I’m <b>Abhishek Sisodiya</b>, a <b>Full Stack MERN Developer</b> with a strong focus on building
                            scalable, high-performance web applications.</p><br />
                        <p className='text-sm sm:text-lg  text-justify'>I specialize in crafting robust backend systems and intuitive frontend experiences using
                            <b> MongoDB, Express, React, and Node.js</b>. I enjoy solving complex problems and transforming
                            ideas into clean, maintainable, and efficient solutions.</p><br />
                        <p className='text-sm sm:text-lg'>My experience includes real-time applications, secure authentication using JWT, and
                            integrating third-party APIs. I follow Agile development practices and continuously
                            upgrade my skills to stay aligned with modern web technologies.</p>
                    </div>
                    <button onClick={() => { window.location.href = '#Contact' }} className='hover:scale-105 my-5 duration-300 h-13 w-35  text-white  bg-linear-to-b from-fuchsia-500 to-fuchsia-900 font-bold rounded '>Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default About
