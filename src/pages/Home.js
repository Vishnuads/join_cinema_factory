import React from 'react'

import { Link as ScrollLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';

import Time from '../components/Time'


import img from '../images/path.png'

import contact from '../images/form.png'

// highlights
import iconone from '../images/3icons/001-ai.png'
import iconTwo from '../images/3icons/002-film-slate.png'
import iconThree from '../images/3icons/003-gaming.png'
import iconFour from '../images/3icons/004-leader.png'
import iconFive from '../images/3icons/place.png'
import iconSix from '../images/3icons/006-visual.png'
import iconSeven from '../images/3icons/007-universal-studio.png'
import iconNine from '../images/3icons/009-folder-silhouette.png'
import iconTen from '../images/3icons/010-workshop.png'
import iconElven from '../images/3icons/011-crew.png'
import iconweb from '../images/3icons/web.png'
import iconshoot from '../images/3icons/shoot.png'




import Form from '../components/Form';
import PDF from '../components/PDF';
import AllCourse from '../components/AllCourse';



const Home = () => {

    function topPage() {
        window.scroll(0, 0)
    }

    return (

        <>
            <div className='overflow-hidden'>


                {/* <div className='fixed top-0 w-full -z-20'>
                    <img src={img} className='w-full h-screen object-cover' />
                </div> */}


                {/* -------------- header section ---------------- */}

                <section className='font-[poppins] bg-gradient-to-r from-gray-200 from-30% via-[#1CB9B9] via-90% to-[#1CB9B9] to-90%  pt-12 md:pt-4   md:pb-0 '>

                    <div className=' w-ull px-4 md:w-[85%] mx-auto'>

                        <div className='flex  flex-col md:flex-row items-center   gap-y-8 justify-between '>

                            <div className=' w-full md:w-[50%] mx-auto'>

                                <div>
                                    <div className=' mb-6 md:mb-16'>
                                        <h2 className=' font-semibold font-[poppins]  text-[20px] md:text-[35px]  mb-2 md:mb-4 flex flex-col gap-y-2 gap-x-2 text-red-600'>
                                            <span>Your Pathway to</span>
                                            <span className='font-bold font-[poppins] text-[24px] md:text-[45px] uppercase text-black'>
                                                <Typewriter
                                                    options={{
                                                        strings: ['Cinematic Success', 'Cinematic Achievements ', ' filmmaking glory!'],
                                                        autoStart: true,
                                                        loop: true,
                                                        pauseFor: 2500,
                                                        deleteSpeed: 50,

                                                    }}
                                                />
                                            </span>
                                        </h2>
                                    </div>

                                    <p className='text-[12px] md:text-[16px] font-semibold leading-6 md:leading-7 text-gray-700 mb-4 md:mb-8 md:pr-2 text-justify md:text-start'>
                                        
                                    In Chennai's cinematic soul, Cinema Factory Academy ignites the spark of storytelling. Under the guidance of industry maestros, aspiring filmmakers learn 
                                    to navigate narratives and evoke emotions. State-of-the-art facilities and curated courses equip them for the industry. Internships and web series projects offer
                                     hands-on experience. Your journey to cinematic greatness starts here.
                                    </p>

                                    <div className='flex items-center gap-x-1 md:gap-x-6 '>

                                        <div>

                                            {/* <button className='bg-[#ff0000] rounded-md  md:rounded-lg px-4 py-2 md:py-3 font-semibold text-white font-[roboto] text-[12px] md:text-[16px]'> Download Brochure </button> */}
                                            {/* <PDF /> */}
                                            <AllCourse />

                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className=' w-full md:w-[50%] mx-auto flex justify-center'>

                                <div className='w-full  flex justify-end'>
                                    <img src={img} className='object-cover w-full md:w-full rounded-md ' alt="" />
                                </div>

                            </div>
                        </div>


                    </div>

                </section>


                {/* ------------------- form   ------------------------ */}

                <section className='pt-6 md:pt-20  pb-10 md:pb-20 bg-sky-100   ' id='contact'>
                    <div className='w-[80%] mx-auto font-[poppins]'>

                        <div className='flex flex-col-reverse md:flex-row items-center'>

                            <div className='w-full md:w-[45%] ' >
                                <img src={contact} className='w-full rounded-md  object-cover' alt="" />
                            </div>

                            <div className=' w-full md:w-[55%]  '>

                                <div>
                                    <div class="flex flex-col items-center justify-center  md:px-10  md:py-2 ">


                                        <div class="mx-auto w-full flex flex-col gap-y-3 ">

                                            <Form />

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </section >


                {/* ---------------------- main benifits ----------------------- */}

                <section className=' pt-10 md:pt-20  pb-10 md:pb-20 bg-white'>
                    <div className='w-full md:w-[90%] mx-auto'>

                        <div className=' font-[roboto] '>



                            <div>
                                <div className='flex justify-center items-center w-[90%] mx-auto  '>

                                    <div>
                                        <div className='mb-10 md:mb-20'>
                                            <h1 className=' font-bold text-[18px] md:text-[40px] uppercase font-[poppins] text-black text-center '>Cinema Factory exclusive </h1>

                                        </div>

                                        <div>

                                            <div className='grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-16   gap-y-8 md:gap-y-14 mt-1  font-kumbh'>


                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconone} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="VFX training courses" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Updated Ai </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Integrated Modules </h3>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconTwo} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Direction courses" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Student Discounts on Softwares & Equipments</h3>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconweb} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Cinematography" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>shoot a web series  </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>While Studying </h3>

                                                        </div>

                                                    </div>
                                                </div>


                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconFour} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Cinema Factory Academy" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Authorised Industry </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Expert Mentors</h3>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconFive} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Best Courses in Direction" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>100% </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Placement</h3>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconSix} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Best Cinema Factory Acadmey" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Internship with</h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Expert FilmMakers</h3>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconSeven} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="VFX training courses" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Film Shoots & </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>VFX Studio Visits</h3>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconNine} className=' w-14  md:w-20 object-cover mb-2' alt="icon" title="Top Courses in Direction" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Unlimited Stock </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Assets Access</h3>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconTen} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Chennai Filmmaking Academy In India" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Master Classes of </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Industry Experts</h3>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconElven} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Best Cinematography Institute in India" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Hands On </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Practical Approach</h3>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconshoot} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Top-Rated VFX Training Institute In India" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Overseas FilmMaking </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Practice </h3>

                                                        </div>

                                                    </div>
                                                </div>


                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconThree} className=' w-14 md:w-20 object-cover mb-2' alt="icons" title="Learn Photography Courses In India" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Extended </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Lab Access</h3>

                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                {/* ================================= */}


                {/* <section className='pt-8 md:pt-20 pb-8 md:pb-20 bg-gray-950  font-[poppins]'>
                    <div className=' w-full px-4 md:w-[80%] mx-auto'>

                        <div className='flex flex-col gap-y-2 md:gap-y-5 justify-center items-center'>

                            <h3 className=' text-[16px] md:text-[30px]  font-semibold text-[#ff0000] text-center font-[Merienda]'>Shape Your Vision: Film Courses</h3>
                            <p className='font-[roboto] text-[12px]  md:text-[16px] text-gray-200 text-justify md:text-center '> Join us in exploring the art of filmmaking with our extensive courses in cinematography, editing, VFX, virtual production, acting, photography, color grading, and direction. Build your skills and create captivating content with the guidance of experienced professionals.</p>

                            <div className='mt-2 md:mt-5'>


                                <AllCourse />

                            </div>
                        </div>


                    </div>
                </section> */}

            </div >

        </>

    )
}

export default Home