"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const News = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track active index for styling

  const blogs = [
    {
      id: 1,
      title: "Hatchback/Sedan",
      images: ["/Images/detailing/1.webp"],
      description: "Compact and fuel-efficient car types perfect for city driving.",
    },
    {
      id: 2,
      title: "SUV/Minivan",
      images: ["/Images/detailing/2.webp"],
      description: "Spacious and versatile, ideal for family trips and adventures.",
    },
    {
      id: 3,
      title: "Pickup",
      images: ["/Images/detailing/3.webp"],
      description: "Robust vehicles built for heavy-duty tasks and rough terrains.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index); // Set active index on click
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index); // Navigate to specific slide
    }
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex); // Update the active index when the slide changes
  };

  return (
    <div className="relative text-center overflow-hidden my-24">
      {/* Title Section */}
      <h2 className="montserrat text-xl xl:text-3xl text-[#d63c3c] text-center mb-6  px-4 lg:px-24">STEP 1</h2>
      <h2 className="montserrat text-2xl md:text-3xl lg:text-5xl text-black text-center mb-12  px-4 lg:px-24">
        Choose Your Car Type
      </h2>

      {/* Car Type Buttons with Active Styling */}
      <div className="flex items-center justify-center  flex-wrap lg:flex-nowrap gap-6 lg:gap-12 md:text-lg lg:text-xl xl:text-2xl font-bold mb-12  px-4 lg:px-24">
        {blogs.map((blog, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`cursor-pointer transition-all duration-300 py-2 px-4 ${
              activeIndex === index
                ? "bg-[#000000e1] rounded-xl text-white"
                : "bg-transparent text-[#000000e1]"
            }`}
          >
            {blog.title}
          </div>
        ))}
      </div>

      {/* Swiper Component */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={false}
        loop={true}
        onSlideChange={handleSlideChange} // Listen to slide changes
        breakpoints={{
          1280: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
        }}
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={blog.id}>
            <div className="p-4">
              <Image
                width={400}
                height={400}
                src={blog.images[0]}
                alt={blog.title}
                className="w-full lg:h-[600px] object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows (Optional) */}
      {/* Uncomment if you need custom navigation arrows */}
      {/* <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-4xl cursor-pointer  p-4 rounded-full shadow-md hover:bg-gray-200 transition-all w-14 h-14 flex items-center justify-center">
        <FaArrowLeft className="text-black text-2xl" />
      </div>
      <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 text-black text-4xl cursor-pointer  p-4 rounded-full shadow-md hover:bg-gray-200 transition-all w-14 h-14 flex items-center justify-center">
        <FaArrowRight className="text-black text-2xl" />
      </div> */}
    </div>
  );
};

export default News;
