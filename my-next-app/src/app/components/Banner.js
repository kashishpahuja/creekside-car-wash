'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

const services = [
  {
    title: "Self Service Bays",
    description: 'Creekside Car Wash'
  },
  {
    title: "Automatic Wash",
    description: 'Creekside Car Wash'
  },
  {
    title: "Vacuum Stations",
    description: 'Creekside Car Wash'
  },
  {
    title: "Tire Shine",
    description: 'Creekside Car Wash'
  },
  {
    title: "Detailing Services",
    description: 'Creekside Car Wash'
  }
];

function Banner() {
  return (
    <div className="relative w-full h-[600px] lg:min-h-screen overflow-hidden font-exo">
      {/* Background Video Section */}
      <div className="absolute inset-0 w-full h-full">
        {/* <video
          src="/Images/bannerVideo.mp4"
          muted
          autoPlay
          loop
          className="w-full h-full object-cover"
        ></video> */}
        <Image width={400} height={400} src="/Images/bannerBG2.jpg" alt=""  className="w-full h-full object-cover"/>
        {/* White Overlay */}
      </div>
      <div className="absolute shadow-black inset-0 bg-black opacity-70 w-[100%]"></div>

      {/* Content */}
      <div className="relative text-white h-full flex items-center justify-start overflow-hidden">
        {/* Swiper Section */}
        <div className=" w-[100%] lg:w-[50%] xl:w-[40%] bg-transparent text-center p-6 z-10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="h-full"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <h3 className="text-lg md:text-xl xl:text-2xl">
                  Weyburn&apos;s Best{" "}
                  <span className="text-[#ee0a00]">{service.title}</span>
                </h3>
                <p className="montserrat text-3xl lg:text-4xl xl:text-5xl font-bold mt-6">
                  {service.description}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Banner;







// 'use client';
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
// import Link from "next/link";

// const services = [
//   {
//     title: "Self Service Bays",
//     description: 'Creekside Car Wash'  },
//   {
//     title: "Automatic Wash",
//     description: 'Creekside Car Wash'  },
//   {
//     title: "Vacuum Stations",
//     description: 'Creekside Car Wash'  },
//   {
//     title: "Tire Shine",
//     description: 'Creekside Car Wash'  },
//   {
//     title: "Detailing Services",
//     description: 'Creekside Car Wash'  }
// ];

// function Banner() {
//   return (
//     <div className="font-exo relative w-full overflow-hidden">
//       <div className='flex items-center justify-center flex-wrap-reverse lg:flex-nowrap'>
//         {/* Video Section */}
//         <div className='w-full lg:w-[50%]'>
//           {/* <video src="/Images/bannerVideo.mp4" muted autoPlay loop className="w-full h-full"></video> */}
//         <img src="/Images/bannerBG2.jpg" alt="" />
//         </div>

//         {/* Swiper Section */}
//         <div className='w-full lg:w-[50%] p-6 text-center '>
//           <Swiper
//             modules={[Autoplay]}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             loop={true}
//             className="h-full"
//           >
//             {services.map((service, index) => (
//               <SwiperSlide key={index}>
//                 <h3 className='exo lg:text-2xl '>Weyburn's Best <span className='text-[#ee0a00]'>{service.title}</span> </h3>
//                 <p className='montserrat text-3xl xl:text-5xl font-bold mt-6'>{service.description}</p>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Banner;


