// 'use client';
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import Popup from "./Popup";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   // Add scroll event listener to check scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     // Listen to the scroll event
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup listener on unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//      <div
//       className={`absolute top-0 left-0 w-full z-[99999] transition-opacity duration-1000 ease-in-out overflow-hidden`}
//       style={{
//         height: isScrolled ? "120px" : "120px", // Dynamic height
//         backgroundColor: isScrolled ? "white" : "transparent",
//         color: isScrolled ? "black" : "white",
//         boxShadow: isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
//         position: isScrolled ? "sticky" : "absolute",
//         transform: isScrolled ? "translateY(0)" : "translateY(0%)", // Smooth transition on scroll
//       }}
//     >
//       <div className="text-lg font-medium flex items-center justify-between px-6 lg:px-20 h-full">
//         {/* Logo */}
//         <div className="w-48 h-48">
//           <Link href="/" className="">
//             <img
//               src="/Images/logo.webp"
//               alt="Logo"
//               className="object-contain"
//               style={{ width: "100%", height: "100%" }}
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center">
//           <ul className="flex items-center justify-center gap-8 lg:gap-16 text-md">
//             <li className="transition duration-300">
//               <Link href={"/"}>Home</Link>
//             </li>
//             <li className="transition duration-300">
//               <Link href={"/about"}>About Us</Link>
//             </li>
//             <li
//               className="relative group transition duration-300"
//               onMouseEnter={() => setIsDropdownOpen(true)}
//             >
//               <Link href={"/services"}>Services</Link>
//               {isDropdownOpen && (
//                 <div
//                   className="absolute top-full left-2 mt-6 w-56 bg-white text-black"
//                   onMouseLeave={() => setIsDropdownOpen(false)}
//                 >
//                   <ul className="flex flex-col">
//                     <li className="hover:bg-gray-200 border-b px-4 py-2">
//                       <Link href="/service1">Auto Wash</Link>
//                     </li>
//                     <li className="hover:bg-gray-200 border-b px-4 py-2">
//                       <Link href="/service2">Car Wash</Link>
//                     </li>
//                     <li className="hover:bg-gray-200 border-b px-4 py-2">
//                       <Link href="/service3">Detailing</Link>
//                     </li>
//                     <li className="hover:bg-gray-200 border-b px-4 py-2">
//                       <Link href="/service3">Window Tinting</Link>
//                     </li>
//                     <li className="hover:bg-gray-200 border-b px-4 py-2">
//                       <Link href="/service3">Paint Protection Film</Link>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </li>
//             <li className="transition duration-300">
//               <Link href="/contact">Contact Us</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-2xl focus:outline-none"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Popup */}
//       {menuOpen && <Popup menuOpen={toggleMenu} />}
//     </div>
//   );
// }

// export default Navbar;






'use client';
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Popup from "./Popup";
import Image from "next/image";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Add scroll event listener to check scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Listen to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
className={`absolute top-0 left-0 w-full z-[99999] bg-transparent text-white md:transition-opacity duration-500 ease-in-out h-[100px] 2xl:h-[120px]`}
style={{
  visibility: isScrolled ? "hidden" : "visible",
  // height: "100px", // Fixed height
  // backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(0, 0, 0, 0.20)", // Opacity effect
  // color: isScrolled ? "#272323" : "white",
  // boxShadow: isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
  // position: isScrolled ? "fixed" : "absolute",
  // transform: "translateY(0%)", // Keeps it stable
  // transition: "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, color 0.3s ease-in-out",
}}

>
      <div className="text-lg font-medium flex items-center justify-between px-4 xl:px-12 h-full 2xl:mx-8">
        {/* Logo */}
        <div className="w-44 lg:w-40 h-20 2xl:w-56 overflow-hidden">
          <Link href="/" className="">
            <Image
             width={400} height={400} 
             src={isScrolled ? "/Images/newlogo.webp" : "/Images/LogoWhite.webp"}
      

              alt="Logo"
              className="object-contain w-full h-[100%]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center">
          <ul className=" flex items-center justify-center gap-8  text-md xl:text-md  2xl:text-xl  ">
            <li className="zoom py-6 px-2" >
              <Link className="text-md 2xl:text-xl" href={"/"}>Home</Link>
            </li>
            <li className="zoom  py-6 px-2">
              <Link className="text-md 2xl:text-xl" href={"/about"}>About Us</Link>
            </li>
            <li
              className="zoom relative group text-md 2xl:text-xl  transition duration-300  py-6 px-2 flex items-center cursor-pointer   "
              onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}
             
            >
             Services{" "} <RiArrowDropDownLine />
             {/* {isDropdownOpen && (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="absolute top-full left-0 w-64 bg-white text-black shadow-lg"
    onMouseLeave={() => setIsDropdownOpen(false)}
  >
    <ul className="flex flex-col">
      <li className="hover:text-red-600 hover:bg-gray-200 border-b px-4 py-4">
        <Link className="text-md" href="/car-wash">Car Wash</Link>
      </li>
      <li className="hover:text-red-600 hover:bg-gray-200 border-b px-4 py-4">
        <Link className="text-md" href="/oil-undercoating">Oil Undercoating</Link>
      </li>
      <li className="hover:text-red-600 hover:bg-gray-200 border-b px-4 py-4">
        <Link className="text-md" href="/detailing">Detailing</Link>
      </li>
      <li className="hover:text-red-600 hover:bg-gray-200 border-b px-4 py-4">
        <Link className="text-md" href="/window-tinting">Window Tinting</Link>
      </li> 
    </ul>
  </motion.div>
)} */}

{isDropdownOpen && (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="absolute top-full left-0 w-64 bg-[#1f1e1f] text-gray-100 font-semibold  rounded-lg"
    onMouseLeave={() => setIsDropdownOpen(false)}
  >
    <ul className="flex flex-col">
      <li className="hover:bg-[#302d30f5] rounded-lg border-b border-[#49474936] px-4 py-4 transition-all duration-200">
        <Link className=" text-md font-medium" href="/car-wash">Car Wash</Link>
      </li>
      <li className="hover:bg-[#302d30f5] rounded-lg border-b border-[#49474936] px-4 py-4 transition-all duration-200">
        <Link className=" text-md font-medium" href="/oil-undercoating">Oil Undercoating</Link>
      </li>
      <li className="hover:bg-[#302d30f5] rounded-lg border-b border-[#49474936] px-4 py-4 transition-all duration-200">
        <Link className=" text-md font-medium" href="/detailing">Detailing</Link>
      </li>
      <li className="hover:bg-[#302d30f5] rounded-lg px-4 py-4 transition-all duration-200">
        <Link className="  text-md font-medium" href="/fleet-accounts">Fleet Accounts</Link>
      </li> 
    </ul>
  </motion.div>
)}


            </li>
            <li className="zoom   py-6 px-2">
              <Link href="/gift-card" className="text-md 2xl:text-xl">Gift Cards</Link>
            </li>
            <li className=" zoom py-6 px-2">
              <Link href="/blogs" className="text-md 2xl:text-xl">Blogs</Link>
            </li>
            <li className=" zoom py-6 px-2">
              <Link href="/faq" className="text-md 2xl:text-xl">FAQ</Link>
            </li>
            <li className=" zoom py-6 px-2">
              <Link href="/contact" className="text-md 2xl:text-xl">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="xl:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-white focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      {menuOpen && <Popup menuOpen={toggleMenu} />}
    </div>
  );
}

export default Navbar;
