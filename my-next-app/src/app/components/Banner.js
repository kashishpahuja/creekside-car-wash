import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Autoplay } from 'swiper';

function Banner() {
  return (
    <div className="font-exo relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Adjust delay time in ms
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className='flex items-center justify-center flex-wrap-reverse lg:flex-nowrap'>
            <div className='w-full lg:w-[50%]'>
              <video src="/Images/bannerVideo.mp4" muted autoPlay loop className='rounded-r-lg shadow-sm'></video>
            </div>
            <div className='w-full lg:w-[50%] p-6 text-center'>
              <h3 className='exo text-black lg:text-2xl'>
                Weyburn's <span className='text-[#ee0a00]'>Self Service</span> Car Wash
              </h3>
              <h1 className='montserrat text-3xl lg:text-5xl font-bold mt-6'>
                CREEKSIDE CAR WASH
              </h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 (Add your service or other content here) */}
        <SwiperSlide>
          <div className="service-slide">
            <h2>Service 1</h2>
            <p>Description of Service 1</p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="service-slide">
            <h2>Service 2</h2>
            <p>Description of Service 2</p>
          </div>
        </SwiperSlide>

        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
}

export default Banner;



// import Link from 'next/link';
// import React from 'react';

// function Banner() {
//   return (
//     <div className="font-exo relative w-full  overflow-hidden  " >
//      <div className='flex items-center justify-center flex-wrap-reverse lg:flex-nowrap '>
//      <div className='w-full lg:w-[50%] '>
//       <video src="/Images/bannerVideo.mp4"  muted autoPlay loop ></video>
//       {/* <img src="/Images/bannerBG.webp" alt="" className='w-full h-[100%]'/> */}
//         </div>
//         <div className='w-full lg:w-[50%] p-6 text-center '>
//             <h3 className='exo text-black lg:text-2xl '>Weyburn's <span className='text-[#ee0a00]'>Self Service</span> Car Wash</h3>
// <h1 className='montserrat text-3xl lg:text-5xl font-bold mt-6'>CREEKSIDE CAR WASH</h1>
//         </div>
       
//      </div>
  



//     </div>
//   );
// }

// export default Banner;

