import React, { useRef, useEffect } from 'react'
import myImage from '/photor.png'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    const NameRef = useRef(null)
    const heroSec = useRef(null)
    const fullStackDev = useRef(null)
    const paraRef = useRef(null)
    const buttRef = useRef(null)
    const imgRef = useRef(null)


    useEffect(() => {

        const ctx = gsap.context(() => {

            const tl = gsap.timeline()

            tl.from(NameRef.current, {
                x: -200,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: heroSec.current,
                    start: "top 70%",
                }
            })

            tl.from(fullStackDev.current, {
                x: -200,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: heroSec.current,
                    start: "top 70%",
                }
            })

            tl.from(paraRef.current, {
                x: -200,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: heroSec.current,
                    start: "top 70%",
                }
            })

            tl.from(buttRef.current, {
                x: -200,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: heroSec.current,
                    start: "top 70%",
                }
            })

            gsap.from(imgRef.current, {
                x: 200,
                opacity: 0,
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: heroSec.current,
                    start: "top 70%",
                }
            })



        })

        return () => ctx.revert()

    }, [])

    return (
        <div ref={heroSec} className='min-h-[calc(100vh-100px)'>
            <div className='grid grid-cols-1 sm:grid-cols-3'>
                <div className='p-2 sm:p-20 col-span-2 flex flex-col gap-2 sm:gap-5'>
                    <h1 className='text-8xl font-bold sm:text-9xl text-[#432818]' ref={NameRef}>
                        Abhishek Sisodiya
                    </h1>

                    <h2 className='text-3xl sm:text-5xl text-[#99582a] sm:mb-5' ref={fullStackDev}>
                        Full Stack Developer
                    </h2>

                    <div ref={paraRef}>
                        <p className='text-base sm:text-xl font-bold text-[#432818]'>
                            Building The Future of the Web.
                        </p>

                        <p className='text-base sm:text-xl text-[#432818]'>
                            I’m a Full Stack Developer specializing in modern architecture,
                            responsive layouts, and smooth interactive animations.
                        </p>
                    </div>

                    <div className='flex gap-5 mt-5' ref={buttRef}>
                        <button className='px-3 py-2 border-3 border-[#6f1d1b] w-[150px] text-[#6f1d1b] font-bold rounded'>
                            VIEW PROJECT
                        </button>

                        <button className='px-3 py-2 bg-[#6f1d1b] text-white rounded w-[150px]'>
                            HIRE ME
                        </button>
                    </div>
                </div>

                <div className='flex justify-center items-center pb-5'>
                    <img src={myImage} alt="My Picture" ref={imgRef} />
                </div>
            </div>
        </div>
    )
}

export default Hero