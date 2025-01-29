'use client';
import React from "react";


function Producer() {

  return (
    <div className="mx-4 lg:mx-16 text-black my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* CLEAN Section */}
        <div className="flex flex-col items-center justify-center gap-4" >
          <div className="zoom w-20 h-20 xl:w-28 xl:h-28">
            <img className='w-full h-[100%] object-cover' src="/Images/gif/car-wash.gif" alt="Clean" />
          </div>
          <div className="text-center">
            <h3 className="montserrat text-2xl font-semibold text-black">CLEAN</h3>
            <p className="exo mt-2 text-gray-600 text-sm lg:text-lg font-semibold">
              Your car deserves a spotless shine inside and out.
            </p>
          </div>
        </div>

        {/* SHINE Section */}
        <div className="flex flex-col items-center justify-center gap-4"  >
          <div className="zoom w-20 h-20 xl:w-28 xl:h-28 ">
            <img className='w-full h-[100%] object-cover' src="/Images/gif/shine.gif" alt="Shine" />
          </div>
          <div className="text-center">
            <h3 className="montserrat text-2xl font-semibold text-black">SHINE</h3>
            <p className="exo mt-2 text-gray-600 text-sm lg:text-lg font-semibold">
              Your car deserves a spotless shine inside and out.
            </p>
          </div>
        </div>

        {/* DETAIL Section */}
        <div className="flex flex-col items-center justify-center gap-4" >
          <div className="zoom w-20 h-20 xl:w-28 xl:h-28">
            <img className='w-full h-[100%] object-cover' src="/Images/gif/detail.gif" alt="Detail" />
          </div>
          <div className="text-center">
            <h3 className="montserrat text-2xl font-semibold text-black">DETAIL</h3>
            <p className="exo mt-2 text-gray-600 text-sm lg:text-lg font-semibold">
              Precision detailing for every inch of your car.
            </p>
          </div>
        </div>

        {/* PROTECT Section */}
        <div className="flex flex-col items-center justify-center" >
          <div className="zoom w-20 h-20 xl:w-28 xl:h-28">
            <img className='w-full h-[100%] object-cover' src="/Images/gif/protect.gif" alt="Protect" />
          </div>
          <div className="text-center">
            <h3 className="montserrat text-2xl font-semibold text-black">PROTECT</h3>
            <p className="exo mt-2 text-gray-600 text-sm lg:text-lg font-semibold">
              Keep your car shining bright, turning heads wherever you go.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Producer;
