"use client";
import React from "react";
import Image from "next/image";

export default function CarWashInfo() {
  const featuresTop = [
    {
      icon: "/Images/car-wash/icon1.webp",
      number: "01",
      title: " Full Cleaning Setup",
      description: "Includes 4 vacuums + 1 shampoo & spot remover vacuum for interior cleaning.",
    },
    {
      icon: "/Images/car-wash/icon3.webp",
      number: "02",
      title: "Dedicated Semi-Truck Bay",
      description: "Special 4th bay for semi-trucks with ample space.",
    },
    {
      icon: "/Images/car-wash/icon2.webp",
      number: "03",
      title: "Hot Water Wash",
      description: "Better cleaning for tough dirt and grime. Perfect for deep cleaning.",
    },
  ];

  const featuresBottom = [
    {
      icon: "/Images/car-wash/icon4.webp",
      number: "04",
      title: " 24/7 Availability",
      description: " Open 24 hours, so you can wash your vehicle anytime.",
    },
    {
      icon: "/Images/car-wash/icon5.webp",
      number: "05",
      title: "Big Vehicle Friendly",
      description: "Supports large vehicles up to 11'6 in height, including RVs, buses, and trucks.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 p-6  my-24 bg-[#1f1e1f] px-8 lg:px-20 xl:px-40 py-24">
      
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-white">
          Ultimate Car Wash Experience
        </h2>
        <p className="exo text-sm md:text-lg text-gray-200">
          Whether you&apos;re looking for a quick wash or deep cleaning, our bays are equipped to meet your needs.
          Our state-of-the-art facilities provide top-notch cleaning solutions for all vehicles, from cars to RVs.
        </p>
        <div className="flex gap-2 items-center justify-center my-4 overflow-hidden w-full">
          <Image width={400} height={400} src="/Images/car-wash/1.webp" alt="Main Bay" className="w-1/2   rounded-lg" />
          <Image width={400} height={400} src="/Images/car-wash/2.webp" alt="Truck Bay" className="w-1/2   rounded-lg" />
        </div>
        <p className="exo text-sm md:text-lg text-gray-200">
          Whether you&apos;re looking for a quick wash or deep cleaning, our bays are equipped to meet your neeher you&apos; a quick wash or deep cleaning, our bays are equipped to meet your needs.
    
        </p>
      </div>

      {/* Right Features */}
      <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4 items-center justify-start">
        <div className="flex flex-col gap-4 w-full">
          {featuresTop.map((feature, index) => (
            <div key={index} className="p-6 shadow-md rounded-2xl bg-white opacity-90 transition-transform transform hover:scale-105">
              <div className="flex items-center justify-between">
                <Image width={50} height={50} src={feature.icon} alt="img" className="" />
                <div className="text-gray-800 text-2xl">{feature.number}</div>
              </div>
              <h3 className="text-2xl text-black font-semibold mt-4">{feature.title}</h3>
              <p className="exo text-gray-700 text-sm md:text-lg mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-4 w-full">
          {featuresBottom.map((feature, index) => (
            <div key={index} className="p-6 shadow-md rounded-2xl bg-white opacity-90 transition-transform transform hover:scale-105">
              <div className="flex items-center justify-between">
                <Image width={50} height={50} src={feature.icon} alt="img" className="" />
                <div className="text-gray-800 text-2xl">{feature.number}</div>
              </div>
              <h3 className="text-2xl text-black font-semibold mt-4">{feature.title}</h3>
              <p className=" exo text-gray-700 text-sm md:text-lg mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
