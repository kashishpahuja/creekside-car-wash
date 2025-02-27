"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const News = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Regular Car Washes Are Important for Your Vehicle",
      image: "/Images/blog2.webp",
      date: "2025-01-18T12:00:00Z",
      tag: "Car Care",
      description:
        "Regular car washes protect your car's paint from dirt and debris, and they help maintain its resale value.",
    },
    {
      id: 2,
      title: "How to Choose the Best Auto Care Package for Your Car",
      image: "/Images/blog3.webp",
      date: "2025-01-10T10:30:00Z",
      tag: "Service Packages",
      description:
        "Learn about the different auto care packages available at Creekside Car Wash and how to select the best one for your vehicle.",
    },
    {
      id: 3,
      title: "The Benefits of Professional Car Detailing",
      image: "/Images/blog4.webp",
      date: "2025-01-05T15:00:00Z",
      tag: "Car Detailing",
      description:
        "Professional car detailing goes beyond a simple wash. Find out how it can restore your car's shine and protect its interior.",
    },
    {
      id: 4,
      title: "Preparing Your Car for Winter: Tips from Creekside Car Wash",
      image: "/Images/bannerBG2.webp",
      date: "2025-01-01T08:00:00Z",
      tag: "Winter Tips",
      description:
        "Get your car ready for winter with these expert tips from Creekside Car Wash in Weyburn. Protect your vehicle from the harsh elements.",
    },
  ];

  return (
    <div className="relative text-center px-4 lg:px-24 overflow-hidden my-24">
      {/* Title Section */}
      <h2 className="montserrat text-2xl lg:text-5xl text-black text-center mb-12">
        OUR BLOGS
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={false}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          1280: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },
        }}
      >
        {blogs.map((blog) => {
          const blogDate = new Date(blog.date);
          const month = blogDate.toLocaleString("en-US", { month: "short" });
          const year = blogDate.getFullYear();

          return (
            <SwiperSlide key={blog.id}>
              <div className="p-4">
                <div className="w-auto h-auto overflow-hidden">
                  <div>
                    <Image
                      width={400}
                      height={400}
                      src={blog.image}
                      alt="img"
                      className="w-full h-72 object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="exo text-start text-lg md:text-xl font-semibold mt-4 text-black hover:text-[#ee0a00]">
                      {blog.title}
                    </h3>
                    <div className="flex items-start md:items-center justify-between flex-col md:flex-row ">
                      <div>
                        <div className="exo text-gray-600 text-md lg:text-md font-semibold hover:underline mt-4 inline-block">
                          <span>Read More</span>{" "}
                          <FaArrowRight className="inline ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default News;
