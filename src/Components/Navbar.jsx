import { useState, useEffect, useRef } from 'react';
import { FaBars } from "react-icons/fa";
import { gsap } from 'gsap';

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Initial hidden state
    useEffect(() => {
        gsap.set(menuRef.current, {
            opacity: 0
        });
    }, []);

    const toggleMenu = () => {

        if (!menuOpen) {
            gsap.to(menuRef.current, {
                opacity: 1,
                duration: 0.5,
                ease: "power3.out"
            });
        } else {
            gsap.to(menuRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power3.in"
            });
        }

        setMenuOpen(!menuOpen);
    }

    return (
        <div className='bg-[#ffe6a749] flex justify-between px-5 py-3 sticky top-0 left-0 z-50 backdrop-blur-md'>
            <h1 className="text-3xl text-[#6f1d1b]">Portfolio</h1>

            <div>
                {isMobile ? (
                    <button
                        className='text-2xl text-[#432818]'
                        onClick={toggleMenu}
                    >
                        <FaBars />
                    </button>
                ) : (
                    <ul className='flex text-xl text-[#432818] gap-10'>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                )}
            </div>

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className='fixed top-[60px] left-0 w-screen h-screen bg-[#ffe6a7]'
            >
                <ul className='flex flex-col text-5xl gap-10 py-20 items-center'>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;