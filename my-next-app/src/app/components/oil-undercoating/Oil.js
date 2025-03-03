import Link from "next/link";
import React from "react";

function Oil() {
  return (
    <div
      className="relative z-20 py-12 h-[800px] flex items-center justify-start"
      style={{
        backgroundImage: `url('/Images/oil/oilBG.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative w-full max-w-5xl px-6 md:px-12 xl:px-32 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start text-white p-8 rounded-xl">
        <div className="w-full text-center md:text-left">
          <h3 className="montserrat text-2xl lg:text-5xl font-bold text-white">
            Top-Quality Oil Undercoating In Wakefield, MA
          </h3>
          <p className="font-medium mt-6 text-gray-100 text-sm md:text-lg lg:text-xl">
            Give your vehicle&apos;s underside an extra layer of protection by scheduling an oil undercoating at AC Auto. We only use top-quality oil-based undercoat products that can efficiently protect your vehicle against rust, corrosion, and abrasions. Our technicians are highly trained to ensure the job is done right — allowing you to give your vehicle the extra protection it deserves.
            <br /> <br />
            <Link
              href={'/contact'}
              className="exo cursor-pointer text-md lg:text-xl hover:underline text-red-500"
            >
              Call Creekside Car Wash
            </Link>
            {" "} today to schedule an oil-based undercoating for cars.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Oil;
