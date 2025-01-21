import React from "react";

function Bay() {
  return (
    <div className="my-24 mx-8 xl:m-24 rounded-xl px-8 py-12 bg-[#cbeeea] shadow-xl">
      <div className="flex items-start justify-between flex-col xl:flex-row gap-8 mx-auto">
        {/* Left Side */}
        <div className="w-full xl:w-[60%] space-y-6">
          <h3 className="montserrat text-lg lg:text-2xl font-bold text-center lg:text-left text-gray-800">
            Self-Serve Bays with Hot Water (Maximum Height 11'6)
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="bg-[#38bdf8] text-white rounded-full w-10 h-6 lg:w-8 lg:h-8 flex items-center justify-center font-semibold text-lg">1</span>
              <p className="text-gray-700 font-medium text-sm lg:text-lg">
                4 Vacuums – High-powered vacuums to keep your vehicle spotless.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-[#38bdf8] text-white rounded-full w-10 h-6 lg:w-8 lg:h-8 flex items-center justify-center font-semibold text-lg">2</span>
              <p className="text-gray-700 font-medium text-sm lg:text-lg">
                1 Shampoo + Spot Remover Vacuum – Perfect for deep cleaning.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-[#38bdf8] text-white rounded-full w-10 h-6 lg:w-8 lg:h-8 flex items-center justify-center font-semibold text-lg">3</span>
              <p className="text-gray-700 font-medium text-sm lg:text-lg">
                4th Bay is a dedicated Semi-Truck Bay – Specifically designed for large vehicles.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-[#38bdf8] text-white rounded-full w-10 h-6 lg:w-8 lg:h-8 flex items-center justify-center font-semibold text-lg">4</span>
              <p className="text-gray-700 font-medium text-sm lg:text-lg">
                Ample space for Boats, RVs, & Buses – Convenience for oversized vehicles.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full xl:w-[40%] flex items-center xl:justify-center gap-6 mt-8 lg:mt-0">
          <div className="p-6 rounded-lg bg-gray-100 shadow-lg flex flex-col items-center justify-center">
            <div className="w-24 h-24">
              <img
                src="/Images/bay/24-7.webp"
                alt="24/7 Service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-md font-semibold text-gray-800">
                24/7 Accessibility – Anytime convenience.
              </h3>
            </div>
          </div>
          <div className="p-6 rounded-lg bg-gray-100 shadow-lg flex flex-col items-center justify-center">
            <div className="w-24 h-24">
              <img
                src="/Images/bay/car.webp"
                alt="Clean Car"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-md font-semibold text-gray-800">
                Spotless Cleaning – Shine like new.
              </h3>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Bay;
