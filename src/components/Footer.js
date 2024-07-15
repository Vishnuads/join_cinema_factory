import React from 'react'

import logo from '../images/BLACK1.webp'

const Footer = () => {
    return (
        <>

            <div>
                <div class="text-center pt-10 pb-8 font-[poppins]">
                    <a href="#" class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900">
                        
                           <img src={logo} className='w-52' alt="" />
                    </a>

                    <div>
                        <p className=' text-[12px] md:text-[14px] font-semibold mb-3 text-gray-700'>BigBay Cinema Factory Pvt Ltd</p>
                    </div>

                    <span class="block text-[10px] md:text-[12px] text-center text-gray-500">©  Vishnu Ads and Ventures 2024. All Rights Reserved.  </span>

               
                </div>
            </div>

        </>
    )
}

export default Footer