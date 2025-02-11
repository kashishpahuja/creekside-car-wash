"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";

const News = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
          autoplay: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 500,
          autoplay: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          autoplay: true,
        },
      },
    ],
  };

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
      image: "/Images/bannerBG2.jpg",
      date: "2025-01-01T08:00:00Z",
      tag: "Winter Tips",
      description:
        "Get your car ready for winter with these expert tips from Creekside Car Wash in Weyburn. Protect your vehicle from the harsh elements.",
    },
    // {
    //   id: 5,
    //   title: "Creekside Car Wash: Your Go-To Auto Care Center in Weyburn",
    //   image: "/images/creekside-location.jpg",
    //   date: "2024-12-20T14:30:00Z",
    //   tag: "Local Business",
    //   description:
    //     "Find out why Creekside Car Wash is Weyburn’s favorite choice for car washing and detailing services.",
    // },
  ];

  return (
    <div className="relative text-center px-4 lg:px-16 overflow-hidden my-24">
      {/* Title Section */}

      <h2
        className="montserrat text-2xl lg:text-6xl text-black text-center mb-12"
        
      >
OUR BLOGS
      </h2>
      <Link href={'/blogs'} className="mx-auto">
        <Slider {...settings}>
          {blogs.map((blog) => {
            const blogDate = new Date(blog.date);
            const month = blogDate.toLocaleString("en-US", { month: "short" }); // "Dec"
            const year = blogDate.getFullYear();

            return (
              <div key={blog.id} className="p-4">
                <div className="bg-white shadow-lg rounded-lg w-auto h-auto overflow-hidden">
                  <div>
                    <Image width={400} height={400} src={blog.image} alt="img" className="w-full h-72 object-cover" />
                  </div>
                  <div className="p-4">
                             <h3 className="exo text-start text-lg md:text-xl font-semibold mt-4 text-black hover:text-[#ee0a00]">
                      {blog.title}
                    </h3>


<div className="flex items-start md:items-center justify-between flex-col md:flex-row ">
<div className="exo flex items-center text-gray-600 text-md md:text-md font-semibold hover:underline mt-4 ">
                      <CgProfile  className="w-6 h-6 mr-2" />{' '}
                        
                        <span>Mohit Oberoi</span>
                      </div>
                      <div>
                      <div
                      // href="/blog"
                      className="exo text-gray-600 text-md lg:text-md font-semibold hover:underline mt-4 inline-block"
                    >
                      <span>Read More</span>{" "}
                      <FaArrowRight className="inline ml-2" />
                    </div>
                      </div>

</div>
                   
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </Link>
    </div>
  );
};

export default News;
