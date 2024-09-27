import React from 'react'

import { Link as ScrollLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';



import Time from '../components/Time'


import img from '../images/path.png'

import contact from '../images/form.png'




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


                <div className='fixed top-0 w-full -z-20'>
                    <img src={img} className='w-full h-screen object-cover' />

                </div>


                {/* -------------- header section ---------------- */}

                <section className='font-[poppins] bg-gradient-to-r from-gray-200 from-30% via-[#1CB9B9] via-90% to-[#1CB9B9] to-90%  pt-12 md:pt-16  pb-8 md:pb-20 '>

                    <div className=' w-ull px-4 md:w-[80%] mx-auto'>

                        <div className='flex  flex-col md:flex-row items-center   gap-y-8 justify-between '>

                            <div className=' w-full md:w-[60%] mx-auto'>

                                <div>
                                    <div className=' mb-6 md:mb-16'>
                                        <h2 className=' font-semibold font-[Merienda]  text-[20px] md:text-[40px]  mb-2 md:mb-4 flex flex-col gap-y-2 gap-x-2 text-red-600'>
                                            <span>Your Pathway to</span>
                                            <span className='font-bold font-[poppins] text-[24px] md:text-[50px] uppercase text-black'>
                                                <Typewriter
                                                    options={{
                                                        strings: ['Cinematic Success', 'Cinematic Achievement ', ' filmmaking glory!'],
                                                        autoStart: true,
                                                        loop: true,
                                                        pauseFor: 2500,
                                                        deleteSpeed: 50,

                                                    }}
                                                />
                                            </span>
                                        </h2>
                                    </div>

                                    <p className='text-[12px] md:text-[16px] font-semibold leading-6 md:leading-7 text-gray-700 mb-4 md:mb-12 md:pr-7 text-justify md:text-start'>
                                        Unleash your inner filmmaker! Our academy provides the tools and guidance to turn your vision into reality.
                                        Learn from industry experts, master the craft, and network with like-minded creatives. Join us and embark on a journey towards cinematic excellence.

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

                            <div className=' w-full md:w-[40%] mx-auto flex justify-center'>

                                <div className='w-full  flex justify-center'>
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



                <section className='pt-8 md:pt-20 pb-8 md:pb-20 bg-gray-950  font-[poppins]'>
                    <div className=' w-full px-4 md:w-[80%] mx-auto'>

                        <div className='flex flex-col gap-y-2 md:gap-y-5 justify-center items-center'>

                            <h3 className=' text-[16px] md:text-[30px]  font-semibold text-[#ff0000] text-center font-[Merienda]'>Shape Your Vision: Film Courses</h3>
                            <p className='font-[roboto] text-[12px]  md:text-[16px] text-gray-200 text-justify md:text-center '> Join us in exploring the art of filmmaking with our extensive courses in cinematography, editing, VFX, virtual production, acting, photography, color grading, and direction. Build your skills and create captivating content with the guidance of experienced professionals.</p>

                            <div className='mt-2 md:mt-5'>

                                {/* <button className='bg-[#ff0000] hover:scale-105 duration-300 border-2 border-white px-5 md:px-6 py-1.5 md:py-2.5 rounded-lg text-[12px] md:text-[14px] uppercase font-semibold flex items-center gap-x-2 text-white font-[Bebas Neue] md:tracking-[1px]'> Download Brochure <span></span></button> */}

                                <AllCourse />

                            </div>
                        </div>


                    </div>
                </section>

            </div >

        </>

    )
}

export default Home