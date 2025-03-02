import Link from 'next/link';
import React from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Services() {
  return (
    <div className='my-16'>
      <h3 className="montserrat text-4xl lg:text-5xl text-black text-center ">
        OUR SERVICES
      </h3>
      
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-12 py-4 gap-4 lg:gap-2 mx-6 lg:mx-0'>
        
        {/* Service 1: Car Wash */}
        <div
          className='relative w-full h-[260px] lg:h-[360px] 2xl:h-[440px] bg-cover bg-center rounded shadow-lg overflow-hidden' 
            loading="lazy"
          style={{ backgroundImage: `url('/Images/services/carWash.webp')` }}
        >
          <Link href='/car-wash'>
            {/* Black overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-75 '></div>

            {/* Text and icon */}
            <div className='zoom relative z-10 flex items-center justify-center gap-3 h-full text-white '>
              <div className='exo text-2xl md:text-3xl  font-bold'>Car Wash</div>
              <div className='text-3xl'><MdKeyboardDoubleArrowRight /></div>
            </div>
          </Link>
        </div>

        {/* Service 2: Oil Under Coating */}
        <div
          className='relative w-full h-[260px] lg:h-[360px] 2xl:h-[440px] bg-cover bg-center rounded shadow-lg overflow-hidden' 
            loading="lazy"
          style={{ backgroundImage: `url('/Images/services/autoGlass.webp')` }}
        >
          <Link href='/oil-undercoating'>
            {/* Black overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-75'></div>

            {/* Text and icon */}
            <div className='zoom relative z-10 flex items-center justify-center gap-3 h-full text-white '>
              <div className='exo text-2xl md:text-3xl  font-bold'>Oil Under Coating</div>
              <div className='text-3xl'><MdKeyboardDoubleArrowRight /></div>
            </div>
          </Link>
        </div>

        {/* Service 3: Detailing */}
        <div
          className='relative w-full h-[260px] lg:h-[360px] 2xl:h-[440px] bg-cover bg-center rounded shadow-lg overflow-hidden' 
            loading="lazy"
          style={{ backgroundImage: `url('/Images/services/detailing.webp')` }}
          
        >
          <Link href='/detailing'>
            {/* Black overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-75'></div>

            {/* Text and icon */}
            <div className='zoom relative z-10 flex items-center justify-center gap-3 h-full text-white '>
              <div className='exo text-2xl md:text-3xl  font-bold'>Detailing</div>
              <div className='text-3xl'><MdKeyboardDoubleArrowRight /></div>
            </div>
          </Link>
        </div>

        {/* Service 4: Window Tinting */}
        <div
          className='relative w-full h-[260px] lg:h-[360px] 2xl:h-[440px] bg-cover bg-center rounded shadow-lg overflow-hidden' 
            loading="lazy"
          style={{ backgroundImage: `url('/Images/services/carWraps.webp')` }}
        >
          <Link href='/window-tinting'>
            {/* Black overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-75'></div>

            {/* Text and icon */}
            <div className='zoom relative z-10 flex items-center justify-center gap-3 h-full text-white '>
              <div className='exo text-2xl md:text-3xl  font-bold'>Window Tinting</div>
              <div className='text-3xl'><MdKeyboardDoubleArrowRight /></div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Services;
