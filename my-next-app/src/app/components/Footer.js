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
        backgroundImage: `url('/Images/footerBG.webp')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    className=" pt-16 relative bg-black text-white" >
   
   <div
          className="absolute inset-0 bg-black bg-opacity-90 "
          aria-hidden="true"
        ></div>
      <div className="relative z-20 py-10 px-5 lg:px-5">
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
            <h3 className=" text-2xl font-bold ">Creekside Car Wash</h3>
            <div className="flex flex-col gap-2 mt-2">
              <p className="">
                <Link
                  href="tel:+91 94623-27667"
                  className="hover:underline text-sm lg:text-md"
                >
                  Phone: +91 94623-27667
                </Link>
              </p>
              <p>
                <Link
                  href="mailto:info@srscargopackers.in"
                  className="hover:underline text-sm lg:text-md"
                >
                  Email: info@srscargopackers.in
                </Link>
              </p>
              <p className=" text-sm lg:text-md">
                Address: 70 Hermann Ave Carteret New Jersey 07008 70 Hermann Ave
                Carteret New Jersey 07008
              </p>
            </div>
            <h3 className=" text-sm  font-semibold mt-4">Working Hours:</h3>
            <div className="flex flex-col gap-1 my-2">
              <p className=" text-sm lg:text-md">
                Monday-Friday: 08:00 AM - 05:30 PM <br /> Saturday : 08:00 AM -
                05:00 PM <br /> Sunday: Closed
              </p>
            </div>
            {/* <p className="text-md lg:w-[330px] text-justify mt-6">
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
              lacinia curabitur lacinia mollis
            </p>
            <h3 className="text-lg font-medium py-4 hover:text-orange-500">
              Follow Us:
            </h3>
        */}
          </div>

          {/* 2nd Column - Quick Links (2 columns on larger screens) */}
          <div className="lg:col-span-3 mb-6 lg:mb-0 ">
            <h3 className="text-2xl font-bold  hover:text-orange-500">
              More About Us
            </h3>

            <ul className="space-y-4 text-md my-4">
              <li className="flex items-center hover:text-orange-500">
                <FaChevronRight className="mr-2" />
                <Link className="text-sm lg:text-md" href="/">Home</Link>
              </li>
              <li className="flex items-center hover:text-orange-500">
                <FaChevronRight className="mr-2" />
                <Link className="text-sm lg:text-md" href="/about">About Us</Link>
              </li>
              <li className="flex items-center hover:text-orange-500">
                <FaChevronRight className="mr-2" />
                <Link className="text-sm lg:text-md" href="/menu">Food Menu</Link>
              </li>
              <li className="flex items-center hover:text-orange-500">
                <FaChevronRight className="mr-2" />
                <Link className="text-sm lg:text-md" href="/blog">Our Blogs</Link>
              </li>

              <li className="flex items-center hover:text-orange-500">
                <FaChevronRight className="mr-2" />
                <Link className="text-sm lg:text-md" href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* 3rd Column - Our Menu (2 columns on larger screens) */}
          <div className="lg:col-span-4 mb-6 lg:mb-0 ">
            <h3 className="text-2xl font-bold  hover:text-orange-500">
              Services
            </h3>
            <ul className="space-y-4 text-md my-4">
              <li className="flex items-center hover:text-orange-500">
                <FaChevronRight className="mr-2" />
                <Link className="text-sm lg:text-md" href="/pizza">Mobile Auto Glass Services </Link>
              </li>
              <li className="flex items-center hover:text-orange-500">
                <FaChevronRight className="mr-2" />
                <Link className="text-sm lg:text-md" href="/burger">Auto Detailing </Link>
              </li>
              <li className="flex items-center hover:text-orange-500">
                <FaChevronRight className="mr-2" />
                <Link className="text-sm lg:text-md" href="/pasta">Protection Services & Packages</Link>
              </li>
              <li className="flex items-center hover:text-orange-500">
                <FaChevronRight className="mr-2" />
                <Link className="text-sm lg:text-md" href="/drinks">Window Tinting</Link>
              </li>
              <li className="flex items-center hover:text-orange-500">
                <FaChevronRight className="mr-2" />
                <Link className="text-sm lg:text-md" href="/desserts">Ceramic Coating</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-20">
       
        <div className="flex items-center justify-center gap-6 ">
              <Link href="#" className="hover:text-red-500 text-xl md:text-2xl rounded-full  shadow-full p-3 bg-gray-300">
                <FaTwitter className="text-black" />
              </Link>
              <Link href="#" className="hover:text-red-500 text-xl md:text-2xl rounded-full  shadow-full p-3 bg-gray-300">
                <FaFacebook className="text-black" />
              </Link>
              <Link href="#" className="hover:text-red-500 text-xl md:text-2xl rounded-full  shadow-full p-3 bg-gray-300">
                <FaPinterestP className="text-black" />
              </Link>
              <Link href="#" className="hover:text-red-500 text-xl md:text-2xl rounded-full  shadow-full p-3 bg-gray-300">
                <FaInstagram className="text-black" />
              </Link>
            </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="relative z-20 py-3  text-sm text-center">
        Copyright © 2024 FreshEat Respondent.{" "}
        <Link href="#" className="hover:text-orange-500">
          Designed by Future IT Touch.
        </Link>{" "}
        All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
