'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

const ScrollToTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5   right-7 z-[9999] flex flex-col items-center justify-center transition-opacity duration-300 ${
        isScrolled ? "opacity-100" : "opacity-0"
      }`}

    >
      {/* Car Image */}
      <div className="absolute bottom-1 lg:bottom-0 w-24 h-24 lg:w-28 lg:h-28 ">


      <Image
        width={30}
        height={30}
        src="/Images/gotopcar.webp" // Make sure this path is correct
        alt="Go Top"
        className="zoom w-full h-[100%] object-cover  "
      />
            </div>
      {/* Go Top Text */}
      <span className="text-white font-medium text-md p-2 pt-12 lg:pt-14 rounded-lg bg-[#242224d5]">Go Top</span>
    </button>
  );
};

export default ScrollToTop;
