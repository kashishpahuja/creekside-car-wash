"use client";
import React from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaPhoneVolume,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";
import { CiLocationOn, CiMail } from "react-icons/ci";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebook,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div 
    style={{
        backgroundImage: `url('/Images/footerImg.webp')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    className="  relative bg-black text-white" >
   
   <div
          className="absolute inset-0 bg-black bg-opacity-90 "
          aria-hidden="true"
        ></div>
      <div className="relative z-20 py-10 lg:py-28 px-5 lg:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12  p-4 md:mx-8 lg:mx-16 xl:mx-36">
          {/* 1st Column - Company Info (4 columns on larger screens) */}
          <div className="lg:col-span-5 mb-6 lg:mb-0 ">
            {/* <div className="w-[200px] h-[90px] ">
            <img
              src="/Images/logo.webp"
              alt="FreshEAT"
              className="w-32 md:w-40 lg:w-full object-cover h-[100%] "
            />
            </div> */}
            <h3 className=" text-2xl font-bold ">CREEKSIDE CAR WASH</h3>
            

            <div className="flex flex-col gap-2 mt-2">
              <p className="">
                <Link
                  href="tel: 7786367271"
                  className="hover:animate-pulse text-md xl:text-lg"
                >
                  Phone:
                  778-636-7271
                </Link>
              </p>
              <p>
                <Link
                  href="mailto: creeksideetailz@gmail.com"
                  className="hover:animate-pulse text-md xl:text-lg"
                >
                  Email: 
                  creeksideetailz@gmail.com
                </Link>
              </p>
              <p className=" text-md xl:text-lg">
                Address:
                32721 Logan Ave, Mission BC V2V6K7
              </p>
            </div>
            <h3 className=" text-sm  font-semibold mt-4">Working Hours:</h3>
            <div className="flex flex-col gap-1 my-2">
              <p className=" text-md xl:text-lg">
                Monday-Friday: 08:00 AM - 05:30 PM <br /> Saturday : 08:00 AM -
                05:00 PM <br /> Sunday: Closed
              </p>
            </div>
            {/* <p className="text-md lg:w-[330px] text-justify mt-6">
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
              lacinia curabitur lacinia mollis
            </p>
            <h3 className="text-lg font-medium py-4 hover:animate-pulse">
              Follow Us:
            </h3>
        */}
          </div>

          {/* 2nd Column - Quick Links (2 columns on larger screens) */}
          <div className="lg:col-span-3 mb-6 lg:mb-0 ">
            <h2 className="text-2xl font-bold  hover:animate-pulse">
              More About Us
            </h2>

            <ul className="space-y-4 text-md my-4">
              <li className="flex items-center hover:animate-pulse">
                <FaChevronRight className="mr-2" />
                <Link className="text-md xl:text-lg" href="/">Home</Link>
              </li>
              <li className="flex items-center hover:animate-pulse">
                <FaChevronRight className="mr-2" />
                <Link className="text-md xl:text-lg" href="/about">About Us</Link>
              </li>
              <li className="flex items-center hover:animate-pulse">
                <FaChevronRight className="mr-2" />
                <Link className="text-md xl:text-lg" href="/faq">FAQ</Link>
              </li>
              <li className="flex items-center hover:animate-pulse">
                <FaChevronRight className="mr-2" />
                <Link className="text-md xl:text-lg" href="/blogs">Our Blogs</Link>
              </li>

              <li className="flex items-center hover:animate-pulse">
                <FaChevronRight className="mr-2" />
                <Link className="text-md xl:text-lg" href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* 3rd Column - Our Menu (2 columns on larger screens) */}
          <div className="lg:col-span-4 mb-6 lg:mb-0 ">
            <h2 className="text-2xl font-bold  hover:animate-pulse">
              Services
            </h2>
            <ul className="space-y-4 text-md my-4">
              <li className="flex items-center hover:animate-pulse">
                <FaChevronRight className="mr-2" />
                <Link className="text-md xl:text-lg" href="/car-wash">Creekside Car Wash </Link>
              </li>
              <li className="flex items-center hover:animate-pulse">
                <FaChevronRight className="mr-2" />
                <Link className="text-md xl:text-lg" href="/oil-undercoating">Creekside Oil Undercoating  </Link>
              </li>
              <li className="flex items-center hover:animate-pulse">
                <FaChevronRight className="mr-2" />
                <Link className="text-md xl:text-lg" href="/detailing">Creekside Car Detailing  </Link>
              </li>
             
              <li className="flex items-center hover:animate-pulse">
                <FaChevronRight className="mr-2" />
                <Link className="text-md xl:text-lg" href="/fleet-accounts">Fleet Accounts</Link>
              </li>
           
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-20">
              {/* <div className="w-[240px] h-[100px] mx-auto  flex items-center justify-center">
            <img
              src="/Images/logo.webp"
              alt="FreshEAT"
              className="w-32 md:w-40 lg:w-full object-cover h-[100%] "
            />
            </div> */}
        <div className="flex items-center justify-center gap-6 ">
              <Link href="#" className="hover:bg-white text-xl md:text-2xl rounded-full  shadow-full p-3 bg-gray-300">
                <FaTwitter className="text-black" />
              </Link>
              <Link href="#" className="hover:bg-white text-xl md:text-2xl rounded-full  shadow-full p-3 bg-gray-300">
                <FaFacebook className="text-black" />
              </Link>
              <Link href="#" className="hover:bg-white text-xl md:text-2xl rounded-full  shadow-full p-3 bg-gray-300">
                <FaPinterestP className="text-black" />
              </Link>
              <Link href="#" className="hover:bg-white text-xl md:text-2xl rounded-full  shadow-full p-3 bg-gray-300">
                <FaInstagram className="text-black" />
              </Link>
            </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="relative z-20 px-4 py-6  text-md  text-center">
        Copyright © 2025 Creekside Car Wash.{" "}
        <Link href="https://digitalpaaji.com/" className="hover:animate-pulse">
          Designed by Digital Paaji.
        </Link>{" "}
        All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
