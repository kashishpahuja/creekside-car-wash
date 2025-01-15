'use client';
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai"; // Import close icon

function Popup({ menuOpen }) {
  return (
    <div className="block md:hidden">
        
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="relative">
          <div
            className="p-8 bg-black rounded-lg w-[300px] h-[500px] md:w-[500px] md:h-[600px] xl:w-[700px] bg-cover bg-center relative"
            style={{ backgroundImage: "url('/Images/popupBG.webp')" }}
          >
            
            {/* Close Icon in Top Right Corner */}
            <AiOutlineClose
              className="absolute top-4 right-4 text-2xl cursor-pointer text-white"
              onClick={menuOpen} // Close the menu when clicking the icon
            />
<div className="flex items-start justify-between">
            {/* Logo Section */}
            <div className="flex justify-start mt-6">
              <div className="w-24 h-24">
                <img
                  src="/Images/logo.webp"
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col items-center mt-6 space-y-6">
              <Link href="/" onClick={menuOpen}>
                <li className="exo text-white text-lg font-bold tracking-wide cursor-pointer hover:underline">
                  HOME
                </li>
              </Link>
              <Link href="/about" onClick={menuOpen}>
                <li className="exo text-white text-lg font-bold tracking-wide cursor-pointer hover:underline">
                  ABOUT
                </li>
              </Link>
              <Link href="/albums" onClick={menuOpen}>
                <li className="exo text-white text-lg font-bold tracking-wide cursor-pointer hover:underline">
                  OUR ALBUMS
                </li>
              </Link>
              <Link href="/contact" onClick={menuOpen}>
                <li className="exo text-white text-lg font-bold tracking-wide cursor-pointer hover:underline">
                  CONTACT
                </li>
              </Link>
            </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
