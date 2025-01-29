'use client';
import Image from "next/image";
import React, { useState, useEffect } from "react";


const services = [
  {
    title: "Self Service Bays",
  },
  {
    title: "Automatic Wash",
  },
  {
    title: "Oil Undercoating",
  },
  {
    title: "Window Tinting",
  },
  {
    title: "Detailing Services",
  }
];

function Banner() {
    const [currentService, setCurrentService] = useState(0);
  const [typing, setTyping] = useState(true);
  const [duration, setDuration] = useState(services[0].title.length * 0.1); // Initial duration

  useEffect(() => {
    const textLength = services[currentService].title.length;
    const typingDuration = textLength * 0.4; // Each letter takes 0.1s
    setDuration(typingDuration);

    const timeout = setTimeout(() => {
      setTyping(false);
      setTimeout(() => {
        setCurrentService((prev) => (prev + 1) % services.length);
        setTyping(true);
      }, 500); // Short delay before new text starts typing
    }, typingDuration * 1000); // Convert seconds to milliseconds

    return () => clearTimeout(timeout);
  }, [currentService]);

  return (
    <div className="relative w-full h-[600px] lg:min-h-screen overflow-hidden font-exo">
      {/* Background Image Section */}
      <div className="absolute inset-0 w-full h-full">
        <img src="/Images/bannerBG2.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      {/* White Overlay */}
      <div className="absolute shadow-black inset-0 bg-black opacity-70 w-[100%] "></div>

      {/* Content */}
      <div className="relative text-white h-full flex items-center justify-start overflow-hidden">
        <div className="w-[100%] lg:w-[50%] xl:w-[60%] bg-transparent text-center p-6 z-10">
         <div className="flex items-center gap-2 justify-center">
         {/* <h3 className="text-lg md:text-xl xl:text-4xl ">
            Weyburns Best 
          </h3> */}
          <div 
              className={`typewriter text-lg md:text-xl xl:text-4xl text-[#ee0a00] border-r border-[#ee0a00] ${typing ? "typing" : ""}`}
              style={{ animationDuration: `${duration}s` }} // Dynamic duration
            >
              {services[currentService].title}
            </div>
         </div>
     
           {/* <h3 className="text-lg md:text-xl xl:text-4xl border-2 ">
            Weyburn's Best <span className="text-[#ee0a00] typewriter border-2 border-red-600 ">{services[currentService].title}</span>
          </h3> */}
          <div className="flex items-center gap-2 justify-center">
          <div className="montserrat text-3xl lg:text-4xl xl:text-7xl font-bold mt-6">

Creekside 
</div>
<p className="montserrat text-3xl lg:text-4xl xl:text-5xl font-bold mt-6">

 Car Wash
</p>
         </div>
          {/* <p className="montserrat text-3xl lg:text-4xl xl:text-7xl font-bold mt-6">

            Creekside Car Wash
          </p> */}
        </div>
      </div>

      
    </div>
  );
}

export default Banner;








// 'use client';
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";

// const services = [
//   {
//     title: "Self Service Bays",
   
//   },
//   {
//     title: "Automatic Wash",
   
//   },
//   {
//     title: "Vacuum Stations",
   
//   },
//   {
//     title: "Tire Shine",
   
//   },
//   {
//     title: "Detailing Services",
   
//   }
// ];

// function Banner() {
//   return (
//     <div className="relative w-full h-[600px] lg:min-h-screen overflow-hidden font-exo">
//       {/* Background Video Section */}
//       <div className="absolute inset-0 w-full h-full">
//         {/* <video
//           src="/Images/bannerVideo.mp4"
//           muted
//           autoPlay
//           loop
//           className="w-full h-full object-cover"
//         ></video> */}
//         <img src="/Images/bannerBG2.jpg" alt=""  className="w-full h-full object-cover"/>
//         {/* White Overlay */}
//       </div>
//       <div className="absolute shadow-black inset-0 bg-black opacity-70 w-[100%]"></div>

//       {/* Content */}
//       <div className="relative text-white h-full flex items-center justify-start overflow-hidden">
//         {/* Swiper Section */}
//         <div className=" w-[100%] lg:w-[50%] xl:w-[60%] bg-transparent text-center p-6 z-10">
//           <Swiper
//             modules={[Autoplay]}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             loop={true}
//             className="h-full"
//           >
//             {services.map((service, index) => (
//               <SwiperSlide key={index}>
//                 <h3 className="text-lg md:text-xl xl:text-4xl">
//                   Weyburn's Best{" "}
//                   <span className="text-[#ee0a00]">{service.title}</span>
//                 </h3>
//                 <p className="montserrat text-3xl lg:text-4xl xl:text-7xl font-bold mt-6">
//           Creekside Car Wash
//                 </p>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Banner;







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

//           {/* Video Section */}
//           <div className='w-full lg:w-[50%]'>
//           {/* <video src="/Images/bannerVideo.mp4" muted autoPlay loop className="w-full h-full"></video> */}
//         <img src="/Images/bannerBG2.jpg" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Banner;


