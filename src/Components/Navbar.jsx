import React from 'react'

const Navbar = () => {
    return (
        <div className=' bg-white/15 backdrop-blur-md h-15 px-5 items-center w-screen m-auto sticky top-0 shadow-md py-2'>
        <div className='max-w-[1280px] flex justify-between m-auto items-center'>
            <h1 className='text-3xl font-bold text-fuchsia-700'>Portfolio</h1>
            <ul className='flex justify-between gap-10 lg:flex lg:justify-center hidden py-2 w-full'>
                <li className='w-10'><a href="#" className=' active:font-semibold  active:text-fuchsia-700 active:border-fuchsia-700 active:border-b-3 text-center hover:font-semibold p-2 duration-300'>Home</a></li>
                <li className='w-10'><a href="#About" className=' active:font-semibold  active:text-fuchsia-700 active:border-fuchsia-700 active:border-b-3 text-center hover:font-semibold p-2 duration-300'>About</a></li>
                <li className='w-10'><a href="#Skills" className=' active:font-semibold  active:text-fuchsia-700 active:border-fuchsia-700 active:border-b-3 text-center hover:font-semibold p-2 duration-300'>Skills</a></li>
                <li className='w-10'><a href="#Services" className=' active:font-semibold  active:text-fuchsia-700 active:border-fuchsia-700 active:border-b-3 text-center hover:font-semibold p-2 duration-300'>Services</a></li>
                <li className='w-10'><a href="#projects" className=' active:font-semibold  active:text-fuchsia-700 active:border-fuchsia-700 active:border-b-3 text-center hover:font-semibold p-2 duration-300'>Projects</a></li>
                <li className='w-10'><a href="#Contact" className=' active:font-semibold  active:text-fuchsia-700 active:border-fuchsia-700 active:border-b-3 text-center hover:font-semibold p-2 duration-300'>Contact</a></li>
            </ul>
            <button className='hover:scale-105 w-40 duration-300 bg-linear-to-b from-fuchsia-500 to-fuchsia-900 px-3 py-2 text-white rounded font-bold '>HIRE ME</button>
        
        </div>
        </div>
    )
}
export default Navbar