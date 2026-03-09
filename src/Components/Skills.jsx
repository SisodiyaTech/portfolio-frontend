import { useEffect, useRef } from "react"
import { gsap } from "gsap";

const Skills = () => {

  const SliderRef = useRef(null);

  useEffect(() => {
    const SliderWidth = SliderRef.current.scrollWidth;

    gsap.to(SliderRef.current, {
      x: -SliderWidth / 2,
      duration: 50,
      ease: "linear",
      repeat: -1
    });

  }, []);

  return (
    <div className='bg-[#6f1d1b] p-5 overflow-hidden'>
      {/* <h1 className='text-4xl font-bold text-center text-[#ffe6a7] mb-5'>My Technical Skills</h1> */}
      <div className='flex flex-row gap-10' ref={SliderRef}>
        <img src="https://i.pinimg.com/736x/ca/e1/b4/cae1b4f6b223fe5a7bb712b680cffa67.jpg" className='w-full h-25 sm:h-37.5' alt="HTML" />
        <img src="https://i.pinimg.com/736x/fc/da/ff/fcdaff4d3f30005e462d0d3c31cfb691.jpg" className='w-full h-25 sm:h-37.5' alt="CSS" />
        <img src="https://i.pinimg.com/736x/4c/81/c0/4c81c02c460aade9e35b3091942a4cf8.jpg" className='w-full h-25 sm:h-37.5' alt="JavaScript" />
        <img src="https://i.pinimg.com/1200x/a9/5a/ad/a95aadde4325065401dc6942ea5dad90.jpg" className='w-full h-25 sm:h-37.5' alt="Git" />
        <img src="https://i.pinimg.com/736x/14/23/70/142370ab227a6180cd9aac5b2bf46647.jpg" className='w-full h-25 sm:h-37.5' alt="Github" />
        <img src="https://i.pinimg.com/736x/8d/fe/0a/8dfe0a99a74efbec4af0d8e440c00282.jpg" className='w-full h-25 sm:h-37.5' alt="React js" />
        <img src="https://i.pinimg.com/736x/0c/81/21/0c8121171fefa57a22351d1a10e96c2b.jpg" className='w-full h-25 sm:h-37.5' alt="Node Js" />
        <img src="https://i.pinimg.com/736x/28/55/4d/28554d154d62417398fdc9b062464263.jpg" className='w-full h-25 sm:h-37.5' alt="BootStrap" />
        <img src="https://i.pinimg.com/736x/7b/df/1e/7bdf1e16c7bedec90f0662eb2f9ca764.jpg" className='w-full h-25 sm:h-37.5' alt="Tailwind css" />
        <img src="https://i.pinimg.com/1200x/5d/09/32/5d0932d4dd17c926806635893260205e.jpg" className='w-full h-25 sm:h-37.5' alt="Express js" />
        <img src="https://i.pinimg.com/736x/91/23/7f/91237f1eca767ef74d722ca534f9281a.jpg" className='w-full h-25 sm:h-37.5' alt="Mongo DB" />
        <img src="https://i.pinimg.com/736x/14/23/70/142370ab227a6180cd9aac5b2bf46647.jpg" className='w-full h-25 sm:h-37.5' alt="Github" />
        <img src="https://i.pinimg.com/736x/8d/fe/0a/8dfe0a99a74efbec4af0d8e440c00282.jpg" className='w-full h-25 sm:h-37.5' alt="React js" />
        <img src="https://i.pinimg.com/736x/ca/e1/b4/cae1b4f6b223fe5a7bb712b680cffa67.jpg" className='w-full h-25 sm:h-37.5' alt="HTML" />
        <img src="https://i.pinimg.com/736x/fc/da/ff/fcdaff4d3f30005e462d0d3c31cfb691.jpg" className='w-full h-25 sm:h-37.5' alt="CSS" />
        <img src="https://i.pinimg.com/736x/4c/81/c0/4c81c02c460aade9e35b3091942a4cf8.jpg" className='w-full h-25 sm:h-37.5' alt="JavaScript" />
        <img src="https://i.pinimg.com/1200x/a9/5a/ad/a95aadde4325065401dc6942ea5dad90.jpg" className='w-full h-25 sm:h-37.5' alt="Git" />
        <img src="https://i.pinimg.com/736x/14/23/70/142370ab227a6180cd9aac5b2bf46647.jpg" className='w-full h-25 sm:h-37.5' alt="Github" />
        <img src="https://i.pinimg.com/736x/8d/fe/0a/8dfe0a99a74efbec4af0d8e440c00282.jpg" className='w-full h-25 sm:h-37.5' alt="React js" />
        <img src="https://i.pinimg.com/736x/0c/81/21/0c8121171fefa57a22351d1a10e96c2b.jpg" className='w-full h-25 sm:h-37.5' alt="Node Js" />
        <img src="https://i.pinimg.com/736x/28/55/4d/28554d154d62417398fdc9b062464263.jpg" className='w-full h-25 sm:h-37.5' alt="BootStrap" />
        <img src="https://i.pinimg.com/736x/7b/df/1e/7bdf1e16c7bedec90f0662eb2f9ca764.jpg" className='w-full h-25 sm:h-37.5' alt="Tailwind css" />
        <img src="https://i.pinimg.com/1200x/5d/09/32/5d0932d4dd17c926806635893260205e.jpg" className='w-full h-25 sm:h-37.5' alt="Express js" />
        <img src="https://i.pinimg.com/736x/91/23/7f/91237f1eca767ef74d722ca534f9281a.jpg" className='w-full h-25 sm:h-37.5' alt="Mongo DB" />
        <img src="https://i.pinimg.com/736x/14/23/70/142370ab227a6180cd9aac5b2bf46647.jpg" className='w-full h-25 sm:h-37.5' alt="Github" />
        <img src="https://i.pinimg.com/736x/8d/fe/0a/8dfe0a99a74efbec4af0d8e440c00282.jpg" className='w-full h-25 sm:h-37.5' alt="React js" />
        <img src="https://i.pinimg.com/736x/ca/e1/b4/cae1b4f6b223fe5a7bb712b680cffa67.jpg" className='w-full h-25 sm:h-37.5' alt="HTML" />
        <img src="https://i.pinimg.com/736x/fc/da/ff/fcdaff4d3f30005e462d0d3c31cfb691.jpg" className='w-full h-25 sm:h-37.5' alt="CSS" />
        <img src="https://i.pinimg.com/736x/4c/81/c0/4c81c02c460aade9e35b3091942a4cf8.jpg" className='w-full h-25 sm:h-37.5' alt="JavaScript" />
        <img src="https://i.pinimg.com/1200x/a9/5a/ad/a95aadde4325065401dc6942ea5dad90.jpg" className='w-full h-25 sm:h-37.5' alt="Git" />
        <img src="https://i.pinimg.com/736x/14/23/70/142370ab227a6180cd9aac5b2bf46647.jpg" className='w-full h-25 sm:h-37.5' alt="Github" />
        <img src="https://i.pinimg.com/736x/8d/fe/0a/8dfe0a99a74efbec4af0d8e440c00282.jpg" className='w-full h-25 sm:h-37.5' alt="React js" />
        <img src="https://i.pinimg.com/736x/0c/81/21/0c8121171fefa57a22351d1a10e96c2b.jpg" className='w-full h-25 sm:h-37.5' alt="Node Js" />
        <img src="https://i.pinimg.com/736x/28/55/4d/28554d154d62417398fdc9b062464263.jpg" className='w-full h-25 sm:h-37.5' alt="BootStrap" />
        <img src="https://i.pinimg.com/736x/7b/df/1e/7bdf1e16c7bedec90f0662eb2f9ca764.jpg" className='w-full h-25 sm:h-37.5' alt="Tailwind css" />
        <img src="https://i.pinimg.com/1200x/5d/09/32/5d0932d4dd17c926806635893260205e.jpg" className='w-full h-25 sm:h-37.5' alt="Express js" />
        <img src="https://i.pinimg.com/736x/91/23/7f/91237f1eca767ef74d722ca534f9281a.jpg" className='w-full h-25 sm:h-37.5' alt="Mongo DB" />
        <img src="https://i.pinimg.com/736x/14/23/70/142370ab227a6180cd9aac5b2bf46647.jpg" className='w-full h-25 sm:h-37.5' alt="Github" />
        <img src="https://i.pinimg.com/736x/8d/fe/0a/8dfe0a99a74efbec4af0d8e440c00282.jpg" className='w-full h-25 sm:h-37.5' alt="React js" />
      </div>

    </div>
  )
}

export default Skills
