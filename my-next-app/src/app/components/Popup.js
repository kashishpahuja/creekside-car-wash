"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai"; // Import icons

function Popup({ menuOpen }) {
  return (
    <div className="block lg:hidden">
      <div className="sticky top-0 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999999999]">
        <div className="relative">
          <div
            className="p-8 bg-white rounded-lg w-[300px] h-[500px] md:w-[500px] md:h-[600px] xl:w-[700px] bg-cover my-2 bg-center relative"
            style={{ backgroundImage: "url('/Images/popupBG.webp')" }}
          >
            {/* Close Icon in Top Right Corner */}
            <AiOutlineClose
              className="absolute top-4 right-4 text-2xl cursor-pointer text-black"
              onClick={menuOpen}
            />

            <div className="flex flex-col items-start justify-between">
              {/* Logo Section */}
              <div className="flex justify-start">
                <div className="w-28 h-28"> {/* Adjusted logo size */}
                  <Image
                   width={400} height={400} 
                    src="/Images/logo.webp"
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <ul className="grid grid-cols-1 gap-2 mt-6">
                {[
                  { href: "/", label: "HOME" },
                  { href: "/about", label: "ABOUT" },
                  { href: "/car-wash", label: "CAR WASH" },
                  { href: "/oil-undercoating", label: "OIL UNDERCOATING" },
                  { href: "/detailing", label: "DETAILING" },
                  { href: "/window-tinting", label: "WINDOW TINTING" },
                  { href: "/contact", label: "CONTACT US" },
                ].map((item, index) => (
                  <Link key={index} href={item.href} onClick={menuOpen}>
                    <li className="flex items-center gap-2 exo text-black text-lg font-bold tracking-wide cursor-pointer hover:underline">
                      <AiOutlineRight /> {item.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
