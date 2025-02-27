
'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Self Service Bays",
   
  },
  {
    title: "Automatic Wash",
   
  },
  {
    title: "Vacuum Stations",
   
  },
  {
    title: "Tire Shine",
   
  },
  {
    title: "Detailing Services",
   
  }
];

function Banner() {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:min-h-screen overflow-hidden font-exo pt-[50px]">
      {/* Background Video Section */}
      <div className="absolute inset-0 w-full h-full">
        {/* <video
          src="/Images/bannerVideo.mp4"
          muted
          autoPlay
          loop
          className="w-full h-full object-cover"
        ></video> */}
        <Image width={200} height={200} src="/Images/banner5.webp" alt=""  className="w-full h-full object-cover"/>
        {/* White Overlay */}
      </div>
      <div className="absolute shadow-black inset-0 bg-black opacity-70 w-[100%] "></div>

      {/* Content */}
      <div className="relative text-white h-full flex items-center justify-center lg:justify-start xl:ml-28  overflow-hidden">
        {/* Swiper Section */}
        <div className=" w-[100%] lg:w-[50%] xl:w-[50%] bg-transparent  p-8 lg:p-12 z-10">
        <div className="">
          <div>
            <h3 className=" text-white text-4xl md:text-5xl xl:text-7xl font-bold ">
            Clean. Rinse. <br /> Drive. Yourself.
            </h3>
            {/* <h3 className=" text-white text-3xl font-bold ">
         Creekside Car Wash
            </h3> */}
            <h3 className=" text-white  font-medium mt-6 md:w-[60%] lg:w-full text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, recusandae? Odio dolorem et praesentium. Debitis sunt accusamus nihil maiores exercitationem sed architecto, natus qui? Iste consequuntur qui eius eligendi. Atque, officia odit?
            </h3>
          </div>

         
          <div className=" mt-12">
          
            <Link
            href={"/contact"}
            className="px-4 py-4 bg-white hover:bg-red-600 text-black hover:text-white text-lg font-semibold rounded-lg"
          >
            Book Now
          </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;