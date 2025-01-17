"use client";
import React from "react";

function Producer() {
  return (
    <div className="py-12 mx-4 lg:mx-16 text-black">
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        {/* CLEAN Section */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-28 h-28">
            <img src="/Images/circle/clean.webp" alt="Clean" />
          </div>
          <div className="text-center">
            <h3 className="montserrat text-xl font-semibold text-[#ee0a00]">
              CLEAN
            </h3>
            <p className="exo mt-2 text-gray-600 text-sm lg:text-md font-semibold">
              Your car deserves a spotless shine inside and out.
            </p>
          </div>
        </div>

        {/* DETAIL Section */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-28 h-28">
            <img src="/Images/circle/detail.webp" alt="Detail" />
          </div>
          <div className="text-center">
            <h3 className="montserrat text-xl font-semibold text-[#ee0a00]">
              DETAIL
            </h3>
            <p className="exo mt-2 text-gray-600 text-sm lg:text-md font-semibold">
              Precision detailing for every inch of your car.
            </p>
          </div>
        </div>

        {/* SHINE Section */}
        <div className="flex flex-col items-center justify-center ">
          <div className="w-32 h-32">
            <img src="/Images/circle/shine.webp" alt="Shine" />
          </div>
          <div className="text-center">
            <h3 className="montserrat text-xl font-semibold text-[#ee0a00]">
              SHINE
            </h3>
            <p className="exo mt-2 text-gray-600 text-sm lg:text-md font-semibold">
              Keep your car shining bright, turning heads wherever you go.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Producer;
