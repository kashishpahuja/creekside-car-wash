"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";

function Banner() {
  const vypaar = [
    { name: "CAR WASH SERVICE" },
    { name: "OIL UNDERCOATING SERVICE" },
    { name: "WINDOW TINTING SERVICE" },
    { name: "DETAILING SERVICE" },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [letters, setLetters] = useState(
    vypaar[currentTestimonial].name.split("")
  );
  const [isFlipping, setIsFlipping] = useState(false);

  // Change the testimonial every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setLetters([]);
      setTimeout(() => {
        setCurrentTestimonial((prevIndex) =>
          prevIndex === vypaar.length - 1 ? 0 : prevIndex + 1
        );
        setIsFlipping(false);

        // Ensure spaces are displayed
        const lettersArray = vypaar[currentTestimonial].name
          .split("")
          .map((char) => (char === " " ? "\u00A0" : char));
        setLetters(lettersArray);
      }, 2); // Delay for flipping effect (time it takes to reset)
    }, 4000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [currentTestimonial]);

  return (
    <div className="font-exo relative w-full overflow-hidden  ">
      <div className="flex items-center justify-center">
        <div className="w-full lg:w-1/2 bg-cover bg-center rounded-lg relative px-12">
          <div>
            <h3 className=" text-black text-2xl font-medium ">
              SOUTH SURREY & WHITE ROCK'S FAVOURITE
            </h3>
          </div>

          <div className="mt-4">
            <h3 className=" text-red-600 font-bold text-3xl lg:text-4xl ">
              {letters.map((letter, index) => (
                <span
                  key={index}
                  className={`flip-letter ${isFlipping ? "flipping" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </h3>
          </div>
          <div className=" mt-12">
          
            <Link
            href={"/contact"}
            className="px-4 py-4 bg-black hover:bg-red-600 text-white hover:text-white text-lg font-semibold rounded-lg"
          >
            Book Now
          </Link>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full lg:w-1/2  ">
          {/* <video src="/Images/bannerVideo.mp4" muted autoPlay loop className="w-full h-full"></video> */}
          <Image
            width={400}
            height={400}
            src="/Images/bannerBG2.jpg"
            alt=""
            className="w-full h-[100%] object-cover  "
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
