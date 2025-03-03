"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

  // Scroll to Top Function with Animation
  const scrollToTop = () => {
    setIsAnimating(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => setIsAnimating(false), 600); // Reset after animation
    }, 500);
  };

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-5 right-7 z-[9999] flex flex-col items-center justify-center transition-opacity duration-300"
          onClick={scrollToTop}
        >
          {/* Car Image */}
          <motion.div
            className="absolute bottom-12 w-24 h-24 lg:w-28 lg:h-28"
            animate={isAnimating ? { y: -800, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          >
            <Image
              width={30}
              height={30}
              src="/Images/gotop.webp" // Ensure correct path
              alt="Go Top"
              className="zoom w-full h-[100%] object-cover"
            />
          </motion.div>
          {/* Go Top Text */}
          <span className="text-white font-medium text-md p-2 pt-12 lg:pt-14 rounded-lg bg-[#242224d5]">
            Go Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
