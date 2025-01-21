"use client";
import React from "react";

function Producer() {
  return (
    <div className=" mx-4 lg:mx-16 text-black my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* CLEAN Section */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-20 h-20 xl:w-28 xl:h-28">
            <img className='w-full h-[100%] object-cover' src="/Images/circle/1.webp" className="text-red-600" alt="Clean" />
          </div>
          <div className="text-center">
            <h3 className="montserrat text-xl font-semibold text-gray-800 ">
              CLEAN
            </h3>
            <p className="exo mt-2 text-gray-600 text-sm lg:text-md font-semibold">
              Your car deserves a spotless shine inside and out.
            </p>
          </div>
        </div>
            {/* CLEAN Section */}
            <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-20 h-20 xl:w-28 xl:h-28">
            <img className='w-full h-[100%] object-cover' src="/Images/circle/2.webp" className="text-red-600" alt="Clean" />
          </div>
          <div className="text-center">
            <h3 className="montserrat text-xl font-semibold text-gray-800 ">
              SHINE
            </h3>
            <p className="exo mt-2 text-gray-600 text-sm lg:text-md font-semibold">
              Your car deserves a spotless shine inside and out.
            </p>
          </div>
        </div>

        {/* DETAIL Section */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-20 h-20 xl:w-28 xl:h-28">
            <img className='w-full h-[100%] object-cover' src="/Images/circle/3.webp" className="text-red-600" alt="Detail" />
          </div>
          <div className="text-center">
            <h3 className="montserrat text-xl font-semibold text-gray-800 ">
              DETAIL
            </h3>
            <p className="exo mt-2 text-gray-600 text-sm lg:text-md font-semibold">
              Precision detailing for every inch of your car.
            </p>
          </div>
        </div>

        {/* SHINE Section */}
        <div className="flex flex-col items-center justify-center ">
          <div className="w-24 h-24 xl:w-32 xl:h-32">
            <img className='w-full h-[100%] object-cover' src="/Images/circle/4.webp" className="text-red-600" alt="Shine" />
          </div>
          <div className="text-center">
            <h3 className="montserrat text-xl font-semibold text-gray-800 ">
              PROTECT
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
