"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbPointFilled } from "react-icons/tb";
import { MdCardGiftcard } from "react-icons/md";

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
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[999999999] border-2 border-white">
        <div className="relative">
          <div
            className="p-8 md:p-12 bg-black rounded-lg sm:mx-6 w-[260px] h-auto md:w-[520px] md:h-auto xl:w-[720px] my-2 relative flex flex-col shadow-lg border border-gray-700 overflow-y-auto"
          >
            {/* Close Icon */}
            <AiOutlineClose
              className="absolute top-2 md:top-8 right-2 md:right-6 text-xl md:text-3xl cursor-pointer text-white hover:text-gray-500 transition duration-200"
              onClick={menuOpen}
            />

            {/* Logo Section */}
            {/* <div className="flex items-center my-4">
              <div className="w-fit md:w-fit h-16 ">
                <Image
                  width={400} height={400}
                  src="/Images/LogoWhite.webp"
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div> */}

            {/* Navigation Links */}
            <ul className="grid grid-cols-1 gap-3 text-left mt-4">
              <Link href="/" onClick={menuOpen}>
                <li className="flex items-center gap-2  text-white text-lg  tracking-wide cursor-pointer   transition duration-200">
                  <Image src={'/Images/nav/1.webp'} alt='' width={18} height={18} className="w-[25px] h-[25px] object-cover" /> Home
                </li>
              </Link>
              <Link href="/about" onClick={menuOpen}>
                <li className="flex items-center gap-2  text-white text-lg  tracking-wide cursor-pointer   transition duration-200">
                   <Image src={'/Images/nav/2.webp'} alt='' width={18} height={18} className="w-[25px] h-[25px] object-cover" />  About Us
                </li>
              </Link>
              
              {/* Services Dropdown */}
              <li
                className="flex items-center justify-between   text-white text-lg  tracking-wide cursor-pointer   transition duration-200"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span className="flex items-center gap-2">
                   <Image src={'/Images/nav/3.webp'} alt='' width={18} height={18} className="w-[25px] h-[25px] object-cover" />  Services
                </span> 
                <RiArrowDropDownLine  className={`transition-transform w-6 h-6   object-cover ${servicesOpen ? "rotate-180" : ""}`} />
              </li>
         {servicesOpen && (
  <ul
    className={`pl-5 space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
      servicesOpen ? "max-h-[300px]" : "max-h-0"
    }`}
  >
    <Link href="/car-wash" onClick={menuOpen}>
      <li className="flex items-center gap-2 text-white text-lg cursor-pointer py-1 ">
        <TbPointFilled className="opacity-70" /> Car Wash
      </li>
    </Link>
    <Link href="/oil-undercoating" onClick={menuOpen}>
      <li className="flex items-center gap-2 text-white text-lg cursor-pointer py-1 ">
        <TbPointFilled className="opacity-70" /> Oil Undercoating
      </li>
    </Link>
    <Link href="/detailing" onClick={menuOpen}>
      <li className="flex items-center gap-2 text-white text-lg cursor-pointer py-1 ">
        <TbPointFilled className="opacity-70" /> Detailing
      </li>
    </Link>
    <Link href="/fleet-accounts" onClick={menuOpen}>
      <li className="flex items-center gap-2 text-white text-lg cursor-pointer py-1 ">
        <TbPointFilled className="opacity-70" /> Fleet Accounts
      </li>
    </Link>
  </ul>
)}

              
              <Link href="/gift-card" onClick={menuOpen}>
                <li className="flex items-center gap-2  text-white text-lg  tracking-wide cursor-pointer   transition duration-200">
                <Image src={'/Images/nav/gift.webp'} alt='' width={18} height={18} className="w-[23px] h-[23px] object-cover" />  Gift Cards
                </li>
              </Link>
              <Link href="/blogs" onClick={menuOpen}>
                <li className="flex items-center gap-2  text-white text-lg  tracking-wide cursor-pointer   transition duration-200">
                <Image src={'/Images/nav/blog.webp'} alt='' width={18} height={18} className="w-[25px] h-[25px] object-cover" />  Blogs
                </li>
              </Link>
              <Link href="/faq" onClick={menuOpen}>
                <li className="flex items-center gap-2  text-white text-lg  tracking-wide cursor-pointer   transition duration-200">
                <Image src={'/Images/nav/faq.webp'} alt='' width={18} height={18} className="w-[25px] h-[25px] object-cover" />  FAQ
                </li>
              </Link>
              <Link href="/contact" onClick={menuOpen}>
                <li className="flex items-center gap-2  text-white text-lg  tracking-wide cursor-pointer   transition duration-200">
                <Image src={'/Images/nav/contact.webp'} alt='' width={18} height={18} className="w-[25px] h-[25px] object-cover" />  Contact Us
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