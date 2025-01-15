import Link from 'next/link';
import React from 'react';

function Banner() {
  return (
    <div className="font-exo relative w-full  overflow-hidden  " >
     <div className='flex items-center justify-center flex-wrap-reverse lg:flex-nowrap '>
     <div className='w-full lg:w-[50%] '>
      <video src="/Images/bannerVideo.mp4"  muted autoPlay loop ></video>
        </div>
        <div className='w-full lg:w-[50%] p-6 text-center '>
            <h3 className='exo text-black lg:text-2xl '>Weyburn's <span className='text-[#ee0a00]'>Self Service</span> Car Wash</h3>
<h1 className='montserrat text-3xl lg:text-5xl font-bold mt-6'>CREEKSIDE CAR WASH</h1>
        </div>
       
     </div>
  



    </div>
  );
}

export default Banner;

