

"use client";
import Link from "next/link";
import React from "react";




export default function AlbumPage({title}) {
  return (

    <div className="text-black bg-black ">
            <main>
      <div
        className="relative h-[380px] lg:h-[500px] w-full "
        style={{
          backgroundImage: `url('/Images/detailing.webp')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-70"
          aria-hidden="true"
        ></div>
        <div className="relative z-20 flex items-center justify-center h-[100%]">
          <div className="flex flex-col gap-4 items-start  ">
            <h1 className="montserrat text-2xl lg:text-5xl text-white">
              
           Creekside Detailing
            </h1>
            <Link href={"/contact"} className="exo-bold p-2 lg:px-4 py-3 border border-white mx-auto text-white rounded-xl  hover:text-black hover:bg-white"
            >
              <div className="montserrat text-lg lg:text-xl"> Book Now
                </div>
            </Link>
         
          </div>
        </div>
      </div>





    
      </main>
    </div>

  );
}
