import React from 'react'

import img from '../images/cj1.png'
import Time from '../components/Time'

import book from '../images/books.png'

import bookOne from '../images/cj2.jpg'
import bookTwo from '../images/cj3.jpg'
import bookThree from '../images/cj4.jpg'
import bookFour from '../images/cj5.jpg'
import bookFive from '../images/cj6.jpg'
import bookSix from '../images/cj7.jpg'
import bookSeven from '../images/cj8.jpg'
import bookEight from '../images/cj9.jpg'

import imax from '../images/imax.webp'

import contact from '../images/contact.jpg'




const Home = () => {
    return (



        <>

            <div className='overflow-hidden'>


                <div className=' '>  </div>


                {/* -------------- header section ---------------- */}

                <section className='font-[poppins] bg-gradient-to-r from-gray-200 from-30% via-[#deea66] via-90% to-[#deea66] to-90%  pt-8 md:pt-20  pb-8 md:pb-20 '>

                    <div className=' w-ull px-4 md:w-[80%] mx-auto'>

                        <div className='flex  flex-col md:flex-row items-center gap-y-12 justify-between '>

                            <div className=' w-full md:w-[50%] mx-auto'>

                                <div>
                                    <div className=' mb-6 md:mb-20'>
                                        <h2 className='font-[Bebas Neue] font-semibold  text-[20px] md:text-[40px] mb-2 '>Unlocking the Magic of IMAX </h2>
                                        <h2 className='font-[Bebas Neue] font-normal text-[18px] md:text-[32px] '>Filmmaking and Beyond Techniques, Tools, and Trends </h2>
                                    </div>

                                    <p className='text-[14px] md:text-[18px] font-normal text-gray-700 mb-4 md:mb-6'><span className='font-bold  text-gray-900'>CJ Rajkumar,</span>  Mentor at Cinema Factory Academy and Author of 12 Books on Cinematography </p>

                                    <div className='flex items-center gap-x-1 md:gap-x-6 '>

                                        <div>
                                            <p className='bg-red-700 rounded-lg px-4 py-2 md:py-3 font-semibold text-white font-[roboto] text-[12px] md:text-[16px]'>Webinar Fee: ₹999/-</p>
                                        </div>

                                        <div className='-mt-4'>
                                            <Time />
                                        </div>


                                    </div>

                                </div>

                            </div>

                            <div className=' w-full md:w-[50%] mx-auto flex justify-center'>

                                <div className='w-full  flex justify-center'>
                                    <img src={img} className='object-cover w-full md:w-[80%] ' alt="" />
                                </div>

                            </div>
                        </div>


                    </div>

                </section>


                {/* ---------------------- about us ---------------- */}

                <section className='pt-8 md:pt-20 pb-8 md:pb-20 font-[poppins]'>

                    <div className=' w-full px-4 md:w-[80%] mx-auto '>

                        <div className='flex flex-col md:flex-row items-start  gap-y-8 justify-between'>

                            <div className='w-full  md:w-[50%]'>

                                <div>
                                    <h2 className='font-semibold text-[16px] md:text-[24px]'>CJ Rajkumar Mentor at Cinema Factory Academy and Author of 12 Books on Cinematography  </h2>

                                    <div>
                                        <ul className='list-disc text-[12px] md:text-[14px] ml-4 md:ml-6 mt-4 md:mt-6 font-[roboto] space-y-2'>
                                            <li>Authored 12 books on cinematography technology. </li>
                                            <li>Written over 500 articles for the Southern India Cinematographers Association website. </li>
                                            <li>His films have won numerous awards at international film festivals, including the Berlin Film Festival in 2009. </li>
                                            <li>Renowned for his contributions to both cinematic literature and practical cinematography. </li>
                                            <li>His books have been appreciated by legends such as Balu Mahendra, PC Sreeram, and Santhosh Sivan.</li>

                                        </ul>
                                    </div>

                                    <div>
                                        <div className='grid grid-cols-4 gap-x-3 gap-y-6 md:gap-y-14 mt-4 md:mt-10'>

                                            <div>
                                                <img src={bookOne} className=' w-20 md:w-24 shadow-md drop-shadow-md rounded-md' alt="" />
                                            </div>
                                            <div>
                                                <img src={bookTwo} className=' w-20 md:w-24 shadow-md drop-shadow-md rounded-md' alt="" />
                                            </div>
                                            <div>
                                                <img src={bookThree} className=' w-20 md:w-24 shadow-md drop-shadow-md rounded-md' alt="" />
                                            </div>
                                            <div>
                                                <img src={bookFour} className=' w-20 md:w-24 shadow-md drop-shadow-md rounded-md' alt="" />
                                            </div>
                                            <div>
                                                <img src={bookFive} className=' w-20 md:w-24 shadow-md drop-shadow-md rounded-md' alt="" />
                                            </div>
                                            <div>
                                                <img src={bookSix} className=' w-20 md:w-24 shadow-md drop-shadow-md rounded-md' alt="" />
                                            </div>
                                            <div>
                                                <img src={bookSeven} className=' w-20 md:w-24 shadow-md drop-shadow-md rounded-md' alt="" />
                                            </div>
                                            <div>
                                                <img src={bookEight} className=' w-20 md:w-24 shadow-md drop-shadow-md rounded-md' alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className=' w-full md:w-[50%] flex justify-center'>

                                <div className='flex justify-center items-center w-full'>
                                    <img src={book} className=' w-full md:w-[80%]' alt="" />
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </section>


                {/* ------------------- form   ------------------------ */}

                <section className=' mb-10'>
                    <div className='w-full mx-auto font-[poppins]'>

                        <div className='flex flex-col-reverse md:flex-row items-center'>

                            <div className='w-full md:w-[40%] bg-blue-600 pt-2 pb-2 pr-2' >

                                <img src={contact} className='w-full' alt="" />

                            </div>

                            <div className=' w-full md:w-[60%] bg-gray-950 '>

                                <div class=" pt-10 pb-10  inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

                                    <div>
                                        <div class="flex flex-col items-center justify-center  md:px-40  md:py-4 ">

                                            <div>
                                                <h3 className='text-white mb-4 md:mb-10 text-[18px] md:text-[24px] uppercase font-bold'>Join Our Webinar </h3>
                                            </div>

                                            <div class="mx-auto w-full ">
                                                <form className='flex flex-col gap-y-2'>
                                                    <div class="mb-2 md:mb-5">
                                                        <label for="name" class="mb-3 block  font-medium text-white text-[12px] md:text-[14px]" >
                                                            Full Name
                                                        </label>
                                                        <input type="text" name="name" id="name" placeholder="Full Name"
                                                            class="w-full rounded-md border border-[#e0e0e0] bg-white text-[12px] md:text-[14px] py-2 md:py-3 px-3 md:px-6 font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                                    </div>
                                                    <div class="mb-2 md:mb-5">
                                                        <label for="email" class="mb-3 block  font-medium text-white text-[12px] md:text-[14px]">
                                                            Email Address
                                                        </label>
                                                        <input type="email" name="email" id="email" placeholder="Enter your email"
                                                            class="w-full rounded-md border border-[#e0e0e0] bg-white text-[12px] md:text-[14px] py-2 md:py-3 px-3 md:px-6 font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                                    </div>
                                                    <div class="mb-2 md:mb-5">
                                                        <label for="phone" class="mb-3 block  font-medium text-white text-[12px] md:text-[14px]">
                                                            Phone Number
                                                        </label>
                                                        <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                                                            class="w-full rounded-md border border-[#e0e0e0] bg-white text-[12px] md:text-[14px] py-2 md:py-3 px-3 md:px-6 font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                                    </div>
                                                    <div class="mb-2 md:mb-5">
                                                        <label for="phone" class="mb-3 block  font-medium text-white text-[12px] md:text-[14px]">
                                                            Whatsapp Number
                                                        </label>
                                                        <input type="text" name="phone" id="phone" placeholder="Enter your Whatsapp Number"
                                                            class="w-full rounded-md border border-[#e0e0e0] bg-white text-[12px] md:text-[14px] py-2 md:py-3 px-3 md:px-6 font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                                    </div>



                                                    <div class="mb-2 md:mb-5 ">
                                                        <label class="mb-3  block  font-semibold text-white  text-[12px] md:text-[14px]">
                                                            Location
                                                        </label>

                                                        <input type="text" name="phone" id="phone" placeholder="Enter your Location"
                                                            class="w-full rounded-md border border-[#e0e0e0] bg-white text-[12px] md:text-[14px] py-2 md:py-3 px-3 md:px-6 font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />

                                                    </div>

                                                    <div>
                                                        <button
                                                            class="text-[14px] md:text-[16px] flex items-center gap-x-1 md:gap-x-3 justify-center border border-white font-[roboto] hover:shadow-form w-full rounded-md bg-gray-400 py-2 md:py-3 px-4 md:px-8 text-center  font-semibold text-white outline-none">
                                                            Pay Now <span className='font-bold text-[16px] md:text-[18px]'>₹999</span>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div >

                </section >


                {/* imax screen */}

                <section className='pt-20 pb-20'>
                    <div className='w-[80%] mx-auto'>

                        <div className='flex items-center justify-center'>



                            <div className='w-[50%] mx-auto'>
                                <div className='flex justify-center items-center'>
                                    <div>
                                        <img src={imax} className='w-full rounded-md shadow-md drop-shadow-md' alt="" />
                                    </div>
                                </div>
                            </div>


                            <div className='w-[50%]'>



                            </div>

                        </div>

                    </div>
                </section>


                {/* ------------------------------ course deatils ------------------- */}

                <section>
                    <div className='w-[80%] mx-auto  md:pt-20 pb-8 md:pb-20 font-[poppins]'>

                        <div className='flex justify-center items-center mb-8 md:mb-0'>
                            <h3 className='text-center font-bold text-[18px] md:text-[30px] uppercase'>Topics to Be Covered</h3>
                        </div>

                        <div className='flex flex-col md:flex-row items-center mt-4 md:mt-0 gap-y-6 md:gap-y-0'>

                            <div className='w-full md:w-[50%] flex flex-col justify-end md:pr-10 md:border-r border-gray-900'>

                                <h3 className='font-semibold text-[16px] md:text-[20px] mb-3 text-start md:text-end'> The Origin of IMAX</h3>
                                <p className='text-[12px] md:text-[14px] text-gray-700  text-start font-[roboto] md:text-end'>History and development of IMAX technology</p>

                            </div>

                            <div className=' w-full md:w-[50%]  md:mt-48 md:pl-10 md:border-l border-gray-900'>

                                <h3 className='font-semibold text-[16px] md:text-[20px] mb-3'> Advantages of IMAX</h3>
                                <p className='text-[12px] md:text-[14px] font-[roboto] text-gray-700  '>Stadium view advantage</p>
                                <p className='text-[12px] md:text-[14px] font-[roboto] text-gray-700 '>Wide screen presentation with height</p>
                                <p className='text-[12px] md:text-[14px] font-[roboto] text-gray-700 '>Premium experience</p>
                            </div>

                        </div>

                        <div className='flex flex-col md:flex-row items-center mt-4 md:mt-0 gap-y-6 md:gap-y-0'>

                            <div className='w-full md:w-[50%] flex flex-col justify-end md:pr-10 md:border-r border-gray-900'>

                                <h3 className='font-semibold text-[16px] md:text-[20px] mb-3 text-start md:text-end'>  IMAX in Films</h3>
                                <p className='text-[12px] md:text-[14px] text-gray-700  text-start font-[roboto] md:text-end'>The significance of IMAX in the film industry</p>
                                <p className='text-[12px] md:text-[14px] text-gray-700  text-start font-[roboto] md:text-end'>Case studies including Christopher Nolan's use of IMAX</p>

                            </div>


                            <div className='w-full md:w-[50%]  md:mt-48 md:pl-10 md:border-l border-gray-900'>

                                <h3 className='font-semibold text-[16px] md:text-[20px] mb-3'> Digital IMAX vs. Original IMAX</h3>
                                <p className='text-[12px] md:text-[14px] font-[roboto] text-gray-700 '>Differences and benefits of digital IMAX and filming original IMAX</p>

                            </div>

                        </div>

                        <div className='flex flex-col md:flex-row items-center mt-4 md:mt-0 gap-y-6 md:gap-y-0'>

                            <div className='w-full md:w-[50%] flex flex-col justify-end md:pr-10 md:border-r border-gray-900'>

                                <h3 className='font-semibold text-[16px] md:text-[20px] mb-3 text-start md:text-end'>   IMAX Certified Cameras</h3>
                                <p className='text-[12px] md:text-[14px] text-gray-700  text-start font-[roboto] md:text-end'>Overview of IMAX certified cameras</p>
                                <p className='text-[12px] md:text-[14px] text-gray-700  text-start font-[roboto] md:text-end'>Highlighting the Sony FX3 camera and its use in IMAX filmmaking</p>

                            </div>


                            <div className='w-full md:w-[50%]  md:mt-48 md:pl-10 md:border-l border-gray-900'>

                                <h3 className='font-semibold text-[16px] md:text-[20px] mb-3'>  IMAX in Indian Films</h3>
                                <p className='text-[12px] md:text-[14px] font-[roboto] text-gray-700 '> Examples and impact of IMAX technology in Indian cinema</p>

                            </div>

                        </div>

                        <div className='flex flex-col md:flex-row items-center mt-4 md:mt-0 gap-y-6 md:gap-y-0'>

                            <div className='w-full md:w-[50%] flex flex-col justify-end md:pr-10 md:border-r border-gray-900'>

                                <h3 className='font-semibold text-[16px] md:text-[20px] mb-3 text-start md:text-end'>    How to Shoot for IMAX with Regular Cinema Cameras</h3>
                                <p className='text-[12px] md:text-[14px] text-gray-700  text-start font-[roboto] md:text-end'>Techniques and tips for achieving IMAX quality with standard cinema cameras</p>

                            </div>


                            <div className='w-full md:w-[50%]  md:mt-48 md:pl-10 md:border-l border-gray-900'>

                                <h3 className='font-semibold text-[16px] md:text-[20px] mb-3'>  Theatrical Release</h3>
                                <p className='text-[12px] md:text-[14px] font-[roboto] text-gray-700 '>The process and benefits of releasing films in IMAX theaters</p>

                            </div>

                        </div>

                    </div>

                </section>


                '
                <section className='pt-8 md:pt-20 pb-8 md:pb-20 bg-gray-950  font-[poppins]'>
                    <div className=' w-full px-4 md:w-[80%] mx-auto'>

                        <div className='flex justify-center items-center'>

                            <h3 className=' text-[16px] md:text-[24px] font-semibold text-white text-center'>Overview of Other Advanced Cinematic Formats</h3>

                        </div>

                        <div className='flex justify-center mt-14'>

                            <div className='grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 md:gap-x-14'>

                                <div>
                                    <div className='flex justify-center items-center mb-6'>
                                        <img src={book} className='size-12 md:size-28 rounded-full' alt="" />
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <h3 className='text-white text-center text-[12px]'>PLF </h3>
                                        <p className=' text-[10px] md:text-[12px] text-gray-100 text-center'>Enhanced viewing experience with larger screens and superior sound quality</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-center items-center mb-6'>
                                        <img src={book} className='size-12 md:size-28 rounded-full' alt="" />
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <h3 className='text-white text-center'>EPIQ</h3>
                                        <p className=' text-[10px] md:text-[12px] text-gray-100 text-center'>Cutting-edge format offering immersive visuals and sound</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-center items-center mb-6'>
                                        <img src={book} className='size-12 md:size-28 rounded-full' alt="" />
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <h3 className='text-white text-center'>4DX</h3>
                                        <p className=' text-[10px] md:text-[12px] text-gray-100 text-center'> Multi-sensory cinema experience with motion seats and environmental effects</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-center items-center mb-6'>
                                        <img src={book} className='size-12 md:size-28 rounded-full' alt="" />
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <h3 className='text-white text-center'>ICE </h3>
                                        <p className=' text-[10px] md:text-[12px] text-gray-100 text-center'>Advanced visual and sound technology for a heightened cinematic experience</p>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                </section>

            </div >

        </>

    )
}

export default Home