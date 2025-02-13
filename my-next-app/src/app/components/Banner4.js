"use client";
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
  },
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
    <div className="w-full h-[700px] flex items-center justify-center overflow-hidden bg-[#b0d0d3]  mt-[120px]">
   
      <div className="w-1/2 px-32  ">
        <h3 className="montserrat text-3xl lg:text-5xl ">
          Experience Premium Car Care at Creekside Car Wash
        </h3>
        <p className="montserrat my-6 font-medium w-[80%] text-gray-600 text-justify">
          At Creekside Car Wash, we provide top-notch detailing, undercoating,
          and car wash services to keep your vehicle looking and performing at
          its best. From exterior washes to interior detailing and durable
          undercoating, we offer everything your car needs for lasting
          protection and shine.
        </p>
        <h5 className="montserrat bg-blue-500 px-8 text-white font-medium text-lg py-2 w-fit rounded-lg">
          Get Started
        </h5>
      </div>

      <div className="w-1/2  ">
        <Image
          width={400}
          height={400}
          alt="img"
          className="w-full h-[100%] object-contain"
          src={"/Images/bannerCar2.webp"}
        />
      </div>
    </div>
  );
}

export default Banner;
