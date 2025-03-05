"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineRight, AiOutlineDown } from "react-icons/ai";

function Popup({ menuOpen }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="block xl:hidden">
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[999999999]">
        <div className="relative">
          <div
            className="p-6 bg-black rounded-lg w-[320px] h-[520px] md:w-[520px] md:h-[620px] xl:w-[720px] my-2 relative flex flex-col shadow-lg border border-gray-300 overflow-y-auto"
          >
            {/* Close Icon */}
            <AiOutlineClose
              className="absolute top-4 right-4 text-3xl cursor-pointer text-white hover:text-gray-500 transition duration-200"
              onClick={menuOpen}
            />

            {/* Logo Section */}
            <div className="flex items-center mb-4">
              <div className="w-40 h-16 md:w-24 md:h-24">
                <Image
                  width={400} height={400}
                  src="/Images/LogoWhite.webp"
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <ul className="grid grid-cols-1 gap-2 text-left">
              <Link href="/" onClick={menuOpen}>
                <li className="flex items-center gap-2 text-white text-lg font-semibold tracking-wide cursor-pointer py-2 hover:underline transition duration-200">
                  <AiOutlineRight /> Home
                </li>
              </Link>
              <Link href="/about" onClick={menuOpen}>
                <li className="flex items-center gap-2 text-white text-lg font-semibold tracking-wide cursor-pointer py-2 hover:underline transition duration-200">
                  <AiOutlineRight /> About Us
                </li>
              </Link>
              
              {/* Services Dropdown */}
              <li
                className="flex items-center justify-between text-white text-lg font-semibold tracking-wide cursor-pointer py-2 hover:underline transition duration-200"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span className="flex items-center gap-2">
                  <AiOutlineRight /> Services
                </span>
                <AiOutlineDown className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </li>
              {servicesOpen && (
                <ul className="pl-6 space-y-2">
                  <Link href="/car-wash" onClick={menuOpen}>
                    <li className="flex items-center gap-2 text-white text-lg cursor-pointer py-1 hover:underline">
                      <AiOutlineRight /> Car Wash
                    </li>
                  </Link>
                  <Link href="/oil-undercoating" onClick={menuOpen}>
                    <li className="flex items-center gap-2 text-white text-lg cursor-pointer py-1 hover:underline">
                      <AiOutlineRight /> Oil Undercoating
                    </li>
                  </Link>
                  <Link href="/detailing" onClick={menuOpen}>
                    <li className="flex items-center gap-2 text-white text-lg cursor-pointer py-1 hover:underline">
                      <AiOutlineRight /> Detailing
                    </li>
                  </Link>
                  <Link href="/fleet-accounts" onClick={menuOpen}>
                    <li className="flex items-center gap-2 text-white text-lg cursor-pointer py-1 hover:underline">
                      <AiOutlineRight /> Fleet Accounts
                    </li>
                  </Link>
                </ul>
              )}
              
              <Link href="/gift-cards" onClick={menuOpen}>
                <li className="flex items-center gap-2 text-white text-lg font-semibold tracking-wide cursor-pointer py-2 hover:underline transition duration-200">
                  <AiOutlineRight /> Gift Cards
                </li>
              </Link>
              <Link href="/blogs" onClick={menuOpen}>
                <li className="flex items-center gap-2 text-white text-lg font-semibold tracking-wide cursor-pointer py-2 hover:underline transition duration-200">
                  <AiOutlineRight /> Blogs
                </li>
              </Link>
              <Link href="/faq" onClick={menuOpen}>
                <li className="flex items-center gap-2 text-white text-lg font-semibold tracking-wide cursor-pointer py-2 hover:underline transition duration-200">
                  <AiOutlineRight /> FAQ
                </li>
              </Link>
              <Link href="/contact" onClick={menuOpen}>
                <li className="flex items-center gap-2 text-white text-lg font-semibold tracking-wide cursor-pointer py-2 hover:underline transition duration-200">
                  <AiOutlineRight /> Contact Us
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;