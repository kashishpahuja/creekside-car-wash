"use client";
import React from "react";

function Producer() {
  return (
    <div className="mx-8 md:mx-16 text-black my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 xl:gap-4">
        {/* Feature 1: Flexible Washing Options */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-20 h-20 xl:w-28 xl:h-28">
            <img className="w-full h-[100%] object-cover" src="/Images/circle/1.webp" alt="Flexible Washing Options" />
          </div>
          <div className="text-center">
            <h3 className="montserrat text-xl font-semibold text-gray-800">
              FLEXIBLE WASHING OPTIONS
            </h3>
            <p className="exo mt-2 text-gray-600 text-sm lg:text-md font-semibold">
              Enjoy 24/7 self-serve bays with hot water, perfect for cars, RVs, and even semi-trucks with a maximum height of 11'6".
            </p>
          </div>
        </div>

        {/* Feature 2: Premium Equipment */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-20 h-20 xl:w-28 xl:h-28">
            <img className="w-full h-[100%] object-cover" src="/Images/circle/3.webp" alt="Premium Equipment" />
          </div>
          <div className="text-center">
            <h3 className="montserrat text-xl font-semibold text-gray-800">
              PREMIUM EQUIPMENT
            </h3>
            <p className="exo mt-2 text-gray-600 text-sm lg:text-md font-semibold">
              Four powerful vacuums and a dedicated shampoo + spot remover vacuum for a spotless interior.
            </p>
          </div>
        </div>

        {/* Feature 3: Comprehensive Packages */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-20 h-20 xl:w-28 xl:h-28">
            <img className="w-full h-[100%] object-cover" src="/Images/circle/2.webp" alt="Comprehensive Packages" />
          </div>
          <div className="text-center">
            <h3 className="montserrat text-xl font-semibold text-gray-800">
              COMPREHENSIVE PACKAGES
            </h3>
            <p className="exo mt-2 text-gray-600 text-sm lg:text-md font-semibold">
              Choose from Regular, Deluxe, Premium, or The Works – all at affordable prices starting at just $12.99.
            </p>
          </div>
        </div>

   
      </div>
    </div>
  );
}

export default Producer;
