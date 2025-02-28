"use client";
import React from "react";
import Image from "next/image";

export default function CarWashInfo() {
  const featuresTop = [
    {
      icon: "/Images/bay1.jpg",
      number: "01",
      title: "Self-Serve Bays",
      description: "Hot water, max height 11'6\", open 24/7.",
    },
    {
      icon: "/Images/vacuum.jpg",
      number: "02",
      title: "4 Vacuums",
      description: "Powerful and efficient cleaning.",
    },
    {
      icon: "/Images/shampoo.jpg",
      number: "03",
      title: "Shampoo & Spot Remover",
      description: "Perfect for deep cleaning.",
    },
  ];

  const featuresBottom = [
    {
      icon: "/Images/truck-bay.jpg",
      number: "04",
      title: "Dedicated Semi-Truck Bay",
      description: "Designed for large vehicles.",
    },
    {
      icon: "/Images/boats-rvs.jpg",
      number: "05",
      title: "Space for Boats & RVs",
      description: "Ample room for oversized vehicles.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 p-6 mx-4 md:mx-12 xl:mx-24 my-32">
      
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-black">
          Ultimate Car Wash Experience
        </h2>
        <p className="text-lg text-gray-800">
          Our state-of-the-art facilities provide top-notch cleaning solutions for all vehicles, from cars to RVs.
        </p>
        <div className="flex gap-4 my-4">
          <Image width={400} height={400} src="/Images/bay-main.jpg" alt="Main Bay" className="w-1/2 rounded-lg" />
          <Image width={400} height={400} src="/Images/truck-wash.jpg" alt="Truck Bay" className="w-1/2 rounded-lg" />
        </div>
        <p className="text-lg text-gray-800">
          Whether you&apos;re looking for a quick wash or deep cleaning, our bays are equipped to meet your needs.
        </p>
      </div>

      {/* Right Features */}
      <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4">
          {featuresTop.map((feature, index) => (
            <div key={index} className="p-6 shadow-md rounded-2xl bg-black opacity-90 transition-transform transform hover:scale-105">
              <div className="flex items-center justify-between">
                <Image width={50} height={50} src={feature.icon} alt="img" className="rounded-lg border border-gray-400" />
                <div className="text-gray-400 text-2xl">{feature.number}</div>
              </div>
              <h3 className="text-xl text-white mt-4">{feature.title}</h3>
              <p className="text-gray-100 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-4">
          {featuresBottom.map((feature, index) => (
            <div key={index} className="p-6 shadow-md rounded-2xl bg-black opacity-90 transition-transform transform hover:scale-105">
              <div className="flex items-center justify-between">
                <Image width={50} height={50} src={feature.icon} alt="img" className="rounded-lg border border-gray-400" />
                <div className="text-gray-400 text-2xl">{feature.number}</div>
              </div>
              <h3 className="text-xl text-white mt-4">{feature.title}</h3>
              <p className="text-gray-100 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
