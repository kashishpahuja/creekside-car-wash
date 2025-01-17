"use client";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import Link from "next/link";

function Producer() {
  const services = [
    {id:'1', name: 'Car Wraps', image: '/Images/services/carWraps.webp', icon: <MdKeyboardDoubleArrowRight /> },
    { id:'2', name: 'Auto Glass', image: '/Images/services/autoGlass.jpg', icon: <MdKeyboardDoubleArrowRight /> },
    { id:'3', name: 'Auto Detailing', image: '/Images/services/detailing.jpg', icon: <MdKeyboardDoubleArrowRight /> },
    { id:'4', name: 'Car Wash', image: '/Images/services/carWash.webp', icon: <MdKeyboardDoubleArrowRight /> },
  ];

  return (
    <div className="py-12 mx-4 text-black ">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 overflow-hidden border shadow-xl rounded-lg"
          >
            <Link href={`/service/${service.id}`}>
              <div className="w-full h-[400px] cursor-pointer rounded-lg">
                <img
                  src={service.image}
                  alt={''}
                  className="w-full h-[100%] object-cover"
                  style={{
                    filter: "brightness(1.3) grayscale(0.5)",
                  }}
                />
              </div>
            </Link>

            <div className=" mt-4">
              <div className="flex items-center justify-between py-4 cursor-pointer">
                <div className="exo text-2xl font-bold ">
                  {service.name}
                </div>
                <div>
                  <IoIosArrowForward className="w-4 h-4 " />
                </div>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Producer;
