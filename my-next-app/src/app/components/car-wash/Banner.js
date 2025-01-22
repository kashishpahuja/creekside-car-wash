

"use client";
import Link from "next/link";
import React from "react";




export default function AlbumPage() {


 


  return (

    <div className="text-black bg-black">
            <main>
      <div
        className="relative h-[380px] lg:h-[480px] w-full"
        style={{
          backgroundImage: `url('/Images/services/carWraps.webp')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-70"
          aria-hidden="true"
        ></div>
        <div className="relative z-20 top-60 left-8 lg:left-16">
          <div className="flex flex-col gap-4 items-start  ">
            <h3 className="montserrat text-3xl lg:text-5xl text-white">
              
              Auto Care Wash
            </h3>
            <Link href={"/contact"} className="exo-bold p-2 lg:px-4 border-white border text-white hover:text-black hover:bg-white"
            >
              Book Now
            </Link>
         
          </div>
        </div>
      </div>

    
      </main>
    </div>

  );
}
