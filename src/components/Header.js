import React from 'react'
import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import { FaWhatsapp } from "react-icons/fa";
import { CiStreamOn } from "react-icons/ci";



// import logo from '../images/64.png'
import logo from '../images/BLACK1.webp'
import black from '../images/BLACK1.webp'

import button from '../images/cj-01.png'



const Header = () => {

    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);


    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };


    //color change
    const [navbarBg, setNavbarBg] = useState('bg-blck/50');


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBg('bg-black/70 shadow-md ');
            } else {
                setNavbarBg('bg-blck/50');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    function topPage() {
        window.scroll(0, 0)
    }

    //mobile view click the link hide the navbar

    const [hide, setHide] = useState(true)

    function clicklink() {
        setHide(false)
    }


    return (
        <>
            {/* -------- second navbar ------- */}

            <nav className={` w-full sticky top-0 z-30  py-6 md:py-8  pb-3 bg-gradient-to-r from-gray-200 from-30% via-[#deea66] via-90% to-[#deea66] to-90%  ${navbarBg} `}>
                <div className="max-w-full mx-auto font-[roboto]  ">
                    {/* Logo */}
                    <div className='flex justify-between items-center px-4 sm:px-9 w-full xl:w-[90%] mx-auto'>


                        <div className='w-fit'>
                            <Link to='https://cinemafactory.co.in/' onClick={topPage}>
                                <img src={logo} className='w-44 sm:w-48 md:w-80 object-cover' alt="" />

                            </Link>
                        </div>


                        {/* Desktop Navigation */}

                        <ul className='hidden lg:flex w-fit  font-bold gap-x-4 xl:gap-x-12' >


                            {/* <li className='  cursor-pointer duration-300 text-white font-bold text-[12px] xl:text-[14px]' >

                                <ScrollLink to="course" smooth={true} duration={500} onClick={topPage}>
                                    <p className="relative group flex items-center">
                                        <button class=" tracking-[.02em]  hover:text-black/65  focus:text-red-600">wourses</button>
                                    </p>
                                </ScrollLink>

                            </li>

                            <li className=' cursor-pointer duration-300 text-white font-bold text-[12px] xl:text-[14px]' >

                                <ScrollLink to="contact" smooth={true} duration={500} onClick={topPage}>
                                    <p className="relative group flex items-center">
                                        <button class=" tracking-[.02em]  hover:text-black/65  focus:text-red-600">Contact</button>
                                    </p>
                                </ScrollLink>
                            </li> */}

                        </ul>



                        <div className='cursor-pointer w-fit'>
                            <a href="https://api.whatsapp.com/send?phone=9884683888" target="_blank" rel="noopener noreferrer" className="">

                                {/* <div>
                                    <img src={button} className='object-cover w-40 ' alt="" />
                                </div> */}

                                <button className='bg-red-700 hover:scale-105 duration-300 border-2 border-white px-2 md:px-6 py-1.5 md:py-2.5 rounded-lg text-[12px] md:text-[14px] uppercase font-semibold flex items-center gap-x-2 text-white font-[Bebas Neue] md:tracking-[1px]'> Apply Now <span><CiStreamOn className=' text-[18px] md:text-[25px] text-white font-bold animate-pulse duration-1000 transition-all' /></span></button>
                            </a>

                        </div>


                        {/* Mobile Navigation Icon */}
                        {/* <div onClick={handleNav} className='block lg:hidden'>
                            {nav ? <AiOutlineClose className='w-16 sm:w-16 md:w-20 text-gray-900' /> : <AiOutlineMenu className='w-16 sm:w-16 md:w-20 text-gray-900' />}
                        </div> */}

                        {/* Mobile Navigation Menu */}
                        {
                            hide &&
                            <ul
                                className={
                                    nav
                                        ? 'fixed lg:hidden left-0 top-0 w-[60%] h-[100%] border-r  bg-gray-50 ease-in-out duration-500'
                                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                                }
                            >
                                {/* Mobile Logo */}

                                <Link to='https://cinemafactory.co.in/' onClick={topPage} className='w-full' >
                                    <img src={black} className=' w-36 sm:w-40  pt-10  ml-10' alt="" onClick={handleNav} />

                                </Link>



                                {/* Mobile Navigation Items */}

                                {/* <li className=' ml-10 cursor-pointer duration-300 text-gray-700  text-[13px] mt-8' >
                                    <a href="#about" onClick={topPage}>
                                        <p className="relative group flex items-center">
                                            <button class="font-boldtracking-[.02em]  hover:text-white/50  focus:text-red-600" onClick={handleNav}>About Us</button>
                                        </p>


                                    </a>
                                </li> */}

                                {/* <li className=' ml-10 cursor-pointer duration-300 text-gray-500  text-[13px] mt-8' >
                                    <a href="#fourteen" onClick={topPage}>

                                        <p className="relative group flex items-center">
                                            <button class="font-boldtracking-[.02em]  hover:text-white/50  focus:text-red-600" onClick={handleNav}>Fourteen Crafts</button>
                                        </p>
                                    </a>

                                </li> */}

                                <li className=' ml-10 cursor-pointer duration-300 text-gray-500  text-[13px] mt-8' >
                                    <a href="#course" onClick={topPage}>
                                        <p className="relative group flex items-center">
                                            <button class="font-bold tracking-[.02em]  hover:text-white/50  focus:text-red-600" onClick={handleNav}>Courses</button>
                                        </p>
                                    </a>
                                </li>

                                <li className=' ml-10 cursor-pointer duration-300 text-gray-500  text-[13px] mt-8' >
                                    <a href="#mentors" onClick={topPage}>

                                        <p className="relative group flex items-center">
                                            <button class="font-bold tracking-[.02em]  hover:text-white/50  focus:text-red-600" onClick={handleNav}>Mentors</button>
                                        </p>
                                    </a>
                                </li>

                                <li className=' ml-10 cursor-pointer duration-300 text-gray-500  text-[13px] mt-8' >
                                    <a href="#contact" onClick={topPage}>

                                        <p className="relative group flex items-center">
                                            <button class="font-bold tracking-[.02em]  hover:text-white/50  focus:text-red-600" onClick={handleNav}>Contact</button>
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        }

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header