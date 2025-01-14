import Link from 'next/link';
import React from 'react';

function Banner() {
  return (
    <div className="font-exo relative w-full h-[600px] overflow-hidden " >
     <div className='flex items-center justify-between mx-8'>

        <div className='w-full lg:w-1/2 p-6'>
            <h3 className='text-black text-2xl'>Weyburn's Self Service Car Wash</h3>
<h1 className=' text-5xl font-bold mt-6'>CREEKSIDE CAR WASH</h1>
        </div>
        <div className='w-full lg:w-1/2 '>
        <img src="/Images/banner.webp" alt="" className='w-full h-[100%] object-cover'/>
        </div>
     </div>
  



    </div>
  );
}

export default Banner;

